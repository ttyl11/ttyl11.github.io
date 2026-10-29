# 邪龙之噬

> **归属**：玩家可施加
> **施加来源**：玩家获得——[在劫难逃](/cards/character/inescapable_doom.md)（卡牌）、[终末之灭·天邪龙王](/relics/rare/dragon_of_doom.md)（遗物）

<img src="/images/powers/dragon_devour_power.png" alt="邪龙之噬" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 计数器（按层数叠加）
- **可见**: 是
- **来源**: mod

## 描述

每打出一次卡牌，对随机敌人造成<span style="color:#3aa675;font-weight:600">6</span>点伤害，获得<span style="color:#3aa675;font-weight:600">1</span>层<span style="color:#d4a017;font-weight:600">先制</span>，然后减少1层。

## 详细机制

- **层数 = 可触发次数**：每打出一张自己的牌消耗 1 层，层数耗尽后失效。
- **伤害性质**：6 点**无加成伤害**（不吃力量等增伤），但**可以被格挡**；目标从存活敌人中随机选。
- **先制**：[先制](/powers/first_strike_power.md) 只减下一张牌的耗能，打出下一张牌后即消耗——通常会被本能力的下一次触发反复续上。
- **只认自己出牌**：队友、召唤物、敌人的出牌都不触发。
- **来源**：[终末之灭·天邪龙王](/relics/rare/dragon_of_doom.md) 在自身生命低于对手时施加；[在劫难逃](/cards/character/inescapable_doom.md) 也能直接施加。

## 源码

- `SeerDragonDevourPower.cs`
