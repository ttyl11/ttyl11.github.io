# 攻击史莱姆

<img src="/images/cards/slime_attack.png" alt="攻击史莱姆" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 无色牌
- **能量消耗**: 1
- **类型**: 能力
- **稀有度**: 普通
- **目标**: 自身
- **关键词**: [进化](/mechanics/evolve.md)
- **可升级**: 是（无限级，可重复升级）

### 数值参数

| 参数 | 数值 |
|---|---|
| 力量数值 | 1 |

## 描述

获得<span style="color:#3aa675;font-weight:600">1</span>点[<span style="color:#d4a017;font-weight:600">力量</span>](/powers/strength_power.md)。

## 升级后

获得<span style="color:#3aa675;font-weight:600">2</span>点[<span style="color:#d4a017;font-weight:600">力量</span>](/powers/strength_power.md)。

## 小贴士

- **🔑 无限升级的力量蓄水池**：裸卡只有 <span style="color:#3aa675;font-weight:600">1</span> 点力量，但**每级 +<span style="color:#3aa675;font-weight:600">1</span> 且没有上限**——休息锻打、升级事件、升级遗物的资源都可以反复灌进这一张：升 5 次 = 1 费拿 6 力量，升 10 次 = 1 费拿 11 力量。卡面会显示"+N"。
- **升级资源的最优容器**：普通卡升 1 次就到顶，溢出的升级机会只能浪费；它来者不拒，每次升级都是永久净赚。
- **[力量](/powers/strength_power.md)只加成攻击伤害**：每层让每次攻击 +1——多段攻击、群体攻击与低费连打构筑收益最高；[固定伤害](/mechanics/fixed-damage.md)与 DoT 不吃力量。
- **每张副本每场只能打一次**：能力牌打出后离场，这张牌也没有 PP 消耗——单张副本一局只能打一次，但多带几张就能在一场战斗里各打一次、把力量叠起来。
- **裸拿性价比很低**：1 费 1 力量不如直接打输出牌，它的价值完全依赖升级资源投入；没有升级来源的局里只是填充牌。
- **进化：胜利后自动升级，多张同名互相催化**：[进化](/mechanics/evolve.md)在战斗**胜利**后触发，牌组中**每有 1 张**带进化的牌就执行一次升级——持有 N 张攻击史莱姆时，每张各升 N 级。不用打出，只要在牌组里就生效。

## 相关机制

- [力量](/powers/strength_power.md)（每层攻击伤害 +1）
- [进化](/mechanics/evolve.md)（战斗胜利后，牌组中的进化牌自动升级）

## 源码

- `SeerSlimeAttack.cs`
