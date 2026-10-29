# 永耀

> mod 附魔（Enchantment）

## 基本信息

- **类型**: mod 附魔
- **注册 ID**: `SEER_ENCHANTMENT_SEER_ETERNAL_RADIANCE_ENCHANTMENT`
- **显示数量**: 否
- **可附魔类型**: 攻击牌、技能牌、能力牌

## 描述

被附魔的卡牌耗能降为 <span style="color:#3aa675;font-weight:600">0</span>，获得[保留](/mechanics/retain.md)关键词，但每回合只能打出一张永耀牌。

## 详细机制

- **附魔时**：卡牌获得「保留」，基础耗能设为 0（持续到附魔被移除）。
- **打出限制**：每回合只能打出一张带永耀附魔的牌。判定方式是统计本回合已经开始打出的永耀牌数量；如果本回合已经打出过一张，其它永耀牌就无法打出。
- **不添加关键词**：限制由附魔自身的可打出判定完成，不会给牌加「不能被打出」，也不会额外施加追踪能力。
- **重放/自动打出**：判定按"本回合已打出的永耀牌数量"计算，正在打出的那张会在统计中被排除。
- **保留 + 0 费**：附魔只改变打出条件，不改变卡牌本身效果。

## 相关机制

- [保留](/mechanics/retain.md)
- [附魔总览](/mechanics/enchantment)

## 相关卡牌

- [合奏·常昼大诰](/fifth-skill/ensemble_eternal_edict.md)（为生成的 4 张牌附魔永耀）

## 源码

- `SeerEternalRadianceEnchantment.cs`
