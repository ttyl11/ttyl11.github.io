# 防御史莱姆

<img src="/images/cards/slime_defense.png" alt="防御史莱姆" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

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
| 防御数值 | 1 |

## 描述

获得<span style="color:#3aa675;font-weight:600">1</span>点[<span style="color:#d4a017;font-weight:600">防御</span>](/powers/defense_power.md)。

## 升级后

获得<span style="color:#3aa675;font-weight:600">2</span>点[<span style="color:#d4a017;font-weight:600">防御</span>](/powers/defense_power.md)。

## 小贴士

- **🔑 无限升级的防御蓄水池**：裸卡只有 <span style="color:#3aa675;font-weight:600">1</span> 点防御，但**每级 +<span style="color:#3aa675;font-weight:600">1</span> 且没有上限**——休息锻打、升级事件、升级遗物的资源都可以反复灌进这一张：升 8 次 = 1 费拿 9 防御。卡面会显示"+N"。
- **[防御](/powers/defense_power.md)是累积的攻击减伤**：每层让你受到的**攻击伤害**少损失 1 点生命（在[格挡](/mechanics/block.md)抵扣之后结算），层数不随回合清空；对[固定伤害](/mechanics/fixed-damage.md)与 DoT 无效。
- **与[好男孩](/cards/colorless/good_boy.md)同体系**：两者都吃"防御"这一成长轴——防御史莱姆一次性大额注入，好男孩每回合持续注入（代价是力量 -1），长战斗里防御层数能滚到两位数。
- **每张副本每场只能打一次**：能力牌打出后离场，这张牌也没有 PP 消耗——单张副本一局只能打一次，多带几张才能在一场里重复叠加。
- **裸拿性价比低、升级价值线性**：1 费 1 防御起步寒酸，每级 +1 也是平缓成长——适合"升级资源富裕 + 敌人以攻击输出为主"的局；固定伤害/DoT 压力大的对局里防御不生效，优先级下调。
- **进化：胜利后自动升级，多张同名互相催化**：[进化](/mechanics/evolve.md)在战斗**胜利**后触发，牌组中**每有 1 张**带进化的牌就执行一次升级——持有 N 张防御史莱姆时，每张各升 N 级。不用打出，只要在牌组里就生效。

## 相关机制

- [防御](/powers/defense_power.md)（每层受攻击伤害掉血 -1）
- [进化](/mechanics/evolve.md)（战斗胜利后，牌组中的进化牌自动升级）

## 源码

- `SeerSlimeDefense.cs`
