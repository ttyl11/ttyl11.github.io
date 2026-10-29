# 虹羽

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[虹羽·茜尔](/monsters/elite/rainbow_feather_xier_monster.md)常驻
> **类型**：中性（None）
> **叠加方式**：不叠加
> **可见**：是

<img src="/images/powers/rainbow_feather_xier_power.png" alt="虹羽" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

### 数值参数

| 参数 | 数值 |
|---|---|
| BoostPercent | 100 |

## 描述

首次回复全部生命值时，获得[blue]100%[/blue][gold]永久增伤[/gold]。

## 详细机制

- **触发条件**：茜尔的当前生命值首次回到最大生命值（满血）时触发；掉血后回满也算。
- **一次性**：整场只触发一次，触发后不会重复获得。
- **100% 永久增伤**：获得一层[永久增伤](/powers/permanent_damage_boost_power.md)，攻击伤害 ×2，整场保留。
- **只认满血**：差 1 点血都不算，必须真正回满。
- **满血开局不触发**：开局就是满血也不会立即触发，需要先掉血再回满。

## 源码

- `SeerRainbowFeatherXierPower.cs`
