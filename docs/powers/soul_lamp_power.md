# 魂灯

> **归属**：怪物专属（[孤烛灯使](/monsters/boss/guzhudengshi_monster.md)、[逆魂·佩特菲德](/monsters/elite/reverse_soul_petefide_monster.md)；玩家侧另有灯）
> **施加来源**：怪物自带——孤烛灯使、逆魂·佩特菲德（`LightMonsterLamp`）
> **类型**：中性（None）
> **叠加方式**：按层数叠加
> **可见**：否（只在专属 UI 中显示）

## 描述

灯亮时，怪物侧每盏使你的最大能量 −1，玩家侧每盏使你的最大能量 +1。
一方点灯时，另一方全部熄灭，存量不变。

## 详细机制

- **不显示为生物身上的能力**：只在魂灯专属 UI 中呈现。
- **点灯来源**：[寒灯渡夜](/powers/cold_lamp_night_power.md) 的抽牌堆/弃牌堆比较。
- **PP 封禁**：怪物亮灯封你「PP 已满」的牌；你亮灯封你「PP 为 1」的牌。
- **复活消耗**：孤烛灯使死亡时优先熸消你的灯，其次自己的；全场无灯才会真死。

## 相关能力

- [寒灯渡夜](/powers/cold_lamp_night_power.md)

## 源码

- `SeerSoulLampPowers.cs`
