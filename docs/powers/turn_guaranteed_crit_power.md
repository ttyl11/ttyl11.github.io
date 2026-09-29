# 回合必定暴击

> **归属**：玩家可施加
> **施加来源**：[幻影蝶](/relics/uncommon/phantom_butterfly.md)（遗物，2 层=2 回合）

<img src="/images/powers/turn_guaranteed_crit_power.png" alt="回合必定暴击" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 计数器（层数=剩余必暴回合数）
- **可见**: 是

## 描述

持续<span style="color:#3aa675;font-weight:600">{Amount}</span>回合，期间所有攻击必定<span style="color:#d4a017;font-weight:600">暴击</span>（1.5 倍伤害）。

## 详细机制

- **层数=剩余回合数**：施加 N 层 = 之后 N 个己方回合所有攻击必定暴击。每己方回合结束时层数 -1，归零自动移除。
- **暴击倍率**：伤害按 1.5 倍结算（与[暴击](/powers/critical_strike_power.md)一致）。

## 相关遗物

- [幻影蝶](/relics/uncommon/phantom_butterfly.md)（获得 2 回合）
- [群星的礼赠](/relics/starter/elemental_core.md)（每回合补暴击，非本能力）

## 源码

- `SeerTurnGuaranteedCritPower.cs`