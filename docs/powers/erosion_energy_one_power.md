# 蚀能1

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物随机能力池（全局补丁）——玩家回合开始时，怪物按概率获得；概率随已访问房间数增长，不需要遗物。仅进阶 11+（异能苏醒）生效，且已持有任一 Seer 怪物能力的怪不再获得。

<img src="/images/powers/erosion_energy_one_power.png" alt="蚀能1" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

对手使用<span style="color:#d4a017;font-weight:600">PP</span>卡牌<span style="color:#d4a017;font-weight:600">消耗</span>的<span style="color:#d4a017;font-weight:600">PP</span>翻倍。

## 详细机制

- **PP 消耗 ×2**：每次打出 [PP 牌](/mechanics/pp-system.md)的基础 PP 消耗为 1，持有者使其 ×2（打一次扣 2 点）。
- **多只相乘**：场上每只蚀能1 各自 ×2——2 只 = ×4，3 只 = ×8。
- **与其他改费能力叠加**：按「遍历敌人 → 遍历该敌人能力」的顺序逐个结算乘/加，实际倍率取决于遍历顺序。
- **只影响 PP，不影响能量**：[能量](/mechanics/energy.md)照常，亏的是 PP 牌的重复打出次数。
- **实时生效**：持有者死亡（能力随之移除）后立刻恢复正常消耗。

## 小贴士

- **续航腰斩**：PP5 的牌在蚀能1 面前可打 3 次（5→3→1→0；最后一次不足 2 点也会打出并把 PP 清零）——依赖 PP 牌循环的构筑续航明显缩短。
- **与[幽滞](/powers/dark_stagnation_power.md)叠加**：幽滞随机烧存量 PP、蚀能翻倍消耗——双词缀齐上时 PP 体系基本瘫痪，必须速战速决。
- **非 PP 构筑无感**：不带 PP 牌的卡组完全不受影响。

## 源码

- `Models/Cards/SeerErosionEnergyOnePower.cs`；结算在 `Models/Cards/SeerPpCardModel.cs:425-473`
