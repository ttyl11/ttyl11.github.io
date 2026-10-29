# 百天浮世络

<img src="/images/powers/hundred_day_floating_world_power.png" alt="百天浮世络" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **归属**：玩家能力
- **类型**：增益
- **叠加**：计数型（层数 = 覆盖的敌方回合数）
- **施加来源**：[妙时天女](/relics/epic/maiden_of_wondrous_time.md)（第一回合开始施加 <span style="color:#3aa675;font-weight:600">3</span> 层）
- **可见**: 是

## 描述

持有时免疫并反弹异常状态，免疫并反弹属性下降状态（力量、防御、命中、速度的减少），在对方回合结束时减少1层。

## 详细机制

- **免疫 + 反弹**：拦截到的异常状态或属性下降不会落在自己身上，而是原样施加给所有敌人。
- **自己施加的不反弹**：施加者是自身时只免疫、不反弹。
- **仅层数 > 0 时生效**：层数为 0 后不再拦截。
- **只认可见能力**：不可见的能力变化不会被拦截。
- **属性下降的范围**：只包括力量、防御、命中、速度四项的负值；先制下降、其他属性变化不在保护范围内。
- **持续口径**：N 层覆盖 N 个**敌方回合**；每过一个敌方回合 −1 层，而不是自己回合结束掉层。
- 施加与消失时会触发妙时天女的三种状态转换（进入/退出效果由遗物处理）。

## 源码

- `SeerHundredDayFloatingWorldPower.cs`
- `SeerMaidenOfWondrousTime.cs`（妙时天女）
- `SeerAbnormalStatus.cs`（异常状态清单）
