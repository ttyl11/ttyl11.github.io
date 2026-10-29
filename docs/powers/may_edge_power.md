# 锋芒

> **归属**：玩家可施加
> **施加来源**：玩家获得——[五月的锋芒](/cards/character/may_edge.md)（卡牌）

<img src="/images/powers/may_edge_power.png" alt="锋芒" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

自身攻击<span style="color:#d4a017;font-weight:600">暴击</span>时，获得<span style="color:#3aa675;font-weight:600">1</span>层<span style="color:#d4a017;font-weight:600">先制</span>。

## 详细机制

- **触发条件**：自身打出**攻击伤害且结算值大于 0** 的暴击——被完全格挡也算造成了伤害（判定看伤害总量，不是实际掉血），会触发。
- **一次攻击只给 1 层**：多段攻击、多目标攻击都只结算一次，不会因为段数/目标数翻倍。
- **暴击判定**：读取攻击时的真实暴击结果，[锁定II](/powers/lock_two_power.md)、必暴类效果都算。
- **先制用途**：[先制](/powers/first_strike_power.md)用于修正下一张牌的耗能，层数越多下一张牌越省。

## 小贴士

- **暴击流的续航件**：暴击率越高，先制来得越快，适合暴击连击型构筑滚雪球。
- **多段不双吃**：别指望多段攻击一次叠多层，它按「每次攻击」结算。
- **配必暴最稳**：锁定II、必暴遗物能让它每刀稳定 +1 层，不用赌暴击率。

## 源码

- `SeerMayEdgePower.cs`
