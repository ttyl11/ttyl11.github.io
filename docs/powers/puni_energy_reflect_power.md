# 能量反弹

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[谱尼](/monsters/boss/puni_monster.md)

<img src="/images/powers/puni_energy_reflect_power.png" alt="能量反弹" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 叠加
- **可见**: 是

## 描述

受到攻击伤害时，将实际受到的伤害×<span style="color:#3aa675;font-weight:600">2</span>反弹给攻击者，然后层数-<span style="color:#3aa675;font-weight:600">1</span>。

## 详细机制

- **层数＝剩余次数**：能量形态一次性施加 <span style="color:#3aa675;font-weight:600">7</span> 层，每次反弹消耗 1 层，用完移除。
- **只反攻击伤害**：需要「攻击伤害」且实际掉血 > 0；完全被格挡、固定伤害、DoT 都不触发，也不消耗层数。
- **按实际掉血翻倍**：以未格挡伤害 ×2 反弹给攻击者，反弹本身是无加成伤害。
- **多段各算各的**：每一段命中都会独立反弹并消耗 1 层，多段攻击能快速把 7 层耗光。

## 源码

- `SeerPuniEnergyReflectPower.cs`
