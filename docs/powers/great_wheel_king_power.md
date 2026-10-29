# 大轮明王

> **归属**：玩家可施加
> **施加来源**：玩家获得——[大轮明王](/cards/colorless/great_wheel_king.md)（卡牌）

<img src="/images/powers/great_wheel_king_power.png" alt="大轮明王" style="max-width:120px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（2，不叠加）
- **多人同步**: 是
- **可见**: 是

## 描述

每当自己获得<span style="color:#d44;font-weight:600">异常状态</span>时，立刻给所有敌人附加相同的<span style="color:#d44;font-weight:600">异常状态</span>。

## 详细机制

- **触发时机**：当任何能力的层数变化时触发。
- **触发条件**：
  - 拥有者自身获得异常状态
  - 仅可见的异常状态
  - 仅层数增加时触发（衰减不触发）
  - 全量 27 种[异常状态](/mechanics/abnormal-status.md)（含狂暴、凝滞、超频、星赐）
- **反弹效果**：对每个可攻击的敌人施加相同类型、与本次增量相同的层数。
- **叠加特性**：单例（不叠加），重复施加无效。

## 相关机制

- [异常状态](/mechanics/abnormal-status.md)（全量 27 种异常状态反弹）

## 相关卡牌

- [大轮明王](/cards/colorless/great_wheel_king.md)（获得此能力，升级后耗能 -1）

## 源码

- `SeerGreatWheelKingPower.cs`
