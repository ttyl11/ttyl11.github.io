# 生

<img src="/images/cards/birth.png" alt="生" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

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
| 回复数量 | 5 |
| 生命百分比 | 50% |

## 描述

抽到此牌时，生命<<span style="color:#3aa675;font-weight:600">50</span>%：恢复<span style="color:#3aa675;font-weight:600">5</span>生命。

## 详细机制

- **[不能被打出](/mechanics/unplayable.md)**：无法主动打出，效果在**抽到瞬间**自动结算。
- **触发条件**：仅当自身当前生命**低于 50%** 最大生命时，恢复 <span style="color:#3aa675;font-weight:600">5</span> 点生命。
- **可重复触发**：抽到后正常留在手牌，回合结束弃入[弃牌堆](/mechanics/discard_pile.md)；洗牌后再抽到会**再次触发**。
- **来源**：[生死无常](/cards/character/life_and_death_impermanence.md)在战斗开始时把此牌放入弃牌堆。
- 不可升级。

## 小贴士

- **残血时的白拿回复**：血量 <50% 时每抽到一次回 5 血，是被动续航。
- **血量 ≥50% 时是纯占位**：抽到没有任何效果，只会挤占手牌——属于牌堆污染。
- **不能打出、不能升级**：只能靠弃牌 / 消耗类手段处理掉。
- **与[死](/cards/status/death.md)互补**：低血给"生"、高血给"死"，两张牌共同把血量往 50% 附近拉。

## 相关卡牌

- [死](/cards/status/death.md)（生命 >50% 时抽到扣 5 血）
- [生死无常](/cards/character/life_and_death_impermanence.md)（唯一来源）

## 相关机制

- [不能被打出](/mechanics/unplayable.md)（无法主动打出）
- [弃牌堆](/mechanics/discard_pile.md)（打出/弃置后的存放位置）

## 源码

- `SeerBirth.cs`
