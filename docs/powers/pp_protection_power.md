# 禅心护念

> **归属**：玩家可施加
> **施加来源**：玩家获得——[武心婵](/relics/legendary/wu_xin_chan.md)（遗物）

<img src="/images/powers/pp_protection_power.png" alt="PP守护" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

[gold]PP[/gold]耗尽时，该牌不会被消耗。

## 详细机制

- **拦截外部扣 PP**：任何**非打出路径**的 PP 减少（敌人削 PP、能力代价等）都会被直接取消，PP 保持不变。
- **正常打出照扣**：主动打出牌时消耗 PP 不受保护，该扣还是扣。
- **因此不会因外部削 PP 被消耗**：PP 被保护住、不会归 0，也就不会触发「PP 归 0 自动消耗」。
- **整场常驻**：来自[武心婵](/relics/legendary/wu_xin_chan.md)，能力不减少、不消失。

## 源码

- `SeerPpProtectionPower.cs`
