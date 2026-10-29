# 能量反弹

> **归属**：玩家可施加
> **施加来源**：玩家获得——[能量](/cards/basic/energy.md)（卡牌）

<img src="/images/powers/energy_reflect_power.png" alt="能量反弹" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 实例化（每次施加独立实例）
- **可见**: 是
- **允许负值**: 否

### 数值参数

| 参数 | 数值 |
|---|---|
| 反弹倍率 | 150（模板默认；能量牌 200，升级 350） |

## 描述

下一次受到伤害时，反弹<span style="color:#3aa675;font-weight:600">{ReflectMultiplier}</span>%的伤害（能量牌 200%，升级 350%）。

## 详细机制

- **触发条件**（需全部满足）：
  1. 持有者受到伤害；
  2. 有攻击者，且不是自己、不是友方（只反弹敌方造成的伤害）；
  3. 本次伤害是攻击伤害（持续伤害、[gold]固定伤害[/gold]等非攻击伤害不触发）；
  4. 实际穿过格挡的伤害 > 0（被完全格挡时不触发，能力也不会消耗）。
- **反弹伤害计算**：反弹伤害 = 未格挡伤害 × 反弹倍率 / 100（向下取整）。
  - 如反弹倍率为 200 时，反弹 <span style="color:#3aa675;font-weight:600">200</span>% 的未格挡伤害。
  - 如反弹倍率为 350 时，反弹 <span style="color:#3aa675;font-weight:600">350</span>% 的未格挡伤害。
- **伤害类型**：不吃力量等加成，但**可以被格挡**；不是[gold]固定伤害[/gold]。
- **触发后移除**：反弹后移除此能力（仅生效一次）。
- **数值同步**：施加时将反弹倍率同步为层数值（能量牌为 200%，升级后 350%）。
- **同名区分**：谱尼的[能量反弹](/powers/puni_energy_reflect_power)是「实际伤害 ×2 反弹，共 7 次」，与本能力不是同一个。

## 相关卡牌

- [能量](/cards/basic/energy.md)（反弹 <span style="color:#3aa675;font-weight:600">200</span>% 伤害，升级后 <span style="color:#3aa675;font-weight:600">350</span>%）

## 源码

- `SeerEnergyReflectPower.cs`
