# 圣灵削能

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——圣战·瑞尔斯

<img src="/images/powers/holy_spirit_energy_drain_power.png" alt="圣灵削能" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**：中性（None）
- **叠加方式**：计数（层数 = 剩余回合）
- **可见**：是

### 数值参数

| 参数 | 数值 |
|---|---|
| 每次 PP 削减 | 2 |

## 描述

持续期间，敌人每打出[blue]1[/blue]张[gold]赛尔牌[/gold]，该牌[gold]PP[/gold]-[blue]2[/blue]；每扣除[blue]1[/blue]点[gold]PP[/gold]，对打出该牌的敌人造成[blue]1[/blue]点[gold]固定伤害[/gold]。

## 详细机制

- **只认赛尔 PP 牌**：非 PP 牌不触发；打出前 PP 已为 0 的牌也不触发。
- **削减量**：PP 实际扣除量取 `min(2, 打出后剩余 PP)`，扣到 0 为止。
- **固定伤害**：按 `min(2, 打出前 PP)` 计量，与实际扣除量**可能不等**——打出前 PP=2、本次 PP 费用 1 时只扣 1 点，却仍按 2 点算固定伤害；施加给打出者，在**其下个回合开始**结算。
- **持续**：每次玩家回合结束 -1 层，归零移除。

## 源码

- `Models/Powers/SeerNewSkillPowersG.cs`（`SeerHolySpiritEnergyDrainPower`）
