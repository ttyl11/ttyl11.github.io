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

PP: 1/1 所有敌人<span style="color:#d4a017;font-weight:600">中毒</span><span style="color:#3aa675;font-weight:600">25</span>。每回合获得一张<span style="color:#d4a017;font-weight:600">蛇咬</span>并优先打出。

## 升级后

PP: 1/1 所有敌人<span style="color:#d4a017;font-weight:600">中毒</span><span style="color:#3aa675;font-weight:600">40</span>。每回合获得一张<span style="color:#d4a017;font-weight:600">蛇咬</span>并优先打出。

## 小贴士

- **能力牌·全敌开局中毒**：打出即让所有敌人获得 <span style="color:#3aa675;font-weight:600">25</span> 层赛尔[中毒](/powers/poison_power.md)（升级 <span style="color:#3aa675;font-weight:600">40</span> 层）——中毒在持有者所在阵营回合开始时造成等于层数的伤害，结算后层数减半，是一张强力的开局铺毒牌。
- **每回合白拿一张蛇咬（但不是免费打出）**：此后每回合抽牌之后，向手牌随机位置加入一张原版[蛇咬]——<span style="color:#3aa675;font-weight:600">2</span> 费技能、带[保留](/mechanics/retain.md)、施加 <span style="color:#3aa675;font-weight:600">7</span> 层毒（升级 10）。牌是白拿的，**打出仍要付 2 费**；不打出就会一直留在手里（保留），越积越多。
- **蛇咬会锁住出牌**：手牌里有任何一张蛇咬时，**其它牌都不能手动打出**（只能先打蛇咬；自动打出不受限）。能量不足 2 点时等于被完全锁住，所以这张能力牌并不适合低费/低能量回合——打之前先确认后续每回合都能支付蛇咬的费用。
- **换毒为赛尔中毒**：蛇咬原本施加的原版中毒会被全局规则统一替换为等量的赛尔[中毒](/powers/poison_power.md)（伤害等于层数、结算后层数减半），蛇咬越多，叠毒效率越高。
- **单例能力**：重复打出不会叠加，每回合仍只加一张蛇咬；多带几张也只是多一次开局铺毒。
- **升级只加毒层**：升级仅将初始中毒 25→40 层，蛇咬相关机制不变，推荐优先升级。

## 相关机制

- [中毒](/powers/poison_power.md)（seer 中毒：伤害等于层数，结算后层数减半）

## 源码

- `SeerBigSnakeVenom.cs`
- `SeerBigSnakeVenomPower.cs`（可见能力：每回合加蛇咬 / 优先打出拦截 / 换毒）
