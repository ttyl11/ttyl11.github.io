# 禁疗

> **归属**：怪物施加给玩家
> **施加来源**：怪物施加给玩家——[不灭·艾恩斯](/monsters/boss/bumie_ai_en_si_monster.md)、[混沌·千夜死神](/monsters/boss/hundun_qian_ye_si_shen_monster.md)
> **类型**：减益（Debuff）
> **叠加方式**：按层数叠加
> **可见**：是

<img src="/images/powers/timed_no_heal_power.png" alt="禁疗" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 描述

持续<span style="color:#3aa675;font-weight:600">3</span>回合：无法回复生命。<br/>自身回合结束时减少<span style="color:#3aa675;font-weight:600">1</span>层。

## 详细机制

- 层数即剩余回合数，每回合结束自动 −1。
- 期间所有回血全部失效（包括药水、遗物、卡牌、吸血等）。
- 禁疗不影响「最大生命降低/提高」与「固定伤害」。

## 源码

- `SeerTimedNoHealPower.cs`
