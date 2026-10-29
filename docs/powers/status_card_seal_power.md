# 金属风暴

> **归属**：怪物施加给玩家
> **施加来源**：怪物自带——[机械王·马尔修斯](/monsters/boss/maerxiusi_monster.md)「王·金属风暴」
> **类型**：中性（None）
> **叠加方式**：按层数叠加
> **可见**：是

<img src="/images/powers/status_card_seal_power.png" alt="金属风暴" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

### 数值参数

| 参数 | 数值 |
|---|---|
| TurnsRemaining | 1 |

## 描述

你的回合内，无法打出[gold]状态牌[/gold]。

## 详细机制

- **只封状态牌**：玩家在受影响回合内不能打出任何状态牌；攻击/技能/能力牌照常。
- **是「不能打出」**：牌直接点不动，不会白付耗能。
- **只持续一个玩家回合**：施加后到下一个玩家回合结束自动移除。
- **只封玩家方**：马尔修斯自己不受影响。

## 源码

- `SeerStatusCardSealPower.cs`
