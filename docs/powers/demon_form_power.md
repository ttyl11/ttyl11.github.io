# 恶魔形态

<img src="/images/powers/demon_form_power.png" alt="恶魔形态" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **归属**：玩家能力（原版）
- **类型**：增益
- **叠加**：计数型
- **施加来源**：原版卡牌「恶魔形态」；[超算鲁比克](/relics/rare/rubik_supercomputer.md)（战斗开始时 PP 牌矩阵秩为 2，获得 1 层）

## 描述

每回合开始时，获得等同于层数的[力量](/powers/strength_power.md)。

## 详细机制

- 触发时机是拥有者**回合开始**，每回合结算一次。
- 获得的力量是永久力量，不会在回合结束时消失，可跨回合累积。
- 层数越高，每回合获得的力量越多；层数本身不会自动减少。
- 与 PP、矩阵秩只在「超算鲁比克」的获取条件上有关，能力本身不涉及 PP。

## 源码

- 原版 `DemonFormPower.cs`
- `SeerRubikSupercomputer.cs`（超算鲁比克）
