# 仪式

<img src="/images/powers/ritual_power.png" alt="仪式" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **归属**：任意角色均可持有（原版能力）
- **类型**：增益
- **叠加**：计数型
- **施加来源**：
  - 原版：钙化邪教徒 / 潮湿邪教徒（念咒）、虔诚雕刻师（禁忌唱诵）、药水「马萨雷斯的赠礼」
  - 本 mod 玩家侧：[妖族异术](/cards/character/yao_zu_yi_shu.md)（溯引触发，1 层）、塔罗遗物[力量](/relics/common/tarot_strength.md)（战斗开始 1 层）、[永久属性](/mechanics/permanent-bonus.md)（3 星奖池「仪式 +1」）
  - 本 mod 怪物侧：[邪魂大祭司](/monsters/elite/evil_soul_priest_monster.md)（[邪祭](/powers/evil_soul_priest_power.md)，敌方牌组每张牌 1 层）、[摩哥斯](/monsters/normal/moges_monster.md)（邪神降临 3 层）

## 描述

每个拥有者回合**结束**时，自身获得等同于仪式层数的[力量](/powers/strength_power.md)。

## 详细机制

- 触发时机是回合**结束**，不是回合开始；获得的力量立刻保留到之后的所有回合。
- 由敌人施加时，第一次回合结束不会触发（跳过一轮），从下一次回合结束开始正常加力量。
- 层数不会自动减少，整场战斗持续生效；层数越高每回合加的力量越多。

## 源码

- 原版 `RitualPower.cs`
