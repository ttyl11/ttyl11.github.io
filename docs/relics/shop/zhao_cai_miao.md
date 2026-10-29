# 招财喵

<img src="/images/relics/zhao_cai_miao.png" alt="招财喵" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 商店

### 数值参数

| 参数 | 数值 |
|---|---|
| CommonGold（普通遗物金币） | 120 |
| UncommonGold（罕见遗物金币） | 200 |
| RareGold（稀有遗物金币） | 300 |

## 描述

局外<span style="color:#d44;font-weight:600">右键</span>此遗物，随机移除一个<span style="color:#d4a017;font-weight:600">普通/罕见/稀有</span>遗物，并按稀有度获得<span style="color:#3aa675;font-weight:600">120/200/300</span>金币。

- **右键卖遗物**：仅局外（非战斗）可用，从持有的普通/罕见/稀有遗物中随机选一件移除并获取金币。
- **随机同步**：随机流程使用运行级 Niche 随机数，多人同步保证主客两端移除同一件、给同样金币。
- **可重复**：无次数限制，只要还有普通/罕见/稀有遗物即可继续。

## 风味文字

<span style="color:#d44;font-weight:600">招财喵。</span>

## 小贴士

- **金币换算**：普通 120 / 罕见 200 / 稀有 300，卖稀有遗物收益最高。
- **只卖普/罕/稀**：商店、史诗、传说、起始等稀有度不参与随机，不会误卖。
- **局外使用**：战斗内不可用，适合在商店前整理金币。

## 源码

- `SeerZhaoCaiMiao.cs`