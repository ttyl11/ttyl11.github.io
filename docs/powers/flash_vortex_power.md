# 闪光漩涡

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物施加给玩家——[史莱姆国王](/monsters/normal/slime_king_monster.md)、[史莱姆王子](/monsters/normal/slime_prince_monster.md)

<img src="/images/powers/flash_vortex_power.png" alt="闪光漩涡" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

每回合结束时，若你的四个牌堆中有<span style="color:#3aa675;font-weight:600">3</span>个及以上存在<span style="color:#d4a017;font-weight:600">状态牌</span>，战斗结束后向你的牌组加入<span style="color:#3aa675;font-weight:600">1</span>张<span style="color:#d4a017;font-weight:600">粘液</span>。

## 详细机制

- **判定时点**：**敌方回合结束时**（每位持有者结算一次）。
- **判定口径**：抽牌堆、手牌、弃牌堆、消耗堆，四个牌堆中只要有 3 个及以上存在状态牌，就累计 1 张。
- **累计而非即时**：每个符合条件的回合 +1 张，战斗结束后**一次性**把所有累计的粘液加入牌组（随机位置）。
- 状态牌判定按卡牌类型为「状态」，不是按卡名。

## 源码

- `SeerFlashVortexPower.cs`
