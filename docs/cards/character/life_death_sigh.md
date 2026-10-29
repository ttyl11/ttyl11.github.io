# 一念生死叹

<img src="/images/cards/life_death_sigh.png" alt="一念生死叹" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 攻击
- **稀有度**: 罕见
- **目标**: 敌方单体
- **可升级**: 是（1 级）
- **关键词**: [凝驻](/mechanics/ningzhu.md)

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 基础伤害 | 20 | 30 |
| 生命优势伤害加成 | 50% | 50% |
| 斩杀回复比例 | 30% | 30% |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: 5/5 造成<span style="color:#3aa675;font-weight:600">20</span>点伤害。若自身生命高于敌人，伤害<span style="color:#3aa675;font-weight:600">+50%</span>。击杀则恢复造成伤害<span style="color:#3aa675;font-weight:600">30</span>%的生命。

## 升级后

PP: 5/5 造成<span style="color:#3aa675;font-weight:600">30</span>点伤害，若自身生命高于敌人则伤害<span style="color:#3aa675;font-weight:600">+50%</span>。击败敌人则恢复<span style="color:#3aa675;font-weight:600">30</span>%伤害的生命。

## 详细机制

- **生命差增伤条件**：仅当自身当前生命**严格高于**目标当前生命时触发 1.5 倍伤害。满血对满血不触发；只有目标血量更低时才有 20×1.5=30。若自身生命不高于目标，则不触发加成。
- **伤害类型**：<span style="color:#3aa675;font-weight:600">20</span>/<span style="color:#3aa675;font-weight:600">30</span> 点是普通攻击伤害，吃[力量](/powers/strength_power.md)、目标[易伤](/powers/vulnerable_power.md)与暴击加成，也会被格挡。
- **[凝驻](/mechanics/ningzhu.md)**：本卡带有凝驻关键词，打出后停留在[弃牌堆](/mechanics/discard_pile.md)，不会随洗牌回到[抽牌堆](/mechanics/draw_pile.md)，需要靠回收手段才能再次上手。
- **[饮血](/mechanics/vampiric.md)斩杀回复**：只要这一击把目标打到 <span style="color:#3aa675;font-weight:600">0</span> 血就触发，**即使目标随后被复活或免死救回，仍算击杀**（击杀判定发生在复活结算之前）。回复量 = 这次攻击的**总伤害**（含被格挡的部分）× <span style="color:#3aa675;font-weight:600">30%</span>。

## 小贴士

- **生命优势即伤害优势**：1.5倍伤害在自身生命**高于**目标时触发——这意味着在持久战中，只要你比目标血多，这张卡就是1.5倍输出。满血对残血敌人 = 20×1.5=30点伤害（升级后30×1.5=45）。
- **[饮血](/mechanics/vampiric.md)斩杀回复的稳定收益**：30% 的斩杀回复按**总伤害**计算。目标没有格挡时，基础 20 伤斩杀回复 6 点，升级 30 伤回复 9 点；如果目标带着格挡被击杀，被格挡的那部分也计入总伤害，回复更高。适合用来维持续航。
- **与[一念去留断](./go_stay_break.md)的对比**：
  - 一念生死叹：自身生命**高于**目标时增伤 + 斩杀回复
  - 一念去留断：自身生命**低于**目标时增伤 + 未斩杀贴[曝](/powers/expose_power.md)
  - 两者是互补关系——根据当前血量状态选择使用，形成"高HP爆发/低HP压制"的双生体系。
- **[凝驻](/mechanics/ningzhu.md)的管理**：凝驻让此牌无法从[弃牌堆](/mechanics/discard_pile.md)洗入[抽牌堆](/mechanics/draw_pile.md)，打出后停留在弃牌堆，需要靠回收/洗牌类手段才能再次进入抽牌循环。PP 上限 5，配合凝驻的限用特性，适合"关键目标斩杀"的定位。不要指望它反复上手——把它留给血量优势明显且有斩杀把握的目标。
- **升级收益分析**：基础伤害从20→30（+10），斩杀回复也随之提升（30%×30=9 vs 30%×20=6）。升级同时提升伤害和续航，优先级高。
- **最佳使用时机**：①自身满血/高HP vs 低HP敌人时爆发；②有斩杀把握时触发[饮血](/mechanics/vampiric.md)回复；③配合[创世之神谕](./genesis_oracle.md)形成斩杀连锁（此卡先削弱或斩杀，为创世之神谕创造斩杀条件）。

## 相关能力

- 无特殊能力

## 相关机制

- [PP系统](/mechanics/pp-system.md)（PP消耗）
- [凝驻](/mechanics/ningzhu.md)（使用后留在弃牌堆）
- [饮血](/mechanics/vampiric.md)（斩杀后回复生命）
- [斩杀](/mechanics/fatal.md)（触发饮血和创世之神谕的条件）
- [弃牌堆](/mechanics/discard_pile.md)（凝驻牌的停留位置）

## 源码

- `SeerLifeDeathSigh.cs`
