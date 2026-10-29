# 不灭之血

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[泰勒斯](/monsters/normal/tailesi_monster.md)

<img src="/images/powers/infinite_blood_power.png" alt="不灭之血" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 计数器（按层数叠加）
- **可见**: 是

## 描述

首次死亡时复活，生命值显示为无穷；复活后强制使用「泰勒斯猜想」，随后自身死亡。

## 详细机制

- **复活**：致死时把最大生命与当前生命设为 999,999,999，并显示为「无限生命」（不显示数字）。
- **复活回合**：切到专用复活招式，该招式**必定执行一次**（泰勒斯猜想），随后自杀。
- **死亡不清能力**：复活期间保留所有非减益能力，只清除减益。

## 源码

- `SeerInfiniteBloodPower.cs`
