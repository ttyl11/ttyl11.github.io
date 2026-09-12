# 天谴

<img src="/images/cards/heaven_punishment.png" alt="天谴" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 3
- **能量消耗**: 3
- **类型**: 技能
- **稀有度**: 普通
- **目标**: 敌方单体
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 固定伤害（最大生命占比） | 1/6~1/3 | 1/6~1/3 |
| 选牌数量 | 3 | 3 |
| 能量消耗 | 3 | 2 |
| PP | 3 | 3 |
| 最大PP | 3 | 3 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">3</span>/<span style="color:#3aa675;font-weight:600">3</span> 随机造成等于敌人<span style="color:#3aa675;font-weight:600">1/6~1/3</span>最大生命的固定伤害。从<span style="color:#3aa675;font-weight:600">3</span>张带「天」的牌中选择一张获得。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">3</span>/<span style="color:#3aa675;font-weight:600">3</span> 随机造成等于敌人<span style="color:#3aa675;font-weight:600">1/6~1/3</span>最大生命的固定伤害。从<span style="color:#3aa675;font-weight:600">3</span>张带「天」的牌中选择一张获得。耗能降至<span style="color:#3aa675;font-weight:600">2</span>。

## 小贴士

- **百分比固定伤害克高血敌人**：伤害 = 敌人**最大生命** × 1/6~1/3（随机，保底 <span style="color:#3aa675;font-weight:600">1</span> 点），以[固定伤害](/powers/fixed_damage_power.md)形式施加，在目标下回合开始时引爆。基于**最大生命**的百分比伤害不受目标当前血量影响，敌人 300 血时稳定造成 50~100 点固定伤害，是少有的百分比伤害技能牌，专克高血量 Boss。固定伤害无视[格挡](/mechanics/block.md)、不吃[力量](/powers/strength_power.md)/[易伤](/powers/vulnerable_power.md)加成、不会暴击，但可被固定伤害免疫抵挡。
- **选牌直接进手牌**：打完伤害后从 3 张候选「天」字牌中选 1 张**加入手牌**（当场就能打，不是进牌组）。候选从已解锁的带「天」卡牌中随机抽取且互不重复——mod 的天字卡池超过 20 张：[荒烬涂天](/cards/character/desolate_ash_sky.md)、[蔑天行·残虐](/cards/character/despise_heaven_cruelty.md)、龙寤揭天、[龙舞九天](/cards/character/dragon_dance_nine_heavens.md)、[梦祈天怜](/cards/character/dream_pray_heaven.md)、帝天战佛、[飞龙在天](/cards/character/flying_dragon_sky.md)、[天灵净野](/cards/character/heaven_spirit_pure_field.md)、[冰天花葬](/cards/character/ice_sky_flower_burial.md)、[水天一色](/cards/character/water_sky_one_color.md)、石破天惊、昊海垂天等。
- **天谴自己也在池里**：「天谴」名字带天，候选中可能再抽到天谴——选它等于再拿一张 3 费百分比固定伤害，形成自我补充链（每张 PP 3 消耗，能打 3 次，但牌源源不断）。
- **3 费的时机**：3 费较高，但"打伤害 + 补 1 张手牌"实际只净亏 1 张卡位；升级后 2 费性价比明显好转。选牌质量随卡池解锁度提升，后期候选更强。
- **低血敌人收益不变**：由于基于**最大生命**计算百分比，敌人残血时伤害并不缩水——不必像纯当前生命百分比卡那样"只打高血目标"，任何血量都能稳定输出满额百分比固伤。
- **性价比**：普通稀有度自带"百分比输出 + 过牌补充"双效，对抗高血 Boss 的万金油；PP 3 单场可打 3 次，选牌质量是二次收益的主体。

## 相关机制

- [固定伤害](/powers/fixed_damage_power.md)（伤害性质为固定伤害，无视格挡，不暴击）
- [PP 系统](/mechanics/pp-system.md)

## 源码

- `SeerHeavenPunishment.cs`
