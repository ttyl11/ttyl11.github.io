# 寒冰护体

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[阿克希亚](/monsters/elite/axe_monster.md)

<img src="/images/powers/ice_armor_power.png" alt="寒冰护体" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 无类型（不参与增益/减益分类，不可被驱散/净化）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

受到伤害后，若自身生命值不高于<span style="color:#3aa675;font-weight:600">10%</span>，回复全部生命值。

## 详细机制

- **可无限次触发**：只要受到伤害后生命 ≤10%，就把当前生命补到上限，没有次数限制。
- **首次触发追加手段**：阿克希亚第一次触发时，会立即插入「极度冰点」技能（当回合改意图）。
- 完全格挡也算「受到伤害」；若该次伤害直接把生命打到 0，则不触发。

## 源码

- `SeerIceArmorPower.cs`
