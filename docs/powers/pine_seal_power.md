# 松风止戈

> **归属**：怪物施加给玩家
> **施加来源**：怪物自带——[古温婆婆](/monsters/elite/guwen_granny_monster.md)（施加 1 层）
> **类型**：中性（None）
> **叠加方式**：单例（不可叠加）
> **可见**：是

<img src="/images/powers/pine_seal_power.png" alt="松风止戈" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

### 数值参数

| 参数 | 数值 |
|---|---|
| TurnsRemaining | 1 |

## 描述

（[blue]1[/blue]回合后）你无法打出攻击牌与技能牌。

## 详细机制

- **封锁范围**：只封**攻击牌与技能牌**；能力牌、状态牌、诅咒牌仍可正常打出。
- **生效窗口**：施加后，到下一个玩家回合开始时才真正生效（描述中的「1 回合后」），该玩家回合结束时移除。
- **是「不能打出」**：与「打出无效」不同，牌直接点不动，不会白付耗能。
- **只封敌方**：只对持有者的对手（玩家方）生效，古温婆婆自己不受影响。

## 源码

- `SeerNewSkillPowersB.cs`（`SeerPineSealPower`）
