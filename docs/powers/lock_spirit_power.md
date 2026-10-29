# 锁灵

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[六界帝神](/monsters/elite/six_realm_god_monster.md)「光灵耀世」施加 5 层

<img src="/images/powers/lock_spirit_power.png" alt="锁灵" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 中性（None）
- **叠加方式**: 按层数叠加（层数＝剩余回合）
- **可见**: 是

## 描述

敌人赛尔牌的[gold]PP[/gold]消耗变为[blue]5[/blue]倍。

## 详细机制

- **结算入口**：与[蚀能](/powers/erosion_energy_one_power.md)系列同在 PP 牌的改费函数里——玩家打出 PP 牌时遍历敌方能力，基础 PP 消耗直接 <span style="color:#3aa675;font-weight:600">×5</span>。
- **绝大多数 PP 牌被直接锁死**：单次打出固定消耗 1 点 PP，×5 后即每打一次扣 5 点；而多数赛尔牌最大 PP 只有 1～2 点，低于消耗就无法打出——所以这 5 回合内基本等于**禁用全部 PP 牌**（最大 PP ≥5 的牌除外）。
- **与其它改费叠加**：与蚀能、[罗生门](/powers/rashomon_power.md)等按「遍历敌人 → 遍历能力」的顺序逐个乘/加，最终倍率取决于顺序。
- **只影响 PP，不影响能量**：[能量](/mechanics/energy.md)照常，普通非 PP 牌完全不受影响。
- **持续 5 个玩家回合**：层数在玩家回合结束时 −1（施放当回合起算），归零后自动移除、PP 消耗立即恢复。

## 小贴士

- **看到「光灵耀世」就换输出方式**：能力期间 PP 牌几乎全废，依赖 PP 牌循环的卡组要提前留好能量牌与遗物/药水输出。
- **和免控、缓冲同回合挂上**：光灵耀世一次给自身免控 5 回合 + 受伤获缓冲 5 回合 + 锁灵 5 回合，等于「打不动、控不住、还没法用 PP 牌」——优先用非 PP 的直伤/毒/灼烧绕过。
- **驱散无效**：锁灵是中性能力，净化/驱散对它没用，只能等回合数走完或速杀六界帝神。

## 源码

- `SeerNewSkillPowersE.cs`（`SeerLockSpiritPower`）
- `SeerPpCardModel.cs:424-473`（改费入口）
- `SeerSixRealmGodMonster.cs:214-222`（光灵耀世）
