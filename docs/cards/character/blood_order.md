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
| 单次 PP 消耗 | 1 | 1 |
| 最大结算次数 | 10 | 10 |
| PP | 10 | 10 |
| 最大PP | 10 | 10 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> 对随机生物造成<span style="color:#3aa675;font-weight:600">5</span>点伤害，[<span style="color:#d4a017;font-weight:600">流血</span>](/powers/bleed_power.md)<span style="color:#3aa675;font-weight:600">3</span>。重复打出直至 PP 耗尽或自己受到伤害。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> 对随机生物造成<span style="color:#3aa675;font-weight:600">7</span>点伤害，[<span style="color:#d4a017;font-weight:600">流血</span>](/powers/bleed_power.md)<span style="color:#3aa675;font-weight:600">3</span>。重复打出直至 PP 耗尽或自己受到伤害。

## 详细机制

- **「重复打出」是循环结算**：每次循环**先扣 1 点 PP**，再从场上随机挑一名**存活生物**（自己 + 队友 + 所有敌人）造成伤害并施加[流血](/powers/bleed_power.md)。
- **停止条件（先到先停）**：
  1. 本次随机目标**是自己** → 立即停止（**伤害被[格挡](/mechanics/block.md)挡下也算**，判定只看「是否随机到自己」）；
  2. **PP 耗尽** → 停止。
- **次数上限 = 打出前的 PP**：满 PP（10）时最多结算 10 次；若中途命中自己则提前结束。循环从打出前 PP 起算，所以「PP 有多少就结算几次」。
- **每次循环都是独立的一次攻击**：各自吃[力量](/powers/strength_power.md) / 易伤 / [暴击](/mechanics/critical-strike.md)，也各自被格挡抵消，并各自施加 3 层流血。
- **[流血](/powers/bleed_power.md)**：拥有者回合结束时受到等于层数的伤害，且每次受到未格挡伤害会额外 +1 层。
- **范围包含队友**：联机时会随机打到队友，双刃剑。
- **升级只提升单次伤害**：5 → 7（+2）。

## 小贴士

- **输出期望看场上人数**：随机范围是「所有存活生物」，人越少越容易命中自己（单人单怪时每次循环有 1/2 概率停手），敌人越多循环越持久（最多 10 次）。满场时理论总伤害可达 10 × 7 = <span style="color:#3aa675;font-weight:600">70</span> 点（升级后）。
- **自伤既是代价也是工具**：命中自己会掉 5（升级 7）点血——如果身上有格挡，这次自伤会被挡下但仍会终止循环；也可以把它当作主动压血手段，配合[梦境残缺](/cards/character/fragmented_dream)这类「残血才能打」的牌。
- **它烧的是全卡组资源**：每次重打都扣 1 点 PP，打满 10 次就把这张牌自己和其他 PP 牌的燃料一起烧空——PP 归 0 后本场基本不能再打出（除非有 PP 恢复手段，或持有「不动明王」遗物解锁 PP=0 出牌）。
- **流血是真正的收益**：给目标叠 3 层流血，多轮循环下容易把敌人的持续伤害堆起来；对付高格挡目标时，流血比那 5 点伤害更可靠。
- **性价比**：0 费，最多 10 次结算。伤害上限不低（满场最高 70 点），但代价是①烧掉最多 10 点 PP（全卡组共享资源）②自己固定吃一次伤害 ③可能误伤队友。适合 PP 富余、需要堆流血的构筑；PP 紧张的卡组慎用。

## 相关能力

- [流血](/powers/bleed_power.md)（每次循环对目标施加 3 层）

## 相关机制

- [PP系统](/mechanics/pp-system.md)（每次循环消耗 1 点 PP）
- [格挡](/mechanics/block.md)（伤害为攻击伤害，可被格挡抵消）
- [暴击](/mechanics/critical-strike.md)（每次循环独立判定）

## 源码

- `SeerBloodOrder.cs`