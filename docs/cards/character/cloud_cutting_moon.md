# 镂月裁云

<img src="/images/cards/cloud_cutting_moon.png" alt="镂月裁云" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 稀有
- **目标**: 自身
- **可升级**: 是（1 级）
- **关键词**: [迁鸣](/mechanics/qianming.md)

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 格挡 | 8 | 12 |
| 恢复生命 | 3 | 5 |
| 消耗数量 | 1 | 1 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: 5/5 <span style="color:#d44;font-weight:600">迁鸣</span>：将随机<span style="color:#3aa675;font-weight:600">1</span>张诅咒或状态牌<span style="color:#d4a017;font-weight:600">消耗</span>。 获得<span style="color:#3aa675;font-weight:600">8</span>点<span style="color:#d4a017;font-weight:600">格挡</span>，恢复<span style="color:#3aa675;font-weight:600">3</span>点生命。

## 升级后

PP: 5/5 <span style="color:#d44;font-weight:600">迁鸣</span>：将随机<span style="color:#3aa675;font-weight:600">1</span>张诅咒或状态牌<span style="color:#d4a017;font-weight:600">消耗</span>。 获得<span style="color:#3aa675;font-weight:600">12</span>点<span style="color:#d4a017;font-weight:600">格挡</span>，恢复<span style="color:#3aa675;font-weight:600">5</span>点生命。

## 详细机制

- **打出效果**：先获得 8 点格挡，再恢复 3 点生命；回复量不超过最大生命。升级后为 12 格挡、5 生命。
- **迁鸣触发**：只在**镂月裁云自身换牌堆**时触发——抽到手牌、被弃置、洗回抽牌堆、进入消耗堆、打出后离开打出堆等；进入打出堆的瞬间不触发。
- **净化范围**：触发时从[手牌](/mechanics/hand.md)、[抽牌堆](/mechanics/draw_pile.md)、[弃牌堆](/mechanics/discard_pile.md)三个牌堆中筛出所有诅咒牌与状态牌，随机消耗其中 1 张。三个牌堆里没有诅咒/状态牌时无事发生。
- **触发时点的影响**：因为它抽到手就会触发，可能在你打出之前就清掉一张诅咒/状态牌；打出后又会在离开打出堆时再触发一次。
- **随机同步**：随机选取使用同步随机数，多人局两端结果一致。
- **PP**：每次打出消耗本牌 1 点 PP；PP 5 表示单场最多打出 5 次（除非有恢复 PP 的手段）。
- **升级**：格挡 8 → 12（+4），恢复生命 3 → 5（+2）；迁鸣规则不变。

## 小贴士

- **格挡 + 回血 + 净化三合一**：一次打出同时获得格挡、恢复生命，并在牌堆变化时清掉 1 张诅咒/状态牌，防御、续航、净化一体。
- **迁鸣不是“任意牌堆变化”**：只有镂月裁云自己换牌堆才触发，别的牌抽弃洗不会触发它。抽到它时会触发一次，打出离场时再触发一次。
- **随机消耗不可控**：消耗目标是随机选取的，无法指定。如果三个牌堆里有想保留的诅咒/状态牌，触发前要留意可能被随机清掉。
- **抽到就能清牌**：它不一定要打出才开始净化——抽到手牌的那一刻就会触发。有时你还没决定是否打它，它已经清掉一张牌了。
- **只清诅咒/状态**：不会消耗普通攻击、技能、能力牌，不会误伤核心牌。
- **多人同步**：随机消耗在多人模式下两端结果一致。
- **升级收益高**：格挡 8 → 12（+50%）、生命 3 → 5，双重提升；12 格挡 + 5 生命 + 净化一张，是稀有防御牌里的优秀配置。
- **性价比**：1 费 8 格挡 + 3 生命 + 净化，攻守兼备；升级后 12 格挡 + 5 生命更是质变。

## 相关机制

- [格挡](/mechanics/block.md)（获得 8/12 点格挡）
- [迁鸣](/mechanics/qianming.md)（此牌自身换牌堆时触发净化）
- [消耗](/mechanics/exhaust.md)（消耗诅咒或状态牌）
- [PP系统](/mechanics/pp-system.md)（每次打出消耗 1 点 PP）

## 源码

- `SeerCloudCuttingMoon.cs`
