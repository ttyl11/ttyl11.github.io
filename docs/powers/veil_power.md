# 遮蔽

> **归属**：怪物施加（[王牌术师](/monsters/elite/ace_magician_monster.md)）
> **类型**：中性（None）
> **叠加方式**：不叠加
> **可见**：是

<img src="/images/powers/veil_power.png" alt="遮蔽" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 描述

本场战斗中，你的手牌被遮蔽：看不到卡面、名字与效果（仍显示费用）。

## 详细机制

- **只影响显示**：牌仍然可以正常打出，效果与费用不变，只是看不到卡面与文字。
- **整场持续**：无层数语义，战斗结束才移除。
- **本地判定**：只隐藏持有该能力的本地玩家手牌。

## 源码

- `SeerNewSkillPowersH.cs`（`SeerVeilPower`）
- `SeerVeilPatch.cs`
