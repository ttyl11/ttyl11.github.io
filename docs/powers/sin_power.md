# 万劫罪印

> **归属**：怪物专属（[莫塔里安](/monsters/boss/motalian_monster.md)）
> **类型**：中性（None）
> **叠加方式**：不叠加（以罪行等级记录）
> **可见**：是

## 描述

当前罪行：<span style="color:#d4a017;font-weight:600"></span>。<br/>玩家在一整轮内未打出任何卡牌时，罪印等级在敌人回合结束时降低<span style="color:#3aa675;font-weight:600">1</span>级。

## 详细机制

- **等级 1「待审」**：无额外效果。
- **升级**：莫塔里安的审判会让除自身外的全体生物罪印 +1 级。
- **降级**：玩家一整轮不出牌，敌人回合结束时 −1 级。
- **等级效果**：2 级轻罪、3 级重罪、4 级死罪、5 级不赦之罪，详见各等级能力页。

## 相关能力

- [万劫重枷](/powers/motalian_judgement_power.md)、[轻罪](/powers/sin_light_power.md)、[重罪](/powers/sin_heavy_power.md)、[死罪](/powers/sin_death_power.md)、[不赦之罪](/powers/sin_unpardonable_power.md)

## 源码

- `SeerSinPower.cs`
