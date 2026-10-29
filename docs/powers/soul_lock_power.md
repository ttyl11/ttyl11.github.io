# 定魂

> **归属**：无（当前版本没有施加来源）
> **施加来源**：暂无——源码中只保留了能力定义，没有任何卡牌、遗物或怪物施加它

<img src="/images/powers/soul_lock_power.png" alt="定魂" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

每场战斗开始时，使对手随机获得<span style="color:#3aa675;font-weight:600">3</span>种<span style="color:#d44;font-weight:600">异常状态</span>，每种<span style="color:#3aa675;font-weight:600">2</span>层。

## 详细机制

- **仅限特定 10 种池**：中毒、寄生、烧伤、冰封、睡眠、缓慢（原版）、害怕、神游、易燃、混乱——从中随机抽 3 种不重复，每种 2 层。
- **每个对手各抽一次**：每个敌人独立随机，可能拿到不同组合。
- **当前版本拿不到**：这条能力目前没有实际来源，图鉴仅作资料保留。

## 源码

- `SeerSoulLockPower.cs`
