# 秩序灼痕

> **归属**：玩家会获得（负面）
> **施加来源**：不灭·艾恩斯（技能「秩序之助」）

<img src="/images/powers/fixed_damage_taken_up_power.png" alt="秩序灼痕" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**：减益（Debuff）
- **叠加方式**：按层数叠加（层数 = 总百分比）
- **可见**：是

## 描述

本场战斗中，自身受到的<span style="color:#d4a017;font-weight:600">固定伤害</span>提高<span style="color:#3aa675;font-weight:600">层数%</span>。

## 详细机制

- **作用方式**：在**受到固定伤害能力时**放大施加量——最终层数 ×（1 + 当前层数/100）。固定伤害仍按目标自己的回合开始结算。
- **层数就是总百分比**：艾恩斯按自身火种层数 ×5% 一次性算好施加给每个敌人；多次施加会累加百分比。
- **只放大固定伤害**：其他伤害类型不受影响。
- **持续**：本场战斗有效，跨战斗清空。

## 源码

- `SeerFixedDamageTakenUpPower.cs`；施加见 `SeerBumieAiEnSiMonster.cs`
