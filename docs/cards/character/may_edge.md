# 五月的锋芒

<img src="/images/cards/may_edge.png" alt="五月的锋芒" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 1
- **能量消耗**: 1
- **类型**: 能力
- **稀有度**: 罕见
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| PP | 1 | 1 |
| 最大PP | 1 | 1 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 自身打出[<span style="color:#d4a017;font-weight:600">暴击</span>](/powers/critical_strike_power.md)时，[<span style="color:#d4a017;font-weight:600">先制</span>](/powers/first_strike_power.md)+<span style="color:#3aa675;font-weight:600">1</span>。

## 升级后

PP: 1/1 自身打出<span style="color:#d4a017;font-weight:600">暴击</span>时，<span style="color:#d4a017;font-weight:600">先制</span>+1。

## 小贴士

- **暴击转先制的正循环引擎**：每次打出[暴击](/powers/critical_strike_power.md)（概率 = 当前暴击率，由[命中](/powers/accuracy_power.md)正层提供：每层 <span style="color:#3aa675;font-weight:600">+10%</span>；<span style="color:#3aa675;font-weight:600">1.5</span> 倍伤害）就获得 <span style="color:#3aa675;font-weight:600">1</span> 层[先制](/powers/first_strike_power.md)（每层让下张牌减 <span style="color:#3aa675;font-weight:600">1</span> 费）。暴击越多 → 先制越多 → 后续高费牌越便宜 → 更容易打出更多攻击 → 更多暴击机会，形成正循环。
- **暴击机制不需要这张牌提供**：暴击是底层引擎能力——[命中](/powers/accuracy_power.md)正层每层 +<span style="color:#3aa675;font-weight:600">10%</span> 暴击率、[锁定](/powers/lock_one_power.md)提供下限，有来源即全程在线。这张牌只负责"暴击时追加先制奖励"，本身不改变暴击率。
- **每次攻击只触发一次**：即便一次攻击打多个目标（如群体攻击），暴击也只加 <span style="color:#3aa675;font-weight:600">1</span> 层先制——不会因为打多个目标就多次累积。
- **是增益，能被消增益清除**：锋芒是增益类型能力，整场战斗持续，但被消除增益的效果会直接清掉，暴击不再转先制。
- **暴击率决定收益上限**：这张牌的价值完全取决于暴击率。基础暴击率为 0，全靠[命中](/powers/accuracy_power.md)正层（每层 +<span style="color:#3aa675;font-weight:600">10%</span>）——命中 2 层时平均每 <span style="color:#3aa675;font-weight:600">5</span> 次攻击触发一次先制；配合[锁定I](/powers/lock_one_power.md)（50%）或任意"必定暴击"来源（[锁定II](/powers/lock_two_power.md)、[幻影蝶](/relics/uncommon/phantom_butterfly.md)、[冲天霸气](/powers/tiger_crit_counter_power.md)等，必暴同样触发本牌）时，每次攻击都能白拿先制，正循环全速运转。
- **升级固有让首回合就能启动**：升级后获得[固有](/mechanics/innate.md)，战斗开始即入手牌。能力牌最怕抽不到，固有直接解决启动问题——首回合打出，后续全程享受暴击转先制。
- **性价比**：<span style="color:#3aa675;font-weight:600">1</span> 费换整场战斗暴击转先制，暴击流派加速器的合理定价，升级固有让启动更快。

## 相关能力

- [锋芒](/powers/may_edge_power.md)：增益，自身打出暴击时先制 +1
- [暴击](/powers/critical_strike_power.md)：有概率造成 1.5 倍伤害（概率 = 实时暴击率，由命中提供）
- [先制](/powers/first_strike_power.md)：增益，每层使下一张牌耗能 -1

## 源码

- `SeerMayEdge.cs`
