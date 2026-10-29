# 创世神谕

> **归属**：玩家可施加（仅提示，当前版本没有实际施加入口）
> **施加来源**：无——仅作为卡牌悬浮框的提示来源

<img src="/images/powers/genesis_oracle_reward_power.png" alt="创世神谕" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff，提示用）
- **叠加方式**: 计数型（Counter）
- **可见**: 是

## 说明

该能力**不会被真正施加**到角色身上：卡牌[创世之神谕](/cards/character/genesis_oracle.md)只是通过悬浮框接口虚拟引用它来展示说明文字，实际奖励由卡牌自身立即结算。因此它没有层数、也不进入能力栏。

## 描述（提示内容）

打出[创世之神谕](/cards/character/genesis_oracle.md)并成功斩杀敌人时，立即从当前已解锁的 mod 稀有牌池中随机获得 1 张牌，加入牌组随机位置。

## 详细机制

- **结算时机**：卡牌造成伤害后立即判定斩杀，当场发奖（不是战斗结束）。
- **斩杀判定**：目标没有防致命死亡能力，且本次攻击确实将其击杀。
- **牌池**：赛尔卡池中当前已解锁、稀有度为**稀有**的牌。
- **随机**：使用战斗生成卡牌子 RNG，多端一致。

## 相关卡牌

- [创世之神谕](/cards/character/genesis_oracle.md)（此提示的引用来源）

## 源码

- `SeerGenesisOracleRewardPower.cs`（仅定义提示能力）
- `SeerGenesisOracle.cs`（实际结算）
