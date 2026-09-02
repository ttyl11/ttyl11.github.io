# 苍炎日无极

<img src="/images/cards/cang_yan_sun_wu_ji.png" alt="苍炎日无极" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 攻击
- **稀有度**: 普通
- **目标**: 单个敌方
- **可升级**: 是（1 级）
- **关键词**: 无

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 基础伤害 | 9 | 14 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 对单个敌人造成<span style="color:#d44;font-weight:600">9</span>点伤害。选择弃牌堆中至多<span style="color:#3aa675;font-weight:600">2</span>张牌将其[<span style="color:#9b59b6;font-weight:600">消耗</span>]。

## 升级后

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 对单个敌人造成<span style="color:#d44;font-weight:600">14</span>点伤害。选择弃牌堆中至多<span style="color:#3aa675;font-weight:600">2</span>张牌将其[<span style="color:#9b59b6;font-weight:600">消耗</span>]。

## 详细机制

- **伤害优先**：先造成基础伤害（9/14），再处理弃牌堆选项。
- **选择界面**：卡牌打出后，弹出弃牌堆卡牌选择界面，允许从弃牌堆中选择最多2张牌。若弃牌堆为空，直接跳过选择阶段，不触发任何额外效果。
- **消耗效果**：被选中的牌进入[消耗牌堆](/mechanics/exhaust_pile.md)，战斗结束后自动恢复至牌组（区别于[毁灭](/mechanics/destruction.md)的销毁）。
- **非伤害加成**：本卡的选择消耗选项不会影响本次伤害数值——伤害固定为9/14点，不因消耗牌的数量而变化。

## 小贴士

- **资源回收而非伤害增幅**：与描述中"每加入1张此牌伤害+3"不同，本卡的实际机制是将弃牌堆的牌[消耗](/mechanics/exhaust.md)——卡牌进入消耗牌堆，战斗结束后返回牌组。这是一个资源调度工具，而非伤害放大器。
- **弃牌堆管理工具**：当弃牌堆堆积了过多不需要的牌（如消耗过的废牌、诅咒牌等），本卡可以作为"选择性清除"手段，把不需要的牌永久移出当前战斗的弃牌堆。
- **空弃牌堆处理**：当弃牌堆为空时（战斗刚开始或刚清空后），本卡只做基础伤害，不触发选择界面。这意味着在战斗早期使用本卡效率最高。
- **5PP的耐久定位**：5PP意味着最多可打出5次，每次可回收最多2张弃牌。5次最多回收10张牌，是优秀的弃牌管理卡。
- **升级收益**：基础伤害从9→14（+5），回收上限不变（仍为2张）。升级主要提升直接输出，升级优先级中等。
- **配合[毁灭](/mechanics/destruction.md)牌**：本卡和[毁灭元神](./ruin_soul.md)形成有趣的互动——毁灭牌使用后进入销毁牌堆，而本卡处理的弃牌堆是另一个区域。两者不冲突，可在同一回合配合使用。
- **与[消耗](/mechanics/exhaust.md)词的区别**：本卡"消耗"是将牌移入消耗牌堆（战斗结束恢复），不同于原版"消耗"关键词将牌永久移出本局游戏。

## 相关能力

- 无特殊能力

## 相关机制

- [PP系统](/mechanics/pp-system.md)（PP消耗）
- [消耗](/mechanics/exhaust.md)（将牌移入消耗牌堆）
- [消耗牌堆](/mechanics/exhaust_pile.md)（被消耗牌的去处）
- [毁灭](/mechanics/destruction.md)（将消耗牌堆移至销毁牌堆，与本卡互补）
- [弃牌堆](/mechanics/discard_pile.md)（被选中牌的来源）

## 源码

- `SeerCangYanSunWuJi.cs`
