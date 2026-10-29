# 封技能

> **归属**：怪物施加给玩家
> **施加来源**：怪物自带——[堕息·迹](/monsters/elite/duoxiji_monster.md)「逝洪荒」（条件触发）、[异星装甲·赛伯斯特](/monsters/elite/alien_armor_sebst_monster.md)（技能4）、[不羁·弗里德](/monsters/boss/bujifulide_monster.md)（技能3，吸取成功时）
> **类型**：中性（None）
> **叠加方式**：按层数叠加
> **可见**：是

<img src="/images/powers/skill_card_seal_power.png" alt="封技能" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

### 数值参数

| 参数 | 数值 |
|---|---|
| TurnsRemaining | 1 |

## 描述

你的回合内，无法打出技能牌。

## 详细机制

- **只封技能牌**：玩家在受影响回合内不能打出任何技能牌；攻击牌、能力牌照常。
- **是「不能打出」**：牌直接点不动，不会白付耗能，也不会进入弃牌堆。
- **只持续一个玩家回合**：从施加后到下一个玩家回合结束自动移除。
- **只封玩家方**：堕息·迹自己不受影响。

## 源码

- `SeerSkillCardSealPower.cs`
