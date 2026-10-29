# 星赐

<img src="/images/powers/star_blessing_power.png" alt="星赐" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **归属**：玩家能力
- **类型**：增益
- **叠加**：计数型（层数 = 持续回合数，增伤固定 10% 不随层数提高）
- **可见**：是
- **施加来源**：[蓓丽安特](/relics/epic/beliant.md)（遗物）

## 描述

①伤害提升<span style="color:#3aa675;font-weight:600">10%</span>。<br/>②在你的回合结束时，恢复自身随机一张卡牌<span style="color:#3aa675;font-weight:600">2</span>点PP并减少1层。

## 详细机制

- **增伤固定**：无论多少层都只 +10%，层数只决定还能持续几个回合。
- 增伤只对拥有者的**攻击伤害**生效；固定伤害、流失、充能球伤害不受影响。
- **回 PP**：自己回合结束时，从手牌、抽牌堆、弃牌堆里随机选一张 PP 未满的牌，回复 2 点 PP，不超过上限。
- 回完 PP 后层数 −1，归零时能力消失。

## 源码

- `SeerStarBlessingPower.cs`
- `SeerBeliant.cs`（蓓丽安特）
