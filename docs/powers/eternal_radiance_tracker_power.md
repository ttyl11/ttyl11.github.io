# 永耀追踪

> **归属**：未使用（源码保留的 Power，没有施加点）
> **施加来源**：无——[永耀](/enchantments/eternal_radiance_enchantment.md)附魔在自身 `ShouldPlay` 内实现限制，不挂载本 Power

<img src="/images/powers/eternal_radiance_tracker_power.png" alt="永耀追踪" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 否（类定义隐藏；实际未施加，不会出现）

## 描述

每回合只能打出一张永耀牌。

## 详细机制

- **实际限制在附魔内**：`SeerEternalRadianceEnchantment.ShouldPlay` 统计本回合已开始的永耀牌出牌数，已打出过则拒绝再打出；不通过本 Power 实现。
- **不会加「不可打出」关键字**：手牌不会被灰显或附加 `CardKeyword.Unplayable`，也没有「抽到即锁」「回合开始解锁」逻辑。
- **只认自己的牌**：判定条件为 `CardPlay.Card.Owner == card.Owner` 且该牌带永耀附魔，队友出牌不会触发。
- **本 Power 现状**：全仓没有 `PowerCmd.Apply<SeerEternalRadianceTrackerPower>`，仅有类定义。

## 源码

- `SeerEternalRadianceTrackerPower.cs`（`SeerEternalRadianceTrackerPower`，无施加点）
- `SeerEternalRadianceEnchantment.cs`（实际限制：`ShouldPlay` + `History.CardPlaysStarted`）
