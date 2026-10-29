# 袖里乾坤

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[王牌术师](/monsters/elite/ace_magician_monster.md)（开局施加）
> **类型**：中性（None）
> **叠加方式**：不叠加
> **可见**：是

<img src="/images/powers/ace_magician_power.png" alt="袖里乾坤" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

### 数值参数

| 参数 | 数值 |
|---|---|
| ReductionPerCard | 1 |

## 描述

自身受到的伤害降低，降低的百分比等于敌人初始牌组中的牌数（最多[blue]100%[/blue]）。

## 详细机制

- **只减攻击伤害**：固定伤害、DoT 等非攻击伤害不受影响。
- **实时读取敌方牌组**：减伤 = 敌方（所有对手）当前主牌组张数 × <span style="color:#3aa675;font-weight:600">1%</span>；多人模式下把所有对手的牌组张数相加。
- **上限 100%**：牌组张数超过 100 时按 100% 减伤处理，攻击伤害降为 0。

## 源码

- `SeerAceMagicianPower.cs`
