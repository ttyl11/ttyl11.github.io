# 龙寤揭天

<img src="/images/cards/dragon_awakening_sky.png" alt="龙寤揭天" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 2
- **类型**: 攻击
- **稀有度**: 稀有
- **目标**: 随机敌方
- **可升级**: 是（1 级）
- **关键词**: [奇巧](/mechanics/sly.md)

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害 | 6 | 10 |
| 回手牌所需卡数 | 4 | 4 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: 5/5 对随机敌人造成<span style="color:#3aa675;font-weight:600">6</span>点伤害。每层[<span style="color:#d4a017;font-weight:600">先制</span>](/powers/first_strike_power.md)额外打出一次。每打出<span style="color:#3aa675;font-weight:600">4</span>张牌回到[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)。

## 升级后

PP: 5/5 对随机敌人造成<span style="color:#3aa675;font-weight:600">10</span>点伤害。每层[<span style="color:#d4a017;font-weight:600">先制</span>](/powers/first_strike_power.md)额外打出一次。每打出<span style="color:#3aa675;font-weight:600">4</span>张牌回到[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)。

## 小贴士

- **先制驱动的多段输出**：基础打出 1 次，每层[先制](/powers/first_strike_power.md)额外打出 1 次——打出次数 = 1 + 先制层数（直接加算，不设上限）。配合[荒烬涂天](./desolate_ash_sky.md)（持续期间每回合先制 +2）或其他先制来源，一张牌可以打出 3-5 次，每次都是完整的伤害结算，总伤远超单次。
- **奇巧关键词**：带有[奇巧](/mechanics/sly.md)关键词，可以被奇巧效果强制打出——不需要手动打出即可触发全部效果。配合奇巧触发牌可以在不占出牌权的情况下多段输出。
- **随机目标每次重选**：每次打出都**重新随机选择**目标（每次结算都从可命中敌人中重新抽签，多端同步）。多敌人遭遇战中伤害会分散到不同敌人；单体 Boss 战中所有伤害集中在一个目标。
- **回手牌循环（规则比想象的宽）**：每打出 4 张牌时，此牌回到[手牌](/mechanics/hand.md)**底部**。经验证的具体规则：
 - **计数只算你自己本回合打出的牌**（含此牌自己），每满 4 张触发一次（第 4、8、12…张时）。
 - **只要不在手牌就会回手**：不是只有弃牌堆——此牌还在[抽牌堆](/mechanics/draw_pile.md)没抽到时，打出第 4 张牌它也会直接从抽牌堆飞回手牌。
 - 打出此牌后它进[弃牌堆](/mechanics/discard_pile.md)，若它恰好是本回合第 4 张，**立即回手**。
 - 在快速出牌的卡组中（低费连击流），这张牌可以**反复回到手牌**实现循环输出。
- **配合建议**：最佳配合是先制流——[荒烬涂天](./desolate_ash_sky.md)每回合先制 +2，配合此牌每回合打出 3 次（1+2 先制）= 18 伤害（升级后 30）。低费连击流（快速打出 4 张牌触发回手）可以让此牌循环使用。奇巧触发牌可以在不占出牌权的情况下触发。
- **升级的价值**：伤害从 6 提升至 10。配合先制多段打出（3 次 × 10 = 30 伤害/回合），配合回手循环可持续输出。升级优先级高。
- **性价比**：2 费 6 伤害看似偏低，但先制驱动多段 + 回手循环的综合价值极高。需要先制流支撑才能发挥——无先制时仅 2 费 6 伤害（性价比一般）。

## 相关能力

- [先制](/powers/first_strike_power.md)（每层额外打出一次）

## 相关机制

- [奇巧](/mechanics/sly.md)（原版关键词）
- [手牌](/mechanics/hand.md)（每打出 4 张牌回到手牌）

## 源码

- `SeerDragonAwakeningSky.cs`
