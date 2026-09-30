# 命中

> **归属**：玩家与怪物均可持有
> **施加来源**：玩家获得——[宇宙胎动](/cards/character/cosmic_movement.md)（卡牌）、[梦祈天怜](/cards/character/dream_pray_heaven.md)（卡牌）、[极度冰点](/cards/character/extreme_freeze.md)（卡牌）、[黎羽幻生](/cards/character/feather_phantom.md)（卡牌）、[光荣之梦](/cards/ancient/glorious_dream.md)（卡牌）、[苍鹭幻翎](/cards/character/heron_illusion_feather.md)（卡牌）、[几米能量](/cards/character/jimmy_energy.md)（卡牌）、[染夜天妖](/cards/character/night_demon.md)（卡牌）、[无始源光](/cards/character/primordial_light.md)（卡牌）、[孤洁之傲](/cards/character/proud_solitude.md)（卡牌）、[七重沙海](/cards/character/sevenfold_sand_sea.md)（卡牌）、[寂·妖胧天鸣](/cards/character/silent_demon_cry.md)（卡牌）、[星光仙气](/cards/character/starlight_aura.md)（卡牌）、[蔽日食月功](/cards/character/sun_moon_art.md)（卡牌）、[阑珊百转](/cards/character/waning_turns.md)（卡牌） 等 38 个来源；玩家施加给敌方——[大雨滂沱](/cards/character/heavy_rain.md)（卡牌）、[九月的枷锁](/cards/character/september_shackles.md)（卡牌）、[👁️ 失明药水](/potions/blind_potion.md)（药水）、[🟢 绿火](/potions/green_fire_potion.md)（药水）、[🔄 乾坤](/potions/reverse_potion.md)（药水）、[大威势明王](/powers/great_might_vidyaraja_power.md)（能力联动）大数回廊（能力联动）、[白色龙鳞](/powers/white_dragon_scale_power.md)（能力联动）、[不破帝·南霜](/relics/epic/bupo_emperor_nanshuang.md)（遗物）、[混沌魔君索伦森](/relics/legendary/chaos_demon_lord.md)（遗物）、[赤胆游龙赵云](/relics/epic/chivalrous_dragon_yun.md)（遗物）、[艾夏拉](/relics/rare/constancy.md)（遗物）、[风殇影翼·飞镰](/relics/rare/flying_scythe.md)（遗物）、[婕克拉德](/relics/uncommon/jiekelade.md)（遗物）、[枫眠](/relics/rare/maple_sleep.md)（遗物） 等 18 个来源；玩家侧联动——[怀晦之亟盼](/cards/character/longing_for_darkness.md)、[腐化](/powers/corrupt_power.md)、[帝天战佛](/powers/emperor_war_buddha_power.md)、[精神干涉](/powers/psychic_interference_power.md)、[暴君史莱姆](/relics/event/tyrant_slime_relic.md)；怪物自带——[卡修斯](/monsters/boss/casius_monster.md)、[盖亚](/monsters/boss/gaia_monster.md)、[哈莫雷特](/monsters/elite/hamlet_monster.md)、[哈耶克](/monsters/elite/hayek_monster.md)、[魔花仙子](/monsters/normal/magic_flower_monster.md)、[墨鲁萨](/monsters/elite/medusa_minion_monster.md)、[猛虎王](/monsters/normal/menghuwang_monster.md)、[摩哥斯](/monsters/normal/moges_monster.md)、[菲尼克斯](/monsters/boss/phoenix_monster.md)、[谱尼（Puni）](/monsters/boss/puni_monster.md)、[雷伊](/monsters/boss/ray_monster.md)、[里奥斯](/monsters/elite/rio_monster.md)、[萨克森](/monsters/normal/sakesen_monster.md)、[钢牙鲨](/monsters/elite/steel_jaw_shark_monster.md)、[泰格尔](/monsters/boss/tiger_monster.md) 等 17 个来源；怪物施加给玩家——[卡修斯](/monsters/boss/casius_monster.md)、[盖亚](/monsters/boss/gaia_monster.md)、[魔花仙子](/monsters/normal/magic_flower_monster.md)、[猛虎王](/monsters/normal/menghuwang_monster.md)、[魔狮迪露](/monsters/elite/mojj_monster.md)、[缪斯](/monsters/boss/muse_monster.md)、[谱尼（Puni）](/monsters/boss/puni_monster.md)、[史莱姆王子](/monsters/normal/slime_prince_monster.md)、[索伦森（Soulson）](/monsters/boss/soulson_monster.md)、[天雷鼠](/monsters/elite/thunder_mouse_monster.md)

<img src="/images/powers/accuracy_power.png" alt="命中" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff，正层数）/ 减益（Debuff，负层数）
- **叠加方式**: 递减（计数型）
- **可见**: 是
- **允许负值**: 是
- **来源**: mod 能力

### 数值参数

| 参数 | 数值 |
|---|---|
| 每层暴击率提升（正层） | 10 |
| 每层使目标闪避率提升（负层） | 5 |

## 描述

每层使自身<span style="color:#d4a017;font-weight:600">暴击</span>率 +<span style="color:#3aa675;font-weight:600">10%</span>；负层时，每层使目标<span style="color:#d4a017;font-weight:600">闪避</span>率 +<span style="color:#3aa675;font-weight:600">5%</span>。

## 详细机制

- **正层：暴击率来源**：每层 +<span style="color:#3aa675;font-weight:600">10%</span> 暴击率（加算、无上限）——命中 10 层即 100% 暴击率；层数变化立刻影响下一次攻击的暴击率。
- **负层：让对手的攻击更容易被闪避**：持有者命中为负时，其攻击的受击目标闪避率 +5%×负层——命中 -4 时，它打谁谁就有 20% 闪避加成。不再使伤害直接落空，判定由受击者的[闪避](/powers/dodge_power.md)完成；**受击目标的闪避角标会实时上升**（闪避图标常驻，数值含这份加成）。
- **只对攻击伤害生效**：[固定伤害](/powers/fixed_damage_power.md)、DoT 等非攻击伤害不受影响。
- **引擎/载体跟随**：首次获得正层时自动获得[暴击](/powers/critical_strike_power.md)能力（没有暴击能力的单位获得正命中即可拥有暴击率）；同理，**首次获得负层时**会给"对位全体"补挂[闪避](/powers/dodge_power.md)载体（懒挂载，与暴击同模式）。
- **类型随层数变化**：层数 ≥ 0 时为 Buff，层数 < 0 时为 Debuff——负命中可被净化类效果清除。
- **多人同步**：层数变化与判定均多端同步，联机两端结果一致。

## 相关卡牌

- [黎羽幻生](/cards/character/feather_phantom.md)（全属性+1，包含命中+1）
- [宇宙胎动](/cards/character/cosmic_movement.md)（全属性+1，包含命中+1）

## 相关机制

- [全属性](/mechanics/all_attributes.md)（命中是全属性之一）
- [暴击](/mechanics/critical-strike.md)（正层去向）/ [闪避](/powers/dodge_power.md)（负层去向）

## 源码

- `SeerAccuracyPower.cs`
