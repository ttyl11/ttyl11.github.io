# 墨染

> **归属**：玩家专属
> **施加来源**：玩家自身——[雁翎](/relics/common/yan_ling.md)（战斗开始 +20，每回合翻倍）、[学神](/relics/shop/study_god.md)（战斗开始 +333）、[墨眉](/cards/character/mo_mei.md)（打出 +150）

<img src="/images/powers/mo_ran_power.png" alt="墨染" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 无类型（不参与增益/减益分类，不可被驱散/净化）
- **叠加方式**: 计数型（层数递增）
- **可见**: 是（能力图标显示层数）

## 描述

自身回合开始时：每<span style="color:#3aa675;font-weight:600">211</span>层获得<span style="color:#3aa675;font-weight:600">10</span>金币；达到<span style="color:#3aa675;font-weight:600">985</span>层时清空全部墨染，获得<span style="color:#3aa675;font-weight:600">1</span>颗[通用刻印激活水晶](/relics/event/universal_engraving_gem_relic.md)。

## 详细机制

- **纯计数资源**：墨染没有任何战斗效果——不影响伤害、不带来负面，唯一的用途就是"攒层数换钱"。每场战斗独立，战斗结束即清零。
- **回合开始三段结算**（顺序固定）：
  1. **翻倍**：持有[雁翎](/relics/common/yan_ling.md)时，先把当前层数翻倍（<span style="color:#3aa675;font-weight:600">20</span> → <span style="color:#3aa675;font-weight:600">40</span> → <span style="color:#3aa675;font-weight:600">80</span>…）；
  2. **金币**：每满 <span style="color:#3aa675;font-weight:600">211</span> 层获得 <span style="color:#3aa675;font-weight:600">10</span> 金币（<span style="color:#3aa675;font-weight:600">985</span> 层即 <span style="color:#3aa675;font-weight:600">40</span> 金币）；
  3. **水晶**：层数达到 <span style="color:#3aa675;font-weight:600">985</span> 层时，金币照发，然后**清空全部墨染**并获得 <span style="color:#3aa675;font-weight:600">1</span> 颗[通用刻印激活水晶](/relics/event/universal_engraving_gem_relic.md)，之后从 0 重新累积。
- **金币是每回合重复结算的**：只要层数还在 <span style="color:#3aa675;font-weight:600">985</span> 以下，每个自身回合开始都会按当前层数结一次金币——层数越高，每回合进账越多。
- **水晶是永久收益**：[通用刻印激活水晶](/relics/event/universal_engraving_gem_relic.md)为永久 +<span style="color:#3aa675;font-weight:600">1</span> [手牌上限](/mechanics/hand.md)，可叠加。
- **两种获取节奏**：[学神](/relics/shop/study_god.md)一次性给 <span style="color:#3aa675;font-weight:600">333</span> 层但**不会自己增长**（每回合只按 333 层结 <span style="color:#3aa675;font-weight:600">10</span> 金币）；[雁翎](/relics/common/yan_ling.md)的 <span style="color:#3aa675;font-weight:600">20</span> 层会每回合翻倍，单独持有约 <span style="color:#3aa675;font-weight:600">6</span> 回合摸到水晶线。**两件同持是最快形态**：<span style="color:#3aa675;font-weight:600">353</span> 起翻，<span style="color:#3aa675;font-weight:600">2</span> 回合内即可破 <span style="color:#3aa675;font-weight:600">985</span> 换水晶。

## 相关遗物

- [雁翎](/relics/common/yan_ling.md)（战斗开始 +20，每回合翻倍）
- [学神](/relics/shop/study_god.md)（战斗开始 +333）
- [通用刻印激活水晶](/relics/event/universal_engraving_gem_relic.md)（满 985 层兑换的奖励）

## 相关卡牌

- [墨眉](/cards/character/mo_mei.md)（打出 +150 层）

## 相关机制

- [手牌上限](/mechanics/hand.md)（水晶的永久收益）
- [金币](/mechanics/currency.md)（墨染兑换的资源）

## 源码

- `SeerMoRanPower.cs`
- `SeerYanLing.cs`
- `SeerStudyGod.cs`
- `SeerMoMei.cs`