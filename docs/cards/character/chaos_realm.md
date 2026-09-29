# 混沌魔域

<img src="/images/cards/chaos_realm.png" alt="混沌魔域" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌

- **最大PP**: 1

- **能量消耗**: 4

- **类型**: 能力

- **稀有度**: 稀有

- **目标**: 自己

- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 能量消耗 | 4 | 3 |
| 记录上限 | 打出时的最大生命值 | 打出时的最大生命值 |
| PP | 1 | 1 |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 记录当前[最大生命值](/mechanics/game-flow.md)，获得[混沌化身](/powers/soulson_chaos_incarnation_power.md)。战斗结束恢复记录值。

## 升级后

耗能降至<span style="color:#3aa675;font-weight:600">3</span>。[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 记录当前[最大生命值](/mechanics/game-flow.md)，获得[混沌化身](/powers/soulson_chaos_incarnation_power.md)。战斗结束恢复记录值。

## 工作机制

- **记录 + 化身双段**：打出时记录当前最大生命值，并立即获得[混沌化身](/powers/soulson_chaos_incarnation_power.md)——能量不足仍可出牌，差额用最大生命抵扣。

- **战斗结束回上限**：战斗结束时把最大生命恢复到记录值，但[当前生命不变](/powers/chaos_realm_power.md)——战斗中被化身扣掉的上限补回来，不加血。

- **不叠加**：多张或多次打出只保留记录，能力为单例。

## 小贴士

- **化身免单**：打出后即可无惩罚地"透支能量"（差额用上限抵），战斗结束统一回补上限，等于把透支成本推迟到战斗结算，白嫖 [混沌化身](/powers/soulson_chaos_incarnation_power.md) 的一整场免费透支。

- **注意记录的是"当前"**：自身先被压低上限再打这张牌，记录值就会更低——先补好上限再开化身收益最大。

- **当前生命不回**：战斗结束只回上限、不回血，别指望它当回血牌用；中高血量开局才值得 4 费占坑。

- **升级降费**：升级后耗能从 <span style="color:#3aa675;font-weight:600">4</span> 降至 <span style="color:#3aa675;font-weight:600">3</span>——4 费版几乎吃掉整个回合能量，只能单独打；3 费版可再带一张 1 费牌，节奏差一档，开化身的时机也提前。

- **与堕落体系联动**：堕落满 100 层本就自动获得[混沌化身](/powers/soulson_chaos_incarnation_power.md)，此时再打出本卡属重复获得（单例覆盖）；但本卡自带的"回上限"结算依然有效，适合在堕落逼近 100 前开，把魔君接管 + 化身叠加的损失锁死。

## 相关能力

- [混沌化身](/powers/soulson_chaos_incarnation_power.md)（能量不足用最大生命抵扣）
- [混沌魔域](/powers/chaos_realm_power.md)（战斗结束回上限）

## 相关机制

- [PP系统](/mechanics/pp-system.md)（PP 消耗）

## 源码

- `SeerChaosRealm.cs`