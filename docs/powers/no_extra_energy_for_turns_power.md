# 能量禁域

> **归属**：怪物施加给玩家
> **施加来源**：怪物自带——[弗里德](/monsters/boss/bujifulide_monster.md)「领域崩坏」（对每个玩家施加 2 回合）
> **类型**：减益（Debuff）
> **叠加方式**：按层数叠加
> **可见**：是

<img src="/images/powers/no_extra_energy_for_turns_power.png" alt="能量禁域" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

### 数值参数

| 参数 | 数值 |
|---|---|
| TurnsRemaining | 2 |

## 描述

持续[blue]2[/blue]回合：敌人无法通过卡牌或效果额外获得[gold]能量[/gold]。
回合结束时减少[blue]1[/blue]层。

## 详细机制

- **只封「额外获得」**：卡牌、遗物、能力带来的额外能量全部被改成 0；回合开始的基础能量重置不受影响。
- **持续时间**：玩家回合结束时 −1，施放当回合不计入，完整覆盖接下来的 2 个玩家回合。
- **可被净化**：它是减益能力，净化/驱散类效果可以提前移除。

## 源码

- `SeerNoExtraEnergyForTurnsPower.cs`
