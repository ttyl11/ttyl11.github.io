# 圣火裁决

<img src="/images/cards/holy_fire_judgment.png" alt="圣火裁决" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 5
- **能量消耗**: 2
- **类型**: 攻击
- **稀有度**: 普通
- **目标**: 所有敌方
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害 | 14 | 20 |
| 固定伤害 | 10 | 10 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 变为[<span style="color:#d4a017;font-weight:600">火系</span>](/powers/fire_power.md)。对所有敌人造成<span style="color:#3aa675;font-weight:600">14</span>点伤害。[<span style="color:#d4a017;font-weight:600">火系</span>](/powers/fire_power.md)克制目标[<span style="color:#d4a017;font-weight:600">固定伤害</span>](/powers/fixed_damage_power.md)<span style="color:#3aa675;font-weight:600">10</span>。

## 升级后

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 变为[<span style="color:#d4a017;font-weight:600">火系</span>](/powers/fire_power.md)。对所有敌人造成<span style="color:#3aa675;font-weight:600">20</span>点伤害。[<span style="color:#d4a017;font-weight:600">火系</span>](/powers/fire_power.md)克制目标[<span style="color:#d4a017;font-weight:600">固定伤害</span>](/powers/fixed_damage_power.md)<span style="color:#3aa675;font-weight:600">10</span>。

## 详细机制

- **结算顺序**：先清空自身全部元素并变为火系 → 再对所有敌人结算伤害 → 最后对"被火系克制"的敌人追加固定伤害。
- **先变属性再打伤害**：因此这 14 点（升级 20）本身也吃火系克制倍率。
- **[火系](/powers/fire_power.md)克制表**（对目标元素倍率 ×1.5）：草、机械、冰。
- **被火系抵抗**（×0.75）：水、火、圣灵、自然、混沌、神灵。
- **追加固伤判定**：只对"目标当前元素被火系克制"（倍率 = 1.5）的敌人生效；无元素的敌人不吃额外固伤。
- **追加的 10 层[固定伤害](/powers/fixed_damage_power.md)**：在各自回合开始时结算（无视格挡），结算后移除。

## 小贴士

- **对克制属性是双重收益**：草 / 机械 / 冰系敌人吃 14×1.5 = 21 伤害 + 10 固伤 = **31 等效输出**（升级 20×1.5 = 30 + 10 = **40**）。
- **变火系是一把双刃剑**：变属性影响的是**你造成的伤害**——此后自身攻击对水 / 火 / 圣灵 / 自然 / 混沌 / 神灵系敌人只造成 75% 伤害。所以这张牌更适合"确认敌方是草/机械/冰"时使用。
- **会覆盖已有元素**：若本场已通过其他手段变为龙属性等，这张牌会把原元素清掉，需要留意与龙体系等卡牌的配合顺序。
- **群攻 + 追加固伤**：对多敌人场面是高效清场牌；固伤无视格挡，对高防的机械系敌人尤其有效。
- **升级收益**：伤害 14→20，克制时 21→30，提升明显。

## 相关能力

- [火](/powers/fire_power.md)（本卡变身后的元素，决定克制倍率）
- [固定伤害](/powers/fixed_damage_power.md)（对克制目标追加的 10 层）

## 相关机制

- [PP系统](/mechanics/pp-system.md)（PP 消耗）
- [元素克制](/mechanics/element-affinity.md)（倍率表）

## 源码

- `SeerHolyFireJudgment.cs`
