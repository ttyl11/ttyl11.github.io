# 希望


> **归属**：玩家可施加
> **施加来源**：玩家获得——[希望之花](/powers/flower_of_hope_power.md)（能力联动）

<img src="/images/powers/hope_power.png" alt="希望" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

①自身受到的攻击伤害降低<span style="color:#3aa675;font-weight:600">30%</span>。<br/>②获得时，立即移除自身所有<span style="color:#d44;font-weight:600">异常状态</span>与对方所有<span style="color:#d4a017;font-weight:600">增益</span>（不含基础属性）。

## 详细机制

- **减伤**：只对来自他人的**攻击伤害**生效，×0.7；非攻击伤害不减。
- **解除自身异常**：获得时立即移除自身全部 27 种异常状态。
- **解除敌方增益**：获得时立即移除所有对手的 Buff 类能力，但**保留力量、命中、防御、速度**四项基础属性。
- 解除发生在获得瞬间，之后新获得的异常/增益不受影响。

## 源码

- `SeerHopePower.cs`
