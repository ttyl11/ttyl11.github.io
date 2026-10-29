# 契魂幽障

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物能力联动——[幽夜冥契](/powers/nether_pact_power.md)（敌人连续打出 2 张相同类型的牌时，全体友军各获得 1 层）
> **类型**：增益（Buff）
> **叠加方式**：按层数叠加
> **可见**：是

<img src="/images/powers/nether_pact_reduction_power.png" alt="契魂幽障" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

### 数值参数

| 参数 | 数值 |
|---|---|
| DamageReducePercent | 5 |

## 描述

使自身受到的攻击伤害降低[blue]5%[/blue]（可叠加）。

## 详细机制

- **每层 −5%**：按层数线性加算，20 层时减伤达到 100%，受到的攻击伤害归 0。
- **只减攻击伤害**：固定伤害、DoT 不受影响。
- **永久保留**：不随回合减少，整场战斗持续生效。

## 源码

- `SeerNetherPactReductionPower.cs`
