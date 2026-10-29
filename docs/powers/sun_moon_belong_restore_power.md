# 日月归元

> **归属**：玩家可施加
> **施加来源**：玩家获得——[日月安属](/cards/character/sun_moon_belong.md)（卡牌）

<img src="/images/powers/sun_moon_belong_restore_power.png" alt="日月安属·还原" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 叠加（Counter）
- **可见**: 是

## 描述

①敌人获得<span style="color:#d4a017;font-weight:600">全属性</span>提升时，立即降低等量；我方获得<span style="color:#d4a017;font-weight:600">全属性</span>下降时，立即回复等量。<br/>敌方回合结束时层数-<span style="color:#3aa675;font-weight:600">1</span>。

## 详细机制

- **覆盖四项属性**：力量、命中、防御、速度。
- **敌方升属性 → 立刻回降**：任一敌方获得上述属性**正层数**时，立刻对其施加等量负层数抵消，涨多少降多少。
- **我方降属性 → 立刻回升**：自身获得上述属性**负层数**时，立刻回补等量正层数，掉多少回多少。
- **只锁"变化"不锁"存量"**：触发点是属性增减的瞬间，不会清除敌方已有的属性层数，也不会还原我方之前已经掉过的属性——施加前发生的变动不在保护范围内。
- **衰减在对方回合结束**：每个敌方回合结束减 1 层，N 层 = 覆盖 N 个敌方回合的属性变化。

## 相关卡牌

- [日月安属](/cards/character/sun_moon_belong.md)（施加 3 层，锁 3 个敌方回合）

## 相关机制

- [全属性](/mechanics/all_attributes.md)（力量 / 命中 / 防御 / 速度）

## 源码

- `SeerSunMoonBelongRestorePower.cs`
