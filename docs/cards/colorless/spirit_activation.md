# 元神启动

<img src="/images/cards/spirit_activation.png" alt="元神启动" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 无色牌
- **能量消耗**: 1
- **类型**: 能力
- **稀有度**: 罕见
- **目标**: 自身
- **关键词**: [虚无](/mechanics/ethereal.md)
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 每回合引导神谕球 | 2 | 2 |

## 描述

每回合开始时，<span style="color:#d4a017;font-weight:600">生成</span>两个[<span style="color:#d4a017;font-weight:600">神谕充能球</span>](/orbs/oracle_orb.md)。

## 升级后

每回合开始时，<span style="color:#d4a017;font-weight:600">生成</span>两个<span style="color:#d4a017;font-weight:600">神谕充能球</span>。

## 小贴士

- **🔑 永续属性泵**：每个玩家回合开始时，先引导 <span style="color:#3aa675;font-weight:600">2</span> 个[神谕充能球](/orbs/oracle_orb.md)；随后场上**所有**神谕球各触发一次被动，各 +<span style="color:#3aa675;font-weight:600">1</span> 点随机属性（[力量](/powers/strength_power.md)/[防御](/powers/defense_power.md)/[命中](/powers/accuracy_power.md)/[速度](/powers/speed_power.md)四选一）。新引导的两颗**当回合也会触发**，所以保底 +2 属性；球位越多、场上神谕越多，每回合属性点越多（装满 N 个球位 = 每回合 N 点）。
- **多张叠加**：能力层数累加，每多 1 张元神启动，每回合就多引导 2 个球（2 张 = 4 个/回合）。能力牌打出后离场，同一副本每场只能打一次，多带几张才能各打一次。
- **满栏时先激发队首球**：球位占满后，每次引导前会先[激发](/mechanics/evoke.md)队首那颗球腾位——**不一定是神谕球**，队首是别的球就触发那颗球的激发。神谕的激发 = 手牌中一张**未附魔**的牌随机获得一个 mod 附魔（注能/永耀/冷却时间不在随机池内）；手牌全附魔或为空时激发无效果。
- **附魔是长线复利**：被激发的牌整场保持强化，等于每回合开一条免费附魔流水线；栏位越多、循环越快。
- **[虚无](/mechanics/ethereal.md)的节奏压力**：抽到它的回合若不打，回合结束直接[消耗](/mechanics/exhaust.md)。它只是 1 费能力，抽到即挂基本无压力。
- **升级只去虚无**：升级不改变球数、也不增强被动——收益全在"可以留到下回合再打"的节奏自由，产量不变。
- **神谕球不吃[集中](/powers/focus_power.md)**：被动固定 +1、激发固定 1 个附魔，集中流拿它没有额外加成，强度全在"每回合稳定触发"本身。
- **性价比**：1 费换每回合保底 +2 随机属性，栏位铺满后还会滚出成倍属性与附魔，是少数越早挂越赚的长线能力；唯一代价是升级前的虚无节奏压力。

## 相关机制

- [充能球](/mechanics/orb.md)（每回合引导神谕球）
- [虚无](/mechanics/ethereal.md)（升级前：不打即消耗）

## 源码

- `SeerSpiritActivation.cs`
- `SeerSpiritActivationPower.cs`
