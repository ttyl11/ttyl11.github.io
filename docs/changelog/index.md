# 版本更新

## V4.6（支持多人联机 · 适配测试版 0.111.0）

### 多人联机支持

- **全面支持多人联机**：Seer Mod 现在可以正常联机游玩——此前状态不同步、只有一端生效、双方卡死等问题已系统性修复
- **战斗选择同步**：修复多处「选择」不同步的问题（此前只有房主生效，或两端结果不一致）
- **状态同步**：修复多项状态只在本端生效、或作用错玩家的问题
- **抽牌链与事件选择**：修复打牌触发的抽牌连锁不同步的问题；25 个事件由「房主单独选择」改为「各自选择」，两端独立判定
- **多人可玩性说明**：多人联机目前为「理论完全支持」，欢迎实测反馈

### 适配测试版 0.111.0

- **双版本支持**：同一款 Mod 提供适配正式版（0.107.1）与测试版（0.111.0）的两个版本，均可正常使用
- **切换方式**：切分支时成对替换 seer.dll + seer.json 两个文件即可，其余文件不动
- ⚠️ **风险提示**：测试版写入的存档格式较新，正式版无法读取。**来回切换分支前请务必备份存档**（存档不按分支隔离），否则可能被改名成 *.FUT.corrupt 直接弃档

### 修改的遗物

- 以下遗物统一新增「每回合至多触发 5 次」的上限：[星灵圣王](/relics/common/star_holy_king)、[鬼剑骷髅](/relics/common/seer_ghost_sword_skeleton)、[宿主岩](/relics/common/host_rock)、[鬼剑罗刹](/relics/common/ghost_sword_rakshasa)

### 修改的卡牌

- **[匠心](/cards/quest/craftsman_heart)**（进度判定由「伤害平方之和 ÷ 8」改为伤害之和，阈值 8000 不变）
- **[龙魂](/cards/quest/dragon_soul)**（龙牌阈值 9 → 12）
- **[命宇轮回](/cards/character/fate_reincarnation)**（格挡 8 → 10）

### 修复的 bug

- **[海棠教皇·未明](/relics/epic/hai_tang_jiao_huang_wei_ming)**：「必定暴击」与[五月之锋](/cards/character/may_edge)、[二律背反](/powers/antinomy_power)等暴击联动此前会在战斗之间失效，已修复
- 闪避图标：0 层闪避载体此前会留下悬浮无内容的空图标（如持有[奥斯卡](/relics/common/oscar)等遗物时可见），已修复
- **[隐者](/relics/common/tarot_hermit)**：开场自动施加的属性不再被误判为「变换属性」，不再白送 1 层[无实体](/powers/intangible_power)
- **[超算鲁比克](/relics/rare/rubik_supercomputer)**：其施加的[虚空形态](/powers/void_form_power)/[群蛇形态](/powers/serpent_form_power)/[恶魔形态](/powers/demon_form_power)导致战斗卡死的问题已修复
- **[星辰之录](/relics/event/star_tracker_relic)**（泰坦之灵房间）：金蛋抽奖此前固定为同一条结果序列（与进店时机、抽奖次数无关），已改为每名玩家独立推进的随机流
- **[混灵·莱茵哈特](/relics/epic/hun_ling_lai_yin_ha_te)**：敌人的复活（泰勒斯无穷血复活、谱尼换形态满血、凤凰涅槃等）此前被误判成回血、错误触发①的反击与召唤，已修正——只有非复活回血才触发①
- **[群星的礼赠](/relics/starter/elemental_core)**（遗物宝库）：史诗/传说档给敌人增加最大生命时，不再触发「敌方回血」类联动（敌人强度不变）
- 战斗音乐：播放赛尔战斗 BGM 后进入休息处可能闪退的问题已修复
- 战斗音乐（重叠）：连续战斗（子地图连打等）时，上一场曲目与新曲重叠的问题已修复（新战斗开始时旧曲立即终止）
- 暴击率显示：拥有必定暴击来源（[霍光](/relics/epic/huo_guang)的北冥之刃/狂刃、[海棠教皇·未明](/relics/epic/hai_tang_jiao_huang_wei_ming)满血）时，暴击率角标与描述此前仍按命中叠加值显示，现已实时显示 100%（海棠随生命起落切换）
- 暴击判定统一：所有必定暴击类效果——[回合必定暴击](/powers/turn_guaranteed_crit_power)（幻影蝶）、[必定暴击](/powers/next_guaranteed_crit_power)（梦祈天怜/黎羽幻生/倒吊人及不灭斗气/圣光气/灭魂天葬击）、[冲天霸气](/powers/tiger_crit_counter_power)、[君临天下](/powers/octagon_debt_power)、[幽冥帝尊·修罗](/relics/rare/nether_emperor)——此前只加 ×1.5 伤害、不写入暴击判定，[五月之锋](/cards/character/may_edge)、[二律背反](/powers/antinomy_power)、[镜](/powers/mirror_power)等「暴击时」联动不触发，现已全部接入真暴击判定（不再与随机暴击叠乘）
- **[沸涌](/powers/boiling_power)**：暴击检测此前按「对方拥有暴击能力」判断，非暴击攻击会被误当暴击抬高倍率，已改用实时暴击判定
- **[必定暴击](/powers/next_guaranteed_crit_power)**（下次攻击）改为计数器：[黎羽幻生](/cards/character/feather_phantom)「下两次攻击必暴」此前只覆盖一次，现每次攻击 -1 层——黎羽幻生真正覆盖两次，[倒吊人](/relics/common/tarot_hanged_man)随受击叠层

### 其他（机制 / 本地化 / 音乐）

