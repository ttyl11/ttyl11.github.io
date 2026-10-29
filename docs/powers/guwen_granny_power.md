# 古温

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[古温婆婆](/monsters/elite/guwen_granny_monster.md)

<img src="/images/powers/guwen_granny_power.png" alt="古温" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 无类型（不参与增益/减益分类，不可被驱散/净化）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

每回合开始时，对所有敌人施加[blue]5[/blue]层[red]中毒[/red]和[blue]5[/blue]层[gold]寄生[/gold]。

## 详细机制

- **触发时点**：古温婆婆**自己的回合开始时**。
- **目标**：所有存活的敌对玩家，逐个独立施加。
- 中毒与寄生各 5 层，不随能力层数变化。

## 源码

- `SeerGuwenGrannyPower.cs`
