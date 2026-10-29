# 无尽幻象

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[史莱姆国王](/monsters/normal/slime_king_monster.md)
> **类型**: 无类型（不参与增益/减益分类，不可被驱散/净化）
> **叠加方式**: 计数（层数不影响分裂数量）
> **可见**: 是

<img src="/images/powers/endless_illusion_power.png" alt="无尽幻象" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 描述

死亡时分裂为2只史莱姆。

## 详细机制

- **触发条件**：只在[史莱姆国王](/monsters/normal/slime_king_monster.md)自身死亡时触发；被免死或复活拦截的死亡不触发。
- **召唤延迟**：先等待死亡动画播放完毕，再召唤新怪物。
- **召唤位置**：2 只[史莱姆](/monsters/normal/slime_monster.md)分别出现在战斗场景预留的 `summon1`、`summon2` 位置。
- **不建立随从关系**：召唤出的史莱姆不是国王的随从，不会因国王已经死亡而连带消失。
- **战斗不会提前结束**：能力会让战斗在国王死亡时继续，必须再清光召唤出的 2 只史莱姆（以及场上其他敌人）才会胜利。

## 源码

- `SeerEndlessIllusionPower.cs`
