# 随风莫叹

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[圣谕之风·岚](/monsters/elite/holy_edict_wind_lan_monster.md)（技能「随风莫叹」）

<img src="/images/powers/wind_sigh_power.png" alt="随风莫叹" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 中性（None，不参与增益/减益分类）
- **叠加方式**: 叠加（Counter，层数 = 剩余回合）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| Threshold | 20 |

## 描述

持续期间，基础伤害高于[blue]20[/blue]的敌方攻击牌无法打出。

## 详细机制

- **判定对象**：只看攻击牌的**基础伤害**（卡面 `Damage` 值，未计算力量、易伤、暴击等修正）；基础伤害大于 <span style="color:#3aa675;font-weight:600">20</span> 的牌直接无法打出。
- **等于 20 可以打**：判定是"高于 20"，20 点整不受限制。
- **只封攻击牌**：技能牌、能力牌不受影响；也不影响已经打出的攻击。
- **持续窗口**：在**敌方（玩家）回合结束**时 -1 层；技能施加 1 层，即封锁 1 个玩家回合。

## 小贴士

- **小刀与大锤**：高基础伤害的大招会被封，低基础伤害的牌（靠力量/增伤堆起来的小牌）仍可照常输出。
- **一回合窗口**：只持续 1 个玩家回合，忍一回合即可，不必为它重构整套牌序。

## 源码

- `SeerNewSkillPowersB.cs`（`SeerWindSighPower`）
- `SeerHolyEdictWindLanMonster.cs`
