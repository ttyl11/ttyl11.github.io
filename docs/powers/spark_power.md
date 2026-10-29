# 火种

> **归属**：玩家可施加
> **施加来源**：玩家获得——[星星之火](/cards/ancient/spark_of_fire.md)（卡牌）、[炽焰之心](/potions/blazing_heart_potion.md)（药水）；能力联动——[焚世涅槃](/powers/burning_nirvana_power.md)（转化/回复时保留并重新施加火种）

<img src="/images/powers/spark_power.png" alt="火种" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 叠加
- **可见**: 是

## 描述

①自身回合开始时，每个<span style="color:#d4a017;font-weight:600">火种</span>有<span style="color:#3aa675;font-weight:600">10%</span>概率转化为<span style="color:#d4a017;font-weight:600">火苗</span>；未转化的<span style="color:#d4a017;font-weight:600">火种</span>消失（持有<span style="color:#d4a017;font-weight:600">焚世涅槃</span>时保留）。<br/>②每转化<span style="color:#3aa675;font-weight:600">1</span>个，获得<span style="color:#3aa675;font-weight:600">1</span>层<span style="color:#d4a017;font-weight:600">增伤</span>与<span style="color:#3aa675;font-weight:600">1</span>层<span style="color:#d4a017;font-weight:600">减伤</span>。

## 详细机制

- **每层独立掷骰**：自己回合开始时，每个火种各有 10% 概率转化，转化数量按二项分布结算。
- **未转化会消失**：普通情况下没转化的火种全部清空；持有[焚世涅槃](/powers/burning_nirvana_power.md)时保留到下一回合继续转化。
- **转化收益**：每转化 1 个，获得 1 层[永久增伤](/powers/permanent_damage_boost_power.md)与 1 层[永久减伤](/powers/permanent_damage_reduction_power.md)。
- **火种变火苗**：转化的部分变成等量火苗，进入下一阶段的转化链。
- **只在自己回合开始触发**：队友/敌人的回合不结算。

## 小贴士

- **量大才稳**：10% 概率低，火种叠得越多，期望转化数越高。
- **焚世涅槃是核心**：没有它，未转化的火种会全部蒸发；有它才能滚雪球。

## 源码

- `SeerSparkPower.cs`
