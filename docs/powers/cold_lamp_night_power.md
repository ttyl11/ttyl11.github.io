# 寒灯渡夜

> **归属**：怪物专属（[孤烛灯使](/monsters/boss/guzhudengshi_monster.md)）
> **类型**：中性（None，不可被消除）
> **叠加方式**：不叠加
> **可见**：是

<img src="/images/powers/cold_lamp_night_power.png" alt="寒灯渡夜" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 描述

①你的回合开始时，比较你的抽牌堆与弃牌堆：抽牌堆更多则孤烛灯使点亮自身 1 盏[魂灯](/powers/soul_lamp_power.md)，弃牌堆更多则点亮你 1 盏魂灯。
②孤烛灯使受到致命伤害时，熸消 1 盏魂灯并回复全部生命值（优先消耗你的魂灯）。
③灯火点亮时施加 PP 封禁：孤烛灯使的灯亮，你的 PP 为满值的牌无法打出；你的灯亮，你的 PP 为 1 的牌无法打出。

## 详细机制

- **拔河判定**：每个玩家的回合开始时独立比较自己的抽牌堆与弃牌堆；数量相等时不点灯。
- **点灯即熄对方**：一方点灯时，另一方全部熄灭，存量不变。
- **PP 封禁**：孤烛灯使亮灯 → 你 PP 已满的牌无法打出；你亮灯 → 你 PP 为 1 的牌无法打出。
- **复活**：受到致命伤害时熸消 1 盏魂灯回满血，优先消耗你的灯；全场无灯时才会真正死亡。

## 相关能力

- [魂灯](/powers/soul_lamp_power.md)
- [光彻凡心](/powers/light_through_all_hearts_power.md)

## 源码

- `SeerColdLampNightPower.cs`
- `SeerSoulLampPowers.cs`
