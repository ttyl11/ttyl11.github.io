# 烬灭神咒剑

<img src="/images/cards/ruin_curse_sword.png" alt="烬灭神咒剑" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 10
- **能量消耗**: 1
- **类型**: 攻击
- **稀有度**: 普通
- **目标**: 单体敌人
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害 | 8 | 12 |
| [焚烬](/powers/ash_power.md)层数 | 2 | 2 |
| [先制](/powers/first_strike_power.md) | +1（吸强成功时） | +1（吸强成功时） |

## 描述

PP: <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> 造成<span style="color:#3aa675;font-weight:600">8</span>点伤害，[焚烬](/powers/ash_power.md)<span style="color:#3aa675;font-weight:600">2</span>。[吸强](/mechanics/xi_qiang.md)，成功则[先制](/powers/first_strike_power.md)+<span style="color:#3aa675;font-weight:600">1</span>。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> 造成<span style="color:#3aa675;font-weight:600">12</span>点伤害，[焚烬](/powers/ash_power.md)<span style="color:#3aa675;font-weight:600">2</span>。[吸强](/mechanics/xi_qiang.md)，成功则[先制](/powers/first_strike_power.md)+<span style="color:#3aa675;font-weight:600">1</span>。

## 详细机制

- **结算顺序**：先造成伤害 → 给目标挂[焚烬](/powers/ash_power.md) → 最后执行[吸强](/mechanics/xi_qiang.md)并判定是否给[先制](/powers/first_strike_power.md)。
- **吸强是全敌口径**：即使只攻击一个目标，夺取的是**所有敌人**的[全属性](/mechanics/all_attributes.md)（力量/防御/命中/速度）正值提升；敌人的负属性不受影响。
- **"成功"只看有没有夺到**：夺到任意 <span style="color:#3aa675;font-weight:600">1</span> 点属性提升即算成功，给 <span style="color:#3aa675;font-weight:600">1</span> 层先制；夺到多少点与先制层数无关。
- **击杀会落空**：目标被这一击打死则不会再给它挂[焚烬](/powers/ash_power.md)；若全场敌人都已无属性提升可夺，先制也不会触发。
- **[焚烬](/powers/ash_power.md)是什么**：让目标造成的攻击伤害降低 <span style="color:#3aa675;font-weight:600">20</span>%；目标回合结束时会自叠 <span style="color:#3aa675;font-weight:600">2</span> 层[烧伤](/powers/burn_power.md)，然后焚烬层数 -<span style="color:#3aa675;font-weight:600">1</span>。

## 小贴士

- **"吸强成功"是开关不是数值**：夺到 <span style="color:#3aa675;font-weight:600">1</span> 点就给先制，所以这张牌的节奏点在于"场上还有没有带强化的敌人"——面对全裸敌人，它只是一张 1 费 8 点伤害的普通攻击。
- **越打越强的滚雪球牌**：吸强的收益是双向的——敌人掉多少属性，你就涨多少属性。面对会自己叠力量/防御的敌人，一张牌同时完成"削敌 + 强己 + 补先制"三件事。
- **焚烬专治输出型敌人**：攻击伤害降 <span style="color:#3aa675;font-weight:600">20</span>% 是实打实的减伤，叠起来的烧伤又逼着它在回合末持续掉血——用它去点全场攻击最高的那只，收益最直观。
- **先制是白送的节奏**：先制让你在对手行动前抢拍，配合高爆发回合能多打一轮输出，且这张牌的先制"顺手就给了"，不用特意围绕它构筑。
- **性价比**：1 费买到伤害 + 焚烬 + 吸强（附带先制），对带强化的敌人明显超值；对无强化的敌人属于条件收益卡，伤害本身偏薄，属于"对的场面很强、错的场面不亏"的牌。

## 相关能力

- [焚烬](/powers/ash_power.md)（对目标施加 2 层）
- [先制](/powers/first_strike_power.md)（吸强成功时 +1）
- [力量](/powers/strength_power.md) / [防御](/powers/defense_power.md) / [命中](/powers/accuracy_power.md) / [速度](/powers/speed_power.md)（吸强夺取的四维）

## 相关机制

- [吸强](/mechanics/xi_qiang.md)（全敌夺取属性提升）
- [全属性](/mechanics/all_attributes.md)
- [PP系统](/mechanics/pp-system.md)
- [格挡](/mechanics/block.md)（伤害为攻击伤害，可被格挡抵消）

## 源码

- `SeerRuinCurseSword.cs`