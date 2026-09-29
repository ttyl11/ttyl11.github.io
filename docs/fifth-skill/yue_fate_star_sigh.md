# 岳·命寻星叹

<img src="/images/cards/yue_fate_star_sigh.png" alt="岳·命寻星叹" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 第五技能
- **最大PP**: 1
- **能量消耗**: 2
- **类型**: 能力
- **稀有度**: 稀有
- **目标**: 自身
- **关键词**: [<span style="color:#d4a017;font-weight:600">悼</span>](/mechanics/mourning.md)
- **可升级**: 是（1 级）
- **来源**: 遗物「卫岳」——同一回合内[拥君之盾](/powers/sovereign_shield_power.md)与[绝缘之罩](/powers/insulation_cover_power.md)均开启后的回合结束加入手牌（每场一次）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| PP | 1 | 1 |
| 最大PP | 1 | 1 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 下个回合所有牌会多打出一次。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 下个回合所有牌会多打出一次。

（升级只让卡面关键词栏额外自动显示[保留](/mechanics/retain.md)，描述文本不变。）

## 小贴士

- **🔑 一张牌装了两个引擎，且互相叠加**：打出时同时施加——①[悼](/mechanics/mourning.md)（不可见）：下回合开始时[瓦库代替你行动](/mechanics/mourning.md)，从手牌第一张可打出的牌开始循环自动打出（消耗能量，最多 33 张，打不出为止）；②[命寻星叹](/powers/fate_star_sigh_power.md)（增益）：下回合你打出的**每一张牌结算次数 +1**。命寻星叹在回合开始阶段激活、瓦库在随后的自动打出阶段行动——**瓦库代打的每张牌同样吃双倍结算**，两个引擎完美叠乘。
- **"多打出一次" = 打一张、结算两次**：与原版"爆发"同款机制（打出一次、效果执行两遍，攻击牌就是对同一目标多砸一段伤害），不是多抽一张牌。下回合你的每张攻击牌都相当于自带双倍伤害。
- **下个回合完全自动化，交出操作权**：瓦库代打会榨干你的能量、按手牌顺序出牌（需要指定目标的牌随机/选第一个敌人），关键牌可能以糟糕的目标被打出去。打出这张牌前先规划好**下回合的手牌结构**——留爆发牌、清掉不想被乱打的牌，收益翻倍；反之可能一手好牌被瓦库浪费。
- **能量越多，瓦库打得越多**：代打消耗能量且打不出即停——下回合能量充裕（能量遗物、跨回合能量）时收益最大化；能量见底时悼只打一两张就收工。
- **PP 1/1，一场只能启动一次**：能力牌打出即离场，两个引擎各自生效一次后自行移除。
- **2 费门槛**：本体 2 费；由遗物[卫岳](/relics/epic/wei_yue.md)直给的那一张耗能降为 0，可以当回合白嫖。
- **升级价值：保留**：获得[保留](/mechanics/retain.md)后回合结束不弃——不必打出当回合就启动，可以攥在手里等到手牌质量和能量都就绪的回合再引爆。
- **两个获取来源**：①**遗物直给**——由遗物[卫岳](/relics/epic/wei_yue.md)在战斗中生成：[拥君之盾](/powers/sovereign_shield_power.md)与[绝缘之罩](/powers/insulation_cover_power.md)均开启的回合结束时加入[手牌](/mechanics/hand.md)（**该张耗能降为 0**），每场战斗最多一张；②**第五技能途径**——持有解锁遗物[卫岳](/relics/epic/wei_yue.md) <span style="color:#3aa675;font-weight:600">15</span>% / [武心婵](/relics/legendary/wu_xin_chan.md) <span style="color:#3aa675;font-weight:600">3.2</span>% / [霍光](/relics/epic/huo_guang.md) <span style="color:#3aa675;font-weight:600">2.7</span>% 时，战斗奖励的「第五技能 / 无色」位与商店无色栏（稀有）按概率刷出。两条途径互不影响。

## 相关机制

- [悼](/mechanics/mourning.md)（打出后下个回合由瓦库代替你行动）
- [保留](/mechanics/retain.md)（升级后获得的关键词）

## 相关能力

- [命寻星叹](/powers/fate_star_sigh_power.md)（下个回合所有牌会多打出一次）
- [拥君之盾](/powers/sovereign_shield_power.md) / [绝缘之罩](/powers/insulation_cover_power.md)（卫岳的开启条件）

## 源码

- `SeerYueFateStarSigh.cs`
- `SeerFateStarSighPower.cs`
- `SeerMourningPower.cs`
- `SeerWeiYue.cs`