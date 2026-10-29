# 减伤

> **归属**：玩家可施加
> **施加来源**：玩家获得——[王·联盟审判](/cards/character/king_alliance_judgment.md)（卡牌）

<img src="/images/powers/next_damage_reduction_power.png" alt="减伤" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 递减（计数型）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 伤害减免百分比 | 10（每层） |

## 描述

下一次受到的攻击伤害降低<span style="color:#3aa675;font-weight:600">10%</span>。

## 详细机制

- **伤害减免**：当拥有者受到攻击伤害时，伤害 × (1 - 层数/100)。
  - 如 <span style="color:#3aa675;font-weight:600">10</span> 层 = 免疫攻击伤害，<span style="color:#3aa675;font-weight:600">5</span> 层 = 减半伤害。
- **层数可叠加**：多次获得会累加，层数就是减伤百分比。
- **受到任意伤害即消耗**：不只攻击伤害——固定伤害、DoT 等任何一次受伤都会移除本能力（即使伤害被完全格挡也会消耗）。
- **动态变量更新**：层数变化时同步到减伤百分比变量。

## 相关卡牌

- 参考各卡牌描述中提到的"减伤"

## 源码

- `SeerNextDamageReductionPower.cs`
