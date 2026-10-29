# 霜华噬命

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[布蕾里克](/monsters/elite/buleilike_monster.md)
> **类型**：中性（None）
> **叠加方式**：不叠加
> **可见**：是

<img src="/images/powers/buleilike_power.png" alt="霜华噬命" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

### 数值参数

| 参数 | 数值 |
|---|---|
| ThresholdPercent | 1 |
| DrainPerLevel | 2 |

## 描述

①单次受伤超过自身最大生命值的<span style="color:#3aa675;font-weight:600">1%</span>时，将自身的<span style="color:#d4a017;font-weight:600">属性提升</span>转移给所有敌人。<br/>②此后每回合开始时吸取生命，数值为所有敌人<span style="color:#d4a017;font-weight:600">属性提升</span>层数之和×<span style="color:#3aa675;font-weight:600">2</span>；敌人失去等量生命值，自身回复等量生命值。

## 源码

- `SeerBuleilikePower.cs`
