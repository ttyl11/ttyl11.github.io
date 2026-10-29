# 深雷魔闪光

<img src="/images/cards/deep_thunder_demon_flash.png" alt="深雷魔闪光" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 5
- **能量消耗**: 0
- **类型**: 攻击
- **稀有度**: 普通
- **目标**: 无（打出时不需要指定目标）
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害 | 10 | 15 |
| [堕落](/powers/fallen_power.md) | 当前层数 × 20% | 当前层数 × 20% |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 对被自身克制的生物造成<span style="color:#3aa675;font-weight:600">10</span>点伤害，并随机改变其属性。[堕落](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">20</span>%。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 对被自身克制的生物造成<span style="color:#3aa675;font-weight:600">15</span>点伤害，并随机改变其属性。[堕落](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">20</span>%。

## 详细机制

- **不需要选目标**：打出后自动结算，不会弹目标选择框。
- **判定范围是全场生物**：自己 + 队友 + 所有敌人逐个判定；**自身对目标的合并元素克制系数 >1** 者才会中招（可能是 1.25、1.5、3 等，不是只看 1.5）。
- **中招者两个效果**：先受到基础 <span style="color:#3aa675;font-weight:600">10</span>（升级 <span style="color:#3aa675;font-weight:600">15</span>）点攻击伤害——实际伤害还会乘自身对目标的元素克制倍率；然后属性被清空并从 <span style="color:#3aa675;font-weight:600">26</span> 种元素中**随机洗成一种**。
- **同系也会自克**：[虫](/powers/bug_power.md)、[龙](/powers/dragon_power.md)、[神秘](/powers/mysterious_power.md)、[暗影](/powers/shadow_power.md)这四个属性**对同属性也是克制**——所以自身带这四种之一时，**自己也会被打中并被洗属性**。
- **不满足克制完全不生效**：对方属性不被你克制（或你身上没有任何属性）时，既无伤害也不改属性。
- **[堕落](/powers/fallen_power.md)按比例涨**：增加当前堕落层数的 <span style="color:#3aa675;font-weight:600">20</span>%（向下取整），与是否命中无关；当前堕落不足 <span style="color:#3aa675;font-weight:600">5</span> 层时本次为 0。

## 小贴士

- **带虫/龙/神秘/暗影时，它是一张"自伤牌"**：你会稳定吃到一发基础 <span style="color:#3aa675;font-weight:600">10</span>（升级 <span style="color:#3aa675;font-weight:600">15</span>）点、再乘同系克制倍率的伤害（通常 1.5 倍），同时自己的属性被随机洗掉——洗完大概率不再是自克系，相当于**一次自净**，但这口血是实打实掉的。
- **对敌人是"拆克制"利器**：敌人用克制你的属性打你时伤害 ×1.5，这一发把它属性洗成随机一种，等于当场卸掉它的克制优势（也顺手削它的输出）。
- **联机时队友也会进判定池**：队友的属性若被你克制同样会吃伤害被洗属性——0 费虽便宜，但别把队友也洗了。
- **洗属性可能"洗出好属性"**：随机结果是 <span style="color:#3aa675;font-weight:600">26</span> 选 <span style="color:#3aa675;font-weight:600">1</span>，对敌人是纯赌博（可能洗出更克你的），对自己则常常"洗掉麻烦"。
- **性价比**：0 费，命中即全场免费 AOE + 洗属性，条件成立时性价比极高；自身带自克系时属于"保底生效但代价自伤"的双刃剑，不带时是一张看敌方属性的条件牌。

## 相关能力

- [堕落](/powers/fallen_power.md)（按当前层数 20% 累积）

## 相关机制

- [元素克制](/mechanics/element-affinity.md)（判定与改属性的核心依据）
- [堕落](/powers/fallen_power.md)
- [PP系统](/mechanics/pp-system.md)
- [格挡](/mechanics/block.md)（伤害为攻击伤害，可被格挡抵消）

## 源码

- `SeerDeepThunderDemonFlash.cs`