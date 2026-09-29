# 额外抽牌

> **归属**：玩家可施加
> **施加来源**：
> - [孤洁之傲](/cards/character/proud_solitude.md)（技能牌——按持续回合数施加层数）

<img src="/images/powers/extra_draw_power.png" alt="额外抽牌" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 计数（Counter）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 每回合额外抽牌 | 2 |

## 描述

每回合开始时多抽 <span style="color:#3aa675;font-weight:600">2</span> 张牌。回合结束减 <span style="color:#3aa675;font-weight:600">1</span> 层。

## 详细机制

- **层数 = 持续回合数**：施加 N 层，就覆盖接下来 N 个自身回合。
- **抽牌阶段 +2**：每回合的抽牌数量在基础 5 张之上 **+2 张**（通过 `ModifyHandDraw` 修改抽牌数）。
- **递减时机**：**自身回合结束时** -1 层，归零后移除。
- **叠加**：多次施加会累加层数（延长持续回合），每层都是同一效果、不叠倍率。

## 小贴士

- **[孤洁之傲](/cards/character/proud_solitude.md) 默认给 3 回合**：等于连续 3 个回合每回合多抽 2 张，合计多抽 6 张牌。
- **手牌越多的卡组收益越高**：需要大量手牌筛选（弃牌流、组合技、手牌数相关效果）的构筑能把这 6 张额外牌变成实打实的价值。
- **注意手牌上限**：抽牌数超过手牌上限时会溢出浪费，配手牌上限提升效果（如[圣灵悲魂](/powers/hand_size_up_power.md)）能吃掉溢出。
- **持续时间不叠加倍率**：反复施加只延长回合数，不会变成每回合 +4。

## 相关卡牌

- [孤洁之傲](/cards/character/proud_solitude.md)（唯一施加来源）

## 相关机制

- [抽牌堆](/mechanics/draw_pile.md)（额外抽牌的来源）
- [手牌](/mechanics/hand.md)（抽牌目标）

## 源码

- `SeerExtraDrawPower.cs`（定义于 `SeerProudSolitude.cs` 内）
- `SeerProudSolitude.cs`
