# 狩·无限连爪

<img src="/images/cards/infinite_claw.png" alt="狩·无限连爪" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 第五技能
- **最大PP**: 5
- **能量消耗**: X
- **类型**: 攻击
- **稀有度**: 稀有
- **目标**: 随机敌方
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 每点能量命中数 | 6 | 8 |
| 单次伤害 | 1 | 1 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: 5/5 随机对敌人造成1点伤害X次。

## 升级后

PP: 5/5 随机对敌人造成1点伤害2X次。

## 小贴士

- **X 费机制**：此牌为 X 费卡牌，打出时消耗所有[能量](/mechanics/energy.md)，X 等于消耗的能量数。X 越高命中次数越多。
- **多段随机伤害**：总命中次数 = X × 每点能量命中数（<span style="color:#3aa675;font-weight:600">6</span>），每次命中 <span style="color:#3aa675;font-weight:600">1</span> 点攻击伤害，随机分配给敌人。X=2 时 12 次命中（白板合计 12 伤），X=3 时 18 次命中（白板合计 18 伤）——单次基数极低，伤害几乎全靠增伤件撑起来。
- **配合力量加成**：每次命中是独立攻击伤害，[力量](/powers/strength_power.md)每层让每次命中 +1 伤。X=2 配 3 层力量 = 12×(1+3) = 48 伤，多段卡牌配合力量收益翻倍；[易伤](/powers/vulnerable_power.md)同理对每次命中独立乘算，多段是放大百分比增伤的最佳载体。
- **多段怕格挡**：每次命中只有 <span style="color:#3aa675;font-weight:600">1</span> 点攻击伤害，敌人格挡按每次命中独立抵扣——<span style="color:#3aa675;font-weight:600">15</span> 点格挡就能吞掉 <span style="color:#3aa675;font-weight:600">15</span> 次命中。必须先破盾或削格挡，否则这张牌几乎打不出伤害。
- **升级提升命中数**：每点能量命中数 <span style="color:#3aa675;font-weight:600">6</span> → <span style="color:#3aa675;font-weight:600">8</span>，单次伤害不变。X=2 时 12 → 16 次命中（白板 12 → 16 伤），X=3 时 18 → 24 次，能量越多升级收益越大。

## 相关机制

- [能量](/mechanics/energy.md)（X 费消耗所有能量）
- [力量](/powers/strength_power.md)（每次命中 +1 攻击伤害）
- [易伤](/powers/vulnerable_power.md)（每次命中独立乘算增伤）

## 源码

- `SeerInfiniteClaw.cs`
