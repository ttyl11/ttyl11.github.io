# 竭血残蝶

<img src="/images/cards/blood_exhaust_butterfly.png" alt="竭血残蝶" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 1
- **能量消耗**: 2
- **类型**: 能力
- **稀有度**: 稀有
- **目标**: 自身
- **关键词**: [迁鸣](/mechanics/qianming.md)
- **可升级**: 是（1 级，升级获得[固有](/mechanics/innate.md)）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| PP | 1 | 1 |
| 最大PP | 1 | 1 |
| 能量消耗 | 2 | 2 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 受到伤害时，可选[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)一张牌，将其清空<span style="color:#3aa675;font-weight:600">[PP](/mechanics/pp-system.md)</span>并[<span style="color:#d4a017;font-weight:600">消耗</span>](/mechanics/exhaust.md)。[<span style="color:#d44;font-weight:600">迁鸣</span>](/mechanics/qianming.md)：手牌加入一张[<span style="color:#d4a017;font-weight:600">烬翎</span>](../token/phoenix_feather_card.md)。

## 升级后

<span style="color:#d4a017;font-weight:600">[固有](/mechanics/innate.md)</span>。PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 受到伤害时，可选[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)一张牌，将其清空<span style="color:#3aa675;font-weight:600">[PP](/mechanics/pp-system.md)</span>并[<span style="color:#d4a017;font-weight:600">消耗</span>](/mechanics/exhaust.md)。[<span style="color:#d44;font-weight:600">迁鸣</span>](/mechanics/qianming.md)：手牌加入一张[<span style="color:#d4a017;font-weight:600">烬翎</span>](../token/phoenix_feather_card.md)。

## 详细机制

- **能力牌（被动）**：打出后施加同名能力，持续整场战斗——此后每次受到伤害（总伤害大于 0）时触发一次。
- **受伤触发选择**：受到伤害后，从[抽牌堆](/mechanics/draw_pile.md)中任意选择一张 <span style="color:#3aa675;font-weight:600">PP 大于 0</span> 的牌，将其 [PP](/mechanics/pp-system.md) 清空并移入[消耗堆](/mechanics/exhaust_pile.md)。抽牌堆中没有 PP 牌时不会弹窗。
- **迁鸣·烬翎**：任何抽牌/弃牌/消耗/销毁等牌堆变化触发[迁鸣](/mechanics/qianming.md)时，获得一张[烬翎](../token/phoenix_feather_card.md)加入[手牌](/mechanics/hand.md)顶部。烬翎为 0 费衍生牌（抽 1 张牌、获得 2 点能量），等于"牌堆一动就白嫖一张抽牌+能量"。

## 小贴士

- **受伤被动的核心价值是"拆牌"**：每次挨打都能从抽牌堆挑一张 PP 牌清 PP 并消耗——既能削弱敌方往你牌堆塞的 PP 牌，也能主动拆掉自己牌组里卡手的牌。配合多段攻击的敌人，一次敌方攻击触发多次受伤结算，拆牌效率更高。
- **迁鸣联动是过牌引擎**：能力自带的迁鸣让每次牌堆变化都白送一张烬翎（抽 1 + 能量 2），配合抽牌循环可以高频触发，整场战斗不缺过牌和回能。
- **升级优先级高**：升级获得[固有](/mechanics/innate.md)后首回合必定在手牌中，先打出去为整场战斗铺好被动，值得优先升级。
- **2 费稀有能力牌定位**：价格偏贵但一劳永逸——打出一次、被动全程生效，适合在战斗前期尽早打出。

## 相关能力

- [竭血残蝶（能力）](/powers/blood_exhaust_butterfly_power.md)（受伤触发的被动，来自本牌）
- [烬翎](../token/phoenix_feather_card.md)（迁鸣白嫖的衍生牌）

## 源码

- `SeerBloodExhaustButterfly.cs`
- `SeerBloodExhaustButterflyPower.cs`