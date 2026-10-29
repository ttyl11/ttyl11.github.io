# 云玩家

<img src="/images/cards/cloud_gamer.png" alt="云玩家" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 诅咒牌
- **能量消耗**: 3
- **类型**: 诅咒
- **稀有度**: 诅咒
- **关键词**: [固有](/mechanics/innate.md)、[保留](/mechanics/retain.md)、[消耗](/mechanics/exhaust.md)
- **可升级**: 否

### 数值参数

| 参数 | 数值 |
|---|---|
| 自动移除的战斗数 | 4 |

## 描述

<span style="color:#3aa675;font-weight:600">4</span> 场战斗后从牌组移除。此牌在[手牌](/mechanics/hand.md)中时，所有 [PP](/mechanics/pp-system.md) 卡牌无法打出。

## 小贴士

- **每场固定收你"3 费 + 一个手牌位"**：[固有](/mechanics/innate.md)让它开局就在手里，[保留](/mechanics/retain.md)让它一直赖着——只要卡组里有真 PP 牌，它就把你的 PP 牌全部封死，直到你花 <span style="color:#3aa675;font-weight:600">3</span> 费把它打出去。所以问题不是"要不要付"，而是"什么时候付"。
- **付费时机自己挑，别一开局就急着打**：先在不需要 PP 的回合用普通牌过渡，把解封的 3 费**留到"这回合必须打 PP 核心牌"的时候**再付——这样那 3 费花在最该花的回合上。
- **它只封"真 PP 牌"，不封打击防御**：本 mod 的打击、防御没有 PP，照常能打；被卡的只有消耗 PP 的牌。所以纯普通牌 / 固定伤害流几乎不受影响，这张诅咒对他们只是占一个手牌位。
- **只管手动出牌**：被效果自动打出的 PP 牌不受封锁（如瓦库代打），它只拦你亲手打出的 PP 牌。
- **4 场后它自己走**：卡组里每打完一场计数 +1，满 <span style="color:#3aa675;font-weight:600">4</span> 场自动移除。**长期只需熬 4 场**，不必专门花遗物/卡牌去处理它。
- **性价比**：3 费 = 本场 PP 输出权的门票。PP 依赖度越高越不能省；不靠 PP 的角色可以完全无视它。

## 相关机制

- [手牌](/mechanics/hand.md)（封锁生效位置）
- [固有](/mechanics/innate.md) / [保留](/mechanics/retain.md)（开局必在、常驻手牌）
- [消耗](/mechanics/exhaust.md)（打出后离场）
- [PP 系统](/mechanics/pp-system.md)（被封锁的对象）

## 源码

- `SeerCloudGamer.cs`
- `SeerCloudGamerPower.cs`