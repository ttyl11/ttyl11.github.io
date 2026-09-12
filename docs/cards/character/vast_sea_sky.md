# 昊海垂天

<img src="/images/cards/vast_sea_sky.png" alt="昊海垂天" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
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

## 描述

[<span style="color:#d4a017;font-weight:600">戏法</span>](/mechanics/trick.md)。PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 选择一张[<span style="color:#d4a017;font-weight:600">弃牌堆</span>](/mechanics/discard_pile.md)的牌，将其消耗，并获得等量[<span style="color:#d4a017;font-weight:600">能量</span>](/mechanics/energy.md)。[<span style="color:#d4a017;font-weight:600">溯引</span>](/mechanics/suyin.md)：生成一个海洋[<span style="color:#d4a017;font-weight:600">充能球</span>](/orbs/ocean_orb.md)。

## 升级后

[<span style="color:#d4a017;font-weight:600">戏法</span>](/mechanics/trick.md)。PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 选择一张[<span style="color:#d4a017;font-weight:600">弃牌堆</span>](/mechanics/discard_pile.md)的牌，将其消耗，并获得等量[<span style="color:#d4a017;font-weight:600">能量</span>](/mechanics/energy.md)。[<span style="color:#d4a017;font-weight:600">溯引</span>](/mechanics/suyin.md)：生成一个海洋[<span style="color:#d4a017;font-weight:600">充能球</span>](/orbs/ocean_orb.md)。

## 小贴士

- **能量回收引擎：弃牌堆选牌换算能量**：选择一张[弃牌堆](/mechanics/discard_pile.md)的牌并将其[消耗](/mechanics/exhaust.md)，据此获得**等量**能量——得到的能量 = 所选牌打出的费用。捡回一张高费牌（如 5 费大件）消耗掉，当回合直接回满 5 点能量，是极强的手中资源周转。
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