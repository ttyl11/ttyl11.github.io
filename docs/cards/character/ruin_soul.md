# 毁灭元神

<img src="/images/cards/ruin_soul.png" alt="毁灭元神" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
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

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 对单个敌人造成<span style="color:#d44;font-weight:600">42</span>点伤害，减去当前[抽牌堆](/mechanics/draw_pile.md)和[弃牌堆](/mechanics/discard_pile.md)中的总牌数（最低<span style="color:#d44;font-weight:600">0</span>点）。[毁灭]——打出时将[消耗牌堆](/mechanics/exhaust_pile.md)所有牌移至[销毁牌堆](/mechanics/destroyed_pile.md)。

## 详细机制

- **牌堆压缩公式**：实际伤害 = Max(0, 30/42 - 抽牌堆牌数 - 弃牌堆牌数)。牌堆越空，伤害越高。当总牌数 ≥ 基础伤害时，伤害降为0。
- **[毁灭](/mechanics/destruction.md)联动**：打出时先将[消耗牌堆](/mechanics/exhaust_pile.md)所有牌移至[销毁牌堆](/mechanics/destroyed_pile.md)，这一操作发生在伤害计算之前。因此毁灭触发的牌堆变化会影响后续伤害计算（若你使用消耗牌来操控牌堆计数，毁灭会在伤害前清空消耗堆）。
- **最低伤害保护**：伤害不会变为负数，最低为0。这意味着即使牌堆极空（0张），伤害也不会超过基础值30/42。

## 小贴士

- **压缩牌堆=爆发输出**：这是本卡的核心策略。通过[消耗](/mechanics/exhaust.md)类卡牌或[毁灭](/mechanics/destruction.md)触发，将抽牌堆和弃牌堆中的牌数量压到最低，使本卡打出接近满额的30/42点伤害。例如抽牌堆5张+弃牌堆5张 = 30-10=20点伤害；全部清空 = 30点。
- **[毁灭](/mechanics/destruction.md)的双刃剑**：毁灭触发时，消耗牌堆的所有牌会进入销毁牌堆（本局游戏内永久消失，战斗结束后清空销毁堆）。如果消耗堆中有你需要的牌，毁灭会让你失去它们。建议在有意识地管理消耗堆时再配合使用。
- **牌堆数的精确计算**：伤害计算时统计的是当前抽牌堆 + 弃牌堆的总牌数（不含手牌和消耗堆）。手牌中的牌不计入减益。这意味着在手牌较多时本卡伤害更高。
- **升级提升显著**：基础伤害从30→42（+12），牌堆减益公式不变。满压缩时升级后伤害42是普通攻击卡的顶级水准，升级优先级高。
- **前期低伤后期高伤的曲线**：战斗初期牌堆牌数多（通常20-30张），本卡伤害可能只有个位数甚至0。随着战斗进行，牌被抽走、打出、进入弃牌堆，牌堆总数变化。建议在牌堆较空的中后期使用本卡。
- **与[苍炎日无极](./cang_yan_sun_wu_ji.md)的配合**：苍炎日无极可以将弃牌堆的牌消耗掉，减少弃牌堆数量，从而提升毁灭元神的伤害。两者形成先调度后爆发的连锁。
- **风险：牌堆过满时几乎无用**：在战斗初期或牌堆扩充类卡组中，本卡可能长期处于低伤害状态。建议搭配压缩牌堆的手段（消耗类卡牌、抽牌控制）才能发挥真正价值。

## 相关能力

- 无特殊能力

## 相关机制

- [PP系统](/mechanics/pp-system.md)（PP消耗）
- [毁灭](/mechanics/destruction.md)（消耗堆→销毁堆，影响牌堆计数）
- [消耗](/mechanics/exhaust.md)（操控牌堆数量的手段）
- [抽牌堆](/mechanics/draw_pile.md)（伤害计算公式中的组成部分）
- [弃牌堆](/mechanics/discard_pile.md)（伤害计算公式中的组成部分）
- [销毁牌堆](/mechanics/destroyed_pile.md)（毁灭的目标牌堆）

## 源码

- `SeerRuinSoul.cs`
