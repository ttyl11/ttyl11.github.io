# 堕世

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[索伦森（Soulson）](/monsters/boss/soulson_monster.md)

<img src="/images/powers/soulson_fallen_world_revive_power.png" alt="堕世" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

持续<span style="color:#3aa675;font-weight:600">2</span>回合：自身死亡时立即回复全部生命值复活。

## 详细机制

- **限时免死**：施加后 2 个自己的回合内，首次死亡会被阻止并立即回满生命。
- **一次性**：复活后能力立刻移除，不能连续复活。
- **过期失效**：2 个自己的回合结束仍未触发时，能力自动消失。
- **复活过程无敌**：复活瞬间免疫伤害、能力施加与选中，也不会让战斗提前结束。
- **只保一条命**：不复活时不提供任何减伤，别把它当常驻免死。

## 源码

- `SeerSoulsonFallenWorldRevivePower.cs`
