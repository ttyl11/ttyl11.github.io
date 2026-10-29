# 死罪

> **归属**：罪印等级（[莫塔里安](/monsters/boss/motalian_monster.md)）
> **类型**：中性（None）
> **叠加方式**：按层数叠加
> **可见**：是

<img src="/images/powers/sin_death_power.png" alt="死罪" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 描述

造成的攻击伤害提高<span style="color:#3aa675;font-weight:600">100%</span>。<br/>自身回合结束时，受到等同于自身最大生命值的伤害。

## 详细机制

- **攻击伤害 ×2**：罪印持有者的攻击伤害再乘 2（与其它增伤链式相乘）。
- **每回合自伤**：自己回合结束时，对自己造成等于**当前最大生命值**的伤害——可被格挡，格挡够厚就能活。
- **层级切换即消失**：罪印等级变化时，这个等级能力会被替换；只有当前等级的效果生效。

## 相关能力

- [万劫罪印](/powers/sin_power.md)、[轻罪](/powers/sin_light_power.md)、[重罪](/powers/sin_heavy_power.md)、[不赦之罪](/powers/sin_unpardonable_power.md)

## 源码

- `SeerSinTierPowers.cs`
