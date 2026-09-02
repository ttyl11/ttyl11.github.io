# 孤身绝念刺

<img src="/images/cards/lone_despair_stab.png" alt="孤身绝念刺" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌

- **最大PP**: 5

- **能量消耗**: 2

- **类型**: 攻击

- **稀有度**: 罕见

- **目标**: 单个敌方

- **可升级**: 是（1 级）

- **关键词**: 无

### 数值参数

| 参数         | 数值  | 升级后 |
| ---------- | --- | --- |
| 基础伤害       | 15  | 15  |
| 连击基础次数     | 5   | 7   |
| 已损生命固定伤害比例 | 50% | 80% |
| PP         | 5   | 5   |
| 最大PP       | 5   | 5   |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 将自身所有负值[<span style="color:#9b59b6;font-weight:600">四维属性</span>](/mechanics/all_attributes.md)（[力量](/powers/strength_power.md)/[防御](/powers/defense_power.md)/[命中](/powers/accuracy_power.md)/[速度](/powers/speed_power.md)）反转成等量正值。对单个敌人造成<span style="color:#d44;font-weight:600">15</span>点伤害，连击<span style="color:#3aa675;font-weight:600">5</span>次。伤害结算后对目标施加[<span style="color:#9b59b6;font-weight:600">固定伤害</span>](/powers/fixed_damage_power.md)，数值为自身已损生命 × <span style="color:#3aa675;font-weight:600">50%</span>。

## 升级后

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 将自身所有负值[<span style="color:#9b59b6;font-weight:600">四维属性</span>](/mechanics/all_attributes.md)反转成等量正值。对单个敌人造成<span style="color:#d44;font-weight:600">15</span>点伤害，连击<span style="color:#3aa675;font-weight:600">7</span>次。伤害结算后对目标施加[<span style="color:#9b59b6;font-weight:600">固定伤害</span>](/powers/fixed_damage_power.md)，数值为自身已损生命 × <span style="color:#3aa675;font-weight:600">80%</span>。

## 工作机制

- **负值属性反转**：打出时把自身[力量](/powers/strength_power.md)、[防御](/powers/defense_power.md)、[命中](/powers/accuracy_power.md)、[速度](/powers/speed_power.md)四项能力中的负值全部翻转为等量正值（-N → +N），正值属性不受影响。

- **连击次数与手牌挂钩**：连击次数 = 基础次数（5，升级 7）− 当前手牌数（含本牌），最低 1 次。手牌越少，连击越多。

- **固定伤害按已损生命结算**：伤害结算后对目标施加[固定伤害](/powers/fixed_damage_power.md)，数值 = 自身已损生命 × 50%（升级 80%），在目标回合开始时结算，可绕过格挡。

## 小贴士

- **减益反转的战术价值**：打出时将自身所有负值四维属性反转成正值——例如[虚弱](/powers/weak_power.md)造成的力量下降、敌方施加的防御/命中/速度削减，均可被此卡翻转为增益。适合在自身被堆叠减益时使用，变废为宝，同时享受额外的连击与固定伤害。

- **连击与手牌的动态博弈**：连击次数 = 基础次数 − 手牌数（含本牌），手牌越少连击越多。想最大化伤害，先把手牌清空（或减少到最少）再打出此牌；手牌满时连击可能只剩 1 次。

- **固定伤害对目标的威胁**：固定伤害施加在目标身上，下回合开始时结算并移除，可绕过格挡。自身已损生命越高，固定伤害越狠——这是典型的"以伤换伤"机制，配合[凝驻](/mechanics/ningzhu.md)类续航手段可以反复利用高已损生命的优势。

- **升级收益分析**：连击基础次数 5→7（+2 次），已损生命固定伤害比例 50%→80%（+30%），双重提升，优先级极高。在手牌少的情况下，升级后连击最多可达 7 次。

- **最佳使用时机**：①自身被堆叠负值属性时反转增益；②自身残血时最大化固定伤害输出；③手牌少时最大化连击次数。三要素同时满足时为最优释放窗口。

## 相关能力

- [力量](/powers/strength_power.md)（四维属性之一，影响攻击伤害）

- [防御](/powers/defense_power.md)（四维属性之一，减少受到的攻击伤害）

- [命中](/powers/accuracy_power.md)（四维属性之一，影响攻击命中率）

- [速度](/powers/speed_power.md)（四维属性之一，影响抽牌数）

- [固定伤害](/powers/fixed_damage_power.md)（对目标施加的延迟伤害能力）

## 相关机制

- [PP系统](/mechanics/pp-system.md)（PP 消耗）

- [四维属性](/mechanics/all_attributes.md)（力量的增减机制）

- [固定伤害](/powers/fixed_damage_power.md)（下回合结算的延迟伤害）

- [连击](/mechanics/intent.md)（多次攻击的实现方式）

## 源码

- `SeerLoneDespairStab.cs`

