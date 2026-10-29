# 螺旋飞叶

<img src="/images/cards/spiral_leaf.png" alt="螺旋飞叶" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 10
- **能量消耗**: 0
- **类型**: 攻击
- **稀有度**: 普通
- **目标**: 所有敌人
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 单段伤害 | 3 | 5 |
| 基础段数 | 2 | 2 |
| 段数加成 | 敌方异常种类数 | 敌方异常种类数 |
| PP | 10 | 10 |
| 最大PP | 10 | 10 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> 对所有敌人造成<span style="color:#3aa675;font-weight:600">3</span>点伤害<span style="color:#3aa675;font-weight:600">2</span>次。敌人每有一种[<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)，次数+<span style="color:#3aa675;font-weight:600">1</span>。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> 对所有敌人造成<span style="color:#3aa675;font-weight:600">5</span>点伤害<span style="color:#3aa675;font-weight:600">2</span>次。敌人每有一种[<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)，次数+<span style="color:#3aa675;font-weight:600">1</span>。

## 详细机制

- **结算顺序**：先统计敌方异常种类 → 再按最终段数打一轮全体多段攻击。
- **段数公式**：段数 = <span style="color:#3aa675;font-weight:600">2</span> + 敌方[异常状态](/mechanics/abnormal-status.md)**种类数（去重）**。统计范围是**所有敌人**身上的可见异常——敌人 A 有中毒、敌人 B 有灼伤，算 2 种。
- **种类不是层数**：同一个敌人身上叠 10 层中毒仍然只算 1 种。
- **每一段都是独立的攻击伤害**：各自吃[力量](/powers/strength_power.md) / 易伤 / [暴击](/mechanics/critical-strike.md)加成，也各自被[格挡](/mechanics/block.md)单独抵消。
- **升级只提升单段伤害**：3 → 5（+2），段数公式不变。

## 小贴士

- **异常的「变现器」**：把挂出去的异常种类直接换成伤害段数——先铺异常、再打它，是最自然的两段式连招（配合[曙光普照](/cards/character/shining_light)、[寄生种子](/cards/character/parasite_seed)之类）。
- **多敌人时收益翻倍增长**：段数按「所有敌人的异常种类」统计，3 个敌人各带 3 种不同异常就是 2+9=<span style="color:#3aa675;font-weight:600">11</span> 段，每个敌人都吃 11 段。
- **注意「可见」口径**：只有可见的异常才计数，隐藏型能力不计入段数。
- **多段怕格挡**：每段单独过格挡，面对高格挡敌人时总伤害会被反复削掉；对无格挡目标才接近纸面值。
- **性价比**：0 费。空场（0 种异常）时是「3×2」的全体小攻击，偏弱；一旦敌方异常种类堆到 4~5 种，它就变成一张 0 费的全体中量输出牌——收益完全取决于你的异常铺设能力。

## 相关能力

- 无（本牌不施加能力）

## 相关机制

- [异常状态](/mechanics/abnormal-status.md)（段数按敌方异常种类数增加）
- [格挡](/mechanics/block.md)（每段单独被格挡抵消）
- [暴击](/mechanics/critical-strike.md)（多段各自判定暴击）
- [PP系统](/mechanics/pp-system.md)（每次打出消耗 1 点 PP）

## 源码

- `SeerSpiralLeaf.cs`