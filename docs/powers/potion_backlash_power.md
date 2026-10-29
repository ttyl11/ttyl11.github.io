# 药剂反噬

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[奈尼芬多](/monsters/elite/nai_ni_fen_duo_monster.md)

<img src="/images/powers/potion_backlash_power.png" alt="药剂反噬" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 无类型（不参与增益/减益分类，不可被驱散/净化）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

每当你使用<span style="color:#3aa675;font-weight:600">1</span>瓶药水时，失去<span style="color:#3aa675;font-weight:600">6</span>点<span style="color:#d4a017;font-weight:600">最大生命值</span>。

## 详细机制

- **按「使用者」结算**：谁喝药水就扣谁的最大生命，与药水目标无关。
- **只扣最大生命**：不是伤害，不触发格挡/减伤/受击联动，但会连带压低当前生命上限。
- **每瓶都触发**：一次战斗内喝几瓶就扣几次，6 点/瓶，喝多了会被直接压死。
- **常驻整场**：能力不会自行减少或消失。

## 源码

- `SeerPotionBacklashPower.cs`
