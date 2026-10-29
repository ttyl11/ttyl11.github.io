# 永久减伤

> **归属**：玩家与怪物均可持有
> **施加来源**：玩家获得——[龙舞·祭](/cards/character/dragon_martial_sacrifice.md)（卡牌）、[不朽之盾](/cards/character/immortal_shield.md)（卡牌）、[九死未悔](/cards/character/nine_death_no_regret.md)（卡牌）、[卩](/enchantments/five_tone_seal.md)（附魔）、[神兽空间](/events/divine_beast_space.md)（事件）、[山神之力](/powers/mountain_god_power.md)（能力联动）、[火种](/powers/spark_power.md)（能力联动）、[厉魇魔王·咤克斯](/relics/rare/demon_king.md)（遗物）；怪物自带——[巴斯特](/monsters/boss/buster_monster.md)、[异星装甲·赛伯斯特](/monsters/elite/alien_armor_sebst_monster.md)、[大地之神·卡修斯](/monsters/elite/earth_god_casius_monster.md)、[孤烛灯使](/monsters/boss/guzhudengshi_monster.md)、[莫塔里安](/monsters/boss/motalian_monster.md)、[希拓](/monsters/elite/xituo_monster.md)、[百罗鬼帝](/monsters/boss/bailuoguidi_monster.md)

<img src="/images/powers/permanent_damage_reduction_power.png" alt="永久减伤" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 叠加（计数型，不自动递减）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 伤害减免百分比 | 每 1 点 = -1% |

## 描述

受到的攻击伤害永久减少 <span style="color:#3aa675;font-weight:600">1</span>%（每点）。不会因受击而移除；通过永久属性系统获得的减伤会在每场战斗重新施加。

## 详细机制

- **伤害减免**：当拥有者受到攻击伤害时，伤害 × (1 - 点数/100)。
  - 如 <span style="color:#3aa675;font-weight:600">10</span> 点 = 减伤 <span style="color:#3aa675;font-weight:600">10</span>%，<span style="color:#3aa675;font-weight:600">50</span> 点 = 减半伤害，<span style="color:#3aa675;font-weight:600">100</span> 点 = 免疫攻击伤害。
- **与[减伤](/powers/next_damage_reduction_power.md)的区别**：永久减伤不会在受击后移除，持续到战斗结束。
- **能力类型**：增益（Buff），但**不会被任何「消除增益 / 驱散」效果移除**；通过永久属性系统获得的减伤会在下一场战斗开始时自动重新施加。
- **不参与消除**：虽然类型是增益（Buff），但不会被任何「消除增益 / 驱散」类效果清除；复制、计数等其它增益交互照常生效。PowerType 仍保持 Buff。
- **动态变量更新**：点数变化时同步到减伤百分比变量。

## 相关卡牌

- 参考各卡牌描述中提到的"永久减伤"

## 源码

- `SeerPermanentDamageReductionPower.cs`
