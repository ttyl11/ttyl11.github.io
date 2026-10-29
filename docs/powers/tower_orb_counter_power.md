# 高塔充能球

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[巴斯特](/monsters/boss/buster_monster.md)「凌驾万物」充能

<img src="/images/powers/tower_orb_counter_power.png" alt="高塔充能球" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 叠加
- **可见**: 否（后台静默运行，不显示图标）

## 描述

每回合开始时，每球获得1层<span style="color:#d4a017;font-weight:600">覆甲</span>。

## 详细机制

- **每球每回合 +1 覆甲**：巴斯特自己回合开始时，按当前球数施加等量[覆甲](/powers/plating_power.md)。
- **最多 2 个球**：超过上限再充能时，先激发最旧的球——获得 4 层覆甲，再补 1 个新球。
- **覆甲会滚雪球**：覆甲在回合结束提供格挡、回合开始 −1 层，球越多每回合叠得越快。
- **隐藏图标**：能力本身不显示，球数由专属充能球 UI 呈现。

## 源码

- `SeerTowerOrbCounterPower.cs`
