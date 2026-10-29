# 乱技

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——地狱魔龙兽

<img src="/images/powers/hell_dragon_beast_power.png" alt="乱技" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**：中性（None）
- **叠加方式**：不叠加
- **可见**：是

### 数值参数

| 参数 | 数值 |
|---|---|
| 每多少张牌 +1 招式 | 15 |

## 描述

战斗第<span style="color:#3aa675;font-weight:600">1</span>回合开始时，敌人初始牌组每有<span style="color:#3aa675;font-weight:600">15</span>张牌，自身额外获得<span style="color:#3aa675;font-weight:600">1</span>个随机招式（可重复）。

## 详细机制

- **实时读取牌组**：按所有敌对玩家脱战牌组（`PileType.Deck`）的总张数计算，多人时相加。
- **每满 15 张 +1**：向下取整，余数不计（14 张 = 0 个，29 张 = 1 个）。
- **抽取时点**：怪物第 1 回合由 AI 状态机抽取，可重复获得同一招式。

## 源码

- `SeerHellDragonBeastPower.cs`
