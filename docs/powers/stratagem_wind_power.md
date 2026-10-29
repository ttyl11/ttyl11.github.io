# 借东风

> **归属**：玩家可施加
> **施加来源**：玩家获得——[诸葛亮](/relics/legendary/zhuge_liang.md)（遗物）
> **类型**：增益（Buff）
> **叠加方式**：按层数叠加（层数＝额外回合数）
> **可见**：是

<img src="/images/powers/stratagem_wind_power.png" alt="借东风" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 计数器（按层数叠加）
- **可见**: 是

## 描述

回合结束时再开启<span style="color:#3aa675;font-weight:600">1</span>回合。

## 详细机制

- **额外回合**：自己回合结束时触发一个额外回合，额外回合结束后层数 −1。
- **按层数叠加**：N 层就是连续开启 N 个额外回合。
- **额外回合可正常出牌**：抽牌、能量、回合结束结算都照常执行。
- **层数用完移除**：每消耗一次 −1，归零消失。

## 源码

- `SeerStratagemWindPower.cs`
