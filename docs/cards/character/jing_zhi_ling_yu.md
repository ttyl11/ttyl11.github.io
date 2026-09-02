# 静止领域

<img src="/images/cards/jing_zhi_ling_yu.png" alt="静止领域" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌

- **最大PP**: 1

- **能量消耗**: 3（升级 2）

- **类型**: 能力

- **稀有度**: 罕见

- **目标**: 自身

- **可升级**: 是（1 级）

### 数值参数

| 参数   | 数值           | 升级后 |
| ---- | ------------ | --- |
| 附魔数量 | 弃牌堆中所有符合条件的牌 | 同左  |
| PP   | 1            | 1   |
| 最大PP | 1            | 1   |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 将[弃牌堆](/mechanics/discard_pile.md)所有牌附魔\[冷却时间]（获得[重放](/mechanics/replay.md)+1 并[消耗](/mechanics/exhaust.md)）。

## 升级后

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 将[弃牌堆](/mechanics/discard_pile.md)所有牌附魔\[冷却时间]（获得[重放](/mechanics/replay.md)+1 并[消耗](/mechanics/exhaust.md)）。（升级后能量消耗降为 2）

## 小贴士

- **高性价比的群发附魔**：3 费（升级 2 费）让弃牌堆所有可附魔牌获得重放机会。弃牌堆越厚收益越高——5 张可附魔牌相当于一次唤醒 5 次额外出牌。

- **冷却时间附魔的代价**：获得重放 +1 意味着每张牌可以再打出一次，但重放后立即进入[消耗](/mechanics/exhaust.md)——永久离场，无法回收。本质是用"一次性重放"换取弃牌堆中沉睡的牌重新可用。

- **已附魔的牌不被覆盖**：只给未附魔的牌施加冷却时间附魔，已有附魔（如[五音附魔](/mechanics/enchantment.md)等）的牌保持原样，不会重复附魔。

- **与神权忤逆的消耗链**：[神权忤逆](./shen_quan_wu_ni.md)的[残鸣](/mechanics/keywords.md)在被消耗时从消耗牌堆选 1 张入手。静止领域让弃牌堆的牌打上冷却时间后重放→消耗，恰好为残鸣提供消耗牌堆素材，形成完整的消耗触发链。

- **升级减费的价值**：3→2 费让此牌更容易在早期打出，快速激活弃牌堆中的牌，不必等待能量充裕。

## 相关机制

- [PP系统](/mechanics/pp-system.md)

- [冷却时间附魔](/mechanics/enchantment.md)

- [重放](/mechanics/replay.md)

- [消耗](/mechanics/exhaust.md)

- [弃牌堆](/mechanics/discard_pile.md)

## 源码

- `SeerJingZhiLingYu.cs`

