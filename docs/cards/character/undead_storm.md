# 亡灵风暴

<img src="/images/cards/undead_storm.png" alt="亡灵风暴" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 10
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 稀有
- **目标**: 所有敌方
- **标签**: 亡灵契约师
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 灾厄层数 | 4 | 8 |
| 召唤数量 | 9 | 9 |
| PP | 10 | 10 |
| 最大PP | 10 | 10 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> 召唤<span style="color:#3aa675;font-weight:600">9</span>个奥斯提。随机选择生物，赋予其<span style="color:#3aa675;font-weight:600">4</span>层[<span style="color:#9b59b6;font-weight:600">灾厄</span>](/powers/doom_power.md)，重复直到所有生物身上都有灾厄。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> 召唤<span style="color:#3aa675;font-weight:600">9</span>个奥斯提。随机选择生物，赋予其<span style="color:#3aa675;font-weight:600">8</span>层[<span style="color:#9b59b6;font-weight:600">灾厄</span>](/powers/doom_power.md)，重复直到所有生物身上都有灾厄。

## 小贴士

- **召唤 9 奥斯提铺场**：打出即召唤 <span style="color:#3aa675;font-weight:600">9</span> 个[奥斯提](/mechanics/osty.md)——大量随从提供稳固的场面和[格挡](/mechanics/block.md)厚度，同时为亡灵契约师的召唤联动创造了巨大空间。
- **灾厄群体结算覆盖率**：随机挑选生物逐个赋予[灾厄](/powers/doom_power.md)，重复直到每个敌对生物身上都至少有一定层数——保证所有敌人都吃得到，不会被某只漏掉。
- **灾厄是斩杀线**：灾厄在敌人回合结束时结算——若其当前生命不高于灾厄层数，直接死亡，无视[格挡](/mechanics/block.md)。所以先压血再挂灾厄，让斩杀线覆盖敌人血量，能跨甲收割。
- **升级灾厄翻倍是核心**：升级把每次赋予层数从 <span style="color:#3aa675;font-weight:600">4</span> 提到 <span style="color:#3aa675;font-weight:600">8</span>，斩杀线直接翻倍，能威胁更多残血敌人；召唤数量不变。升级收益集中在数值爆发。
- **性价比**：<span style="color:#3aa675;font-weight:600">1</span> 费换来 <span style="color:#3aa675;font-weight:600">9</span> 随从铺场 + 群体灾厄覆盖，亡灵契约师体系里最顶级的一体化群压件，稀有稀有度合理。

## 相关能力

- [灾厄](/powers/doom_power.md)（回合结束时生命不高于灾厄值则立即死亡）

## 相关机制

- [召唤](/mechanics/summon.md)（召唤奥斯提亡灵随从）

## 源码

- `SeerUndeadStorm.cs`