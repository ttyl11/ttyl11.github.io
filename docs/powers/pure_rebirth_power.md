# 净世新生

> **归属**：玩家可施加
> **施加来源**：玩家获得——[净世新生](/cards/character/pure_rebirth.md)（卡牌）

<img src="/images/powers/pure_rebirth_power.png" alt="净世新生" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff）
- **叠加方式**: 计数器（按层数叠加）
- **可见**: 是

## 描述

下<span style="color:#3aa675;font-weight:600">层数</span>次回复生命时，为所有敌人施加<span style="color:#3aa675;font-weight:600">3</span>层<span style="color:#9b59b6;font-weight:600">邪诲</span>。

## 详细机制

- **回血即触发**：自己每次实际回复生命（回复量 > 0）时触发一次，为所有可命中敌人各施加 3 层[邪诲](/powers/evil_teaching_power.md)。
- **层数＝剩余次数**：每触发一次消耗 1 层，归零后移除；卡牌基础给 2 次，升级后给 4 次。
- **按「次」不按「量」**：回 1 点和回 20 点都只算一次，小额多次回血更划算。
- **多段回血多次触发**：同一次结算里若有多段回血，会分别消耗层数。
- **只算自己的回复**：队友/敌人回血不触发。

## 源码

- `SeerPureRebirthPower.cs`
