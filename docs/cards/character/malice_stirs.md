# 恶念初现

<img src="/images/cards/malice_stirs.png" alt="恶念初现" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 10
- **能量消耗**: 2
- **类型**: 攻击
- **稀有度**: 罕见
- **目标**: 所有敌方
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害 | 24 | 36 |
| 堕落比例 | 39% | 39% |
| PP | 10 | 10 |
| 最大PP | 10 | 10 |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> 对所有敌人造成<span style="color:#3aa675;font-weight:600">24</span>点伤害。生命>自身的敌人伤害翻倍。[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">39%</span>。

## 升级后

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> 对所有敌人造成<span style="color:#3aa675;font-weight:600">36</span>点伤害。生命>自身的敌人伤害翻倍。[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">39%</span>。

## 详细机制

- **全体攻击**：对所有可命中敌人逐个结算，每个目标独立判定是否翻倍。
- **翻倍判定**：比较**结算瞬间**的当前生命——目标当前生命 **高于** 自身当前生命时，该目标受到的伤害 ×2（24→48，升级 36→72）。生命相等或更低时不翻倍。
- **堕落收益**：`floor(当前堕落 × 39%)`，例如堕落 300 层 → +117 层。堕落累计满 100 层会触发[混沌化身](/mechanics/chaos-incarnation.md)。
- 只有翻倍判定看生命，堕落收益与敌人生命无关。

## 小贴士

- **专打"比自己厚"的敌人**：24 点基础伤害对高血精英/Boss 直接翻倍到 48（升级 72）。开场上满血敌人时收益最高，越往后敌人掉血越可能不触发翻倍。
- **堕落按比例滚雪球**：堕落越多，这张牌回馈的堕落越多（39% 比例）。堕落 600 层时一次 +234，超过两次混沌化身触发线。
- **与自身血量的取舍**：保持自身低血能让更多敌人满足"生命 > 自身"，但低血风险高。若自身是满血，多数敌人都不触发翻倍——所以这张牌的强度与当前局势强相关。
- **PP 10 限制使用频率**：适合作为关键回合的群体爆发，而不是每回合的常规输出。
- **升级收益**：伤害 24→36（+12），翻倍后 48→72（+24），提升非常直接。

## 相关能力

- [堕落](/powers/fallen_power.md)（本卡的堕落供给与 100 层触发机制）

## 相关机制

- [PP系统](/mechanics/pp-system.md)（PP 消耗）
- [混沌化身](/mechanics/chaos-incarnation.md)（堕落满 100 层触发）

## 源码

- `SeerMaliceStirs.cs`
