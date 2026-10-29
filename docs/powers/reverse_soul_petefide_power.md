# 逆魂

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[逆魂·佩特菲德](/monsters/elite/reverse_soul_petefide_monster.md)开局常驻
> **类型**：中性（None）
> **叠加方式**：不叠加
> **可见**：是

<img src="/images/powers/reverse_soul_petefide_power.png" alt="逆魂" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

### 数值参数

| 参数 | 数值 |
|---|---|
| DebuffTurns | 9 |

## 描述

①第[blue]1[/blue]回合开始时，使所有敌人获得[red]疲惫[/red]、[red]害怕[/red]、[red]石化[/red]，各持续[blue]9[/blue]回合。
②自身[gold]格挡[/gold]不会消失。

## 详细机制

- **开局三异常**：战斗开始时，对每个对手各施加疲惫、害怕、石化，各 <span style="color:#3aa675;font-weight:600">9</span> 回合。
- **三种异常同时压身**：疲惫削减自身攻击伤害 <span style="color:#3aa675;font-weight:600">20</span>%，并在每次造成伤害时自伤等于层数；害怕削减自身攻击伤害 <span style="color:#3aa675;font-weight:600">30</span>%；石化削减攻击并把伤害转格挡，开场即被全面压制。
- **格挡永存**：佩特菲德的格挡在回合结束时不清理，可以一直累积。
- **能力常驻**：中性能力，不会被净化，整场战斗有效。

## 小贴士

- **开局先解异常**：三种异常各 9 回合，硬扛代价极大；优先用净化/免控手段处理。
- **格挡越叠越厚**：它不清格挡，消耗战只会让它越来越硬，尽快打穿。

## 源码

- `SeerReverseSoulPetefidePower.cs`
