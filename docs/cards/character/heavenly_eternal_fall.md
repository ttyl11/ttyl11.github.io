# 天神永堕

<img src="/images/cards/heavenly_eternal_fall.png" alt="天神永堕" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌

- **最大PP**: 5

- **能量消耗**: 3（升级后 2）

- **类型**: 技能

- **稀有度**: 普通

- **目标**: 自己

- **可升级**: 是（1 级）

- **关键词**: 无

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 能量消耗 | 3 | 2 |
| 每张堕落 | 26 | 26 |
| PP | 5 | 5 |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 升级并打出手中所有牌，每打出一张，[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">26</span>。

## 升级后

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 升级并打出手中所有牌，每打出一张，[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">26</span>。

## 工作机制

- **批量升级**：打出时先将手中所有可升级的牌升级（免费的升级祭）。

- **免费自动打出**：随后将手中所有可打出的牌自动打出，**不消耗能量与星费**——即使剩余能量不足支付某张牌的费用，该牌依旧会免费打出（判定只看"除资源不足外"的硬性不可打原因）。X 费牌按 **X=0** 结算。手牌里的攻击/技能被免费打光，等于一波免费的爆发循环。

- **堕落 26/张（是供给也是负债）**：每自动打出一张牌，[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)+<span style="color:#3aa675;font-weight:600">26</span>。手牌越多叠得越快——但堕落是负面层数，连续几波自动打出很容易把层数推过百位，触发[魔君接管](/powers/demon_takeover_power.md)强控乱打。

## 小贴士

- **免费打出手牌**：本牌自身 3 费，但手牌会被全部免费打出（不耗能量），与[魔君接管](/powers/demon_takeover_power.md)的自动出牌机制思路相反——接管是被动失控，这是主动把手牌一口气打空的强爆发。

- **先升级再打出**：所有牌先免费升级——伤害牌变强、费用变低，再免费打出，双重收益一回合兑现。

- **堕落按张结算**：一张牌 +26，五张手牌就 +130——直接跨过 100 层阈值触发[魔君接管](/powers/demon_takeover_power.md)，属于"打出半天又被迫接管"的连锁风险。

- **升级降费**：3→2 费，配合免费打出循环，进入多回合连开节奏更顺畅。

- **注意可打出筛选**：打出的是"除资源不足外一切可打出"的牌——能量不够、星费不够的牌照常免费打出；留在手里的只有：PP 归 0 的赛尔卡、状态/诅咒等不可打出牌、被规则阻止或无合法目标的牌。

## 相关能力

- [堕落](/powers/fallen_power.md)（每自动打出一张+26）

## 相关机制

- [PP系统](/mechanics/pp-system.md)（PP 消耗）

## 源码

- `SeerHeavenlyEternalFall.cs`