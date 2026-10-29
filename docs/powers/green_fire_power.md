# 绿火

> **归属**：玩家可施加
> **施加来源**：玩家获得——[四象琉璃盏](/relics/ancient/orobos_four_flames.md)（遗物）；玩家施加给敌方——[🟢 绿火](/potions/green_fire_potion.md)（药水）

<img src="/images/powers/green_fire_power.png" alt="绿火" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 计数器（层数不影响效果）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 每次四维提升 | 1 |

## 描述

每回合开始时，获得力量、命中、防御、速度 +1。

## 详细机制

- **触发时点**：持有者**自己的回合开始时**（不是每 3 回合）。
- **效果**：力量、命中、防御、速度各 +1。
- **层数不叠加效果**：多层不会变成每回合 +N，也不会改变触发频率。

## 源码

- `SeerGreenFirePower.cs`
