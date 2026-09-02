# 回响

> mod 关键词（SEER_KEYWORD_ECHO）

## 基本信息

- **类型**: mod 卡牌关键词
- **来源**: mod 自定义关键词

## 描述

每回合开始时，若此牌在[抽牌堆](/mechanics/draw_pile.md)，向[弃牌堆](/mechanics/discard_pile.md)生成一张复制品。

## 详细机制

- **触发时机**：每个回合开始时自动检查。
- **判定条件**：只有位于[抽牌堆](/mechanics/draw_pile.md)中的回响牌才会触发；在其它位置的回响牌不触发。
- **效果**：每张符合条件的回响牌向[弃牌堆](/mechanics/discard_pile.md)底部生成 1 张自身复制品，原牌不动。

## 相关机制

- [抽牌堆](/mechanics/draw_pile.md)（触发位置）
- [弃牌堆](/mechanics/discard_pile.md)（复制品的生成位置）

## 源码

- `SeerKeywordEffectManager.cs`
- `card_keywords.json`（本地化）
