# 风暴之心

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[风暴女神·斯蒂亚](/monsters/elite/storm_goddess_stiya_monster.md)
> **类型**：中性（None）
> **叠加方式**：计数（层数 = 剩余回合）
> **可见**：是

<img src="/images/powers/storm_heart_power.png" alt="风暴之心" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

### 数值参数

| 参数 | 数值 |
|---|---|
| ChaosGain | 5 |

## 描述

持续期间，敌人每使用[blue]1[/blue]张牌，幻紊值+[blue]5[/blue]。

## 详细机制

- **敌方出牌就涨幻紊**：玩家每打出 1 张牌，斯蒂亚的幻紊值 +5，直接提高「牌被打出后无效」的概率。
- **只看敌方**：斯蒂亚自己与队友出牌不触发。
- **持续期间生效**：层数在玩家回合结束时 −1，归零移除。
- **与幻紊衰减对冲**：每回合自然 −1，但玩家多打几张牌就会反涨——拖延只会让它更强。

## 源码

- `SeerNewSkillPowersD.cs`（`SeerStormHeartPower`）
