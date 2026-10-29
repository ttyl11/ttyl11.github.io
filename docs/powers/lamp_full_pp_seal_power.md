# 盈辉禁绝

> **归属**：怪物施加给玩家
> **施加来源**：孤烛灯使的灯火点亮时

> **类型**：中性（None）
> **叠加方式**：不叠加
> **可见**：是

<img src="/images/powers/lamp_full_pp_seal_power.png" alt="盈辉禁绝" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 描述

孤烛灯使的灯火点亮时，你[gold]PP[/gold]为满值的牌无法打出。

## 详细机制

- **只封自己**：只拦截持有者自己的牌。
- **判定**：赛尔 PP 牌且当前 PP ≥ 上限时不可打出；非 PP 牌、未满 PP 牌照常。
- 灯火熄灭时由驱动力移除。

## 源码

- `SeerLampFullPpSealPower.cs`
