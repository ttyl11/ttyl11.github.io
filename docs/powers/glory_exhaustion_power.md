# 荣尽枯生

> **归属**：玩家可施加
> **施加来源**：玩家获得——[荣尽枯生](/cards/character/glory_exhaustion.md)（卡牌）

<img src="/images/powers/glory_exhaustion_power.png" alt="荣尽枯生" style="max-width:120px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 计数（层数 = 剩余回合）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 反击中毒层数 | 4（升级 6） |
| 持续回合 | 3 |

## 描述

①受到敌人伤害时，对伤害来源施加<span style="color:#3aa675;font-weight:600">4</span>层<span style="color:#d44;font-weight:600">中毒</span>。<br/>在你的回合开始时层数减1。

## 详细机制

- **触发时机**：拥有者本人受到来自**敌方**的伤害后触发，每段伤害各一次。
- **不要求实际扣血**：只要伤害来源是敌人，**完全格挡也会触发**反击。
- **反击效果**：对伤害来源施加 4 层中毒（升级 +2 至 6）。
- **持续回合**：自己的回合开始时层数 -1，归零后移除。
- **叠加特性**：按计数叠加，多次施加合并层数。

## 相关能力

- [中毒](/powers/poison_power.md)（受到伤害时对来源施加）

## 相关卡牌

- [荣尽枯生](/cards/character/glory_exhaustion.md)（获得 3 回合荣尽枯生效果）

## 源码

- `SeerGloryExhaustionPower.cs`
