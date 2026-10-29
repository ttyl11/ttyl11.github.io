# 涨价

<img src="/images/cards/price_up.png" alt="涨价" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 诅咒牌
- **类型**: 诅咒
- **稀有度**: 诅咒
- **关键词**: [不可打出](/mechanics/unplayable.md)
- **可升级**: 否

### 数值参数

| 参数 | 数值 |
|---|---|
| 抽奖成本增加 | 1 |

## 描述

此牌在牌组时，抽奖所需[泰坦之灵](/mechanics/currency.md) <span style="color:#3aa675;font-weight:600">+1</span>。

## 小贴士

- **它给抽奖"永久加税"**：只要它在牌组里，[泰坦之灵商店](/events/boss_shop.md)的金蛋抽奖就从 1 变 <span style="color:#3aa675;font-weight:600">2</span> 泰坦之灵/抽——**成本直接翻倍**。它不碰战斗，只掏空你的抽奖预算。
- **多张不叠加**：牌组里放几张都只 +1——所以抽到第二张不用更慌。
- **唯一解法是局外处理**：它不可打出，战斗中动不了；只能在局外删牌或变牌（它不带[永恒](/mechanics/eternal.md)，删得掉）。
- **什么时候必须删**：如果你靠金蛋抽奖滚雪球（围绕泰坦之灵 / [星辰之录](/relics/event/star_tracker_relic.md)的构筑），它等于每抽一次多花一份资源——**越早删越省**。
- **性价比**：无费不可打出，对战斗零影响。它是对"抽奖经济"的被动征税——**抽奖依赖度越高，越该优先删掉**。

## 相关机制

- [不可打出](/mechanics/unplayable.md)（无法主动打出）
- [泰坦之灵商店](/events/boss_shop.md)（受影响的抽奖）
- [泰坦之灵](/mechanics/currency.md)（增加消耗的资源）

## 源码

- `SeerPriceUp.cs`