# 天

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[盖亚](/monsters/boss/gaia_monster.md)

<img src="/images/powers/heaven_rule_power.png" alt="天" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 无类型（不参与增益/减益分类，不可被驱散/净化）
- **叠加方式**: 单例（不可叠加）
- **可见**: 否（后台静默运行，不显示图标）

## 描述

①自身受到的非暴击伤害降至<span style="color:#3aa675;font-weight:600">40%</span>。<br/>②自身受到的暴击伤害变为<span style="color:#3aa675;font-weight:600">3</span>倍。

## 详细机制

- **对所有伤害生效**：不区分攻击/非攻击伤害，只看"是否暴击"。
- **暴击判定**：按伤害来源的暴击引擎判断（来源持有锁定II 等也算暴击）。
- **无来源伤害**：按非暴击处理，×0.4。

## 源码

- `SeerHeavenRulePower.cs`
