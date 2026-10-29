# 不赦之罪

> **归属**：罪印等级（[莫塔里安](/monsters/boss/motalian_monster.md)）
> **类型**：中性（None）
> **叠加方式**：按层数叠加
> **可见**：是

<img src="/images/powers/sin_unpardonable_power.png" alt="不赦之罪" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 描述

造成的攻击伤害提高 300%。
自身回合结束时死亡，且无法被任何效果复活。

## 详细机制

- **攻击伤害 +300%**：罪印持有者的攻击伤害 ×4，是五级罪行里最暴力的输出加成。
- **回合结束必死**：自己回合结束时直接击杀自己，且带强制标记——复活/免死类效果都拦不住。
- **层级切换即消失**：罪印等级变化时会被替换；只有当前等级效果生效。
- **本质是倒计时**：升到 5 级后，它最多再活一个自己的回合，要么在这回合打死你，要么自己死。

## 相关能力

- [万劫罪印](/powers/sin_power.md)、[轻罪](/powers/sin_light_power.md)、[重罪](/powers/sin_heavy_power.md)、[死罪](/powers/sin_death_power.md)

## 源码

- `SeerSinTierPowers.cs`
