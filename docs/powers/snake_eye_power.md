# 天蛇之瞳

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[缪斯](/monsters/boss/muse_monster.md)

<img src="/images/powers/snake_eye_power.png" alt="天蛇之瞳" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 无类型（不参与增益/减益分类，不可被驱散/净化）
- **叠加方式**: 叠加
- **可见**: 是

## 描述

①每当你打出<span style="color:#3aa675;font-weight:600">7</span>张牌，随机注视你<span style="color:#3aa675;font-weight:600">1</span>张牌（消耗牌堆除外）。<br/>②被注视的牌费用变为X；打出时消耗你所有能量，PP清零并进入消耗牌堆。<br/>③此能力存在时，缪斯施加的<span style="color:#d4a017;font-weight:600">睡眠</span>受到伤害不会解除，而是-<span style="color:#3aa675;font-weight:600">1</span>层。

## 详细机制

- **每 7 张注视一次**：玩家每打出 7 张牌，计数清零，并从抽牌堆、手牌、弃牌堆中随机注视 1 张牌（不含消耗堆）。
- **可注视的牌**：排除状态牌、诅咒牌、带「不可打出」的牌；已注视的牌不会重复选中。
- **注视牌变 X 费**：费用显示为 X，打出时消耗当前全部能量；打出后 PP 清空并进入消耗牌堆。
- **可同时多张**：不同轮次会累积注视不同的牌，可能同时有多张 X 费牌。
- **阈值可被降低**：安魂曲会把 7 张的门槛降低（最低 1 张）。
- **睡眠保护**：此能力在场时，缪斯施加的睡眠受击只减 1 层，不会一次被打醒。

## 源码

- `SeerSnakeEyePower.cs`
