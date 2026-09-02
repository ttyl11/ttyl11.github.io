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

## 工作机制

- **3次独立随机窃取**：每次从 4 种属性（力量/防御/命中/速度）中随机选 1 种，对该属性执行"目标 -1、自身 +1"。3 次互相独立，可能出现同一属性被窃取 3 次的情况，也可能分散在多种属性上。
- **四维属性的收益**（窃取后落在自身身上的效果）：
  - [力量](/powers/strength_power.md)：每层 +1 攻击伤害
  - [防御](/powers/defense_power.md)：每层减少 1 点受到的攻击伤害（只对攻击伤害生效）
  - [命中](/powers/accuracy_power.md)：正数时自身无直接效果，主要用于抵消负命中；敌方被窃取后若命中转负，其攻击有概率未命中
  - [速度](/powers/speed_power.md)：自身每 2 层回合开始额外抽 1 张

## 小贴士

- **持续削弱的节奏卡**：每次打出随机窃取目标 1 点四维属性到自身，兼顾削弱敌人与强化自己。适合作为持久战的基石卡，配合高 PP 续航反复打出。
- **属性转移的连锁价值**：窃取的属性直接加到自身——力量提高后续攻击伤害，防御减少受到的攻击伤害，速度带来更多抽牌。每点窃取都是真实收益。
- **随机性的应对策略**：由于每次随机选属性，连续 3 次可能全抽到同一属性（也可能三种属性各一点）。想要稳定的力量收益，需配合能定向获得特定属性的手段。
- **低伤高 PP 的定位**：基础伤害 7 点偏低，但提供了大量使用机会。配合力量窃取，多打几次后自身力量累积，伤害开始显著增长。升级后基础伤害 12 点，前几次打击就有可观输出。
- **升级性价比**：伤害从 7→12（+5），其他不变。升级使前期的伤害体验明显改善，但不会改变卡的整体定位（持续消耗型）。升级优先级中等。
- **与其他卡的配合**：
  - 配合[奇镰解放](./qi_lian_liberation.md)（清除敌方增益后自身属性更干净地积累）
  - 配合高[力量](/powers/strength_power.md)加成攻击卡，窃取的力量可直接转化为更多伤害

## 相关能力

- [力量](/powers/strength_power.md)（窃取并转移的属性之一，影响攻击伤害）
- [防御](/powers/defense_power.md)（窃取并转移的属性之一，减少受到的攻击伤害）
- [命中](/powers/accuracy_power.md)（窃取并转移的属性之一，正数抵消负命中）
- [速度](/powers/speed_power.md)（窃取并转移的属性之一，影响抽牌数）

## 相关机制

- [PP系统](/mechanics/pp-system.md)（PP消耗机制）
- [四维属性](/mechanics/all_attributes.md)（被窃取转移的属性体系）

## 源码

- `SeerYaRanShiXiao.cs`
