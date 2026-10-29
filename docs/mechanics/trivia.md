# 冷知识

图鉴正文讲规则，这里讲规则背后玩家真正能碰到的细节。每条都能点进对应页面。

## 一、接管与自动出牌

1. [瓦库接管](/mechanics/mourning)从手牌最左边开始，挑第一张当前能打的牌打出去，打完再从头找，不看费用高低；[魔君接管](/powers/demon_takeover_power)正相反，每次都挑当前手牌里最终费用最高的那张，同费按卡牌自己的固定顺序排，和你把手牌摆在哪无关。
2. [魔君接管](/powers/demon_takeover_power)每打一张都会重新算一次能量，所以高费牌先走，能量花光后剩下的 0 费牌照样能打、会排在最后；[瓦库接管](/mechanics/mourning)则可能因为前面把能量打掉，后面明明有高费牌也打不出去。
3. [魔君接管](/powers/demon_takeover_power)和[瓦库接管](/mechanics/mourning)一次最多都只打 <span style="color:#3aa675;font-weight:600">18</span> 张，手牌再多也会剩下；每张都正常扣能量和 PP，不是免费打出。
4. 遇不到能打的牌、战斗结束、你点了结束回合，[瓦库接管](/mechanics/mourning)都会提前停；瓦库打完自己消失，[魔君接管](/powers/demon_takeover_power)则把能力留到你下回合开始才移除。
5. 自动选目标和手动打牌用同一套规则：打敌人的牌选第一个能打到的敌人，随机目标的牌在可打目标里随机，指向队友的牌随机挑一个活着的队友，自己的牌指向自己；[瓦库](/mechanics/mourning)与魔君都按这套规则出手。
6. [魔君接管](/powers/demon_takeover_power)是隐藏能力，战斗界面没有图标，你只会看到手牌被一张一张慢慢打光，而不是瞬间清空。
7. [堕落](/powers/fallen_power)每跨过一个百位就触发一次完整连锁：先给[混沌化身](/mechanics/chaos-incarnation)，再抽 1 张，再立刻由魔君接管把能打的牌打完；层数不清零，200、300 层会继续触发。
8. 带着[枫落殇·西叶](/relics/epic/feng_luo_shang_xi_ye)时，堕落只当召唤转化计数用，上面的混沌化身、抽牌、魔君接管全部不生效。

## 二、手牌与判定

1. 屏幕上的手牌顺序和系统记录的顺序可能对不上；[薇尔诗](/mechanics/vier-poem)这类按位置判定的关键词读的是系统记录的顺序，所以会出现“看着不相邻，却判定成相邻”。
2. [手牌快照](/mechanics/hand-snapshot)在出牌前先记下整手牌，之后的位置判定都按这份快照算；先打哪张、后打哪张会直接影响[薇尔诗](/mechanics/vier-poem)的判定。
3. 从[真神牌堆](/mechanics/true-god-pile)右键拿牌时，牌需要先登记进本场战斗再进手牌，否则回合结束清手牌会卡死；正常玩就是右键即拿，不会出问题。

## 三、卡牌与 PP

