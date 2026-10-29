# 混沌属性



<img src="/images/powers/chaos_attribute_power.png" alt="混沌属性" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

自身造成的攻击伤害与所受攻击伤害，各自随机变为 [blue]0.5[/blue] / [blue]1[/blue] / [blue]1.5[/blue] / [blue]2[/blue] 倍。

## 详细机制

- **四档等概率**：每次攻击开始前各掷一次，四档各 <span style="color:#3aa675;font-weight:600">25%</span>；造成伤害与承受伤害是**两次独立随机**，可能一个 2 倍、另一个 0.5 倍。
- **整次攻击统一**：同一次攻击命令的所有段数共用同一个倍率，不会每段单独变。
- **只影响攻击伤害**：固定伤害、DoT 等非攻击伤害不受影响。
- **双向作用**：造成的倍率只作用于自己打出的攻击；承受的倍率只作用于自己受到的攻击。

## 源码

- `SeerChaosAttributePower.cs`
