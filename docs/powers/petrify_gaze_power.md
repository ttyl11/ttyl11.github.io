# 石化之视

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[墨杜萨](/monsters/elite/medusa_monster.md)

<img src="/images/powers/petrify_gaze_power.png" alt="石化之视" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 无类型（不参与增益/减益分类，不可被驱散/净化）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

自身回合开始时，对所有面向自身的生物施加<span style="color:#3aa675;font-weight:600">2</span>层<span style="color:#d4a017;font-weight:600">石化</span>。

## 详细机制

- **触发时机**：墨杜萨自己回合开始时结算一次。
- **看「朝向」不看阵营**：通过朝向/左右站位判断谁正面对着她，正面对着她的生物（包括玩家与召唤物）都会被施加石化。
- **固定 2 层**：每次施加 2 层[石化](/powers/petrify_power.md)，层数不会随回合增加而变多。
- **背对可躲**：不正面朝向她的生物不会被施加——调整站位/朝向可以规避。
- **自身常驻**：能力不会自行消失，整场战斗持续生效。

## 源码

- `SeerPetrifyGazePower.cs`
