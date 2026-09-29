# 雁翎

<img src="/images/relics/seer_yan_ling.png" alt="雁翎" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物

- **稀有度**: 普通

### 数值参数

| 参数   | 数值                   |
| ---- | -------------------- |
| 战斗开始墨染 | 20 层                 |
| 每回合翻倍 | 是（自身回合开始）            |
| 兑换节奏 | 约 6 回合到 985 层（单独持有）  |

## 描述

[战斗开始](/mechanics/game-flow.md)时，自身获得 <span style="color:#3aa675;font-weight:600">20</span> 层[墨染](/powers/mo_ran_power.md)。每[回合开始](/mechanics/game-flow.md)时，[墨染](/powers/mo_ran_power.md)翻倍。

- **翻倍先于结算**：每个自身回合开始时，先把当前墨染翻倍，再按翻倍后的层数结算金币/水晶。
- **墨染的用途**：自身回合开始时每 <span style="color:#3aa675;font-weight:600">211</span> 层换 <span style="color:#3aa675;font-weight:600">10</span> 金币；达到 <span style="color:#3aa675;font-weight:600">985</span> 层时清空全部墨染，换 <span style="color:#3aa675;font-weight:600">1</span> 颗[通用刻印激活水晶](/relics/event/universal_engraving_gem_relic.md)（永久 +1 [手牌上限](/mechanics/hand.md)）。

## 风味文字

<span style="color:#d44;font-weight:600">雁过留声，翎落成器。</span>

## 小贴士

- **它是墨染经济的启动器**：<span style="color:#3aa675;font-weight:600">20</span> → <span style="color:#3aa675;font-weight:600">40</span> → <span style="color:#3aa675;font-weight:600">80</span> → <span style="color:#3aa675;font-weight:600">160</span> → <span style="color:#3aa675;font-weight:600">320</span> → <span style="color:#3aa675;font-weight:600">640</span> → <span style="color:#3aa675;font-weight:600">1280</span>，约 <span style="color:#3aa675;font-weight:600">6</span> 回合摸到 <span style="color:#3aa675;font-weight:600">985</span> 层的水晶线，此后从 0 重新开始滚。
- **前几回合"看着像假的"**：<span style="color:#3aa675;font-weight:600">211</span> 层才开始有钱，前 <span style="color:#3aa675;font-weight:600">3</span> 回合颗粒无收、第 <span style="color:#3aa675;font-weight:600">4</span> 回合才见到第一笔 <span style="color:#3aa675;font-weight:600">10</span> 金币——这是滚雪球型遗物，越往后每回合进账越多（<span style="color:#3aa675;font-weight:600">640</span> 层就是 <span style="color:#3aa675;font-weight:600">30</span> 金币）。
- **和学神是黄金搭档**：[学神](/relics/shop/study_god.md)在战斗开始白给 <span style="color:#3aa675;font-weight:600">333</span> 层，两件同持从 <span style="color:#3aa675;font-weight:600">353</span> 起翻，<span style="color:#3aa675;font-weight:600">2</span> 回合内就能破 <span style="color:#3aa675;font-weight:600">985</span> 换水晶——这是墨染经济的最快形态。
- **墨眉是它的加速键**：[墨眉](/cards/character/mo_mei.md)一次 +<span style="color:#3aa675;font-weight:600">150</span> 层，在翻倍前垫进去，等于给滚雪球直接加一大截本金。
- **性价比**：普通遗物白送一套"利滚利"经济——战斗内中期开始稳定产金币，长线还能不断换永久手牌上限；代价是前几回合几乎没有产出，属于越打越值的长线投资。

## 相关能力

- [墨染](/powers/mo_ran_power.md)（本遗物的全部效果载体）

## 相关遗物

- [学神](/relics/shop/study_god.md)（战斗开始 +333 层，与雁翎同持收益最大）
- [通用刻印激活水晶](/relics/event/universal_engraving_gem_relic.md)（满 985 层兑换的奖励）

## 相关卡牌

- [墨眉](/cards/character/mo_mei.md)（打出 +150 层）

## 源码

- `SeerYanLing.cs`
- `SeerMoRanPower.cs`