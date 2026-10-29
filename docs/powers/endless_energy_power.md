# 无尽能源

> **归属**：玩家可施加
> **施加来源**：玩家获得——[无尽能源](/cards/colorless/endless_energy.md)（卡牌）

<img src="/images/powers/endless_energy_power.png" alt="无尽能源" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单次（不叠加）
- **可见**: 否

## 描述

本回合中你每打出一张牌，向你的<span style="color:#d4a017;font-weight:600">手牌</span>中放入1张随机赛尔诅咒。

## 详细机制

- **诅咒牌生成**：每打出一张牌时，当满足以下所有条件时触发：
  1. 能力拥有者存在
  2. 是拥有者打出的牌
  3. 拥有者处于战斗中
- **随机选取**：
  1. 赛尔诅咒取当前解锁的牌，原版诅咒全量收录
  2. 使用同步随机源（CombatCardGeneration）随机选取一张，确保多端一致
  3. 创建卡牌实例，加入手牌底部；只能由拥有者自己的出牌触发，队友打出的牌不计
  4. 合并后的诅咒池为空时不放入
- **回合结束移除**：在拥有者一方回合结束时，移除此能力。
- **打出「无尽能源」本身也会触发一次**：能力在结算时挂上，该牌随后的"打出后"结算立刻塞入第一张诅咒。

## 相关卡牌

- [无尽能源](/cards/colorless/endless_energy.md)：获得 999 点能量并施加此能力

## 源码

- `SeerEndlessEnergyPower.cs`
