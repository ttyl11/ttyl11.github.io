# 剑彻太虚

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[圣谕之风·岚](/monsters/elite/holy_edict_wind_lan_monster.md)「剑彻太虚」
> **类型**：中性（None）
> **叠加方式**：按层数叠加（层数 = 已使用次数）
> **可见**：是

<img src="/images/powers/sword_pierce_void_power.png" alt="剑彻太虚" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

### 数值参数

| 参数 | 数值 |
|---|---|
| BaseMultiplier | 2（起始倍率） |
| 每次使用提升 | +1 |

## 描述

该招式的[gold]固定伤害[/gold]倍率每使用一次+[blue]1[/blue]（起始[blue]2[/blue]倍）。

## 详细机制

- **倍率成长**：每使用一次该招式，层数 +1；固伤倍率 = 2 + 已使用次数。
- **第 4 次才是 5 倍**：起始 2 倍，之后 3、4、5……越拖越痛。
- **只影响该招式的固定伤害**：不改变其它招式。
- **层数常驻**：不会自行减少，整场战斗持续生效。

## 源码

- `SeerNewSkillPowersD.cs`（`SeerSwordPierceVoidPower`）
- `SeerHolyEdictWindLanMonster.cs:267`
