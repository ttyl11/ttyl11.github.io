# 一念去留断

<img src="/images/cards/go_stay_break.png" alt="一念去留断" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 1
- **能量消耗**: 1
- **类型**: 攻击
- **稀有度**: 罕见
- **目标**: 单个敌方
- **可升级**: 是（1 级）
- **关键词**: [凝驻](/mechanics/ningzhu.md)（每场战斗限用一次，下场战斗自动重置）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 基础伤害 | 15 | 25 |
| 生命值条件伤害加成 | 50% | 50% |
| PP | 1 | 1 |
| 最大PP | 1 | 1 |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 对单个敌人造成<span style="color:#d44;font-weight:600">15</span>点伤害。若自身[<span style="color:#3aa675;font-weight:600">生命</span>]低于目标时伤害+<span style="color:#3aa675;font-weight:600">50%</span>。若目标未死，对其施加[<span style="color:#d44;font-weight:600">曝</span>](/powers/expose_power.md)。[凝驻](/mechanics/ningzhu.md)。

## 升级后

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 对单个敌人造成<span style="color:#d44;font-weight:600">25</span>点伤害。若自身[<span style="color:#3aa675;font-weight:600">生命</span>]低于目标时伤害+<span style="color:#3aa675;font-weight:600">50%</span>。若目标未死，对其施加[<span style="color:#d44;font-weight:600">曝</span>](/powers/expose_power.md)。[凝驻](/mechanics/ningzhu.md)。

## 工作机制

- **生命差增伤**：`self.CurrentHp < target.CurrentHp` 时，伤害乘 1.5。升级后残血增伤从 22.5 提升至 37.5。
- **曝状态施加**：伤害结算后，若 `target.CurrentHp > 0`，对其施加 1 层 [曝](/powers/expose_power.md)，降低其幻扰成功率 50%，且该敌死亡后直接[消逝](/mechanics/vanish.md)（不触发复活/亡语）。
- **凝驻行为**：战斗结束后此牌留在[弃牌堆](/mechanics/discard_pile.md)中，不参与洗入抽牌堆。需主动回收或消除才能重新进入牌组循环。

## 小贴士

- **以命换伤的博弈**：自身 HP 低于目标时伤害 +50%（15×1.5=22.5，升级后 37.5）。这是典型的"残血爆发"设计——主动压低血量触发增伤，适合配合回复手段或高生存能力使用。
- **曝状态的连锁价值**：若目标未死，自动施加 1 层 [曝](/powers/expose_power.md)。此减益降低敌人幻扰成功率 50%，且目标死亡后直接[消逝](/mechanics/vanish.md)，彻底阻断其复活或亡语触发。对依赖幻扰机制或拥有复活能力的敌人尤为致命。
- **凝驻的经济性**：1 PP 冷却，[凝驻](/mechanics/ningzhu.md)使此牌每场战斗限用一次（首次使用后留在弃牌堆，同场后续洗牌不再洗回）。适合用于关键回合的斩杀或贴曝，而非反复使用。
- **与一念生死叹的区别**：两者均为生命差增伤的[凝驻](/mechanics/ningzhu.md)攻击牌，但方向相反——[一念生死叹](./life_death_sigh.md)在自身 HP 高于目标时增伤并触发[饮血](/mechanics/vampiric.md)回复，一念去留断则在自身 HP 低于目标时增伤并施加[曝](/powers/expose_power.md)。根据当前血量态势选择使用：高血时用生死叹（续航），低血时用过留断（爆发+控制）。
- **升级收益**：基础伤害从 15 提升至 25，残血时伤害可达 37.5，配合[曝](/powers/expose_power.md)的持续压制效果极强。
- **性价比**：1 费罕见合理——以命换伤的机制在残血时爆发极高，配合曝的斩杀保障让这张卡兼具伤害与控制双重价值。凝驻的限用一次特性意味着它更适合作为斩杀手段而非日常输出，适合配合高伤牌或Boss战使用。

## 相关能力

- [曝](/powers/expose_power.md)（对未死目标施加的减益能力）

## 相关机制

- [PP系统](/mechanics/pp-system.md)（PP 消耗与冷却）
- [凝驻](/mechanics/ningzhu.md)（卡牌停留在弃牌堆的机制）
- [消逝](/mechanics/vanish.md)（目标死亡后直接移除，不触发亡语）
- [弃牌堆](/mechanics/discard_pile.md)（凝驻卡牌的存放位置）

## 源码

- `SeerGoStayBreak.cs`
