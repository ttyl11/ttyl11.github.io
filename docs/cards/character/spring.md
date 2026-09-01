# 弹簧

<img src="/images/cards/spring.png" alt="弹簧" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

* **分类**: 角色（圣灵谱尼）牌

* **最大PP**: 5

* **能量消耗**: 2

* **类型**: 技能

* **稀有度**: 普通

* **目标**: 自身

* **可升级**: 是（1 级）

### 数值参数

| 参数                | 数值 | 升级后 |
| ----------------- | -- | --- |
| 格挡                | 9  | 9   |
| 额外抽牌 / 额外能量（每张弹簧） | 2  | 3   |
| PP（首次打出时）         | 5  | 5   |
| 每次打出消耗 PP         | 1  | 1   |
| 施加弹簧能力持续回合        | 1  | 1   |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> [奇巧](/mechanics/sly.md) 获得<span style="color:#3aa675;font-weight:600">9</span>点[格挡](/mechanics/block.md)，丢弃手中所有牌。施加[弹簧能力](/powers/spring_bonus_power.md)，每回合多抽<span style="color:#3aa675;font-weight:600">2</span>张牌，多获得<span style="color:#3aa675;font-weight:600">2</span>点[能量](/mechanics/energy.md)，持续<span style="color:#3aa675;font-weight:600">1</span>回合。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> [奇巧](/mechanics/sly.md) 获得<span style="color:#3aa675;font-weight:600">9</span>点[格挡](/mechanics/block.md)，丢弃手中所有牌。施加[弹簧能力](/powers/spring_bonus_power.md)，每回合多抽<span style="color:#3aa675;font-weight:600">3</span>张牌，多获得<span style="color:#3aa675;font-weight:600">3</span>点[能量](/mechanics/energy.md)，持续<span style="color:#3aa675;font-weight:600">1</span>回合。

## 详细机制

### PP 消耗与恢复

* 打出弹簧时消耗 <span style="color:#3aa675;font-weight:600">1</span> 点 PP。打出后 PP 变为 <span style="color:#3aa675;font-weight:600">4</span>。

* PP 的恢复**不依赖回合开始**，而是当这张牌被**重新抽入手牌时自动恢复**至满 PP（游戏系统在卡牌克隆时重置 PP）。

* 只要 PP > 0，弹簧就可以再次打出。

* 若持有遗物 [不行动唤醒者](/relics/)（SeerInactionAwakener），即使 PP 为 0 也可打出。

### 奇巧（Sly）连锁 Combo

* 弹簧带有 [奇巧](/mechanics/sly.md) 关键词：**如果这张牌在你的回合结束前从手牌中被丢弃，则免费将其打出。**

* 打出弹簧后，手牌中的其他弹簧会因被丢弃而触发奇巧，**免费重新打出**——形成连锁 Combo。

* 连锁流程示例（手牌有 2 张未升级弹簧）：

  1. 打出第 1 张弹簧：获得 9 格挡，丢弃全手牌（含第 2 张弹簧），施加弹簧能力（Amount=1，Bonus=2）
  2. 第 2 张弹簧因奇巧免费打出：再获得 9 格挡，丢弃剩余手牌，施加弹簧能力（Amount+1=2，Bonus=2）
  3. 两张弹簧能力合并为同一实例，Amount=2，Bonus=2，持续 2 回合——每回合多抽 2 张牌、多获 2 点能量，第二回合结束时能力移除

* 此机制使多张弹簧在同一回合内反复打出成为可能，大幅扩展战术深度。

### 多张弹簧的叠加

* 多张弹簧产生的弹簧能力会**合并为同一实例**（Counter 叠加方式）。

* **回合数累加**：每多打出一张弹簧，Amount（剩余回合数）+1。

* **Bonus 值固定**：每张弹簧施加时 Bonus 值保持不变（未升级弹簧 Bonus=2，升级弹簧 Bonus=3），不会因叠加而提升。

* 例如：手牌打出 2 张未升级弹簧 → Amount=2，Bonus=2，持续 2 回合，每回合多抽 2 张牌、多获 2 点能量。

* 例如：手牌打出 1 张未升级 + 1 张升级弹簧 → Amount=2，Bonus 取决于最后施加的弹簧（可能为 2 或 3）。

## 小贴士

* **PP 在抽牌时恢复**：打出弹簧只消耗 1 PP（PP 从 5 变为 4），并非耗光。卡牌被重新抽到时，PP 自动恢复至满值 5。

* **奇巧 Combo 是核心玩法**：弹簧的弃牌效果与奇巧关键词形成天然联动——打出弹簧后手牌中若有其他弹簧，它们会免费重新打出，实现连锁收益。这也是"弹簧卡组"名称的由来。

* **格挡即时生效**：本回合立即获得 9（升级后 9）点格挡，有效抵御当回合敌人的攻击。

* **丢弃手牌是双刃剑**：打出弹簧会清空整个手牌，包括可能需要的解牌、增益牌或其他弹簧。但正因为奇巧的存在，丢弃的弹簧能免费重出，风险部分抵消。

* **持续多回合的资源引擎**：弹簧能力在接下来每回合开始时触发（多抽 Bonus 张牌、多获 Bonus 点能量），持续 Amount 回合。多张弹簧叠加只增加回合数，不增加每回合的额外资源量。

* **升级提升 Bonus 而非回合数**：升级弹簧将 Bonus 从 2 提升到 3，但每次施加的回合数仍为 1（叠加后的 Amount 由打出张数决定）。

* **配合遗物克雷扎**：[克雷扎](/relics/rare/keiza.md)每回合将抽牌堆一张牌变形为弹簧，搭配此牌可每回合稳定提供格挡+持续资源收益。

## 相关能力

* [弹簧能力](/powers/spring_bonus_power.md)

## 相关遗物

* [克雷扎](/relics/rare/keiza.md)（每回合生成弹簧）

* [鲁加斯](/relics/common/lugas.md)（战斗开始加入巨石）

## 源码

* `SeerSpring.cs`

* `SeerPpCardModel.cs`（PP 卡牌基类）

