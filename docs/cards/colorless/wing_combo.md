# 飞翼连击

<img src="/images/cards/wing_combo.png" alt="飞翼连击" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 无色牌
- **能量消耗**: 3
- **类型**: 能力
- **稀有度**: 稀有
- **目标**: 自身
- **关键词**: [寂灭](/mechanics/nirvana.md)
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 重放次数 | 1 | 1 |
| 能量消耗 | 3 | 2 |

## 描述

随机一张手牌获得<span style="color:#d4a017;font-weight:600">重放</span><span style="color:#3aa675;font-weight:600">1</span>。战斗结束时，向<span style="color:#d4a017;font-weight:600">抽牌堆</span>加入一张<span style="color:#d4a017;font-weight:600">异鸟扑击</span>。

> 卡面/悬浮提示写的是"向抽牌堆加入"，实际结算为**加入牌组**。

## 升级后

随机一张手牌获得<span style="color:#d4a017;font-weight:600">重放</span><span style="color:#3aa675;font-weight:600">1</span>。战斗结束时，向<span style="color:#d4a017;font-weight:600">抽牌堆</span>加入一张<span style="color:#d4a017;font-weight:600">异鸟扑击</span>。

## 小贴士

- **🔑 一次性能力，换一张永久攻击牌**：带[寂灭](/mechanics/nirvana.md)，打出后本场战斗结束从牌组移除；同时由隐藏追踪能力在战斗结束时发一张**异鸟扑击**进**牌组**——通常是一换一，牌组总数不变。
- **重放赋予**：随机选择[手牌](/mechanics/hand.md)中一张**非自身**的卡牌，令其重放 +<span style="color:#3aa675;font-weight:600">1</span>——该牌之后每次打出都会额外再打一次。若手里除它以外没有别的牌，则只挂追踪能力、不给重放。
- **随机目标不可控**：重放落在哪张手牌上随机——手里牌越少、质量越齐，越容易砸中关键牌；废牌多时价值打折。
- **奖励是永久的**：战斗结束（需存活）后获得一张异鸟扑击：原版事件稀有度攻击牌，0 费、<span style="color:#3aa675;font-weight:600">14</span> 伤、可升级至 <span style="color:#3aa675;font-weight:600">18</span>；奖励的是**未升级版**，后续可在营火升级。
- **每场战斗最多发一张**：追踪能力隐藏且单例，同一场重复打出不会多挂、也不会多发；但每场战斗各算一次，带多张飞翼连击就能跨战斗各领一张。
- **升级效果**：耗能 <span style="color:#3aa675;font-weight:600">3</span> → <span style="color:#3aa675;font-weight:600">2</span>，重放次数与奖励不变。

## 相关机制

- [重放](/mechanics/replay.md)（赋予随机手牌 1 次重放）
- [手牌](/mechanics/hand.md)（重放目标选取范围）
- [寂灭](/mechanics/nirvana.md)（打出后从牌组移除）

## 源码

- `SeerWingCombo.cs`
- `SeerWingComboTrackerPower.cs`
- `ByrdSwoop.cs`
