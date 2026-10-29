# 柑橘

> **归属**：玩家可施加
> **施加来源**：玩家获得——[十一月的柑橘](/cards/character/november_citrus.md)（卡牌）

<img src="/images/powers/november_citrus_power.png" alt="柑橘" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

每回合中，你打出的第<span style="color:#3aa675;font-weight:600">1</span>张牌回复<span style="color:#3aa675;font-weight:600">1</span>点生命值，第<span style="color:#3aa675;font-weight:600">2</span>张回复<span style="color:#3aa675;font-weight:600">2</span>点，以此类推。<br/>每回合重置。

## 详细机制

- **第 N 张回 N 点**：本回合内每打出一张自己的牌，就回复等同于「本回合已打出张数」的生命。
- **只看自己的牌**：队友/敌人打出的牌不计数。
- **每回合重置**：自己回合开始时计数归零，新回合第一张牌重新从 1 点开始。
- **能力本身不消耗**：单例常驻，整场战斗持续生效。

## 源码

- `SeerNovemberCitrusPower.cs`
