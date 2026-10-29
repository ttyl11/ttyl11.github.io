# 龙王波

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物施加给玩家——[哈莫雷特](/monsters/elite/hamlet_monster.md)

<img src="/images/powers/dragon_wave_power.png" alt="龙王波" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff）
- **叠加方式**: 回合计数器（按层数叠加，每回合 -1）
- **可见**: 是

## 描述

在你的回合内，累计消耗能量超过<span style="color:#3aa675;font-weight:600">3</span>点时，立即结束你的回合。

## 详细机制

- **阈值是"超过 3"**：本回合实际消耗的能量累计到 <span style="color:#3aa675;font-weight:600">4</span> 点（即超过 3）时立即触发；只花 3 点安全。
- **只算实际消耗**：0 费牌、被减到 0 费的牌不累计；只统计拥有者自己打出的牌。
- **强制结束**：触发后立即结束该玩家回合，不可撤销，后续手牌作废。
- **层数 = 持续回合数**：每个玩家回合结束时 -1，减到 0 消失。

## 源码

- `SeerDragonWavePower.cs`
