# 爵刻

> **归属**：玩家可施加
> **施加来源**：玩家获得——[爵刻·黑沃德](/relics/epic/jue_ke_blackward.md)（遗物）

<img src="/images/powers/jue_ke_power.png" alt="爵刻" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 计数器（按层数叠加）
- **可见**: 是

## 描述

①自身回合开始时，获得<span style="color:#3aa675;font-weight:600">1</span>层<span style="color:#d4a017;font-weight:600">先制</span>。<br/>②每当自身对敌人造成伤害时，对该敌人造成<span style="color:#3aa675;font-weight:600">6</span>点<span style="color:#d4a017;font-weight:600">固定伤害</span>（无视<span style="color:#d4a017;font-weight:600">格挡</span>），自身回复<span style="color:#3aa675;font-weight:600">3</span>点<span style="color:#d4a017;font-weight:600">生命值</span>，并使该敌人获得<span style="color:#3aa675;font-weight:600">2</span>层<span style="color:#d44;font-weight:600">堕落</span>，然后消耗<span style="color:#3aa675;font-weight:600">1</span>层<span style="color:#9b59b6;font-weight:600">爵刻</span>。

## 详细机制

- **回合开始**：自己的回合开始获得 1 层先制。
- **造成伤害后**：每一段伤害各触发一次（多段攻击会逐段连续触发，同一次伤害结算内不重复触发）；目标获得 6 点固定伤害（下回合开始结算），自身回 3 点生命并 +2 堕落，然后层数 -1。
- 层数为 0 时不再触发伤害部分。

## 源码

- `SeerJueKePower.cs`
