# 帝天战佛

> **归属**：玩家可施加
> **施加来源**：玩家获得——[帝天战佛](/cards/colorless/emperor_war_buddha.md)（卡牌）

<img src="/images/powers/emperor_war_buddha_power.png" alt="帝天战佛" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 计数（层数 = 伤害阈值，不消耗）
- **可见**: 是

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害阈值 | 15 | 8 |

## 描述

当受到的单次伤害超过 <span style="color:#3aa675;font-weight:600">15</span> 时，吸取攻击者的[全属性](/mechanics/all_attributes.md)提升（[力量](/powers/strength_power.md)、[命中](/powers/accuracy_power.md)、[防御](/powers/defense_power.md)、[速度](/powers/speed_power.md)），仅吸取正数层数。

## 详细机制

- **触发条件**：当满足以下所有条件时触发：
  1. 自身受到伤害
  2. 伤害来源是敌方生物（玩家或召唤物均可）
  3. 单次**总伤害**超过阈值（阈值即层数），等于阈值不触发
- **总伤害口径**：按格挡前结算的总伤害判定，被格挡吸收的部分同样计入；溢出致死的部分不计入。
- **只吸攻击者**：只吸取造成这次伤害的那一名攻击者，不是全体敌人；四项属性各自独立判定。
- **全属性吸取**：对攻击者的以下四种属性，若其层数 > 0，则吸取等量层数到自身：
  - [力量](/powers/strength_power.md)
  - [命中](/powers/accuracy_power.md)
  - [防御](/powers/defense_power.md)
  - [速度](/powers/speed_power.md)
  - 吸取方式：自身 +N 层，攻击者 -N 层（N 为攻击者该属性的当前正层数）；0 或负层数不处理
- **触发后闪烁**：只要总伤害超过阈值就闪烁图标，即使攻击者没有可吸取的属性。

## 相关卡牌

- [帝天战佛](/cards/colorless/emperor_war_buddha.md)：打出时获得此能力，升级后阈值从 15 降至 8

## 源码

- `SeerEmperorWarBuddhaPower.cs`
