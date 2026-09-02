# 晚风孤夜断

<img src="/images/cards/evening_wind_break.png" alt="晚风孤夜断" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌

- **最大PP**: 5

- **能量消耗**: 1

- **类型**: 攻击

- **稀有度**: 罕见

- **目标**: 单个敌方

- **可升级**: 是（1 级）

- **关键词**: 无

### 数值参数

| 参数    | 数值     | 升级后    |
| ----- | ------ | ------ |
| 基础伤害  | 20     | 30     |
| 全属性惩罚 | -1（每维） | -1（每维） |
| PP    | 5      | 5      |
| 最大PP  | 5      | 5      |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 对单个敌人造成<span style="color:#d44;font-weight:600">20</span>点伤害，自身[<span style="color:#9b59b6;font-weight:600">力量</span>](/powers/strength_power.md)[<span style="color:#9b59b6;font-weight:600">防御</span>](/powers/defense_power.md)[<span style="color:#9b59b6;font-weight:600">命中</span>](/powers/accuracy_power.md)[<span style="color:#9b59b6;font-weight:600">速度</span>](/powers/speed_power.md)各<span style="color:#d44;font-weight:600">-1</span>。

## 升级后

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 对单个敌人造成<span style="color:#d44;font-weight:600">30</span>点伤害，自身[<span style="color:#9b59b6;font-weight:600">力量</span>](/powers/strength_power.md)[<span style="color:#9b59b6;font-weight:600">防御</span>](/powers/defense_power.md)[<span style="color:#9b59b6;font-weight:600">命中</span>](/powers/accuracy_power.md)[<span style="color:#9b59b6;font-weight:600">速度</span>](/powers/speed_power.md)各<span style="color:#d44;font-weight:600">-1</span>。

## 工作机制

- **单次伤害**：造成 20/30 点攻击伤害，无连击。

- **全属性惩罚**：伤害结算后，对自身施加 [力量](/powers/strength_power.md) -1、[防御](/powers/defense_power.md) -1、[命中](/powers/accuracy_power.md) -1、[速度](/powers/speed_power.md) -1。每次打出均永久累积，5 PP 打完后全属性 -5。

- **无关键词**：此牌无 [凝驻](/mechanics/ningzhu.md)、[毁灭](/mechanics/destruction.md) 等特殊关键词，正常随回合流转到弃牌堆。

## 小贴士

- **伤害换属性的透支型设计**：1 费造成 20 点伤害，代价是全属性各 -1。每次打出都累积削弱自身——[力量](/powers/strength_power.md)降低减少自身攻击伤害，[防御](/powers/defense_power.md)降低增加受到的攻击伤害，[命中](/powers/accuracy_power.md)降低让攻击有概率未命中，[速度](/powers/speed_power.md)降低到一定程度后减少抽牌。5 次打完后全属性 -5，是一个严重的累积惩罚。

- **前期爆发，后期衰减**：适合作为开局爆发手段，用 2-3 次后应转为防御或回复节奏。不要让 PP 耗尽后再依赖此卡——属性已低时受伤风险更高，形成恶性循环。

- **升级纯正向收益**：伤害从 20→30（+10），全属性 -1 的代价不变。升级后每次攻击的收益大幅提升，优先级极高。

- **与雅髯狮啸的配合**：[雅髯狮啸](./ya_ran_shi_xiao.md)可以窃取敌方属性并为自身添加随机属性增益，部分抵消晚风断的属性惩罚。合理搭配可延长此卡的有效使用期。

- **与其他卡的联动**：配合[孤身绝念刺](./lone_despair_stab.md)的负值反转机制，可在晚风断造成负值属性后，用孤身绝念刺将其反转回来——先减后翻，实现属性净变化为零的同时完成伤害输出。

## 相关能力

- [力量](/powers/strength_power.md)（受到 -1 影响，降低自身攻击伤害）

- [防御](/powers/defense_power.md)（受到 -1 影响，增加自身受到的攻击伤害）

- [命中](/powers/accuracy_power.md)（受到 -1 影响，使自身攻击有概率未命中）

- [速度](/powers/speed_power.md)（受到 -1 影响，累积到 -2 层后减少抽牌）

## 相关机制

- [PP系统](/mechanics/pp-system.md)（PP 消耗）

- [四维属性](/mechanics/all_attributes.md)（属性增减机制）

- [属性惩罚](/mechanics/all_attributes.md)（累积全属性下降的影响）

## 源码

- `SeerEveningWindBreak.cs`

