# 血涂令

<img src="/images/cards/blood_order.png" alt="血涂令" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 10
- **能量消耗**: 0
- **类型**: 攻击
- **稀有度**: 普通
- **目标**: 随机生物（含自己与队友）
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 单次伤害 | 5 | 7 |
| [流血](/powers/bleed_power.md)层数 | 3 | 3 |
| 每段 PP 消耗 | 1 | 1 |
| 段数上限 | 打出前 PP（满 10） | 打出前 PP（满 10） |
| PP | 10 | 10 |
| 最大PP | 10 | 10 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> 对随机生物造成<span style="color:#3aa675;font-weight:600">5</span>点伤害，[<span style="color:#d4a017;font-weight:600">流血</span>](/powers/bleed_power.md)<span style="color:#3aa675;font-weight:600">3</span>。重复打出直至 PP 耗尽或自己受到伤害。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> 对随机生物造成<span style="color:#3aa675;font-weight:600">7</span>点伤害，[<span style="color:#d4a017;font-weight:600">流血</span>](/powers/bleed_power.md)<span style="color:#3aa675;font-weight:600">3</span>。重复打出直至 PP 耗尽或自己受到伤害。

## 详细机制

- **段数 = 打出前的 PP**：打出时先按常规扣 1 点 PP，随后固定结算“打出前 PP”段；结算过程中把本牌剩余 PP 扣到 0，最后一段即使 PP 已经为 0 仍会打出。满 10 PP 就是 10 段，结算完本牌 PP 为 0。
- **PP 是这张牌自己的**：每张 PP 牌各自独立计数，战斗开始时各自回满；血涂令消耗的只是自己的 PP，不会抽干其它 PP 牌。
- **随机目标**：每段从场上**所有存活生物**中重新随机——包括自己、队友与所有可命中敌人；同一目标可能被连续命中多次。
- **每段独立结算**：每段都是一次独立攻击（5/7 点伤害，吃[力量](/powers/strength_power.md)、易伤、[暴击](/mechanics/critical-strike.md)，可被[格挡](/mechanics/block.md)抵消），随后对目标施加 3 层[流血](/powers/bleed_power.md)。
- **停止条件（先到先停）**：
  1. 本段随机目标**是自己**：照常结算这一段的伤害与流血，然后停止；
  2. **PP 耗尽**：停止。
- **[流血](/powers/bleed_power.md)结算**：持有者一方回合结束时受到 **层数 ÷ 2**（向下取整）点不可格挡、不受力量影响的伤害，结算后层数 -1；只有受到**攻击**且存在未格挡伤害时才额外 +1 层。
- **升级**：单次伤害 5 → 7（+2），流血层数与段数不变。

## 小贴士

- **输出期望看场上人数**：随机池里每多一个生物，命中自己的概率就低一分，能连续结算的段数也更长。单人单怪时池子只有“自己 + 敌人”，每段有一半概率停手，期望段数约 2 段；满场时才有机会打满 10 段。
- **理论上限**：满 10 段且一次都没随机到自己时，升级后总伤害为 10 × 7 = <span style="color:#3aa675;font-weight:600">70</span> 点。实际会被自伤停止条件截断，不能按满额估算。
- **自伤不是固定的**：只有随机命中自己才会自伤；命中时自己承受该段 5/7 点伤害（可被格挡）并额外获得 3 层流血，然后停止。不要把它当成“必定自伤一次”的稳定压血手段。
- **只烧自己的 PP**：本牌 PP 归 0 后本场不能再打出；其它 PP 牌不受影响。若需要继续使用，只能靠恢复 PP 的手段（或持有[无为觉者](/relics/legendary/inaction_awakener.md)遗物解锁 0 PP 出牌）。
- **流血是持续收益**：每段 3 层，堆到 6 层就是每回合 3 点不可格挡伤害，且每次攻击命中还会再 +1 层；对高格挡目标比单次 5/7 点伤害更可靠。
- **性价比**：0 费最多 10 段，代价是本牌自己的 10 点 PP，以及命中自己/队友的风险。适合 PP 富余、需要堆流血的构筑；队友越多，误伤与自伤概率也越高，联机使用前要看场上人数。

## 相关能力

- [流血](/powers/bleed_power.md)（每段对目标施加 3 层）

## 相关机制

- [PP系统](/mechanics/pp-system.md)（每段消耗本牌 1 点 PP）
- [格挡](/mechanics/block.md)（伤害为攻击伤害，可被格挡抵消）
- [暴击](/mechanics/critical-strike.md)（每段独立判定）

## 源码

- `SeerBloodOrder.cs`
- `SeerBleedPower.cs`
