# 饮血屠龙

<img src="/images/cards/drink_blood_dragon_slaying.png" alt="饮血屠龙" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 5
- **能量消耗**: 0
- **类型**: 技能
- **稀有度**: 普通
- **目标**: 无（打出时从手牌选择卡牌）
- **可升级**: 是（1 级）
- **关键词**: [溯引](/mechanics/suyin.md)

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 堕落 | 19 | 19 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: 5/5 <span style="color:#d44;font-weight:600">溯引</span>：随机一名敌人变为<span style="color:#d4a017;font-weight:600">龙属性</span>。从手牌选择最多<span style="color:#3aa675;font-weight:600">2</span>张<span style="color:#d4a017;font-weight:600">攻击牌</span>，其获得<span style="color:#d4a017;font-weight:600">饮血</span>。<span style="color:#d44;font-weight:600">堕落</span><span style="color:#3aa675;font-weight:600">19</span>。

## 升级后

PP: 5/5 <span style="color:#d44;font-weight:600">溯引</span>：随机一名敌人变为<span style="color:#d4a017;font-weight:600">龙属性</span>。 <span style="color:#d4a017;font-weight:600">固有</span>。从手牌选择最多<span style="color:#3aa675;font-weight:600">2</span>张<span style="color:#d4a017;font-weight:600">攻击牌</span>，其获得<span style="color:#d4a017;font-weight:600">饮血</span>。<span style="color:#d44;font-weight:600">堕落</span><span style="color:#3aa675;font-weight:600">19</span>。

## 小贴士

- **核心定位**：给手牌中的攻击牌贴上[饮血](/mechanics/vampiric.md)——该牌造成伤害后回复该次伤害 20% 的生命。打出时弹出选牌框，挑最多 2 张攻击牌（可少选、可不选），只有被贴上的那张牌打出的攻击才回血，是标准的"回血引擎"来源。
- **选择要点**：优先贴给「单段高攻」或你本回合就会打出的攻击牌。饮血按每次伤害事件单独结算 20%，不足 1 点不回血——多段攻击的每一段都会被取整损耗一次，段数越多实际回血越少。
- **只在本场战斗有效**：贴的是战斗中的牌（战斗开始时牌组会被克隆成战斗牌），战斗结束后牌组里的原牌不会保留饮血。
- **溯引**：抽到此牌时，随机一名敌人变为[龙属性](/powers/dragon_power.md)——免费给某个敌人贴龙属性，用于配合龙属性体系的克制（龙打龙 ×1.5）与龙牌联动。抽到即触发，无需打出。
- **如何尽量多触发溯引**：溯引是「抽到此牌时」触发，因此抽牌/洗牌让它尽快回手更有价值；配合弃牌重抽类效果能重复触发龙化。
- **0 费不等于免费**：0 费打出，不花能量，但仍消耗 <span style="color:#3aa675;font-weight:600">1</span> 点 PP；PP 5 = 单场最多打 5 次。
- **结算顺序**：先加 <span style="color:#3aa675;font-weight:600">19</span> 层堕落，再弹出手牌选牌框——即使一张都不选直接跳过，堕落也照扣。
- **堕落是附带的失控毒素**：每次打出固定 +<span style="color:#3aa675;font-weight:600">19</span>[堕落](/powers/fallen_power.md)，PP<span style="color:#3aa675;font-weight:600">5</span> 打满就是 <span style="color:#3aa675;font-weight:600">95</span> 层——堕落是负面机制，每跨过 100 层（100/200/…）都会被[魔君接管](/powers/demon_takeover_power.md)强制乱打，同时获得混沌化身并抽 1 张牌。回血引擎打五轮差不多就要"接管"一次，属于回血途中的隐性失控风险，需与其他堕落源一起规划。
- **性价比**：0 费贴最多 2 张饮血攻击牌 + 抽到免费龙化一个敌人，PP 5 单场可打 5 次，回血引擎稳定。作为中前期的回血+龙化启动牌，性价比合理。

## 相关能力

- [龙属性](/powers/dragon_power.md)（溯引将随机敌人变为龙属性）
- [饮血](/mechanics/vampiric.md)（关键词，赋予手牌中的攻击牌；此牌自身不携带）

## 相关机制

- [溯引](/mechanics/suyin.md)（抽到时触发，无需打出）
- [固有](/mechanics/innate.md)（升级后添加，战斗开始时在手牌）
- 手牌选择（打出时从手牌选择至多 2 张攻击牌）
- [堕落](/powers/fallen_power.md)（每打出一次固定 +19 层）

## 源码

- `SeerDrinkBloodDragonSlaying.cs`