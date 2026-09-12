# 无效附魔

<img src="/images/enchantments/seer_invalid_enchantment.png" alt="无效" style="max-width:70px;border-radius:8px" />

## 基本信息

- **分类**: mod 新增附魔（特殊附魔）
- **效果**: 无实际效果

## 描述

无实际效果。

## 机制说明

- **占位附魔**：没有任何实际效果的占位附魔。卡牌被附魔后仅改变"已附魔"状态，不提供任何特殊能力。
- **主要用途**：[朦光混影术](/cards/character/dim_light_shadow_art.md)的[溯引](/mechanics/suyin.md)触发时，会随机选择一张[抽牌堆](/mechanics/draw_pile.md)中的牌施加此附魔——目的是增加该牌"牌堆中每有一张附魔，伤害+X"的附魔计数，实现自我联动成长。
- **计数价值**：被此附魔的牌仍计入所有"已附魔牌数"的统计口径（如朦光混影术的伤害计算），属于可被计数的附魔。

## 源码

- `SeerInvalidEnchantment.cs`
