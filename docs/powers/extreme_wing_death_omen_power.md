# 紫雾裂空秘印

> **归属**：玩家会获得（负面）
> **施加来源**：亚空间「极天之翼」战斗修正——进入该活动战斗时给所有玩家施加

<img src="/images/powers/extreme_wing_death_omen_power.png" alt="紫雾裂空秘印" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**：减益（Debuff）
- **叠加方式**：不叠加
- **可见**：是

## 描述

自身回合开始时，有[red]10%[/red]概率直接死亡。

## 详细机制

- **判定时点**：每个自己的回合开始时掷一次。
- **判定方式**：0~99 随机，< 10 即触发（10%）；使用同步随机数，多端结果一致。
- **死亡方式**：直接杀死自身，不是伤害——不经过格挡、减伤与伤害加成；走正常死亡流程。
- 未触发时无事发生，下个自己回合再掷。

## 源码

- `SeerExtremeWingDeathOmenPower.cs`；施加见 `SeerSubmapCombatHook.cs`
