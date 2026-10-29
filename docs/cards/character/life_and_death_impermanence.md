# 生死无常

<img src="/images/cards/life_and_death_impermanence.png" alt="生死无常" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 0
- **能量消耗**: 不可打出
- **类型**: 能力
- **稀有度**: 稀有
- **目标**: 自身
- **关键词**: [不能被打出](/mechanics/unplayable.md)
- **可升级**: 否

### 数值参数

| 参数 | 数值 |
|---|---|
| 回复生命 | 1 |

## 描述

战斗开始向[弃牌堆](/mechanics/discard_pile.md)加[生](/cards/status/birth.md)、[死](/cards/status/death.md)各<span style="color:#3aa675;font-weight:600">1</span>张。在[牌组](/mechanics/hand.md)中：自身死亡时永久移除此牌并恢复<span style="color:#3aa675;font-weight:600">1</span>生命。

## 详细机制

- **[不能被打出](/mechanics/unplayable.md)**：此牌无法主动打出，效果全部来自"在牌组中"的被动。
- **战斗开始分裂**：战斗开始时，向[弃牌堆](/mechanics/discard_pile.md)顶各放入 1 张[生](/cards/status/birth.md)与[死](/cards/status/death.md)。
  - 只有**牌组中的原件**会执行分裂（战斗内生成的复制体不重复分裂），避免克隆体无限增殖。
- **免死**：自身受到致命伤害时阻止死亡，随后恢复 <span style="color:#3aa675;font-weight:600">1</span> 点生命，并从牌组中**永久移除一张生死无常**。
  - 免死同样**只在牌组中生效**（战斗内克隆体不提供保护）。
  - 每张只能挡一次；牌组里有多张时，一次死亡只消耗其中一张，其余仍保留。
- **不触发则保留**：本场战斗没触发免死时，此牌留在牌组，下场比赛继续生效。
- 不可升级。

## 小贴士

- **一次性的"免死符"**：牌组里有它，就多一条命——但用完就永久消失，属于消耗型保险。是否值得占一个牌组位置，取决于当前风险。
- **同时是牌堆污染源**：每场战斗开始都会往弃牌堆塞"生""死"各一张。它们会在后续抽牌中反复出现——"生"在生命 <50% 时抽到回 5 血，"死"在生命 >50% 时抽到扣 5 血。
- **血量在 50% 附近最舒服**：生/死两张牌的触发条件互补（低血给生、高血给死），整体把玩家往半血附近拉。保持在 50% 以下时"死"不触发，是规避自伤的办法。
- **牌组循环越快越频繁**：抽牌快的构筑会更频繁地抽到生/死，污染感更强；反之慢速牌组影响较小。
- **永久移除的代价**：触发免死后这张牌会从牌组中彻底消失，本局不再有免死保护——它是"保命底牌"，不是可重复资源。

## 相关卡牌

- [生](/cards/status/birth.md)（战斗开始时放入弃牌堆：低血抽到回 5 生命）
- [死](/cards/status/death.md)（战斗开始时放入弃牌堆：高血抽到受 5 伤害）

## 相关机制

- [不能被打出](/mechanics/unplayable.md)（无法主动打出）
- [弃牌堆](/mechanics/discard_pile.md)（生 / 死的放入位置）
- [复活机制](/mechanics/revive.md)（免死属于阻止死亡的机制之一）

## 源码

- `SeerLifeAndDeathImpermanence.cs`
