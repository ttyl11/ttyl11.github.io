# 回合必定暴击

> **归属**：玩家可施加
> **施加来源**：[幻影蝶](/relics/uncommon/phantom_butterfly.md)（遗物，2 层=2 回合）、[幽冥帝尊·修罗](/relics/rare/nether_emperor.md)（遗物，血量不满足先制条件时每回合 1 层）

<img src="/images/powers/turn_guaranteed_crit_power.png" alt="回合必定暴击" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 计数器（层数=剩余必暴回合数）
- **可见**: 是

## 描述

持续<span style="color:#3aa675;font-weight:600">{Amount}</span>回合，期间所有攻击必定<span style="color:#d4a017;font-weight:600">暴击</span>（1.5 倍伤害）。

## 详细机制

- **层数=剩余回合数**：施加 N 层 = 之后 N 个己方回合所有攻击必定暴击。每己方回合结束时层数 -1，归零自动移除。
- **真暴击判定**：期间攻击写入暴击判定（强制暴击）——**触发全部"暴击时"联动**（[五月之锋](/cards/character/may_edge)、[二律背反](/powers/antinomy_power)、[镜](/powers/mirror_power.md)等），暴击率显示直接 100%。
- **暴击倍率**：伤害按 1.5 倍结算（由[暴击](/powers/critical_strike_power.md)引擎统一承担，不再单独乘算）。

## 相关遗物

- [幻影蝶](/relics/uncommon/phantom_butterfly.md)（获得 2 回合）
- [幽冥帝尊·修罗](/relics/rare/nether_emperor.md)（生命不满足先制条件的回合，每回合获得 1 层）

## 源码

- `SeerTurnGuaranteedCritPower.cs`