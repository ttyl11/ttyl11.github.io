# 振翅

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[加布](/monsters/normal/jiabu_monster.md)

<img src="/images/powers/flutter_power.png" alt="振翅" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 计数器（按层数叠加）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 攻击伤害减免 | 50% |

## 描述

自身受到的攻击伤害降低<span style="color:#3aa675;font-weight:600">50%</span>。<br/>受到攻击伤害后层数-<span style="color:#3aa675;font-weight:600">1</span>，归零时自身被<span style="color:#d4a017;font-weight:600">击晕</span>。

## 详细机制

- **减伤**：只作用于**攻击伤害**（不限来源，怪物攻击也算）；完整伤害 ×0.5。
- **受击递减**：每次受到**实际扣血**的攻击伤害，层数 -1；完全格挡不扣层。
- **归零击晕**：层数降到 0 时，自身被击晕、跳过下一次行动。
- 非攻击伤害（固定伤害、持续伤害等）不减伤、也不减层。

## 源码

- `SeerFlutterPower.cs`
