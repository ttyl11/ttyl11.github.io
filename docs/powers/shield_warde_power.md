# 圣盾

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[圣盾·瓦尔德](/monsters/elite/shield_warde_monster.md)常驻
> **类型**：中性（None）
> **叠加方式**：不叠加
> **可见**：是

<img src="/images/powers/shield_warde_power.png" alt="圣盾" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 描述

自身受到伤害时，获得等量[gold]格挡[/gold]。

## 详细机制

- **按实际掉血算**：每次受伤后，按**未格挡伤害**（真正掉的血）获得等量格挡，不是按攻击面板。
- **任何伤害都算**：攻击、固定伤害、DoT 都能触发；完全被格挡时不触发。
- **多段分层叠**：每一段伤害各结算一次，段数越多格挡叠得越快。
- **能力常驻**：不会自行减少或消失，整场战斗有效。

## 源码

- `SeerShieldWardePower.cs`
