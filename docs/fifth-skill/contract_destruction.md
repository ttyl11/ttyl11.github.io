# 禁术·契灭

<img src="/images/cards/contract_destruction.png" alt="禁术·契灭" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 第五技能
- **最大PP**: 1
- **能量消耗**: 1
- **类型**: 攻击
- **稀有度**: 罕见
- **目标**: 敌方单体
- **可升级**: 是（1 级）
- **关键词**: [蚀返](/mechanics/shifan.md)

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害 | 消耗PP×3 | 消耗PP×3 |
| 阈值 | 15 | 10 |
| 堕落 | 20 | 20 |
| PP | 1 | 1 |
| 最大PP | 1 | 1 |

## 描述

PP: 1/1 [消耗](/mechanics/exhaust.md)[手牌](/mechanics/hand.md)中所有<span style="color:#d4a017;font-weight:600">PP</span>卡牌，造成消耗PP的<span style="color:#3aa675;font-weight:600">3</span>倍伤害。若消耗PP><span style="color:#3aa675;font-weight:600">15</span>，伤害翻倍且获得<span style="color:#3aa675;font-weight:600">1</span>层[<span style="color:#d4a017;font-weight:600">缓冲</span>](/powers/buffer_power.md)。[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">20</span>。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> [消耗](/mechanics/exhaust.md)[手牌](/mechanics/hand.md)中所有<span style="color:#d4a017;font-weight:600">PP</span>卡牌，造成消耗PP的<span style="color:#3aa675;font-weight:600">3</span>倍伤害。若消耗PP><span style="color:#3aa675;font-weight:600">10</span>，伤害翻倍且获得<span style="color:#3aa675;font-weight:600">1</span>层[<span style="color:#d4a017;font-weight:600">缓冲</span>](/powers/buffer_power.md)。[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">20</span>。

## 小贴士

- **蚀返关键词（消耗后自我复制）**：带有[蚀返](/mechanics/shifan.md)——此牌被[消耗](/mechanics/exhaust.md)时，向[抽牌堆](/mechanics/draw_pile.md)生成一张复制品。配合"打出后被自身消耗"的机制（打出时消耗其他 PP 卡，本牌不消耗自身），真正的消耗场景是被其他效果清进消耗堆——蚀返会让它回抽牌堆继续循环，实现反复爆发。
- **核心机制——PP 转伤害**：消耗[手牌](/mechanics/hand.md)中所有 PP 卡（排除自身），将消耗的 PP 总和 × 3 作为伤害。这是 mod 中少见的"PP 转伤"机制——手牌中 PP 卡越多、PP 越高，伤害越恐怖。
- **PP 已空的卡不参与**：只打包消耗 **PP>0** 的 PP 卡——PP 已经用光的卡不会被误伤（留着手牌里可做它用），同样也不会虚增伤害。想打出高额伤害，出手前别先把手里 PP 卡的 PP 用掉。
- **超过阈值再翻倍（严格大于）**：若消耗的 PP 总和**严格大于**阈值（15/10），伤害**再 ×2（即 6 倍）**，同时获得 1 层[缓冲](/powers/buffer_power.md)。举例：手牌有 3 张 PP 卡，PP 分别为 6+5+5=16 > 15 → 伤害 = 16×3×2 = **96** 点；但恰好等于 15 时不触发翻倍（15×3=45）。升级后阈值降至 10，只需 2-3 张中等 PP 卡（如 4+4+3=11）就能触发翻倍。
- **PP 清零是本场代价**：被消耗的 PP 卡在消耗前 PP 被设为 0，进了[消耗堆](/mechanics/exhaust_pile.md)——本场无法再打出。但并非不可挽回：[逍遥游](/cards/character/carefree_journey.md)从消耗堆捞回时会**恢复 PP 至上限**，核心 PP 卡可满状态归队。所以这张牌是"all-in"式爆发，配合逍遥游就成了"可分期付款"的爆发。
- **伤害为攻击伤害**：造成的伤害属于攻击伤害，受[力量](/powers/strength_power.md)/[易伤](/powers/vulnerable_power.md)加成，可被[格挡](/mechanics/block.md)抵消。配合力量体系或易伤减益可以进一步放大伤害。
- **配合建议**：最佳配合是手牌中积攒多张高 PP 卡（如 PP 7-10 的攻击牌）后一次性打出。配合[永恒](/cards/basic/eternity.md)（恢复所有卡牌 PP 值）可以在用完 PP 后再补回来，形成"契灭爆发→永恒回 PP→继续输出"的循环。缓冲层提供爆发后的生存保障。
- **升级的价值**：阈值从 15 降至 10，更容易触发翻倍和缓冲。10 点 PP 只需 2-3 张中等 PP 卡即可达到，升级后触发率大幅提升。升级优先级高。
- **堕落是向"失控"加码的代价**：无论伤害高低，每次打出固定 +<span style="color:#3aa675;font-weight:600">20</span>[堕落](/powers/fallen_power.md)——堕落每满<span style="color:#3aa675;font-weight:600">100</span>层会触发[魔君接管](/powers/demon_takeover_power.md)自动乱打手牌，配合[蚀返](/mechanics/shifan.md)反复打出时，失控进度也在同步累积。好在这负面"坏得不致命"：有[混沌起源](/relics/starter/chaos_origin.md)回上限兜底，且触发瞬间附送抽<span style="color:#3aa675;font-weight:600">3</span>张牌，被接管的回合也有牌可打。
- **性价比**：1 费的爆发伤害牌，伤害上限极高（理论可达 400+），但代价是消耗手牌所有 PP 卡。适合作为 Boss 战的终结技。

## 相关能力

- [缓冲](/powers/buffer_power.md)（消耗 PP 超过阈值时获得 1 层）
- [堕落](/powers/fallen_power.md)（每打出一次固定 +20 层）

## 相关机制

- [消耗](/mechanics/exhaust.md)（消耗手牌中的 PP 卡）
- [手牌](/mechanics/hand.md)（消耗的目标牌堆）
- [蚀返](/mechanics/shifan.md)（关键词，消耗后向抽牌堆生成复制品）

## 源码

- `SeerContractDestruction.cs`
