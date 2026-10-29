# 圣诰

> **归属**：玩家可施加
> **施加来源**：玩家施加给敌方——[墟埪](/cards/character/xukong.md)（卡牌）、[圣谕形态](/powers/divine_form_power.md)（能力联动）、[神明送葬](/powers/god_funeral_power.md)（能力联动）；玩家侧联动——[邪魇形态](/powers/evil_form_power.md)

<img src="/images/powers/holy_edict_power.png" alt="圣诰" style="max-width:120px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff）
- **叠加方式**: 计数（递减型）
- **可见**: 是
- **来源**: mod

### 数值参数

| 参数 | 数值 |
|---|---|
| 疲惫概率 | 60% |
| 疲惫回合数 | 2 |
| 减层伤害阈值百分比 | 50%（层数 × 50%） |

## 描述

①自身受到攻击伤害时，有<span style="color:#3aa675;font-weight:600">60%</span>概率获得<span style="color:#d44;font-weight:600">疲惫</span><span style="color:#3aa675;font-weight:600">2</span>层。<br/>②若本次伤害低于自身层数的<span style="color:#3aa675;font-weight:600">50%</span>，层数-<span style="color:#3aa675;font-weight:600">1</span>。

## 详细机制

- **触发时机**：持有者受到伤害后结算，每段伤害分别判定。
- **疲惫判定**：只对**攻击伤害**掷 60%（固定伤害等非攻击伤害不掷），成功则对**持有者自身**施加 2 回合疲惫。
- **减层判定**：对**任意伤害**都判定——本次总伤害 < 层数 × 50% 时，层数 -1（含被格挡部分；非攻击伤害也能减层）。
- **每层重新计算**：每当层数变化时，重置疲惫概率、疲惫回合数和减层阈值百分比为固定值（60、2、50），确保数值不会被外部修改失真。

## 获得方式

圣诰主要由以下三种途径施加：

1. **[圣谕形态](/powers/divine_form_power.md)攻击**：持有圣谕形态时，造成攻击伤害，对**目标**附加 1 层圣诰。
2. **[邪魇形态](/powers/evil_form_power.md)反制**：持有邪魇形态时，受到**敌方任意伤害**（不限攻击、完全格挡也算），自动为**伤害来源**附加 1 层圣诰。
3. **[神明送葬](/powers/god_funeral_power.md)受击触发**：该能力存在期间，每次受到总伤害 > 0 的伤害，为所有敌人各施加 3 层圣诰，然后自身层数 -1。

## 相关卡牌

- [神明送葬](/cards/character/god_funeral.md)（进入邪魇形态，受击时为所有敌人施加圣诰）

## 相关能力

- [圣谕形态](/powers/divine_form_power.md)（攻击时对目标施加圣诰）
- [邪魇形态](/powers/evil_form_power.md)（受击时为攻击者施加圣诰）
- [邪诲](/powers/evil_teaching_power.md)（对称设计：圣谕形态受击时施加给攻击者的减益，使攻击者回血反制）
- [疲惫](/powers/fatigue_power.md)（圣诰触发的减益）

## 源码

- `SeerHolyEdictPower.cs`
- `SeerDivineFormPower.cs`
- `SeerEvilFormPower.cs`
