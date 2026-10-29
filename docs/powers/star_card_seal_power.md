# 星轨锁闭

> **归属**：怪物施加给玩家
> **施加来源**：怪物自带——[不羁·弗里德](/monsters/boss/bujifulide_monster.md)「源初星域」
> **类型**：中性（None）
> **叠加方式**：按层数叠加
> **可见**：是

<img src="/images/powers/star_card_seal_power.png" alt="星轨锁闭" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

### 数值参数

| 参数 | 数值 |
|---|---|
| TurnsRemaining | 3 |

## 描述

持续[blue]3[/blue]回合：敌人无法打出带有[gold]辉星[/gold]费用的卡牌。
回合结束时减少[blue]1[/blue]层。

## 详细机制

- **只封星费牌**：带有辉星费用（含 X 星费）的牌直接不可打出；普通能量牌不受影响。
- **是「不能打出」**：牌点不动，不会白付费用。
- **持续 3 个玩家回合**：玩家回合结束时 −1，施放当回合不计入。
- **只封玩家方**：弗里德自己不受影响。

## 源码

- `SeerStarCardSealPower.cs`
