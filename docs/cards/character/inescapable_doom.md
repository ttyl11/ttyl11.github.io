# 在劫难逃

<img src="/images/cards/inescapable_doom.png" alt="在劫难逃" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 1
- **能量消耗**: 3
- **类型**: 能力
- **稀有度**: 普通
- **目标**: 无
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 邪龙之噬层数 | 2 | 3 |
| 惊逃层数 | 1 | 1 |
| 堕落 | 22 | 22 |
| PP | 1 | 1 |
| 最大PP | 1 | 1 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 获得<span style="color:#3aa675;font-weight:600">2</span>层[<span style="color:#9b59b6;font-weight:600">邪龙之噬</span>](/powers/dragon_devour_power.md)和<span style="color:#3aa675;font-weight:600">1</span>层<span style="color:#9b59b6;font-weight:600">惊逃</span>。[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">22</span>。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 获得<span style="color:#3aa675;font-weight:600">3</span>层[<span style="color:#9b59b6;font-weight:600">邪龙之噬</span>](/powers/dragon_devour_power.md)和<span style="color:#3aa675;font-weight:600">1</span>层<span style="color:#9b59b6;font-weight:600">惊逃</span>。[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">22</span>。

## 小贴士

- **邪龙之噬的触发链**：你每打出一张牌（自动打出的也算），对随机敌人造成 <span style="color:#3aa675;font-weight:600">6</span> 点非攻击伤害（受[格挡](/mechanics/block.md)影响）并消耗 1 层。2 层 = 触发 2 次（12 伤），3 层 = 18 伤。伤害类型为非攻击伤害，不吃[力量](/powers/strength_power.md)/[易伤](/powers/vulnerable_power.md)加成。
- **先制联动形成减费循环**：邪龙之噬每次触发还会附赠 1 层[先制](/powers/first_strike_power.md)——先制是"N 层一次性让下一张牌耗能 -N，打出后整体移除"。注意**这张牌自己打出时就会触发一次**（邪龙之噬是在本牌效果结算后才响应"已打出一张牌"）：2 层时，本牌先造成 6 点伤害并给出 1 层先制，剩 1 层；下一张牌吃到 -1 费、再触发第二次 6 点伤害并给出新的 1 层先制，可继续减下一张。所以 2 层＝合计 12 点伤害 + 后续 2 张牌各 -1 费，其中第一段伤害在打出本牌时立刻到账。
- **惊逃是免费永动机**：回合结束的自动出牌阶段，从手牌中随机自动打出 1 张攻击牌——**自动打出不消耗能量**（X 费牌以当前剩余能量为 X 值但不扣费）。惊逃层数不消耗，**每回合都触发**，长战斗中每回合白嫖一张攻击牌；它打出的牌同样触发邪龙之噬。
- **注意手牌管理**：惊逃会随机打出手牌中的攻击牌——想保留的高费攻击牌（准备配合先制/减费打出的）可能被提前自动打出。手里攻击牌越多，随机性越不可控。
- **3 费的定位**：一次性 3 费买到"12~18 伤 + 后续 2~3 张牌各减 1 费 + 每回合 1 张免费攻击牌"。适合攻击牌密度高的速攻/连击流派；升级只加邪龙之噬层数（2→3），收益稳定提升。

- **堕落 22：只计一次的暗账**：堕落只在**打出这张牌时**结算一次 +<span style="color:#3aa675;font-weight:600">22</span>[堕落](/powers/fallen_power.md)——惊逃自动出牌、邪龙之噬触发都不叠加。能力牌通常一场只打一次，22 层是温和档位；堕落是累积计数、每跨过 <span style="color:#3aa675;font-weight:600">100</span> 的倍数被[魔君接管](/powers/demon_takeover_power.md)强制乱打，需与其他堕落源一起看总进度。
- **带[毁灭](/mechanics/destruction.md)但要留意**：牌面确实显示毁灭关键词，但当前版本这张牌不会实际清空消耗堆（毁灭的清空效果目前只在部分关键词牌上生效，这张能力牌不在其中）；而且能力牌打出后直接离场，不进消耗堆，也不会被自己清入销毁堆。

## 相关能力

- [邪龙之噬](/powers/dragon_devour_power.md)（mod 增益，每打出一张牌对随机敌人造成 6 点非攻击伤害并获得 1 层先制，消耗 1 层）
- 惊逃（原版增益，回合结束时随机免费自动打出 1 张手牌攻击牌，每回合触发）
- [先制](/powers/first_strike_power.md)（mod 增益，N 层使下一张牌耗能 -N，打出后整体移除）
- [堕落](/powers/fallen_power.md)（每打出一次固定 +22 层）

## 相关机制

- [毁灭](/mechanics/destruction.md)（牌面关键词；当前版本这张能力牌不触发清空消耗堆）
- [堕落](/powers/fallen_power.md)（累积计数，每跨过 100 的倍数触发魔君接管）

## 源码

- `SeerInescapableDoom.cs`
- `SeerDragonDevourPower.cs`
- `StampedePower.cs`
