# 光彻凡心

> **归属**：怪物专属（[孤烛灯使](/monsters/boss/guzhudengshi_monster.md)）
> **类型**：中性（None，不可被消除）
> **叠加方式**：不叠加
> **可见**：是

<img src="/images/powers/light_through_all_hearts_power.png" alt="光彻凡心" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 描述

本场战斗中：<br/>①灯点亮：向敌人的弃牌堆加入<span style="color:#3aa675;font-weight:600">1</span>张<span style="color:#d4a017;font-weight:600">生</span>。<br/>②灯熄灭：向敌人的抽牌堆加入<span style="color:#3aa675;font-weight:600">1</span>张<span style="color:#d4a017;font-weight:600">死</span>。<br/>③灯熸消：向敌人的消耗牌堆加入<span style="color:#3aa675;font-weight:600">1</span>张<span style="color:#d4a017;font-weight:600">煤灰</span>。

## 详细机制

- 光环在孤烛灯使第 1 回合开启，整场持续。
- 「生」在低血抽到时回血，「死」在高血抽到时受伤，「煤灰」是占位废牌。
- **每个对手各一张**：每种事件会给每个存活对手分别塞入对应状态牌。
- 灯越频繁点亮/熄灭，你的三个牌堆被塞得越脏。

## 相关能力

- [寒灯渡夜](/powers/cold_lamp_night_power.md)、[魂灯](/powers/soul_lamp_power.md)

## 源码

- `SeerLightThroughAllHeartsPower.cs`
