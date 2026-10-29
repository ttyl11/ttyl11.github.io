# 爆发

<img src="/images/powers/burst_power.png" alt="爆发" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **归属**：玩家能力（原版）
- **类型**：增益
- **叠加**：计数型
- **施加来源**：原版卡牌「爆发」；mod 遗物[科德布鲁](/relics/common/codblru.md)（本回合未受到未格挡伤害时，回合结束获得 1 层）

## 描述

接下来等同于层数的**技能牌**，每张额外打出 <span style="color:#3aa675;font-weight:600">1</span> 次。回合结束时移除。

## 详细机制

- 只对**技能牌**生效；攻击牌、能力牌、状态牌不消耗层数。
- 每打出 1 张技能牌，该牌本次打出次数 +1，同时层数 −1。
- 额外打出的是**同一张牌的重放**，不是复制一张新手牌；牌的费用与 PP 仍按规则结算。
- 层数用完后能力立即消失；即使还有剩余层数，拥有者回合结束时也会被移除。

## 源码

- 原版 `BurstPower.cs`
- `SeerCodblru.cs`（科德布鲁）
