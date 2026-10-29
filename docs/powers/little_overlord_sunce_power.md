# 小霸王

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——小霸王·孙策

> **类型**：中性（None）
> **叠加方式**：不叠加
> **可见**：是

<img src="/images/powers/little_overlord_sunce_power.png" alt="小霸王" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 描述

自身造成的攻击伤害无视敌人[gold]格挡[/gold]。

## 详细机制

- **格挡不存在**：有来源的攻击伤害被强制改为不可格挡——格挡既不减伤、也不会被消耗。
- **只影响攻击伤害**：非攻击伤害照常被格挡。

## 源码

- `SeerLittleOverlordSuncePower.cs`
