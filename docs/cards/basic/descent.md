# 堕世

<img src="/images/cards/descent.png" alt="堕世" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 基础牌
- **最大PP**: 5
- **能量消耗**: 0
- **类型**: 技能
- **稀有度**: 基础
- **目标**: 无
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 能量获得 | 1 | 2 |
| 抽牌 | 2 | 2 |
| 格挡 | 7 | 7 |
| 堕落获取 | 15 | 15 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: 5/5 获得<span style="color:#3aa675;font-weight:600">1</span>点能量。抽<span style="color:#3aa675;font-weight:600">2</span>张牌。获得<span style="color:#3aa675;font-weight:600">7</span>点[格挡](/mechanics/block.md)。[堕落](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">15</span>。

## 升级后

PP: 5/5 获得<span style="color:#3aa675;font-weight:600">2</span>点能量。抽<span style="color:#3aa675;font-weight:600">2</span>张牌。获得<span style="color:#3aa675;font-weight:600">7</span>点[格挡](/mechanics/block.md)。[堕落](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">15</span>。

## 详细机制

- **全能型加速卡**：<span style="color:#3aa675;font-weight:600">0</span> 费自带"回能 + 抽牌 + 格挡 + 堕落"四合一，打出即赚资源。
- **堕落+15**：比[消亡](/cards/basic/perish.md)单张堕落 +10 更多，是索伦森中期快速积累堕落（满 100 触发[魔君接管](/powers/demon_takeover_power.md)）的主要节奏牌。
- **升级只加能量**：升级后能量 <span style="color:#3aa675;font-weight:600">1 → 2</span>，其余（抽牌/格挡/堕落）不变。

## 小贴士

- **😈主引擎**：堕落体系的敲门砖——<span style="color:#3aa675;font-weight:600">0</span> 费打出去先回 <span style="color:#3aa675;font-weight:600">1</span> 点能量、抽 <span style="color:#3aa675;font-weight:600">2</span>、拿 <span style="color:#3aa675;font-weight:600">7</span> 甲，还白给 <span style="color:#3aa675;font-weight:600">15</span> 点堕落。三张在手，平均两回合就能攒出一次魔君接管的启动资本。
- **魔君接管的引信**：堕落满 <span style="color:#3aa675;font-weight:600">100</span> 会触发魔君接管（自动打出全部可打的牌），且获得混沌化身后打超能量的牌还会**扣最大生命**——堕世自身 0 费且抽牌回能，就是方便你在接管前把关键牌打好、留好节奏，减少被乱打的损失。
- **堕落是资源也是负债**：<span style="color:#3aa675;font-weight:600">15</span> 点堕落让这张牌成为积累主引擎，但层数越高接管来得越快——记住堕落不是纯增益，每 100 层必有一次被动失控。
- **无脑可用又需要节奏**：0 费 + 全套收益使它几乎什么时候都能打，但堕世不改变 PP 上限，和 PP 回复手段配合（如[永恒](/cards/basic/eternity.md)回满 PP）能连续滚动。
- **性价比**：<span style="color:#3aa675;font-weight:600">0</span> 费换能量 + 过牌 + 护甲 + 堕落，前期拿到就是赚，升级后 2 能量几乎等于白嫖一档费用。

## 相关机制

- [堕落](/powers/fallen_power.md)（堕落积累）
- [魔君接管](/powers/demon_takeover_power.md)（堕落满 100 触发的自动打牌）

## 源码

- `SeerDescent.cs`