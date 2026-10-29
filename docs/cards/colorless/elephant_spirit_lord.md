# 御象灵尊

<img src="/images/cards/elephant_spirit_lord.png" alt="御象灵尊" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 无色牌
- **能量消耗**: 9
- **类型**: 能力
- **稀有度**: 罕见
- **目标**: 自身
- **关键词**: [保留](/mechanics/retain.md)
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 最大蓄力 | 6 | 9 |

## 描述

每回合，此牌耗能<span style="color:#3aa675;font-weight:600">-2</span>。自身获得等于当前回合数的<span style="color:#d4a017;font-weight:600">蓄力</span>（最多为<span style="color:#3aa675;font-weight:600">6</span>）。

## 升级后

每回合，此牌耗能<span style="color:#3aa675;font-weight:600">-2</span>。自身获得等于当前回合数的<span style="color:#d4a017;font-weight:600">蓄力</span>（最多为<span style="color:#3aa675;font-weight:600">9</span>）。

## 详细机制

- **[保留](/mechanics/retain.md)关键词**：回合结束不弃置，可一直攥在手里等降费。
- **每回合开始双结算**：你的每个回合开始时——①此牌耗能 <span style="color:#3aa675;font-weight:600">-2</span>；②内部回合计数 +1。计数从**战斗第 1 回合**开始累计，牌在抽牌堆/手牌/弃牌堆都照常计数——抽到得越晚，打出时的蓄力越接近满层。
- **降费时间表**：初始 <span style="color:#3aa675;font-weight:600">9</span> 费 → 第 1 回合 <span style="color:#3aa675;font-weight:600">7</span> → 第 2 回合 <span style="color:#3aa675;font-weight:600">5</span> → 第 3 回合 <span style="color:#3aa675;font-weight:600">3</span> → 第 4 回合 <span style="color:#3aa675;font-weight:600">1</span> → 第 5 回合起 <span style="color:#3aa675;font-weight:600">0</span> 费。
- **打出时蓄力 = min(当前回合数, 上限)**：基础版第 6 回合起打出 = 满 <span style="color:#3aa675;font-weight:600">6</span> 层；升级后第 9 回合起打出 = 满 <span style="color:#3aa675;font-weight:600">9</span> 层。
- **[蓄力](/powers/accumulate_power.md)每层的三重价值**（能力，整场持续）：
  1. 你造成的攻击伤害 +<span style="color:#3aa675;font-weight:600">35</span>%×当前层数（乘区增伤）
  2. 你每打出一套攻击后层数 -1（一次攻击消耗一层，增伤随之下降）
  3. 你的回合开始时获得[先制](/powers/first_strike_power.md)+<span style="color:#3aa675;font-weight:600">1</span>（下一张牌费用 -1）

## 小贴士

- **🔑 免费满层时点**：第 5 回合起 0 费。基础版上限 6 层——**第 6 回合打出 = 0 费拿满 6 层**；升级后上限 9 层——**第 9 回合打出 = 0 费拿满 9 层**。攥着不打是正确操作，前几回合的 9/7/5/3/1 费都是陷阱价。
- **蓄力是递减型爆发引擎**：总收益按满层计——基础 6 层：第 1 次攻击 +<span style="color:#3aa675;font-weight:600">210</span>%、第 2 次 +<span style="color:#3aa675;font-weight:600">175</span>%；升级 9 层：第 1 次 +<span style="color:#3aa675;font-weight:600">315</span>%、第 2 次 +<span style="color:#3aa675;font-weight:600">280</span>%，逐次递减 <span style="color:#3aa675;font-weight:600">35</span>% 直到打空。前置攻击越痛收益越大——把蓄力和手里最重的攻击牌排在一起打出。
- **先制赠送是隐藏续航**：只要蓄力还在，**每个回合开始都白送先制+1**（下一张牌 -1 费）——即使蓄力被攻击消耗殆尽之前，每回合 1 费减免也在默默回血经济。
- **速攻战斗是死牌**：前 5 回合高费打不出、短战斗撑不到满层时点（基础第 6 回合 / 升级第 9 回合）——速攻局它就是手牌里的石头。[保留](/mechanics/retain.md)让它不弃，但也持续占用手牌位。精英/Boss 长战才是主场。
- **基础自带[保留](/mechanics/retain.md)，升级提蓄力上限**：[保留](/mechanics/retain.md) 是基础关键词（抽到后回合结束不弃，可一直攥着等降费）；升级的价值是**把最大蓄力上限从 6 提到 9**——上限更高，满层时点推迟到第 9 回合，但拿到的层数与总增伤都更高。
- **性价比**：0 费能力换递减增伤（基础 6 层 / 升级 9 层，每层 35%）+ 数回合先制——后期白嫖引擎，唯一的成本是前期占手牌位。

## 相关能力

- [蓄力](/powers/accumulate_power.md)（自身获得等于当前回合数的蓄力）

## 相关机制

- [保留](/mechanics/retain.md)（关键词）

## 源码

- `SeerElephantSpiritLord.cs`
