# 邪魇形态

> **归属**：玩家可施加
> **施加来源**：玩家获得——[神明送葬](/cards/character/god_funeral.md)（卡牌）、[圣谕形态](/powers/divine_form_power.md)（能力联动）

<img src="/images/powers/evil_form_power.png" alt="邪魇形态" style="max-width:120px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 伤害减免百分比（DamageReduction） | 25 |
| 伤害减免百分比（DamageReductionPercent） | 25 |

## 描述

①免疫<span style="color:#d4a017;font-weight:600">属性下降</span>，受到的伤害降低<span style="color:#3aa675;font-weight:600">25%</span>。<br/>②攻击造成伤害时，使目标获得<span style="color:#3aa675;font-weight:600">1</span>层<span style="color:#d4a017;font-weight:600">邪诲</span>。<br/>③受到敌人伤害时，使伤害来源获得<span style="color:#3aa675;font-weight:600">1</span>层<span style="color:#d4a017;font-weight:600">圣诰</span>。

## 详细机制

- **形态系统**：与[圣谕形态](/powers/divine_form_power.md)互斥。切换回圣谕形态时移除自身，并施加圣谕形态与 1 层先制。
- **属性下降免疫**：只拦力量、速度、防御、命中四项的**负层**施加（施加量改为 0）；其他属性或正层不受影响。
- **伤害减免**：伤害来源存在且不是自身时，受到的伤害一律 ×0.75（不区分敌我）；无来源伤害不减伤。
- **攻击反击（邪诲）**：自身造成攻击伤害时，若总伤害 > 0 且目标不是自己，对目标施加 1 层[邪诲](/powers/evil_teaching_power.md)。总伤害含被格挡部分——完全格挡也会触发。
- **受击反击（圣诰）**：自身受到敌方来源、总伤害 > 0 的伤害时，对来源施加 1 层[圣诰](/powers/holy_edict_power.md)。不限攻击伤害，也不要求实际扣血。

## 相关能力

- [圣诰](/powers/holy_edict_power.md)（受击时对来源施加）
- [邪诲](/powers/evil_teaching_power.md)（攻击时对目标施加）
- [圣谕形态](/powers/divine_form_power.md)（互斥形态）

## 相关卡牌

- [神明送葬](/cards/character/god_funeral.md)（进入邪魇形态）

## 源码

- `SeerEvilFormPower.cs`
