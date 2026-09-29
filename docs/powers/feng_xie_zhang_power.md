# 封邪之嶂

> **归属**：玩家专属（[混沌地王·莱茵哈特（觉醒）](/relics/legendary/hun_dun_di_wang_lai_yin_ha_te_awakened.md)②施加，作用于自身）
> **施加来源**：觉醒遗物②「能力强化被消除」时 +1 层（至多 4 层）

<img src="/images/powers/feng_xie_zhang_power.png" alt="封邪之嶂" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 计数器叠加
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 层数上限 | 4 |
| 每层减伤 | 10%（持有格挡时） |

## 描述

受未格挡的攻击后，消除所有敌方[gold]格挡[/gold]。每有[blue]1[/blue]层，持有[gold]格挡[/gold]时[gold]减伤[/gold][blue]10%[/blue]。至多[blue]4[/blue]层。

## 详细机制

- **①受未格挡攻击后消除所有敌方格挡**：自身受到**未被格挡的攻击伤害**（`AfterDamageReceived`，`UnblockedDamage>0`）后触发，将所有敌人的[格挡](/mechanics/block.md)全部清零（`CreatureCmd.LoseBlock`）。敌人堆格挡越厚，这一口清得越赚。
- **②持有格挡时减伤 10%/层**：自身**当前有格挡**（`Block>0`）时才提供减伤，只乘[攻击伤害](/mechanics/block.md)（`IsPoweredAttack`），每层减 10%，4 层封顶 40%：1 层 -10%、2 层 -20%、3 层 -30%、4 层 -40%。**无格挡时不减伤**——裸奔状态本能力不兜底。
- **②不吃固定伤害**：本能力只对攻击伤害生效，[固定伤害](/powers/fixed_damage_power.md)等非攻击伤害不受减伤影响。
- **叠加方式**：计时器叠加（Counter），由[觉醒遗物](/relics/legendary/hun_dun_di_wang_lai_yin_ha_te_awakened.md)②逐次 +1，至多 4 层；不会自然衰减。

## 小贴士

- **格挡是减伤的开关**：②"持有格挡才减伤"——想要 40% 减伤就一直保持身上有格挡，配合①（被打后清光敌方格挡）形成"我有格挡我减伤、你没格挡你挨打"的压制链。
- **被打 = 免费全体清盾**：1 次未格挡伤害就能清掉所有敌方格挡，对"每回合叠盾"的敌人是完美克制——敌人辛苦叠的盾，吃你一下未格挡伤害就归零。
- **0 层时仅①生效**：即使层数被清零，①（受未格挡攻击清敌盾）依然在；只剩②的减伤随层数走。

## 相关能力 / 机制

- [格挡](/mechanics/block.md)（①清敌盾 / ②减伤开关）
- 固定伤害（不受②减伤，非攻击伤害）

## 相关遗物

- [混沌地王·莱茵哈特（觉醒）](/relics/legendary/hun_dun_di_wang_lai_yin_ha_te_awakened.md)（施加来源，②能力强化被消除时 +1 层）

## 源码

- `SeerFengXieZhangPower.cs`