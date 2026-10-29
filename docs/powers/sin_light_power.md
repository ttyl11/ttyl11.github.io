# 轻罪

> **归属**：罪印等级（[莫塔里安](/monsters/boss/motalian_monster.md)）
> **类型**：中性（None）
> **叠加方式**：按层数叠加
> **可见**：是

<img src="/images/powers/sin_light_power.png" alt="轻罪" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 描述

造成的攻击伤害提高 10%。
自身回合结束时受到 20 点[固定伤害](/powers/fixed_damage_power.md)。

## 详细机制

- **攻击伤害 +10%**：罪印持有者的攻击伤害 ×1.1。
- **每回合自伤**：自己回合结束时立即结算 20 点固定伤害（不可格挡、不吃增减伤）。
- **层级切换即消失**：罪印等级变化时会被替换，只有当前等级效果生效。

## 相关能力

- [万劫罪印](/powers/sin_power.md)、[重罪](/powers/sin_heavy_power.md)、[死罪](/powers/sin_death_power.md)、[不赦之罪](/powers/sin_unpardonable_power.md)

## 源码

- `SeerSinTierPowers.cs`
