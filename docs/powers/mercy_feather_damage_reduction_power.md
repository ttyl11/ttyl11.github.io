# 怜羽护佑

> **归属**：无（当前版本没有施加来源）
> **施加来源**：暂无——源码中只保留了能力定义，没有任何卡牌、遗物或怪物施加它

<img src="/images/powers/mercy_feather_damage_reduction_power.png" alt="怜羽护佑" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

自身受到的攻击伤害降低[blue]20%[/blue]。

## 详细机制

- **只减攻击伤害**：仅对标记为「攻击伤害」的结算乘 <span style="color:#3aa675;font-weight:600">×0.8</span>；[固定伤害](/powers/fixed_damage_power.md)、灼烧/中毒等 DoT、生命流失都不受影响。
- **按次乘算**：每一段攻击伤害都单独乘 0.8，多段攻击不会额外衰减。
- **单例不叠**：重复获得不会变成 40%，永远只有 20%。
- **与其它减伤相乘**：和永久减伤、格挡等按乘区依次结算。

## 小贴士

- **当前版本拿不到**：这条能力目前没有实际来源，图鉴仅作资料保留；同名遗物[怜羽](/relics/uncommon/mercy_feather.md)已改用「按已损生命获得格挡」的机制，不再赋予此能力。
- **若未来实装**：20% 攻击减伤对多段高频攻击最有效，对固伤/DoT 完全无效。

## 源码

- `SeerMercyFeatherDamageReductionPower.cs`
- `SeerMercyFeather.cs`（同名遗物，当前不施加此能力）