- **四属性体系重做（命中 / 暴击 / 闪避 / 速度）**：命中正层改为提升[暴击](/mechanics/critical-strike)率；负层不再让伤害落空、改为使受击目标更易[闪避](/powers/dodge_power)；暴击基础率归零、完全由命中驱动（[锁定](/powers/lock_one_power)保底）；新增[闪避](/powers/dodge_power)——按概率完全闪避攻击；[速度](/powers/speed_power)改为玩家「多抽并须弃掉半数」、怪物「获得最大生命 5%×层数格挡」，正负层双向镜像。暴击/闪避角标实时显示概率（随命中/锁定变化即刻刷新），暴击描述改为「有概率造成 1.5 倍伤害」
- **负命中→闪避可视化**：[闪避](/powers/dodge_power)载体改为懒挂载（负命中出现时自动给对位全体补挂、挂上常驻；与[暴击](/mechanics/critical-strike)引擎同模式），角标与描述实时显示有效闪避率
- **闪避描述逐敌化**：[闪避](/powers/dodge_power)悬浮描述逐个点名敌人、写明对其的闪避几率——单个敌人拆开构成（自身 X% + 负命中加成 Y%），多个敌人逐行列出（数值相同的合并一行）；角标仍取最高值
- **接管机制上限调整**：[瓦库接管](/mechanics/mourning)与[魔君接管](/powers/demon_takeover_power)的自动打牌上限 33 张 → 18 张
- **命中调整**：每层命中的暴击率加成 5% → 10%（负命中→[闪避](/powers/dodge_power)每层 5% 不变）
- **战斗音乐**：遭遇赛尔系怪物时随机播放专属战斗 BGM，多人两端选曲一致
- **本地化修缮**：重写开场介绍（补充多人联机说明；暴击、命中、速度三段更新为当前机制）；「无效化」更名为「行动失效」；补齐一批[关键词](/mechanics/keywords)与附魔文本；修复部分能力悬浮框显示异常；生成类遗物描述补充「场上」触发口径（[星灵圣王](/relics/common/star_holy_king)、[克雷弗德](/relics/epic/clifford)、[圣王·萨格罗斯](/relics/rare/holy_king_sargeros)）；[速度](/powers/speed_power)描述改为直接写明算法
- **术语统一**：「致命一击」全部改为[暴击](/mechanics/critical-strike)（冲天霸气、五月之锋、不灭斗气等表述同步）

## V4.5（新增混沌魔君·索伦森角色体系 · 药水图鉴重写）

### 新增的角色

- **[混沌魔君·索伦森](/characters/soulson)**：第二位可玩角色，77 HP/100 金币/2 充能球槽，以任意角色通关一次后解锁。核心资源为[堕落](/powers/fallen_power.md)，每满 100 层触发[魔君接管](/powers/demon_takeover_power.md)自动打牌；初始遗物[混沌起源](/relics/starter/chaos_origin.md)，初始牌 11 张（专属打击/防御 ×3 + 5 张堕落体系牌）

### 新增的卡牌

- **[打击](/cards/basic/soulson_strike)**（索伦森专属）
- **[防御](/cards/basic/soulson_defend)**（索伦森专属）
- **[寂灭](/cards/basic/nirvana_slash)**
- **[消亡](/cards/basic/perish)**
- **[灭世挽歌](/cards/basic/extinction_elegy)**
- **[堕世](/cards/basic/descent)**
- **[邪灵降世](/cards/basic/evil_descent)**
- **[混沌灭世决](/cards/ancient/world_end_decree)**（先古真神牌）
- **[神灵救世光](/cards/ancient/divine_salvation_light)**（先古真神牌）
- **[邪灵魔闪光](/cards/character/evil_spirit_flash)**
- **[厌世](/cards/character/misanthropy)**
- **[黑暗之门](/cards/character/dark_gate)**
- **[混沌魔域](/cards/character/chaos_realm)**
- **[诸雄之主](/cards/character/lord_of_champions)**
- **[天神永堕落](/cards/character/heavenly_eternal_fall)**
- **[轮墓边狱](/cards/character/rinbo_purgatory)**
- **[如梦令](/cards/character/ru_meng_ling)**
- **[长相思](/cards/character/chang_xiang_si)**
- **[大蛇毒液](/cards/character/big_snake_venom)**
- **[恶魔降临](/cards/character/demon_descent)**
- **[尘封八荒](/cards/character/dust_sealed_eight_wastes)**
- **[恶念初现](/cards/character/malice_stirs)**
- **[深渊忏悔](/cards/character/abyss_confession)**
- **[殊死一搏](/cards/character/desperate_last_stand)**
- **[狂雷奔袭](/cards/character/thunder_raid)**
- **[挽尘吟](/cards/character/retain_dust_chant)**
- **[滅天闪](/cards/character/sky_destroying_flash)**
- **[寄生种子](/cards/character/parasite_seed)**
- **[圣火裁决](/cards/character/holy_fire_judgment)**
- **[龙族血脉](/cards/character/dragon_bloodline)**
- **[龙缘之息](/cards/character/dragon_breath)**
- **[堕落龙力](/cards/character/fallen_dragon_force)**
- **[福泽千秋](/cards/character/blessing_millennium)**
- **[极昼](/cards/character/polar_day)**
- **[生死无常](/cards/character/life_and_death_impermanence)**
- **[赴火](/cards/character/embrace_flame)**
- **[梦境残缺](/cards/character/fragmented_dream)**
- **[悚颜](/cards/character/ghastly_face)**
- **[螺旋飞叶](/cards/character/spiral_leaf)**
- **[昏暗领域](/cards/character/dim_domain)**
- **[悠悠光线](/cards/character/yoyo_light)**
- **[发条之鸣](/cards/character/clockwork_chime)**
- **[幽水缠绕](/cards/character/dark_water_entangle)**
- **[灾厄之劫](/cards/character/doom_calamity)**
- **[血涂令](/cards/character/blood_order)**
- **[偷天换日](/cards/character/steal_sky_swap_day)**
- **[无影袭](/cards/character/shadowless_strike)**
- **[亡灵泯灭杀](/cards/character/undead_annihilation)**
- **[华光洗礼](/cards/character/glory_baptism)**
- **[生](/cards/status/birth)**
- **[死](/cards/status/death)**
- **[烬灭神咒剑](/cards/character/ruin_curse_sword)**
- **[萌喵电刃](/cards/character/meng_miao_electric_blade)**
- **[墨眉](/cards/character/mo_mei)**
- **[创灵护界决](/cards/character/creation_world_ward)**
- **[深雷魔闪光](/cards/character/deep_thunder_demon_flash)**
- **[王·绿野仙踪](/cards/character/king_wizard_of_oz)**

### 新增的遗物

- **[混沌起源](/relics/starter/chaos_origin)**（初始）
- **[混沌魔君索伦森](/relics/legendary/chaos_demon_lord)**（补充获取途径：混沌起源经欧洛巴斯之触升级）
- **[嘲风](/relics/epic/chao_feng)**（史诗）
- **[御象灵尊](/relics/epic/yu_xiang_ling_zun)**（史诗）
- **[坦普瑞](/relics/epic/tan_pu_rui)**（史诗）
- **[万魔天尊](/relics/rare/wan_mo_tian_zun)**（稀有）
- **[无上魔尊](/relics/epic/wu_shang_mo_tsun)**（史诗）
- **[无上·万魔天尊](/relics/legendary/wu_shang_wan_mo_tian_zun)**（传说）
- **[影蝠](/relics/uncommon/ying_fu)**（罕见）
- **[天奔流·东辉](/relics/epic/tian_ben_liu_dong_hui)**（史诗）
- **[逆魂·佩特菲德](/relics/epic/ni_hun_pei_te_fei_de)**（史诗）
- **[始皇帝·嬴政](/relics/legendary/shi_huang_di_ying_zheng)**（传说）
- **[猛虎王](/relics/rare/meng_hu_wang)**（稀有）
- **[万兽之尊·猛虎王](/relics/epic/wan_shou_zhi_zun_meng_hu_wang)**（史诗）
- **[幻影蝶](/relics/uncommon/phantom_butterfly)**（罕见）
- **[海棠教皇·未明](/relics/epic/hai_tang_jiao_huang_wei_ming)**（史诗）

