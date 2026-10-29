# 残鸣（CanMing）

**残鸣**是赛尔职业的关键词，提供"此牌被消耗时"的触发时机；具体效果由卡牌自己定义。

## 规则说明

| 项目 | 说明 |
| --- | --- |
| 适用范围 | 赛尔 PP 牌 |
| 触发时机 | 此牌被[消耗](/mechanics/exhaust.md)时 |
| 效果 | 由卡牌自定义；关键词本身默认**不产生任何效果** |
| 关键词类型 | 触发型关键词，效果写在卡牌描述里 |

**触发流程：**

1. 这张牌被打出或因为 PP 归 0 被遗物效果消耗，进入[消耗牌堆](/mechanics/exhaust_pile.md)。
2. 系统检测到「残鸣」，调用这张牌自己的残鸣效果。
3. 效果结算完成后继续战斗。

关键细节：

- **不是统一的"回收一张牌"**：残鸣只给触发时机，不同卡牌的残鸣效果完全不同
- 触发时这张牌已经在消耗牌堆里，卡牌可以选择消耗牌堆中的牌（也能选到自己）
- 与[蚀返](/mechanics/shifan.md)的区别：蚀返是固定效果（向抽牌堆生成复制品），残鸣是每张牌各自定义
- 与[迁鸣](/mechanics/qianming.md)的区别：残鸣只在这张牌被消耗时触发

## 带残鸣的卡牌

| 卡牌 | 残鸣效果 |
| --- | --- |
| [神权忤逆](/cards/character/shen_quan_wu_ni.md) | 从消耗牌堆**选择** 1 张牌加入手牌（不是随机） |
| [轮墓边狱](/cards/character/rinbo_purgatory.md) | 每有 50 层堕落，随机打出抽牌堆 1 张牌 |
| [百鬼夜行](/cards/character/hundred_ghosts.md) | 召唤 7 |
| [耀武遗辉](/cards/character/glorious_remnant.md) | 除自身外，所有 PP 牌的 PP 回满 |

::: tip 神权忤逆怎么被消耗
神权忤逆本身不带「消耗」。它 PP 只有 1，打出后 PP 归 0，下回合开始会被初始遗物「群星的礼赠」自动消耗，从而同时触发蚀返与残鸣。
:::

## 与类似机制的区别

| 机制 | 区别 |
| --- | --- |
| **蚀返（ShiFan）** | 固定向抽牌堆生成一张原始数据的复制品；残鸣由卡牌自定义 |
| **回响（Echo）** | 己方回合开始从抽牌堆复制到弃牌堆；残鸣只在被消耗时触发 |
| **迁鸣（QianMing）** | 这张牌在牌堆间移动时触发；残鸣只认"被消耗"这一种移动 |

## 相关词条

- [蚀返（ShiFan）](/mechanics/shifan.md)
- [消耗（Exhaust）](/mechanics/exhaust.md)
- [迁鸣（QianMing）](/mechanics/qianming.md)

## 源码

- `SeerKeywordEffectManager.cs`
- `SeerPpCardModel.cs`
- 各卡牌源码文件
- `card_keywords.json`（本地化）
