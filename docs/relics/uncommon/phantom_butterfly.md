# 幻影蝶

<img src="/images/relics/phantom_butterfly.png" alt="幻影蝶" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 罕见

### 数值参数

| 参数 | 数值 |
|---|---|
| 生命消耗 | 6 |
| 增益回合数 | 2 |
| 冷却场次 | 3 |

## 描述

①[<span style="color:#d4a017;font-weight:600">战斗中右键</span>](/mechanics/relic-right-click.md)：扣除<span style="color:#3aa675;font-weight:600">6</span>点生命。②下场战斗开始时：获得<span style="color:#3aa675;font-weight:600">2</span>回合[<span style="color:#d4a017;font-weight:600">无实体</span>](/powers/intangible_power.md)、[<span style="color:#d4a017;font-weight:600">先制</span>]+<span style="color:#3aa675;font-weight:600">1</span>和[<span style="color:#d4a017;font-weight:600">必定暴击</span>](/powers/turn_guaranteed_crit_power.md)。③每隔<span style="color:#3aa675;font-weight:600">3</span>场战斗可用一次。

## 风味文字

<span style="color:#d44;font-weight:600">幻影蝶。</span>

## 小贴士

- **战斗中右键使用**：仅能在战斗中进行右键操作（非战斗时右键无效）。使用后立即扣除 <span style="color:#3aa675;font-weight:600">6</span> 点生命（不可格挡的自伤），战斗照常进行——扣血当下立刻生效，增益留给下一场。
- **效果在下一场战斗开始兑现**：右键后本场战斗不会有任何增益，第二场战斗开始时一次性获得 2 回合[无实体](/powers/intangible_power.md)（每次受伤降为 1）+ 2 回合[先制](/powers/first_strike_power.md)+1 + 2 回合[必定暴击](/powers/turn_guaranteed_crit_power.md)。三件套同时挂上，前两回合输出环境和生存拉满。
- **三回合固定冷却**：使用后进入 3 场战斗的冷却（遗物上的计数器显示剩余场次），每结束一场战斗冷却 -1。冷却归 0 才能再次右键，实现上以"整场战斗一次"计，不是按回合。
- **性价比**：6 点生命换下一场战斗开局 2 回合的"几乎无敌 + 稳定暴击"，是门前的强力预支——血量健康的门（精英/Boss 前）用最赚；续命类的构筑（无实体防暴毙、必暴配合暴击系遗物）收益更高。
- **配合暴击体系**：2 回合[必定暴击](/powers/turn_guaranteed_crit_power.md)能让[天命之耀](/relics/rare/ophelia.md)这类"暴击触发支援"的效果稳定触发，把幻影蝶的价值从单纯保命提升到输出放大器。

## 源码

- `SeerPhantomButterfly.cs`