# 命运之击

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[泰沃斯](/monsters/normal/taiwosi_monster.md)

<img src="/images/powers/fate_strike_power.png" alt="命运之击" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 无类型（不参与增益/减益分类，不可被驱散/净化）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 生命流失（硬编码） | 15 |
| 判定概率（硬编码） | 50% |

> 注：本能力 `CanonicalVars` 为空，15 点与 50% 都不是 `DynamicVar`，由 `const int damage = 15` 与 `NextBool()` 硬编码。

## 描述

自身回合结束时，<span style="color:#3aa675;font-weight:600">50%</span>概率对你造成<span style="color:#3aa675;font-weight:600">15</span>点<span style="color:#d4a017;font-weight:600">生命流失</span>，否则自身受到<span style="color:#3aa675;font-weight:600">15</span>点<span style="color:#d4a017;font-weight:600">生命流失</span>。

## 详细机制

- **触发时点**：怪物一方回合结束时（每个敌方回合结束都会结算）。
- **判定**：50% 掷骰；命中则对**每个**对手各造成 15 点不可格挡、不吃加成的伤害；未命中则自己吃 15 点。
- **必定命中**：部分技能会把此能力标记为「必定命中」——下一次结算跳过随机、直接打所有对手，然后清除标记。

## 源码

- `SeerFateStrikePower.cs`
