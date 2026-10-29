# 万劫重枷

> **归属**：怪物专属（[莫塔里安](/monsters/boss/motalian_monster.md)）
> **类型**：中性（None，不可被消除）
> **叠加方式**：不叠加
> **可见**：是

<img src="/images/powers/motalian_judgement_power.png" alt="万劫重枷" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 描述

①自身回合开始时，若场上没有<span style="color:#d4a017;font-weight:600">罪人</span>，召唤<span style="color:#3aa675;font-weight:600">1</span>名罪人。<br/>②若场上已有罪人，对除自身外的全体生物执行一次<span style="color:#d4a017;font-weight:600">审判</span>，提升其罪印等级并按罪印结算。

## 详细机制

- **审判**：每次自身回合开始，只要场上有罪人，就会给除自己外的所有生物升 1 级罪印。
- **空过降级**：玩家一整轮未打出任何卡牌时，罪印等级在敌人回合结束时降低 1 级。
- **等级后果**：2 级轻罪、3 级重罪、4 级死罪、5 级不赦之罪，具体效果见各罪印能力页。

## 相关能力

- [万劫罪印](/powers/sin_power.md)、[轻罪](/powers/sin_light_power.md)、[重罪](/powers/sin_heavy_power.md)、[死罪](/powers/sin_death_power.md)、[不赦之罪](/powers/sin_unpardonable_power.md)

## 源码

- `SeerMotalianJudgementPower.cs`
- `SeerMotalianMonster.cs`
