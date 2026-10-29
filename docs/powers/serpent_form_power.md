# 群蛇形态

<img src="/images/powers/serpent_form_power.png" alt="群蛇形态" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **归属**：玩家能力（原版）
- **类型**：增益
- **叠加**：计数型
- **施加来源**：原版卡牌「群蛇形态」；[超算鲁比克](/relics/rare/rubik_supercomputer.md)（战斗开始时 PP 牌矩阵秩为 1，获得 1 层）

## 描述

每打出一张牌后，对随机一个敌人造成等同于层数的伤害。

## 详细机制

- 只响应拥有者自己打出的牌，队友/敌人的出牌不触发。
- 触发伤害是**非攻击伤害**：不受力量、易伤、暴击影响，但可以被格挡。
- 目标从当前可攻击的敌人中随机选择。
- 层数不会自动减少，整场战斗持续生效。

## 源码

- 原版 `SerpentFormPower.cs`
- `SeerRubikSupercomputer.cs`（超算鲁比克）
