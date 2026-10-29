# 破绽

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[盖亚](/monsters/boss/gaia_monster.md)（技能「碎梦吟」）

<img src="/images/powers/vulnerable_on_hit_power.png" alt="破绽" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff，怪物侧）
- **叠加方式**: 单例（不可叠加）
- **可见**: 否（后台静默运行，不显示图标）

## 描述

①造成伤害时，对目标施加[blue]1[/blue]层[red]易伤[/red]。
②攻击结束后移除此能力。

## 详细机制

- **逐次命中触发**：每一次实际造成未格挡伤害的命中都会给目标施加 <span style="color:#3aa675;font-weight:600">1</span> 层[易伤](/powers/vulnerable_power.md)；多段攻击的每一段都单独结算。
- **被挡不触发**：该次命中未造成实际掉血（被格挡全额抵消）时不施加易伤。
- **攻击结束移除**：同一次攻击指令的全部段数结算完后移除自身，因此只强化这一轮攻击，不会留到下次行动。

## 源码

- `SeerVulnerableOnHitPower.cs`
