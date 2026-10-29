# 真龙形态

> **归属**：玩家可施加
> **施加来源**：玩家获得——[真龙形态](/cards/character/true_dragon_form.md)（卡牌）

<img src="/images/powers/true_dragon_form_power.png" alt="真龙形态" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

战斗结束时，若<span style="color:#d4a017;font-weight:600">生命值</span>高于记录值，则降至记录值。

## 详细机制

- **记录当前生命**：打出卡牌时记录当时的生命值（`RecordedHp`），之后正常战斗。
- **战后封顶**：战斗结束时，如果当前生命高于记录值，就把当前生命压回记录值；低于记录值则不变。
- **只压不补**：它只防止「战斗中回血赚血」，不会把生命补到记录值。
- **一次性**：结算后能力移除。

## 源码

- `Models/Cards/SeerTrueDragonFormPower.cs`
