# 弹簧能力

> **归属**：玩家持有
> **施加来源**：[弹簧](/cards/character/spring.md)（卡牌）

<img src="/images/powers/spring_bonus_power.png" alt="弹簧能力" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 叠加（Counter）
- **可见**: 是
- **血条预测**: 否

### 数值参数

| 参数 | 说明 |
|---|---|
| Bonus（每回合额外抽牌 / 额外能量） | 未升级 2，升级后 3 |
| Amount（图标数字） | 剩余持续回合数 |

## 描述

每回合开始时，多抽 <span style="color:#3aa675;font-weight:600">{Bonus}</span> 张牌并多获得 <span style="color:#3aa675;font-weight:600">{Bonus}</span> 点[能量](/mechanics/energy.md)，持续 <span style="color:#3aa675;font-weight:600">{Amount}</span> 回合。每回合结束 Amount − 1，归零时能力移除。

## 详细机制

- **每回合触发**：
  - 玩家回合开始时，先执行抽牌阶段（多抽 Bonus 张），再执行能量重置（多获 Bonus 点），最后执行回合结束（Amount − 1）
  - Amount > 0 时每次玩家回合都触发，Amount 归零时能力自动移除

- **多张弹簧的叠加规则（只加回合，不加数值）**：
  - 每张弹簧施加此能力时 Amount + 1，Bonus 值不变
  - 重复打出弹簧只延长持续时间，每回合多抽/多能量的数量始终保持该弹簧时的 Bonus 值（升级弹簧 Bonus = 3，未升级 = 2）
  - 例如：打出 2 张未升级弹簧 → Amount = 2，Bonus = 2，持续 2 回合，每回合多抽 2 张牌、多获 2 点能量
  - 例如：打出 1 张未升级 + 1 张升级弹簧 → Amount = 2，Bonus 取最后一次施加的值（取决于顺序）
  - 图标数字显示 Amount（剩余回合数），直观反映持续时间

- **与弹簧卡牌的关联**：此能力由[弹簧](/cards/character/spring.md)打出时施加，Bonus 取决于该弹簧是否升级

## 小贴士

- **叠加只加回合**：多张弹簧叠加时 Amount 累加，但 Bonus 值不变——即多张弹簧只延长持续时间，不会让每回合的额外抽牌/能量量翻倍。
- **升级影响 Bonus 而非 Amount**：升级弹簧只将 Bonus 从 2 提升到 3，每次施加仍只 +1 回合。
- **先抽牌再打牌**：能力在回合开始的抽牌阶段生效，额外抽到的牌可以在当回合打出。
- **与奇巧 Combo 联动**：在同一回合内通过奇巧连锁打出多张弹簧，Amount 会累加，下一回合起每回合都能获得稳定的额外资源。

## 相关卡牌

- [弹簧](/cards/character/spring.md)

## 相关遗物

- [克雷扎](/relics/rare/keiza.md)（每回合将一张牌变为弹簧）

## 源码

- `SeerSpringBonusPower.cs`
