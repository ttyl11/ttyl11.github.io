# 黑暗之门

<img src="/images/cards/dark_gate.png" alt="黑暗之门" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌

- **最大PP**: 1

- **能量消耗**: 1

- **类型**: 能力

- **稀有度**: 罕见

- **目标**: 自己

- **可升级**: 是（1 级）

- **关键词**: [溯引](/mechanics/suyin.md)、[虚无](/mechanics/ethereal.md)（升级后去掉虚无）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 溯引堕落 | 47 | 47 |
| 打出堕落 | 当前堕落×33% | 当前堕落×33% |
| 最大能量 | 本场每100层堕落+1（打出时判定） | 本场每100层堕落+1（打出时判定） |
| PP | 1 | 1 |
| 关键词 | 虚无、溯引 | 溯引 |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> [<span style="color:#d44;font-weight:600">溯引</span>](/mechanics/suyin.md)：[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">47</span>，可消耗一张手牌[PP](/mechanics/pp-system.md)牌。[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">33%</span>。[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)每<span style="color:#3aa675;font-weight:600">100</span>层，本场[最大能量](/mechanics/energy.md)+<span style="color:#3aa675;font-weight:600">1</span>。

## 升级后

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> [<span style="color:#d44;font-weight:600">溯引</span>](/mechanics/suyin.md)：[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">47</span>，可消耗一张手牌[PP](/mechanics/pp-system.md)牌。[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">33%</span>。[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)每<span style="color:#3aa675;font-weight:600">100</span>层，本场[最大能量](/mechanics/energy.md)+<span style="color:#3aa675;font-weight:600">1</span>。

## 工作机制

- **溯引（抽到时触发）**：抽到这张牌立即获得<span style="color:#3aa675;font-weight:600">47</span>堕落，并弹出手牌选择界面，选一张[PP](/mechanics/pp-system.md)牌[消耗](/mechanics/exhaust.md)并清空其 PP（无 PP 牌时不弹）。

- **打出双效**：打出时堕落增加 = 当前堕落 × 33%（向下取整）；并按**当前堕落层数一次性判定**施加[黑暗之门](/powers/dark_gate_power.md)能力——每100层堕落，最大能量+1（仅本场战斗，战斗结束还原）。

- **能量仅在当场战斗生效**：堕落 100/200/300……层时最大能量各 +1/+2/+3……，跨战斗**不继承**，每场重新判定。判定只发生在**打出那一刻**，打出后堕落继续增长不会追加层数；能力图标不显示，通过最大能量上限变化感知加成。

## 小贴士

- **能量引擎**：堕落越高，收益越大——堕落 300 层时提供 +3 最大能量，中期性价比极高，是堕落体系里把"负面资源"转成"能量引擎"的关键卡。

- **自增堕落的自转**：打出增加当前堕落×33%，堕落越高增得越快；同时溯引的 47 与堕落成长让[魔君接管](/powers/demon_takeover_power.md)阈值更快逼近，需在能量与失控间权衡。

- **溯引选牌时机**：抽到时立即清一张手牌 PP——先把不想被[魔君接管](/powers/demon_takeover_power.md)乱打的低价值 PP 牌清空，避免接管时浪费。

- **升级去掉虚无**：升级后不再有[虚无](/mechanics/ethereal.md)，回合结束不会被迫消耗，作为能量引擎可随时留住补开，属于纯正向升级。

- **配合混沌起源**：堕落推进带来[魔君接管](/powers/demon_takeover_power.md)失控，但[最大能量](/mechanics/energy.md)成长与[混沌起源](/relics/starter/chaos_origin.md)的上限兜底让整体仍是"坏而不致命"的交易。

## 相关能力

- [黑暗之门](/powers/dark_gate_power.md)（每100层堕落最大能量+1）
- [堕落](/powers/fallen_power.md)（溯引47 / 打出当前×33%）

## 相关机制

- [PP系统](/mechanics/pp-system.md)（清空手牌PP）
- [溯引](/mechanics/suyin.md)（抽到时触发）
- [消耗](/mechanics/exhaust.md)（溯引消耗手牌）
- [虚无](/mechanics/ethereal.md)（升级去掉）
- [能量](/mechanics/energy.md)（最大能量成长）

## 源码

- `SeerDarkGate.cs`