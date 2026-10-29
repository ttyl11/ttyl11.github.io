# 不灭地威

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——不灭地威·萨瑞卡

> **类型**：中性（None）
> **叠加方式**：不叠加
> **可见**：是

<img src="/images/powers/immortal_earth_sarika_power.png" alt="不灭地威" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

### 数值参数

| 参数 | 数值 |
|---|---|
| ThresholdPercent | 5 |

## 描述

自身受到的单次伤害大于自身最大生命值的[blue]5%[/blue]时，立即回复全部生命值。

## 详细机制

- **阈值**：按**未格挡伤害**与最大生命比较，严格大于 5% 才触发（等于 5% 不触发）。
- **非致命伤害**：超过阈值时直接把当前生命回满。
- **致命伤害**：同样先免死，再回满；免死期间不结束战斗。
- 低于阈值时正常受伤，不回复。

## 源码

- `SeerImmortalEarthSarikaPower.cs`
