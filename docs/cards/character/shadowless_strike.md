# 无影袭

<img src="/images/cards/shadowless_strike.png" alt="无影袭" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 10
- **能量消耗**: 1
- **类型**: 攻击
- **稀有度**: 普通
- **目标**: 敌方单体
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害 | 10 | 15 |
| [缓冲](/powers/buffer_power.md)（反弱成功时） | 1 | 1 |
| [堕落](/powers/fallen_power.md) | 19 | 19 |
| PP | 10 | 10 |
| 最大PP | 10 | 10 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> [<span style="color:#d44;font-weight:600">反弱</span>](/mechanics/fan_ruo.md)，成功则获得<span style="color:#3aa675;font-weight:600">1</span>层[<span style="color:#d4a017;font-weight:600">缓冲</span>](/powers/buffer_power.md)。造成<span style="color:#3aa675;font-weight:600">10</span>点伤害。[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">19</span>。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> [<span style="color:#d44;font-weight:600">反弱</span>](/mechanics/fan_ruo.md)，成功则获得<span style="color:#3aa675;font-weight:600">1</span>层[<span style="color:#d4a017;font-weight:600">缓冲</span>](/powers/buffer_power.md)。造成<span style="color:#3aa675;font-weight:600">15</span>点伤害。[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">19</span>。

## 详细机制

- **结算顺序**：[反弱](/mechanics/fan_ruo.md)（成功则 +1 层[缓冲](/powers/buffer_power.md)） → 造成伤害 → [堕落](/powers/fallen_power.md) +19。
- **[反弱](/mechanics/fan_ruo.md)**：把自身四维的**负值翻转为等量正值**（-N → +N），[力量](/powers/strength_power.md) / [防御](/powers/defense_power.md) / [命中](/powers/accuracy_power.md) / [速度](/powers/speed_power.md) 逐项判定。
- **「成功」的判定**：四项中**至少有一项为负值**才算成功、才给缓冲；四项全为正或零时不获得缓冲。
- **反弱在伤害之前**：所以本次伤害会吃到刚翻转回来的力量加成（例如被削了 -5 力量，反弱后 +5，本次伤害立刻 +5）。
- **[缓冲](/powers/buffer_power.md)**：每层抵消一次生命值损失，是原版增益。
- **伤害为攻击伤害**：吃力量 / 易伤 / [暴击](/mechanics/critical-strike.md)加成，可被[格挡](/mechanics/block.md)抵消。
- **升级只提升伤害**：10 → 15（+5）。

## 小贴士

- **与「属性下降」体系强绑定**：被敌人削减属性后打它，既能把负面翻成正面，又白拿 1 层[缓冲](/powers/buffer_power.md)——是「反打」型卡牌。
- **没有负属性时它是半个白板**：只有 10（升级 15）点伤害，不产生缓冲；所以别在干净状态下指望它给防御。
- **[堕落](/powers/fallen_power.md) 19 是稳定供能**：PP 10、1 费，打 5~6 次就够 100 层触发[混沌化身](/mechanics/chaos-incarnation.md)，可作为堕落体系的常规推进牌。
- **先手顺序有讲究**：若打算靠反弱把力量翻正，尽量让「被削属性」发生在它之前（例如本回合先挨一次降属性的攻击），收益才成立。
- **性价比**：1 费 10（升级 15）点攻击伤害 + 反弱（附带 1 层缓冲）+ 堕落 19。纯伤害在普通里偏低，价值在「反弱 + 缓冲 + 供能」三合一；面对会降你属性的敌人时价值翻倍，面对干净敌人时约等于略亏的小攻击牌。

## 相关能力

- [缓冲](/powers/buffer_power.md)（反弱成功时 +1 层）
- [力量](/powers/strength_power.md) / [防御](/powers/defense_power.md) / [命中](/powers/accuracy_power.md) / [速度](/powers/speed_power.md)（反弱翻转的负值）
- [堕落](/powers/fallen_power.md)（每次 +19 层）

## 相关机制

- [反弱](/mechanics/fan_ruo.md)（把自身四维负值翻转为正值）
- [全属性](/mechanics/all_attributes.md)（力量 / 防御 / 命中 / 速度四项）
- [PP系统](/mechanics/pp-system.md)（每次打出消耗 1 点 PP）
- [混沌化身](/mechanics/chaos-incarnation.md)（堕落满 100 层触发）

## 源码

- `SeerShadowlessStrike.cs`