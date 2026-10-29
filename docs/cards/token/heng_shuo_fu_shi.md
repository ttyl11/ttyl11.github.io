# 横槊赋诗

<img src="/images/cards/seer_heng_shuo_fu_shi.png" alt="横槊赋诗" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

* **分类**: 衍生牌

* **最大PP**: 1

* **能量消耗**: 0

* **类型**: 攻击

* **稀有度**: 衍生

* **目标**: 任意敌方

* **可升级**: 是（1 级）

### 数值参数

| 参数   | 数值 | 升级后 |
| ---- | -- | --- |
| PP   | 1  | 1   |
| 最大PP | 1  | 1   |
| 选牌数量 | 1  | 2   |
| 临时五音 | —  | 是   |

## 描述

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 随机选取抽牌堆中 <span style="color:#3aa675;font-weight:600">1</span> 张牌，赋予随机五音附魔。造成等于自身上一回合受到的未格挡伤害。

## 升级后

PP: 1/1 随机选取抽牌堆中2张牌，赋予随机五音附魔。造成等于自身上一回合受到的未格挡伤害

## 小贴士

* **伤害计算**：横槊赋诗造成的伤害值等于本角色上一回合受到的未格挡伤害（即扣除格挡后的实际伤害）。这里的“上一回合”指你上一个玩家回合及其后的敌方回合；若这期间没有受到任何未格挡伤害（例如全程格挡或无敌人攻击），则伤害为 <span style="color:#3aa675;font-weight:600">1</span>。

* **结算顺序**：先对目标结算伤害，再从抽牌堆赋五音。即使这一击把目标打死，赋五音仍会照常进行。伤害按普通攻击结算，会照常受力量、易伤等增减伤影响；牌面写的“等于未格挡伤害”是基础值。

* **五音系统——五种附魔随机一种**：从五音中随机挑选一种，附到抽牌堆里一张未附魔的牌上（仅限攻击/技能/能力牌），每种附魔效果不同：

  * **仐**：打出后，自身先制+1。

  * **囙**：打出后，手牌、抽牌堆、弃牌堆中所有 PP 牌各恢复 <span style="color:#3aa675;font-weight:600">1</span> 点 PP（不超过各自上限）。正在打出的这张不在此列——它此时已离开手牌。

  * **乂**：打出后，解除自身所有异常状态。

  * **册**：打出后，对目标造成其当前生命 <span style="color:#3aa675;font-weight:600">10%</span> 的固定伤害（向下取整，可被格挡），自身恢复实际造成的伤害量。无目标牌会随机挑一个存活敌人。

  * **卩**：打出后，若以此牌击败对手，自身最大生命-<span style="color:#3aa675;font-weight:600">20</span>，造成的攻击伤害永久+<span style="color:#3aa675;font-weight:600">10%</span>，受到的伤害永久-<span style="color:#3aa675;font-weight:600">10%</span>（可叠加）。最大生命上限减少时，当前生命超出新上限的部分会一并失去；只判定这张牌指定的目标，群体牌/无目标牌没有指定目标，基本无法触发。

* **零费用且受PP限制**：此牌费用为 <span style="color:#3aa675;font-weight:600">0</span>，自带 <span style="color:#3aa675;font-weight:600">1</span> 点 PP。打出后 PP 归零，通常本战斗内无法再次打出（PP 恢复类效果、允许 0 PP 打出的遗物/能力除外）。

* **选牌范围限制**：横槊赋诗只能从**抽牌堆**中随机选牌（手牌、弃牌堆、消耗堆中的牌不会被选中），且被选中的牌必须**当前没有附魔**、类型为攻击/技能/能力。如果抽牌堆里没有可附魔的牌（例如全是已附魔牌或状态/诅咒牌），则不会赋予任何五音。

* **升级版的双牌+临时五音**：升级后从选 <span style="color:#3aa675;font-weight:600">1</span> 张变为选 <span style="color:#3aa675;font-weight:600">2</span> 张，并且赋予的是**临时五音**——卡面未标出“临时”，但战斗结束时这些附魔会被清除。两张分别从候选里抽取，不会赋在同一张上。临时五音在本场战斗内仍可反复触发，配合鬼焰神君·陆逊遗物的连营循环可以反复使用。

* **与魏武帝·曹操遗物的联动**：此牌由魏武帝·曹操遗物的效果生成（受到未格挡伤害后加入**手牌顶**）。曹操遗物的睡眠效果可以让横槊赋诗在睡眠状态下打出两次，每次都会随机赋予抽牌堆中的一张牌五音，实现一回合双倍赋魔。

* **目标选择逻辑**：优先使用玩家在本牌上选择的目标，若无有效目标则回退到第一个存活的敌方单位。

## 相关卡牌

* [魏武帝·曹操](/relics/ancient/wei_di_wu_cao_cao.md)（此牌由其遗物效果生成）

* [鬼焰神君·陆逊](/relics/ancient/gui_yan_shen_jun_lu_xun.md)（持有本遗物时，临时五音可随连营循环反复触发）

## 相关机制

* [五音](/mechanics/enchantment.md)（仐、囙、乂、册、卩五种附魔系统）

* [PP](/mechanics/pp-system.md)（本牌消耗的 PP 资源）

* [抽牌堆](/mechanics/draw_pile.md)（横槊赋诗选牌的来源）

* [睡眠](/powers/sleep_power.md)（与魏武帝·曹操遗物的联动机制）

## 源码

* `SeerHengShuoFuShi.cs`

* `SeerFiveToneUmbrella.cs`（仐）

* `SeerFiveToneReturn.cs`（囙）

* `SeerFiveToneCross.cs`（乂）

* `SeerFiveToneBook.cs`（册）

* `SeerFiveToneSeal.cs`（卩）

* `SeerHengShuoFuShiTempFiveTonePower.cs`（临时五音，升级版）

