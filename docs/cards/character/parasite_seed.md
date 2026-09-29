# 寄生种子

<img src="/images/cards/parasite_seed.png" alt="寄生种子" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 1
- **能量消耗**: 1
- **类型**: 能力
- **稀有度**: 普通
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 寄生回合 | 4 | 6 |
| PP | 1 | 1 |
| 最大PP | 1 | 1 |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 所有敌人[<span style="color:#d4a017;font-weight:600">寄生</span>](/powers/parasite_power.md)<span style="color:#3aa675;font-weight:600">4</span>。

## 升级后

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 所有敌人[<span style="color:#d4a017;font-weight:600">寄生</span>](/powers/parasite_power.md)<span style="color:#3aa675;font-weight:600">6</span>。

## 详细机制

- 对所有可命中敌人施加 <span style="color:#3aa675;font-weight:600">4</span> 层[寄生](/powers/parasite_power.md)（升级 6 层），层数 = 持续回合数。
- **寄生的结算**（被寄生者**回合开始时**触发）：
  1. 被寄生者受到 <span style="color:#3aa675;font-weight:600">2</span> 点伤害（无视格挡、不受增减伤影响）；
  2. 若其仍然存活，则其**对手全体**各回复 <span style="color:#3aa675;font-weight:600">2</span> 点生命；
  3. 寄生层数 -1。
- **回复归属**：被寄生敌人的对手是玩家（及其队友），所以敌人被寄生期间，玩家每回合都能回血。
- 能力牌，打出后进入弃牌堆，效果以能力形式常驻在敌人身上。

## 小贴士

- **1 费 + PP 1 的低成本群控**：对多敌人场面，等于"每回合每个敌人扣 2 血 + 自己回 2×敌人数 生命"。
- **敌人越多回得越多**：3 个敌人被寄生时，每回合合计回复 6 点生命，是很可观的续航来源。
- **升级只延长持续时间**：4→6 回合，每回合的伤害/回复数值不变，但总收益提升 50%。
- **注意存活条件**：回复要求被寄生者存活——对即将死亡的敌人，回复会中断。
- **与异常流协同**：[寄生](/powers/parasite_power.md)本身属于 <span style="color:#3aa675;font-weight:600">26</span> 种[异常状态](/mechanics/abnormal-status.md)之一，因此它也能触发"对处于异常状态的敌人造成伤害翻倍"类效果。

## 相关能力

- [寄生](/powers/parasite_power.md)（持续伤害 + 给对手回血）

## 相关机制

- [PP系统](/mechanics/pp-system.md)（PP 消耗）
- [异常状态](/mechanics/abnormal-status.md)（寄生是其中一种）

## 源码

- `SeerParasiteSeed.cs`