### 新增的能力

- **[堕落](/powers/fallen_power)**
- **[魔君接管](/powers/demon_takeover_power)**
- **[混沌化身](/powers/soulson_chaos_incarnation_power)**
- **[君临天下](/powers/octagon_debt_power)**（原八方债改造）
- **[天奔释罪](/powers/tian_ben_shi_zui_power)**（由[天奔流·东辉](/relics/epic/tian_ben_liu_dong_hui)赋予）
- **[龙缘之息](/powers/dragon_breath_power)**（由[龙缘之息](/cards/character/dragon_breath)施加）
- **[海棠花](/powers/begonia_flower_power)**（由[海棠教皇·未明](/relics/epic/hai_tang_jiao_huang_wei_ming)施加）
- **[殊死](/powers/desperate_last_stand_power)**（由[殊死一搏](/cards/character/desperate_last_stand)施加）
- **[赴火](/powers/embrace_flame_power)**（由[赴火](/cards/character/embrace_flame)施加）
- **[墨染](/powers/mo_ran_power)**：纯计数资源；自身回合开始时每 211 层换 10 金币，达到 985 层清空并换 1 颗[通用刻印激活水晶](/relics/event/universal_engraving_gem_relic)

### 修改的卡牌

- **[竭血残蝶](/cards/character/blood_exhaust_butterfly)**（重做）
- **[妖族异术](/cards/character/yao_zu_yi_shu)**
- **[禁术·契灭](/fifth-skill/contract_destruction)**
- **[魑魅魍魉](/cards/character/demon_ghost)**
- **[晚风孤夜断](/cards/character/evening_wind_break)**
- **[常·钻石风暴](/cards/character/diamond_storm)**
- **[金钱攻击](/cards/character/money_attack)**
- **[弦月锋华](/cards/character/crescent_edge)**
- **[荒烬涂天](/cards/character/desolate_ash_sky)**
- **[无终痴念](/cards/character/endless_obsession)**
- **[饮血屠龙](/cards/character/drink_blood_dragon_slaying)**
- **[邪龙勿用](/cards/character/evil_dragon_unused)**
- **[魔·决裂黎明](/fifth-skill/demon_breaking_dawn)**
- **[戕伐樊笼](/cards/character/cage_destruction)**
- **[龙鳞切割](/cards/character/dragon_scale_cut)**
- **[恶咒追魂](/cards/character/evil_curse_chasing)**
- **[妖精的蛊惑](/cards/character/fairy_bewitch)**
- **[狂能激发](/cards/character/frenzy_excitation)**
- **[赛皇](/cards/character/gambling_emperor)**
- **[天谴](/cards/character/heaven_punishment)**
- **[不死之身](/cards/character/immortal_body)**
- **[百鬼夜行](/cards/character/hundred_ghosts)**
- **[在劫难逃](/cards/character/inescapable_doom)**
- **[无限·虚数湮灭](/cards/character/infinite_void_annihilation)**
- **[乌合之势](/cards/character/mob_momentum)**
- **[烬灭之拥](/cards/character/ruin_embrace)**
- **[曙光普照](/cards/character/shining_light)**
- **[堕语噬亡魂](/fifth-skill/soul_devour)**
- **[千重影缠身](/fifth-skill/thousand_shadow_bind)**
- **[奸奇](/cards/character/tzeentch)**
- **[沦·亡灵天灾](/fifth-skill/undead_catastrophe)**
- **[亡灵风暴](/cards/character/undead_storm)**
- **[八方·无人来朝](/fifth-skill/octagon)**（重做）
- **[璨灵圣光](/cards/ancient/radiant_holy_light)**（描述修正：清除自身减益和敌方增益）
- **[奇镰解放](/cards/character/qi_lian_liberation)**
- **[婵·命定星缘](/fifth-skill/destined_star_bond)**（衍生牌 → 第五技能；改为 4 费并移除[碎心](/mechanics/shattered_heart)，[武心婵](/relics/legendary/wu_xin_chan)直给的实例耗能降为 0）
- **[岳·命寻星叹](/fifth-skill/yue_fate_star_sigh)**（事件牌 → 第五技能；改为 2 费，[卫岳](/relics/epic/wei_yue)直给的实例耗能降为 0）
- **[混沌魔域](/cards/character/chaos_realm)**（耗能 2 → 4，升级后 3 费；移除升级固有）
- **[恶念初现](/cards/character/malice_stirs)**（堕落 16% → 39%）
- **[千兆战斗仪](/cards/token/giga_battle_instrument)**（达标效果移入「击杀效果」悬浮框，卡面文本精简）
- **[天神永堕落](/cards/character/heavenly_eternal_fall)**（修复：自动打出不再被"能量不足"拦下，手中牌照常免费打光）
- **[奸奇](/cards/character/tzeentch)**（耗能增长由"每持有 1 泰坦之灵 +1"改为"整局每打出一次 +1"，同决裂黎明范式）

### 修改的遗物

