# 大蛇毒液

<img src="/images/cards/big_snake_venom.png" alt="大蛇毒液" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 1
- **能量消耗**: 1
- **类型**: 能力
- **稀有度**: 普通
- **目标**: 无
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 中毒层数 | 25 | 40 |
| 能量消耗 | 1 | 1 |
| PP | 1 | 1 |
| 最大PP | 1 | 1 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 所有敌人[<span style="color:#d4a017;font-weight:600">中毒</span>](/powers/poison_power.md)<span style="color:#3aa675;font-weight:600">25</span>层。此后每回合开始时，向你的[<span style="color:#d4a017;font-weight:600">手牌</span>]加入一张[<span style="color:#d4a017;font-weight:600">蛇咬</span>]，蛇咬必须优先打出，且你的蛇咬施加的[<span style="color:#d4a017;font-weight:600">中毒</span>]改为 seer[<span style="color:#d4a017;font-weight:600">中毒</span>]。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 所有敌人[<span style="color:#d4a017;font-weight:600">中毒</span>](/powers/poison_power.md)<span style="color:#3aa675;font-weight:600">40</span>层。此后每回合开始时，向你的[<span style="color:#d4a017;font-weight:600">手牌</span>]加入一张[<span style="color:#d4a017;font-weight:600">蛇咬</span>]，蛇咬必须优先打出，且你的蛇咬施加的[<span style="color:#d4a017;font-weight:600">中毒</span>]改为 seer[<span style="color:#d4a017;font-weight:600">中毒</span>]。

## 小贴士

- **能力牌·全敌开局中毒**：打出即让所有敌人获得 <span style="color:#3aa675;font-weight:600">25</span> 层[中毒](/powers/poison_power.md)（升级 <span style="color:#3aa675;font-weight:600">40</span> 层），直接铺开高额 DoT，配合高 PP 单次开局压制。
- **每回合白嫖蛇咬**：此后每回合开始时向手牌加入一张[蛇咬]（原版 Snakebite），免费获得持续的毒源，且不占用抽牌。
- **蛇咬必须优先打出**：手牌有蛇咬时其它牌不能打出，需先打蛇咬（参考原版[执迷]的拦截逻辑），节奏上会锁定你的每回合首出牌。
- **换毒为 seer 中毒**：蛇咬原本施加的中毒会改为施加等量 seer[中毒](/powers/poison_power.md)（伤害公式改为等于层数、结算后层数减半），蛇咬越多，换成 seer 毒的收益越大。
- **升级只加毒层**：升级仅将初始中毒 25→40 层，蛇咬相关机制不变，推荐优先升级。

## 相关机制

- [中毒](/powers/poison_power.md)（seer 中毒：伤害等于层数，结算后层数减半）

## 源码

- `SeerBigSnakeVenom.cs`
- `SeerBigSnakeVenomPower.cs`（隐形能力：每回合加蛇咬 / 优先打出拦截 / 换毒）
