# 归途

<img src="/images/cards/return_path.png" alt="归途" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 攻击
- **稀有度**: 普通
- **目标**: 所有敌方
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 格挡 | 8 | 8 |
| 伤害百分比 | 100 | 150 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 获得<span style="color:#3aa675;font-weight:600">8</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)，移除所有生物的[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)与[<span style="color:#d4a017;font-weight:600">全属性</span>](/mechanics/all_attributes.md)，对所有敌人造成总和<span style="color:#3aa675;font-weight:600">100</span>%的伤害。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 获得<span style="color:#3aa675;font-weight:600">8</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)，移除所有生物的[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)与[<span style="color:#d4a017;font-weight:600">全属性</span>](/mechanics/all_attributes.md)，对所有敌人造成总和<span style="color:#3aa675;font-weight:600">150</span>%的伤害。

## 小贴士

- **伤害基于全场格挡+属性总和——雪球型全体攻击**：伤害 = (自己、队友与所有敌人的格挡值 + 这些生物的[全属性](/mechanics/all_attributes.md)层数绝对值) × 伤害百分比。场上格挡和属性越多，伤害越高——是对格挡流/力量流敌人的反制核弹。**队友的格挡与属性同样会被移除并计入总和**，双人模式需提前沟通。
- **双刃剑——移除自身格挡和属性换伤害**：移除的是自己、队友和所有敌人的格挡与属性，包括你自己的格挡、[力量](/powers/strength_power.md)、[命中](/powers/accuracy_power.md)、[速度](/powers/speed_power.md)、[防御](/powers/defense_power.md)。**别在自己叠了大量格挡/属性时打**，否则自毁增益——这张牌适合在"自己没什么属性积累，敌人叠了一堆"时反制。
- **移除后立即造成伤害——每个敌人各承受完整数值**：伤害在移除所有格挡之后结算，敌人当前没有格挡，所以这部分伤害实际不可格挡（但仍可能被闪避）。**伤害不是分摊**：每个敌人各自承受一次 (总和 × 百分比) 的数值。
- **不吃力量，但仍吃其它攻击增伤**：力量在伤害结算前已被移除，所以基础值就是 (格挡+属性总和) × 百分比，不会被你的力量层数放大。但它仍是攻击伤害，可被暴击、[星璨舞台](/powers/star_stage_power.md)等攻击增伤放大。
- **8 格挡先计入伤害再被清空——不是保底防御**：打出时先获得 <span style="color:#3aa675;font-weight:600">8</span> 点格挡，但紧接着就把自身全部格挡（含这 8 点）计入总和并清空。所以打出后你是 <span style="color:#3aa675;font-weight:600">0</span> 格挡；这 8 点实际是 +<span style="color:#3aa675;font-weight:600">8</span> 基础伤害（升级 150% 时相当于 +<span style="color:#3aa675;font-weight:600">12</span>）。
- **1 费可连击**：<span style="color:#3aa675;font-weight:600">1</span> 费不重，可以配合其它牌连击。但要注意它移除自身增益的代价——用自身属性积累换伤害。
- **升级 100%→150%——伤害倍率提升 50%**：升级后伤害百分比从 <span style="color:#3aa675;font-weight:600">100</span>% 提升到 <span style="color:#3aa675;font-weight:600">150</span>%，相当于同一场面下伤害 ×1.5。对于雪球型伤害来说，50% 倍率提升是显著增幅。
- **性价比**：<span style="color:#3aa675;font-weight:600">1</span> 费换全场格挡+属性总和的伤害（每个敌人各吃一份）；起手获得的 8 点格挡会先计入总和再被清空，相当于至少 +8 基础伤害（升级 150% 时 +12）。敌方属性积累多时性价比极高；代价是自身与队友的属性也被清空，适合反制局面而非自家叠属性的局面。

## 相关机制

- [格挡](/mechanics/block.md)：移除并计入伤害总和
- [全属性](/mechanics/all_attributes.md)：移除力量/命中/速度/防御四种属性并计入伤害总和
- [力量](/powers/strength_power.md)、[命中](/powers/accuracy_power.md)、[速度](/powers/speed_power.md)、[防御](/powers/defense_power.md)：被移除的四种属性能力

## 源码

- `SeerReturnPath.cs`
