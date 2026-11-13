(() => {
  'use strict';

  const strategies = window.strategyData;
  const cards = document.querySelector('#strategy-cards');
  const selector = document.querySelector('#selector');
  const detail = document.querySelector('#strategy-detail');
  const money = new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const whole = new Intl.NumberFormat('en-US');
  const maxMagnitude = Math.max(...strategies.flatMap(strategy => Object.values(strategy.frames)
    .flatMap(values => values.quarters.map(row => Math.abs(row.pnl)))));
  const chartLimit = Math.ceil(maxMagnitude / 2000) * 2000;
  let active = strategies[0];
  let frame = active.anchor;
  let selectedQuarter = 0;
  const pageSize = 6;
  let visibleCount = pageSize;
  const search = document.querySelector('#strategy-search');
  const familyFilter = document.querySelector('#family-filter');
  const sortOrder = document.querySelector('#sort-order');
  const showMore = document.querySelector('#show-more');
  const resetFilters = document.querySelector('#reset-filters');
  const detailPicker = document.querySelector('#detail-picker');

  function signed(value) {
    const prefix = value < 0 ? '−' : value > 0 ? '+' : '';
    return prefix + money.format(Math.abs(value));
  }

  function barStyle(pnl) {
    return `--top:${pnl >= 0 ? (chartLimit - pnl) / (2 * chartLimit) * 100 : 50}%;--height:${Math.abs(pnl) / (2 * chartLimit) * 100}%`;
  }

  function card(strategy, index) {
    const metrics = strategy.frames[strategy.anchor];
    const userConfirmed = strategy.status === '使用者確認';
    return `<article class="strategy-card" data-user="${userConfirmed}">
      <div class="card-top"><span class="card-index">${String(index + 1).padStart(2, '0')}</span><div class="card-meta"><span>${strategy.family}</span><span class="pill ${userConfirmed ? 'amber' : ''}">${strategy.status} · ${strategy.anchor}</span></div></div>
      <h3>${strategy.name}</h3><p class="version">${strategy.version}</p><p class="summary">${strategy.summary}</p>
      <div class="card-primary"><span class="metric-label">平均每季已實現損益 · USD</span><strong>${signed(metrics.mean)}</strong></div>
      <div class="mini-wrap"><div class="mini-plot" aria-hidden="true">${metrics.quarters.map(row => `<span><i class="${row.pnl < 0 ? 'loss' : ''}" style="${barStyle(row.pnl)}"></i></span>`).join('')}</div><div class="mini-caption"><span>2023 — 2025</span><span>季度損益 · 同比例尺</span></div></div>
      <div class="card-metrics">
        <div><strong>${metrics.wins} / 12</strong><span>獲利季度</span></div>
        <div><strong>${metrics.cv.toFixed(4)}</strong><span>變異係數</span></div>
      </div>
      <a class="card-link" data-strategy="${strategy.slug}" href="#quarters" aria-label="看${strategy.name}的季度明細">看季度明細 <span aria-hidden="true">↗</span></a>
    </article>`;
  }

  function renderDetail() {
    const values = active.frames[frame];
    const cv = values.cv === null ? '不適用' : values.cv.toFixed(4);
    selector.querySelectorAll('button').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.strategy === active.slug));
    });
    detailPicker.value = active.slug;
    detail.innerHTML = `<div class="detail-head">
        <div><h3>${active.name}</h3><p class="version">${active.version}</p></div>
        <div class="frames" role="group" aria-label="切換時間週期">${Object.keys(active.frames).map(label => `<button type="button" data-frame="${label}" aria-pressed="${label === frame}">${label}</button>`).join('')}</div>
      </div>
      <div class="metrics">
        <div><strong class="${values.mean < 0 ? 'loss-text' : ''}">${signed(values.mean)}</strong><span>平均每季 USD</span></div>
        <div><strong>${values.wins} / 12</strong><span>獲利季度</span></div>
        <div><strong>${cv}</strong><span>變異係數</span></div>
        <div><strong class="${values.worst < 0 ? 'loss-text' : 'gain-text'}">${signed(values.worst)}</strong><span>最差一季 USD</span></div>
      </div>
      <figure>
        <figcaption class="chart-head"><strong>${frame}線季度已實現損益（USD）</strong><span class="pill ${values.passed ? '' : 'amber'}">${values.passed ? '達到數字門檻' : '未達數字門檻'}</span></figcaption>
        <div class="chart-tools"><div class="chart-legend" aria-hidden="true"><span>獲利</span><span>虧損</span></div><p class="chart-hint">點選季度查看數據 · 全策略同一比例尺</p></div>
        <div class="chart-body"><div class="plot-scale" aria-hidden="true"></div><div class="plot" role="group" aria-label="選擇季度，查看數據">${values.quarters.map((row, index) => `<button type="button" class="bar-slot" data-quarter="${index}" aria-pressed="${index === selectedQuarter}" aria-label="${row.quarter}，已實現損益 ${signed(row.pnl)} 美元"><span class="bar ${row.pnl < 0 ? 'loss' : ''}" style="${barStyle(row.pnl)}"></span></button>`).join('')}</div></div>
        <div class="quarter-labels" aria-hidden="true">${values.quarters.map(row => `<span>${row.quarter.slice(4)}</span>`).join('')}</div><div class="plot-labels" aria-hidden="true"><span>2023</span><span>2024</span><span>2025</span></div>
        <div class="quarter-readout" aria-live="polite" aria-atomic="true"></div>
      </figure>
      <div class="rules">
        <div><h4>進場</h4><p>${active.entry}</p></div>
        <div><h4>出場</h4><p>${active.exit}</p></div>
        <div class="risk"><h4>執行與風險</h4><p>${active.risk}</p></div>
      </div>
      <details><summary>展開 12 季數據</summary><div class="table-wrap" role="region" aria-label="季度數據表" tabindex="0"><table aria-label="${active.name} ${frame}線季度數據">
        <thead><tr><th scope="col">季度</th><th scope="col">平倉筆數</th><th scope="col">已實現 USD</th><th scope="col">期末浮動 USD</th><th scope="col">已平倉權益最大回撤</th></tr></thead>
        <tbody>${values.quarters.map(row => `<tr><th scope="row">${row.quarter}</th><td>${whole.format(row.trades)}</td><td class="${row.pnl < 0 ? 'loss-text' : ''}">${signed(row.pnl)}</td><td>${signed(row.floating)}</td><td>${row.drawdown.toFixed(2)}%</td></tr>`).join('')}</tbody>
      </table></div></details>
      <a class="source-link" href="${active.source}" target="_blank" rel="noopener noreferrer">查看 FMZ 原始策略 ↗</a>`;
    const axis = [chartLimit, chartLimit / 2, 0, -chartLimit / 2, -chartLimit];
    detail.querySelector('.plot-scale').innerHTML = axis.map(value => `<span>${whole.format(value)}</span>`).join('');
    updateQuarter(selectedQuarter);
  }

  function updateQuarter(index) {
    selectedQuarter = index;
    const row = active.frames[frame].quarters[index];
    detail.querySelectorAll('[data-quarter]').forEach(button => {
      button.setAttribute('aria-pressed', String(Number(button.dataset.quarter) === index));
    });
    detail.querySelector('.quarter-readout').innerHTML = `<div><span>選取季度</span><strong class="readout-quarter">${row.quarter}</strong></div><div><span>已實現損益 · USD</span><strong class="${row.pnl < 0 ? 'loss-text' : 'gain-text'}">${signed(row.pnl)}</strong></div><div><span>平倉筆數</span><strong>${whole.format(row.trades)}</strong></div><div><span>已平倉權益最大回撤</span><strong>${row.drawdown.toFixed(2)}%</strong></div>`;
  }

  function selectStrategy(slug) {
    active = strategies.find(strategy => strategy.slug === slug);
    frame = active.anchor;
    renderDetail();
  }

  function renderCards() {
    const query = search.value.trim().toLocaleLowerCase();
    const filtered = strategies.filter(strategy => {
      const haystack = [strategy.name, strategy.id, strategy.family, strategy.version, strategy.summary, strategy.entry, strategy.exit].join(' ').toLocaleLowerCase();
      return (!query || haystack.includes(query)) && (!familyFilter.value || strategy.family === familyFilter.value);
    });
    const metric = sortOrder.value;
    if (metric !== 'catalog') filtered.sort((a, b) => {
      const left = a.frames[a.anchor][metric];
      const right = b.frames[b.anchor][metric];
      return metric === 'cv' ? (left ?? Infinity) - (right ?? Infinity) : right - left;
    });
    cards.innerHTML = filtered.slice(0, visibleCount).map(strategy => card(strategy, strategies.indexOf(strategy))).join('') || '<p class="empty-state">沒有符合條件的策略。試試其他關鍵字，或清除篩選。</p>';
    document.querySelector('#result-count').textContent = `顯示 ${Math.min(visibleCount, filtered.length)} / ${filtered.length} 種策略 · 圖鑑共 ${strategies.length} 種`;
    showMore.hidden = visibleCount >= filtered.length;
    resetFilters.hidden = !query && !familyFilter.value && metric === 'catalog';
  }
  document.querySelectorAll('[data-strategy-count]').forEach(element => {
    element.textContent = element.dataset.padded ? String(strategies.length).padStart(2, '0') : strategies.length;
  });
  [...new Set(strategies.map(strategy => strategy.family))].forEach(family => {
    const option = document.createElement('option');
    option.value = family;
    option.textContent = family;
    familyFilter.append(option);
  });
  function filterChanged() { visibleCount = pageSize; renderCards(); }
  search.addEventListener('input', filterChanged);
  familyFilter.addEventListener('change', filterChanged);
  sortOrder.addEventListener('change', filterChanged);
  showMore.addEventListener('click', () => {
    const firstNewIndex = visibleCount;
    visibleCount += pageSize;
    renderCards();
    if (showMore.hidden) cards.querySelectorAll('.card-link')[firstNewIndex]?.focus({ preventScroll: true });
  });
  resetFilters.addEventListener('click', () => {
    search.value = ''; familyFilter.value = ''; sortOrder.value = 'catalog';
    filterChanged(); search.focus({ preventScroll: true });
  });
  detailPicker.innerHTML = strategies.map(strategy => `<option value="${strategy.slug}">${strategy.name} · ${strategy.anchor}</option>`).join('');
  detailPicker.addEventListener('change', () => selectStrategy(detailPicker.value));
  const usePicker = strategies.length > 6;
  document.querySelector('#detail-picker-label').hidden = !usePicker;
  selector.hidden = usePicker;
  renderCards();
  selector.innerHTML = strategies.map((strategy, index) => `<button type="button" data-strategy="${strategy.slug}"><span class="tab-index" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span>${strategy.name}</button>`).join('');
  selector.addEventListener('click', event => {
    const button = event.target.closest('button[data-strategy]');
    if (button) selectStrategy(button.dataset.strategy);
  });
  cards.addEventListener('click', event => {
    const link = event.target.closest('a[data-strategy]');
    if (link) selectStrategy(link.dataset.strategy);
  });
  detail.addEventListener('click', event => {
    const quarter = event.target.closest('button[data-quarter]');
    if (quarter) return updateQuarter(Number(quarter.dataset.quarter));
    const button = event.target.closest('button[data-frame]');
    if (!button) return;
    frame = button.dataset.frame;
    renderDetail();
    detail.querySelector('.frames [aria-pressed="true"]').focus({ preventScroll: true });
  });
  detail.addEventListener('keydown', event => {
    if (!event.target.matches('[data-quarter]')) return;
    let next = selectedQuarter;
    if (event.key === 'ArrowRight') next = Math.min(11, selectedQuarter + 1);
    else if (event.key === 'ArrowLeft') next = Math.max(0, selectedQuarter - 1);
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = 11;
    else return;
    event.preventDefault();
    updateQuarter(next);
    detail.querySelector(`[data-quarter="${next}"]`).focus({ preventScroll: true });
  });
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        document.querySelectorAll('nav a').forEach(link => {
          if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-15% 0px -65% 0px' });
    document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
  }
  renderDetail();
})();
