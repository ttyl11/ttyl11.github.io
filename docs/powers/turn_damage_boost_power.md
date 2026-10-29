# 回合增伤

<img src="/images/powers/turn_damage_boost_power.png" alt="回合增伤" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **归属**：玩家能力
- **类型**：增益
- **叠加**：计数型（层数 = 持续回合数；增伤百分比由施加来源决定）
- **施加来源**：[无始源光](/cards/character/primordial_light.md)、[水天一色](/cards/character/water_sky_one_color.md)、[极光仙子](/relics/epic/aurora_fairy.md)
- **可见**: 是

## 描述

持有者造成的**攻击伤害**提升指定百分比（默认 <span style="color:#3aa675;font-weight:600">10%</span>，由施加来源的数值决定）。

## 详细机制

- 增伤百分比取施加时的卡牌/遗物数值，不是每层叠加；层数只决定持续回合数。
- 只影响拥有者的攻击伤害；固定伤害、流失、充能球伤害不参与。
- 拥有者回合结束时层数 −1，归零后移除。
- 多个来源施加时，后施加的数值会覆盖当前增伤百分比，层数照常累计。

## 源码

- `SeerTurnDamageBoostPower.cs`
- `SeerPrimordialLight.cs`、`SeerWaterSkyOneColor.cs`、`SeerAuroraFairy.cs`（施加来源）
