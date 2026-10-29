# 扶摇而上

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：极天之翼·托鲁克（技能「扶摇而上」）

<img src="/images/powers/flying_up_power.png" alt="扶摇而上" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**：中性（None）
- **叠加方式**：计数（层数 = 可触发次数）
- **可见**：是

### 数值参数

| 参数 | 数值 |
|---|---|
| 每回合先制 | +1 |
| 每回合速度 | +2 |

## 描述

持续期间，每回合[gold]先制[/gold]+[blue]1[/blue]、[gold]速度[/gold]+[blue]2[/blue]。

## 详细机制

- **触发时点**：托鲁克每个自己的回合开始时，获得 1 层先制与 2 层速度，然后本能力层数 -1。
- **层数 = 触发次数**：施加 N 层就触发 N 个自己的回合开始。
- **先制的含义**：托鲁克身上的先制，会让玩家下一张牌耗能 +1（打出后先制清空），不是抢先手。

## 源码

- `Models/Powers/SeerNewSkillPowersD.cs`（`SeerFlyingUpPower`）
