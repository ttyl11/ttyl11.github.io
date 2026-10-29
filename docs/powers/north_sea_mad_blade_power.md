# 北冥狂刃

<img src="/images/powers/north_sea_mad_blade_power.png" alt="北冥狂刃" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **归属**：玩家能力
- **类型**：增益
- **叠加**：单层
- **施加来源**：[霍光](/relics/epic/huo_guang.md)（历史胜场达到 <span style="color:#3aa675;font-weight:600">5</span> 场后，战斗开始获得）
- **可见**: 是

## 描述

①自身攻击必定[暴击](/mechanics/critical-strike)，自身暴击伤害提升 <span style="color:#3aa675;font-weight:600">40%</span>。
②一回合内，每次造成伤害后，对对手追加等同上次伤害的[固定伤害](/mechanics/fixed-damage)。

## 详细机制

- **必暴 + 40%**：与北冥之刃同机制，增伤在暴击 1.5 倍基础上再乘 1.4。
- **追加固定伤害**：只在该次伤害属于一次**已判定暴击的攻击**时触发；追加量等于该次**伤害总量（含被格挡部分）**，以固定伤害形式挂在目标身上，目标下回合开始时结算。
- 多段攻击逐段触发：每段暴击都会追加一次对应伤害的固定伤害。
- 追加的固定伤害不会再触发追加，不会形成无限连锁。
- 霍光历史胜场达到 5 场后，这是战斗开始的固定能力，替代北冥之刃。

## 源码

- `SeerNorthSeaMadBladePower.cs`
- `SeerHuoGuang.cs`（霍光）
- `SeerCriticalStrikePower.cs`（暴击系统）
