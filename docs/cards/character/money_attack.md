# 金钱攻击

<img src="/images/cards/money_attack.png" alt="金钱攻击" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 10
- **能量消耗**: 1
- **类型**: 攻击
- **稀有度**: 罕见
- **目标**: 敌方单体
- **关键词**: [戏法](/mechanics/trick.md)
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| PP | 10 | 10 |
| 最大PP | 10 | 10 |
| 赛尔豆获取 | 100万 | 150万 |
| 伤害换算 | 50万 | 50万 |
| 堕落 | 40% | 40% |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> 获得<span style="color:#3aa675;font-weight:600">100</span>万<span style="color:#d4a017;font-weight:600">赛尔豆</span>，造成等于当前<span style="color:#d4a017;font-weight:600">赛尔豆</span>数÷<span style="color:#3aa675;font-weight:600">50</span>万的伤害。[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">40%</span>。

## 升级后

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> 获得<span style="color:#3aa675;font-weight:600">150</span>万<span style="color:#d4a017;font-weight:600">赛尔豆</span>，造成等于当前<span style="color:#d4a017;font-weight:600">赛尔豆</span>数÷<span style="color:#3aa675;font-weight:600">50</span>万的伤害。[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">40%</span>。

## 小贴士

- **把赛尔豆变成伤害——经济流派的伤害出口**：伤害 = 当前赛尔豆总数 ÷ <span style="color:#3aa675;font-weight:600">50</span> 万（整数除法）。打出时**先获得 <span style="color:#3aa675;font-weight:600">100</span> 万赛尔豆再结算伤害**，所以第一次打出至少 <span style="color:#3aa675;font-weight:600">2</span> 伤，第二次 <span style="color:#3aa675;font-weight:600">4</span> 伤，越打越疼——滚雪球是核心玩法。
- **伤害是普通攻击伤害**：走攻击结算——吃[力量](/powers/strength_power.md)/[易伤](/powers/vulnerable_power.md)加成，也会被敌人格挡。赛尔豆换算出的只是基础值，实际伤害 = 基础值 × 力量/易伤等修正。配合增伤能力能把经济优势进一步放大。
- **赛尔豆是 run 级货币，伤害随经济浮动**：赛尔豆在整局 run 中会被赛尔商店购物、Boss 商店兑换、各类事件消耗——余额越高伤害越高，花完了伤害就低。打出前尽量别乱花赛尔豆，保持高余额才能打出高伤。双人模式赛尔豆按玩家独立结算，伤害只看自己的余额。
- **戏法：白嫖额外赛尔豆**：[戏法](/mechanics/trick.md)让此牌打出时若[弃牌堆](/mechanics/discard_pile.md)有牌，随机抽一张到[手牌](/mechanics/hand.md)。既补充手牌节奏，也可能抽回更多经济牌进一步刷赛尔豆，与这张牌的经济主题契合。
- **升级 150 万加速滚雪球**：升级后获得 <span style="color:#3aa675;font-weight:600">150</span> 万赛尔豆（基础 <span style="color:#3aa675;font-weight:600">100</span> 万），每次打出多 <span style="color:#3aa675;font-weight:600">50</span> 万累积——滚雪球速度更快，多次打出后伤害差距越拉越大。
- **堕落百分比增长，本质是失控进度**：[堕落](/powers/fallen_power.md) = 当前[堕落](/powers/fallen_power.md)层数 × <span style="color:#3aa675;font-weight:600">40%</span>——与[妖族异术](./yao_zu_yi_shu.md)同属"按比例成长"的堕落源，堕落层数越高这张牌加得越多。但堕落是负面机制：每满<span style="color:#3aa675;font-weight:600">100</span>层会被[魔君接管](/powers/demon_takeover_power.md)强制乱打手牌——经济流派滚动赛尔豆的同时，堕落也在等比逼近失控阈值，需要算好触发时机。
- **性价比**：<span style="color:#3aa675;font-weight:600">1</span> 费换 <span style="color:#3aa675;font-weight:600">100</span> 万赛尔豆 + 伤害，经济流派的核心伤害价，升级 <span style="color:#3aa675;font-weight:600">150</span> 万让滚雪球更快。

## 相关机制

- [赛尔豆与泰坦之灵](/mechanics/currency.md)：run级货币，用于精英商店抽奖和遗物兑换，影响本牌伤害
- [堕落](/powers/fallen_power.md)：按当前堕落层数 ×40% 累积

## 源码

- `SeerMoneyAttack.cs`
