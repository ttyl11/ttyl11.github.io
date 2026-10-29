# 邪灵魔闪光

<img src="/images/cards/evil_spirit_flash.png" alt="邪灵魔闪光" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 第五技能
- **解锁遗物**: [混沌起源](/relics/starter/chaos_origin.md) 1% / [混沌魔君索伦森](/relics/legendary/chaos_demon_lord.md) 10%
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

PP: 5/5 获得<span style="color:#3aa675;font-weight:600">X</span>点<span style="color:#d4a017;font-weight:600">能量</span>。造成敌人<span style="color:#d4a017;font-weight:600">最大生命值</span><span style="color:#3aa675;font-weight:600">1/8</span>的伤害<span style="color:#3aa675;font-weight:600">X</span>次。<span style="color:#d44;font-weight:600">堕落</span>：当前堕层×<span style="color:#3aa675;font-weight:600">X</span>。

## 升级后

<span style="color:#d4a017;font-weight:600">保留</span>。PP: 5/5 获得<span style="color:#3aa675;font-weight:600">X</span>点<span style="color:#d4a017;font-weight:600">能量</span>。造成敌人<span style="color:#d4a017;font-weight:600">最大生命值</span><span style="color:#3aa675;font-weight:600">1/8</span>的伤害<span style="color:#3aa675;font-weight:600">X</span>次。<span style="color:#d44;font-weight:600">堕落</span>：当前堕层×<span style="color:#3aa675;font-weight:600">X</span>。

## 工作机制

- **X费能量回冲**：投入X点能量，手里立刻回X点能量——净能量收支持平，等于"免费的X段伤害"。

- **按最大生命比例伤害**：每段伤害 = 目标最大生命的 1/8，与目标剩余血量无关；对高血量敌人伤害固定且可观，是索伦森体系里少数打在"生命上限"上的输出。单段结果是小数时按整数截断——最大生命不足 8 点的敌人每段会被截断为 0。

- **堕落与堕落层数挂钩**：堕落增加 = **当前堕落层数 × X**。堕落层数越多，这张牌的"堕落账单"越贵——一个把[堕落](/powers/fallen_power.md)当资源消费的卡。注意它只影响账单，**不会提高伤害**。

## 小贴士

- **能量净零的免费爆发**：净花费 0 能量（每次打出另耗 1 PP）= X 段"敌方最大生命/8"的伤害。以敌方 30 血为例，每段 30÷8=3.75、按整数实际打 3 点，X=3 共 9 点伤害；X=0 时无伤害、无能量、无堕落，但仍扣 1 PP。

- **堕落账随层数膨胀**：堕落层数 100 时，X=3 → 增加 300 堕落，总数从 100 跳到 400——会连续跨过 200/300/400，**触发 3 次[魔君接管](/powers/demon_takeover_power.md)**，不是一次。堕落暗账越滚越大，需要结合[混沌起源](/relics/starter/chaos_origin.md)的上限兜底规划打出时机。

- **堕落层数只影响账单，不影响伤害**：每段伤害只看敌方最大生命，与你自己的堕落层数无关。堕落越高，这张牌反而越危险——同样 X 会换来成倍的堕落增长，适合在推倒敌人前的一击决胜中打出。

- **升级纯正向**：附带[保留](/mechanics/retain.md)，可以攒在手里等堕落层数最高或能量充裕时一口气打出，机动性大幅提升。

- **先古版才有实际概率**：[混沌起源](/relics/starter/chaos_origin.md)只有 1%，被原版遗物「欧洛巴斯之触」升级为[混沌魔君索伦森](/relics/legendary/chaos_demon_lord.md)后提升到 10%——先古版才让这张第五技能有实际刷出的机会。

## 相关能力

- [堕落](/powers/fallen_power.md)（增加 = 当前堕落层数 × X）

## 相关机制

- [PP系统](/mechanics/pp-system.md)（PP 消耗）
- [能量](/mechanics/energy.md)（获得X能量）
- [保留](/mechanics/retain.md)（升级后获得，手牌跨回合保留）

## 源码

- `SeerEvilSpiritFlash.cs`
