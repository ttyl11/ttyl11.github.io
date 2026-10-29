# 毁灭元神

<img src="/images/cards/ruin_soul.png" alt="毁灭元神" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 攻击
- **稀有度**: 普通
- **目标**: 单个敌方
- **可升级**: 是（1 级）
- **关键词**: [毁灭](/mechanics/destruction.md)

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 基础伤害 | 30 | 42 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 对单个敌人造成<span style="color:#d44;font-weight:600">30</span>点伤害，减去当前[抽牌堆](/mechanics/draw_pile.md)和[弃牌堆](/mechanics/discard_pile.md)中的总牌数（最低<span style="color:#d44;font-weight:600">0</span>点）。[毁灭]——打出时将[消耗牌堆](/mechanics/exhaust_pile.md)所有牌移至[销毁牌堆](/mechanics/destroyed_pile.md)。

## 升级后

PP: 5/5 造成<span style="color:#3aa675;font-weight:600">42</span>点伤害，你的<span style="color:#d4a017;font-weight:600">抽牌堆</span>+<span style="color:#d4a017;font-weight:600">弃牌堆</span>每有一张牌，伤害<span style="color:#3aa675;font-weight:600">-1</span>。

## 详细机制

- **牌堆压缩公式**：实际伤害 = Max(0, 30/42 - 抽牌堆牌数 - 弃牌堆牌数)。牌堆越空，伤害越高。当总牌数 ≥ 基础伤害时，伤害降为0。
- **[毁灭](/mechanics/destruction.md)联动的实际影响**：打出时先将[消耗牌堆](/mechanics/exhaust_pile.md)所有牌移至[销毁牌堆](/mechanics/destroyed_pile.md)，这一操作发生在伤害计算之前；但伤害只统计抽牌堆+弃牌堆，**销毁清空的是消耗堆，所以不会改变这张牌的伤害**，只是顺手把消耗堆一并清走。
- **最低伤害保护**：伤害不会变为负数，最低为0。这意味着即使牌堆极空（0张），伤害也不会超过基础值30/42。

## 小贴士

- **压缩牌堆=爆发输出**：这是本卡的核心策略。通过[消耗](/mechanics/exhaust.md)类卡牌把抽牌堆和弃牌堆中的牌数量压到最低，使本卡打出接近满额的30/42点伤害。例如抽牌堆5张+弃牌堆5张 = 30-10=20点伤害；全部清空 = 30点。
- **[毁灭](/mechanics/destruction.md)的双刃剑**：毁灭触发时，消耗牌堆的所有牌会进入销毁牌堆——**本场战斗内无法再使用**，战斗结束随销毁堆清空、牌组原件恢复，不是永久损失。如果本场还需要这些消耗牌，毁灭会让你提前失去它们，建议有意识地管理消耗堆时再配合使用。
- **牌堆数的精确计算**：伤害计算时统计的是当前抽牌堆 + 弃牌堆的总牌数（不含手牌和消耗堆）。手牌中的牌不计入减益。这意味着在手牌较多时本卡伤害更高。
- **升级提升显著**：基础伤害从30→42（+12），牌堆减益公式不变。满压缩时升级后伤害42是普通攻击卡的顶级水准，升级优先级高。
- **伤害与战斗阶段无关，只看手牌与消耗量**：抽牌堆+弃牌堆 = 牌组总数 − 手牌 − 已消耗/销毁的牌，所以**手牌越多、消耗越多，伤害越高**；每打出一张牌只是把手牌移进弃牌堆，减益总数不变。别指望"拖到后期自然变高"，要在手牌厚或牌组被消耗后才打出。
- **与[苍炎日无极](./cang_yan_sun_wu_ji.md)的配合**：苍炎日无极可以从弃牌堆消耗至多 2 张牌，直接减少弃牌堆数量，从而提升毁灭元神的伤害。两者形成先调度后爆发的连锁。
- **风险：牌堆过满时几乎无用**：在战斗初期或牌堆扩充类卡组中，本卡可能长期处于低伤害状态。建议搭配压缩牌堆的手段（消耗类卡牌、抽牌控制）才能发挥真正价值。

## 相关能力

- 无特殊能力

## 相关机制

- [PP系统](/mechanics/pp-system.md)（PP消耗）
- [毁灭](/mechanics/destruction.md)（消耗堆→销毁堆，不影响本牌的伤害计数）
- [消耗](/mechanics/exhaust.md)（操控牌堆数量的手段）
- [抽牌堆](/mechanics/draw_pile.md)（伤害计算公式中的组成部分）
- [弃牌堆](/mechanics/discard_pile.md)（伤害计算公式中的组成部分）
- [销毁牌堆](/mechanics/destroyed_pile.md)（毁灭的目标牌堆）

## 源码

- `SeerRuinSoul.cs`
