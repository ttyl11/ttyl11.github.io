# 圣灵化身

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物施加给玩家——[谱尼](/monsters/boss/puni_monster.md)

<img src="/images/powers/puni_spirit_incarnation_power.png" alt="圣灵化身" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 无类型（不参与增益/减益分类，不可被驱散/净化）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

回合结束时，你未打出的手牌返回抽牌堆而非进入弃牌堆。

## 详细机制

- **未打出的手牌回抽牌堆**：回合结束清手牌时，把这些牌直接放到抽牌堆**底部**，而不是弃牌堆。
- **保留牌不动**：本回合带「保留」的手牌不会被移走，继续留在手里。
- **只影响持有者**：能力挂在谁身上就只改谁的手牌结算。
- **整场常驻**：不随回合减少，战斗结束才消失。

## 源码

- `SeerPuniSpiritIncarnationPower.cs`