1. 最大生命只剩 1 时，[混沌化身](/mechanics/chaos-incarnation)不能再拿最大生命抵费；如果能量足够，这张牌仍可正常打出。
2. [命中](/powers/accuracy_power)正层每层 +10% 暴击率，还会隐藏地让目标闪避 -5%/层；负命中则反过来给目标加闪避。
3. [速度](/powers/speed_power)正层多抽的牌必须弃掉一半，弃牌数 = 有效层数 ÷ 2 向下取整，且不超过手牌上限的一半。
4. 玩家[速度](/powers/speed_power)负层不会让自己少抽，而是让每只敌人获得其最大生命 5%/层的格挡。
5. 一次攻击的多段伤害只掷一次[暴击](/mechanics/critical-strike)，整次共享结果，不会每段单独判定。
6. [暴击](/mechanics/critical-strike)基础率是 0，完全由命中/锁定提供；锁定取最高档，不与命中加算。
7. [先制](/powers/first_strike_power)在打出一张牌后全部清空，不会逐层递减；敌人身上的先制则让你下一张牌 +1 费。
8. [罗生门](/mechanics/pp-system)让 PP 消耗 +2，不是把消耗翻三倍。
9. [PP 球](/mechanics/orb)被动每回合回 2 点，激发回 6 点。
10. 强制清空 PP 可以绕过 [PP 保护](/mechanics/pp-system)；保护只保 PP，不保最大生命。
11. [无为觉者](/mechanics/pp-system)会抑制 PP 回收，有它在场时 PP 循环会变慢。
12. [虚无牌](/mechanics/pp-system)与[能力牌](/mechanics/keywords)不参与 PP 回合回收。
13. 自动打出的牌也扣 1 PP，不是系统代打就免费，[魔君](/powers/demon_takeover_power)和瓦库打出的牌同样要付这份钱。
14. PP 归 0 后的自动消耗/回收来自[群星的礼赠](/relics/starter/elemental_core)，不是卡牌自带。
15. [充能球](/mechanics/orb)球位已满时，再充能会先激发最前面的球腾位置，不会把球挤没，也不会卡住。

## 四、元素与异常

1. [元素克制](/mechanics/element-affinity)的多属性只由主属性（元素序号最小）结算一次，避免重复叠乘。
2. [圣谕之风·岚](/monsters/elite/holy_edict_wind_lan_monster)会把岚一侧的相克关系整体改成全克制；双方各 2 属性时是 ×3。
3. [狂暴](/powers/fury_power)是 Buff，却仍算异常，会被免控/弹控拦。
4. [凝滞](/powers/stasis_power)是 Debuff，但它免疫其它异常的效果不变。
5. [混乱](/mechanics/abnormal-status)是随机异常池成员，会被随机异常抽到。
6. [异常状态](/mechanics/abnormal-status)共 27 种，但随机异常只会抽其中 23 种；狂暴、星赐、凝滞、超频不进随机池。
7. [异常状态](/mechanics/abnormal-status)在持有者自己的回合结算，不是在你的回合。
8. [传说结界](/powers/legendary_barrier_power)免疫全部 27 种异常。
9. 100% 闪避的敌人也会被攻击者的正[命中](/powers/accuracy_power)降低闪避，闪避不是绝对免疫。

## 五、固定伤害

1. [固定伤害](/mechanics/fixed-damage)的免疫判定在目标回合开始的结算时进行；免疫后层数归零并移除，不是施加时立刻消失。
2. [固定伤害](/mechanics/fixed-damage)不算攻击伤害，攻击命中/攻击击杀类特效不触发。
3. [固定伤害](/mechanics/fixed-damage)在血条上显示粉色预警段，预览的是下回合开始要扣的量。
4. 被免疫的固定伤害不会推进“承受固定伤害”类[刻印](/engravings/)。
5. [卫岳](/relics/epic/wei_yue)只提升固定伤害，不提升普通伤害。
6. 生命上限流失不是[固定伤害](/mechanics/fixed-damage)，也不是普通伤害，不触发受伤/格挡联动。
7. [长效体力](/potions/long_lasting_hp_potion)每回合回 5 血，并免疫固定伤害。
8. [固定伤害](/mechanics/fixed-damage)的层数在目标回合开始一次性全部结算，不存在“只扣一部分留到下回合”。

## 六、进阶挑战

1. [A17](/mechanics/ascension)的空箱与不掉遗物按楼层固定，同一层反复进出结果不变；两者分开判定，所以同一层完全可能“遗物照掉、箱子却是空的”。
2. [A22](/mechanics/ascension)的赛尔遗物减半，是每次掉落有一半概率只给原版遗物，不是把池子里的赛尔遗物直接删一半。
3. [A24](/mechanics/ascension)对涅奥是先把当前生命清空、再回最大生命的一半，所以你满血去见涅奥也会被压到半血；其他先古才按“已损失生命的一半”回。
4. [A23](/mechanics/ascension)封哪一项是固定的，同一局读档回到商店前，封的还是同一项，不会换一个让你钻空子。
5. [A27](/mechanics/ascension)退化的卡牌也是固定的，读档重进同一幕，退化的还是那几张。
6. [A30](/mechanics/ascension)的先攻只在第四、五幕的正式遭遇生效，子地图里的战斗不吃这一套。
7. [A15](/mechanics/ascension)的强化只作用于前三幕的原版怪物，第四/五幕与子地图都不吃加成。
8. [A16](/mechanics/ascension)只压低战斗掉落里的卡牌品质，商店和事件给的牌不受影响。
9. [A26](/mechanics/ascension)只削 2~5 星的权重，6 星权重本来就是最低档，没有再砍的余地。

