# 斗志激昂

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：不灭地威·萨瑞卡（技能「斗志激昂」）

<img src="/images/powers/fighting_spirit_will_power.png" alt="斗志激昂" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**：中性（None）
- **叠加方式**：计数（层数 = 剩余回合）
- **可见**：是

## 描述

持续期间，自身每次因[gold]攻击伤害[/gold]以外的原因损失生命值后，立即回复等量生命值。

## 详细机制

- **先损失、再回复**：不是拦截/免疫，生命值会真实先扣掉，然后按本次**实际损失量**回血；「损失生命」相关事件照常触发。
- **只认非攻击伤害**：攻击伤害不回血；固定伤害、生命流失、自伤等非攻击伤害都回。
- **完全格挡不触发**：实际损失为 0 时不回复。
- **持续回合**：每次对方回合结束 -1 层，归零移除。

## 源码

- `Models/Powers/SeerNewSkillPowersD.cs`（`SeerFightingSpiritWillPower`）
