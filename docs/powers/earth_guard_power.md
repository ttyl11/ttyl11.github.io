# 大地守护

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[巴斯特](/monsters/boss/buster_monster.md)

<img src="/images/powers/earth_guard_power.png" alt="大地守护" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 无类型（不参与增益/减益分类，不可被驱散/净化）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

①自身受到的伤害降低<span style="color:#3aa675;font-weight:600">60%</span>。<br/>②自身回合开始时，获得<span style="color:#3aa675;font-weight:600">3</span>点<span style="color:#d4a017;font-weight:600">防御</span>。

> 注：巴斯特的 60% 免伤来自独立的[永久减伤](/powers/permanent_damage_reduction_power.md)，覆甲来自原版[覆甲](/powers/plating_power.md)——本能力只负责每回合 +3 防御。

## 详细机制

- 每个自身回合开始时获得 3 点防御，无衰减，战斗内持续。

## 源码

- `SeerEarthGuardPower.cs`
