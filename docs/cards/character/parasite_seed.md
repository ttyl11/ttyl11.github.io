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

- 对所有可命中敌人施加 <span style="color:#3aa675;font-weight:600">4</span> 层[寄生](/powers/parasite_power.md)（升级 6 层），层数既等于持续回合数，也决定每回合的伤害与回复量。
- **寄生的结算**（被寄生者**回合开始时**触发）：
  1. 被寄生者受到等于**当前层数**的伤害（无视格挡、不受增减伤影响）；
  2. 若其仍然存活，则其**对手全体**各回复**等量**生命；
  3. 寄生层数 -1。
- **数值逐回合递减**：4 层寄生实际是 4→3→2→1——第一回合 4 伤 / 回 4，最后一回合 1 伤 / 回 1；单个敌人合计 10 点伤害，玩家合计回复 10 点。升级 6 层则是 6→1，合计 21 点。
- **回复归属**：被寄生敌人的对手是玩家（及其队友），所以敌人被寄生期间，玩家每回合都能回血。
- 能力牌，打出即离场，效果以能力形式常驻在敌人身上。

## 小贴士

- **1 费 + PP 1 的低成本群控**：对多敌人场面，等于"每个敌人按剩余层数逐回合扣血 + 自己按层数回血"，4 层单敌合计 10 伤、10 回复，3 个敌人就是 30 伤、30 回复。
- **敌人越多回得越多**：3 个敌人被寄生时，第一回合合计回复 <span style="color:#3aa675;font-weight:600">12</span> 点（各按 4 层），随后逐回合递减，总计 <span style="color:#3aa675;font-weight:600">30</span> 点。
- **升级提升起始层数与总量**：4→6 层，每回合的伤害/回复随层数递减，但起始值更高、持续更久；单个敌人总伤害从 <span style="color:#3aa675;font-weight:600">10</span>（1+2+3+4）提升到 <span style="color:#3aa675;font-weight:600">21</span>（1+2+3+4+5+6）。
- **注意存活条件**：回复要求被寄生者存活——对即将死亡的敌人，回复会中断。
- **与异常流协同**：[寄生](/powers/parasite_power.md)本身属于 <span style="color:#3aa675;font-weight:600">27</span> 种[异常状态](/mechanics/abnormal-status.md)之一，因此它也能触发"对处于异常状态的敌人造成伤害翻倍"类效果。

## 相关能力

- [寄生](/powers/parasite_power.md)（持续伤害 + 给对手回血）

## 相关机制

- [PP系统](/mechanics/pp-system.md)（PP 消耗）
- [异常状态](/mechanics/abnormal-status.md)（寄生是其中一种）

## 源码

- `SeerParasiteSeed.cs`
