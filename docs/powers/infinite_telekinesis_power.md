# 无限念力

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[墨鲁萨](/monsters/elite/medusa_minion_monster.md)

<img src="/images/powers/infinite_telekinesis_power.png" alt="无限念力" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 无类型（不参与增益/减益分类，不可被驱散/净化）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

自身回合开始时，若自身处于<span style="color:#d4a017;font-weight:600">石化</span>状态，<span style="color:#d4a017;font-weight:600">力量</span>翻倍。

## 详细机制

- **触发时点**：自己每个回合开始前。
- **条件**：身上有「石化」能力，且力量 > 0；无力量时不触发。
- **翻倍**：按当前力量再施加等量力量（+N → 2N）。

## 源码

- `SeerInfiniteTelekinesisPower.cs`
