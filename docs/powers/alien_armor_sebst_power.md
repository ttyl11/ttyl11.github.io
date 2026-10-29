# 异星装甲

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[异星装甲·赛伯斯特](/monsters/elite/alien_armor_sebst_monster.md)（开局施加）
> **类型**：中性（None）
> **叠加方式**：不叠加
> **可见**：是

<img src="/images/powers/alien_armor_sebst_power.png" alt="异星装甲" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

### 数值参数

| 参数 | 数值 |
|---|---|
| InitialCharge | 10 |

## 描述

战斗开始时获得[blue]10[/blue]层[purple]蓄能[/purple]。

## 详细机制

- **开局被动**：战斗开始时自动施加，不占怪物行动。
- **蓄能用途**：怪物每使用一次招式，[蓄能](/powers/charge_reserve_power.md)层数 -<span style="color:#3aa675;font-weight:600">1</span>；层数耗尽后该怪物**不再使用任何招式**。
- **实战含义**：10 层 = 这只怪全场最多再放 <span style="color:#3aa675;font-weight:600">10</span> 次招式，拖长战斗就能把它拖成白板。

## 源码

- `SeerAlienArmorSebstPower.cs`
