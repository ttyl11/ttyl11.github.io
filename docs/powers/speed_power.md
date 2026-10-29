# 速度

> **归属**：玩家与怪物均可持有
> **施加来源**：玩家获得——[宇宙胎动](/cards/character/cosmic_movement.md)（卡牌）、[梦祈天怜](/cards/character/dream_pray_heaven.md)（卡牌）、[黎羽幻生](/cards/character/feather_phantom.md)（卡牌）、[光荣之梦](/cards/ancient/glorious_dream.md)（卡牌）、[苍鹭幻翎](/cards/character/heron_illusion_feather.md)（卡牌）、[几米能量](/cards/character/jimmy_energy.md)（卡牌）、[乌合之势](/cards/character/mob_momentum.md)（卡牌）、[染夜天妖](/cards/character/night_demon.md)（卡牌）、[无始源光](/cards/character/primordial_light.md)（卡牌）、[孤洁之傲](/cards/character/proud_solitude.md)（卡牌）、[七重沙海](/cards/character/sevenfold_sand_sea.md)（卡牌）、[寂·妖胧天鸣](/cards/character/silent_demon_cry.md)（卡牌）、[速度史莱姆](/cards/colorless/slime_speed.md)（卡牌）、[星光仙气](/cards/character/starlight_aura.md)（卡牌）、[蔽日食月功](/cards/character/sun_moon_art.md)（卡牌） 等 38 个来源；玩家施加给敌方——[飞龙在天](/cards/character/flying_dragon_sky.md)（卡牌）、[大雨滂沱](/cards/character/heavy_rain.md)（卡牌）、[🟢 绿火](/potions/green_fire_potion.md)（药水）、[🔄 乾坤](/potions/reverse_potion.md)（药水）、[未来奇点](/powers/future_singularity_power.md)（能力联动）、[大威势明王](/powers/great_might_vidyaraja_power.md)（能力联动）大数回廊（能力联动）、[白色龙鳞](/powers/white_dragon_scale_power.md)（能力联动）、[不破帝·南霜](/relics/epic/bupo_emperor_nanshuang.md)（遗物）、[混沌魔君索伦森](/relics/legendary/chaos_demon_lord.md)（遗物）、[赤胆游龙赵云](/relics/epic/chivalrous_dragon_yun.md)（遗物）、[艾夏拉](/relics/rare/constancy.md)（遗物）、[婕克拉德](/relics/uncommon/jiekelade.md)（遗物）、[枫眠](/relics/rare/maple_sleep.md)（遗物）、[审判](/relics/common/tarot_judgement.md)（遗物） 等 17 个来源；玩家侧联动——[腐化](/powers/corrupt_power.md)、[帝天战佛](/powers/emperor_war_buddha_power.md)、[精神干涉](/powers/psychic_interference_power.md)、[暴君史莱姆](/relics/event/tyrant_slime_relic.md)；怪物自带——[卡修斯](/monsters/boss/casius_monster.md)、[盖亚](/monsters/boss/gaia_monster.md)、[哈莫雷特](/monsters/elite/hamlet_monster.md)、[哈耶克](/monsters/elite/hayek_monster.md)、[魔花仙子](/monsters/normal/magic_flower_monster.md)、[墨鲁萨](/monsters/elite/medusa_minion_monster.md)、[猛虎王](/monsters/normal/menghuwang_monster.md)、[摩哥斯](/monsters/normal/moges_monster.md)、[魔狮迪露](/monsters/elite/mojj_monster.md)、[菲尼克斯](/monsters/boss/phoenix_monster.md)、[谱尼](/monsters/boss/puni_monster.md)、[雷伊](/monsters/boss/ray_monster.md)、[里奥斯](/monsters/elite/rio_monster.md)、[萨克森](/monsters/normal/sakesen_monster.md)、[速度史莱姆](/monsters/normal/speed_slime_monster.md) 等 19 个来源；怪物施加给玩家——[阿克希亚](/monsters/elite/axe_monster.md)、[卡修斯](/monsters/boss/casius_monster.md)、[盖亚](/monsters/boss/gaia_monster.md)、[魔花仙子](/monsters/normal/magic_flower_monster.md)、[猛虎王](/monsters/normal/menghuwang_monster.md)、[魔狮迪露](/monsters/elite/mojj_monster.md)、[缪斯](/monsters/boss/muse_monster.md)、[谱尼](/monsters/boss/puni_monster.md)、[史莱姆王子](/monsters/normal/slime_prince_monster.md)、[索伦森](/monsters/boss/soulson_monster.md)、[天雷鼠](/monsters/elite/thunder_mouse_monster.md)、[尤纳斯](/monsters/elite/younas_monster.md)

