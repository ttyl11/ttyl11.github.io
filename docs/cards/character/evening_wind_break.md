# 晚风孤夜断

<img src="/images/cards/evening_wind_break.png" alt="晚风孤夜断" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌

- **最大PP**: 5

- **能量消耗**: 1

- **类型**: 攻击

- **稀有度**: 罕见

- **目标**: 单个敌方

- **可升级**: 是（1 级）

- **关键词**: 无

### 数值参数

| 参数    | 数值     | 升级后    |
| ----- | ------ | ------ |
| 基础伤害  | 20     | 30     |
| 堕落 | 27 | 27 |
| PP    | 5      | 5      |
| 最大PP  | 5      | 5      |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 对单个敌人造成<span style="color:#d44;font-weight:600">20</span>点伤害。[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">27</span>。

## 升级后

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 对单个敌人造成<span style="color:#d44;font-weight:600">30</span>点伤害。[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">27</span>。

## 工作机制

- **单次伤害**：造成 20/30 点攻击伤害，无连击。

- **堕落来源**：伤害结算后，提供 <span style="color:#3aa675;font-weight:600">27</span> 点[堕落](/powers/fallen_power.md)——堕落是负面机制，但坏得不致命，配合[混沌起源](/relics/starter/chaos_origin.md)回上限兜底，可视为"用失控进度换伤害"的交易。

- **无关键词**：此牌无 [凝驻](/mechanics/ningzhu.md)、[毁灭](/mechanics/destruction.md) 等特殊关键词，正常随回合流转到弃牌堆。

## 小贴士

- **高伤害 + 高堕落的双重代价牌**：1 费造成 20 点伤害，同时提供 <span style="color:#3aa675;font-weight:600">27</span> 点[堕落](/powers/fallen_power.md)——堕落不是奖励而是负面：PP<span style="color:#3aa675;font-weight:600">5</span> 打满就是 135 层，几乎必然触发一次[魔君接管](/powers/demon_takeover_power.md)的强制乱打。打这张牌前要清楚自己在把"失控"往 100 的倍数上推。

- **堕落需要管理而非回避**：单次 27 的高额堕落，索伦森体系里四发打满约推进 108 层——会在中途强制接管一次手牌。正确用法是把这张牌当作"高输出 + 堕落推进"的平衡点：在临近 100 层触发前，先把不想被乱打的牌打完，让接管朝着有利方向开牌。

- **升级纯正向收益**：伤害从 20→30（+10），堕落 <span style="color:#3aa675;font-weight:600">27</span> 不变。升级后每次攻击的收益大幅提升，优先级极高。

- **无需配合即可独立生效**：不像透支型输出需要回属性或护盾兜底，这张牌的伤害与堕落都是独立结算——属性体系（力量/命中/防御/速度）完全不受影响，配合[孤身绝念刺](./lone_despair_stab.md)等负值反转类卡牌也无需顾虑自身属性被带偏。

## 相关能力

- [堕落](/powers/fallen_power.md)（每次造成 27 点堕落层数）

## 相关机制

- [PP系统](/mechanics/pp-system.md)（PP 消耗）
- [堕落](/powers/fallen_power.md)（满 100 层触发魔君接管）

## 源码

- `SeerEveningWindBreak.cs`

