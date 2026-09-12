# 饮血屠龙

<img src="/images/cards/drink_blood_dragon_slaying.png" alt="饮血屠龙" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 普通
- **目标**: 自己（打出时从手牌选择目标）
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: 5/5 从手牌选择最多[<span style="color:#d4a017;font-weight:600">2</span>]张[<span style="color:#d4a017;font-weight:600">攻击牌</span>]，使其获得[<span style="color:#d4a017;font-weight:600">饮血</span>]。\n[<span style="color:#d4a017;font-weight:600">溯引</span>]：随机一名敌人变为[<span style="color:#d4a017;font-weight:600">龙属性</span>](/powers/dragon_power.md)。

## 升级后

PP: 5/5 [<span style="color:#d4a017;font-weight:600">固有</span>](/mechanics/innate.md)。从手牌选择最多[<span style="color:#d4a017;font-weight:600">2</span>]张[<span style="color:#d4a017;font-weight:600">攻击牌</span>]，使其获得[<span style="color:#d4a017;font-weight:600">饮血</span>]。\n[<span style="color:#d4a017;font-weight:600">溯引</span>]：随机一名敌人变为[<span style="color:#d4a017;font-weight:600">龙属性</span>](/powers/dragon_power.md)。

## 小贴士

- **核心定位**：把「饮血」关键词（此牌造成的伤害回复你 20% 生命值）批量贴给手牌中的攻击牌。打出时弹出手牌选择框，挑最多 2 张攻击牌，它们打出去就能吸血——是标准的"回血引擎"来源，特别适合高攻多段攻击牌。
- **选择要点**：优先给「单段高伤」或你会反复打出的攻击牌贴饮血（多段攻击每段都回 20% 你的总伤量的 20%，实际收益更稳定）。没选满 2 张可以直接确认跳过。
- **溯引**：抽到此牌时，随机一名敌人变为[龙属性](/powers/dragon_power.md)——免费给某个敌人贴龙属性 tag，用于配合龙属性体系的克制与伤害翻倍判定。抽到即触发，无需打出。
- **如何尽量多触发溯引**：溯引是「抽到此牌时」触发，因此抽牌/洗牌让它尽快回手更有价值；配合弃牌重抽类效果能重复触发龙化。
- **性价比**：1 费贴 2 个饮血关键词 + 抽到免费龙化一个敌人，PP 5 单场可打 5 次，回血引擎稳定。作为中前期的回血+龙化启动牌，性价比合理。

## 相关能力

- [龙属性](/powers/dragon_power.md)（溯引将随机敌人变为龙属性）
- 饮血（关键词，此牌造成的伤害回复 20% 生命）

## 相关机制

- [固有](/mechanics/innate.md)（升级后添加，战斗开始时在手牌）
- 手牌选择（打出时从手牌选择至多 2 张攻击牌）

## 源码

- `SeerDrinkBloodDragonSlaying.cs`