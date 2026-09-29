# 尘封八荒

<img src="/images/cards/dust_sealed_eight_wastes.png" alt="尘封八荒" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 10
- **能量消耗**: 1
- **类型**: 攻击
- **稀有度**: 稀有
- **目标**: 单个敌方
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害 | 10 | 16 |
| 堕落阈值 | 100 | 100 |
| PP | 10 | 10 |
| 最大PP | 10 | 10 |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> [<span style="color:#d44;font-weight:600">消强</span>](/mechanics/xiao_qiang.md)、[<span style="color:#d44;font-weight:600">反弱</span>](/mechanics/fan_ruo.md)。造成<span style="color:#3aa675;font-weight:600">10</span>点伤害。每[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">100</span>：[<span style="color:#d4a017;font-weight:600">逝者亡语</span>](/powers/death_whisper_power.md)+<span style="color:#3aa675;font-weight:600">1</span>。

## 升级后

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> [<span style="color:#d44;font-weight:600">消强</span>](/mechanics/xiao_qiang.md)、[<span style="color:#d44;font-weight:600">反弱</span>](/mechanics/fan_ruo.md)。造成<span style="color:#3aa675;font-weight:600">16</span>点伤害。每[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">100</span>：[<span style="color:#d4a017;font-weight:600">逝者亡语</span>](/powers/death_whisper_power.md)+<span style="color:#3aa675;font-weight:600">1</span>。

## 详细机制

- **消强**：移除目标[全属性](/mechanics/all_attributes.md)（力量 / 防御 / 命中 / 速度）四项的**正向层数**（负向层数不受影响）。逐项检查，只清掉大于 0 的那几项。
- **反弱**：把自身四维属性的**负向层数**转为正向，且数值为绝对值 **×2**（例如自身 -3 力量 → 一次性 +6 力量）。
- **结算顺序**：消强 → 反弱 → 造成伤害。因此本次伤害能吃到"反弱"刚获得的属性增益。
- **逝者亡语收益**：按 `floor(当前堕落 ÷ 100)` 计算层数，例如堕落 350 层 → 获得 3 层。
- **上限**：逝者亡语最高 <span style="color:#3aa675;font-weight:600">12</span> 层，超出部分不叠加（已有 10 层时只补 2 层）。

## 小贴士

- **一张牌同时处理攻防属性差**：对敌"消强"剥掉对方的四维提升，对己"反弱"把被削的四维一次翻回双倍——面对会给自己叠力量/防御的敌人时，这张牌等于同时完成解场和自身强化。
- **堕落越高收益越大**：堕落 1000 层时一次拿到 10 层逝者亡语（12 层封顶）。它是"堕落 → 逝者亡语 → 免费重放"这条链上的关键跳板。
- **[逝者亡语](/powers/death_whisper_power.md)的复利**：每层提供 6% 概率免费重放打出的牌（12 层 = 72%），且达到 6 层后打出"带堕落"的牌会[先制](/powers/first_strike_power.md)+1。所以本卡不只是输出牌，更是整套重放引擎的启动器。
- **PP 10 的代价**：满 PP 只能打出一次，需要长期养成 PP 才能反复使用，定位偏中后期。
- **升级收益**：仅伤害 10→16，对机制无影响。若牌组定位是刷逝者亡语层数，升级优先级可以后置。

## 相关能力

- [逝者亡语](/powers/death_whisper_power.md)（每层 6% 免费重放，6 层起带堕落牌先制+1）
- [堕落](/powers/fallen_power.md)（本卡的层数折算来源）
- [防御](/powers/defense_power.md) / [命中](/powers/accuracy_power.md) / [速度](/powers/speed_power.md)（消强与反弱作用的属性）

## 相关机制

- [PP系统](/mechanics/pp-system.md)（PP 消耗）
- [消强](/mechanics/xiao_qiang.md)（移除敌方四维正向层数）
- [反弱](/mechanics/fan_ruo.md)（自身四维负向层数转正并翻倍）
- [全属性](/mechanics/all_attributes.md)（力量/防御/命中/速度四项）

## 源码

- `SeerDustSealedEightWastes.cs`
