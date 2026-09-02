# 创世之神谕

<img src="/images/cards/genesis_oracle.png" alt="创世之神谕" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌

- **最大PP**: 1

- **能量消耗**: 3

- **类型**: 攻击

- **稀有度**: 罕见

- **目标**: 单个敌方

- **可升级**: 是（1 级）

- **关键词**: 无

### 数值参数

| 参数   | 数值 | 升级后 |
| ---- | -- | --- |
| 基础伤害 | 32 | 45  |
| PP   | 1  | 1   |
| 最大PP | 1  | 1   |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 对单个敌人造成<span style="color:#d44;font-weight:600">32</span>点伤害。若此攻击\[<span style="color:#d44;font-weight:600">斩杀</span>]了目标，从当前可用稀有牌池中随机抽取1张加入你的[<span style="color:#d4a017;font-weight:600">牌组</span>](/mechanics/draw_pile.md)。

## 升级后

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 对单个敌人造成<span style="color:#d44;font-weight:600">45</span>点伤害。若此攻击\[<span style="color:#d44;font-weight:600">斩杀</span>]了目标，从当前可用稀有牌池中随机抽取1张加入你的[<span style="color:#d4a017;font-weight:600">牌组</span>](/mechanics/draw_pile.md)。

## 详细机制

- **斩杀判定**：使用 `target.Powers.All(p => p.ShouldOwnerDeathTriggerFatal())` 检查目标是否无法触发复活效果，且本次攻击确实击杀目标（`WasTargetKilled == true`）。两个条件同时满足才触发奖励。

- **立即结算**：斩杀奖励在伤害结算后立即执行（`GrantRandomRareCard()` 在 `OnPlay` 中调用），不依赖回合结束或其他延迟钩子。这确保了在击杀最后一个敌人时也能正常发放奖励。

- **牌池来源**：从当前mod已解锁的稀有牌池（`CardRarity.Rare`，稀有度枚举值为4）中随机抽取，受玩家解锁状态约束。

- **加入牌组**：随机位置加入玩家牌组（`CardPilePosition.Random`），与原版遗物加入牌组的逻辑一致。被加入的牌是战斗内创建的卡牌实例，保留原卡的所有属性和升级状态。

- **牌池为空时静默处理**：若当前无可用稀有牌（牌池为空或全被移除），直接返回，不报错。

::: tip 与[创世之神谕奖励](/powers/genesis_oracle_reward_power.md)的区别
[创世之神谕奖励](/powers/genesis_oracle_reward_power.md)是本卡的可见提示能力，仅用于悬浮框展示斩杀状态，不参与实际结算。真正的奖励逻辑由卡牌代码直接处理。
:::

## 小贴士

- **滚雪球式成长**：32点伤害本身不算突出，但核心在于"斩杀后获得随机稀有牌"。每次成功斩杀都会让牌组质量持续提升，后期单卡质量极高。配合高伤害卡形成斩杀触发链是核心玩法。

- **3费的风险与回报**：3费是一张高成本单PP卡，打出后需要等待冷却才能再次使用（PP1 = 只能打一次，之后进入PP耗尽状态）。如果斩杀未触发，3费的纯伤害性价比偏低。建议确保伤害足以斩杀目标，或配合其他低费卡完成斩杀后再打出此卡。

- **随机性的双刃剑**：获得的稀有牌完全随机，可能获得强力卡牌，也可能获得暂时用不上的卡。但从概率上讲，稀有牌池中大部分卡牌质量高于普通/ uncommon牌，长期收益为正。

- **与[一念生死叹](./life_death_sigh.md)的斩杀联动**：[一念生死叹](./life_death_sigh.md)在高HP优势时造成1.5倍伤害，可以更容易触发斩杀；[创世之神谕](./genesis_oracle.md)负责斩杀后获得稀有牌奖励。两者配合形成"高HP优势→斩杀→滚雪球"的循环。

- **升级收益分析**：基础伤害从32→45（+13），斩杀阈值大幅提高。升级后更容易触发斩杀奖励，升级优先级极高。

- **与[毁灭元神](./ruin_soul.md)的配合**：[毁灭元神](./ruin_soul.md)在牌堆压缩后可打出30/42点伤害，配合本卡的斩杀触发机制，形成"压缩牌堆→高伤害斩杀→获得稀有牌"的完整链条。

- **不可斩杀的情况**：若目标拥有[不死之身](/powers/immortal_body_power.md)等复活能力，斩杀判定失败，不会获得稀有牌奖励。此时本卡仅作为一张3费32/45点伤害的单目标攻击卡使用，性价比需自行评估。

## 相关能力

- [创世之神谕奖励](/powers/genesis_oracle_reward_power.md)（斩杀状态的可见提示能力）

## 相关机制

- [PP系统](/mechanics/pp-system.md)（PP消耗机制）

- [斩杀](/mechanics/fatal.md)（触发稀有牌奖励的条件）

- [牌组](/mechanics/draw_pile.md)（稀有牌的加入目标）

- [永恒](/mechanics/eternal.md)（卡牌加入牌组的另一种方式，可对比理解）

## 源码

- `SeerGenesisOracle.cs`

- `SeerGenesisOracleRewardPower.cs`

