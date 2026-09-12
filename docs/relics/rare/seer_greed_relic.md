# 格利德

<img src="/images/relics/seer_greed_relic.png" alt="格利德" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物

- **稀有度**: 稀有

## 描述

战斗结束的[<span style="color:#d4a017;font-weight:600">卡牌奖励</span>](/mechanics/game-flow.md)选项数 +<span style="color:#3aa675;font-weight:600">1</span>。卡牌奖励界面额外出现「贪婪」选项，选择后放弃本次卡牌选择，获得<span style="color:#3aa675;font-weight:600">3</span>点[<span style="color:#d4a017;font-weight:600">泰坦之灵</span>](/mechanics/currency.md)。累计选择「贪婪」<span style="color:#3aa675;font-weight:600">7</span>次后，向[<span style="color:#d4a017;font-weight:600">牌组</span>](/mechanics/hand.md)中加入[<span style="color:#3aa675;font-weight:600">贪婪</span>](/cards/curse/greed)。

## 风味文字

<span style="color:#d44;font-weight:600">贪婪，永不知足。</span>

## 机制说明

- **选项数 +1**：战斗胜利后的卡牌奖励多给 1 张。

- **「贪婪」替代按钮**：点击即放弃本次选牌，**直接获得 3 点泰坦之灵**（不经过任何判定，即时入账）。

- **累计 7 次后并入罪牌**：向牌组加入 1 张[<span style="color:#3aa675;font-weight:600">贪婪</span>](/cards/curse/greed)诅咒牌；此后「贪婪」按钮失效。

## 小贴士

- **稳定产泰坦之灵**：泰坦之灵是重要货币/养成资源，每点一次稳定 +3，攒满 7 次共 +21，是获取泰坦之灵最可靠的来源之一。

- **不怕点满**：即便拿满 7 次，[贪婪诅咒](/cards/curse/greed)的代价也被 21 点泰坦之灵的收益盖过——急需资源时可放心点。

- **对资源型构筑友好**：需要大量泰坦之灵升级/兑换/强化时，可反复点贪婪放弃选牌来"刷"资源；泰坦之灵本身弹性大，存着不会贬值。

- **与暴食同理的"无限养"**：停在 6 次以内，每场都能用贪婪白赚 3 点泰坦之灵，只是它加的是货币而不是血，适合追求资源上限的玩法。

- **收益是否"亏"取决于资源需求**：如果你泰坦之灵已满载、或当前卡组急缺卡牌，点贪婪换资源不一定划算；反之资源紧张时它是雪中送炭。

## 扩展·机制说明（补充）

- 泰坦之灵为全局货币，不受当前手牌/战斗环境影响，即时入账且可持续积累，无上限。

## 源码

- `SeerGreedRelic.cs`

- 罪牌 [`SeerGreed.cs`](/cards/curse/greed)