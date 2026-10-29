# 脂肪护盾

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[斗魔旺乔](/monsters/elite/dou_mo_wang_qiao_monster.md)

<img src="/images/powers/fat_shield_power.png" alt="脂肪护盾" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 回合计数器（层数 = 剩余回合，每回合 -1）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 每次获得斗气 | 3 |

## 描述

自身每次受到攻击时，获得<span style="color:#3aa675;font-weight:600">3</span>层[斗气](/powers/battle_fury_power.md)。持续<span style="color:#3aa675;font-weight:600">层数</span>回合。

## 详细机制

- **触发条件**：一次攻击中只要有任意一段命中持有者，就触发一次。
- **一次攻击只给一次**：多段攻击不会按段数重复获得。
- **递减**：持有者自己的回合开始时层数 -1；层数为 0 时能力移除。

## 源码

- `SeerFatShieldPower.cs`