## 七、怪物与 Boss

1. [谱尼](/monsters/boss/puni_monster)真身阶段的随机主技能在怪物回合开始才重抽，会和玩家看到的意图错开一轮。
2. [谱尼](/monsters/boss/puni_monster)被击杀切换形态时圣灵计数不清零，计数满 7 才清零；[索伦森](/monsters/boss/soulson_monster)的混沌计数到 7 的倍数触发但不重置。
3. [谱尼](/monsters/boss/puni_monster)每次切形态最大生命 +27%，是复利叠加，切得越多越肉。
4. [马尔修斯](/monsters/boss/maerxiusi_monster) 2700 血，首次死亡满血复活，总伤害约 5400。
5. [六界帝神](/monsters/elite/six_realm_god_monster)的天辉斩魔剑会追加一个回合，玩家第 1 回合实际看到两招。
6. [巴斯特](/monsters/boss/buster_monster) 1 个高塔球时覆甲净持平，2 球起每回合净 +1。
7. [布莱克（幽暗之证）](/monsters/special/blake_dark_proof_monster)只出 1 只，没有真假身。
8. 组合技[意图](/mechanics/intent)会写出真实技能名，而不是只给一个组合图标。
9. [菲尼克斯](/monsters/boss/phoenix_monster)九重天的意图显示当前生命全额，压血能直接减伤。
10. [圣战·瑞尔斯](/monsters/elite/holy_war_ruiersi_monster)的“挫锐”已并入多回合先制，数值为 -1。
11. “无法打出”与“无效”是两种[封印](/mechanics/intent)：前者打不出，后者能打但没效果。
12. [吃月亮](/powers/eat_moon_power)的固定伤害曾打不到玩家，原因是取错阵营目标，现在是按敌方阵营正常结算。
13. [死亡](/cards/token/fate_death)牌只杀做选择的玩家，不会连累其他人。
14. [鬼](/cards/status/ghost)牌判定是手牌数≥上限且全是鬼。
15. [愈灵·克丽娅](/monsters/elite/yuling_keliya_monster)被非卡牌伤害击杀会满血复活；卡牌伤害按溢出值概率复活，且要先扣掉格挡。
16. [兹拉特](/monsters/elite/zilate_monster)跪地求饶是一个敌人都没杀掉才自尽，杀到 1 个就不会自毁。
17. [疲惫](/monsters/boss/tiger_monster)不只让攻击伤害 -20%，每次造成伤害还会按层数自伤。
18. [异星装甲](/monsters/elite/alien_armor_sebst_monster)被封印的技能视为未使用，不消耗蓄能。
19. [菲尼克斯](/monsters/boss/phoenix_monster)的烬翎按每名玩家各 24 片，人再多也不会摊薄每人所需数量。
20. [索伦森](/monsters/boss/soulson_monster)的混沌迭印连消耗堆里的混沌牌也算；同时最多只有 1 只召唤物。
21. [百罗鬼帝](/monsters/boss/bailuoguidi_monster)的 44 张是“每满 44 张立即结束所有存活玩家回合”，不是只结束触发者的回合。
22. [百罗鬼帝](/monsters/boss/bailuoguidi_monster)的戾杀固伤是 4×4^场上生物数，场上人越多越疼。
23. [百罗鬼帝](/monsters/boss/bailuoguidi_monster)有 444 秒现实时间死线，超时后自身回合开始直接秒杀全队；已损生命达到 4444 会自死，回血降到阈值以下可取消。
24. [孤烛灯使](/monsters/boss/guzhudengshi_monster)每侧魂灯上限 7，第 6 回合起的随机池不含技能 6。
25. [莫塔里安](/monsters/boss/motalian_monster)的罪印升级来自每回合审判，不是打牌。
26. [冥契·格斯塔丝](/monsters/boss/mingqi_gesitasi_monster)有死亡计数与溢出伤害转移被动；染夜天妖按本场死亡数施加“X 种异常各 X 层”。
27. [千夜死神](/monsters/boss/hundun_qian_ye_si_shen_monster)始终免死直到最大生命降到 1；玩家侧最大生命到 1 后不再折半，会正常死亡。
28. [提亚斯](/monsters/elite/tias_monster)第 1 回合是螺旋烈风 + 愤怒意志双招。

