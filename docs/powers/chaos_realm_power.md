# 混沌魔域

> **归属**：玩家
> **施加来源**：[混沌魔域](/cards/character/chaos_realm.md)（能力牌）打出时

<img src="/images/powers/chaos_realm_power.png" alt="混沌魔域" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 无类型（不参与增益/减益分类，不可被驱散/净化）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

记录当前<span style="color:#d4a017;font-weight:600">最大生命值</span>，战斗结束时将最大生命值回复到记录值（当前生命值不变）。

## 详细机制

- **记录时机**：[混沌魔域](/cards/character/chaos_realm.md)打出时记录玩家当前的[最大生命值]。
- **战斗结束恢复**：战斗结束时，若当前最大生命值与记录值不一致，将其恢复到记录值；**当前生命值不随上限恢复而增减**（只补上限，不回血）。
- **与混沌化身联动**：本能力通常与[混沌化身](/powers/soulson_chaos_incarnation_power.md)同场——混沌化身用最大生命抵扣超支能量会压低上限，战斗结束时由本能力把上限补回。

## 相关能力

- [混沌化身](/powers/soulson_chaos_incarnation_power.md)（压低最大生命上限的来源）
- [堕落](/powers/fallen_power.md)（同体系资源）

## 源码

- `SeerChaosRealmPower.cs`