# 戏梦缥缈间

<img src="/images/cards/xi_meng_piao_miao_jian.png" alt="戏梦缥缈间" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 1
- **能量消耗**: 1（升级后 0）
- **类型**: 能力
- **稀有度**: 稀有
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 每丢弃一张抽牌 | 2 | 2 |
| 手牌抽满 | 下回合开始时 1 次 | 下回合开始时 1 次 |
| 耗能 | 1 | 0 |
| PP | 1 | 1 |
| 最大PP | 1 | 1 |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> [<span style="color:#d4a017;font-weight:600">丢弃</span>](/mechanics/discard_pile.md)手中所有牌，每丢弃一张，抽<span style="color:#3aa675;font-weight:600">2</span>张牌。下回合开始时，将[<span style="color:#d4a017;font-weight:600">手牌抽满</span>](/mechanics/hand.md)。

## 升级后

耗能降至 <span style="color:#3aa675;font-weight:600">0</span> 费（<span style="color:#3aa675;font-weight:600">1</span> → <span style="color:#3aa675;font-weight:600">0</span>），其余效果不变：丢弃手中所有牌，每丢弃一张抽 <span style="color:#3aa675;font-weight:600">2</span> 张牌，下回合开始时将[<span style="color:#d4a017;font-weight:600">手牌抽满</span>](/mechanics/hand.md)。

## 数值补充

打出时丢弃的牌数 = 当前手牌数（通常 <span style="color:#3aa675;font-weight:600">5</span> 左右，含本牌打出后在手牌中的其余牌），因此通常一次抽 <span style="color:#3aa675;font-weight:600">10</span> 张以上；下回合开始再补抽至手牌上限（默认约 <span style="color:#3aa675;font-weight:600">5</span>）。

## 小贴士

- **能力牌但它只爆发一次**：作为能力牌打出后留在场上，但其核心是"下回合开始把[<span style="color:#d4a017;font-weight:600">手牌抽满</span>](/mechanics/hand.md)"的**一次性**效果——触发后就结束，不会每回合都补满。别把它当成永久续航牌。
- **弃光换手牌量的豪赌**：打出即[<span style="color:#d4a017;font-weight:600">丢弃</span>](/mechanics/discard_pile.md)手中所有牌，每张抽 <span style="color:#3aa675;font-weight:600">2</span> 张——手牌越多弃得越多、抽得越多。按 5 张手牌算，立刻到手 <span style="color:#3aa675;font-weight:600">10</span> 张，下回合再补满，短期内手牌量暴涨，非常适合"手牌越多伤害越高"或依赖过牌的流派。
- **代价与时机**：全弃等于放弃当前手牌里的牌序资源，若手牌里有多张关键牌就亏了。适合在**手牌以杂牌/低价值牌居多**、且你迫切需要大量抽牌找关键牌时使用，是典型的"以量取胜"。
- **一次性的补手牌**：下回合开始补满到上限，是给你一个"回回手牌余量"的保底，但**只保一回合**。想要持续手牌优势，需要配合抽牌或回响等机制，而不是靠这张牌本身。
- **PP 1 = 单场一次**：PP 为 <span style="color:#3aa675;font-weight:600">1</span>，单场最多打一次，属于"一锤子买卖"的爆发牌，配好时机再出。
- **性价比**：1 费（升级后 0 费）的能力牌，用一次全弃+爆抽+下回合补满手牌，在手牌质量允许时是一次高价值置换；若手牌全是关键牌则极亏，收益全靠时机把控。升级后白嫖 0 费更稳。

## 相关机制

- [PP系统](/mechanics/pp-system.md)（PP 消耗）
- [弃牌堆](/mechanics/discard_pile.md)（丢弃手牌）
- [卡牌牌堆](/mechanics/hand.md)（手牌/抽牌堆/弃牌堆）

## 源码

- `SeerXiMengPiaoMiaoJian.cs` / `SeerXiMengPiaoMiaoJianPower.cs`