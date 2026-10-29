# 圣裁

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[圣光斯嘉丽](/monsters/elite/holy_light_scarlett_monster.md)

<img src="/images/powers/holy_light_scarlett_power.png" alt="圣裁" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 无类型（不参与增益/减益分类，不可被驱散/净化）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

敌人无法打出带有「堕落」效果的牌。

## 详细机制

- **判定口径**：卡牌标题或描述文本中含「堕落」或「Corruption」即视为带堕落效果（中英双语都认）。
- **只拦敌方**：只封锁与持有者敌对的玩家；持有者自己与友方不受影响。
- 没有持续时间，整场战斗常驻。

## 源码

- `SeerHolyLightScarlettPower.cs`