## 八、子地图

1. [子地图](/mechanics/submap-activity)的 12 个活动各自独立抽取，互不影响。
2. [极天之翼](/mechanics/submap-activity)初始 3 次机会不够 4 胜，至少要买 1 次。
3. [地神试炼](/mechanics/submap-activity)失败后是前进到下一个节点，不是留在原地重打。
4. [贪婪洞窟](/mechanics/submap-activity)的通关条件是累计 800 个石像小鬼，不是打完 6 层；6 层探完但没凑够 800，同样结束且拿不到奖励。
5. [贪婪洞窟](/mechanics/submap-activity)的棋盘按整局种子和层号固定生成，同一局同一层永远是同一张 4×4 图，退出重进不会换布局。
6. [贪婪洞窟](/mechanics/submap-activity)的 boss 格翻开时会封印上下左右，已经翻开的门也会失效；所以门完全可能刷在 boss 旁边，那一层就只能靠打 boss 推进。
7. [贪婪洞窟](/mechanics/submap-activity)的 boss 战 10 点体力是真正进战斗时才扣，点“开战”那一刻还不扣；打输了这 10 点也不退。
8. [贪婪洞窟](/mechanics/submap-activity)每层的 boss 都是[逆魂·佩特菲德](/monsters/elite/reverse_soul_petefide_monster)，但你打的不是它本人的血条：每场胜利只按你的当前攻击力扣这一层的“耐久”，耐久归零才算击破，然后 +100 小鬼进下一层。
9. [贪婪洞窟](/mechanics/submap-activity)的 boss 耐久每层独立，下一层会在 20~50 里重新生成，不是同一只越打越少；所以攻击结晶要尽早拿，越晚拿越亏。
10. [贪婪洞窟](/mechanics/submap-activity)的 boss 耐久 20~50，初始攻击力 20，所以一层至少要打 2~3 次；每次胜利都会按当前攻击力扣耐久，不是非要一次打完。
11. [贪婪洞窟](/mechanics/submap-activity)的生命结晶 +10 体力没有上限，体力可以堆到 100 以上；攻击结晶也是永久 +5，跨层保留。
12. [贪婪洞窟](/mechanics/submap-activity)里花 1 点泰坦之灵换 10 点体力，比翻十格划算，但泰坦之灵本身很贵，别拿它当常规回体力手段。
13. [贪婪洞窟](/mechanics/submap-activity)累计到 800 后必须先回面板点“领取通关奖励”；没领之前不能继续翻格、开门、买体力，也不会被自动送回原地图，避免漏奖。
14. [黑暗之心](/mechanics/submap-activity)拿着种子不种下，赢多少场都不产资源。
15. [黑暗之心](/mechanics/submap-activity)风/光超过 20 继续累计，收获时清零浪费。
16. [永恒幻瞳](/mechanics/submap-activity)选定即写档，重进回不到点击前；未命中时真身当场换位。
17. [真命龙王](/mechanics/submap-activity)只有胜利消耗节点，失败会直接退图；精英节点的掉率与碎屑都翻倍。
18. [激活节点](/mechanics/submap-activity)的精英给 3 词条，普通只给 1 条。
19. [探寻本心](/mechanics/submap-activity)步数 = 本场回合数（至少 1），撞墙反弹；只在最终停留格判戒备，且只升不降。
20. [极天之翼](/mechanics/submap-activity)的紫雾裂空秘印每回合 10% 直接死亡；有人因此倒下，就按一次战斗失败处理。
21. [子地图](/mechanics/submap-activity)的先古三选一不回血、不给遗物，和主地图的先古不是一回事。

