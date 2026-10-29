# 圣光庇护

> **归属**：玩家可施加
> **施加来源**：玩家获得——[圣光](/cards/ancient/holy_light.md)（卡牌）

<img src="/images/powers/holy_light_cost_reduction_power.png" alt="圣光庇护" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 计数器叠加
- **可见**: 是

## 数值参数

| 参数 | 数值 |
|---|---|
| 耗能减免 | 1（固定，不随层数增加） |

## 描述

本回合你的所有牌耗能-<span style="color:#3aa675;font-weight:600">1</span>。

## 详细机制

- **全场减费**：拥有此增益时，你自己的所有牌耗能 -1（最低降到 0）。
- **层数不减更多**：减费固定为 1；多张圣光叠加只增加层数，不会变成 -2/-3。
- **本回合有效**：自己的回合结束时移除，不是整场战斗常驻。
- **触发方式**：由[圣光](/cards/ancient/holy_light.md)牌打出时施加。[圣光](/cards/ancient/holy_light.md)牌由[圣光灵神](/relics/legendary/holy_light_spirit.md)遗物的"净化"效果生成（将抽牌堆的诅咒牌和状态牌转化为[圣光](/cards/ancient/holy_light.md)）。

## 相关卡牌

- [圣光](/cards/ancient/holy_light.md)

## 相关遗物

- [圣光灵神](/relics/legendary/holy_light_spirit.md)

## 源码

- `SeerHolyLightCostReductionPower.cs`
