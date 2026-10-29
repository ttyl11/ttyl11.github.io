# 借鉴

<img src="/images/cards/borrow.png" alt="借鉴" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 诅咒牌
- **类型**: 诅咒
- **稀有度**: 诅咒
- **关键词**: [溯引](/mechanics/suyin.md)、[残鸣](/mechanics/canming.md)、[不可打出](/mechanics/unplayable.md)
- **可升级**: 否

### 数值参数

| 参数 | 数值 |
|---|---|
| 加入的外来牌数量 | 3 |

## 描述

<span style="color:#d44;font-weight:600">溯引</span>：向手牌加入<span style="color:#3aa675;font-weight:600">3</span>张其他角色的牌，费用<span style="color:#3aa675;font-weight:600">+1</span>。<span style="color:#d44;font-weight:600">残鸣</span>：销毁手牌、弃牌堆、抽牌堆中的所有非<span style="color:#d4a017;font-weight:600">PP</span>牌。

## 小贴士

- **它是"抽到就塞手牌"的慢性噪音**：溯引挂在抽到上——每次它被抽到，你手里立刻多出 <span style="color:#3aa675;font-weight:600">3</span> 张原版五角色（铁甲战士、静默猎手、故障机器人、亡灵契约师、储君）的牌，且本回合各贵 <span style="color:#3aa675;font-weight:600">1</span> 费。抽到它的那一回合，手牌最满、费用最紧，最容易卡手。
- **你其实不用管它**：借鉴不可打出、也不保留，回合结束自动进弃牌堆、随洗牌再回来——不锁出牌、不掉血。它的全部伤害就是"每循环一次塞你一手牌"。**想减负就打得快一点**，循环次数越少塞得越少。
- **千万别让任何"消耗"效果碰到它（会当场毁掉这一场）**：它带[残鸣](/mechanics/canming.md)——一旦被消耗，手牌、弃牌堆、抽牌堆里**所有非 PP 牌当场被销毁**，本场战斗你几乎无牌可用（打击、防御因为归在 PP 卡类里能幸免）。所以要注意**顺手消耗手牌的连锁效果**：手里有借鉴时，[傲慢](/cards/curse/pride.md)这类"随机消耗手牌"的牌就是定时炸弹。
- **真要处理，用变牌，不要用消耗**：它不带[永恒](/mechanics/eternal.md)，变牌能干净地把它变成别的牌（变牌不是消耗，不会触发残鸣）；消耗则是灾难。
- **性价比**：不可打出、无费用，谈不上费效比。它是一张"放着不管就慢性塞手牌、手贱去清就当场爆炸"的污染型诅咒。

## 相关机制

- [手牌](/mechanics/hand.md)（溯引的塞牌目标）
- [溯引](/mechanics/suyin.md) / [残鸣](/mechanics/canming.md)（两个触发型关键词）
- [消耗](/mechanics/exhaust.md)（触发残鸣的动作）
- [销毁牌堆](/mechanics/destroyed_pile.md)（残鸣销毁的牌的去向）
- [不可打出](/mechanics/unplayable.md)（无法主动打出）

## 源码

- `SeerBorrow.cs`