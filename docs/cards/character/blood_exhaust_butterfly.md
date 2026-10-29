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

- **能力牌（被动，单例）**：打出后获得同名能力，持续整场战斗；重复打出不会叠加触发次数，但每次打出仍要支付 2 点能量与 1 点 PP。
- **受伤触发**：自己受到一次伤害结算、且本次**总伤害大于 0**（被格挡的伤害也算总伤害）时触发。即使这次伤害被格挡完全挡下也会触发；自己造成的自伤同样触发；多段攻击按**每一段**分别结算、分别触发。
- **选牌**：只有[抽牌堆](/mechanics/draw_pile.md)中存在 **PP 大于 0** 的牌时才会弹出选择窗口。可以从这些牌中选 1 张，也可以直接跳过不选；选中的牌 [PP](/mechanics/pp-system.md) 清零后移入[消耗堆](/mechanics/exhaust_pile.md)（只在本场战斗移出，战斗结束回牌组）。
- **迁鸣·烬翎**：只在**竭血残蝶自身换牌堆**时触发——抽到手牌、被弃置、洗回抽牌堆、进入消耗堆等；进入打出堆的瞬间不触发。触发时把一张[烬翎](../token/phoenix_feather_card.md)加入[手牌](/mechanics/hand.md)顶。
- **烬翎**：战斗内衍生的 0 费技能牌，PP 1，打出时抽 1 张牌、获得 2 点能量，并自带[毁灭](/mechanics/destruction.md)——把消耗堆的牌全部移入销毁堆永久移除。
- **升级**：获得[固有](/mechanics/innate.md)，首回合必定在手牌中。

## 小贴士

- **核心价值是“拆牌”**：每次受伤都能从抽牌堆挑一张 PP 牌清空 PP 并消耗，既能拆掉敌方塞进你牌堆的牌，也能主动清掉自己卡手的牌。对多段攻击的敌人，一段伤害就触发一次，拆牌效率最高。
- **触发不挑伤害来源**：完全被格挡的攻击、自己造成的自伤都会触发。因此它既能配合防御流“零伤触发”，也要注意自伤类效果会顺带触发选牌。
- **迁鸣不是过牌引擎**：只有竭血残蝶自己换牌堆才给烬翎，其它牌移动不会触发。它是能力牌，打出后离场、通常不再参与洗牌循环，单场触发次数有限，主要来自抽到手、弃置或洗回等时点。
- **烬翎是净赚但要挑时机**：0 费抽 1 + 2 能量，还能清空消耗堆。若你依赖消耗堆囤牌，打烬翎前要确认不会把关键牌销毁。
- **升级优先级高**：升级获得固有后首回合必定上手，先打出为整场战斗铺好被动，值得优先升级。
- **性价比**：2 费 + 1 PP，换整场“受伤拆 PP 牌”。对多段、低单段伤害的敌人收益最高；对单段高伤或几乎不打人的敌人，收益取决于你牌堆里有多少 PP 牌可拆。

## 相关能力

- [竭血残蝶（能力）](/powers/blood_exhaust_butterfly_power.md)（受伤触发的被动，来自本牌）
- [烬翎](../token/phoenix_feather_card.md)（迁鸣白嫖的衍生牌）

## 源码

- `SeerBloodExhaustButterfly.cs`
- `SeerBloodExhaustButterflyPower.cs`
