# 生命

> **归属**：玩家可施加
> **施加来源**：玩家获得——[生命](/cards/basic/life.md)（卡牌）

<img src="/images/powers/life_power.png" alt="生命" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 叠加
- **可见**: 是

## 描述

本回合内，每打出<span style="color:#3aa675;font-weight:600">1</span>张牌，回复<span style="color:#3aa675;font-weight:600">层数</span>点生命值。

## 详细机制

- **只算自己的牌**：只统计拥有者自己打出的牌，自动打出也计入。
- **每次回复 = 层数**：多层就是每次回更多，不是多触发几次。
- **本回合有效**：自己的回合结束时移除。

## 源码

- `SeerLifePower.cs`
