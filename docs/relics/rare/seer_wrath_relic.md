# 安格瑞

<img src="/images/relics/seer_wrath_relic.png" alt="安格瑞" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物

- **稀有度**: 稀有

## 描述

战斗结束的[<span style="color:#d4a017;font-weight:600">卡牌奖励</span>](/mechanics/game-flow.md)选项数 +<span style="color:#3aa675;font-weight:600">1</span>。卡牌奖励界面额外出现「愤怒」选项，选择后放弃本次卡牌选择，向[<span style="color:#d4a017;font-weight:600">牌组</span>](/mechanics/hand.md)中加入<span style="color:#3aa675;font-weight:600">1</span>张附魔[<span style="color:#93c">迅捷</span>](/enchantments/)<span style="color:#3aa675;font-weight:600">1</span>的[<span style="color:#d4a017;font-weight:600">愤怒</span>](https://github.com/Megacrit/StS2/blob/develop/src/MegaCrit.Sts2/Core/Models/Cards/Basic/Anger.cs)。累计选择「愤怒」<span style="color:#3aa675;font-weight:600">7</span>次后，向[<span style="color:#d4a017;font-weight:600">牌组</span>](/mechanics/hand.md)中加入[<span style="color:#3aa675;font-weight:600">暴怒</span>](/cards/curse/wrath)。

## 风味文字

<span style="color:#d44;font-weight:600">愤怒，令理智溃堤。</span>

## 机制说明

- **选项数 +1**：战斗胜利后的卡牌奖励多给 1 张。

- **「愤怒」替代按钮**：点击即放弃本次选牌，**立即向牌组加入 1 张「愤怒」**（原版基础牌），并给它附魔「迅捷 1」（回合开始抽一张牌）。

- **累计 7 次后并入罪牌**：向牌组加入 1 张[<span style="color:#3aa675;font-weight:600">暴怒</span>](/cards/curse/wrath)诅咒牌；此后「愤怒」按钮失效。

## 小贴士

- **愤怒本身就是一张好用的零费牌**：原版愤怒是零费打 6 的快速输出，叠了迅捷之后每用一张多抽一张，本身不亏牌，白送一张就白赚一个输出/过牌循环的起点。

- **迅捷能叠**：愤怒的「迅捷 1」附魔是永久的，你点多少次就能叠多少层，叠多了它会变成"打出抽 N 张"的抽牌引擎——虽然通常一层就够，但上限很高。

- **偏中期收益**：牌组越薄，加入一张愤怒比例越大；需要稳定输出/过牌的快中速卡组里最划算，纯防御慢节奏卡组收益一般。

- **可以"养"冲锋牌**：愤怒多次加入后，配合多次打出它，既补充攻击密度又靠迅捷抽牌加速整局节奏，适合围绕"多打一次/复制/迅捷"的构筑。

- **7 次的暴怒诅咒是代价**：攒满 7 次拿到[暴怒诅咒](/cards/curse/wrath)，但前面每次白得一张可用的愤怒+过牌，收益大于后期那一张诅咒——需要补输出时可放心点。

- **多人协作**：迅捷附魔让愤怒在多人高费环境中能快速刷牌，适合作自我的低成本过牌源。

## 扩展·机制说明（补充）

- 加入的是**原版「愤怒」**（Anger，零费打 6），并非本 mod 的狂怒类技能，附魔为「迅捷 1」（回合开始先抽 1 张）。

- 每次点「愤怒」都重新生成一张**独立的**愤怒并各自附魔迅捷，可叠加多张。

## 源码

- `SeerWrathRelic.cs`

- 罪牌 [`SeerWrath.cs`](/cards/curse/wrath)
