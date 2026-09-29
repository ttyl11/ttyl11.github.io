# 真神

> mod 关键词

## 基本信息

- **类型**: mod 卡牌关键词
- **来源**: mod 自定义关键词

## 描述

此牌只能被自动打出，打出后从所有牌堆永久消失。

## 详细机制

- **只能自动打出**：带有真神关键词的卡牌无法被玩家手动打出，只能通过其他卡牌或效果自动打出（如[奇巧](/mechanics/sly.md)、破灭等强制打出效果，或[薇](/mechanics/vigil.md)关键词的相邻自动打出）。
- **手牌保留**：真神卡牌在手牌中时，玩家无法点击打出，只能通过自动打出机制触发。
- **打出后整局永久消失**：被自动打出后，从所有牌堆（含弃牌堆/消耗堆）永久移除，**牌组中的同类牌也一并移除**——不回收、用一张少一张，整局彻底消失，后续战斗不再出现。
- **持有者仅两张**：真神关键词只有[混沌灭世决](/cards/ancient/world_end_decree.md)与[神灵救世光](/cards/ancient/divine_salvation_light.md)两张先古牌拥有；放入[真神牌堆](/mechanics/true-god-pile.md)的候选牌（光荣之梦等 7 张圣灵谱尼进阶先古牌）不带此关键词。

## 相关机制

- [薇](/mechanics/vigil.md)（相邻卡牌自动打出，可触发真神卡牌）
- [奇巧](/mechanics/sly.md)（给牌附加自动打出，可触发真神卡牌）
- [真神牌堆](/mechanics/true-god-pile.md)（存放真神牌与候选先古牌的跨战斗牌堆）

## 源码

- `SeerKeywordEffectManager.cs`
- `card_keywords.json`（本地化：`SEER_KEYWORD_TRUE_GOD.title` = "真神"）