- **[不破帝·南霜](/relics/epic/bupo_emperor_nanshuang)**（重做）
- **[天奔流·东辉](/relics/epic/tian_ben_liu_dong_hui)**（触发方式调整）
- **[鬼剑罗刹](/relics/common/ghost_sword_rakshasa)**（重做）
- **[鬼剑骷髅](/relics/common/seer_ghost_sword_skeleton)**（新增堕落4）
- **[宿主岩](/relics/common/host_rock)**（文本精简）
- **[天河神将](/relics/uncommon/tianhe_general)**（稀有度调整）
- **[无常幽鬼](/relics/common/ghost_impermanence)**（重做）
- **[隐者](/relics/common/tarot_hermit)**（重做）
- **[真龙·塔克林](/relics/common/true_dragon_taklin)**（文本优化）
- **[兹拉特](/relics/common/zi_la_te)**（新增堕落51）
- **[典韦](/relics/epic/dian_wei)**（重做）
- **[恶魔男爵](/relics/uncommon/demon_baron)**（新增堕落）
- 召唤类遗物描述统一精简：[咕噜咕王](/relics/uncommon/guru_guru_king)、[宿主岩](/relics/common/host_rock)、[克雷弗德](/relics/epic/clifford)、[混元天尊](/relics/legendary/primordial_tianzun)、[蓓丽安特](/relics/epic/beliant)
- **[黑啵啵](/relics/uncommon/hei_bo_bo)**（新增堕落12%）
- **[伽罗·八部天龙](/relics/uncommon/garo_eight_dragon)**（文本精简）
- **[昆仑](/relics/uncommon/seer_kun_lun)**（新增堕落24）
- **[魔狮迪露](/relics/uncommon/moshi_dilu)**（新增堕落91）
- **[圣甲盖亚](/relics/uncommon/holy_armor_gaia)**（新增堕落）
- **[天玄苍魂·青龙](/relics/rare/azure_dragon)**（稀有度调整+触发调整）
- **[无影剑客](/relics/uncommon/seer_shadowless_swordsman)**（新增堕落）
- 大暗黑天八长老遗物统一新增「打出带对应字的牌时堕落19%」：[混沌天蛇太祖](/relics/rare/chaotic_snake)、[幽冥帝尊·修罗](/relics/rare/nether_emperor)、[终末之灭·天邪龙王](/relics/rare/dragon_of_doom)、[厉魇魔王·咤克斯](/relics/rare/demon_king)、[邪冥·兽皇](/relics/rare/evil_beast_emperor)、[万古邪皇·威斯克](/relics/rare/ancient_evil_emperor)、[风殇影翼·飞镰](/relics/rare/flying_scythe)、[艾夏拉](/relics/rare/constancy)
- **[厉魇魔王·咤克斯](/relics/rare/demon_king)**（删除一条效果）
- **[万古邪皇·威斯克](/relics/rare/ancient_evil_emperor)**（数值调整）
- **[终末之灭·天邪龙王](/relics/rare/dragon_of_doom)**（删除一条效果+数值调整）
- **[枫眠](/relics/rare/maple_sleep)**（删除必暴击）
- **[腐坏幽魔·克劳里菲](/relics/rare/corrupt_demon_clawrify)**（承伤上限调整）
- **[魇魔](/relics/rare/seer_yuanmo)**（效果调整）
- 稀有度由商店调整为稀有：[学神](/relics/shop/study_god)、[团·圆](/relics/common/tuan_yuan)、[招财喵](/relics/shop/zhao_cai_miao)、[星吉拉](/relics/common/xingjila)、[乐小伴](/relics/rare/le_xiao_ban)、[喵奇](/relics/common/miaoqi)
- **[太阳](/relics/common/tarot_sun)**（触发条件修正：仅"属性提升"被消除时触发，负属性归零不计）
- **[贝利亚奥特曼](/relics/epic/belial_ultraman)**（新增：每销毁一张诅咒牌，堕落 14）
- **[爵刻·黑沃德](/relics/epic/jue_ke_blackward)**（爵刻：固定伤害 4 → 6、回血 2 → 3，新增堕落 2）
- **[逆魂·佩特菲德](/relics/epic/ni_hun_pei_te_fei_de)**（②固定伤害公式新增堕落 10%）
- **[飒雷·喵佐](/relics/epic/seer_sa_lei_miao_zuo)**（每消耗一张新增堕落 3）
- **[妖族元皇·兰蒂斯](/relics/epic/lantides)**（③判定阈值改为 10%＋堕落÷5000×100%，堕落项按百分比计）
- **[原始黑洞·尤纳斯](/relics/epic/primordial_black_hole_yunas)**（②失去最大生命时堕落等量）
- **[混元天尊](/relics/legendary/primordial_tianzun)**（召唤改为首回合开始时，召唤生命 30% → 40%+堕落数；修正辛之印记说明并新增其悬浮框）
- **[武心婵](/relics/legendary/wu_xin_chan)**、**[卫岳](/relics/epic/wei_yue)**（本地化补注：加入的牌耗能为 0）
- **[枫落殇·西叶](/relics/epic/feng_luo_shang_xi_ye)**（③ 移除"堕落仅转召唤"冗余前缀）
- 多条效果统一补 ①②③ 分点：[典韦](/relics/epic/dian_wei)、[霍光](/relics/epic/huo_guang)、[钢傀](/relics/epic/steel_puppet)、[孙权](/relics/epic/sun_quan)、[武心婵](/relics/legendary/wu_xin_chan)、[薇尔诗](/relics/legendary/vier_poem)、[奥菲利娅](/relics/legendary/ophelia)
- **[雁翎](/relics/common/yan_ling)**（重做）：战斗开始获得 20 层墨染，每回合开始墨染翻倍
- **[学神](/relics/shop/study_god)**：战斗开始追加 333 层墨染（原有预测打牌数奖励机制保留）
- **[混沌魔君索伦森](/relics/legendary/chaos_demon_lord)**（①任一消除成功即对其封属+封攻击；③充能改为每获得 40 堕落；④改为战斗结束获得 x 点最大生命（x 为经过的战斗数）；修复：③回合结束充能球在球位满且激发链补位时抛「OrbQueue is full」卡死，现改为先主动激发腾位并复核）
- **[空元行者](/relics/legendary/kong_yuan_xing_zhe)**（复活后每回合失去最大生命时堕落 13%）
- **[飒雷孤影·喵佐](/relics/legendary/seer_sa_lei_gu_ying_miao_zuo)**（①重做：回合开始每 28 堕落给所有敌人随机 1 种异常状态 2 回合）
- **[圣谕邪魇](/relics/legendary/holy_edict_evil_nightmare)**（新增④：任一敌人邪诲/圣诰达 10 层，获得 1 张墟埪并堕落 48%）
- **[弑序神罗](/relics/legendary/order_killing_god_luo)**（④判定由"恢复过生命"改为"获得过堕落"）
- **[余罪魔女](/relics/legendary/seer_crime_witch)**（新增：每回合开始堕落 7）
- **[麦汪汪](/relics/rare/seer_mai_wang_wang)**（其消耗的牌会清空 PP）
- **[双生不朽](/relics/ancient/tezcatara_triple_card)**（不再给出不死之身，改为给出注能的好女孩与好男孩）
- 稀有度与数值调整：[学神](/relics/shop/study_god)、[招财喵](/relics/shop/zhao_cai_miao)改为商店；[源·宵](/relics/uncommon/seer_yuan_xiao)、[麦康纳](/relics/uncommon/seer_mai_kang_na)、[超级果然多](/relics/uncommon/seer_super_guo_ran_duo)改为罕见；[星吉拉](/relics/common/xingjila)、[喵奇](/relics/common/miaoqi)、[团·圆](/relics/common/tuan_yuan)改为普通；源·宵手牌阈值 5→7、星吉拉 2→4 场、喵奇金币 30→10、团·圆最大生命 4→2、超级果然多间隔 5→6 场

### 修改的能力

