# 骁勇善战

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[小霸王·孙策](/monsters/elite/little_overlord_sunce_monster.md)「骁勇善战」
> **类型**：中性（None）
> **叠加方式**：不叠加
> **可见**：是

<img src="/images/powers/valiant_war_power.png" alt="骁勇善战" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

### 数值参数

| 参数 | 数值 |
|---|---|
| TurnsRemaining | 1 |

## 描述

（[blue]1[/blue]回合后）自身[gold]格挡[/gold]不会消失。

## 详细机制

- **格挡不清空**：受影响回合内，孙策的格挡在回合结束后保留，可以继续累积。
- **只保护一个窗口**：下一个玩家回合结束后能力移除，之后格挡恢复正常的回合清理。
- **只保护自己**：玩家/队友的格挡不受影响。
- **叠加无意义**：单例能力，重复施加不延长保护。

## 源码

- `SeerNewSkillPowersB.cs`（`SeerValiantWarPower`）
- `SeerLittleOverlordSunceMonster.cs:320`
