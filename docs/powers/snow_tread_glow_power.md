# 踏雪荧辉

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[布蕾里克](/monsters/elite/buleilike_monster.md)（敌方全属性层数高于自身时施加）
> **类型**：中性（None）
> **叠加方式**：不叠加
> **可见**：是

<img src="/images/powers/snow_tread_glow_power.png" alt="踏雪荧辉" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

### 数值参数

| 参数 | 数值 |
|---|---|
| DodgePercent | 100 |
| TurnsRemaining | 1 |

## 描述

（[blue]1[/blue]回合后）获得[blue]100%[/blue][gold]闪避[/gold]。

## 详细机制

- **下个玩家回合获得 100% 闪避**：玩家回合开始时给布蕾里克挂上 100 层[闪避](/powers/dodge_power.md)，该回合内所有攻击全部闪掉。
- **只持续一个玩家回合**：玩家回合结束时撤销这 100% 闪避并移除自身。
- **一次性**：触发一次后能力消失，不会连续免疫。
- **条件在招式上**：只有出招瞬间「敌方全属性层数高于自身」时才会挂这个能力；能力本身不判断条件。

## 源码

- `SeerNewSkillPowersD.cs`（`SeerSnowTreadGlowPower`）
- `SeerBuleilikeMonster.cs:231-235`
