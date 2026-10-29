# 日月反噬

> **归属**：玩家（当前版本无实际来源）
> **施加来源**：当前版本无施加来源（能力未实装）；[日月安属](/cards/character/sun_moon_belong.md)（卡牌）仅在悬浮提示中引用此能力

<img src="/images/powers/sun_moon_belong_power.png" alt="日月安属·反击" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 叠加
- **可见**: 是

## 描述

记录受到的伤害；此能力消失时，对所有敌人造成等同记录值的<span style="color:#d4a017;font-weight:600">固定伤害</span>。

## 详细机制

- **只记最后一击**：每次受到伤害都会**覆盖**上一次的记录值（非累计）——最终生效的是能力消失前最后一次受到的伤害。
- **记录格挡前总伤害**：记录值 = 该次伤害的格挡前总量（被格挡挡掉的部分同样计入），所以高格挡不会稀释反弹值。
- **消失时才反弹**：能力被移除的瞬间，把记录值作为[固定伤害](/powers/fixed_damage_power.md)附加给**所有**对手（多人模式下全体敌方）。
- **无自动衰减**：此能力没有回合衰减机制，会一直保留到被消除增益类效果移除或战斗结束。
- **主要来源**：无。日月安属沉默判定失败（20% 概率或目标免疫沉默）时，补偿获得的是[弦月反弹](/powers/crescent_edge_reflect_power.md)，不是本能力。

## 相关卡牌

- [日月安属](/cards/character/sun_moon_belong.md)（仅悬浮提示引用）

## 源码

- `SeerSunMoonBelongPower.cs`
