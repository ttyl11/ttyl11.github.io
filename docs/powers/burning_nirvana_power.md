# 焚世涅槃

> **归属**：怪物专属（[不灭·艾恩斯](/monsters/boss/bumie_ai_en_si_monster.md)）
> **类型**：中性（None，不可被消除）
> **叠加方式**：不叠加
> **可见**：是

<img src="/images/powers/burning_nirvana_power.png" alt="焚世涅槃" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 描述

①自身回合开始时，未转化的[火种](/powers/spark_power.md)、[火苗](/powers/flame_power.md)与[烈焰](/powers/blaze_power.md)不再消失，保留至下回合继续转化。
②自身回合开始时，敌人每有 1 层[烧伤](/powers/burn_power.md)或[焚烬](/powers/ash_power.md)，自身获得 1 层火种。
③首次死亡时免疫死亡，回复全部生命值并获得 200 层火种。此后每消耗 1 层[燎原之火](/powers/wildfire_power.md)，可额外复活 1 次并回复全部生命值。

## 详细机制

- **保留未转化层数**：普通怪物每回合未转化的火种/火苗/烈焰会消失，艾恩斯因这个被动全部保留，所以转化只是时间问题。
- **从敌方异常获得火种**：你身上的烧伤与焚烬层数会直接变成它的火种，给它叠火系异常等于加速它的连锁。
- **多命复活**：首次死亡必定免疫并回满，还获得 200 层火种；之后每消耗 1 层燎原之火可再复活一次。击杀前要确认它还剩多少燎原之火。

## 相关能力

- [火种](/powers/spark_power.md)、[火苗](/powers/flame_power.md)、[烈焰](/powers/blaze_power.md)、[燎原之火](/powers/wildfire_power.md)
- [火种永存](/powers/eternal_flame_power.md)

## 源码

- `SeerBurningNirvanaPower.cs`
