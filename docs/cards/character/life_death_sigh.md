# 一念生死叹

<img src="/images/cards/life_death_sigh.png" alt="一念生死叹" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 1
- **能量消耗**: 1
- **类型**: 攻击
- **稀有度**: 罕见
- **目标**: 单个敌方
- **可升级**: 是（1 级）
- **关键词**: [凝驻](/mechanics/ningzhu.md)

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 基础伤害 | 15 | 25 |
| 生命优势伤害加成 | 50% | 50% |
| 斩杀回复比例 | 30% | 30% |
| PP | 1 | 1 |
| 最大PP | 1 | 1 |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 对单个敌人造成<span style="color:#d44;font-weight:600">15</span>点伤害。若自身[<span style="color:#3aa675;font-weight:600">生命</span>]高于目标，伤害增加<span style="color:#3aa675;font-weight:600">50%</span>。<span style="color:#d4a017;font-weight:600">30%</span>[<span style="color:#d4a017;font-weight:600">饮血</span>]——若此攻击[<span style="color:#d44;font-weight:600">斩杀</span>]目标，回复造成伤害量的<span style="color:#3aa675;font-weight:600">30%</span>生命。<span style="color:#9b59b6;font-weight:600">凝驻</span>。

## 升级后

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 对单个敌人造成<span style="color:#d44;font-weight:600">25</span>点伤害。若自身[<span style="color:#3aa675;font-weight:600">生命</span>]高于目标，伤害增加<span style="color:#3aa675;font-weight:600">50%</span>。<span style="color:#d4a017;font-weight:600">30%</span>[<span style="color:#d4a017;font-weight:600">饮血</span>]——若此攻击[<span style="color:#d44;font-weight:600">斩杀</span>]目标，回复造成伤害量的<span style="color:#3aa675;font-weight:600">30%</span>生命。<span style="color:#9b59b6;font-weight:600">凝驻</span>。

## 详细机制

- **生命差增伤条件**：仅当 `self.CurrentHp > target.CurrentHp` 时触发1.5倍伤害。满血对满血也触发（15×1.5=22.5）。若自身HP ≤ 目标HP，则不触发加成。
- **[凝驻](/mechanics/ningzhu.md)**：本卡带有[凝驻](/mechanics/ningzhu.md)关键词，使用后停留在[弃牌堆](/mechanics/discard_pile.md)，不会在战斗结束时洗回[抽牌堆](/mechanics/draw_pile.md)。每场战斗仅能使用一次，但下场战斗恢复后可再次使用。
- **[饮血](/mechanics/vampiric.md)斩杀回复**：仅在目标被此卡**直接击杀**时触发回复（`WasTargetKilled == true`）。若目标有复活能力未被斩杀，不触发回复。回复量 = 实际造成伤害 × 30%。

## 小贴士

- **生命优势即伤害优势**：1.5倍伤害在自身HP > 目标HP时触发——这意味着在持久战中，只要你比目标血多，这张卡就是1.5倍输出。满血对残血敌人 = 15×1.5=22.5点伤害（升级后25×1.5=37.5）。
- **[饮血](/mechanics/vampiric.md)斩杀回复的稳定收益**：30%的斩杀回复量是稳定的。基础伤害15斩杀敌人时回复4.5≈4点生命；升级后25斩杀时回复7.5≈7点生命。在高伤害敌人身上斩杀回复更多，适合用来维持续航。
- **与[一念去留断](./go_stay_break.md)的对比**：
  - 一念生死叹：自身HP > 目标HP时增伤 + 斩杀回复
  - 一念去留断：自身HP < 目标HP时增伤 + 未斩杀贴[曝](/powers/expose_power.md)
  - 两者是互补关系——根据当前血量状态选择使用，形成"高HP爆发/低HP压制"的双生体系。
- **[凝驻](/mechanics/ningzhu.md)的管理**：使用后牌留在弃牌堆，下场战斗恢复。1PP意味着每场战斗只能用一次，适合"关键目标斩杀"的定位。不要试图频繁使用——把它留给血量优势明显且有斩杀把握的目标。
- **升级收益分析**：基础伤害从15→25（+10），斩杀回复也随之提升（30%×25=7.5 vs 30%×15=4.5）。升级同时提升伤害和续航，优先级高。
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
