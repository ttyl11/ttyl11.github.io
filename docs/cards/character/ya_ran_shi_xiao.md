# 雅髯狮啸

<img src="/images/cards/ya_ran_shi_xiao.png" alt="雅髯狮啸" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 10
- **能量消耗**: 1
- **类型**: 攻击
- **稀有度**: 普通
- **目标**: 单个敌方
- **可升级**: 是（1 级）
- **关键词**: 无

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 基础伤害 | 7 | 12 |
| 属性窃取次数 | 3 | 3 |
| 每次窃取量 | 1 | 1 |
| PP | 10 | 10 |
| 最大PP | 10 | 10 |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> 对单个敌人造成<span style="color:#d44;font-weight:600">7</span>点伤害。随机选取[力量](/powers/strength_power.md)/[防御](/powers/defense_power.md)/[命中](/powers/accuracy_power.md)/[速度](/powers/speed_power.md)一种属性，从目标窃取<span style="color:#3aa675;font-weight:600">3</span>点移至自身（每次1点，共3次独立随机）。

## 升级后

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> 对单个敌人造成<span style="color:#d44;font-weight:600">12</span>点伤害。随机选取[力量](/powers/strength_power.md)/[防御](/powers/defense_power.md)/[命中](/powers/accuracy_power.md)/[速度](/powers/speed_power.md)一种属性，从目标窃取<span style="color:#3aa675;font-weight:600">3</span>点移至自身（每次1点，共3次独立随机）。

## 详细机制

- **3次独立随机窃取**：每次从4种属性（力量/防御/命中/速度）中随机选1种，对该属性执行：目标-1，自身+1。3次互相独立，可能出现同一属性被窃取3次的情况，也可能分散在多种属性上。
- **属性加成联动**：
  - [力量](/powers/strength_power.md)：每层+1攻击伤害
  - [防御](/powers/defense_power.md)：每层+1格挡
  - [命中](/powers/accuracy_power.md)：提高暴击概率
  - [速度](/powers/speed_power.md)：提高先手顺序
- **无冷却限制**：本卡没有[凝驻](/mechanics/ningzhu.md)或其他冷却机制，PP耗尽前可持续打出。

## 小贴士

- **持续削弱的节奏卡**：10PP意味着最多可打出10次，每次随机窃取目标1点四维属性。10次后理论上最多从目标身上窃取10点属性加到自身，同时削弱敌人。适合作为持久战的基石卡。
- **属性转移的连锁价值**：窃取的属性直接加到自身——[力量](/powers/strength_power.md)提高后续攻击伤害，[防御](/powers/defense_power.md)提高格挡，[命中](/powers/accuracy_power.md)提高暴击率，[速度](/powers/speed_power.md)改善出牌顺序。每点窃取都是真实收益。
- **随机性的应对策略**：由于每次随机选属性，连续3次可能全抽到同一属性。建议配合能稳定获得特定属性的手段（如遗物或队友能力）来弥补随机性。
- **低伤高PP的定位**：基础伤害7点偏低，但10PP提供了大量使用机会。配合力量窃取，第3次之后伤害开始显著增长（每3点力量≈+3伤害）。升级后基础伤害12点，前几次打击就有可观输出。
- **升级性价比**：伤害从7→12（+5），其他不变。升级使前期的伤害体验明显改善，但不会改变卡的整体定位（持续消耗型）。升级优先级中等。
- **与其他卡的配合**：
  - 配合[奇镰解放](./qi_lian_liberation.md)（清除敌方增益后自身属性更干净地积累）
  - 配合[晚风断](./evening_wind_break.md)（同属性维度操作，注意属性平衡）
  - 配合高[力量](/powers/strength_power.md)加成攻击卡，窃取的力量可直接转化为更多伤害

## 相关能力

- [力量](/powers/strength_power.md)（窃取并转移的属性之一，影响攻击伤害）
- [防御](/powers/defense_power.md)（窃取并转移的属性之一，影响格挡）
- [命中](/powers/accuracy_power.md)（窃取并转移的属性之一，影响暴击率）
- [速度](/powers/speed_power.md)（窃取并转移的属性之一，影响出牌顺序）

## 相关机制

- [PP系统](/mechanics/pp-system.md)（PP消耗机制）
- [凝驻](/mechanics/ningzhu.md)（本卡无凝驻，区别在于无冷却限制）
- [增益](/mechanics/permanent-bonus.md)（属性窃取属于增益获得方式）

## 源码

- `SeerYaRanShiXiao.cs`
