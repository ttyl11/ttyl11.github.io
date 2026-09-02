# 创世之神谕奖励

<img src="/images/powers/genesis_oracle_reward_power.png" alt="创世之神谕奖励" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 可见能力（提示用）
- **叠加方式**: 计数型（Counter）
- **可见**: 是

> 注：此能力仅作为[创世之神谕](/cards/character/genesis_oracle.md)卡牌悬浮框的能力提示来源，实际斩杀奖励由卡牌的 `GrantRandomRareCard` 方法直接处理，本能力不参与结算。

### 数值参数

| 参数 | 说明 |
|---|---|
| 层数 | 每层代表"已斩杀敌人次数"，每层奖励1张随机稀有牌 |

## 描述

本能力是[创世之神谕](/cards/character/genesis_oracle.md)的可见标签能力。当持有此能力的[创世之神谕](/cards/character/genesis_oracle.md)对敌人造成伤害并成功[<span style="color:#d44;font-weight:600">斩杀</span>]时，立即从当前可用稀有牌池中随机抽取1张牌加入玩家[<span style="color:#d4a017;font-weight:600">牌组</span>](/mechanics/draw_pile.md)。本能力本身不产生任何效果，仅用于在悬浮框中展示斩杀奖励的触发状态。

## 详细机制

- **可见性**：此能力在玩家生物的 powers 面板中可见，作为"斩杀后将获得稀有牌"的视觉提示。
- **不计入实际结算**：真正的奖励发放逻辑写在 `SeerGenesisOracle.GrantRandomRareCard()` 中——在卡牌打出并造成伤害后、检测斩杀条件成立时立即执行，不依赖此能力的回合结束或其他钩子。
- **牌池来源**：从当前 mod 已解锁的稀有牌池（`CardRarity.Rare`）中随机抽取，与玩家当前的解锁状态绑定。
- **加入位置**：以随机位置加入玩家牌组（`CardPilePosition.Random`），与原版遗物"残破的徽章"等加入牌组的逻辑一致。

::: tip 设计意图
此类"提示能力"是赛尔 mod 的常见做法：将卡牌的特殊效果拆分为"效果本体"和"视觉提示"两部分，让玩家在战斗界面中清晰看到触发状态，而不必每次点击才能了解卡牌的斩杀奖励机制。
:::

## 相关卡牌

- [创世之神谕](/cards/character/genesis_oracle.md)（此能力的来源卡牌）

## 源码

- `SeerGenesisOracleRewardPower.cs`
- `SeerGenesisOracle.cs`
