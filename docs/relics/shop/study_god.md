# 学神

<img src="/images/relics/study_god.png" alt="学神" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 塔罗遗物
- **稀有度**: 商店

### 数值参数

| 参数 | 数值 |
|---|---|
| 战斗开始[墨染](/powers/mo_ran_power.md) | 333 层 |
| 峰值金币 | 200 |
| 峰值赛尔豆（单位：万） | 500 |
| 峰值泰坦之灵 | 2 |
| 容错标准差 σ | 3 |

## 描述

①战斗开始时，获得 <span style="color:#3aa675;font-weight:600">333</span> 层[墨染](/powers/mo_ran_power.md)。
②战斗开始时，预测本场战斗打出的牌数；战斗结束时，按预测偏差结算<span style="color:#d4a017;font-weight:600">金币</span>、<span style="color:#d4a017;font-weight:600">赛尔豆</span>、<span style="color:#d4a017;font-weight:600">泰坦之灵</span>奖励，越准确奖励越高。

- **[墨染](/powers/mo_ran_power.md)是什么**：自身回合开始时每 <span style="color:#3aa675;font-weight:600">211</span> 层换 <span style="color:#3aa675;font-weight:600">10</span> 金币，达到 <span style="color:#3aa675;font-weight:600">985</span> 层清空并换 <span style="color:#3aa675;font-weight:600">1</span> 颗[通用刻印激活水晶](/relics/event/universal_engraving_gem_relic.md)；<span style="color:#3aa675;font-weight:600">333</span> 层相当于每回合白拿 <span style="color:#3aa675;font-weight:600">10</span> 金币的底仓。
- **预测弹窗**：战斗开始时弹出输入框（输入范围 0-999），输入预测的本场打牌数。
- **实际计数**：仅累加拥有者自己打出的牌；右下角计数器实时显示。
- **结算公式**：奖励 = max(0, floor(峰值 × e^(-偏差²/(2×3²))))，其中偏差 = |实际打牌数 − 预测值|。三种资源共用同一算法，仅峰值不同：金币 200、赛尔豆 500（单位：万）、泰坦之灵 2。
- **统计口径**：战斗结束时统计实际打牌数（含自动打出的牌，如守夜、哀悼）。
- **奖励注入**：结算的金币、赛尔豆、泰坦之灵奖励注入奖励屏幕。

## 风味文字

<span style="color:#d44;font-weight:600">学神。</span>

## 小贴士

- **预测越准奖励越高**：战斗开始预测本场打牌数，战斗结束时按正态分布结算——完全命中给满额（200金币+500万赛尔豆+2泰坦之灵），偏差越大奖励衰减越快。三种资源共用同一算法，猜对一个就三个都拿满。
- **容错很严**：标准差σ=3，偏差3张还有约60%奖励，偏差6张只剩约13%，偏差9张基本归零。要拿到像样奖励得猜得很准，对自己牌组节奏要有清晰认知。
- **计数器实时显示**：右下角实时显示已打牌数，可以根据当前计数和剩余敌人血量估算本场总打牌数。多打几场摸清自己牌组的平均打牌数后，预测会越来越准。
- **含自动打出的牌**：实际打牌数包含自动打出的牌（如守夜、哀悼等自动出牌效果），预测时要算上这些自动出牌，否则容易偏差。
- **墨染是它的"第二份工资"**：<span style="color:#3aa675;font-weight:600">333</span> 层底仓每回合稳拿 <span style="color:#3aa675;font-weight:600">10</span> 金币，预测失败也不至于颗粒无收；与[雁翎](/relics/common/yan_ling.md)同持时从 <span style="color:#3aa675;font-weight:600">353</span> 层起翻倍，<span style="color:#3aa675;font-weight:600">2</span> 回合就能换到一颗[通用刻印激活水晶](/relics/event/universal_engraving_gem_relic.md)。
- **性价比**：商店定级合理——完全命中奖励丰厚（200金币+500万赛尔豆+2泰坦之灵），但容错严，需要对牌组节奏有把握；即便预测失手，墨染底仓与水晶线也保住了下限。

## 相关能力

- [墨染](/powers/mo_ran_power.md)（战斗开始 +333 层）

## 相关遗物

- [雁翎](/relics/common/yan_ling.md)（每回合让墨染翻倍，同持最快破 985）
- [通用刻印激活水晶](/relics/event/universal_engraving_gem_relic.md)

## 源码

- `SeerStudyGod.cs`
