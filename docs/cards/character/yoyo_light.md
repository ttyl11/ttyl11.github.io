# 悠悠光线

<img src="/images/cards/yoyo_light.png" alt="悠悠光线" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 攻击
- **稀有度**: 普通
- **目标**: 敌方单体
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害 | 10 | 15 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 造成<span style="color:#3aa675;font-weight:600">10</span>点伤害。丢弃所有[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 造成<span style="color:#3aa675;font-weight:600">15</span>点伤害。丢弃所有[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)。

## 详细机制

- **结算顺序**：先造成伤害，**再**丢弃手牌——所以它自己结算完之后，手里剩下的牌（含本回合还没打的其他牌）会全部进入[弃牌堆](/mechanics/discard_pile.md)。
- **「丢弃」不是「消耗」**：被丢的牌进弃牌堆，之后仍会被洗回抽牌堆正常循环。
- **丢弃会触发「弃牌时」类效果**：走原版弃牌流程，因此依赖弃牌的机制（弃牌堆计数、弃牌时触发的能力）都会被这次清空一并触发。
- **伤害为攻击伤害**：吃[力量](/powers/strength_power.md) / 易伤 / [暴击](/mechanics/critical-strike.md)加成，可被[格挡](/mechanics/block.md)抵消。
- **升级只提升伤害**：10 → 15（+5）。

## 小贴士

- **打它之前先把手牌用干净**：它是「伤害 + 清空手牌」二段式，出手前先把想打的牌打掉，否则等于白丢资源。
- **也可以反过来当「清手牌」工具**：需要把手牌清空才能触发的构筑（弃牌堆计数、清手牌收益），它是 1 费的清场手段，还顺带 10（升级 15）点伤害。
- **联机时注意**：只清自己手牌，不影响队友。
- **和同类牌对比**：同类的「丢弃所有手牌」牌还有[六月的极昼](/cards/character/june_polar_day)（换回血）、[戏梦缥缈间](/cards/character/xi_meng_piao_miao_jian)（换抽牌）——它是其中唯一「换伤害」的一张。
- **性价比**：1 费 10（升级 15）点攻击伤害 + 清空手牌。纯看伤害在普通里偏低，价值在「顺手清手牌」这一动作；不打弃牌体系的构筑里，它约等于一张略亏的小攻击牌。

## 相关能力

- 无（本牌不施加能力）

## 相关机制

- [手牌](/mechanics/hand.md)（打出后清空全部手牌）
- [弃牌堆](/mechanics/discard_pile.md)（被丢弃的牌进入弃牌堆循环）
- [格挡](/mechanics/block.md)（伤害为攻击伤害，可被格挡抵消）
- [PP系统](/mechanics/pp-system.md)（每次打出消耗 1 点 PP）

## 源码

- `SeerYoyoLight.cs`