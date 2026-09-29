# 竭血残蝶（能力）

> **归属**：玩家可施加
> **施加来源**：[竭血残蝶](/cards/character/blood_exhaust_butterfly.md)（卡牌，打出后获得）

<img src="/images/powers/blood_exhaust_butterfly_power.png" alt="竭血残蝶" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

受到伤害时，可选[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)一张牌，将其清空<span style="color:#3aa675;font-weight:600">[PP](/mechanics/pp-system.md)</span>并[<span style="color:#d4a017;font-weight:600">消耗</span>](/mechanics/exhaust.md)。

## 详细机制

- **受伤触发**：自身受到伤害（总伤害大于 0）时触发一次，从[抽牌堆](/mechanics/draw_pile.md)中任意选择一张 <span style="color:#3aa675;font-weight:600">PP 大于 0</span> 的牌，清空其 [PP](/mechanics/pp-system.md) 并移入[消耗堆](/mechanics/exhaust_pile.md)。
- **无牌可选不触发**：抽牌堆中没有 PP 牌时不会弹出选择窗口。
- **能力牌打出获得**：由能力牌[竭血残蝶](/cards/character/blood_exhaust_butterfly.md)打出后施加，持续整场战斗。

## 相关卡牌

- [竭血残蝶](/cards/character/blood_exhaust_butterfly.md)（来源卡牌）

## 源码

- `SeerBloodExhaustButterflyPower.cs`