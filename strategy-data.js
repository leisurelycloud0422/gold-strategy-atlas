window.strategyData = [
  {
    "id": "fmz-p00686",
    "slug": "turtle",
    "name": "海龜通道突破",
    "family": "通道突破",
    "anchor": "15分",
    "version": "20／10 通道・前根 ATR",
    "status": "批次確認",
    "summary": "用前 20 根 K 線的高點判斷突破，再用 10 根低點與 ATR 管理多單出場。",
    "entry": "收盤達前 20 根最高價，下一根實際開盤進多。不加倉。",
    "exit": "收盤達前 10 根最低價，或低於前一根收盤減前一根 ATR20，下一根開盤平倉。",
    "risk": "以訊號當時的價格線估算初始部位。收盤判斷與次根開盤之間的跳空，可能讓實際虧損超過計畫風險。",
    "source": "https://www.fmz.com/strategy/429512",
    "frames": {
      "5分": {
        "total": 8446.98,
        "mean": 703.92,
        "sd": 1981.89,
        "cv": 2.8155,
        "wins": 7,
        "worst": -3609.31,
        "passed": false,
        "quarters": [
          {
            "quarter": "2023Q1",
            "trades": 364,
            "pnl": 2018.62,
            "floating": 0.0,
            "drawdown": 19.4
          },
          {
            "quarter": "2023Q2",
            "trades": 345,
            "pnl": -139.89,
            "floating": 0.0,
            "drawdown": 14.9
          },
          {
            "quarter": "2023Q3",
            "trades": 293,
            "pnl": -3609.31,
            "floating": 0.0,
            "drawdown": 41.25
          },
          {
            "quarter": "2023Q4",
            "trades": 358,
            "pnl": 4905.04,
            "floating": 0.0,
            "drawdown": 27.31
          },
          {
            "quarter": "2024Q1",
            "trades": 345,
            "pnl": -817.32,
            "floating": 791.91,
            "drawdown": 29.73
          },
          {
            "quarter": "2024Q2",
            "trades": 357,
            "pnl": 2059.45,
            "floating": 0.0,
            "drawdown": 13.95
          },
          {
            "quarter": "2024Q3",
            "trades": 401,
            "pnl": -235.88,
            "floating": 98.31,
            "drawdown": 23.41
          },
          {
            "quarter": "2024Q4",
            "trades": 367,
            "pnl": -628.68,
            "floating": 0.0,
            "drawdown": 38.07
          },
          {
            "quarter": "2025Q1",
            "trades": 378,
            "pnl": 801.62,
            "floating": 0.0,
            "drawdown": 21.58
          },
          {
            "quarter": "2025Q2",
            "trades": 364,
            "pnl": 1264.5,
            "floating": 11.71,
            "drawdown": 15.27
          },
          {
            "quarter": "2025Q3",
            "trades": 382,
            "pnl": 1799.62,
            "floating": 34.08,
            "drawdown": 26.24
          },
          {
            "quarter": "2025Q4",
            "trades": 376,
            "pnl": 1029.21,
            "floating": 0.0,
            "drawdown": 14.59
          }
        ]
      },
      "15分": {
        "total": 16376.73,
        "mean": 1364.73,
        "sd": 1663.55,
        "cv": 1.219,
        "wins": 10,
        "worst": -875.27,
        "passed": true,
        "quarters": [
          {
            "quarter": "2023Q1",
            "trades": 120,
            "pnl": 399.69,
            "floating": 0.0,
            "drawdown": 9.18
          },
          {
            "quarter": "2023Q2",
            "trades": 121,
            "pnl": -875.27,
            "floating": 0.0,
            "drawdown": 21.52
          },
          {
            "quarter": "2023Q3",
            "trades": 115,
            "pnl": 48.79,
            "floating": 0.0,
            "drawdown": 12.34
          },
          {
            "quarter": "2023Q4",
            "trades": 108,
            "pnl": 4793.74,
            "floating": 0.0,
            "drawdown": 5.84
          },
          {
            "quarter": "2024Q1",
            "trades": 127,
            "pnl": -465.95,
            "floating": 0.0,
            "drawdown": 18.04
          },
          {
            "quarter": "2024Q2",
            "trades": 112,
            "pnl": 2703.94,
            "floating": 0.0,
            "drawdown": 4.3
          },
          {
            "quarter": "2024Q3",
            "trades": 139,
            "pnl": 1084.84,
            "floating": 0.0,
            "drawdown": 12.04
          },
          {
            "quarter": "2024Q4",
            "trades": 126,
            "pnl": 953.4,
            "floating": 87.79,
            "drawdown": 7.41
          },
          {
            "quarter": "2025Q1",
            "trades": 131,
            "pnl": 783.95,
            "floating": 0.0,
            "drawdown": 13.93
          },
          {
            "quarter": "2025Q2",
            "trades": 117,
            "pnl": 2037.77,
            "floating": 217.59,
            "drawdown": 11.13
          },
          {
            "quarter": "2025Q3",
            "trades": 117,
            "pnl": 4069.28,
            "floating": 93.03,
            "drawdown": 7.48
          },
          {
            "quarter": "2025Q4",
            "trades": 131,
            "pnl": 842.54,
            "floating": 0.0,
            "drawdown": 8.56
          }
        ]
      }
    }
  },
  {
    "id": "fmz-p00443",
    "slug": "ema",
    "name": "EMA 交叉與事件低點",
    "family": "均線交叉",
    "anchor": "5分",
    "version": "EMA25／EMA100・3 倍距離目標",
    "status": "批次確認",
    "summary": "快均線上穿慢均線後做多，以最近一根符合條件的陰線低點定義停損。",
    "entry": "EMA25 上穿 EMA100 後，於下一根實際開盤進多。不加倉。",
    "exit": "停損採最近一根收盤低於 EMA100 的陰線低點。目標為訊號收盤加上訊號收盤到停損距離的三倍。",
    "risk": "目標以訊號收盤計算，實際成交後的報酬風險比會受開盤價影響。本次部位分配下，原碼的保本委託未生效。",
    "source": "https://www.fmz.com/strategy/475627",
    "frames": {
      "5分": {
        "total": 14529.91,
        "mean": 1210.83,
        "sd": 1519.97,
        "cv": 1.2553,
        "wins": 11,
        "worst": -2455.52,
        "passed": true,
        "quarters": [
          {
            "quarter": "2023Q1",
            "trades": 93,
            "pnl": 137.29,
            "floating": 0.0,
            "drawdown": 21.94
          },
          {
            "quarter": "2023Q2",
            "trades": 79,
            "pnl": 427.07,
            "floating": 192.2,
            "drawdown": 7.86
          },
          {
            "quarter": "2023Q3",
            "trades": 85,
            "pnl": -2455.52,
            "floating": 0.0,
            "drawdown": 28.94
          },
          {
            "quarter": "2023Q4",
            "trades": 74,
            "pnl": 1614.92,
            "floating": 0.0,
            "drawdown": 6.7
          },
          {
            "quarter": "2024Q1",
            "trades": 88,
            "pnl": 1888.35,
            "floating": 0.0,
            "drawdown": 6.37
          },
          {
            "quarter": "2024Q2",
            "trades": 85,
            "pnl": 4246.03,
            "floating": 0.0,
            "drawdown": 5.66
          },
          {
            "quarter": "2024Q3",
            "trades": 106,
            "pnl": 829.05,
            "floating": 0.0,
            "drawdown": 14.02
          },
          {
            "quarter": "2024Q4",
            "trades": 87,
            "pnl": 1033.09,
            "floating": 112.57,
            "drawdown": 7.97
          },
          {
            "quarter": "2025Q1",
            "trades": 94,
            "pnl": 743.88,
            "floating": 10.46,
            "drawdown": 8.0
          },
          {
            "quarter": "2025Q2",
            "trades": 84,
            "pnl": 1567.14,
            "floating": 153.56,
            "drawdown": 8.58
          },
          {
            "quarter": "2025Q3",
            "trades": 81,
            "pnl": 2271.21,
            "floating": 37.14,
            "drawdown": 12.47
          },
          {
            "quarter": "2025Q4",
            "trades": 85,
            "pnl": 2227.4,
            "floating": 0.0,
            "drawdown": 5.63
          }
        ]
      },
      "15分": {
        "total": 330.98,
        "mean": 27.58,
        "sd": 885.8,
        "cv": 32.1151,
        "wins": 7,
        "worst": -1785.5,
        "passed": false,
        "quarters": [
          {
            "quarter": "2023Q1",
            "trades": 28,
            "pnl": -863.37,
            "floating": -2.61,
            "drawdown": 16.47
          },
          {
            "quarter": "2023Q2",
            "trades": 32,
            "pnl": -1785.5,
            "floating": 67.41,
            "drawdown": 21.75
          },
          {
            "quarter": "2023Q3",
            "trades": 31,
            "pnl": -1177.35,
            "floating": 0.0,
            "drawdown": 16.01
          },
          {
            "quarter": "2023Q4",
            "trades": 31,
            "pnl": 597.18,
            "floating": 0.0,
            "drawdown": 5.41
          },
          {
            "quarter": "2024Q1",
            "trades": 33,
            "pnl": 716.45,
            "floating": 0.0,
            "drawdown": 7.0
          },
          {
            "quarter": "2024Q2",
            "trades": 29,
            "pnl": -15.38,
            "floating": 99.72,
            "drawdown": 8.1
          },
          {
            "quarter": "2024Q3",
            "trades": 30,
            "pnl": 1243.47,
            "floating": 0.0,
            "drawdown": 4.53
          },
          {
            "quarter": "2024Q4",
            "trades": 34,
            "pnl": 597.91,
            "floating": 0.0,
            "drawdown": 6.62
          },
          {
            "quarter": "2025Q1",
            "trades": 25,
            "pnl": 868.5,
            "floating": 0.0,
            "drawdown": 3.66
          },
          {
            "quarter": "2025Q2",
            "trades": 32,
            "pnl": 105.82,
            "floating": 0.0,
            "drawdown": 6.66
          },
          {
            "quarter": "2025Q3",
            "trades": 27,
            "pnl": 553.1,
            "floating": 28.52,
            "drawdown": 4.95
          },
          {
            "quarter": "2025Q4",
            "trades": 25,
            "pnl": -509.83,
            "floating": 0.0,
            "drawdown": 8.74
          }
        ]
      }
    }
  },
  {
    "id": "fmz-p01003",
    "slug": "sakkoulas",
    "name": "Sakkoulas 動量均線",
    "family": "雙向動量",
    "anchor": "5分",
    "version": "最高 50 倍重測版",
    "status": "使用者確認",
    "summary": "用 MACD 交叉配合 SAR 過濾方向。ATR 提供停損參考，反向訊號可觸發反手。",
    "entry": "MACD 上穿訊號線且收盤高於 SAR 做多。MACD 下穿訊號線且收盤低於 SAR 做空。",
    "exit": "以訊號收盤加減 1.5 倍 ATR14 設初始停損。反向訊號在開盤先平舊倉，再檢查新單能否成交。",
    "risk": "最高 50 倍是在看過原批次結果後指定，初始保證金 2%。5 分仍有 37 筆保證金拒單，15 分有 2 筆初始停損失效。維持保證金與強平未建模。",
    "source": "https://www.fmz.com/strategy/442389",
    "frames": {
      "5分": {
        "total": 22033.64,
        "mean": 1836.14,
        "sd": 3950.44,
        "cv": 2.1515,
        "wins": 8,
        "worst": -5043.1,
        "passed": true,
        "quarters": [
          {
            "quarter": "2023Q1",
            "trades": 442,
            "pnl": 7956.71,
            "floating": -32.73,
            "drawdown": 12.37
          },
          {
            "quarter": "2023Q2",
            "trades": 491,
            "pnl": 1171.13,
            "floating": 281.48,
            "drawdown": 38.9
          },
          {
            "quarter": "2023Q3",
            "trades": 466,
            "pnl": -4605.54,
            "floating": 205.67,
            "drawdown": 53.43
          },
          {
            "quarter": "2023Q4",
            "trades": 448,
            "pnl": 4103.63,
            "floating": 282.5,
            "drawdown": 30.4
          },
          {
            "quarter": "2024Q1",
            "trades": 431,
            "pnl": 1606.57,
            "floating": 138.75,
            "drawdown": 41.89
          },
          {
            "quarter": "2024Q2",
            "trades": 469,
            "pnl": 6786.24,
            "floating": 12.89,
            "drawdown": 17.85
          },
          {
            "quarter": "2024Q3",
            "trades": 485,
            "pnl": 4978.68,
            "floating": 279.93,
            "drawdown": 21.1
          },
          {
            "quarter": "2024Q4",
            "trades": 489,
            "pnl": 894.82,
            "floating": 19.66,
            "drawdown": 34.86
          },
          {
            "quarter": "2025Q1",
            "trades": 452,
            "pnl": -5043.1,
            "floating": 0.0,
            "drawdown": 50.84
          },
          {
            "quarter": "2025Q2",
            "trades": 488,
            "pnl": 4989.07,
            "floating": 0.0,
            "drawdown": 23.32
          },
          {
            "quarter": "2025Q3",
            "trades": 444,
            "pnl": -150.21,
            "floating": 0.0,
            "drawdown": 39.17
          },
          {
            "quarter": "2025Q4",
            "trades": 448,
            "pnl": -654.37,
            "floating": 0.0,
            "drawdown": 40.11
          }
        ]
      },
      "15分": {
        "total": -10818.87,
        "mean": -901.57,
        "sd": 1856.24,
        "cv": null,
        "wins": 5,
        "worst": -3213.6,
        "passed": false,
        "quarters": [
          {
            "quarter": "2023Q1",
            "trades": 182,
            "pnl": 373.68,
            "floating": 0.0,
            "drawdown": 11.96
          },
          {
            "quarter": "2023Q2",
            "trades": 148,
            "pnl": -3195.14,
            "floating": 47.8,
            "drawdown": 33.35
          },
          {
            "quarter": "2023Q3",
            "trades": 192,
            "pnl": -3213.6,
            "floating": 168.62,
            "drawdown": 43.46
          },
          {
            "quarter": "2023Q4",
            "trades": 156,
            "pnl": -2617.12,
            "floating": 0.0,
            "drawdown": 27.84
          },
          {
            "quarter": "2024Q1",
            "trades": 170,
            "pnl": -2864.83,
            "floating": 0.0,
            "drawdown": 39.15
          },
          {
            "quarter": "2024Q2",
            "trades": 147,
            "pnl": -167.95,
            "floating": 73.86,
            "drawdown": 12.63
          },
          {
            "quarter": "2024Q3",
            "trades": 155,
            "pnl": -2168.17,
            "floating": 117.06,
            "drawdown": 28.3
          },
          {
            "quarter": "2024Q4",
            "trades": 151,
            "pnl": 762.43,
            "floating": -20.27,
            "drawdown": 13.95
          },
          {
            "quarter": "2025Q1",
            "trades": 160,
            "pnl": -1412.06,
            "floating": -43.14,
            "drawdown": 24.6
          },
          {
            "quarter": "2025Q2",
            "trades": 156,
            "pnl": 225.28,
            "floating": 0.0,
            "drawdown": 18.76
          },
          {
            "quarter": "2025Q3",
            "trades": 148,
            "pnl": 721.1,
            "floating": 72.09,
            "drawdown": 11.56
          },
          {
            "quarter": "2025Q4",
            "trades": 150,
            "pnl": 2737.53,
            "floating": -31.83,
            "drawdown": 10.78
          }
        ]
      }
    }
  }
];
