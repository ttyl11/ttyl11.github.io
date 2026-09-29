# 死

<img src="/images/cards/death.png" alt="死" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 状态牌
- **能量消耗**: 不可打出
- **类型**: 状态
- **稀有度**: 状态
- **目标**: 无
- **关键词**: [不能被打出](/mechanics/unplayable.md)
- **可升级**: 否

### 数值参数

| 参数 | 数值 |
|---|---|
| 伤害 | 5 |
| 生命百分比 | 50% |

## 描述

抽到此牌时，生命><span style="color:#3aa675;font-weight:600">50</span>%：受到<span style="color:#3aa675;font-weight:600">5</span>点伤害。

## 详细机制

- **[不能被打出](/mechanics/unplayable.md)**：无法主动打出，效果在**抽到瞬间**自动结算。
- **触发条件**：仅当自身当前生命**高于 50%** 最大生命时，受到 <span style="color:#3aa675;font-weight:600">5</span> 点伤害。
- **伤害性质**：该伤害**无视[格挡](/mechanics/block.md)**，也不受增伤 / 减伤影响（属于固定数值的生命损失）。
- **可重复触发**：抽到后正常留在手牌，回合结束弃入[弃牌堆](/mechanics/discard_pile.md)；洗牌后再抽到会**再次触发**。
- **来源**：[生死无常](/cards/character/life_and_death_impermanence.md)在战斗开始时把此牌放入弃牌堆。
- 不可升级。

## 小贴士

- **与"生"互补**：血量 >50% 时抽到扣 5 血，血量 ≤50% 时抽到不触发（安全）。
- **两张牌共同把血量拉向 50%**：高血被惩罚、低血被奖励——这套设计鼓励玩家维持在"半血上下"的区间。
- **无视格挡**：满格挡也挡不住这 5 点，会打断"满血无伤"的节奏。
- **不能打出、不能升级**：只能靠弃牌 / 消耗类手段处理掉，牌堆里越少越干净。

## 相关卡牌

- [生](/cards/status/birth.md)（生命 <50% 时抽到回 5 生命）
- [生死无常](/cards/character/life_and_death_impermanence.md)（唯一来源）

## 相关机制

- [不能被打出](/mechanics/unplayable.md)（无法主动打出）
- [格挡](/mechanics/block.md)（该伤害无视格挡）
- [弃牌堆](/mechanics/discard_pile.md)（打出/弃置后的存放位置）

## 源码

- `SeerDeath.cs`
