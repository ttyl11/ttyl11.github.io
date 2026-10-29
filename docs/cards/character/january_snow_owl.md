# 一月的雪鹄

<img src="/images/cards/january_snow_owl.png" alt="一月的雪鹄" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 1
- **能量消耗**: 2
- **类型**: 能力
- **稀有度**: 普通
- **目标**: 无
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 冻伤层数（每层持续 1 回合） | 2 | 3 |
| PP | 1 | 1 |
| 最大PP | 1 | 1 |

## 描述

PP: 1/1 <span style="color:#d4a017;font-weight:600">冻伤</span>所有敌人<span style="color:#3aa675;font-weight:600">2</span>。每有一层<span style="color:#d4a017;font-weight:600">冻伤</span>，抽1张牌。

## 升级后

PP: 1/1 <span style="color:#d4a017;font-weight:600">冻伤</span>所有敌人<span style="color:#3aa675;font-weight:600">3</span>。每有一层<span style="color:#d4a017;font-weight:600">冻伤</span>，抽1张牌。

## 小贴士

- **冻伤叠加抽牌**：对所有敌人施加冻伤，每层冻伤（含原有层数）抽 <span style="color:#3aa675;font-weight:600">1</span> 张牌。3 个敌人无原有冻伤时：施加 2×3=6 层，抽 6 张牌。抽牌数按"战前已有冻伤总层数＋施加层数×敌人数"直接计算——即使某个敌人被[人工制品](/powers/artifact_power.md)或免疫挡掉、实际没吃上冻伤，它那份也照样计入抽牌。
- **配合冰系叠加**：先施加冻伤再打出此牌，原有层数 + 新层数一起计入抽牌。配合其它冰系卡牌（冰封、冻伤）可放大抽牌数。
- **多敌人价值放大**：敌人越多，施加层数越多，抽牌越多。单 Boss 时只抽 2-3 张，多敌人遭遇战价值翻倍。
- **2 费合理**：2 费换全敌人冻伤 + 大量抽牌。冻伤每回合只造成 <span style="color:#3aa675;font-weight:600">5</span> 点不可格挡伤害（不随层数放大），2 层＝每回合 5 点、持续 2 回合，每名敌人共 10 点；3 个敌人 2 层＝每回合共 15 点、两回合共 30 点，外加 6 张抽牌，性价比极高。
- **升级增冻伤回合**：冻伤层数 <span style="color:#3aa675;font-weight:600">2</span> → <span style="color:#3aa675;font-weight:600">3</span>。多敌人时每多 1 层＝多抽敌人数张牌 + 每名敌人多挨 1 轮 5 点伤害（多减 1 层），收益显著。
- **带[迁鸣](/mechanics/qianming.md)**：变化牌堆时触发，获得 1 层"手牌上限提升"。该能力首次不立刻加手牌上限，从下个己方回合开始每个回合 +1 手牌上限并叠 1 层[缓冲](/powers/buffer_power.md)；多次触发会让起始手牌上限更高（每多 1 层额外 +1）。与本身"抽大量牌"配合，缓解爆手牌压力。

## 相关能力

- [冻伤](/powers/frostbite_power.md)（mod 减益，回合开始时受到 5 点不可格挡伤害并减少 1 层）
- [手牌上限提升](/powers/hand_size_up_power.md)（迁鸣触发：每回合 +1 手牌上限并叠 1 层缓冲）
- [缓冲](/powers/buffer_power.md)（每层抵消下一次生命值损失）

## 相关机制

- [迁鸣](/mechanics/qianming.md)（变化牌堆时获得 1 层手牌上限提升，之后每回合 +1 手牌上限并叠 1 层缓冲）

## 源码

- `SeerJanuarySnowOwl.cs`
- `SeerFrostbitePower.cs`
