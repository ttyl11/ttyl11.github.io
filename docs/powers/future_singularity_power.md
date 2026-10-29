# 未来奇点

> **归属**：玩家可施加
> **施加来源**：玩家获得——[逐界苍星](/relics/legendary/star_chaser.md)（遗物）

<img src="/images/powers/future_singularity_power.png" alt="未来奇点" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 计数器叠加
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 最大层数 | 3 |

## 描述

每回合开始时按层数分级触发效果（**达到即触发，向下涵盖**）：1层使所有敌人[速度](/powers/speed_power.md)-1；2层令所有敌人失去[格挡](/mechanics/block.md)；3层自身[先制](/powers/first_strike_power.md)+1，且打出牌时为1张未满PP的PP牌回复1点PP。受到异常状态或可见减益时层数-1并抵消本次施加。

## 详细机制

- **触发时点**：自己的回合开始时，按当前层数把已达到的所有档位各触发一次（3 层时三档全触发）。
- **3 层额外效果**：自己每打出一张牌，从全部战斗牌中随机选 1 张未满 PP 的 PP 牌，PP +1。
- **抵抗范围**：27 种异常状态，以及任何**可见的减益**（虚弱、易伤等）；每次成功抵消只消耗 1 层，与施加量无关。
- **先制的含义**：玩家身上的先制是下一张牌耗能 -1（打出后清空），不是抢先手。

## 源码

- `SeerFutureSingularityPower.cs`
