# 孤注

> **归属**：玩家可施加
> **施加来源**：[孤洁之傲](/cards/character/proud_solitude.md)（技能牌——按持续回合数施加层数）

<img src="/images/powers/extra_draw_power.png" alt="孤注" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 计数（Counter）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 每回合额外抽牌（硬编码） | 2 |

> 注：本能力没有 `DynamicVar`；+2 由 `ModifyHandDraw` 硬编码。游戏内本地化文本仍写「额外抽 1 张」，与源码 +2 不一致。

## 描述

自身回合开始时，额外抽<span style="color:#3aa675;font-weight:600">1</span>张牌。<br/>自身回合结束时层数-<span style="color:#3aa675;font-weight:600">1</span>。

## 详细机制

- **层数 = 持续回合数**：在自身回合内施加 N 层时，打出当回合结束先减 1 层，实际覆盖接下来 N−1 个自身回合的开始（N=3 时为 2 个回合）。
- **抽牌阶段 +2**：每回合开始时，在基础抽牌数之上 +2 张（`ModifyHandDraw`）。
- **不按层数加倍**：无论剩几层，每次抽牌都只 +2；层数只决定持续多久。
- **递减时机**：**自身回合结束时** -1 层，归零后移除。
- **当回合不生效**：抽牌发生在回合开始，所以打出这张牌的当回合不会再额外抽。
- **叠加**：多次施加会累加层数（延长持续回合），不会变成每回合 +4。

## 小贴士

- **[孤洁之傲](/cards/character/proud_solitude.md) 默认按 3 层施加**：因打出当回合结束先减 1 层，实际只有接下来 2 个回合开始各多抽 2 张，合计多抽 4 张牌。
- **手牌越多的卡组收益越高**：需要大量手牌筛选（弃牌流、组合技、手牌数相关效果）的构筑能把这 4 张额外牌变成实打实的价值。
- **注意手牌上限**：抽牌数超过手牌上限时会溢出浪费，配手牌上限提升效果（如[圣灵悲魂](/powers/hand_size_up_power.md)）能吃掉溢出。

## 相关卡牌

- [孤洁之傲](/cards/character/proud_solitude.md)（唯一施加来源）

## 相关机制

- [抽牌堆](/mechanics/draw_pile.md)（额外抽牌的来源）
- [手牌](/mechanics/hand.md)（抽牌目标）

## 源码

- `SeerProudSolitude.cs`（`SeerExtraDrawPower`）
