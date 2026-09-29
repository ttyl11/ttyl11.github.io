# 狂雷奔袭

<img src="/images/cards/thunder_raid.png" alt="狂雷奔袭" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 5
- **能量消耗**: 0
- **类型**: 攻击
- **稀有度**: 普通
- **目标**: 所有敌方
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害 | 40 | 60 |
| 固定伤害 | 20 | 20 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 手牌无技能牌时可打出。对所有敌人造成<span style="color:#3aa675;font-weight:600">40</span>点伤害。回合结束在手牌：所有生物获<span style="color:#3aa675;font-weight:600">20</span>[<span style="color:#d4a017;font-weight:600">固定伤害</span>](/powers/fixed_damage_power.md)。

## 升级后

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 手牌无技能牌时可打出。对所有敌人造成<span style="color:#3aa675;font-weight:600">60</span>点伤害。回合结束在手牌：所有生物获<span style="color:#3aa675;font-weight:600">20</span>[<span style="color:#d4a017;font-weight:600">固定伤害</span>](/powers/fixed_damage_power.md)。

## 详细机制

- **打出条件**：手牌中**没有任何技能牌**（`CardType.Skill`）时才能打出。手牌为空，或只有攻击/能力/状态牌，都可以打出。
- **全体攻击**：对所有敌人造成 40 点伤害（升级 60）。
- **回合结束在手牌**：若回合结束时此牌仍在手牌，则为**场上所有生物**（敌我双方，包含自己与队友）各施加 20 层[固定伤害](/powers/fixed_damage_power.md)。
- **触发时点**：该效果在手牌被弃置**之前**结算（`HasTurnEndInHandEffect`），所以它会先结算再进入弃牌堆。
- **[固定伤害](/powers/fixed_damage_power.md)的结算**：在各自回合开始时承受等量伤害（无视格挡、不受增减伤影响），结算后移除；若目标持有[免疫固定伤害](/powers/immune_fixed_damage_power.md)类能力则被抵消。

## 小贴士

- **双刃剑**：那 20 点固定伤害是给"所有生物"的——**包括你自己和队友**。如果回合结束时它还躺在手里，你也会吃 20 点无视格挡的伤害。
- **避免自伤的唯一办法是打出去**：0 费，所以实际玩法是"要么当回合 0 费打掉，要么承担自伤"。
- **打出条件与牌组构筑互动**：纯攻击/能力牌组里它几乎总能打出；一旦手上有技能牌就卡手，回合结束就要吃自伤。
- **对高格挡敌人是稳定的穿透手段**（固伤无视格挡），但代价是对自己也穿透。
- **升级收益**：伤害 40→60，自伤部分不变（仍是 20），所以升级只会让"打出去"这条路更划算。

## 相关能力

- [固定伤害](/powers/fixed_damage_power.md)（回合结束在手牌时施加给全场生物）
- [免疫固定伤害](/powers/immune_fixed_damage_power.md)（可抵消该固伤）

## 相关机制

- [PP系统](/mechanics/pp-system.md)（PP 消耗）
- [格挡](/mechanics/block.md)（固伤无视格挡）

## 源码

- `SeerThunderRaid.cs`
