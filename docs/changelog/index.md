# 版本更新

## 2026-09-03

### 卡牌

- **[孤身绝念刺](/cards/character/lone_despair_stab.md)**：已损生命固定伤害比例由 100%/150% 修正为 50%/80%（与源码一致）
- **[创世之神谕](/cards/character/genesis_oracle.md)**：升级后伤害由 45 修正为 48；修正斩杀判定与稀有牌获取的机制描述
- **[神权忤逆](/cards/character/shen_quan_wu_ni.md)**：清理详细机制中的源码术语，移除实现载体（群星的礼赠）的触发机制说明
- **[告命诗途](/cards/character/gao_ming_shi_tu.md)**：清理详细机制中的源码术语，改写为玩家语言
- **[奇镰解放](/cards/character/qi_lian_liberation.md)**：清理源码术语，修正凝驻理解、移除实现载体（群星的礼赠）提及
- **[雅髯狮啸](/cards/character/ya_ran_shi_xiao.md)**：修正四维属性收益描述（防御/命中/速度的实际效果）、移除 PP 啰嗦
- **[命运之初](/cards/character/ming_yun_zhi_chu.md)**：修正"打出 X 张牌换 X+1 张新牌"的逻辑错误
- **[静止领域](/cards/character/jing_zhi_ling_yu.md)**：清理源码术语、精简 PP 描述
- **[晚风断](/cards/character/evening_wind_break.md)**：修正四维属性的负面效果描述（防御/命中/速度的实际效果）
- **[魔影突袭](/cards/character/evil_shadow_strike.md)**：清理固定伤害公式的源码术语、精简 PP 描述
- **[生灭叹息](/cards/character/life_death_sigh.md)**：修正生命差触发条件与凝驻描述、清理源码术语
- **[红缨枪](/cards/character/red_bold_spear.md)**：修正耗能"小于"符号的 HTML 转义
- **卡名修正**：[晚风孤夜断](/cards/character/evening_wind_break.md)（原"晚风断"）、[创世神谕](/powers/genesis_oracle_reward_power.md)（原"创世之神谕奖励"）、[弹簧](/powers/spring_bonus_power.md)（原"弹簧能力"）、[叽里呱啦&呜哩哇啦](/relics/shop/jili_gu_la.md)（去除空格），与本地化统一
- 新增翻云覆雨/几曾识干戈/命运之初/静止领域/神权忤逆/告命诗途卡图到 wiki

### 遗物

- **[周瑜](/relics/epic/zhou_yu.md)**：弃牌堆伤害描述由"固定伤害"修正为"不可格挡的非攻击伤害"（与源码一致），清理源码术语
- **[神·赵云](/relics/legendary/god_zhao_yun.md)**：清理源码术语，更新手牌归一化的重入保护描述（按玩家隔离）

### 机制

- **[溯引](/mechanics/suyin.md)**：修复格式问题（移除多余分隔符和标题行），移除代码实现段落（违反规则 8.3），重写关键细节为玩家语言
- **[凝驻](/mechanics/ningzhu.md)**：修复格式问题（移除多余分隔符和标题行），移除代码实现段落（违反规则 8.3），重写关键细节移除源码术语，修复链接格式
- **[回响](/mechanics/echo.md)**：修正为"每回合开始时，若此牌在抽牌堆，向弃牌堆生成一张复制品"（原为旧效果"加入手牌"）
- [关键词图鉴](/mechanics/keywords.md)：Mod 关键词数量由 25 修正为 27，同步回响效果描述

### 卡牌图鉴

- **[角色牌图鉴](/cards/character/index.md)**：补齐 17 张缺失卡（苍炎日无极/晚风孤夜断/恶影袭/翻云覆雨/告命诗途/创世之神谕/一念去留断/几曾识干戈/静止领域/一念生死叹/孤身绝念刺/命运之初/奇镰解放/毁灭元神/神权忤逆/雅髯狮啸），计数 182→198
- **[横槊赋诗](/cards/token/heng_shuo_fu_shi.md)**：由先古牌移入衍生牌（与源码 Token 卡池一致），更新相关计数与引用
- 移除重复的"我思故我在"详情页（保留与本地化一致的版本）

## 2026-09-01

### 事件

