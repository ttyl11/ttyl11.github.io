# 免控

> **归属**：玩家与怪物均可持有
> **施加来源**：
> - [超算鲁比克](/relics/rare/rubik_supercomputer.md)（遗物——每场战斗开始时矩阵秩为 0）
> - 薇尔诗关键词——与薇尔诗牌**隔位**的牌被打出后，本场战斗生效
> - [殉道者圣别](/cards/colorless/martyr_holy_divine.md)（卡牌——三件套选择免疫分支后，下一场战斗生效）
> - [大地之神·卡修斯](/monsters/elite/earth_god_casius_monster.md)、[哀目黑子](/monsters/elite/aimu_heizi_monster.md)、[虹雨·茜尔](/monsters/elite/rainbow_feather_xier_monster.md)（怪物自带）
> - [药剂反噬刻印](/engravings/index.md)（刻印——奥斯提/召唤物）

<img src="/images/powers/permanent_debuff_immune_power.png" alt="永久免控" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单次（Single，无层数）
- **可见**: 是

## 描述

永久[<span style="color:#d4a017;font-weight:600">免控</span>](/mechanics/mian_kong.md)：免疫所有[<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)与[<span style="color:#d4a017;font-weight:600">属性下降</span>](/powers/attr_down_immune_turn_power.md)。

## 详细机制

- **明说双轨免疫**：本能力是明确标注的复合免疫——同时免疫所有 27 种 Seer [异常状态](/mechanics/abnormal-status.md)以及力量、防御、命中、速度的负值变化（属性下降）。
- **不阻断友方增益**：自身或友方施加的正面增益（包括属于异常体系的狂暴、星赐等）不会被拦截。
- **无层数、不衰减**：没有层数概念，整场战斗持续生效，不存在"按回合 -1"或"按次数 -1"的消耗。
- **不可见能力不免疫**：仅对可见的能力生效。

## 小贴士

- 玩家侧三个来源的获取难度：薇尔诗隔位最容易（手里有薇尔诗牌时打它隔位的牌即可），超算鲁比克需要 PP 牌矩阵秩为 0 的刻意构筑，殉道者圣别是三件套的免疫分支（下一场战斗才生效，本战斗没有）。
- 永久免疫异常状态和属性下降，是面对控制型和削弱型敌人的顶级防御核心。

## 相关卡牌

- [殉道者圣别](/cards/colorless/martyr_holy_divine.md)（免疫分支 → 下一场战斗）

## 相关遗物

- [超算鲁比克](/relics/rare/rubik_supercomputer.md)（秩为 0 时获得）

## 相关关键词

- [薇尔诗](/mechanics/keywords.md)（隔位打出 → 本场战斗免疫异常）

## 源码

- `SeerPermanentDebuffImmunePower.cs`
