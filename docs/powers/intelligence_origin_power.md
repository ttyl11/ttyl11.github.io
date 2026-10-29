# 智能起源

> **归属**：玩家可施加
> **施加来源**：玩家获得——[智能起源](/cards/character/intelligence_origin.md)（卡牌）

<img src="/images/powers/intelligence_origin_power.png" alt="智能起源" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

你每打出<span style="color:#3aa675;font-weight:600">2</span>张牌，获得<span style="color:#3aa675;font-weight:600">1</span>点<span style="color:#d4a017;font-weight:600">能量</span>。

## 详细机制

- **按自己出牌计数**：只统计拥有者自己打出的牌，每第 2、4、6…张各 +1 能量。
- **每回合重置**：自己的回合开始时计数归零。
- **自动打出也计入**（同样会触发 AfterCardPlayed）。

## 源码

- `SeerIntelligenceOriginPower.cs`
