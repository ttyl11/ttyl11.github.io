# 神权忤逆

<img src="/images/cards/shen_quan_wu_ni.png" alt="神权忤逆" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌

- **最大PP**: 1

- **能量消耗**: 1

- **类型**: 技能

- **稀有度**: 稀有

- **目标**: 无

- **可升级**: 是（1 级）

- **关键词**: [蚀返](/mechanics/keywords.md)、[残鸣](/mechanics/keywords.md)

### 数值参数

| 参数      | 数值 | 升级后 |
| ------- | -- | --- |
| 格挡      | 8  | 14  |
| PP 总恢复量 | 24 | 24  |
| PP      | 1  | 1   |
| 最大PP    | 1  | 1   |
| 从弃牌堆抽牌数 | 2  | 2   |
| 弃牌数     | 1  | 1   |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 获得<span style="color:#d4a017;font-weight:600">8</span>点[格挡](/mechanics/block.md)，恢复共<span style="color:#3aa675;font-weight:600">24</span>点 PP，从[弃牌堆](/mechanics/discard_pile.md)随机抽<span style="color:#3aa675;font-weight:600">2</span>张牌，选择丢弃<span style="color:#3aa675;font-weight:600">1</span>张牌。[蚀返](/mechanics/keywords.md)：被[消耗](/mechanics/exhaust.md)时向[抽牌堆](/mechanics/draw_pile.md)生成一张复制品。[残鸣](/mechanics/keywords.md)：被消耗时从消耗牌堆选择<span style="color:#3aa675;font-weight:600">1</span>张加入手牌。

## 升级后

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 获得<span style="color:#d4a017;font-weight:600">14</span>点格挡，恢复共<span style="color:#3aa675;font-weight:600">24</span>点 PP，从[弃牌堆](/mechanics/discard_pile.md)随机抽<span style="color:#3aa675;font-weight:600">2</span>张牌，选择丢弃<span style="color:#3aa675;font-weight:600">1</span>张牌。[蚀返](/mechanics/keywords.md)：被[消耗](/mechanics/exhaust.md)时向[抽牌堆](/mechanics/draw_pile.md)生成一张复制品。[残鸣](/mechanics/keywords.md)：被消耗时从消耗牌堆选择<span style="color:#3aa675;font-weight:600">1</span>张加入手牌。

## 工作机制

- **四步执行顺序**：打出时依次完成——① 获得 8（升级 14）点格挡；② 恢复共 24 点 PP（遍历所有 PP 牌，每张补至满，累计不超过 24）；③ 从弃牌堆随机抽 2 张到手牌；④ 从手牌中必选 1 张弃掉。

- **PP 恢复规则**：恢复总量封顶 24 点，按 PP 牌逐张补满、先到先得；不恢复本牌自身（打出后 PP 保持为 0），也不作用于非 PP 牌或 PP 上限为 0 的牌。

- **蚀返与残鸣**：两者都围绕"被消耗时触发"——蚀返向[抽牌堆](/mechanics/draw_pile.md)生成一张本牌复制品，残鸣从[消耗牌堆](/mechanics/exhaust_pile.md)选择 1 张加入手牌。触发时机由[关键词系统](/mechanics/keywords.md)统一处理。

- **随机性来源**：从弃牌堆抽牌使用战斗随机源，多人模式多端一致；弃 1 张由玩家主动选择。

## 小贴士

- **1 PP 超级枢纽**：1 费 1 PP，同时提供格挡、PP 恢复、抽 2 弃 1 三项功能，功能密度极高。把 24 点 PP 撒给整副 PP 牌组，是 PP 体系的关键润滑剂。

- **PP 恢复的覆盖能力**：24 点总恢复量可以回满绝大多数 PP 牌组的亏空——例如恢复 5 张 PP=3 的牌只需 15 点，剩余 9 点还能照顾其它牌。注意本牌自身不恢复 PP，打出后保持归零，便于贴近"被消耗"的触发节奏。

- **蚀返+残鸣的二次收益**：本牌 PP=1，打出后立即归零。蚀返在被消耗时向抽牌堆生成复制品，残鸣在被消耗时从消耗牌堆选 1 张入手——围绕"被消耗"设计，配合消耗节奏能一次打出获得多轮收益。

- **抽 2 弃 1 的净收益**：从弃牌堆随机抽 2 张，再从手牌弃 1 张，净得 1 张牌。若弃牌堆不足 2 张则抽到多少算多少。

- **升级 8→14 格挡**：唯一升级属性，增幅 +75%，优先级高。

## 相关能力

- [蚀返](/mechanics/keywords.md)（消耗时生成复制品到抽牌堆）

- [残鸣](/mechanics/keywords.md)（消耗时从消耗牌堆选牌入手）

## 相关机制

- [PP系统](/mechanics/pp-system.md)

- [格挡](/mechanics/block.md)

- [消耗](/mechanics/exhaust.md)

- [弃牌堆](/mechanics/discard_pile.md)

- [消耗牌堆](/mechanics/exhaust_pile.md)

## 源码

- `SeerShenQuanWuNi.cs`

