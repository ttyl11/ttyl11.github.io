# 千里击涛

> **归属**：玩家可施加
> **施加来源**：玩家获得——[千里击涛!!!](/cards/colorless/thousand_miles_wave.md)（卡牌）

<img src="/images/powers/thousand_miles_wave_power.png" alt="千里击涛" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 叠加
- **可见**: 是

## 描述

每回合打出<span style="color:#3aa675;font-weight:600">3</span>张牌后自动结束回合。

## 详细机制

- **层数＝阈值**：本回合打出第「层数」张牌后，强制结束回合（不可撤销）。
- **默认 3 张**：卡牌施加 3 层，即打满 3 张就收手；层数越高反而越宽松。
- **只算自己的牌**：队友/敌人出牌不计数。
- **每回合重置**：自己回合结束时计数归零。
- **强制结束**：到点直接结束回合，无法反悔或继续出牌。

## 源码

- `SeerThousandMilesWavePower.cs`
