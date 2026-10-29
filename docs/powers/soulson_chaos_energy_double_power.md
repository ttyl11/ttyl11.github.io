# 双倍消耗

> **归属**：玩家可持有（由索伦森/混沌牌施加）
> **施加来源**：玩家获得——[混沌](/cards/status/soulson_chaos_card.md)（卡牌）；怪物施加给玩家——[索伦森（Soulson）](/monsters/boss/soulson_monster.md)

<img src="/images/powers/soulson_chaos_energy_double_power.png" alt="双倍消耗" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff）
- **叠加方式**: 叠加
- **可见**: 是

## 描述

你下一张牌耗能翻倍，打出后移除此能力。

## 详细机制

- **层数＝受影响牌数**：每打出 1 张自己的牌消耗 1 层，层数归零移除——N 层就是接下来 N 张牌各翻倍。
- **只翻倍一次**：每张牌只乘 2，不随层数叠乘。
- **X 费与负费牌豁免倍率**：这两类牌不参与翻倍，但打出时仍会消耗 1 层。
- **可能打不出**：能量不够支付翻倍后的费用时，牌直接无法打出。

## 源码

- `SeerSoulsonChaosEnergyDoublePower.cs`
