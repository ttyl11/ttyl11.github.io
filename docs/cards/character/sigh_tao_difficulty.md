# 欷歔证道难

<img src="/images/cards/sigh_tao_difficulty.png" alt="欷歔证道难" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 3
- **能量消耗**: 1
- **类型**: 攻击
- **稀有度**: 稀有
- **目标**: 敌方单体
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害 | 5 | 5 |
| 生命损失 | 10 | 10 |
| 每次伤害增量 | +2 | +2 |
| 每次扣血递减 | -1 | -1 |
| PP | 3 | 3 |
| 最大PP | 3 | 3 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">3</span>/<span style="color:#3aa675;font-weight:600">3</span> 造成<span style="color:#3aa675;font-weight:600">5</span>点伤害，扣除自身<span style="color:#3aa675;font-weight:600">10</span>点生命。打出后回到[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)。整局游戏中此牌每打出一次，伤害+<span style="color:#3aa675;font-weight:600">2</span>，扣血-<span style="color:#3aa675;font-weight:600">1</span>。

## 升级后

[<span style="color:#d4a017;font-weight:600">固有</span>](/mechanics/innate.md)。PP: <span style="color:#3aa675;font-weight:600">3</span>/<span style="color:#3aa675;font-weight:600">3</span> 造成<span style="color:#3aa675;font-weight:600">5</span>点伤害，扣除自身<span style="color:#3aa675;font-weight:600">10</span>点生命。打出后回到[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)。整局游戏中此牌每打出一次，伤害+<span style="color:#3aa675;font-weight:600">2</span>，扣血-<span style="color:#3aa675;font-weight:600">1</span>。

## 小贴士

- **跨战斗永久累加——run 级投资牌**：原版遗传算法也是"每打出一次永久成长"（格挡+3，升级后+4），但它带消耗，一场战斗只能打一次；这张牌**不消耗**，打出后回到手牌，同一回合就能连打。累加计数是 run 级永久保存的（跨战斗不重置）——第 1 场战斗打出 3 次，第 2 场战斗第 4 次打出时伤害已经是 5+3×2=11。所以这是一张"越打越强、整局受益"的长线投资牌。
- **回手 + 无消耗 = 同回合多打**：打出后立即回到[手牌](/mechanics/hand.md)，不消耗。只要有能量，同回合可以连续打出多次——每次打出都会累加永久计数。1 回合打 3 次 = 伤害 +6、扣血 -3 的永久推进。前期自残代价会叠加，但能快速推进投资进度。
- **投资曲线——11 次是盈亏平衡点**：
  - 第 1 次：<span style="color:#3aa675;font-weight:600">5</span> 伤害 / 扣 <span style="color:#3aa675;font-weight:600">10</span> 血
  - 第 5 次：<span style="color:#3aa675;font-weight:600">13</span> 伤害 / 扣 <span style="color:#3aa675;font-weight:600">6</span> 血
  - 第 11 次：<span style="color:#3aa675;font-weight:600">25</span> 伤害 / 扣 <span style="color:#3aa675;font-weight:600">0</span> 血（盈亏平衡）
  - 第 12 次起：<span style="color:#3aa675;font-weight:600">27</span>+ 伤害 / **回血** <span style="color:#3aa675;font-weight:600">1</span>+（扣血为负时自动转为治疗）
- **从自残到回血——质变节点**：扣血降到 0 后继续打出，扣血变为负数，此时自动转为恢复生命——**从自残攻击转变为回血攻击**。第 20 次打出时伤害 5+19×2=43，回血 10-19=-9 即恢复 9 生命。后期这张牌变成"43 伤害 + 回血 9"的免费攻击牌，性价比爆炸。
- **扣血不可格挡——前期代价真实**：自身扣血是不可格挡的非攻击伤害，无法用[格挡](/mechanics/block.md)抵消。所以前期自残代价是真实的——必须保证能在 11 次内打出足够价值，或配合回血机制对冲。**别在血量低时强行投资**——10 点扣血可能直接致命。
- **伤害吃攻击加成**：打出的伤害是普通攻击伤害——吃自身[力量](/powers/strength_power.md)等[全属性](/mechanics/all_attributes.md)加成，也会被敌人[格挡](/mechanics/block.md)。全属性叠高后，每 1 费重复打出的实际伤害远超卡面数字，"每次+2"的永久成长只是下限。
- **PP3 限制——每场战斗最多打出 3 次**：PP 是单场战斗资源，每场战斗开始时回满，每打出一次消耗 1 PP，归零后本场不可再打。一场仅 3 次远不够 11 次盈亏平衡——常规节奏是每场打 1-2 次慢慢投资；想提速就配合[永恒](/cards/basic/eternity.md)：它打出后**恢复所有卡牌的 PP 值**（含此牌），同一场战斗能再打 3 次，单场最多推进 6 次计数。
- **升级加固有——保证每场战斗起手投资**：升级后获得[固有](/mechanics/innate.md)，每场战斗开始时此牌在手牌中。保证每场战斗都能立刻开始投资，不用等抽到——**升级让投资节奏更稳定**，是长线投资牌的关键升级。
- **配合回血对冲前期自残**：前几次打出扣 <span style="color:#3aa675;font-weight:600">10</span>→<span style="color:#3aa675;font-weight:600">6</span> 血是真实掉血，血线压力大时配合[轮回](/cards/basic/reincarnation.md)（按最大生命值百分比回血）等回复手段对冲；撑到第 <span style="color:#3aa675;font-weight:600">12</span> 次后扣血自动转回血，反而变成续航来源。**别在速攻流里用这张牌**——投资需要时间，速攻流来不及展开。
- **性价比**：1 费长期投资型攻击牌，前期自残后期回血，11 次后纯赚。升级加固有让投资更稳定——是长线 run 的核心投资件。

## 相关机制

- [固有](/mechanics/innate.md)（升级后获得，每场战斗起手在手牌）
- [手牌](/mechanics/hand.md)（打出后回到手牌，可重复打出）
- [格挡](/mechanics/block.md)（扣血不可格挡，前期代价真实）

## 源码

- `SeerSighTaoDifficulty.cs`
