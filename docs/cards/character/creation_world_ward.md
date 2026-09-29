# 创灵护界决

<img src="/images/cards/creation_world_ward.png" alt="创灵护界决" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 攻击
- **稀有度**: 普通
- **目标**: 单体敌人
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 单条意图伤害 | 7 | 10 |
| [异常免疫](/powers/debuff_immune_power.md)回合数 | 4 | 4 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> [异常免疫](/powers/debuff_immune_power.md)<span style="color:#3aa675;font-weight:600">4</span>回合。对目标造成<span style="color:#3aa675;font-weight:600">7</span>×全场意图总数点伤害。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> [异常免疫](/powers/debuff_immune_power.md)<span style="color:#3aa675;font-weight:600">4</span>回合。对目标造成<span style="color:#3aa675;font-weight:600">10</span>×全场意图总数点伤害。

## 详细机制

- **结算顺序**：先给自己挂 <span style="color:#3aa675;font-weight:600">4</span> 回合[异常免疫](/powers/debuff_immune_power.md)，再对选定目标一次性结算伤害。
- **伤害 = 单条伤害 × 全场意图总数**：统计的是**所有敌人**当前头顶的意图条数之和（攻击 + 格挡同时显示即算 <span style="color:#3aa675;font-weight:600">2</span> 条），<span style="color:#3aa675;font-weight:600">7</span>（升级 <span style="color:#3aa675;font-weight:600">10</span>）点/条。
- **打的是单体，读的是全场**：目标由你选择，但伤害总量取决于全场敌人的意图数量——场上敌人越多、意图越复杂，这一击越重。
- **全场无意图时只给免疫**：意图总数为 <span style="color:#3aa675;font-weight:600">0</span> 时本卡不造成伤害（[异常免疫](/powers/debuff_immune_power.md)照常获得）。
- **[异常免疫](/powers/debuff_immune_power.md)**：免疫[异常状态](/mechanics/abnormal-status.md) <span style="color:#3aa675;font-weight:600">4</span> 回合，每经过一个敌方回合结束减少 <span style="color:#3aa675;font-weight:600">1</span> 层。

## 小贴士

- **多敌人场景才是它的主场**：三个敌人各显示 <span style="color:#3aa675;font-weight:600">2</span> 条意图时就是 <span style="color:#3aa675;font-weight:600">6</span> 条 → <span style="color:#3aa675;font-weight:600">42</span> 点（升级 <span style="color:#3aa675;font-weight:600">60</span> 点），1 费打出 <span style="color:#3aa675;font-weight:600">60</span> 点的量级相当夸张；单怪场景一般只有 <span style="color:#3aa675;font-weight:600">1</span>~<span style="color:#3aa675;font-weight:600">2</span> 条，收益骤降。
- **出手前先数意图**：敌人意图会随行动轮换变化，"这一轮有几条"决定这张牌的伤害——把它留给意图最多的回合打出，收益最大化。
- **免异常是抗压底牌**：<span style="color:#3aa675;font-weight:600">4</span> 回合不吃[异常状态](/mechanics/abnormal-status.md)，面对专精异常压制的敌人可以先手挂上，再慢慢运营。
- **它是"读牌"型输出**：伤害与敌人当前动作强相关，配合能改变敌人意图或拖回合的打法，可以让这张牌在关键回合爆发。
- **性价比**：1 费同时买 <span style="color:#3aa675;font-weight:600">4</span> 回合异常免疫与一笔按场面浮动的伤害——多敌人时远超同费攻击牌，单敌人时相当于"防御 + 小额输出"，下限不亏、上限很高。

## 相关能力

- [异常免疫](/powers/debuff_immune_power.md)（自身获得 4 回合）

## 相关机制

- [意图](/mechanics/intent.md)（伤害按全场意图条数结算）
- [异常状态](/mechanics/abnormal-status.md)（被异常免疫挡下的目标）
- [PP系统](/mechanics/pp-system.md)
- [格挡](/mechanics/block.md)（伤害为攻击伤害，可被格挡抵消）

## 源码

- `SeerCreationWorldWard.cs`