# 伽玛觉醒

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——伽玛星魂

<img src="/images/powers/gamma_awakening_power.png" alt="伽玛觉醒" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**：中性（None）
- **叠加方式**：计数（层数 = 剩余回合）
- **可见**：是

### 数值参数

| 参数 | 数值 |
|---|---|
| 每次格挡 | 18 |

## 描述

持续期间，敌人每打出[blue]1[/blue]张攻击牌，该牌[gold]PP[/gold]清零，自身获得[blue]18[/blue]点[gold]格挡[/gold]。

## 详细机制

- **触发条件**：敌方玩家每打出 1 张攻击牌（不限 PP 牌）。
- **PP 清零**：该牌若是 PP 牌，则把 PP 设为 0；非 PP 牌只触发格挡。
- **格挡**：自身获得 18 点格挡，按正常「获得格挡」结算（受敏捷等修正影响）。
- **持续**：每次玩家回合结束 -1 层，归零移除。

## 源码

- `Models/Powers/SeerNewSkillPowersE.cs`（`SeerGammaAwakeningPower`）
