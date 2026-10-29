# 神王血契

> **归属**：玩家可施加
> **施加来源**：玩家获得——[乌拉诺斯](/relics/epic/uranus.md)（遗物）

<img src="/images/powers/god_king_blood_pact_power.png" alt="神王血契" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益
- **来源**: [乌拉诺斯](/relics/epic/uranus.md)
- **叠加方式**: 递减
- **可见**: 是

## 描述

①攻击后对全体敌人造成总伤害<span style="color:#3aa675;font-weight:600">30</span>%的<span style="color:#d4a017;font-weight:600">固定伤害</span>。<br/>②受到<span style="color:#d44;font-weight:600">负面状态</span>时消耗1层抵消。

## 数值

| 参数 | 数值 |
|---|---|
| 攻击附加固定伤害比例 | 30%（总伤害） |
| 抵消负面状态消耗层数 | 1 |

## 详细机制

- **攻击溅射**：自身发起一次攻击后，把该次攻击**所有段的合计总伤害**（含被格挡部分）×30%，向下取整、**最少 1 点**；以[固定伤害](/powers/fixed_damage_power.md)能力施加给所有可攻击敌人，在各自回合开始结算。
- **不消耗层数**：攻击溅射本身不扣层，只要层数 > 0 就每刀触发。
- **抵消负面**：受到**可见的减益**（虚弱、易伤等，不含异常状态中的隐藏项）时，把本次施加量改为 0，并消耗 1 层；每次抵消固定 1 层。

## 小贴士

- **攻击溅射全体**：每次攻击后对全体敌人造成本次总伤害 30% 的[固定伤害](/powers/fixed_damage_power.md)，群怪清场利器。
- **层数仅用于抵消负面**：攻击溅射不消耗层数，只要还有层数就每刀触发；层数仅在受到可见负面状态时抵消并消耗 1 层。

## 源码

- `SeerGodKingBloodPactPower.cs`
