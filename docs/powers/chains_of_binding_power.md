# 魂缚锁链

> **归属**：玩家可施加
> **施加来源**：玩家获得——[侵蚀](/cards/status/erosion.md)（卡牌，1 层）、[九月的枷锁](/cards/character/september_shackles.md)（卡牌，2 层）；怪物施加给玩家——[哀目黑子](/monsters/elite/aimu_heizi_monster.md)、[明启格思塔斯](/monsters/boss/mingqi_gesitasi_monster.md)



<img src="/images/powers/chains_of_binding_power.png" alt="魂缚锁链" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff）
- **叠加方式**: 递减（计数型）
- **可见**: 是
- **允许负值**: 否

## 描述

每回合抽到的前<span style="color:#3aa675;font-weight:600">3</span>张牌将会被侵蚀为[魂缚](/mechanics/bound.md)。

## 详细机制

- **魂缚施加**：抽牌时，当抽到的卡牌拥有者是持有者、当前回合方为持有者方、且卡牌可被魂缚时，统计本回合已魂缚的卡牌数。若已魂缚数小于层数，对该牌施加魂缚。
  - 魂缚层数等于此能力的层数。
- **魂缚卡牌限制**：
  - 每回合只能打出 <span style="color:#3aa675;font-weight:600">1</span> 张魂缚卡牌。
- **回合结束清除**：回合结束时重置计数，并清除持有者所有卡牌上的魂缚。
- **复制卡牌不触发**：复制卡牌不触发魂缚打出限制。

## 相关机制

- [魂缚](/mechanics/bound.md)（卡牌 affliction，每回合只能打出 <span style="color:#3aa675;font-weight:600">1</span> 张魂缚卡牌，回合结束时清除）

## 相关卡牌

- [侵蚀](/cards/status/erosion.md)（抽到时获得 <span style="color:#3aa675;font-weight:600">1</span> 层魂缚锁链）

## 源码

- `ChainsOfBindingPower.cs`
