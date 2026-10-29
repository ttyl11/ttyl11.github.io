# 炎舞斩

> **归属**：玩家可获得
> **施加来源**：希拓（技能「炎舞斩」）

<img src="/images/powers/flame_dance_slash_power.png" alt="炎舞斩" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**：中性（None）
- **叠加方式**：计数（层数 = 剩余回合）
- **可见**：是

## 描述

持续期间，自身的属性提升效果无法被移除。

## 详细机制

- **实际保护范围**：只拦「力量、防御、命中、速度」四项的**负层**施加（下降量改为 0）；其他属性或其他减益不受保护。
- **不能阻止被清除**：它拦的是「被减层」，不是「被清除 buff」——消除类效果仍可整体移除这些能力。
- **持续回合**：每次对方回合结束 -1 层，归零移除。

## 源码

- `Models/Powers/SeerNewSkillPowersD.cs`（`SeerFlameDanceSlashPower`）
