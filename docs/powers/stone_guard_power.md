# 石鬼守护

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[逆魂·佩特菲德](/monsters/elite/reverse_soul_petefide_monster.md)
> **类型**：中性（None）
> **叠加方式**：按层数叠加
> **可见**：是

<img src="/images/powers/stone_guard_power.png" alt="石鬼守护" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

### 数值参数

| 参数 | 数值 |
|---|---|
| DamagePerDraw | 1 |

## 描述

本场战斗中，敌人无法回复生命。
敌人每抽[blue]1[/blue]张牌，受到等同自身层数×[blue]1[/blue]的[gold]固定伤害[/gold]。

## 详细机制

- **封死回血**：持有者存活期间，敌方（玩家）的所有治疗都被拦下，回血数值直接归 0。
- **抽牌即扣血**：玩家每抽 1 张牌，受到「石鬼守护层数 × 1」点固定伤害，不可格挡。
- **层数可叠**：层数越高，每次抽牌掉得越多。
- **抽牌阶段也触发**：回合开始的正常抽牌同样计入。
- **能力常驻**：不随回合减少，整场战斗有效。

## 源码

- `SeerNewSkillPowersG.cs`（`SeerStoneGuardPower`）
