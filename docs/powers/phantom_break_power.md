# 幻灵破碎

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物施加给玩家——[暴君史莱姆](/monsters/normal/tyrant_slime_monster.md)

<img src="/images/powers/phantom_break_power.png" alt="幻灵破碎" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff）
- **叠加方式**: 计数器（按层数叠加）
- **可见**: 是

## 描述

每当有<span style="color:#d4a017;font-weight:600">状态牌</span>进入你的消耗牌堆时，失去<span style="color:#3aa675;font-weight:600">层数</span>点<span style="color:#d4a017;font-weight:600">最大生命值</span>。

## 详细机制

- **只看状态牌**：只有类型为「状态」的牌进入消耗牌堆才触发；攻击/技能/能力/诅咒牌都不算。
- **任何消耗方式都算**：主动消耗、虚无/虚无类效果、卡牌自身消耗等，只要状态牌进了消耗堆就触发。
- **每次固定 1 点**：扣 1 点最大生命，不随层数增加——层数再多也是每次 1 点。
- **只看自己的牌**：队友的状态牌被消耗不触发。
- **整场常驻**：层数不会自然减少，整场战斗持续生效。

## 源码

- `SeerPhantomBreakPower.cs`
