# 无额外能量

> **归属**：无（当前版本没有施加来源）
> **施加来源**：暂无——源码中只保留了能力定义，没有任何卡牌、遗物或怪物施加它（同类效果见[能量禁域](/powers/no_extra_energy_for_turns_power.md)）

<img src="/images/powers/no_extra_energy_power.png" alt="无额外能量" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff）
- **叠加方式**: 叠加
- **可见**: 是

## 描述

本回合无法获得额外<span style="color:#d4a017;font-weight:600">能量</span>。<br/>在你的下个回合开始时移除。

## 详细机制

- **当前版本是空壳**：源码里只有「自己回合结束时移除」这一条逻辑，没有任何能量拦截代码——即使挂上也不会真的禁止额外能量。
- **实际生效的是能量禁域**：需要禁止额外能量时使用[能量禁域](/powers/no_extra_energy_for_turns_power.md)。
- **拿不到也挂不上**：当前没有任何卡牌/遗物/怪物施加它，图鉴仅作资料保留。

## 源码

- `SeerNoExtraEnergyPower.cs`
