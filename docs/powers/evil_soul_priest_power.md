# 邪祭

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带常驻被动——邪魂大祭司

<img src="/images/powers/evil_soul_priest_power.png" alt="邪祭" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**：中性（None）
- **叠加方式**：不叠加
- **可见**：是

### 数值参数

| 参数 | 数值 |
|---|---|
| RitualPerCard | 1 |

## 描述

战斗开始时，敌人初始牌组中的每张牌使自身获得[blue]1[/blue]层[gold]仪式[/gold]。

## 详细机制

- **统计范围**：所有敌对玩家「牌组」（脱战牌组，`PileType.Deck`）的牌数总和；多人时按各玩家牌组相加。
- **结算时点**：战斗开始时一次性结算，本场中途牌组变化不影响。
- **获得内容**：一次性获得等于牌数的原版「仪式」层数（仪式在自身回合结束时获得力量）。

## 源码

- `SeerEvilSoulPriestPower.cs`