- **调整出现层数**：[M78星云的外交时刻](/events/nebula_diplomacy.md)、[莱达宇宙：缺失的愚者塔罗](/events/missing_fool_tarot.md)、[逝者巨樽的宿命对峙](/events/deceased_giant_jar_confrontation.md) 限定为密林/暗港（第一层）；[圣战福利：百分百宝石附魔机](/events/gem_enchantment_machine.md)、[神兽空间](/events/divine_beast_space.md) 限定为密林/暗港（第一层）及巢穴（第二层）
- **调整出现层数**：[无光黑洞的长老许诺](/events/lightless_black_hole_promise.md)、[塔中奇遇：谁才是天选主角](/events/who_is_the_chosen_one.md) 限定为巢穴（第二层）及荣耀（第三层）；[战斗专家](/events/combat_expert.md)、[史莱姆的加冕](/events/slime_coronation.md)、[奸商](/events/swindler.md)、[伏魔空间](/events/demon_space.md)、[盖亚与瑞尔斯](/events/gaiya_ruiersi.md) 限定为巢穴（第二层）
- **调整出现层数**：[梅赫维特](/events/mehvet.md)、[克洛斯星](/events/keluosi_star.md) 限定为巢穴（第二层）及荣耀（第三层）；[决战回响：混沌深渊的宿命对决](/events/chaos_abyss_duel.md)、[七宗罪的试炼](/events/seven_sins_trial.md)、[穹明号](/events/qiong_ming_hao.md)、[尤纳斯](/events/yunas_event.md) 限定为荣耀（第三层）

### 机制

- 意图机制全面更新：新增[攻击无效](/mechanics/intent.md)与[封属](/mechanics/intent.md)两种封印意图类型（额外意图图标显示，类似"解析"）；原"无效化"意图更名为"行动失效"（纯意图行动被封印整体失效时出现）
- [凝滞](/mechanics/abnormal-status.md)对怪物改为施加封属（非攻击意图效果失效）

### 卡牌

- [跪地求饶](/cards/character/kneel_beg.md)：随机无效化 X 个意图 → 随机施加 X 次攻击无效或封属
- [天霜杀伐](/cards/character/heaven_frost_slaughter.md)：冰封失败则对其施加攻击无效
- [无限·虚数湮灭](/cards/character/infinite_void_annihilation.md)：对所有敌人施加封属
- [十玄释](/cards/character/shi_xuan_shi.md)：自动打出判定条件中的"无效化"更新为"行动失效"

### 遗物

- [苍龙](/relics/uncommon/azure_dragon.md)、[阿尔蒂克](/relics/epic/arteck.md)、[刘备](/relics/rare/benevolent_heaven_lord_liu_bei.md)、[万恶魔主](/relics/rare/evil_beast_emperor.md)、[钢傀](/relics/epic/steel_puppet.md)、[女祭司](/relics/common/tarot_high_priestess.md)、[世界](/relics/common/tarot_world.md)、[混沌魔君索伦森](/relics/legendary/chaos_demon_lord.md)、[弑序神罗](/relics/legendary/order_killing_god_luo.md)：意图失效机制统一更新为攻击无效/封属（按意图类型生效，不再是整回合击晕）

### 能力

- [凝滞](/powers/stasis_power.md)、[钢傀守卫](/powers/steel_puppet_guard_power.md)、[支援](/powers/support_power.md)、[支援效果翻倍](/powers/support_double_power.md)、[致命印记](/powers/fatal_mark_power.md)：意图失效机制统一更新为攻击无效/封属

- 新增[连营](/mechanics/lian_ying.md)词条详情页，介绍该 Mod 原创的群体自动打出关键词机制

### 其他

- 重构[关键词](/mechanics/keywords.md)为导航目录页，采用表格形式展示全部 21 个关键词，每行含名称与效果摘要，点击跳转至详情页
- 修正[吕蒙](/relics/ancient/lu_meng.md)小贴士中的源码术语（`CardSelectCmd.FromSimpleGrid`、`SeerLvMengCardSelectPatch`）
- 修复[吕蒙](/relics/ancient/lu_meng.md)、[鬼焰神君·陆逊](/relics/ancient/gui_yan_shen_jun_lu_xun.md)、[横槊赋诗](/cards/ancient/heng_shuo_fu_shi.md)多处死链
- 清理[斩一](/powers/sharp_one_power.md)、[斩二](/powers/sharp_two_power.md)、[斩三](/powers/sharp_three_power.md)、[锁定I](/powers/lock_one_power.md)、[锁定II](/powers/lock_two_power.md)、[解离](/powers/resolve_power.md)、[强韧体魄III](/powers/strong_body_three_power.md)、[虎刃反击](/powers/tiger_crit_counter_power.md)等能力详情页中的违规源码术语（如钩子名、字段名、类名引用）
- 清理[雷霆](/monsters/boss/ray_monster.md)、[摩吉](/monsters/elite/mojj_monster.md)、[史莱姆之王](/monsters/normal/slime_king_monster.md)、[盖亚](/monsters/boss/gaia_monster.md)等怪物详情页及[暴击](/powers/critical_strike_power.md)、[固定伤害](/powers/fixed_damage_power.md)、[狂暴](/powers/fury_power.md)等机制详情页的"## 源码"段落，移除文件名后的描述性文字，仅保留纯文件名列表
- 批量修复 160+ 个 wiki 页面的"## 源码"段落，移除所有文件名后的中文括号描述

