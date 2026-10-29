# 源光汲生

> **归属**：玩家可施加
> **施加来源**：玩家获得——[无始源光](/cards/character/primordial_light.md)（卡牌）

<img src="/images/powers/primordial_light_damage_power.png" alt="无始源光·伤害" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 叠加
- **可见**: 是

## 描述

①打出卡牌时，对对手造成伤害并回复等量<span style="color:#d4a017;font-weight:600">生命值</span>。<br/>②自身<span style="color:#d4a017;font-weight:600">生命值</span>低于<span style="color:#3aa675;font-weight:600">50%</span>时，伤害与回复量翻倍。<br/>在你的回合结束时层数-<span style="color:#3aa675;font-weight:600">1</span>。

## 详细机制

- **每次出牌打一下**：自己每打出一张牌，随机选 1 名可命中敌人造成伤害，并回复等量生命。
- **基础 1 点**：常态每次 1 点伤害 + 1 点回复；自身生命低于 50% 时翻倍为 2 点 + 2 点。
- **伤害可被格挡**：这是普通无加成伤害（不是固定伤害），格挡能吃掉；回血量按伤害数值（1/2 点）计算，与是否被格挡无关。
- **层数＝持续回合**：自己回合结束时 −1，归零移除。
- **多段出牌多次触发**：每张牌各触发一次，一回合打得越多吸得越多。

## 源码

- `SeerPrimordialLightDamagePower.cs`
