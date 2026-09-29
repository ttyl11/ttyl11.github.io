# 深渊忏悔

<img src="/images/cards/abyss_confession.png" alt="深渊忏悔" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 5
- **能量消耗**: 2
- **类型**: 攻击
- **稀有度**: 稀有
- **目标**: 单个敌方
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害 | 44 | 44 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 造成<span style="color:#3aa675;font-weight:600">44</span>点伤害。目标有[<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)：回血等同层数；否则伤害翻倍。[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)等同实际伤害。

## 升级后

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 耗能降至<span style="color:#3aa675;font-weight:600">1</span>。造成<span style="color:#3aa675;font-weight:600">44</span>点伤害。目标有[<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)：回血等同层数；否则伤害翻倍。[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)等同实际伤害。

## 详细机制

- **分支判定**：结算前先统计目标身上 <span style="color:#3aa675;font-weight:600">26</span> 种[异常状态](/mechanics/abnormal-status.md)的正向层数总和。
  - 层数 > 0：伤害为 44，并对自身回复等于**该层数总和**的生命。
  - 层数 = 0：伤害翻倍为 88。
- **回血是"总层数"不是"每层 1 血"**：目标身上中毒 5 + 烧伤 3 = 8 层，则回复 8 生命，与伤害无关。
- **堕落 = 实际伤害**：取本次攻击对目标结算的伤害总量（`TotalDamage` = 被格挡部分 + 穿透部分），也就是说**被格挡的伤害同样计入堕落**。打在 50 格挡的敌人身上，堕落同样 +44。
- **回血在伤害之后**：先打伤害、再回血、最后加堕落。
- 目标在伤害结算中死亡时，回血与堕落仍按结算结果处理。

## 小贴士

- **两用牌**：对已挂异常的敌人是"伤害 + 续航"（44 伤害 + 回血）；对干净的目标直接变 88 点单体重击。
- **回血按异常总量，异常流收益极高**：往一个敌人身上堆 30 层中毒/烧伤，一次回 30 血——配合群体上异常的牌，这张牌就是强力奶妈。
- **堕落白拿**：不管打多少血、被格挡多少，只要打出去就按结算伤害加堕落（44 或 88）。它是稳定的堕落供给牌，同时推进 100 层混沌化身进度。
- **PP 5 经济性**：2 费换 44 伤害或 88 伤害 + 回血 + 堕落，性价比较高；升级降到 1 费后属于"低费高效率"档位。
- **升级收益**：仅耗能 2→1，效果数值不变。降费后可与其他牌同回合组合，优先级取决于牌组费用曲线。

## 相关能力

- [堕落](/powers/fallen_power.md)（本卡按实际伤害供给堕落）

## 相关机制

- [PP系统](/mechanics/pp-system.md)（PP 消耗）
- [异常状态](/mechanics/abnormal-status.md)（26 种，决定走哪个分支）
- [混沌化身](/mechanics/chaos-incarnation.md)（堕落满 100 层触发）

## 源码

- `SeerAbyssConfession.cs`
