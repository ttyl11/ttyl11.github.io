# 炫目天轮

> **归属**：怪物专属（[圣光斯嘉丽（Boss）](/monsters/boss/holy_light_scarlett_boss_monster.md)）
> **类型**：中性（None，不可被消除）
> **叠加方式**：不叠加
> **可见**：是

<img src="/images/powers/dazzling_wheel_power.png" alt="炫目天轮" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 描述

本场战斗中，自身每次切换持有的光线时，所有可叠加的敌方减益状态与自身的增益状态层数 + 当前持有光线数。

## 详细机制

- 斯嘉丽的多数招式都会「随机切换持有的光线」，每次切色都会触发这层加层。
- 敌方减益（中毒/流血/焚烬/衰弱等）会越来越厚；它自己的增益也会越叠越高。
- 颜色越多，单次切色加的层数越多，后期滚雪球极快。

## 相关能力

- [七曜天轮](/powers/seven_luminaries_power.md)

## 源码

- `SeerDazzlingWheelPower.cs`
