# 竭血残蝶

> **归属**：玩家可施加
> **施加来源**：[竭血残蝶](/cards/character/blood_exhaust_butterfly.md)（卡牌，打出后获得）

<img src="/images/powers/blood_exhaust_butterfly_power.png" alt="竭血残蝶" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

受到伤害时，可选择[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)中的<span style="color:#3aa675;font-weight:600">1</span>张牌，将其[<span style="color:#3aa675;font-weight:600">PP</span>](/mechanics/pp-system.md)清零并[<span style="color:#d4a017;font-weight:600">消耗</span>](/mechanics/exhaust.md)。

## 详细机制

- **受伤触发**：自己受到一次伤害结算、且本次**总伤害大于 0**（被格挡的伤害也算总伤害）时触发。完全被格挡的攻击也会触发；自己造成的自伤同样触发；多段攻击按**每段**分别触发。
- **选牌条件**：只有[抽牌堆](/mechanics/draw_pile.md)中存在 **PP 大于 0** 的牌时才会弹出选择窗口；没有可选牌时不弹窗、不触发。
- **选择范围**：可选 0 或 1 张，可以跳过不选；过滤器只列出 PP 大于 0 的牌。
- **结算**：选中牌的 [PP](/mechanics/pp-system.md) 清零，随后移入[消耗堆](/mechanics/exhaust_pile.md)（本场战斗移出，战斗结束回牌组）。
- **单例**：重复打出[竭血残蝶](/cards/character/blood_exhaust_butterfly.md)不会叠加触发次数。
- **能力牌打出获得**：由能力牌[竭血残蝶](/cards/character/blood_exhaust_butterfly.md)打出后施加，持续整场战斗。

## 相关卡牌

- [竭血残蝶](/cards/character/blood_exhaust_butterfly.md)（来源卡牌）

## 源码

- `SeerBloodExhaustButterflyPower.cs`
