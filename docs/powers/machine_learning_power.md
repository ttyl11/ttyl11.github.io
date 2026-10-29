# 机器学习

<img src="/images/powers/machine_learning_power.png" alt="机器学习" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **归属**：玩家能力（原版）
- **类型**：增益
- **叠加**：计数型
- **施加来源**：原版卡牌「机器学习」；[超算鲁比克](/relics/rare/rubik_supercomputer.md)（战斗开始时 PP 牌不足 <span style="color:#3aa675;font-weight:600">4</span> 张，获得 1 层）

## 描述

每回合多抽等同于层数的牌。

## 详细机制

- 只影响拥有者的回合起手抽牌：每回合的常规 5 张起手抽额外 +层数；卡牌/遗物触发的额外抽牌不受影响（该钩子只在回合起手抽牌处调用）。
- 层数是加算：2 层就是每次多抽 2 张，不再按倍率放大。
- 与 PP 无直接关系；[超算鲁比克](/relics/rare/rubik_supercomputer.md)只在「PP 牌不足 4 张」时用这个能力补偿手牌质量。
- 层数不会自动减少，整场战斗持续生效。

## 源码

- 原版 `MachineLearningPower.cs`
- `SeerRubikSupercomputer.cs`（超算鲁比克）
