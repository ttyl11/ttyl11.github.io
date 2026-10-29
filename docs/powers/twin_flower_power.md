# 双生花

> **归属**：玩家可施加
> **施加来源**：玩家获得——[双生花](/cards/colorless/twin_flower.md)（卡牌）

<img src="/images/powers/twin_flower_power.png" alt="双生花" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 计数（层数 = 状态触发概率）
- **可见**: 是

## 描述

①在你的回合开始时，晓和清交替出现，有<span style="color:#3aa675;font-weight:600">层数</span>%概率进入对应状态。<br/>②晓/清状态下打出对应牌时，令随机对手<span style="color:#d4a017;font-weight:600">睡眠</span><span style="color:#3aa675;font-weight:600">2</span>回合。

## 详细机制

- **触发时机**：`BeforeSideTurnStart`，在持有者所属阵营的回合开始时，先于当回合抽牌。
- **交替规则**：首次判定对应[晓](/powers/dawn_power.md)，之后晓、清严格交替；**判定失败也会切换**，只是本回合不获得任何状态。
- **概率来源**：层数即概率（卡牌基础 75，升级后 100）；多张叠加后层数相加，达到 100 即必定触发。
- **晓/清持续**：获得的状态在持有者回合结束时移除，只覆盖当前回合。
- **睡眠施加**：处于状态时，每打出对应类型的牌就令**随机一名**可命中敌人睡眠 2 层；睡眠为必定触发，不再掷概率。
- **与睡眠的联动**：睡眠降低目标 50% 攻击伤害，受到未被格挡的伤害立即移除，敌方回合结束 -1 层。

## 源码

- `SeerTwinFlowerPower.cs`
- `SeerDawnPower.cs`
- `SeerClarityPower.cs`