- **[不破诛罚](/powers/bupo_punishment_power)**（重做）
- **[永昌玺](/powers/eternal_seal_power)**（机制改造：层数封顶 6、达到 6 层触发开启[君临天下](/powers/octagon_debt_power)、攻击附加固定伤害、回合结束时回血并恢复 1 张 PP 牌、每 2 回合眩晕敌方、异常状态施加无效化）
- **[魅惑](/powers/bewitch_power)**（补充说明击晕概率构成：色欲累计次数×5% + 可见增益数×10%，后者需打出[妖精的蛊惑](/cards/character/fairy_bewitch)后启用）
- **[流血](/powers/bleed_power.md)**（加层条件收紧：只有受到攻击才 +1 层，固定伤害/异常伤害/流血自身不再叠加；回合结束伤害改为层数的一半，向下取整）
- **[中毒](/powers/poison_power.md)**（结算重做：伤害改为等于层数，结算后层数减半，向下取整）

### 修改的怪物

- **[体力史莱姆](/monsters/normal/hp_slime_monster)**（耐力无限回血 10 点 → 最大生命的 10%，约 9~10 点；多人随缩放血量等比）
- **[加布](/monsters/normal/jiabu_monster)**（不朽战甲回血 15 点 → 最大生命的 14%，约 15 点）
- **[坤格](/monsters/normal/kunge_monster)**（神火罩回血改为各自最大生命的 9.5%：坤格回 8 点、安妮回 11 点）
- **[谱尼](/monsters/boss/puni_monster)**（形态切换/复活加成 +77 → 当前上限的 35%，复利递增：222 → … → 1803）
- **[索伦森](/monsters/boss/soulson_monster)**（初始生命 777 → 1165；wiki 同步修正：寂灭固定伤害按你的已损失生命值计算）
- 多人模式下怪物格挡随人数/章节缩放（单人不变）：尼尔、萨克斯恩、泰沃斯、巴斯特、斗魔旺乔、哈耶克、奈尼芬多、加布、坤格、谱尼

### 新增药水

- **[炽焰之心](/potions/blazing_heart_potion)**
- **[罐装草莓](/potions/canned_strawberry_potion)**
- **[红色恶魔水晶](/potions/red_demon_crystal_potion)**
- **[紫色恶魔水晶](/potions/purple_demon_crystal_potion)**
- **[绿色恶魔水晶](/potions/green_demon_crystal_potion)**
- **[齿轮核心](/potions/mechanical_nut_potion)**
- **[黑色暮光](/potions/black_twilight_potion)**
- **[皮神的羽毛](/potions/pi_feather_potion)**
- **[高热溶解弹](/potions/high_temp_shell_potion)**
- **[永寒精华](/potions/eternal_cold_essence_potion)**
- **[位面分离枪](/potions/dimensional_separation_gun_potion)**
- **[一副涂鸦](/potions/doodle_map_potion)**
- **[黑日之核](/potions/black_sun_core_potion)**
- **[翩跹之蝶](/potions/fluttering_butterfly_potion)**
- **[智慧果实](/potions/wisdom_fruit_potion)**
- **[蓝色药丸](/potions/blue_pill_potion)**
- **[返祖针剂](/potions/atavism_injection_potion)**
- **[庆典多味豆](/potions/celebration_beans_potion)**
- **[绯红鱼罐头](/potions/crimson_fish_can_potion)**
- **[暗物质巧克力](/potions/dark_matter_chocolate_potion)**
- **[梦境边陲棉花糖](/potions/dream_cotton_candy_potion)**
- **[汲能匣](/potions/energy_absorber_potion)**
- **[邪恶贝果](/potions/evil_bagel_potion)**
- **[冰镇柠檬汁](/potions/iced_lemonade_potion)**
- **[正义冰淇淋](/potions/justice_ice_cream_potion)**
- **[生命灵珠](/potions/life_gem_potion)**
- **[生命苔原口嚼糖](/potions/life_tundra_gum_potion)**
- **[神圣蛋白霜饼](/potions/sacred_meringue_potion)**
- **[星之能](/potions/star_energy_potion)**
- **[至尊曲奇](/potions/supreme_cookie_potion)**
- **[立柱](/potions/pillar_potion)**
- **[漂流瓶](/potions/drift_bottle_potion)**
- **[海螺](/potions/conch_potion)**
- **[缠管海绵](/potions/seaweed_potion)**
- **[清通棒](/potions/toilet_plunger_potion)**
- **[牙齿陷阱](/potions/tooth_trap_potion)**
- **[香酥豚排](/potions/roast_pork_potion)**
- **[积木塔](/potions/building_block_potion)**
- **[骰子](/potions/dice_potion)**
- **[赛尔绘](/potions/painting_potion)**
- **[赛尔号模型](/potions/ship_model_potion)**
- **[万花球](/potions/flower_ball_potion)**

### 修改的药水

- **[无相](/potions/attribute_change_potion)**（原无相药水）
- **[蓝火](/potions/blue_fire_potion)**（原蓝火药水）
- **[金火](/potions/gold_fire_potion)**（原金火药水）
- **[绿火](/potions/green_fire_potion)**（原绿火药水）
- **[紫火](/potions/purple_fire_potion)**（原紫火药水）
- **[双极](/potions/twin_potion)**
- **[乾坤](/potions/reverse_potion)**
- **[焚天](/potions/burn_sky_potion)**
- **[混乱](/potions/chaos_potion)**
- **[圣佑](/potions/holy_blessing_potion)**
- **[长效体力药剂](/potions/long_lasting_hp_potion)**
- **[PP药水](/potions/pp_potion)**
- **[悬命](/potions/fate_gamble_potion)**
- **[湮灭](/potions/collapse_potion)**
- **[借势](/potions/borrow_potion)**
- **[剑来](/potions/sword_come_potion)**
- **[血契](/potions/sacrifice_potion)**
- **[星愿礼盒](/potions/gift_box_potion)**
- **[瞬影](/potions/first_strike_potion)**
- **[时溯药水](/potions/recall_potion)**
- **[龙的振奋药水](/potions/dragon_inspire_potion)**
- **[修的神奇药水](/potions/xiu_magic_potion)**

（药水改名，效果不变；名称保留者：**[失明药水](/potions/blind_potion)**、**[大暗黑天秘药](/potions/great_dark_sky_potion)**、**[战神联盟秘药](/potions/war_god_alliance_potion)**、**[雷诺的急救包](/potions/reno_first_aid_potion)**）

### 修复的 bug

