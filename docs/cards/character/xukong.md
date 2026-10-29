# 墟埪

<img src="/images/cards/xukong.png" alt="墟埪" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 1
- **能量消耗**: 1
- **类型**: 能力
- **稀有度**: 稀有
- **目标**: 自身
- **关键词**: [湮灭](/mechanics/annihilation.md)
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 能量消耗 | 1 | 0 |
| PP | 1 | 1 |
| 最大PP | 1 | 1 |

## 描述

PP: 1/1 消除所有敌人<span style="color:#d4a017;font-weight:600">全属性加成</span>，施加等量<span style="color:#9b59b6;font-weight:600">邪诲</span>；消除其余<span style="color:#d4a017;font-weight:600">增益</span>，施加等量<span style="color:#9b59b6;font-weight:600">圣诰</span>。

## 升级后

耗能-1。PP: 1/1 消除所有敌人<span style="color:#d4a017;font-weight:600">全属性加成</span>，施加等量<span style="color:#9b59b6;font-weight:600">邪诲</span>；消除其余<span style="color:#d4a017;font-weight:600">增益</span>，施加等量<span style="color:#9b59b6;font-weight:600">圣诰</span>。

## 小贴士

- **转化是双通道清算**：对每个敌人分别结算两笔——力量/防御/命中/速度四项[全属性](/mechanics/all_attributes.md)的**正层数**总和转成等量[邪诲](/powers/evil_teaching_power.md)；其余一切增益（再生、荆棘等）的正层数总和转成等量[圣诰](/powers/holy_edict_power.md)。敌人的增益越多，转化出的惩罚越重——专克把 buff 叠成山的成长型 Boss。
- **清除不看正负，负层命运分两种**：转化统计只算正层数，但清除环节移除的是敌人身上**全部增益类状态、不检查正负**。四项属性的"类属"并不一致——力量的类属恒为增益（含负层数），而防御/命中/速度的类属随层数正负动态切换（负层算减益）。实际后果：先用[二律背反](/cards/character/antinomy.md)把敌人 +5 力量反转成 -5，再打墟埪，-5 力量不在转化统计里却会被一并清掉，敌人力量直接回到 0——等于亲手帮它解除削弱；而负层数的防御/命中/速度属于减益、不会被清除，反转出来的削弱得以保留。想让"反转+清除"都发挥价值，就先打墟埪清正层，再择机反转。
- **湮灭当场结算、配对缺一不可**：转化完成后[湮灭](/mechanics/annihilation.md)立即对每个敌人结算——取其身上邪诲与圣诰的**较小值**为配对数，每对 <span style="color:#3aa675;font-weight:600">8</span> 点非攻击伤害。所以对只有属性堆叠、没有任何其它增益的敌人（纯力量流 Boss 很常见），墟埪只产出邪诲、没有圣诰，湮灭一分伤害都打不出来——转化收益只剩减益本身。想让湮灭引爆，要么挑 buff 种类杂的敌人，要么自己先通过[圣谕形态](/powers/divine_form_power.md)等手段给敌人挂上另一种。
- **邪诲圣诰本体就是持续压制**：转化后的两种减益各自生效——邪诲让持有者每次被攻击时，**攻击者**恢复该次攻击**格挡前总伤害** <span style="color:#3aa675;font-weight:600">20</span>% 的体力（与层数无关，完全格挡也照算）；圣诰让持有者每次受到攻击伤害时 <span style="color:#3aa675;font-weight:600">60</span>% 概率自身陷入 <span style="color:#3aa675;font-weight:600">2</span> 回合[疲惫](/powers/fatigue_power.md)。两者都会在持有者吃到低于层数 <span style="color:#3aa675;font-weight:600">50</span>% 的小额伤害时掉 <span style="color:#3aa675;font-weight:600">1</span> 层——大额攻击不削减层数。
- **湮灭不消耗层数、可以反复引爆**：配对伤害结算后邪诲/圣诰层数原样保留。若手里还有别的湮灭牌（或重复触发手段），同一批层数能再次配对输出——敌人 buff 越厚，这张牌的一次转化就能滚动出越多轮 <span style="color:#3aa675;font-weight:600">8</span> 点×配对数。
- **不再有碎心代价**：本牌已移除[碎心](/mechanics/shattered_heart.md)代价——打出不再失去最大生命值，可放心按场上 buff 情况随时打出清算。
- **能力牌打出即离场**：作为能力牌，打出后不进弃牌堆直接离场——不占回合后的手牌清理，也不会回流循环。
- **性价比**：<span style="color:#3aa675;font-weight:600">1</span> 费（升级 <span style="color:#3aa675;font-weight:600">0</span> 费）换全场增益清算 + 双重惩罚 + 湮灭引爆，且无自损代价，对高 buff 敌人是雪中送炭，对白板敌人则收益微薄——看清敌人 buff 构成再决定打出时机。

## 相关能力

- [邪诲](/powers/evil_teaching_power.md)：减益，持有者被打时攻击者恢复伤害 20% 体力
- [圣诰](/powers/holy_edict_power.md)：减益，持有者被打时 60% 概率自身疲惫 2 回合
- [疲惫](/powers/fatigue_power.md)：圣诰触发的减益

## 相关机制

- [全属性](/mechanics/all_attributes.md)：力量/防御/命中/速度的合称，正层被转为邪诲
- [湮灭](/mechanics/annihilation.md)：邪诲×圣诰配对，每对 8 点非攻击伤害
- [PP 系统](/mechanics/pp-system.md)

## 源码

- `SeerXukong.cs`
- `SeerKeywordEffectManager.cs`