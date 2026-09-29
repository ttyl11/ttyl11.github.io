# 梦境残缺

<img src="/images/cards/fragmented_dream.png" alt="梦境残缺" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 攻击
- **稀有度**: 罕见
- **目标**: 敌方单体
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害 | 45 | 70 |
| 生命阈值 | 20（%） | 20（%） |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 造成<span style="color:#3aa675;font-weight:600">45</span>点伤害。自身生命低于<span style="color:#3aa675;font-weight:600">20</span>%时才可打出。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 造成<span style="color:#3aa675;font-weight:600">70</span>点伤害。自身生命低于<span style="color:#3aa675;font-weight:600">20</span>%时才可打出。

## 详细机制

- **打出条件**：自身**当前生命 < 最大生命 × 20%** 才能打出（严格小于）。最大生命 100 时，生命 19 可打出、20 不可打出。
- **判定实时**：每次检查手牌可否打出时都按**当时的血量**判定——回合中掉血后会立刻解锁，回血越过 20% 则立刻变回不可打出。
- **伤害为攻击伤害**：吃[力量](/powers/strength_power.md)/[易伤](/powers/vulnerable_power.md)加成，可被[格挡](/mechanics/block.md)抵消。
- **升级只提升伤害**：45 → 70（+25），打出条件与 PP 不变。
- **PP 消耗**：每次打出消耗 1 点 PP，PP 5 表示最多可打出 5 次（PP 归 0 后不可打出）。

## 小贴士

- **残血专属终结技**：血量高于 20% 时它是彻底打不出的死牌——手里留着它等于少一张牌，构筑时要接受这份"卡手风险"。
- **主动压血即可解锁**：能与"自伤"体系配合——[赴火](/cards/character/embrace_flame)（自身攻击伤害）、[湮灭](/potions/collapse_potion.md)（自身与敌方同时受伤）之类主动掉血的手段，可以在同一回合把自己压进 20% 以内再打出。
- **判定是"当前生命"，不是"本回合损失"**：只有站在 20% 以下才能打出；打出后回到 20% 以上也不影响已经结算的伤害。
- **1 费 45（升级 70）在罕见里倍率偏高**，代价全在触发条件上——20% 以下意味着你已经在死亡边缘，先用[格挡](/mechanics/block.md)或减伤兜底再用它收尾。
- **与[固定伤害](/powers/fixed_damage_power)的取舍**：它走攻击伤害，会被格挡挡下、但也吃力量与易伤；面对高格挡敌人时不如直接上固伤手段。
- **性价比**：1 费换 45/70 点攻击伤害，单看倍率是罕见里的一线水平；但"必须残血"让它的实际使用频率取决于你能否稳定把自己压到 20% 以下——能控血就是斩杀牌，不能控血就是废牌。

## 相关能力

- 无（本牌不施加能力）

## 相关机制

- [格挡](/mechanics/block.md)（伤害为攻击伤害，可被格挡抵消）
- [PP 系统](/mechanics/pp-system.md)（每次打出消耗 1 点 PP）

## 源码

- `SeerFragmentedDream.cs`