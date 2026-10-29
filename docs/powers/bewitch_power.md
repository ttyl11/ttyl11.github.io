# 魅惑

> **归属**：玩家可施加
> **施加来源**：玩家施加给敌方——[妖精的蛊惑](/cards/character/fairy_bewitch.md)（卡牌）、[色欲](/relics/rare/seer_lust_relic.md)（遗物）、[余罪魔女](/relics/legendary/seer_crime_witch.md)（遗物，每场战斗首次己方回合按累计魅惑层数施加）

<img src="/images/powers/bewitch_power.png" alt="魅惑" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff）
- **叠加方式**: 计数器（按层数叠加）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 每层击晕概率（魅惑层数） | 5 |
| 每个可见增益额外击晕概率 | 10 |

魅惑为减益，层数来源有三种：① 色欲遗物——每点一次「色欲」+1 层（每层 5% 击晕）；② 卡牌「妖精的蛊惑」——打出后启用「每个可见增益 +10%」加成（**不改变**已有层数，仅对完全没有魅惑的敌人才额外给 1 层兜底）；③ 余罪魔女遗物——每场战斗首次己方回合按累计魅惑层数对全体敌人施加。

**总击晕率 = 魅惑层数 × 5% +（妖精的蛊惑启用后）该敌人可见增益数 × 10%**

## 描述

自身回合开始时，有<span style="color:#3aa675;font-weight:600">X</span>%概率被[<span style="color:#d4a017;font-weight:600">击晕</span>](/mechanics/stun.md)。概率=魅惑层数×<span style="color:#3aa675;font-weight:600">5</span>%+可见<span style="color:#d4a017;font-weight:600">增益</span>数×<span style="color:#3aa675;font-weight:600">10</span>%（打出[妖精的蛊惑](/cards/character/fairy_bewitch.md)后启用）。

> 悬浮框里显示的百分比就是**当前实时总击晕率**（随层数与增益数量变化）。

## 详细机制

- **触发时机**：在拥有者一方回合开始时触发（魅惑挂在敌人身上时，就是敌人自己的回合开始时）。
- **击晕概率计算**：总击晕率 = 魅惑层数 × <span style="color:#3aa675;font-weight:600">5</span>% +（[妖精的蛊惑](/cards/character/fairy_bewitch.md)启用后）该敌人**可见增益数** × <span style="color:#3aa675;font-weight:600">10</span>%。
  - **层数主要来自色欲遗物**：每点一次「色欲」+1 层，每场战斗开始时统一施加，层数不清零。
  - **增益计数口径**：只统计该敌人身上**类型为增益且可见**的能力个数；隐藏能力不计。
  - **+10% 部分必须先打出[妖精的蛊惑](/cards/character/fairy_bewitch.md)**：只靠色欲遗物时，概率只有「层数 × 5%」。
- **判定方式**：用 <span style="color:#3aa675;font-weight:600">NextInt(100)</span> 与总击晕率比较；总率 ≥ <span style="color:#3aa675;font-weight:600">100</span> 时必定击晕（不做上限截断）。
- **击晕效果**：命中则[击晕](/mechanics/stun.md)拥有者，使其跳过下回合。
- **多人同步**：随机数使用框架随机数，确保多端一致。

## 小贴士

- **两条线各自独立**：色欲遗物给「层数 × 5%」，妖精的蛊惑给「增益数 × 10%」——前者靠累计点击次数滚雪球，后者靠敌人自己叠增益越多越容易被打晕。
- **对增益型敌人越打越晕**：敌人每多一个可见增益就 +10%，所以给敌人叠[狂暴](/powers/fury_power.md)之类增益后，反而更容易把它晕住。
- **不打妖精的蛊惑就只有 5%/层**：想触发 +10% 那条线，必须在战斗中打出一次这张卡（对每个敌人各自标记启用）。
- **层数不会被妖精的蛊惑顶掉**：卡牌只负责「启用加成」，不会改变遗物已经叠好的层数；对没有魅惑的敌人则兜底 1 层。

## 相关卡牌

- [妖精的蛊惑](/cards/character/fairy_bewitch.md)（为所有对手附加魅惑，并启用「每个可见增益 +10%」加成）

## 相关能力

- [击晕](/mechanics/stun.md)（命中后跳过下回合）

## 源码

- `SeerBewitchPower.cs`