- 金火/紫火增益方向修正：只对自身生效
- 长效体力药水：免疫固定伤害持续覆盖正确的回合结算
- 瞬影药水：延迟先制触发即衰减
- 星灵圣王＋鬼剑骷髅：同时持有并触发铸造时互相套娃生成的无限循环（卡死）修复
- 遗物悬浮提示：修复[坦普瑞](/relics/epic/tan_pu_rui)、[轮回霓裳羽](/relics/ancient/nonupeipe_rebirth_and_feather)等遗物悬浮框不显示的问题（单条提示生成异常会导致整个悬浮框中断）；修复拖牌瞄准期间战斗结束时悬浮框被永久屏蔽的问题

### 其他（机制 / 关键词 / wiki）

- **泰坦之灵房间改为随时可用**
- 新增真神牌体系：[混沌灭世决](/cards/ancient/world_end_decree)、[神灵救世光](/cards/ancient/divine_salvation_light) 等真神牌只能被自动打出，打出后从所有牌堆永久消失；首次打出时按消耗 PP 向真神牌堆生成对应数量的牌
- wiki 同步更新（新增索伦森角色、卡牌/药水/能力图鉴对应补全）
- 新增[第五技能图鉴](/fifth-skill/)板块：23 张第五技能卡从角色牌独立成页，含解锁遗物概率表与获取途径；全站相关链接与索引计数同步更新
- 角色牌文本精简：卡面会自动显示的关键词不再重复写入描述，单体牌不再重复写目标
- wiki 补全新增角色牌页面与索引计数（角色牌 210 → 222）
- 新增「墨染」经济体系：围绕[墨染](/powers/mo_ran_power)资源，由[雁翎](/relics/common/yan_ling)（滚雪球翻倍）、[学神](/relics/shop/study_god)（大额底仓）、[墨眉](/cards/character/mo_mei)（打出 +150 层）共同驱动，长线兑换金币与永久手牌上限
- 充能球统一加固：全 mod 28 处充能点统一走新增的 SeerOrbHelper.SafeChannel——球位满且激发链反向补位时不再抛「OrbQueue is full」卡死（未满/无球位时行为与原来完全一致）
- 接管机制上限调整：[瓦库接管](/mechanics/mourning.md)与[魔君接管](/powers/demon_takeover_power.md)的自动打牌上限 99 张 → 33 张
- wiki 同步补全 6 张新卡页面、[墨染](/powers/mo_ran_power)能力页、[雁翎](/relics/common/yan_ling)/[学神](/relics/shop/study_god)遗物页重写；角色牌索引 222 → 228，卡牌总数 339 → 345
- wiki 新增[组合推荐](/combos/)、[彩蛋](/easter-eggs/)、[数据冷知识](/trivia/)板块；清理 powers.json 中 5 个无源码引用的残留条目（九死未悔/雪鹄/海螺/受击计数/残影记伤）
- wiki 补全[孤雷风暴](/enchantments/gu_lei_feng_bao)附魔详情页并收录进[附魔图鉴](/enchantments/)（mod 新增附魔 31 → 32 种）
- wiki 修正遗物图鉴计数（总数 310 → 311；普通 54 → 55、罕见 27 → 31、稀有 52 → 46、商店 13 → 15）与[先古之民](/mechanics/ancients.md)遗物数据（涅奥 26 → 27）
- wiki 修正首页与[核心机制总览](/mechanics/)的过期计数：关键词 34 → 45（另含原版 7 个，共 52 项）、药水 26 → 68、异常状态 25 → 26
- wiki「机制」导航扩为分组子菜单：[核心机制总览](/mechanics/) + 核心系统 / 改造的原版系统 / 关键词衍生子系统 / 独有战斗机制 / UI 与交互 / 地图与进度共 33 项；「杂项」移除彩蛋与数据冷知识入口（页面保留）

## V4.0

### 新增的卡牌

- **[夷灭](/cards/character/yimie)**
- **[灰月之吻](/cards/character/hui_yue_zhi_wen)**
- **[灵狐魅术](/cards/character/ling_hu_mei_shu)**
- **[群宇纠缠](/cards/character/qun_yu_jiao_chan)**
- **[戏梦缥缈间](/cards/character/xi_meng_piao_miao_jian)**
- **[翻云覆雨](/cards/character/fan_yun_fu_yu)**
- **[静止领域](/cards/character/jing_zhi_ling_yu)**
- **[命运之初](/cards/character/ming_yun_zhi_chu)**
- **[几曾识干戈](/cards/character/ji_ceng_shi_gan_ge)**
- **[告命诗途](/cards/character/gao_ming_shi_tu)**
- **[神权忤逆](/cards/character/shen_quan_wu_ni)**
- **[奇镰解放](/cards/character/qi_lian_liberation)**
- **[雅髯狮啸](/cards/character/ya_ran_shi_xiao)**
- **[苍炎日无极](/cards/character/cang_yan_sun_wu_ji)**
- **[毁灭元神](/cards/character/ruin_soul)**
- **[一念去留断](/cards/character/go_stay_break)**
- **[一念生死叹](/cards/character/life_death_sigh)**
- **[创世之神谕](/cards/character/genesis_oracle)**
- **[晚风孤夜断](/cards/character/evening_wind_break)**
- **[孤身绝念刺](/cards/character/lone_despair_stab)**

### 新增的遗物

