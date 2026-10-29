# 神灵

> **归属**：玩家可施加
> **施加来源**：玩家获得——[圣灵起源](/relics/starter/origin_shift.md)（遗物）；任何角色——全局元素分配（玩家回合开始时，尚无元素的生物各随机获得 1 种元素）；玩家自身换元素——[🌫️ 无相](/potions/attribute_change_potion.md)（药水）

<img src="/images/powers/divine_power.png" alt="神灵" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 元素属性（中性，不属于增益/减益）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

①<span style="color:#9b59b6;font-weight:600">神灵</span>属性。<br/>②克制<span style="color:#9b59b6;font-weight:600">草</span>、<span style="color:#9b59b6;font-weight:600">水</span>、<span style="color:#9b59b6;font-weight:600">火</span>、<span style="color:#9b59b6;font-weight:600">电</span>、<span style="color:#9b59b6;font-weight:600">冰</span>、<span style="color:#9b59b6;font-weight:600">远古</span>、<span style="color:#9b59b6;font-weight:600">邪灵</span>、<span style="color:#9b59b6;font-weight:600">混沌</span>。<br/>③对<span style="color:#9b59b6;font-weight:600">机械</span>、<span style="color:#9b59b6;font-weight:600">战斗</span>、<span style="color:#9b59b6;font-weight:600">龙</span>微弱。

- **元素属性能力**：神灵属性能力。
- **克制倍率**：克制 1.5x，被克 0.75x。
- **不被清除**：为中性，不会被消除增益/减益类效果清除。

## 详细机制

- **元素能力载体**：本能力是[元素属性](/mechanics/element-affinity.md)系统的载体，中性属性（非 Buff/Debuff），不可被消除类效果清除。
- **克制倍率**：克制 ×1.5 / 被克 ×0.75 / 中性 ×1.0，只作用于**攻击伤害**的乘法结算。
- **不受影响的伤害**：异常状态持续伤害、[固定伤害](/mechanics/fixed-damage.md)、充能球伤害、荆棘反伤、生命流失均不吃元素克制。
- **元素分配**：每场战斗的玩家回合开始时，所有尚无元素的生物由全局元素分配各随机获得 1 种元素；新元素会先移除旧元素，保证身上只有一个元素。玩家也可用[🌫️ 无相](/potions/attribute_change_potion.md)把**自身**换成指定元素，不会改变敌人的元素。

## 小贴士

- **选对属性打**：克制时攻击伤害 ×1.5，被克仅 ×0.75——开局先看敌人属性，再决定用哪张属性攻击牌输出。
- **元素每场随机**：属性分配每场战斗重新随机，依靠克制的卡组需准备多属性手段（如[梅洛](/relics/common/merlot.md)每回合随机变化属性）。

## 源码

- `SeerDivinePower.cs`
