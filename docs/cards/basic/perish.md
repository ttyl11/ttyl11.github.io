# 消亡

<img src="/images/cards/perish.png" alt="消亡" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 基础牌
- **最大PP**: 1
- **能量消耗**: 1
- **类型**: 能力
- **稀有度**: 基础
- **目标**: 无
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 消亡层数 | 10 | 15 |
| 堕落获取 | 10 | 10 |
| PP | 1 | 1 |
| 最大PP | 1 | 1 |

## 描述

PP: 1/1 [堕落](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">10</span>。对所有敌人施加<span style="color:#3aa675;font-weight:600">10</span>层[消亡](/powers/demise_power.md)。

## 升级后

PP: 1/1 [堕落](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">10</span>。对所有敌人施加<span style="color:#3aa675;font-weight:600">15</span>层[消亡](/powers/demise_power.md)。

## 详细机制

- **堕落+10**：[堕落](/powers/fallen_power.md)层数增加 <span style="color:#3aa675;font-weight:600">10</span>，每场战斗独立、不清零。多次打出可叠加，是索伦森积累堕落的核心手段之一。
- **群体消亡**：对所有敌人施加[消亡](/powers/demise_power.md)（原版能力）<span style="color:#3aa675;font-weight:600">10</span> 层，目标每个回合结束时失去等量生命，不可格挡、不受力量影响。同目标重复施加会叠层，打出次数越多层数越高。
- **升级只加消亡**：升级后消亡层数 <span style="color:#3aa675;font-weight:600">10 → 15</span>，堕落获取不变（始终 <span style="color:#3aa675;font-weight:600">10</span>）。

## 小贴士

- **双重复利（也有负债）**：一张牌同时做两件事——给堕落（资源，也是负债）充电，并给所有敌人挂上每回合自动掉血的 dot。敌人越多收益越大，群体战最优；但要记得层数越高，满 <span style="color:#3aa675;font-weight:600">100</span> 的失控来得越近。
- **与魔君接管的节奏预判**：堕落每满 <span style="color:#3aa675;font-weight:600">100</span> 层会触发[魔君接管](/powers/demon_takeover_power.md)（自动打光手牌）。叠加堕落前先看一眼当前层数——差 20 层满 100 时，这张牌打完就着火，注意手牌里别留不想被自动打出的牌。
- **消亡的结算时机**：消亡是"目标回合结束掉血"，不是立即生效——打完后敌人这一回合还有动作机会，对下回合仍会出手的敌人要提前算好窗口。
- **性价比**：<span style="color:#3aa675;font-weight:600">1</span> 费，群体挂 <span style="color:#3aa675;font-weight:600">10</span>（升级 <span style="color:#3aa675;font-weight:600">15</span>）层持续伤害 + 自充堕落 <span style="color:#3aa675;font-weight:600">10</span>，性价比极高。

## 相关机制

- [堕落](/powers/fallen_power.md)（堕落充电）
- [消亡](/powers/demise_power.md)（群体施加的持续伤害能力）

## 源码

- `SeerPerish.cs`