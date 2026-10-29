# 七月的海螺

<img src="/images/cards/july_conch.png" alt="七月的海螺" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 1
- **能量消耗**: 1
- **类型**: 能力
- **稀有度**: 稀有
- **目标**: 无
- **可升级**: 是（1 级）
- **关键词**: [随机异常](/mechanics/sui_ji_yi_chang.md)

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 呼唤加入数 | 3 | 3 |
| 异常状态回合 | 3 | 4 |
| PP | 1 | 1 |
| 最大PP | 1 | 1 |

## 描述

PP: 1/1 每有一张状态牌，所有敌人<span style="color:#d44;font-weight:600">随机异常</span><span style="color:#3aa675;font-weight:600">1，3</span>。 向<span style="color:#d4a017;font-weight:600">抽牌堆</span>加入<span style="color:#3aa675;font-weight:600">3</span>张<span style="color:#d4a017;font-weight:600">呼唤</span>。

## 升级后

PP: 1/1 每有一张状态牌，所有敌人<span style="color:#d44;font-weight:600">随机异常</span><span style="color:#3aa675;font-weight:600">1，4</span>。 向<span style="color:#d4a017;font-weight:600">抽牌堆</span>加入<span style="color:#3aa675;font-weight:600">3</span>张<span style="color:#d4a017;font-weight:600">呼唤</span>。

## 小贴士

- **呼唤是原版状态牌**：向抽牌堆**随机位置**加入 <span style="color:#3aa675;font-weight:600">3</span> 张呼唤。呼唤在手牌中回合结束扣生命，是加入抽牌堆的代价。
- **状态牌联动触发**：打出时统计抽牌堆、手牌、弃牌堆里的状态牌（原有状态牌 + 新加入的 <span style="color:#3aa675;font-weight:600">3</span> 张呼唤），每张让所有敌人获得 <span style="color:#3aa675;font-weight:600">1</span> 种随机异常状态。无原有状态牌时 = 3 次随机异常 × 所有敌人。消耗堆里的状态牌不计入。
- **随机异常抽取（23 种）**：从已排除狂暴、星赐、凝滞、超频后的 <span style="color:#3aa675;font-weight:600">23</span> 种负面异常状态中随机选取，绝不会随机给敌人提供增益，多人模式两端一致。每抽到 1 种，就对**所有存活敌人**各施加 1 份——同一次抽到的类型对所有敌人都相同。
- **1 费换全敌人异常**：1 费换 3 次随机异常 × 所有敌人 × 3 回合。多敌人时价值放大，3 个敌人 = 3 次抽取、共 9 份异常施加。代价是 3 张呼唤进抽牌堆（回合结束扣血）。
- **升级增异常回合**：异常回合 <span style="color:#3aa675;font-weight:600">3</span> → <span style="color:#3aa675;font-weight:600">4</span>。每多 1 回合 = 异常多触发 1 轮，控制效果延长。
- **带[化墟](/mechanics/ruination.md)**：打出后向你的[弃牌堆](/mechanics/discard_pile.md)加入一张随机状态牌（原版状态牌池）。注意它是在本牌主效果结算之后才加入，所以不会增加本次的异常施加次数；价值在于给下一次打出、或其它"数状态牌"的牌提前铺资源。

## 相关机制

- [异常状态](/mechanics/abnormal-status.md)（27 种权威异常状态，其中 23 种进入随机池）
- [抽牌堆](/mechanics/draw_pile.md)（加入 3 张呼唤状态牌）
- [化墟](/mechanics/ruination.md)（打出时向弃牌堆加入一张随机状态牌）

## 源码

- `SeerJulyConch.cs`
- `SeerAbnormalStatus.cs`
