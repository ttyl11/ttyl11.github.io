# 信徒

> **归属**：玩家可施加
> **施加来源**：玩家获得——[四月的信徒](/cards/character/april_believer.md)（卡牌）

<img src="/images/powers/april_believer_power.png" alt="信徒" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

自身对处于<span style="color:#d44;font-weight:600">异常状态</span>的敌人造成的伤害翻倍。

## 详细机制

- **触发条件**：当拥有者造成**攻击伤害**时检查目标；固定伤害、DoT 等非攻击伤害不翻倍。
- **伤害翻倍**：若目标持有任意一种异常状态（共 27 种，含狂暴/星赐），该次攻击伤害 ×2；否则无变化。
- **多异常不叠乘**：目标身上有再多异常也只翻一次，不会 ×4、×8。
- **无层数设计**：无层数，效果只看"有无"，单层即可触发翻倍；重复获得仍是 ×2。

## 相关卡牌

- [四月的信徒](/cards/character/april_believer.md)（获得信徒能力）

## 源码

- `SeerAprilBelieverPower.cs`
