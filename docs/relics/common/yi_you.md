# 伊优

<img src="/images/relics/seer_yi_you.png" alt="伊优" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 普通

### 数值参数

| 参数 | 数值 |
|---|---|
| 抽牌数 | 1 |

## 描述

打出[暴击](/powers/critical_strike_power.md)时，抽<span style="color:#3aa675;font-weight:600">1</span>张牌。

## 风味文字

<span style="color:#d44;font-weight:600">伊优。</span>

## 详细机制

- **只响应自己的攻击伤害**：`dealer` 必须等于持有者的生物，且 `TotalDamage > 0`——自身打不出伤害的攻击不触发；队友/敌方的攻击也不触发。
- **必须是"受攻击强度影响"的伤害**：经 `IsPoweredAttack` 过滤，只有吃攻击加成（力量等）的攻击伤害才可能暴击；技能/非普攻类伤害不算。
- **暴击判定两个来源**：①自身携带[暴击](/powers/critical_strike_power.md)且本次为暴击（`IsCurrentAttackCritical`）；②带有[必定暴击](/powers/next_guaranteed_crit_power.md)（如黎羽幻生）时也视为暴击。
- **时机要点**：判定放在 `AfterDamageGiven` 阶段——此时暴击标记尚未被 `AfterAttack` 重置，能正确读到本次是否为暴击；若放到 `AfterCardPlayed` 会因标记已清零而失效。
- **多段暴击多抽**：每段实际造成暴击伤害的攻击都会单独触发抽 1，多段暴击牌一次能抽多张。

## 小贴士

- **配合多段攻击收益翻倍**：一次多段攻击若每段都暴击，可以连抽多张——带多段/连击的暴击流派能把这件遗物的过牌效率拉满。
- **必定暴击也全吃**：黎羽幻生等施加[必定暴击](/powers/next_guaranteed_crit_power.md)的牌，全体攻击伤害×1.5 且已算作暴击，同样触发伊优抽牌。
- **抽牌本身即是收益**：普通稀有度下，"暴击免疫额外过牌"等于给暴击流白送手牌，不卡手、不耗费。
- **别裸用**：伊优的强度完全取决于牌组里暴击牌的密度——暴击流/必定暴击流最契合，没有稳定暴击来源的牌组单挂它时利用率偏低。
- **性价比**：普通稀有度合理——稳定性取决于暴击触发率，属于"暴击体系成型后接近常驻过牌"的锦上添花小件。

## 相关能力

- [暴击](/powers/critical_strike_power.md)（触发来源）
- [必定暴击](/powers/next_guaranteed_crit_power.md)（触发来源）

## 源码

- `SeerYiYou.cs`