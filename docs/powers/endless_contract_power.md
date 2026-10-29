# 无尽契约

> **归属**：怪物专属（[哀目黑子](/monsters/elite/aimu_heizi_monster.md)）
> **类型**：中性（None）
> **叠加方式**：单例（层数隐藏，不可叠加）
> **可见**：是

<img src="/images/powers/endless_contract_power.png" alt="无尽契约" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

### 数值参数

| 参数 | 数值 |
|---|---|
| 随机异常种数 | 1 |
| 持续层数 | 4 |

## 描述

自身每次受到伤害后，对全体敌人施加<span style="color:#3aa675;font-weight:600">4</span>层随机<span style="color:#d44;font-weight:600">异常状态</span>。

## 详细机制

- **触发条件**：拥有者受到伤害且总伤害 > 0。总伤害包含被格挡吸收的部分，因此完全格挡的攻击也会触发；一次伤害结算触发一次，多段攻击逐段触发。
- **施加范围**：拥有者的所有存活敌人。
- **独立随机**：每名敌人各自从 23 种异常的池中随机 1 种，彼此不共享结果，可能抽到同一种。
- **层数**：每种异常施加 4 层，层数的具体含义由该异常自身决定（多数为持续回合数）。
- **能力叠加**：单例能力，重复施加不会叠加层数。

## 相关机制

- [异常状态](/mechanics/abnormal-status.md)（23 种随机池：不含狂暴、星赐、凝滞、超频）

## 源码

- `SeerNewSkillPowersD.cs`（`SeerEndlessContractPower`）
