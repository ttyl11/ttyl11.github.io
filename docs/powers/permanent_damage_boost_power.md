# 永久增伤

> **归属**：玩家与怪物均可持有
> **施加来源**：玩家获得——[龙舞·祭](/cards/character/dragon_martial_sacrifice.md)（卡牌）、[九死未悔](/cards/character/nine_death_no_regret.md)（卡牌）、[千里击涛!!!](/cards/colorless/thousand_miles_wave.md)（卡牌）、[卩](/enchantments/five_tone_seal.md)（附魔）、[神兽空间](/events/divine_beast_space.md)（事件）、[圣光重生](/powers/holy_light_spirit_revive_power.md)（能力联动）、[火种](/powers/spark_power.md)（能力联动）、[厉魇魔王·咤克斯](/relics/rare/demon_king.md)（遗物）、[圣光灵神](/relics/legendary/holy_light_spirit.md)（遗物）；怪物自带——[百罗鬼帝](/monsters/boss/bailuoguidi_monster.md)、[孤烛灯使](/monsters/boss/guzhudengshi_monster.md)、[莫塔里安](/monsters/boss/motalian_monster.md)、[不灭地威·萨瑞卡](/monsters/elite/immortal_earth_sarika_monster.md)、[月照星魂](/monsters/elite/moonlit_star_soul_monster.md)

<img src="/images/powers/permanent_damage_boost_power.png" alt="永久增伤" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 叠加（计数型，不自动递减）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 伤害加成百分比 | 每 1 点 = +1% |

## 描述

攻击伤害永久增加 <span style="color:#3aa675;font-weight:600">1</span>%（每点）。不会因攻击而移除。

## 详细机制

- **伤害加成**：当拥有者造成攻击伤害时，伤害 × (1 + 点数/100)。
  - 如 <span style="color:#3aa675;font-weight:600">10</span> 点 = <span style="color:#3aa675;font-weight:600">1.1</span> 倍伤害，<span style="color:#3aa675;font-weight:600">100</span> 点 = <span style="color:#3aa675;font-weight:600">2</span> 倍伤害。
- **与[增伤](/powers/next_damage_boost_power.md)的区别**：永久增伤不会在攻击后移除，持续到战斗结束；**不会被任何「消除增益 / 驱散」效果清除**。
- **不参与消除**：虽然类型是增益（Buff），但不会被任何「消除增益 / 驱散」类效果清除；复制、计数等其它增益交互照常生效。PowerType 仍保持 Buff。
- **动态变量更新**：点数变化时同步到增伤百分比变量。
- **永久系统跨战斗保留**：通过永久属性系统获得的增伤，每场战斗开始时自动重新施加。

## 相关卡牌

- 参考各卡牌描述中提到的"永久增伤"

## 源码

- `SeerPermanentDamageBoostPower.cs`
