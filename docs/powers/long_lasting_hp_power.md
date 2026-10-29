# 久战

> **归属**：玩家可施加
> **施加来源**：玩家施加——[💚 长效体力药剂](/potions/long_lasting_hp_potion.md)（药水）

<img src="/images/powers/long_lasting_hp_power.png" alt="久战" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 按层数叠加（层数＝剩余回合）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 每回合回复 | 5 点生命 |
| 药剂施加层数 | 3 层 |

## 描述

在你的回合开始时，回复[blue]5[/blue]点[gold]生命值[/gold]，然后层数-[blue]1[/blue]；免疫[gold]固定伤害[/gold]。

## 详细机制

- **每回合回血**：持有者自己回合开始时回复 <span style="color:#3aa675;font-weight:600">5</span> 点生命，随后层数 −1——3 层就是连续 3 个自己的回合各回 5 点。
- **固定伤害免疫**：只拦截由[固定伤害](/powers/fixed_damage_power.md)能力发起的结算（含「意志」转打分支），中毒、烧伤、冻伤、灾厄等 DoT 与吸取/反弹/自伤都不算固定伤害，照常扣血。
- **与药水的另一半叠加**：药剂本身先立即回复 <span style="color:#3aa675;font-weight:600">3</span> 点，再给 3 层久战；同一次使用还会附加 3 回合的[免疫固定伤害](/powers/turn_immune_fixed_damage_power.md)，两条免固互相覆盖、不叠加数值。
- **只回血不免伤**：普通攻击、异常伤害全部照常结算，久战只负责把固定伤害那条线掐掉。

## 小贴士

- **固定伤害怪物的克星**：面对靠固伤压血的敌人，3 层久战等于 15 点净回复 + 全程免固，价值远高于面板。
- **提前喝**：能力只在**自己的回合开始**结算，越早喝越能吃到完整 3 跳；打到一半再喝就只剩 2 跳。
- **回血量不看层数**：每跳固定 5 点，层数只决定还能回几跳。

## 源码

- `SeerLongLastingHpPower.cs`
- `SeerLongLastingHpPotion.cs`
- `SeerFixedDamageHelper.cs`（固定伤害认定口径）
