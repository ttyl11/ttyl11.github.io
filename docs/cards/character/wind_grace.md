# 予风余芳

<img src="/images/cards/wind_grace.png" alt="予风余芳" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 普通
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 格挡（攻击牌分支） | 9 | 13 |
| 异常概率（技能牌分支） | 20% | 30% |
| 异常层数 | 2 | 2 |
| 能力持续 | 2 层 | 2 层 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 上一张为攻击牌时，获得<span style="color:#3aa675;font-weight:600">9</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)；为技能牌时，获得<span style="color:#3aa675;font-weight:600">2</span>层[<span style="color:#9b59b6;font-weight:600">予风余芳</span>](/powers/wind_grace_power.md)。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 上一张为攻击牌时，获得<span style="color:#3aa675;font-weight:600">13</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)；为技能牌时，获得<span style="color:#3aa675;font-weight:600">2</span>层[<span style="color:#9b59b6;font-weight:600">予风余芳</span>](/powers/wind_grace_power.md)。

## 小贴士

- **看上一张牌分支**：只统计**自己**打出的上一张牌（不含队友）。上一张是攻击牌→获得 9/13 点[格挡](/mechanics/block.md)；上一张是技能牌→获得 2 层[予风余芳](/powers/wind_grace_power.md)能力。出牌顺序决定效果，要先安排好前置牌。
- **自身也算技能牌**：予风余芳打出后会进入出牌历史，紧接着再打一张予风余芳，会按"上一张是技能牌"处理，再获得 2 层能力。
- **上一张不是攻击/技能时不触发**：能力牌、状态牌、诅咒牌，或本场第一张牌，两个分支都不生效，这张牌白板收场。所以要把攻击或技能牌排在它前面。
- **予风余芳是随机异常引擎**：获得该能力后，己方回合内**每打出一张牌**（包括打出予风余芳本身）都有 20%/30% 概率，为**随机一名可击中敌人**附加**随机[异常状态](/mechanics/abnormal-status.md) 2 层**。能力持续 2 层：己方回合结束时减 1，实际覆盖当回合剩余出牌与下回合；重复打出会叠加层数并相应延长。多打牌能多次触发，适合快攻/连击流。
- **异常随机不可控**：触发的异常种类和目标都是随机的，无法指定。随机池共 **23 种**，已排除凝滞、超频、狂暴、星赐——这四种不会被随机出来。
- **升级双提升**：格挡 9→13，异常概率 20%→30%，两个分支都加强。升级收益稳定。
- **性价比**：1 费根据前置牌给格挡或异常能力，灵活但需要出牌顺序配合。普通牌里算有构筑潜力，配连击流能滚出大量异常。

## 相关能力

- [予风余芳](/powers/wind_grace_power.md)（出牌时概率给随机敌人挂随机异常状态）

## 相关机制

- [格挡](/mechanics/block.md)（攻击牌分支获得 9/13 点）
- [异常状态](/mechanics/abnormal-status.md)（技能牌分支触发的随机状态体系）

## 源码

- `SeerWindGrace.cs`
- `SeerWindGracePower.cs`
