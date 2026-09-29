# 邪灵魔闪光

<img src="/images/cards/evil_spirit_flash.png" alt="邪灵魔闪光" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌

- **最大PP**: 5

- **能量消耗**: X

- **类型**: 攻击

- **稀有度**: 稀有

- **目标**: 单个敌方

- **可升级**: 是（1 级）

- **关键词**: 无

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害 | 敌方最大生命值 1/8 | 敌方最大生命值 1/8 |
| 次数 | X | X |
| 获得能量 | X | X |
| 堕落增加 | 当前堕落层数 × X | 当前堕落层数 × X |
| PP | 5 | 5 |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 获得<span style="color:#3aa675;font-weight:600">X</span>点[能量](/mechanics/energy.md)。造成敌方最大生命值的<span style="color:#d44;font-weight:600">1/8</span>伤害<span style="color:#3aa675;font-weight:600">X</span>次。[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)：当前堕落层数×<span style="color:#3aa675;font-weight:600">X</span>。

## 升级后

[保留](/mechanics/retain.md)。[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 获得<span style="color:#3aa675;font-weight:600">X</span>点[能量](/mechanics/energy.md)。造成敌方最大生命值的<span style="color:#d44;font-weight:600">1/8</span>伤害<span style="color:#3aa675;font-weight:600">X</span>次。[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)：当前堕落层数×<span style="color:#3aa675;font-weight:600">X</span>。

## 工作机制

- **X费能量回冲**：投入X点能量，手里立刻回X点能量——净能量收支持平，等于"免费的X段伤害"。

- **按最大生命比例伤害**：每段伤害 = 目标最大生命的 1/8，与目标剩余血量无关；对高血量敌人伤害固定且可观，是索伦森体系里少数打在"生命上限"上的输出。

- **堕落与堕落层数挂钩**：堕落增加 = **当前堕落层数 × X**。堕落层数越多，这张牌的"堕落账单"越贵——一个把[堕落](/powers/fallen_power.md)当资源消费的卡。

## 小贴士

- **能量净零的免费爆发**：净花费0费 = X段"敌方最大生命/8"的伤害。以敌方30血为例，每段约4点，X=3 共约12点伤害，且不净耗能量。

- **堕落账随层数膨胀**：堕落层数 100 时，X=3 → 增加300 堕落，直接冲向下一次[魔君接管](/powers/demon_takeover_power.md)阈值；堕落暗账越滚越大，需要结合[混沌起源](/relics/starter/chaos_origin.md)的上限兜底规划打出时机。

- **与高堕落层数对冲**：堕落层数越高，X费的每段伤害倍率越高——但代价也是按同样比例增加的堕落。这是一把"刃口向内"的双刃剑，适合在推倒敌人前的一击决胜中打出。

- **升级纯正向**：附带[保留](/mechanics/retain.md)，可以攒在手里等堕落层数最高或能量充裕时一口气打出，机动性大幅提升。

## 相关能力

- [堕落](/powers/fallen_power.md)（增加 = 当前堕落层数 × X）

## 相关机制

- [PP系统](/mechanics/pp-system.md)（PP 消耗）
- [能量](/mechanics/energy.md)（获得X能量）
- [保留](/mechanics/retain.md)（升级后获得，手牌跨回合保留）

## 源码

- `SeerEvilSpiritFlash.cs`