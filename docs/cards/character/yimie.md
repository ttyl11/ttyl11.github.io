# 夷灭

<img src="/images/cards/yimie.png" alt="夷灭" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌

- **最大PP**: 5

- **能量消耗**: 2

- **类型**: 攻击

- **稀有度**: 罕见

- **目标**: 所有敌方

- **可升级**: 是（1 级）
- **关键词**: [反弱](/mechanics/fan_ruo.md)、[反强](/mechanics/fan_qiang.md)

### 数值参数

| 参数   | 数值 | 升级后 |
| ---- | -- | --- |
| 伤害   | 5  | 5   |
| 攻击次数 | 3  | 4   |
| PP   | 5  | 5   |
| 最大PP | 5  | 5   |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 反转所有敌方[<span style="color:#9b59b6;font-weight:600">四维属性</span>](/mechanics/all_attributes.md)的**正属性**和自身的**负属性**。对所有敌人造成<span style="color:#3aa675;font-weight:600">5</span>点伤害，共<span style="color:#3aa675;font-weight:600">3</span>次。

## 升级后

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 反转所有敌方[<span style="color:#9b59b6;font-weight:600">四维属性</span>](/mechanics/all_attributes.md)的**正属性**和自身的**负属性**。对所有敌人造成<span style="color:#3aa675;font-weight:600">5</span>点伤害，共<span style="color:#3aa675;font-weight:600">4</span>次。

## 小贴士

- **反转是翻倍取反，不是清零**：反转不是把 +5 力量打成 0，而是直接翻成 -5——敌方正属性越高，被打得越惨，同时它自己的输出也一并崩塌。四维里[力量](/powers/strength_power.md)、[防御](/powers/defense_power.md)、[命中](/powers/accuracy_power.md)、[速度](/powers/speed_power.md)正层全都会被翻成负层。

- **先反转再出刀，拆防守最实用**：伤害在反转之后结算。敌人若叠了正[防御](/powers/defense_power.md)，先被翻成负防御再吃到这轮攻击，这一刀比平时疼得多——对"叠甲坦克"既是拆解又是痛击，一卡两用。

- **翻掉正速度是节奏压制**：把敌人的正[速度](/powers/speed_power.md)翻成负，会让它每 2 层少抽 1 张手牌；翻掉正[力量](/powers/strength_power.md)则直接削弱它接下来所有攻击。清场之余顺手拆敌方节奏。

- **自身负属性反转 = 自保 + 爆发两手抓**：先把自身四维的负值翻正，再打伤害——既解除自身被堆叠的减益，又让这一刀回到正常水平。[命中](/powers/accuracy_power.md)翻正后不再有未命中风险，速度翻正后还能正常抽牌。被压着打时往往这才是翻盘点。

- **只碰四维，别指望更多**：只反转力量/防御/命中/速度这四种属性，[虚弱](/powers/weak_power.md)、[易伤](/powers/vulnerable_power.md)等异常状态不反转，暴击/先制等其它能力也不受影响。真"全属性失效"得找别的牌，这张只管四维。

- **性价比**：2 费三合一——全敌正属性拆解 + 自身负属性自愈 + 每只敌人三段共 15 点AOE，清杂解场两不误，升级只把它变本加厉。

## 相关能力

- [力量](/powers/strength_power.md)（四维属性之一，影响攻击伤害）

- [防御](/powers/defense_power.md)（四维属性之一，减少受到的攻击伤害）

- [命中](/powers/accuracy_power.md)（四维属性之一，负值时影响攻击命中率）

- [速度](/powers/speed_power.md)（四维属性之一，负值时影响抽牌数）

## 相关机制

- [PP系统](/mechanics/pp-system.md)（PP 消耗）

- [四维属性](/mechanics/all_attributes.md)（力量/防御/命中/速度的正负机制）

## 源码

- `SeerYiMie.cs`

