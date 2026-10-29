# 天曜沉滞

> **归属**：怪物施加给玩家
> **施加来源**：怪物自带——[圣光斯嘉丽](/monsters/boss/holy_light_scarlett_boss_monster.md)「王·圣璨天洁」
> **类型**：减益（Debuff）
> **叠加方式**：按层数叠加
> **可见**：是

<img src="/images/powers/prism_cost_up_power.png" alt="天曜沉滞" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 描述

接下来打出的前<span style="color:#3aa675;font-weight:600">层数</span>张牌，每张耗能+<span style="color:#3aa675;font-weight:600">1</span>。

## 详细机制

- **层数＝剩余张数**：每打出一张自己的牌消耗 1 层，层数归零后移除。
- **只加耗能**：每张牌的实际耗能 +1；X 费牌与负费牌不受影响。
- **只算自己打出的牌**：队友/敌人出牌不消耗层数。
- **多张叠加**：多次施加会累加层数，等于延长受影响牌数。
- **可能打不出**：能量不足时，+1 后的牌直接无法打出。

## 源码

- `SeerPrismCostUpPower.cs`
