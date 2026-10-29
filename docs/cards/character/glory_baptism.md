# 华光洗礼

<img src="/images/cards/glory_baptism.png" alt="华光洗礼" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 攻击
- **稀有度**: 普通
- **目标**: 敌方单体
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 基础伤害 | 8 | 12 |
| 伤害成长 | 本场每洗牌一次 ×2 | 本场每洗牌一次 ×2 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> [<span style="color:#d44;font-weight:600">消强</span>](/mechanics/xiao_qiang.md)。造成<span style="color:#3aa675;font-weight:600">8</span>点伤害。本场战斗中每洗牌一次，伤害翻倍。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> [<span style="color:#d44;font-weight:600">消强</span>](/mechanics/xiao_qiang.md)。造成<span style="color:#3aa675;font-weight:600">12</span>点伤害。本场战斗中每洗牌一次，伤害翻倍。

## 详细机制

- **结算顺序**：[消强](/mechanics/xiao_qiang.md)目标 → 造成伤害（伤害 = 基础值 × 2<sup>本场洗牌次数</sup>）。
- **[消强](/mechanics/xiao_qiang.md)只作用于本次目标**：移除目标[力量](/powers/strength_power.md) / [防御](/powers/defense_power.md) / [命中](/powers/accuracy_power.md) / [速度](/powers/speed_power.md) 中的**正值**提升；负值不受影响。
- **洗牌计数口径**：只统计**自己**发起的洗牌（[弃牌堆](/mechanics/discard_pile.md)洗回[抽牌堆](/mechanics/draw_pile.md)时 +1）；战斗开局构建抽牌堆不算，**队友的洗牌也不计**。
- **每场战斗独立计数**：计数在每场战斗开始时从 0 重新开始，不跨战斗保留。
- **成长曲线**：n 次洗牌后伤害 = 基础值 × 2<sup>n</sup>——8 → 16 → 32 → 64 → 128……洗 4 次就到 <span style="color:#3aa675;font-weight:600">128</span> 点。
- **伤害为攻击伤害**：吃力量 / 易伤 / [暴击](/mechanics/critical-strike.md)加成，可被[格挡](/mechanics/block.md)抵消。
- **升级只提升基础值**：8 → 12（+4），翻倍规则不变。

## 小贴士

- **唯一「随洗牌成长」的牌**：长线战斗里它越到后面越痛，但面板上看不到当前洗牌数——打出时按当时的洗牌次数结算。
- **快速堆洗牌靠抽牌流**：牌组抽得快、弃牌多，洗牌次数就上得快；配合抽牌 / 弃牌循环的构筑，几次洗牌之后它就是斩杀牌。
- **消强是先手拆 buff**：面对叠了力量 / 防御的敌人，先把这套正的属性拆掉再打伤害，等于顺手解除对方的爆发。
- **前期它只是小攻击**：战斗刚开始（0~1 次洗牌）时就是 8（升级 12）点的 1 费攻击牌，不要指望它一上来就终结。
- **性价比**：1 费 8（升级 12）点，看似偏低；但每洗一次翻一倍，洗牌流构筑里能轻松打到几百点，是「越拖越强」的典型。适合抽牌快、弃牌多的牌组；站桩不洗牌的卡组则接近普通小攻击牌。

## 相关能力

- [力量](/powers/strength_power.md) / [防御](/powers/defense_power.md) / [命中](/powers/accuracy_power.md) / [速度](/powers/speed_power.md)（消强移除目标的正值）

## 相关机制

- [消强](/mechanics/xiao_qiang.md)（移除目标四维正值提升）
- [抽牌堆](/mechanics/draw_pile.md) / [弃牌堆](/mechanics/discard_pile.md)（洗牌时计数 +1）
- [格挡](/mechanics/block.md)（伤害为攻击伤害，可被格挡抵消）
- [PP系统](/mechanics/pp-system.md)（每次打出消耗 1 点 PP）

## 源码

- `SeerGloryBaptism.cs`