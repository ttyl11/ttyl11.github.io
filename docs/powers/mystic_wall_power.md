# 玄壁

> **归属**：无（当前版本没有施加来源）
> **施加来源**：暂无——源码中只保留了能力定义，没有任何卡牌、遗物或怪物施加它

<img src="/images/powers/mystic_wall_power.png" alt="玄壁" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

每场战斗开始时，获得<span style="color:#3aa675;font-weight:600">5</span>点<span style="color:#d4a017;font-weight:600">格挡</span>。

## 详细机制

- **战斗开始前触发**：在战斗正式开始前获得 5 点格挡，第一回合就能拿来挡伤害。
- **只给一次**：每场战斗仅触发一次，后续回合不再补格挡。
- **当前版本拿不到**：这条能力目前没有实际来源，图鉴仅作资料保留。

## 源码

- `SeerMysticWallPower.cs`
