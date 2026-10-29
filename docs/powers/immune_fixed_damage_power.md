# 免固

<img src="/images/powers/immune_fixed_damage_power.png" alt="免固" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **归属**：玩家可获得，怪物也可获得
- **类型**：增益
- **叠加**：单层（永久）
- **施加来源**：[天启帝君](/relics/legendary/apocalypse_emperor.md)、[宇宙帝君](/relics/legendary/cosmic_emperor.md)等遗物；部分关键词效果；[月照星魂](/monsters/elite/moonlit_star_soul_monster.md)『飞天羽衣』（给全体队友怪物各 1 层）
- **可见**: 是

## 描述

永久**免固**：免疫[固定伤害](/mechanics/fixed-damage)。

## 详细机制

- 只拦截「固定伤害能力」发起的结算；毒、烧伤等持续伤害，吸血、反弹、临终仪式等生命流失，自伤与卡牌自付生命**都不算固定伤害**，不会被这个能力挡下。
- 免疫方式是让该次生命流失变为 0，不是获得格挡。
- 永久生效，不按回合递减；与有回合数限制的[免固（限时）](/powers/turn_immune_fixed_damage_power.md)是两种能力。

## 源码

- `SeerImmuneFixedDamagePower.cs`
- `SeerFixedDamagePower.cs`（固定伤害的唯一起源）
- `SeerFixedDamageHelper.cs`（固定伤害判定）
