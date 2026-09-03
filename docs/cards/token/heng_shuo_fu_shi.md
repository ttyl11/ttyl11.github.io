***

title: 横槊赋诗
tags: \["先古", "卡牌", "Token"]
----------------------------

# 横槊赋诗

<img src="/images/cards/seer_heng_shuo_fu_shi.png" alt="横槊赋诗" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

* **分类**: 衍生牌

* **最大PP**: 1

* **能量消耗**: 0

* **类型**: 攻击

* **稀有度**: Token

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

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 随机选取抽牌堆中 <span style="color:#3aa675;font-weight:600">1</span> 张无五音的牌，赋予其随机五音效果。对目标敌人造成等于自身上一回合受到的所有伤害。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 随机选取抽牌堆中 <span style="color:#3aa675;font-weight:600">2</span> 张无五音的牌，赋予其\[临时]五音效果，战斗结束清除。对目标敌人造成等于自身上一回合受到的所有伤害。

## 小贴士

* **伤害计算**：横槊赋诗造成的伤害值等于本角色上一回合受到的所有伤害。若上一回合没有受到任何伤害（例如全程格挡或无敌人攻击），则伤害下限为 <span style="color:#3aa675;font-weight:600">1</span>。

* **五音系统——五种附魔随机一种**：从五音中随机挑选一种附魔到抽牌堆中的一张无附魔牌上，每种附魔效果不同：

  * **仐**：打出后，自身先制+1。

  * **囙**：打出后，自身所有PP恢复1点。

  * **乂**：打出后，解除自身所有异常状态。

  * **册**：打出后，减少对手 <span style="color:#3aa675;font-weight:600">10%</span> 当前生命，自身恢复等量生命。

  * **卩**：打出后，若以此牌击败对手，自身最大生命-<span style="color:#3aa675;font-weight:600">20</span>，造成的攻击伤害永久+<span style="color:#3aa675;font-weight:600">10%</span>，受到的伤害永久-<span style="color:#3aa675;font-weight:600">10%</span>（可叠加）。

* **零费用且受PP限制**：此牌费用为 <span style="color:#3aa675;font-weight:600">0</span>，PP 消耗 <span style="color:#3aa675;font-weight:600">1</span> 点。本角色拥有 1 点 PP 时可打出，打出后 PP 清零，本战斗内无法再次打出。

* **选牌范围限制**：横槊赋诗只能从**抽牌堆**中随机选牌（手牌、弃牌堆、销毁牌堆中的牌不会被选中），且被选中的牌必须**当前没有附魔**才能被赋予五音。如果抽牌堆中所有牌都有附魔，则不会赋予任何五音。

* **升级版的双牌+临时五音**：升级后从选 <span style="color:#3aa675;font-weight:600">1</span> 张变为选 <span style="color:#3aa675;font-weight:600">2</span> 张，但赋予的是**临时五音**——战斗结束后这些附魔会被自动清除。临时五音的价值在于本战斗内可以多次触发，配合鬼焰神君·陆逊遗物的连营循环可以实现反复使用。

* **与魏武帝·曹操遗物的联动**：此牌由魏武帝·曹操遗物的效果生成（受到未格挡伤害后加入手牌）。曹操遗物的睡眠效果可以让横槊赋诗在睡眠状态下打出两次，每次都会随机赋予抽牌堆中的一张牌五音，实现一回合双倍赋魔。

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