- **[余罪魔女](/relics/legendary/seer_crime_witch)**（传说）
- **[泊莱德](/relics/rare/seer_pride_relic)**（七宗罪·傲慢）
- **[哲利斯](/relics/rare/seer_envy_relic)**（七宗罪·嫉妒）
- **[安格瑞](/relics/rare/seer_wrath_relic)**（七宗罪·愤怒）
- **[格拉托尼](/relics/rare/seer_gluttony_relic)**（七宗罪·暴食）
- **[格利德](/relics/rare/seer_greed_relic)**（七宗罪·贪婪）
- **[拉斯特](/relics/rare/seer_lust_relic)**（七宗罪·色欲）
- **[斯洛斯](/relics/rare/seer_sloth_relic)**（七宗罪·懒惰）
- **[帕泽](/relics/epic/seer_pa_ze)**（史诗）
- **[八岐大蛇](/relics/rare/seer_ba_qi_da_she)**（史诗）
- **[霹雳喵](/relics/rare/seer_pi_li_miao)**（史诗）
- **[喵佐](/relics/rare/seer_miao_zuo)**（稀有）
- **[飒雷·喵佐](/relics/epic/seer_sa_lei_miao_zuo)**（史诗）
- **[飒雷孤影·喵佐](/relics/legendary/seer_sa_lei_gu_ying_miao_zuo)**（传说）
- **[愈灵·克丽娅](/relics/epic/seer_keliya)**（史诗）
- **[华夫家族](/relics/shop/hua_fu_jia_zu)**（商店）
- **[招财喵](/relics/shop/zhao_cai_miao)**（稀有）
- **[兹拉特](/relics/common/zi_la_te)**（普通）
- **[金瑞福龙](/relics/common/jin_rui_fu_long)**（普通）
- **[无影剑客](/relics/uncommon/seer_shadowless_swordsman)**（罕见）
- **[迅剑](/relics/common/seer_swift_sword)**（普通）
- **[鬼剑骷髅](/relics/common/seer_ghost_sword_skeleton)**（普通）
- **[超级果然多](/relics/uncommon/seer_super_guo_ran_duo)**（普通）
- **[吉拉提斯](/relics/common/seer_ji_la_ti_si)**（普通）
- **[麦康纳](/relics/uncommon/seer_mai_kang_na)**（普通）
- **[伊优](/relics/common/yi_you)**（普通）
- **[小火猴](/relics/common/xiao_huo_hou)**（普通）
- **[黑啵啵](/relics/uncommon/hei_bo_bo)**（罕见）
- **[昆仑](/relics/uncommon/seer_kun_lun)**（罕见）
- **[紫幽](/relics/uncommon/zi_you)**（罕见）
- **[雷伊](/relics/common/ray_relic)**（普通）
- **[魇魔](/relics/rare/seer_yuanmo)**（稀有）
- **[斯嘟尔](/relics/shop/seer_siduer)**（商店）
- **[盖亚](/relics/common/seer_gaiya)**（普通）
- **[麦汪汪](/relics/rare/seer_mai_wang_wang)**（稀有）
- **[温泉贝贝](/relics/rare/seer_wen_quan_bei_bei)**（稀有）
- **[克洛伊](/relics/rare/seer_ke_luoyi)**（稀有）
- **[布布种子](/relics/common/seer_bush_seed)**（普通）
- **[杰诺](/relics/uncommon/seer_jino)**（稀有）
- **[鰥](/relics/rare/seer_guan)**（稀有）
- **[源·宵](/relics/uncommon/seer_yuan_xiao)**（稀有）
- **[创世兵魂](/relics/shop/chuang_shi_bing_hun)**（商店）
- **[雁翎](/relics/common/yan_ling)**（普通）
- **[夜香刀神](/relics/rare/ye_xiang_dao_shen)**（稀有）
- **[愿](/relics/rare/yuan)**（稀有）
- **[摆渡者·费雷](/relics/rare/seer_ferryman)**（稀有）

### 修改的卡牌

**重做：**

- **[双生花](/cards/colorless/twin_flower)**（重做）
- **[大奖！](/cards/token/surprise_grand_prize)**（重做）
- **[镂月裁云](/cards/character/cloud_cutting_moon)**（重做）
- **[饮血屠龙](/cards/character/drink_blood_dragon_slaying)**（重做）
- **[百鬼夜行](/cards/character/hundred_ghosts)**（重做）
- **[亡灵风暴](/cards/character/undead_storm)**（重做）
- **[昊海垂天](/cards/character/vast_sea_sky)**（重做）
- **[妖族异术](/cards/character/yao_zu_yi_shu)**（重做）

**调整：**

