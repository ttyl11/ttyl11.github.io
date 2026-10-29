# 临终仪式

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[邪魂大祭司](/monsters/elite/evil_soul_priest_monster.md)
> **类型**：中性（None）
> **叠加方式**：按层数叠加（层数参与伤害计算）
> **可见**：是

<img src="/images/powers/deathbed_ritual_power.png" alt="临终仪式" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

### 数值参数

| 参数 | 数值 |
|---|---|
| LifeLossPerStack | 5 |

## 描述

本场战斗中，敌人每打出名称含「鬼」或「魂」的牌，失去[blue]5[/blue]×层数点生命值。

## 源码

- `SeerNewSkillPowersD.cs`（`SeerDeathbedRitualPower`）
