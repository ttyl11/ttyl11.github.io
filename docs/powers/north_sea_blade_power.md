# 北冥之刃

<img src="/images/powers/north_sea_blade_power.png" alt="北冥之刃" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **归属**：玩家能力
- **类型**：增益
- **叠加**：单层
- **施加来源**：[霍光](/relics/epic/huo_guang.md)（历史胜场不足 <span style="color:#3aa675;font-weight:600">5</span> 时，战斗开始获得）
- **可见**: 是

## 描述

自身攻击必定[暴击](/mechanics/critical-strike)，自身暴击伤害提升 <span style="color:#3aa675;font-weight:600">15%</span>。

## 详细机制

- 获得时自动确保暴击系统在场，攻击前强制本次攻击暴击。
- 只对拥有者的**攻击伤害**生效，固定伤害与流失不参与暴击。
- 增伤是在暴击 1.5 倍的基础上再乘 1.15，不是把倍率改成 1.65。
- 霍光的历史胜场达到 5 场后，战斗开始改为获得[北冥狂刃](/powers/north_sea_mad_blade_power.md)。

## 源码

- `SeerNorthSeaBladePower.cs`
- `SeerHuoGuang.cs`（霍光）
- `SeerCriticalStrikePower.cs`（暴击系统）