## 九、商店、遗物与奖励

1. [金蛋](/mechanics/permanent-bonus) 5 星后，下一次 5/6 星必为 6 星。
2. [破军之印](/events/elite_shop)让抽奖价格减半，最多 3 次，最低 1。
3. [赛尔豆商店](/events/elite_shop)每次刷新要 20 万赛尔豆。
4. 自定义[史诗/传说](/mechanics/custom-rarity)只在赛尔豆商店出售，普通掉落里见不到。
5. [属性加成](/relics/event/attribute_bonus_relic)每点属性卖 10 金币。
6. [群星的礼赠](/relics/starter/elemental_core)右键宝库，全游戏一共 8 件遗物可以右键。
7. [罐装草莓](/potions/canned_strawberry_potion)只能用一次，不是每场战斗都能喝。
8. [黑日之核](/potions/black_sun_core_potion)不能主动喝，只能等它自己触发。
9. [庆典多味豆](/potions/celebration_beans_potion)是两次从 26 种属性里选 1，不是一次三选一。
10. [学神](/relics/shop/study_god)的奖励公式是“峰值 × e 的负（偏差平方 ÷ 18）次方”，偏差 = 实际打牌数 − 预测值的绝对值，三种资源共用同一条曲线。
11. [学神](/relics/shop/study_god)的峰值分别是金币 200、赛尔豆 500 万、泰坦之灵 2；标准差是 3，所以偏差 3 张还能拿到约 60%，偏差 6 张就只剩约 13%。
12. [学神](/relics/shop/study_god)统计的实际打牌数包含自动打出的牌（守夜、哀悼、魔君接管都算），只统计你自己的牌。
13. [学神](/relics/shop/study_god)战斗开始还会额外给 333 层[墨染](/powers/mo_ran_power)，这份是白送的，和预测对不对无关。
14. [龙魂附魔](/relics/event/dragon_soul_enchant_relic)只给“还没附魔”的牌附魔，而且每张牌只会抽到它能吃的那几种附魔；卡牌奖励里的牌在屏幕上就已经附好魔，选走时附魔跟着走。
15. [龙魂宝珠](/relics/event/dragon_soul_orb_relic)给 5 个球位，但每场战斗开始要随机填 10 颗球；球位不够时会把最早那颗激发掉腾位置，等于开场白送一轮激发效果，不是攒着。
16. [龙魂宝珠](/relics/event/dragon_soul_orb_relic)填的球包含赛尔专属球（圣杯、PP 球、多重球、火山、海洋、森林、高塔、星辰、神谕），不是只从原版三颗里抽。
17. [龙魂药水](/relics/event/dragon_soul_potion_relic)每场战斗开始给 5 瓶稀有药水，同一批里不会重复；药水栏满了就领不到，那瓶直接作废。
18. [匠心塔罗](/relics/event/craftsman_heart_tarot_relic)每进一个房间给 1 件你还没有的塔罗遗物，给完整个塔罗池就停。
19. [匠心錾刻锤](/relics/ancient/orobos_craftsman_double)是把已经记下来的伤害直接翻倍，不是把 8000 的门槛砍半；最划算的时机是进度过半时拿，太早翻倍数额小，太晚又会把超出 8000 的部分浪费掉。
20. [龙魂](/cards/quest/dragon_soul)凑满 12 张龙牌后，会移掉牌组里所有龙牌，然后一次性发给你所有还没有的龙遗物——连标题不带“龙”字的[镇世·乔特鲁德](/relics/legendary/world_suppressor_jortrud)也在白名单里。
21. [匠心](/cards/quest/craftsman_heart)的“神秘奖励”就是 8000 金币；它记的是格挡前的总伤害，被格挡吃掉的部分也算，但打死敌人时溢出的部分不算。
22. 拿[魔狮迪露](/monsters/elite/mojj_monster)练功桩刷[匠心](/cards/quest/craftsman_heart)没用：它挨打时伤害被放大 1000 倍，记账时会按同样倍率还原，打 1000 只记 1。