<img src="/images/powers/speed_power.png" alt="速度" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff，正层数）/ 减益（Debuff，负层数）
- **叠加方式**: 叠加（计数型，不自动递减）
- **可见**: 是
- **允许负值**: 是
- **来源**: mod 能力

## 描述

①玩家持有：每回合开始时，多抽层数张牌，再弃掉其中的半数。<br/>②怪物持有：每层回合开始获得自身最大生命<span style="color:#3aa675;font-weight:600">%</span>格挡。<br/>③负层时，对方全体视为获得等量层数。

## 详细机制

- **有效层数**（双向通用）：`自身正层 + 对方全体的负层绝对值之和`——正层强化自己；对方的负层会以"镜像"方式强化你（"负层时，对方全体视为获得等量层数"）。
- **玩家持有**：回合开始时多抽"有效层数"张，随后**必须**弃掉半数（弃牌数 = 有效层数 ÷ 2 向下取整，手动选择弃哪几张；手牌不足则弃光即止）。
  - 1 层 = 多抽 1 张、弃 0 张；2 层 = 多抽 2 张、弃 1 张；3 层 = 多抽 3 张、弃 1 张。
  - **弃牌数有硬上限：不超过当前手牌上限的一半**（默认手牌上限 <span style="color:#3aa675;font-weight:600">10</span> → 最多弃 <span style="color:#3aa675;font-weight:600">5</span> 张）。多抽会被手牌上限截断，若不封顶，速度堆高后会"没多抽到几张、却把手牌弃光"，反而变成负收益。
- **怪物持有**：回合开始时获得"自身最大生命 × <span style="color:#3aa675;font-weight:600">5%</span> × 有效层数"的[格挡](/mechanics/block.md)（无上限）。
- **负层镜像**（完全双向）：
  - 我方（玩家）速度 -3 → 每只敌人视为 +3 层：各自获得 最大生命 × <span style="color:#3aa675;font-weight:600">15%</span> 格挡
  - 敌方速度 -3 → 每名玩家视为 +3 层：各自多抽 3 张、弃 1 张
- **多抽与弃牌分开结算**：多抽在抽牌阶段生效；弃牌在抽牌后弹出强制选牌界面（不可取消）。
- **类型随层数变化**：层数 ≥ 0 时为增益，层数 < 0 时为减益。
- **多人同步**：抽牌与格挡多端同步；弃牌由本人选择、两端结果一致。
- **永久速度会跨战斗保留**：通过永久属性系统获得的速度，每场战斗开始时自动重新施加。

## 相关卡牌

- [黎羽幻生](/cards/character/feather_phantom.md)（全属性+1，包含速度+1）
- [宇宙胎动](/cards/character/cosmic_movement.md)（全属性+1，包含速度+1）

## 相关机制

- [全属性](/mechanics/all_attributes.md)（速度是全属性之一）
- [格挡](/mechanics/block.md)（怪物持有时的去向）/ [弃牌堆](/mechanics/discard_pile.md)（玩家持有时的强制弃牌）

## 源码

- `SeerSpeedPower.cs`
