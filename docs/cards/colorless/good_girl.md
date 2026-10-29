# 好女孩

<img src="/images/cards/good_girl.png" alt="好女孩" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 无色牌
- **能量消耗**: 1
- **类型**: 能力
- **稀有度**: 罕见
- **目标**: 自身
- **关键词**: [固有](/mechanics/innate.md)、[随机异常](/mechanics/sui_ji_yi_chang.md)
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 异常状态数量（实际） | 2 | 2 |
| 异常状态数量（卡面显示） | 2 | 3 |
| 持续回合 | 2 | 2 |

## 描述

每回合开始时，对手<span style="color:#d44;font-weight:600">随机异常</span><span style="color:#3aa675;font-weight:600">2，2</span>。

## 升级后

每回合开始时，对手<span style="color:#d44;font-weight:600">随机异常</span><span style="color:#3aa675;font-weight:600">3，2</span>。

> **实际结算**：能力自身的施加数量固定为 <span style="color:#3aa675;font-weight:600">2</span>，升级只把实例层数与卡面文字改成 3——实际仍是每回合 2 种。

## 小贴士

- **🔑 全自动异常撒布机**：1 费挂上能力后，之后**每个你的回合开始前**自动向随机敌人撒 <span style="color:#3aa675;font-weight:600">2</span> 种随机[异常状态](/mechanics/abnormal-status.md)各 <span style="color:#3aa675;font-weight:600">2</span> 回合——全程零费用零手牌成本的白嫖控场。
- **触发时机在回合开始前——敌人是"带病行动"**：异常在你的回合开始前就挂到敌人身上，敌人接下来的行动已经吃满效果——抽到[瘫痪](/powers/paralysis_power.md)/[石化](/powers/petrify_power.md)这类硬控可能直接跳过行动，[灼烧](/powers/burn_power.md)则在它回合结束立刻掉血。**打出当回合不触发**（时机已过），第一次生效是下个回合开始前。
- **状态和目标都是每次独立随机**：每一次撒布单独随机状态（从 <span style="color:#3aa675;font-weight:600">27</span> 种全量异常池）和目标（从所有可攻击敌人）——两次可以抽中同一种状态砸向同一个敌人（叠 2 回合），也可以分散到不同敌人身上；单体 Boss 战目标必中不浪费，多敌群战则是随机点名。
- **池子与常规"随机异常"不同**：这里用的是**全部 27 种**异常（含[狂暴](/powers/fury_power.md)、[凝滞](/powers/freeze_power.md)、[超频](/powers/overclock_power.md)等平时不会被随机抽到的种类）；但**星赐**没有对应的施加逻辑，抽到会空转——实际生效 26 种。
- **随机性是双刃剑**：池子里既有[睡眠](/powers/sleep_power.md)/[瘫痪](/powers/paralysis_power.md)/[石化](/powers/petrify_power.md)这类硬控神牌，也有灼烧/中毒 1 层这类低价值平牌——单次抽取命中特定状态的概率约 <span style="color:#3aa675;font-weight:600">1/27</span>（约 3.7%），每回合 2 次约 7.3% 概率命中你想要的那一种。把它当"每回合免费抽异常彩票"，别指望稳定控某个敌人。
- **多张好女孩各自独立结算**：每次打出都会生成一个独立实例，每个实例每回合各撒 2 种——两张 = 每回合 4 种（可能重复）。
- **持续 2 回合的控场价值高于消耗**：硬控（睡眠/瘫痪/石化/冻结）的封锁窗口更长，灼烧/中毒类 DoT 也能多挂 1 回合——每点异常投入的覆盖面更大，收益更稳。
- **与异常联动体系天然契合**：依赖"敌人带异常"的增伤能力、异常层数转化类效果与它的全自动覆盖节奏完美配合——你不需要专门出牌铺异常，引擎每回合自动帮你铺。
- **对[异常免疫](/mechanics/abnormal-status.md)的敌人会空转**：敌人免疫对应异常时施加无效——面对高免疫覆盖率的目标，此牌的期望收益大幅下降。
- **[固有](/mechanics/innate.md)+1 费，越早挂越赚**：开局必在手、首回合即可挂上，第 2 回合起每回合生效——长战、精英、Boss 战的累计收益最高，速攻局意义有限。
- **升级没有实际收益**：升级只把卡面文字与实例层数显示从 2 改成 3，能力实际施加数量仍为 2——升级资源紧张时可以跳过它。

## 相关能力

- [好女孩](/powers/good_girl_power.md)（回合开始前随机施加异常状态）

## 相关机制

- [异常状态](/mechanics/abnormal-status.md)（全量 27 种异常状态随机施加，其中星赐无施加逻辑、实际生效 26 种）
- [固有](/mechanics/innate.md)（战斗开始时必定在手牌）

## 源码

- `SeerGoodGirl.cs`
