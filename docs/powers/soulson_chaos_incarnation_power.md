# 混沌化身

> **归属**：玩家可持有（索伦森/堕落/混沌魔域施加）
> **施加来源**：怪物施加给玩家——[索伦森（Soulson）](/monsters/boss/soulson_monster.md)；玩家自行获得——[堕落](/powers/fallen_power.md)每累积满 100 层时、[混沌魔域](/cards/character/chaos_realm.md)（卡牌，自身获得）

<img src="/images/powers/soulson_chaos_incarnation_power.png" alt="混沌化身" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 无类型（不参与增益/减益分类，不可被驱散/净化）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

你的能量不足时，仍可打出卡牌，差额部分消耗等量最大生命值（如 1 能量打 3 费牌，扣 2 点最大生命）。

## 详细机制

- **玩家侧触发：堕落满 100 层**：[堕落](/powers/fallen_power.md)层数每到 <span style="color:#3aa675;font-weight:600">100</span> 的倍数时，除触发[魔君接管](/powers/demon_takeover_power.md)与抽 <span style="color:#3aa675;font-weight:600">1</span> 张外，还会获得本能力（**获得后不会消失，持续到战斗结束**）。
- **Boss 侧施加**：Boss 索伦森会直接对玩家施加本能力，效果相同——能量不足时仍可打出卡牌，差额用最大生命值抵扣。
- **最大生命只剩 1 时**：已没有可支付的最大生命，能量不足的牌恢复为不可打出；能量足够的牌不受影响。

## 相关能力

- [堕落](/powers/fallen_power.md)（玩家获得本能力的前置条件）
- [魔君接管](/powers/demon_takeover_power.md)（与堕落满 100 同时触发）

## 源码

- `SeerSoulsonChaosIncarnationPower.cs`