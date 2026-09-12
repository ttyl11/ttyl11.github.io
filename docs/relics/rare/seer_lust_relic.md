# 拉斯特

<img src="/images/relics/seer_lust_relic.png" alt="拉斯特" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物

- **稀有度**: 稀有

## 描述

战斗结束的[<span style="color:#d4a017;font-weight:600">卡牌奖励</span>](/mechanics/game-flow.md)选项数 +<span style="color:#3aa675;font-weight:600">1</span>。卡牌奖励界面额外出现「色欲」选项，选择后**累计器 +1**：此后每场战斗开始时，对所有敌人施加[<span style="color:#3aa675;font-weight:600">魅惑</span>](/powers/bewitch_power)层数 = 本遗物累计点击次数（每层<span style="color:#3aa675;font-weight:600">5</span>%）。累计选择「色欲」<span style="color:#3aa675;font-weight:600">7</span>次后，向[<span style="color:#d4a017;font-weight:600">牌组</span>](/mechanics/hand.md)中加入[<span style="color:#3aa675;font-weight:600">色欲</span>](/cards/curse/lust)。

## 风味文字

<span style="color:#d44;font-weight:600">色欲，如烈火焚身。</span>

## 机制说明

- **选项数 +1**：战斗胜利后的卡牌奖励多给 1 张。

- **「色欲」替代按钮**：点击即放弃本次选牌，**累计器 +1**（不立即生效）。点击次数永久累加，作为后续每场战斗开始时的魅惑层数。

- **每场战斗开始时施放**：在接下来每场战斗开始时，对场上**所有敌人**施加[<span style="color:#3aa675;font-weight:600">魅惑</span>](/powers/bewitch_power)，层数 = 本遗物累计点击次数。每层提供 <span style="color:#3aa675;font-weight:600">5</span>% 被击晕概率。

- **每场只施放一次**：每次战斗开始对所有存活的敌人统一施加一次。

- **累计 7 次后并入罪牌**：向牌组加入 1 张[<span style="color:#3aa675;font-weight:600">色欲</span>](/cards/curse/lust)诅咒牌；此后「色欲」按钮失效（但已累计的层数仍然生效）。

## 小贴士

- **越叠越硬控**：点击次数越多，每场战斗开始给所有敌人的[魅惑](/powers/bewitch_power)层数越高，相当于开局就把全场敌人按概率眩晕，是滚雪球型控制。

- **魅惑=变相减伤+控场**：魅惑让敌人按概率损失行动/削弱，本质是开局控场，叠起来后每场战斗都是优势开局，尤其克制高爆发/多段行动的敌人。

- **点了 7 次后按钮消失，但层数保留**：即使拿满 7 次的[色欲诅咒](/cards/curse/lust)，已叠的魅惑层数在后续战斗里依旧生效，前面白叠的控制不会消失。

- **可与"带魅惑的卡牌"独立叠加**：魅惑概率来自"本遗物累计次数 ×5%"这一条独立的层数来源，与打出带魅惑效果的牌各自叠加，追求眩晕可以两条路一起堆。

- **优先叠还是优先构筑**：控制成型快的卡组可早叠；若本身就靠控场/防御过牌运转，色欲的稳定开局控是关键润滑剂。

- **适合应对高威胁敌人**：对每个敌人必定施加（不看意图），面对高伤害/AOE 敌人时能显著缓解压力。

## 扩展·机制说明（补充）

- 每场战斗**只施放一次**魅惑（在所有敌人上统一施加），而非每回合都施加。

- 层数来源是**本遗物的累计次数**（持久化保留），与打出带魅惑卡牌的 Buff 层数来源不同、可并存。

- 施放时机在每场战斗开始（进战斗即生效），后续不再重复叠加。

## 源码

- `SeerLustRelic.cs`

- 罪牌 [`SeerLust.cs`](/cards/curse/lust)