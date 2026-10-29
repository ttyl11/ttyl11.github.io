# 树灵滋养

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[愈灵·克丽娅](/monsters/elite/yuling_keliya_monster.md)「树灵滋养」

<img src="/images/powers/tree_spirit_nurture_power.png" alt="树灵滋养" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 中性（None）
- **叠加方式**: 按层数叠加（层数＝剩余回合）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| FirstStrikeDown | 2 |
| FixedDamage | 10 |

## 描述

持续期间，使每个敌人每回合[gold]先制[/gold]-[blue]2[/blue]，并受到[blue]10[/blue]点[gold]固定伤害[/gold]。

## 详细机制

- **玩家回合开始触发**：每个玩家回合开始时，对所有敌人各施加先制 −2，并挂上 10 点[固定伤害](/powers/fixed_damage_power.md)。
- **先制降低**：玩家的先制被压到负值，下一张牌耗能相应增加（先制的常规规则）。
- **固定伤害延迟结算**：10 点挂在玩家身上，在该玩家回合开始时结算——不过它本身就是玩家回合开始时施加的，实际在下一个玩家回合开始时掉血。
- **持续 N 个玩家回合**：层数在玩家回合结束时 −1，归零移除。

## 小贴士

- **先制税 + 固伤双重压力**：每回合 −2 先制会让你的牌越来越贵，同时每回合固定掉 10 点。
- **免固能吃掉伤害**：久战、免固类能力可以挡住这 10 点。
- **先制垫牌**：被压先制后，先用低费牌把先制消耗掉，再打核心牌。

## 源码

- `SeerNewSkillPowersA.cs`（`SeerTreeSpiritNurturePower`）
- `SeerYulingKeliyaMonster.cs:309`
