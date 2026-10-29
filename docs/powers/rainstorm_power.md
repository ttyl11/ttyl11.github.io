# 雷雨天

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[雷伊](/monsters/boss/ray_monster.md)

<img src="/images/powers/rainstorm_power.png" alt="雷雨天" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 无类型（不参与增益/减益分类，不可被驱散/净化）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

①自身攻击必定<span style="color:#d4a017;font-weight:600">暴击</span>。<br/>②自身每次造成伤害（含自伤）后，获得<span style="color:#3aa675;font-weight:600">1</span>个<span style="color:#d4a017;font-weight:600">闪电充能球</span>。<br/>③<span style="color:#d4a017;font-weight:600">闪电充能球</span>造成的伤害不会获得充能球。

## 详细机制

- **必暴**：雷伊的攻击全部按真暴击结算，×1.5 由暴击引擎处理，并触发「暴击时」联动。
- **受伤就充能**：每次实际造成伤害（未格挡 > 0）后获得 1 个[闪电充能球](/powers/lightning_orb_counter_power.md)；自伤也算。
- **球不再生球**：充能球造成的伤害带专门标记，不触发本条，避免无限循环。
- **球的上限与结算**：最多 2 个球；自己回合结束时每个球对随机一名玩家造成 3 点伤害，满 2 球再充能会先激发最旧的球造成 8 点伤害。
- **只认自己的伤害**：队友/敌人造成的伤害不给雷伊充能。

## 源码

- `SeerRainstormPower.cs`
