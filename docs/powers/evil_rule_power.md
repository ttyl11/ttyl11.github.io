# 邪

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[盖亚](/monsters/boss/gaia_monster.md)

<img src="/images/powers/evil_rule_power.png" alt="邪" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 无类型（不参与增益/减益分类，不可被驱散/净化）
- **叠加方式**: 单例（不可叠加）
- **可见**: 否（后台静默运行，不显示图标）

## 描述

自身受到的伤害降低<span style="color:#3aa675;font-weight:600">65%</span>，此后每经过自身<span style="color:#3aa675;font-weight:600">1</span>个回合，减伤降低<span style="color:#3aa675;font-weight:600">5%</span>（最低<span style="color:#3aa675;font-weight:600">0%</span>）。

## 详细机制

- **回合数口径**：按自身回合数计算，从 1 开始；每经过自己的一个回合开始 +1。
- **减伤公式**：`max(0, 70 - 5 × 自身回合数)%`；第 1 回合 65%、第 2 回合 60%，第 14 回合起 0%。
- **对所有伤害生效**：只判断「伤害目标是不是自己」，不区分攻击伤害与非攻击伤害、也不区分伤害来源。
- **不可清除**：能力类型为 None，消除增益/减益类效果不会移除它。

## 源码

- `SeerEvilRulePower.cs`
