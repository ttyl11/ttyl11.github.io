# 亡灵泯灭杀

<img src="/images/cards/undead_annihilation.png" alt="亡灵泯灭杀" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 5
- **能量消耗**: 2
- **类型**: 攻击
- **稀有度**: 普通
- **目标**: 敌方单体
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害（无奥斯提） | 23 | 38 |
| 伤害（有奥斯提） | 46 | 76 |
| [堕落](/powers/fallen_power.md)（有奥斯提） | 奥斯提最大生命值 | 奥斯提最大生命值 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 造成<span style="color:#3aa675;font-weight:600">23</span>点伤害。自身有[<span style="color:#d4a017;font-weight:600">奥斯提</span>](/mechanics/summon.md)时伤害翻倍，并[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)奥斯提最大生命。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 造成<span style="color:#3aa675;font-weight:600">38</span>点伤害。自身有[<span style="color:#d4a017;font-weight:600">奥斯提</span>](/mechanics/summon.md)时伤害翻倍，并[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)奥斯提最大生命。

## 详细机制

- **结算顺序**：先判定[奥斯提](/mechanics/summon.md)是否存活 → 造成伤害（有奥斯提则基础伤害翻倍）→ 有奥斯提时[堕落](/powers/fallen_power.md) += 奥斯提最大生命值。
- **「有奥斯提」= 奥斯提存活**：奥斯提死亡或不在场时，翻倍与堕落**都不生效**，本牌退化为 23（升级 38）点的普通攻击。
- **翻倍在攻击结算之前**：先把基础伤害翻倍，再进入攻击伤害结算，所以[力量](/powers/strength_power.md) / 易伤 / [暴击](/mechanics/critical-strike.md)会在翻倍后的数值上继续乘算。
- **堕落量随奥斯提最大生命浮动**：奥斯提的最大生命被抬高（[召唤](/mechanics/summon.md)类强化、加最大生命的效果）后，这一笔堕落也会同步变大。
- **伤害为攻击伤害**：可被[格挡](/mechanics/block.md)抵消。
- **升级只提升基础伤害**：23 → 38（+15），有奥斯提时 46 → 76。

## 小贴士

- **奥斯提体系专属爆发**：这是围绕[奥斯提](/mechanics/summon.md)设计的牌——有奥斯提时 2 费打出 46（升级 76）点，是普通牌里的顶尖倍率；没有奥斯提时只有 23（升级 38）点，回归平庸。
- **堕落量与奥斯提体型挂钩**：把奥斯提的最大生命堆高后再打它，一次就能拿到大量[堕落](/powers/fallen_power.md)，很容易直接推过 100 层触发[混沌化身](/mechanics/chaos-incarnation.md)（抽 3 张 + 魔君接管）。
- **注意堕落是双刃剑**：堕落属于负面资源，每满 100 层会强制[魔君接管](/powers/demon_takeover_power.md)接管手牌；连续打两张就可能失控，出手前先想清楚要不要现在推。
- **先看奥斯提血线**：奥斯提被打死的回合它就会失效——想打爆发就先补召唤、再打这张牌。
- **性价比**：2 费，无奥斯提时 23（升级 38）点平平；有奥斯提时 46（升级 76）点为普通牌顶级。奥斯提体系里是核心爆发牌，其他构筑里则是一张「不能翻倍的高费攻击牌」。

## 相关能力

- [堕落](/powers/fallen_power.md)（有奥斯提时按奥斯提最大生命增加）

## 相关机制

- [召唤](/mechanics/summon.md)（奥斯提存亡决定翻倍与堕落是否生效）
- [格挡](/mechanics/block.md)（伤害为攻击伤害，可被格挡抵消）
- [PP系统](/mechanics/pp-system.md)（每次打出消耗 1 点 PP）
- [混沌化身](/mechanics/chaos-incarnation.md)（堕落满 100 层触发）

## 源码

- `SeerUndeadAnnihilation.cs`