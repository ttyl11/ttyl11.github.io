# 凤之涅槃

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[菲尼克斯](/monsters/boss/phoenix_monster.md)

<img src="/images/powers/phoenix_nirvana_power.png" alt="凤之涅槃" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 无类型（不参与增益/减益分类，不可被驱散/净化）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

①自身回合结束时，向每个玩家的抽牌堆随机加入<span style="color:#3aa675;font-weight:600">1</span>张<span style="color:#d4a017;font-weight:600">烬翎</span>。<br/>②自身死亡时，最大生命值降为当前最大生命值的<span style="color:#3aa675;font-weight:600">80%</span>，回复全部生命值复活，获得<span style="color:#3aa675;font-weight:600">1</span>层<span style="color:#d4a017;font-weight:600">缓冲</span>并再给予<span style="color:#3aa675;font-weight:600">1</span>张<span style="color:#d4a017;font-weight:600">烬翎</span>。<br/>③自身回合开始时，若每个玩家的<span style="color:#d4a017;font-weight:600">烬翎</span>均达到<span style="color:#3aa675;font-weight:600">24</span>张，自身真正死亡。

## 详细机制

- **每回合塞烬翎**：菲尼克斯自己回合结束时，向每个玩家的抽牌堆随机位置各加入 1 张烬翎。
- **无限复活**：每次死亡都会阻止死亡，把最大生命降为**上次最大生命的 80%**（最低 1）并回满，然后获得 1 层[缓冲](/powers/buffer_power.md)，再给每个玩家各 1 张烬翎。
- **越复活越脆**：最大生命每次都缩水 20%，复活次数越多越容易被打穿。
- **真正死亡的条件**：自己回合开始时检查——**每个玩家**的抽牌堆 + 手牌 + 弃牌堆里的烬翎都达到 <span style="color:#3aa675;font-weight:600">24</span> 张时，解除免死并直接击杀菲尼克斯。
- **不数消耗堆**：被消耗/移除的烬翎不计入 24 张，想靠消耗堆规避胜利是无效的。
- **复活过程无敌**：复活瞬间免疫伤害、能力施加与选中，也不会让战斗提前结束。

## 小贴士

- **烬翎是胜利计时器**：每回合自动 +1，加上每次复活 +1——别急着打它，先让它把烬翎发够。
- **别把烬翎消耗掉**：消耗堆里的烬翎不计入 24 张，会拖慢胜利条件。
- **复活会送缓冲**：每次复活后它带 1 层缓冲，下一刀会被挡掉——留一段小伤害先破缓冲，再打主输出。
- **多人必须人人达标**：每个玩家各自 24 张才算数，不是全队合计。

## 源码

- `SeerPhoenixNirvanaPower.cs`
