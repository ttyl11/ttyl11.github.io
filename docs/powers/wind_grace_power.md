# 予风余芳

> **归属**：玩家可施加
> **施加来源**：玩家获得——[予风余芳](/cards/character/wind_grace.md)（卡牌）

<img src="/images/powers/wind_grace_power.png" alt="予风余芳" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 叠加（Counter，层数 = 剩余回合）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| AbnormalChance | 20 |
| AbnormalTurns | 2 |

## 描述

持续<span style="color:#3aa675;font-weight:600">层数</span>回合：每打出一张牌，有<span style="color:#3aa675;font-weight:600">20</span>%概率为对手附加随机<span style="color:#d44;font-weight:600">异常状态</span><span style="color:#3aa675;font-weight:600">2</span>层。

## 详细机制

- **触发条件**：只有**能力持有者**打出的牌才计数（队友打牌不触发）。
- **随机目标**：每次触发从存活敌人中随机选 1 个，再从 23 种随机异常池中随机选 1 种施加 2 层。
- **每牌独立判定**：同一张牌只判定一次；多段攻击牌不会因为段数多而多次判定。
- **无敌人不触发**：场上没有可命中敌人时直接跳过，不消耗概率。
- **持续时间**：在持有者所在阵营回合结束时 -1；卡牌默认施加 2 层，即覆盖 2 个己方回合。

## 相关卡牌

- [予风余芳](/cards/character/wind_grace.md)（施加来源）

## 源码

- `SeerWindGracePower.cs`
