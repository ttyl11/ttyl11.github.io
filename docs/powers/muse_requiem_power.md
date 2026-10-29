# 安魂曲

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[缪斯](/monsters/boss/muse_monster.md)

<img src="/images/powers/muse_requiem_power.png" alt="安魂曲" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 按层数叠加（层数＝剩余触发次数）
- **可见**: 是

## 描述

受到攻击伤害时，令攻击者获得<span style="color:#3aa675;font-weight:600">2</span>层<span style="color:#d4a017;font-weight:600">睡眠</span>。<br/>剩余<span style="color:#3aa675;font-weight:600">层数</span>次。

## 详细机制

- **触发条件**：缪斯受到**攻击伤害**且实际掉血（未格挡伤害 > 0）才触发；固伤、DoT、完全被格挡的攻击都不算。
- **反击睡眠**：对攻击者施加 <span style="color:#3aa675;font-weight:600">2</span> 层[睡眠](/powers/sleep_power.md)——睡眠者攻击伤害 ×0.5，且每次自己回合结束减 1 层。
- **受击会减层**：缪斯施加的睡眠受天蛇之瞳保护，受击时只减 1 层而不是直接解除；因此多段攻击能更快把睡眠打醒。
- **按次数消耗**：每触发一次，安魂曲自身 −1 层，层数归零后移除。
- **多段攻击多次触发**：每一段造成实际伤害的攻击都会触发一次，同时消耗一次层数。

## 小贴士

- **别用多段硬打**：多段攻击会连着触发安魂曲，把自己的睡眠层数打薄，反而更快醒来；单发高伤更划算。
- **先清层数再爆发**：安魂曲层数有限，可以用低伤害攻击把次数骗光，再全力输出。
- **睡眠会削输出**：睡眠期间攻击伤害 ×0.5，爆发前先确认自己没被睡。

## 源码

- `SeerMuseRequiemPower.cs`
- `SeerSleepPower.cs`（睡眠）
