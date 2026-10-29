# 夜使

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[夜使·库帕帕](/monsters/elite/night_envoy_kupapa_monster.md)开局常驻
> **类型**：中性（None）
> **叠加方式**：单例（不可叠加）
> **可见**：是

<img src="/images/powers/night_envoy_kupapa_power.png" alt="夜使" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

### 数值参数

| 参数 | 数值 |
|---|---|
| IntangibleStacks | 99 |

## 描述

战斗开始时，获得[blue]99[/blue]层[gold]无实体[/gold]。

## 详细机制

- **开局直接挂 99 层无实体**：库帕帕登场即获得，覆盖整场战斗。
- **无实体效果**：受到的任何伤害最高只结算 <span style="color:#3aa675;font-weight:600">1</span> 点——多段攻击也只能每段打 1 点，99 层基本等于整场常驻。
- **无实体可被消耗**：无实体按回合递减，拖得足够久（99 回合）才会掉完。

## 源码

- `SeerNightEnvoyKupapaPower.cs`
