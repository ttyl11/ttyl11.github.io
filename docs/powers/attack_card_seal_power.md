# 封攻击

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物施加给玩家——[堕息·迹](/monsters/elite/duoxiji_monster.md)、[不羁·弗里德](/monsters/boss/bujifulide_monster.md)
> **类型**：中性（None）
> **叠加方式**：按层数叠加
> **可见**：是

<img src="/images/powers/attack_card_seal_power.png" alt="封攻击" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

### 数值参数

| 参数 | 数值 |
|---|---|
| TurnsRemaining | 1 |

## 描述

你的回合内，无法打出攻击牌。

## 详细机制

- **只封攻击牌**：技能、能力、状态牌正常打出。
- **手动与自动都拦**：出牌检查对自动打出同样生效，靠自动打出绕不过去。
- **窗口**：覆盖接下来的玩家回合，玩家回合结束时移除此能力。

## 源码

- `SeerAttackCardSealPower.cs`
