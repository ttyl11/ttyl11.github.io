# 免控

<img src="/images/powers/debuff_immune_power.png" alt="异常免疫" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 递减（计数型）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 回合数 | 1 |
| 层数 | 1 |

> 注：实际施加时由卡牌指定回合数（如 [灼目天星](/cards/character/blinding_heaven_star.md) 施加 <span style="color:#3aa675;font-weight:600">2</span> 回合）。
> **归属**：玩家可施加
> **施加来源**：玩家获得——[灼目天星](/cards/character/blinding_heaven_star.md)（卡牌）、[魔·黑天暗罚](/fifth-skill/magic_black_sky_punishment.md)（卡牌）、[十玄释](/cards/character/shi_xuan_shi.md)（卡牌）、[瀚宇星皇](/relics/legendary/cosmic_emperor.md)（遗物）、[缔笙](/relics/epic/di_sheng.md)（遗物）、[启灵元神](/relics/legendary/enlightened_spirit_god.md)（遗物）、[至序圣华](/relics/legendary/order_holy_hua.md)（遗物）、[弑序神罗](/relics/legendary/order_killing_god_luo.md)（遗物）、[混元天尊](/relics/legendary/primordial_tianzun.md)（遗物）

## 描述

①获得<span style="color:#3aa675;font-weight:600">层数</span>回合<span style="color:#d4a017;font-weight:600">免控</span>：免疫<span style="color:#d44;font-weight:600">异常状态</span>。<br/>在对方回合结束时减少<span style="color:#3aa675;font-weight:600">1</span>层。

## 详细机制

- **免疫判定**：通过拦截受到的状态施加来免疫。当层数大于 0 且自身即将受到异常状态（27 种）时，将施加量改为 <span style="color:#3aa675;font-weight:600">0</span>，即完全免疫。除特别标注外，本能力及卡面[免控](/mechanics/mian_kong.md)关键词**仅免疫异常状态**，不免疫原版通用减益（虚弱/易伤等）与属性下降。
- **不阻断友方增益**：自身或友方施加的正面增益（包括狂暴、星赐等正面异常）不会被免控拦截；但**自己给自己挂的非增益异常同样会被挡下**（如八月的流火自身烧伤）。
- **不免疫自身**：不会免疫异常免疫和异常免疫·反弹自身，避免递归。
- **不可见能力不免疫**：仅对可见的能力生效。
- **对方回合结束递减**：在**对方**回合结束时层数 -<span style="color:#3aa675;font-weight:600">1</span>——免疫的生效窗口是敌方回合（敌方施加异常的时机），N 层恰好覆盖 N 个敌方回合，施加当回合不损耗。
- **与异常免疫·反弹的区别**：本能力仅免疫不反弹；异常免疫·反弹在免疫的同时将异常状态反弹给所有敌人。

## 相关卡牌

- [创灵护界决](/cards/character/creation_world_ward.md)
- [灼目天星](/cards/character/blinding_heaven_star.md)（施加 <span style="color:#3aa675;font-weight:600">2</span>
              回合异常免疫，升级后 <span style="color:#3aa675;font-weight:600">4</span> 回合）
- [阑珊百转](/cards/character/waning_turns.md)
- [染夜天妖](/cards/character/night_demon.md)
- [魔·黑天暗罚](/fifth-skill/magic_black_sky_punishment.md)

## 相关能力

- [异常免疫·反弹](/powers/debuff_immune_reflect_power.md)（带反弹的版本）

## 源码

- `SeerDebuffImmunePower.cs`
