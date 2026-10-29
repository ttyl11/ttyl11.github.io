# 天诛秽染

> **归属**：怪物施加给玩家
> **施加来源**：[不羁·弗里德](/monsters/boss/bujifulide_monster.md)『天诛地罚』（对每个敌人各 1 层）
> **类型**：减益（Debuff）
> **叠加方式**：不叠加
> **可见**：是

<img src="/images/powers/hand_status_fill_power.png" alt="天诛秽染" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

### 数值参数

| 参数 | 数值 |
|---|---|
| FillCount | 10 |

## 描述

下回合开始时，敌人手牌被随机[gold]状态牌[/gold]补满（最多[blue]10[/blue]张），随后移除。

## 详细机制

- **触发时点**：被施加后的**下一个玩家回合开始时**，一次性结算。
- **补牌口径**：从原版状态牌池随机抽取，补充数量 = min(10, 当前手牌上限 − 当前手牌数)，不会把手牌挤到上限之外。
- **随机**：每张独立从状态牌池抽取（同步随机数）。
- **结算后移除**：无论补了几张，结算完立即移除本能力。

## 源码

- `SeerHandStatusFillPower.cs`
