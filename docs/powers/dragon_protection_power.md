# 龙之保护

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[加布](/monsters/normal/jiabu_monster.md)

<img src="/images/powers/dragon_protection_power.png" alt="龙之保护" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 无类型（不参与增益/减益分类，不可被驱散/净化）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

振翅状态下，每回合开始时吸取敌方所有正向属性。

## 详细机制

- **触发窗口**：只在拥有者**自己的回合开始时**、且身上有[振翅](/powers/flutter_power.md)（层数 > 0）时触发。
- **吸取范围**：只吸力量、防御、命中、速度四项，把敌人身上的全部正层数原样转到自己身上；负值不吸。
- **多名敌人逐个吸**：每个敌人都结算一遍，等于把全场的四维正向属性集中到自己身上。

## 源码

- `SeerDragonProtectionPower.cs`