- **[好男孩](/cards/colorless/good_boy)**
- **[殉道者圣别](/cards/colorless/martyr_holy_divine)**
- **[群生俯首](/cards/character/all_life_submit)**
- **[阿玛迪斯光](/cards/character/amadeus_light)**
- **[二律背反](/cards/character/antinomy)**
- **[亢龙有悔](/cards/character/arrogant_dragon_repents)**
- **[八月的流火](/cards/character/august_flame)**
- **[灼目天星](/cards/character/blinding_heaven_star)**
- **[竭血残蝶](/cards/character/blood_exhaust_butterfly)**
- **[戕伐樊笼](/cards/character/cage_destruction)**
- **[逍遥游](/cards/character/carefree_journey)**
- **[禁术·契灭](/fifth-skill/contract_destruction)**
- **[拨乱反正](/cards/character/correct_mistakes)**
- **[宇宙胎动](/cards/character/cosmic_movement)**
- **[荒烬涂天](/cards/character/desolate_ash_sky)**
- **[蔑天行·残虐](/cards/character/despise_heaven_cruelty)**
- **[朦光混影术](/cards/character/dim_light_shadow_art)**
- **[龙寤揭天](/cards/character/dragon_awakening_sky)**
- **[龙族烙印](/cards/character/dragon_brand)**
- **[王·龙予狂宴](/cards/character/dragon_feast)**
- **[龙王波](/cards/character/dragon_king_wave)**
- **[龙舞·祭](/cards/character/dragon_martial_sacrifice)**
- **[龙鳞切割](/cards/character/dragon_scale_cut)**
- **[火种永存](/cards/character/eternal_flame)**
- **[无终痴念](/cards/character/endless_obsession)**
- **[恶影袭](/cards/character/evil_shadow_strike)**
- **[极度冰点](/cards/character/extreme_freeze)**
- **[绝命火焰](/cards/character/fatal_flame)**
- **[黎羽幻生](/cards/character/feather_phantom)**
- **[飞龙在天](/cards/character/flying_dragon_sky)**
- **[飞燕游龙](/cards/character/flying_swallow_dragon)**
- **[森罗万象](/cards/character/forest_all_things)**
- **[傳馥明王最胜语](/cards/character/fragrant_king_supreme_word)**
- **[耀武遗辉](/cards/character/glorious_remnant)**
- **[荣尽枯生](/cards/character/glory_exhaustion)**
- **[大数回廊](/cards/character/great_number_corridor)**
- **[天霜杀伐](/cards/character/heaven_frost_slaughter)**
- **[天谴](/cards/character/heaven_punishment)**
- **[天灵净野](/cards/character/heaven_spirit_pure_field)**
- **[苍鹭幻翎](/cards/character/heron_illusion_feather)**
- **[潜龙伏地啸](/cards/character/hidden_dragon_roar)**
- **[圣灵魔闪光](/cards/character/holy_flash)**
- **[圣盾护佑](/cards/character/holy_shield)**
- **[我思故我在](/cards/character/i_think_therefore_i_am)**
- **[不死之身](/cards/character/immortal_body)**
- **[不朽之盾](/cards/character/immortal_shield)**
- **[在劫难逃](/cards/character/inescapable_doom)**
- **[狩·无限连爪](/fifth-skill/infinite_claw)**
- **[无限·虚数湮灭](/cards/character/infinite_void_annihilation)**
- **[智能起源](/cards/character/intelligence_origin)**
- **[一月的雪鹄](/cards/character/january_snow_owl)**
- **[几米能量](/cards/character/jimmy_energy)**
- **[七月的海螺](/cards/character/july_conch)**
- **[王·联盟审判](/cards/character/king_alliance_judgment)**
- **[王·天乖陆离](/fifth-skill/king_heaven_strange)**
- **[鲲·千里击涛](/cards/character/kun_thousand_miles_wave)**
- **[同生共死](/cards/character/life_death_together)**
- **[光之盾](/cards/character/light_shield)**
- **[孤单映青釭](/cards/character/lone_hero_green_blade)**
- **[怀晦之亟盼](/cards/character/longing_for_darkness)**
- **[魔·黑天暗罚](/fifth-skill/magic_black_sky_punishment)**
- **[五月的锋芒](/cards/character/may_edge)**
- **[沧溟珠泪](/cards/character/ocean_pearl_tear)**
- **[过载能源](/cards/character/overload_energy)**
- **[鹏·万里遨游](/cards/character/peng_thousand_miles_soar)**
- **[五芒星](/cards/character/pentagram)**
- **[无始源光](/cards/character/primordial_light)**
- **[孤洁之傲](/cards/character/proud_solitude)**
- **[异能突变](/cards/character/psionic_mutation)**
- **[纯净能量](/cards/character/pure_energy)**
- **[赤胆缀银枪](/fifth-skill/red_bold_spear)**
- **[金钱攻击](/cards/character/money_attack)**
- **[镇魂歌](/cards/character/requiem)**
- **[归途](/cards/character/return_path)**
- **[义乂梵我婆娑纱](/cards/character/righteous_brahma_veil)**
- **[秘纹护体](/cards/character/secret_rune)**
- **[寻己遥途](/cards/character/seek_distant_path)**
- **[九月的枷锁](/cards/character/september_shackles)**
- **[七重沙海](/cards/character/sevenfold_sand_sea)**
- **[长叹天人命途](/cards/character/sigh_celestial_fate)**
- **[欷歔证道难](/cards/character/sigh_tao_difficulty)**
- **[银雾之翼](/cards/character/silver_mist_wing)**
- **[滔天龙汲水](/cards/character/soaring_dragon_water)**
- **[太阳能](/cards/character/solar_energy)**
- **[蒸汽能源](/cards/character/steam_energy)**
- **[石破天惊](/cards/character/stone_breaker)**
- **[夏花之灿](/cards/character/summer_bloom)**
- **[逐日长诗](/cards/character/sun_chase_long_poem)**
- **[日月安属](/cards/character/sun_moon_belong)**
- **[千重影缠身](/fifth-skill/thousand_shadow_bind)**
- **[瞬雷天闪](/cards/character/thunder_flash)**
- **[雷神天明闪](/cards/character/thunder_god_flash)**
- **[福泽聚宝象](/fifth-skill/treasure_elephant)**
- **[真龙吐息](/cards/character/true_dragon_breath)**
- **[奸奇](/cards/character/tzeentch)**
- **[沦·亡灵天灾](/fifth-skill/undead_catastrophe)**
- **[彼空·根源重释](/fifth-skill/void_root_reinterpret)**
- **[白霞逐夜](/cards/character/white_dawn_chase_night)**
- **[风林火山](/cards/character/wind_forest_mountain)**
- **[枯萎能量](/cards/character/withered_energy)**
- **[萧·零落绯如故](/fifth-skill/xiao_falling_red)**
- **[墟埪](/cards/character/xukong)**
- **[神圣启示歌](/cards/ancient/divine_revelation)**
- **[神圣复苏](/cards/ancient/holy_revival)**
- **[疯狂编码](/cards/colorless/crazy_code)**
- **[夜·冥昭瞢闇](/cards/colorless/dark_oblivion)**
- **[御象灵尊](/cards/colorless/elephant_spirit_lord)**
- **[帝天战佛](/cards/colorless/emperor_war_buddha)**
- **[无尽能源](/cards/colorless/endless_energy)**
- **[首发压制](/cards/colorless/first_strike_suppress)**
- **[电石混地](/cards/colorless/flint_stone_earth)**
- **[予天繁星](/cards/colorless/give_heaven_stars)**
- **[好女孩](/cards/colorless/good_girl)**
- **[大威势明王](/cards/colorless/great_might_vidyaraja)**
- **[圣耀明瞳斩](/cards/colorless/holy_eye_slash)**
- **[战·圣灵天威](/cards/colorless/holy_heavenly_might)**
- **[圣地擎山碎](/cards/colorless/holy_mountain_crush)**
- **[圣灵雷霆斩](/cards/colorless/holy_thunder_slash)**
- **[低等精灵](/cards/colorless/low_elf)**
- **[元神启动](/cards/colorless/spirit_activation)**
- **[十倍二长老？](/cards/colorless/ten_times_two_elder)**
- **[米咔](/cards/token/mika)**
- **[暴政统治者](/cards/event/tyrant_ruler)**
- **[婵·命定星缘](/fifth-skill/destined_star_bond)**
- **[大奖？](/cards/token/grand_prize)**

### 修改的遗物

- **[群星的礼赠](/relics/starter/elemental_core)**（重做）
- **[佩尔之舌](/relics/ancient/pael_rare_relic)**（改造）
- **[吕蒙](/relics/ancient/lu_meng)**
- [天玄苍魂·青龙](/relics/rare/azure_dragon)、[阿尔蒂克](/relics/epic/arteck)、[刘备](/relics/rare/benevolent_heaven_lord_liu_bei)、[万恶魔主](/relics/rare/evil_beast_emperor)、[钢傀](/relics/epic/steel_puppet)、[女祭司](/relics/common/tarot_high_priestess)、[世界](/relics/common/tarot_world)、[混沌魔君索伦森](/relics/legendary/chaos_demon_lord)、[弑序神罗](/relics/legendary/order_killing_god_luo)（意图封印统一）
- [武心婵](/relics/legendary/wu_xin_chan)、[卫岳](/relics/epic/wei_yue)、[霍光](/relics/epic/huo_guang)（悬浮框新增「第五技能」条目）

### 修改的能力

- **[曝](/powers/expose_power)**：异常状态施加失效 + 消逝不打断复活

### 修复的 bug

- 曹操遗物：战斗结束结算时生成卡牌越界导致的卡死
- 麦汪汪遗物：战斗外回血触发自动打出导致的异常
- 卡牌图鉴：先古 / 角色列表页补全缺失的缩略图

### 其他（机制 / 关键词 / 附魔 / wiki）

- 附魔「无效」
- 关键词「进化」（史莱姆系列）
- 关键词「连营」（群体自动打出）
- 机制「意图封印」：新增〔攻击无效〕〔封属〕两种封印意图，原"无效化"意图更名为〔行动失效〕；凝滞对怪物改施〔封属〕；关键词图鉴收录全部 34 个关键词
- wiki 建构改造：卡图缩略图补全、无色牌关键词与描述文本整理
