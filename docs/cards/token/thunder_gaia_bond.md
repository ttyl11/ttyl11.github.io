# 雷盖之交

<img src="/images/cards/thunder_gaia_bond.png" alt="雷盖之交" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 衍生牌
- **最大PP**: 1
- **能量消耗**: 0
- **类型**: 能力
- **稀有度**: 衍生
- **目标**: 无
- **可升级**: 是（1 级）
- **关键词**: [固有](/mechanics/innate.md)、[保留](/mechanics/retain.md)（升级后获得）
- **来源**: 事件「混沌深渊的宿命对决」选择「驰援战神联盟」（同时加入 1 张随机赛尔诅咒）

### 数值参数

| 参数 | 数值 |
|---|---|
| PP | 1 |
| 最大PP | 1 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 每打出一张攻击牌，[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)加入<span style="color:#3aa675;font-weight:600">1</span>张赛尔技能牌；每打出一张技能牌，[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)加入<span style="color:#3aa675;font-weight:600">1</span>张赛尔攻击牌。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 每打出一张攻击牌，[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)加入<span style="color:#3aa675;font-weight:600">1</span>张赛尔技能牌；每打出一张技能牌，[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)加入<span style="color:#3aa675;font-weight:600">1</span>张赛尔攻击牌。

## 小贴士

- **🔑 攻击与技能互为永动机**：打出后自身获得 <span style="color:#3aa675;font-weight:600">1</span> 层[雷霆盖亚之契](/powers/thunder_gaia_bond_power.md)（增益，持续整场）。打出攻击牌 → 手牌**末尾**补 <span style="color:#3aa675;font-weight:600">1</span> 张技能牌；打出这张技能牌 → 又补 <span style="color:#3aa675;font-weight:600">1</span> 张攻击牌——只要还有能量，手牌永远打不空，每打一张回一张，长战斗里收益指数级放大。
- **生成的牌来自整个赛尔卡池，不是你的牌组**：每次生成是从**赛尔卡池中已解锁、可在战斗中生成**的牌里随机抽一张对应类型的牌加入手牌——你构筑里没拿过的牌也能白嫖到手，甚至能摸到高费强牌。筛选会排除基础、先古、事件稀有度的牌；缺点是无法控制生成内容，关键回合可能只来一张用不上的牌。
- **只有攻击/技能触发**：打出攻击牌或技能牌才会补牌；能力、状态、诅咒牌（包括雷盖之交自己）都不会生成新牌。想维持循环，手里至少要保留一张攻击或技能牌作为"火种"。
- **生成的是临时复制**：补进手牌的牌只在本场战斗有效，战斗结束后消失，不会进入牌组。
- **能量是唯一的瓶颈**：生成的牌正常消耗能量打出——契约本身不提供能量。0 费牌、能量引擎（[能量供给](/cards/character/energy_supply.md)类）越多，永动机转得越快；能量见底时契约只是干转。
- **PP 1/1，一场只能启动一次**：打出即获得整场契约，重复拿这张牌没有额外收益；没打出去之前它只是占 <span style="color:#3aa675;font-weight:600">1</span> 个手牌位的死牌。
- **升级价值：固有 + 保留**：升级后获得[固有](/mechanics/innate.md)（开局必定在手，第一回合就能 <span style="color:#3aa675;font-weight:600">0</span> 费启动永动机）和[保留](/mechanics/retain.md)（回合结束不弃，留到需要的回合再打）。

## 相关能力

- [雷霆盖亚之契](/powers/thunder_gaia_bond_power.md)（打出攻击/技能牌时随机将另一类型的牌加入手牌）

## 源码

- `SeerThunderGaiaBond.cs`
- `SeerThunderGaiaBondPower.cs`
