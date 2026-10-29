# 昊海垂天

<img src="/images/cards/vast_sea_sky.png" alt="昊海垂天" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 5
- **能量消耗**: 3
- **类型**: 技能
- **稀有度**: 稀有
- **目标**: 无
- **关键词**: [戏法](/mechanics/trick.md)、[溯引](/mechanics/suyin.md)
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| PP | 5 | 5 |
| 最大PP | 5 | 5 |
| 能量消耗 | 3 | 2 |

## 描述

PP: 5/5 <span style="color:#d44;font-weight:600">溯引</span>：<span style="color:#d4a017;font-weight:600">生成</span><span style="color:#3aa675;font-weight:600">1</span>个<span style="color:#d4a017;font-weight:600">海洋充能球</span>。 选择<span style="color:#d4a017;font-weight:600">弃牌堆</span>一张牌，<span style="color:#d4a017;font-weight:600">消耗</span>并获得等量<span style="color:#d4a017;font-weight:600">能量</span>。

## 升级后

耗能<span style="color:#3aa675;font-weight:600">-1</span>。PP: 5/5 <span style="color:#d44;font-weight:600">溯引</span>：<span style="color:#d4a017;font-weight:600">生成</span><span style="color:#3aa675;font-weight:600">1</span>个<span style="color:#d4a017;font-weight:600">海洋充能球</span>。 选择<span style="color:#d4a017;font-weight:600">弃牌堆</span>一张牌，<span style="color:#d4a017;font-weight:600">消耗</span>并获得等量<span style="color:#d4a017;font-weight:600">能量</span>。

## 小贴士

- **能量回收引擎：弃牌堆选牌换算能量**：选择一张[弃牌堆](/mechanics/discard_pile.md)的牌并将其[消耗](/mechanics/exhaust.md)，获得等于该牌**基础耗能**（卡面费用，不算战斗中的加费/减费）的能量。捡回一张 5 费大件消耗掉，获得 5 点能量；本牌自身 3 费（升级 2 费），净赚 2/3 点。0 费牌只给 0 能量，别浪费选择。
- **弃牌堆空时会白打**：弃牌堆没有牌时，戏法抽不到牌、也没有牌可消耗——这张 3 费牌打出去什么都不发生。打之前先确认弃牌堆不是空的。
- **戏法补牌 + 回收循环**：[戏法](/mechanics/trick.md)打出时随机从[弃牌堆](/mechanics/discard_pile.md)抽一张到[手牌](/mechanics/hand.md)——先白抽一牌，再自选弃牌堆一张消耗回能量。既能补充手牌，也能把弃牌堆里的高费牌转成能量，形成"弃牌堆 → 能量/手牌"的双向活化。
- **溯引白嫖一个海洋球**：[溯引](/mechanics/suyin.md)在抽到此牌时触发，生成 1 个[海洋充能球](/orbs/ocean_orb.md)——抽到即白得一个冰系充能球，不必等打出。配合冰系/充能球流派时是稳定供球点。
- **消耗谁最划算**：优先消耗手牌里当前用不上、但费用高的牌（如高费能力牌、抽到就只能烂手里的状态大件），把它们的费用转化成当回合能量。避免消耗还需用的核心牌。
- **性价比**：<span style="color:#3aa675;font-weight:600">3</span> 费换"弃牌堆→能量"的周转 + 戏法过牌 + 溯引供球，多效一体，稀有稀有度合理。牌组里高费牌越多、能量周转越吃紧，这张牌价值越高。

## 相关充能球

- [海洋](/orbs/ocean_orb.md)（溯引生成的充能球，施加冻伤/冰封）

## 相关机制

- [弃牌堆](/mechanics/discard_pile.md)（选牌来源）
- [戏法](/mechanics/trick.md)（打出时随机抽弃牌堆一牌入手）
- [溯引](/mechanics/suyin.md)（抽到此牌时触发，生成海洋球）
- [能量](/mechanics/energy.md)（由所选牌费用换算的资源）

## 源码

- `SeerVastSeaSky.cs`