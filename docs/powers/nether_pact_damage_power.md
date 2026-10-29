# 契魂共鸣

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物能力联动——[幽夜冥契](/powers/nether_pact_power.md)（敌人连续打出 2 张不同类型的牌时，全体友军各获得 1 层）
> **类型**：增益（Buff）
> **叠加方式**：按层数叠加
> **可见**：是

<img src="/images/powers/nether_pact_damage_power.png" alt="契魂共鸣" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

### 数值参数

| 参数 | 数值 |
|---|---|
| DamageBoostPercent | 10 |

## 描述

使自身造成的攻击伤害提高[blue]10%[/blue]（可叠加）。

## 详细机制

- **每层 +10%**：按层数线性加算，2 层就是攻击伤害 ×1.2。
- **只加攻击伤害**：固定伤害、DoT、充能球伤害都不吃这个乘区。
- **永久保留**：获得后不随回合减少，整场战斗持续生效。

## 源码

- `SeerNetherPactDamagePower.cs`
