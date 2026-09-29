# 无常幽鬼

<img src="/images/relics/ghost_impermanence.png" alt="无常幽鬼" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 普通

## 描述

每场战斗中自身[堕落](/powers/fallen_power.md)首次达到 <span style="color:#3aa675;font-weight:600">100</span> 层时，获得 <span style="color:#3aa675;font-weight:600">1</span> 层[无实体](/powers/intangible_power.md)。

- **触发时机**：战斗内[堕落](/powers/fallen_power.md)层数首次跨过 100 层（≥100）的瞬间触发，每场战斗仅 1 次。
- **范围**：仅自身获得 1 层[无实体](/powers/intangible_power.md)（不再施加给敌人）。
- **持续时间**：无实体在**敌方回合结束**时才 -1——1 层正好覆盖敌方那整个回合的挨打。

## 风味文字

<span style="color:#d44;font-weight:600">幽冥无常。</span>

## 小贴士

- **堕落达到 100 是核心里程碑**：[堕落](/powers/fallen_power.md)是混沌魔君体系的计数属性，跨过 100 层时本就会触发[混沌化身](/powers/soulson_chaos_incarnation_power.md)+抽3张+[魔君接管](/powers/demon_takeover_power.md)（自动打牌）。无常幽鬼在同一个瞬间再补 1 层[无实体](/powers/intangible_power.md)，等于在"魔君接管"最凶险的时刻给自己套上一层减伤保险。
- **与[堕落](/powers/fallen_power.md)流卡牌天然契合**：凡能叠堕落的手段（消亡、堕世、邪灵降世等堕落体系卡）都会推动你逼近 100 层。只要卡组能稳定把第一局堆到 100，就能吃到这层保命无实体。
- **每场仅 1 次**：只在首次达到 100 层时给 1 层，之后达到200/300层不再重复给。所以它更像"第一次失控时的刹车"，而非持续防御。
- **无实体挡一切伤害**：无实体把受到的每次伤害与生命损失都封顶在 1 点，多段攻击也只每段 1 点。正好对冲[魔君接管](/powers/demon_takeover_power.md)回合里可能出现的吃伤害风险，是堕落流卡组的重要防线。
- **和[兹拉特](zi_la_te.md)的联动**：兹拉特现在战斗开始直接给 51 层[堕落](/powers/fallen_power.md)，配合其他堕落来源能更快逼近 100 层，触发无常幽鬼的无实体。
- **性价比**：普通稀有度合理——触发依赖堕落体系，纯功能性保命件，堕落流里价值走高。

## 源码

- `SeerGhostImpermanence.cs`