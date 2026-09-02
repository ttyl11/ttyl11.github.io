# 奇镰解放

<img src="/images/cards/qi_lian_liberation.png" alt="奇镰解放" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 1
- **能量消耗**: 0
- **类型**: 攻击
- **稀有度**: 罕见
- **目标**: 单个敌方
- **可升级**: 是（1 级）
- **关键词**: 无

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 基础伤害 | 20 | 38 |
| 回复能量 | 3 | 3 |
| 回复生命值 | 12 | 12 |
| PP | 1 | 1 |
| 最大PP | 1 | 1 |
| 冷却场数 | 4 | 4 |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 对单个敌人造成<span style="color:#d44;font-weight:600">20</span>点伤害。回复<span style="color:#3aa675;font-weight:600">3</span>点能量，回复<span style="color:#3aa675;font-weight:600">12</span>点生命值，所有[PP](/mechanics/pp-system.md)牌恢复至满。<span style="color:#9b59b6;font-weight:600">冷却</span><span style="color:#3aa675;font-weight:600">4</span>场战斗——打出后本牌在4场战斗内不可再次使用，每场战斗结束后冷却-1。

## 升级后

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 对单个敌人造成<span style="color:#d44;font-weight:600">38</span>点伤害。回复<span style="color:#3aa675;font-weight:600">3</span>点能量，回复<span style="color:#3aa675;font-weight:600">12</span>点生命值，所有[PP](/mechanics/pp-system.md)牌恢复至满。[冷却](/mechanics/pp-system.md)<span style="color:#3aa675;font-weight:600">4</span>场战斗。

## 详细机制

- **0费四合一**：0能量打出，同时完成——对单体造成基础伤害、回复3能量（相当于下一回合多一张牌的行动力）、回复12点生命值、将所有PP牌PP归满。这是 mod 中罕见的零成本核心引擎卡。
- **清除敌方全属性增益**：打出后立即对场上所有敌方生物调用 `RemovePositiveStatPowers`，移除其所有正值属性的[力量](/powers/strength_power.md)、[防御](/powers/defense_power.md)、[命中](/powers/accuracy_power.md)、[速度](/powers/speed_power.md)加成（仅移除正值，负值不影响）。这是对抗依赖堆叠属性增益的Boss的关键反制手段。
- **冷却机制**：本卡使用自定义冷却系统而非[凝驻](/mechanics/ningzhu.md)。打出后进入4场战斗的不可用状态，`IsPlayable` 在 `CooldownRemaining > 0` 时返回 false。每场战斗结束（`AfterCombatEnd`）自动递减1场，牌组中的牌版本同步更新，保证跨战斗正确追踪。冷却期间可正常抽到但无法主动打出。

## 小贴士

- **核心定位：0费全能力引擎**：0费同时完成伤害+回能+回血+PP全回复+清除敌方四维增益，是整套PP卡组的中枢节点。即使伤害不高（20/38），其综合收益远超普通攻击牌。建议将其视为"回合核心"而非"纯输出"。
- **清除敌方四维增益的战术价值**：许多敌人通过技能或遗物获得大量[力量](/powers/strength_power.md)/[防御](/powers/defense_power.md)加成。打出此卡后，敌方正属性被清零，下一回合你的攻击和自身防御都相对更强。特别适合对抗"叠属性+高攻"类Boss。
- **PP全回复联动**：将所有PP牌PP归满是此卡最重要的功能之一。配合高PP消耗卡（如[王·龙予狂宴](./dragon_feast.md)，PP:1/1）可以反复打出，形成稳定的资源循环。建议卡组中搭配1-2张高PP消耗的核心卡，让此卡的PP回复收益最大化。
- **冷却管理**：冷却4场战斗意味着每张PP牌大约可用4次（PP1 = 1次 + 冷却4场 ≈ 平均每5场战斗1次）。不要试图频繁使用——把它留给关键战（Boss战、属性被叠满的精英战）才最划算。
- **残局回血价值**：12点固定回血在任何血量状态下都是正向收益。若自身HP极低且敌方属性增益严重，此卡的清增益+回血组合可以扭转战局。
- **升级收益分析**：基础伤害从20→38（+18），其他效果不变。由于0费本身就是巨大优势，升级伤害是最直接的强度提升，优先级极高。
- **与[异变](/mechanics/aberration.md)的对比**：异变牌每场战斗使用次数受限，奇镰解放通过4场冷却实现类似限制但机制不同——异变是局内固定次数，奇镰解放是跨战斗冷却，后者灵活性更高。
- **性价比**：0费四合一稀有卡，冷却是唯一的代价。以4场战斗的冷却换取全场战斗的强力辅助效果，投入产出比极高。稀有度合理。

## 相关能力

- [力量](/powers/strength_power.md)（被此卡清除的敌方属性）
- [防御](/powers/defense_power.md)（被此卡清除的敌方属性）
- [命中](/powers/accuracy_power.md)（被此卡清除的敌方属性）
- [速度](/powers/speed_power.md)（被此卡清除的敌方属性）
- [固定伤害](/powers/fixed_damage_power.md)（参考：同为延迟结算的伤害机制）

## 相关机制

- [PP系统](/mechanics/pp-system.md)（PP消耗与回复）
- [凝驻](/mechanics/ningzhu.md)（与凝驻的区别：凝驻控制弃牌堆洗牌，此卡是自定义冷却）
- [消耗](/mechanics/exhaust.md)（另一种牌局限制方式）
- [保留](/mechanics/retain.md)（另一mod关键词：使用后可留在手上）

## 源码

- `SeerQiLianLiberation.cs`
