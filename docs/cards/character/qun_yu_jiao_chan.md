# 群宇纠缠

<img src="/images/cards/qun_yu_jiao_chan.png" alt="群宇纠缠" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌

- **最大PP**: 5

- **能量消耗**: 2

- **辉星消耗**: 7

- **类型**: 技能

- **稀有度**: 稀有

- **目标**: 自身

- **可升级**: 是（1 级）

### 数值参数

| 参数     | 数值              | 升级后   |
| ------ | --------------- | ----- |
| 生成辉星牌数 | 3（每多打出一次 +1）    | 4（+1） |
| 辉星消耗   | 7               | 7     |
| 免费复制   | 1 张（加入弃牌堆，本场免费） | 1 张   |
| PP     | 5               | 5     |
| 最大PP   | 5               | 5     |

## 描述

PP: 5/5 将此牌的一个<span style="color:#d4a017;font-weight:600">免费</span>的复制版本加入<span style="color:#d4a017;font-weight:600">弃牌堆</span>。<span style="color:#d4a017;font-weight:600">生成并打出</span>3张带<span style="color:#d4a017;font-weight:600">辉星</span>的随机牌。此牌每打出一次，多打出一张。

## 升级后

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 将此牌的一个**免费**的复制版本加入[<span style="color:#d4a017;font-weight:600">弃牌堆</span>](/mechanics/discard_pile.md)（本场免费）。生成并打出<span style="color:#3aa675;font-weight:600">4</span>张带[<span style="color:#d4a017;font-weight:600">辉星</span>](/mechanics/star.md)的随机牌。此牌每打出一次，多打出一张。

## 小贴士

- **越打越强的辉星引擎**：基础生成 <span style="color:#3aa675;font-weight:600">3</span> 张辉星随机牌，且**整局游戏每打出一次，下一次就多打一张**（第 1 次 3 → 第 2 次 4 → 第 3 次 5……），计数跨战斗保留。升级后基础从 3 升到 <span style="color:#3aa675;font-weight:600">4</span>，整条成长线整体抬高。这是一张把"累计使用"喂给输出的成长卡，用得越多越可怕。

- **免费复制进弃牌堆 = 钻牌库循环**：打出后会往弃牌堆塞一张**本场免费**的复制版本（不花能量也不花辉星）。复制品是独立卡牌，PP 回满 <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span>——所以配合抽牌/检索再次打出，不只是加快成长，还能突破原牌的 PP 上限。注意复制品只继承**复制瞬间**的累计打出次数（可能比原牌慢一拍），想最大化成长优先打原牌或较新的复制品。这是本牌刷成长的核心周转点。

- **自动打出辉星随机牌**：生成的辉星牌会被自动打出，需要单体目标时随机选择，**不消耗你的能量或辉星**（自动打出自带免费，即使你没有辉星也能打出）。牌池为全局所有带辉星消耗的牌（含原版、其它角色与 mod 牌，排除 MOCK 测试牌），效果从纯输出到功能牌都有，随机性带来的惊喜和惊吓对半。

- **7 辉星是核心成本**：这张牌的攻击面靠"制造并打出其他辉星牌"展开，自身高辉星消耗决定了它不是无脑连发牌。配合辉星生成源（如[星光仙气](/cards/character/starlight_aura.md)）才能持续喂饱，否则只能当决策牌偶尔打一发。

- **PP 5 是原牌上限——复制品能突破**：原牌单场最多打 <span style="color:#3aa675;font-weight:600">5</span> 次；每张免费复制品都有独立的 <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> PP，抽到并再次打出就能继续累积成长。真正的天花板是[辉星](/mechanics/star.md)储备与抽牌速度，不是 PP。

- **性价比**：2 费 + 7 辉星换"本场免费复制 + 3 张以上自动打出辉星牌"，是把辉星流量转化成爆发资源的引擎，喂饱后单卡收益远超表面费用。

## 相关机制

- [PP系统](/mechanics/pp-system.md)（PP 消耗与回复）

- [辉星](/mechanics/star.md)（消耗与生成源）

- 自动打出（生成的牌不消耗能量与辉星）

- [弃牌堆](/mechanics/discard_pile.md)、[抽牌堆](/mechanics/draw_pile.md)、[手牌](/mechanics/hand.md)（复制与抽牌）

## 源码

- `SeerQunYuJiaoChan.cs`

<br />
