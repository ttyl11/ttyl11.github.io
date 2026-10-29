# 奸奇

<img src="/images/cards/tzeentch.png" alt="奸奇" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 1
- **能量消耗**: 3
- **类型**: 技能
- **稀有度**: 稀有
- **目标**: 无
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 基础耗能 | 3 | 3 |
| 耗能增长 | 整局每打出一次 +1 | 整局每打出一次 +1 |
| 基础获取 | 4 | 4 |
| 堕落 | 10×泰坦之灵数 | 10×泰坦之灵数 |
| 虚无 | 有 | 无 |
| PP | 1 | 1 |
| 最大PP | 1 | 1 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 获得<span style="color:#3aa675;font-weight:600">4</span>个[<span style="color:#d4a017;font-weight:600">泰坦之灵</span>](/mechanics/currency.md)。整局每打出一次，泰坦之灵+<span style="color:#3aa675;font-weight:600">1</span>、耗能+<span style="color:#3aa675;font-weight:600">1</span>。[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">10×泰坦之灵数</span>。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 获得<span style="color:#3aa675;font-weight:600">4</span>个[<span style="color:#d4a017;font-weight:600">泰坦之灵</span>](/mechanics/currency.md)。整局每打出一次，泰坦之灵+<span style="color:#3aa675;font-weight:600">1</span>、耗能+<span style="color:#3aa675;font-weight:600">1</span>。[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">10×泰坦之灵数</span>。

## 小贴士

- **越打越肥**：首次打出获得 <span style="color:#3aa675;font-weight:600">4</span> 个[<span style="color:#d4a017;font-weight:600">泰坦之灵</span>](/mechanics/currency.md)，此后每打出一次永久 +<span style="color:#3aa675;font-weight:600">1</span>（<span style="color:#3aa675;font-weight:600">4</span>→<span style="color:#3aa675;font-weight:600">5</span>→<span style="color:#3aa675;font-weight:600">6</span>……）。这个累加会保存在整局游戏中，越往后单发收益越高。注意 PP 本身是单场战斗资源，每场战斗重置为 1，但打出次数的累加永久保存。
- **越打越贵（整局累计加价）**：耗能随这张牌**整局打出次数**递增——第 1 次 3 费、第 2 次 4 费、第 3 次 5 费……与[魔·决裂黎明](/fifth-skill/demon_breaking_dawn.md)的"整局每打出一次耗能×2"同款范式（本牌是线性 +1）。加价与泰坦之灵持有量无关：攒着不花不会变贵，但打得越多这张牌越难打出，形成"收益滚雪球、出手越来越贵"的自我限速。
- **泰坦之灵怎么花不影响耗能**：耗能只认打出次数，不再与持有量挂钩——把泰坦之灵花在商店/兑换上不会让这张牌变便宜，放心消费即可（腾出来的钱不用留给它）。
- **虚无逼你出手**：基础版带[<span style="color:#d4a017;font-weight:600">虚无</span>](/mechanics/ethereal.md)，回合结束时若仍留在手牌则被[<span style="color:#d4a017;font-weight:600">消耗</span>](/mechanics/exhaust.md)。你被迫"抽到就得打"，可偏偏打了又会涨价，是个推你走钢丝的抉择。
- **升级拔虚无**：升级移除[<span style="color:#d4a017;font-weight:600">虚无</span>](/mechanics/ethereal.md)，让你能把它攥在手里，等能量充裕时再打出——注意攥在手里不会让耗能回落，晚打的代价只有"次数迟早会加"。
- **堕落 = 泰坦之灵×10，越肥越接近失控**：堕落按**打出后（含本次获得）的泰坦之灵总数**×<span style="color:#3aa675;font-weight:600">10</span> 结算——持有 5 个就 +50、持有 10 个直接 +100 触发[魔君接管](/powers/demon_takeover_power.md)。堕落是负面机制，每满<span style="color:#3aa675;font-weight:600">100</span>层强制接管乱打手牌；攒币周期里要算准打出时机。
- **PP 1 = 每场最多手动打一次**：PP 是单场资源，本牌 PP1，每场战斗通常只能手动打出一次；想反复滚雪球需要其它 PP 恢复手段。
- **性价比**：3 费起跳的滚雪球货币牌，长线收益极高但前期负担偏重；加价改为整局按次数后，频繁打出会被费用拖住，适合能稳定回费、并把泰坦之灵及时变现的流派。

## 相关机制

- [泰坦之灵](/mechanics/currency.md)（整局货币，影响获取量）
- [虚无](/mechanics/ethereal.md)（基础版关键词，升级移除）
- [堕落](/powers/fallen_power.md)（堕落 = 当前泰坦之灵数 ×10，满 100 触发魔君接管）

## 源码

- `SeerTzeentch.cs`
