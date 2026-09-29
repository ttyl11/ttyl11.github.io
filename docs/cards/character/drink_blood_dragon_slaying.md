# 饮血屠龙

<img src="/images/cards/drink_blood_dragon_slaying.png" alt="饮血屠龙" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 5
- **能量消耗**: 0
- **类型**: 技能
- **稀有度**: 普通
- **目标**: 自己（打出时从手牌选择目标）
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 堕落 | 19 | 19 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: 5/5 从手牌选择最多[<span style="color:#d4a017;font-weight:600">2</span>]张[<span style="color:#d4a017;font-weight:600">攻击牌</span>]，使其获得[<span style="color:#d4a017;font-weight:600">饮血</span>]。\n[<span style="color:#d4a017;font-weight:600">溯引</span>]：随机一名敌人变为[<span style="color:#d4a017;font-weight:600">龙属性</span>](/powers/dragon_power.md)。[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">19</span>。

## 升级后

PP: 5/5 [<span style="color:#d4a017;font-weight:600">固有</span>](/mechanics/innate.md)。从手牌选择最多[<span style="color:#d4a017;font-weight:600">2</span>]张[<span style="color:#d4a017;font-weight:600">攻击牌</span>]，使其获得[<span style="color:#d4a017;font-weight:600">饮血</span>]。\n[<span style="color:#d4a017;font-weight:600">溯引</span>]：随机一名敌人变为[<span style="color:#d4a017;font-weight:600">龙属性</span>](/powers/dragon_power.md)。[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">19</span>。

## 小贴士

- **核心定位**：把「饮血」关键词（此牌造成的伤害回复你 20% 生命值）批量贴给手牌中的攻击牌。打出时弹出手牌选择框，挑最多 2 张攻击牌，它们打出去就能吸血——是标准的"回血引擎"来源，特别适合高攻多段攻击牌。
- **选择要点**：优先给「单段高伤」或你会反复打出的攻击牌贴饮血（多段攻击每段都回 20% 你的总伤量的 20%，实际收益更稳定）。没选满 2 张可以直接确认跳过。
- **溯引**：抽到此牌时，随机一名敌人变为[龙属性](/powers/dragon_power.md)——免费给某个敌人贴龙属性 tag，用于配合龙属性体系的克制与伤害翻倍判定。抽到即触发，无需打出。
- **如何尽量多触发溯引**：溯引是「抽到此牌时」触发，因此抽牌/洗牌让它尽快回手更有价值；配合弃牌重抽类效果能重复触发龙化。
- **0 费白嫖吸血**：0 费打出，无能量成本，配合[溯引](/mechanics/suyin.md)抽到即龙化一名敌人，稳定回血引擎起步。
- **堕落是附带的失控毒素**：每次打出固定 +<span style="color:#3aa675;font-weight:600">19</span>[堕落](/powers/fallen_power.md)，PP<span style="color:#3aa675;font-weight:600">5</span> 打满就是 <span style="color:#3aa675;font-weight:600">95</span> 层——堕落是负面机制，每满<span style="color:#3aa675;font-weight:600">100</span>层被[魔君接管](/powers/demon_takeover_power.md)强制乱打。回血引擎打五轮差不多就要"接管"一次，属于回血途中的隐性失控风险，需与其他堕落源一起规划。
- **性价比**：0 费贴 2 个饮血关键词 + 抽到免费龙化一个敌人，PP 5 单场可打 5 次，回血引擎稳定。作为中前期的回血+龙化启动牌，性价比合理。

## 相关能力

- [龙属性](/powers/dragon_power.md)（溯引将随机敌人变为龙属性）
- 饮血（关键词，此牌造成的伤害回复 20% 生命）

## 相关机制

- [固有](/mechanics/innate.md)（升级后添加，战斗开始时在手牌）
- 手牌选择（打出时从手牌选择至多 2 张攻击牌）
- [堕落](/powers/fallen_power.md)（每打出一次固定 +19 层）

## 源码

- `SeerDrinkBloodDragonSlaying.cs`