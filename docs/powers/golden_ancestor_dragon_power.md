# 金祖之龍

> **归属**：玩家可施加
> **施加来源**：玩家获得——[镇世·乔特鲁德](/relics/legendary/world_suppressor_jortrud.md)（遗物）

<img src="/images/powers/golden_ancestor_dragon_power.png" alt="金祖之龍" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益
- **来源**: [镇世·乔特鲁德](/relics/legendary/world_suppressor_jortrud.md)
- **叠加方式**: 不叠加（一次性）
- **可见**: 是

## 描述

①免疫<span style="color:#d44;font-weight:600">臣服</span>与<span style="color:#d44;font-weight:600">异常状态</span>。<br/>②受到的伤害减少<span style="color:#3aa675;font-weight:600">30</span>%。<br/>③自身死亡时，回复至<span style="color:#d4a017;font-weight:600">最大生命值</span>的<span style="color:#3aa675;font-weight:600">30</span>%，但永久失去此能力。

## 数值

| 参数 | 数值 |
|---|---|
| 受到伤害减免 | 30%（攻击伤害） |
| 死亡复活生命 | 30% 最大生命（最少 1 点） |
| 复活次数 | 1（一次性，且跨战斗永久失去） |

## 详细机制

- **减伤**：只对**来自他人的攻击伤害**生效（自己打自己不减），×0.7。
- **免疫臣服**：任何来源、任何层数的「臣服」施加都会被改量为 0。
- **复活**：受到致命伤时阻止死亡，恢复到最大生命的 30%（至少 1 点），随后**移除本能力**；遗物记录「已失去」，后续战斗不再获得。
- **复活过程**：复活期间自身不可被命中、也不会让战斗提前结束。

## 小贴士

- **一次性复活**：致死时恢复到最大生命 30%，复活后该能力消失（减伤与复活均不再生效）。
- **跨战斗永久失去**：一旦触发复活，遗物会永久记录，后续战斗不再拥有此能力。

## 源码

- `SeerGoldenAncestorDragonPower.cs`
