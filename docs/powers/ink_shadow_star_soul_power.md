# 墨影

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[墨影星魂](/monsters/elite/ink_shadow_star_soul_monster.md)

<img src="/images/powers/ink_shadow_star_soul_power.png" alt="墨影" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 无类型（不参与增益/减益分类，不可被驱散/净化）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

登场后的前[blue]2[/blue]回合，敌人无法打出技能牌。

## 详细机制

- **按玩家回合计**：登场后数玩家的回合，前 2 个玩家回合内封锁技能牌，第 3 个玩家回合开始时移除。
- **只封技能牌**：攻击牌、能力牌、状态牌不受影响。

## 源码

- `SeerInkShadowStarSoulPower.cs`
