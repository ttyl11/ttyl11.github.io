# 暴政统治者

<img src="/images/cards/tyrant_ruler.png" alt="暴政统治者" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 事件牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 攻击
- **稀有度**: 衍生
- **目标**: 所有敌方
- **可升级**: 是（1 级）
- **来源**: 事件「史莱姆的加冕」

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害 | 6 | 14 |
| 弃牌数量 | 3 | 3 |
| 先制 | 1 | 1 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> [<span style="color:#d4a017;font-weight:600">先制</span>](/powers/first_strike_power.md)+<span style="color:#3aa675;font-weight:600">1</span>。对所有敌人造成<span style="color:#3aa675;font-weight:600">6</span>点伤害，获得<span style="color:#3aa675;font-weight:600">1</span>层[<span style="color:#d4a017;font-weight:600">缓冲</span>](/powers/buffer_power.md)。弃掉[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)中最多<span style="color:#3aa675;font-weight:600">3</span>张牌，对所有敌人施加<span style="color:#3aa675;font-weight:600">1</span>层[<span style="color:#9b59b6;font-weight:600">易伤</span>](/powers/vulnerable_power.md)。自动随机打出牌组中所有的史莱姆牌。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> [<span style="color:#d4a017;font-weight:600">先制</span>](/powers/first_strike_power.md)+<span style="color:#3aa675;font-weight:600">1</span>。对所有敌人造成<span style="color:#3aa675;font-weight:600">14</span>点伤害，获得<span style="color:#3aa675;font-weight:600">1</span>层[<span style="color:#d4a017;font-weight:600">缓冲</span>](/powers/buffer_power.md)。弃掉[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)中最多<span style="color:#3aa675;font-weight:600">3</span>张牌，对所有敌人施加<span style="color:#3aa675;font-weight:600">1</span>层[<span style="color:#9b59b6;font-weight:600">易伤</span>](/powers/vulnerable_power.md)。自动随机打出牌组中所有的史莱姆牌。

## 小贴士

- **结算顺序：伤害 → 先制 → 缓冲 → 弃牌 → 易伤 → 自动放史莱姆**：先把 <span style="color:#3aa675;font-weight:600">6</span> 点伤害砸向全体，再给**自己**加[先制](/powers/first_strike_power.md)+<span style="color:#3aa675;font-weight:600">1</span>（你打出的**下一张牌**耗能 -1，不是抢先手）和 <span style="color:#3aa675;font-weight:600">1</span> 层[缓冲](/powers/buffer_power.md)，然后弃牌、给全体挂[易伤](/powers/vulnerable_power.md)，最后自动打出史莱姆。
- **易伤在伤害之后才施加**：本牌自己的 <span style="color:#3aa675;font-weight:600">6</span> 点伤害吃不到自己挂的易伤增伤——但后面自动打出的史莱姆攻击牌**能吃到**，结算顺序对它非常有利。
- **弃牌必须弃满 3 张**：源码的选择上下限都是 3——手牌（排除此牌）不足 3 张时自动全部弃掉，够 3 张时必须选满 3 张才能确认。不是"0～3 张随意"；手牌足够时有弃牌收益类能力会稳定触发 3 次。
- **"牌组中所有的史莱姆牌"实际是战斗中三堆**：收集范围是[手牌](/mechanics/hand.md) + [抽牌堆](/mechanics/draw_pile.md) + [弃牌堆](/mechanics/discard_pile.md)（**不含**[消耗堆](/mechanics/exhaust_pile.md)），包括[史莱姆](/cards/colorless/slime.md)、[攻击史莱姆](/cards/colorless/slime_attack.md)、[防御史莱姆](/cards/colorless/slime_defense.md)、[速度史莱姆](/cards/colorless/slime_speed.md)、[体力史莱姆](/cards/colorless/slime_stamina.md)；[黏液？](/cards/status/slime_quest.md)不算史莱姆牌，不会被自动打出。
- **自动打出不扣能量，但要求当下付得起**：每张史莱姆仍按自己的费用做一次"能否打出"检查（1 费；升级后的[史莱姆](/cards/colorless/slime.md)为 0 费），能量不够的会被跳过；通过检查后自动打出**不消耗能量**。所以只要还剩 1 点能量，三堆里的史莱姆就会全部免费放出。
- **先制基本会被史莱姆立刻吃掉**：先制在"打出下一张牌"时消耗，而紧接着的自动打出同样算打出牌——第一只史莱姆就会把这层减费消耗掉，通常轮不到你手牌里的牌（除非场上没有可自动打出的史莱姆）。
- **PP 5/5 + 1 费，可以反复收割**：一场最多打 <span style="color:#3aa675;font-weight:600">5</span> 次，每次都是"群伤 + 全体易伤 + 放生全部史莱姆"的完整循环；配合能生成史莱姆的手段，中后期一轮清场不是梦。
- **升级只加伤害**：6→14（+133%），其余全部不变——先制、缓冲、弃牌、易伤、放史莱姆一段不少，纯数值升级，伤害大幅提升。

## 相关卡牌

- [史莱姆](/cards/colorless/slime.md) / [攻击史莱姆](/cards/colorless/slime_attack.md) / [防御史莱姆](/cards/colorless/slime_defense.md) / [速度史莱姆](/cards/colorless/slime_speed.md) / [体力史莱姆](/cards/colorless/slime_stamina.md)（可被自动打出的史莱姆牌）

## 源码

- `SeerTyrantRuler.cs`
- `SeerSlimeCoronation.cs`
