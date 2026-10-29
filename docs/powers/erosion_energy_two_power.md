# 蚀能2

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物随机能力池（全局补丁）——玩家回合开始时，怪物按概率获得；概率随已访问房间数增长，不需要遗物。仅进阶 11+（异能苏醒）生效，且已持有任一 Seer 怪物能力的怪不再获得。

<img src="/images/powers/erosion_energy_two_power.png" alt="蚀能2" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

对手使用<span style="color:#d4a017;font-weight:600">PP</span>卡牌<span style="color:#d4a017;font-weight:600">消耗</span>的<span style="color:#d4a017;font-weight:600">PP</span>+1。

## 详细机制

- **PP 消耗 +1**：每次打出 [PP 牌](/mechanics/pp-system.md)的基础 PP 消耗为 1，持有者使其 +1（打一次扣 2 点）。
- **多怪线性叠加**：每只蚀能2 各 +1——2 只 = 3 点，3 只 = 4 点。
- **与[蚀能1](/powers/erosion_energy_one_power.md)同场**：按「遍历敌人 → 遍历该敌人能力」的顺序逐个结算乘/加。
- **实时生效**：持有者死亡（能力随之移除）后立刻恢复，无残留。

## 小贴士

- **软性续航税**：单只蚀能2 时 PP5 的牌可打 3 次（5→3→1→0），单次消耗与单只蚀能1 同为 2 点，压迫感相同。
- **群怪场要算总账**：3 只蚀能2 同场 = 每张 PP 牌消耗 4 点，PP5 的牌可打 2 次（5→1→0；第二次在 PP=1 时仍可打出并清零）——开打前先扫一眼所有怪的能力词缀再加总。

## 源码

- `Models/Cards/SeerErosionEnergyTwoPower.cs`；结算在 `Models/Cards/SeerPpCardModel.cs:425-473`
