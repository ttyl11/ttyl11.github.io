# 告命诗途

<img src="/images/cards/gao_ming_shi_tu.png" alt="告命诗途" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 3
- **能量消耗**: 3
- **类型**: 技能
- **稀有度**: 稀有
- **目标**: 自身
- **可升级**: 是（1 级）
- **关键词**: [迁鸣](/mechanics/keywords.md)、[保留](/mechanics/retain.md)（升级后移除）

### 数值参数

| 参数   | 数值 | 升级后 |
| ---- | -- | --- |
| PP   | 3  | 3   |
| 最大PP | 3  | 3   |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">3</span>/<span style="color:#3aa675;font-weight:600">3</span> 回满[牌组](/mechanics/card-pool-extension.md)中所有被[附魔](/mechanics/enchantment.md)的牌的 PP 并免费自动打出。[迁鸣](/mechanics/keywords.md)：牌堆变化时，从手牌选一张未附魔的牌添加随机[五音附魔](/mechanics/enchantment.md)。[保留](/mechanics/retain.md)。

## 升级后

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">3</span>/<span style="color:#3aa675;font-weight:600">3</span> 回满[牌组](/mechanics/card-pool-extension.md)中所有被[附魔](/mechanics/enchantment.md)的牌的 PP 并免费自动打出。[迁鸣](/mechanics/keywords.md)：牌堆变化时，从手牌选一张未附魔的牌添加随机[五音附魔](/mechanics/enchantment.md)。

## 工作机制

- **两阶段执行**：先全量恢复 PP，再全量自动打出。两阶段分离是设计核心——先确保所有附魔牌的 PP 都回满，再统一免费打出，避免中途状态变化影响恢复顺序。
- **牌组过滤规则**：只处理"属于主牌组"（排除战斗中临时生成的衍生牌）、"已附魔"且"非本牌自身"的 PP 牌；未附魔的 PP 牌不受影响。三个条件同时满足才纳入处理。
- **自动打出行为**：被选中的附魔牌免费自动打出，不消耗能量；打出后各牌自身照常消耗其 PP。攻击牌自动选取敌方目标，技能/能力牌作用于自身。
- **迁鸣触发时机**：牌堆发生被动变化时触发（抽牌、弃牌、获得牌、转移牌等），不要求本牌在手牌中。触发时先随机选一种[五音附魔](/mechanics/enchantment.md)，再从手牌选择一张未附魔且该附魔允许的牌施加；若无符合条件的手牌则效果跳过。
- **五音附魔类型**：共五种——[册](/enchantments/five_tone_book.md)、[乂](/enchantments/five_tone_cross.md)、[囙](/enchantments/five_tone_return.md)、[卩](/enchantments/five_tone_seal.md)、[仐](/enchantments/five_tone_umbrella.md)。
- **升级的质变**：基础版带[保留](/mechanics/retain.md)，每场战斗只能打出一次；升级后移除保留，可每回合打出。升级后卡面不再显示保留。
- **无附魔牌时的行为**：若牌组中没有符合条件的附魔 PP 牌，打出后 PP 归零、无任何效果——这是 3 费白亏的情况，应尽量避免。

## 小贴士

- **唤醒整套附魔体系**：牌组中每有一张已附魔 PP 牌，此牌一次打出即可将其回满并免费打出。N 张附魔牌一次唤醒，牌组附魔积累越厚，收益越夸张——是附魔体系的放大器。
- **N=0 时的陷阱**：若牌组中没有已附魔的 PP 牌（开局阶段或未进入附魔节奏），打出此牌 PP 归零且无任何效果，3 费白亏。建议在已经附着 2-3 张五音附魔后再使用。
- **升级移除保留是必选项**：升级后不再保留，从"每场一次"变为"每回合可用"，配合 PP=3 可反复唤醒附魔体系。升级优先级极高。
- **迁鸣的五音随机性**：迁鸣触发时从五种五音附魔中随机选一种，结果不可控；且迁鸣是被动触发，不依赖本牌在手牌中，每回合都可能触发——需要做好应对。
- **与神权忤逆的连锁**：[神权忤逆](./shen_quan_wu_ni.md)的[蚀返](/mechanics/keywords.md)和[残鸣](/mechanics/keywords.md)在被[消耗](/mechanics/exhaust.md)时触发。告命诗途免费自动打出的附魔牌若在过程中被消耗，可同时激活这些触发效果，形成打出→消耗→再触发的连锁。
- **与逍遥游的配合**：[逍遥游](./carefree_journey.md)可以从消耗牌堆捞回高 PP 核心卡并恢复其 PP。告命诗途免费自动打出附魔牌后，部分牌可能被消耗进消耗堆，逍遥游可将其捞回并回满 PP，再次成为告命诗途的连锁目标。
- **五音附魔的战术目标**：迁鸣触发时应优先给高 PP 的核心牌附魔（如[王·龙予狂宴](./dragon_feast.md) PP=1、[奇镰解放](./qi_lian_liberation.md) PP=1 等），附魔后它们会在告命诗途打出时被免费自动打出，收益倍增。
- **与纯伤害附魔牌的配合**：若附魔的是高伤害攻击牌，告命诗途免费打出后可直接造成大量伤害而不消耗额外 PP，是后期爆发的关键手段。

## 相关能力

- [五音附魔](/mechanics/enchantment.md)（册/乂/囙/卩/仐五种随机附魔）
- [迁鸣](/mechanics/keywords.md)（牌堆变化时触发）

## 相关机制

- [PP系统](/mechanics/pp-system.md)
- [保留](/mechanics/retain.md)
- [附魔](/mechanics/enchantment.md)
- [消耗](/mechanics/exhaust.md)

## 源码

- `SeerGaoMingShiTu.cs`
