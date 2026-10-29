# 电石混地

<img src="/images/cards/flint_stone_earth.png" alt="电石混地" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 无色牌
- **能量消耗**: 1
- **类型**: 能力
- **稀有度**: 普通
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 每牌格挡（实际） | 3 | 3 |
| 每牌格挡（卡面显示） | 4 | 4 |

## 描述

每打出1张牌，获得<span style="color:#3aa675;font-weight:600">4</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。每有<span style="color:#3aa675;font-weight:600">6</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)，造成的伤害<span style="color:#3aa675;font-weight:600">-1</span>。

## 升级后

耗能<span style="color:#3aa675;font-weight:600">-1</span>。每打出1张牌，获得<span style="color:#3aa675;font-weight:600">4</span>点<span style="color:#d4a017;font-weight:600">格挡</span>。每有<span style="color:#3aa675;font-weight:600">6</span>点<span style="color:#d4a017;font-weight:600">格挡</span>，造成的伤害<span style="color:#3aa675;font-weight:600">-1</span>。

## 小贴士

- **🔑 实际每牌 3 点格挡（卡面写 4）**：结算取能力自身配置的 <span style="color:#3aa675;font-weight:600">3</span> 点，卡面与悬浮提示显示 <span style="color:#3aa675;font-weight:600">4</span>——以实际 <span style="color:#3aa675;font-weight:600">3</span> 点为准。打出这张牌自身也算一张，当场先拿 3 点。
- **削的是你自己的攻击伤害——攻击流慎用**：每有 <span style="color:#3aa675;font-weight:600">6</span> 点当前[格挡](/mechanics/block.md)，你造成的攻击伤害 -<span style="color:#3aa675;font-weight:600">1</span>（格挡 30 时每次攻击 -5）——出牌越多防御越厚、拳头越软，这是刻意的攻防交换设计。
- **固伤/DoT 流的白嫖引擎**：减伤只作用于攻击伤害——[固定伤害](/mechanics/fixed-damage.md)、[灼烧](/powers/burn_power.md)/[中毒](/powers/poison_power.md) 等持续伤害完全不受影响。固伤流挂上它 = 每打一张牌白拿 3 格挡、零代价。
- **格挡累积速度**：一回合打 10 张牌 = <span style="color:#3aa675;font-weight:600">30</span> 点格挡——铺场型构筑一回合就能攒出可观护盾。
- **攻防交换比 3:1**：每张牌 +3 格挡，代价是每 6 格挡减 1 攻击伤害——对依赖攻击输出的构筑是净亏损；对不依赖攻击伤害的构筑是纯收益。先想清楚伤害来源再拿它。
- **升级 0 费 = 无条件白嫖**：升级后 0 费挂能力，哪怕只为了固伤流的防御也是稳定收益——能升就升。
- **配合"格挡联动"双倍收割**：格挡量挂钩的遗物/能力与它的出牌攒盾节奏天然契合——盾越厚联动越强，攻击减免的代价被联动收益覆盖。

## 相关能力

- [电石混地](/powers/flint_stone_earth_power.md)：每打出一张牌获得 3 点格挡（卡面写 4），每 6 点格挡减 1 攻击伤害

## 相关机制

- [格挡](/mechanics/block.md)（获得格挡，并基于格挡值减少伤害）

## 源码

- `SeerFlintStoneEarth.cs`
- `SeerFlintStoneEarthPower.cs`
