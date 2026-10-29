# 狂暴

> **归属**：玩家可施加
> **施加来源**：玩家获得——[蔑天行·残虐](/cards/character/despise_heaven_cruelty.md)（卡牌）、[王·龙予狂宴](/cards/character/dragon_feast.md)（卡牌）、[找茬](/cards/character/find_fault.md)（卡牌）、[狂暴宝石](/enchantments/fury_gem.md)（附魔）、[镜影术](/powers/mirror_image_power.md)（能力联动）；玩家施加给敌方——[狂能激发](/cards/character/frenzy_excitation.md)（卡牌）、[曙光普照](/cards/character/shining_light.md)（卡牌）

<img src="/images/powers/fury_power.png" alt="狂暴" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 叠加（Counter）
- **可见**: 是
- **来源**: mod 能力

### 数值参数

| 参数 | 数值 |
|---|---|
| 每层伤害增加百分比 | 25 |

## 描述

每有一层，攻击伤害增加<span style="color:#3aa675;font-weight:600">25</span>%。自身回合结束时减少<span style="color:#3aa675;font-weight:600">1</span>层。

## 详细机制

- **伤害加成**：当拥有者造成攻击伤害时，每层增加 <span style="color:#3aa675;font-weight:600">25</span>% 伤害。
- **回合结束递减**：在拥有者一方回合结束时，层数 -<span style="color:#3aa675;font-weight:600">1</span>。
- **计算示例**：2 层狂暴 = 伤害 ×1.5，4 层狂暴 = 伤害 ×2.0。

## 小贴士

- **属于异常状态，但不在随机池**：狂暴在 27 种异常状态名单内（可被"免疫异常"识别），但被排除在 23 种随机池外——随机施加异常的效果不会抽到它。
- **友方增益保护**：自身或友方施加的狂暴不会被己方免控/弹控拦截；敌方给你施加时，免控仍会挡下。
- 对玩家是增益，施加给敌人则增强其输出。

## 相关卡牌

- [蔑天行·残虐](/cards/character/despise_heaven_cruelty.md)（自身获得 2 回合狂暴）
- [找茬](/cards/character/find_fault.md)（每安装一个 mod，所有生物获得 1 回合狂暴）

## 源码

- `SeerFuryPower.cs`、`SeerAbnormalStatus.cs`
