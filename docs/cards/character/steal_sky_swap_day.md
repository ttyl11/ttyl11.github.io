# 偷天换日

<img src="/images/cards/steal_sky_swap_day.png" alt="偷天换日" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 5
- **能量消耗**: 2
- **类型**: 攻击
- **稀有度**: 罕见
- **目标**: 敌方单体
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害 | 14 | 20 |
| [全属性](/mechanics/all_attributes.md)下降 | 2 | 2 |
| [随机异常](/mechanics/sui_ji_yi_chang.md)种数 / 层数 | 4 / 4 | 4 / 4 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 造成<span style="color:#3aa675;font-weight:600">14</span>点伤害。自身[<span style="color:#d4a017;font-weight:600">全属性</span>](/mechanics/all_attributes.md)-<span style="color:#3aa675;font-weight:600">2</span>，[<span style="color:#d44;font-weight:600">随机异常</span>](/mechanics/sui_ji_yi_chang.md)<span style="color:#3aa675;font-weight:600">4</span>，<span style="color:#3aa675;font-weight:600">4</span>。交换双方[<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)和[<span style="color:#d4a017;font-weight:600">全属性</span>](/mechanics/all_attributes.md)。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 造成<span style="color:#3aa675;font-weight:600">20</span>点伤害。自身[<span style="color:#d4a017;font-weight:600">全属性</span>](/mechanics/all_attributes.md)-<span style="color:#3aa675;font-weight:600">2</span>，[<span style="color:#d44;font-weight:600">随机异常</span>](/mechanics/sui_ji_yi_chang.md)<span style="color:#3aa675;font-weight:600">4</span>，<span style="color:#3aa675;font-weight:600">4</span>。交换双方[<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)和[<span style="color:#d4a017;font-weight:600">全属性</span>](/mechanics/all_attributes.md)。

## 详细机制

- **结算顺序**：① 造成伤害 → ② 自身全属性 -2 → ③ 自身[随机异常](/mechanics/sui_ji_yi_chang.md) 4 种（不重复）各 4 层 → ④ 交换双方异常状态与全属性。
- **第 ④ 步是「整体互换」**：先把双方身上所有[异常状态](/mechanics/abnormal-status.md)（27 种异常列表内，含隐藏能力）逐项记下种类与层数并移出，再交叉施加——**自己的异常（含第 ③ 步刚获得的 4 种）转移给敌人，敌人的异常转移给自己**。
- **第 ③ 步的随机 4 种来自 23 种随机池**：已排除凝滞、超频、狂暴、星赐，这四种不会被随机挂到自己身上，也就不会参与本次交换。
- **全属性互换**：[力量](/powers/strength_power.md) / [防御](/powers/defense_power.md) / [命中](/powers/accuracy_power.md) / [速度](/powers/speed_power.md) 四项的**当前层数**整体交换（负值也一起交换）。
- **净效果**：相当于把「全属性 -2 + 4 种异常各 4 层」打包塞给敌人，同时把敌人的属性与异常整套抢过来——先给自己负面，再连同原有负面一起甩出去。
- **交换用「移除 + 重新施加」实现**：因此带「被移除时触发」的异常（如[超频](/powers/overclock_power.md)、[臣服](/powers/subjugation_power.md)）在交换过程中会各自触发一次移除效果。
- **会被免疫拦截**：自身若带免疫属性下降 / 异常免疫，第 ②③ 步施加不生效（交换出去的自然也变少）；对方同理。
- **升级只提升伤害**：14 → 20（+6）。

## 小贴士

- **收益完全看双方状态**：敌人叠了力量 / [狂暴](/powers/fury_power.md)等增益时，你直接把整套面板搬走；自己身上带着一堆异常时，可以一次性甩给敌人。
- **「自身全属性 -2 + 4 种异常」是投名状**：它们在第 ④ 步就被换走了，所以正常情况下你**不吃**这份负面——除非交换被免疫挡下，那这些就会留在自己身上。
- **对「没状态」的敌人近似空转**：目标既无异常也无属性变化时，它就只是一张 14（升级 20）伤害的 2 费攻击牌，性价比一般。
- **对叠属性敌人是罕见里的一线解牌**：直接把力量狂叠的敌人面板清空并据为己有，攻防一体。
- **性价比**：2 费 14（升级 20）点伤害 + 双向掠夺属性与异常。对无状态目标是「贵一点的攻击牌」，对状态型敌人是攻防一体的核心解牌；与「自己主动挂异常」的体系配合收益最大。

## 相关能力

- [力量](/powers/strength_power.md) / [防御](/powers/defense_power.md) / [命中](/powers/accuracy_power.md) / [速度](/powers/speed_power.md)（与目标整体互换层数）

## 相关机制

- [异常状态](/mechanics/abnormal-status.md)（与目标整体互换）
- [随机异常](/mechanics/sui_ji_yi_chang.md)（自身获得 4 种不重复异常各 4 层）
- [全属性](/mechanics/all_attributes.md)（力量 / 防御 / 命中 / 速度四项互换）
- [PP系统](/mechanics/pp-system.md)（每次打出消耗 1 点 PP）

## 源码

- `SeerStealSkySwapDay.cs`