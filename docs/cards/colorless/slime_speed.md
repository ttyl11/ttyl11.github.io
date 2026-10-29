# 速度史莱姆

<img src="/images/cards/slime_speed.png" alt="速度史莱姆" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

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
| 速度数值 | 1 |

## 描述

获得<span style="color:#3aa675;font-weight:600">1</span>点[<span style="color:#d4a017;font-weight:600">速度</span>](/powers/speed_power.md)。

## 升级后

获得<span style="color:#3aa675;font-weight:600">2</span>点[<span style="color:#d4a017;font-weight:600">速度</span>](/powers/speed_power.md)。

## 小贴士

- **🔑 无限升级的抽牌引擎**：[速度](/powers/speed_power.md)每层让你的回合开始多抽 1 张、随后**必须**弃掉层数的一半（向下取整）——每级 +<span style="color:#3aa675;font-weight:600">1</span> 层且没有上限。
- **净收益 = 每 2 层 +1 手牌**：2 层净 +1、4 层净 +2，奇数层少弃半张（3 层净 +2），没有"必须凑偶数"的压力。
- **收益会被手牌上限压平**：多抽会被手牌上限截断（默认上限 <span style="color:#3aa675;font-weight:600">10</span>，起手 5 张时最多抽到 10 张），弃牌则**不超过当前手牌上限的一半**（默认最多弃 <span style="color:#3aa675;font-weight:600">5</span> 张）。所以 5 层以内是线性收益，再往上只加弃牌、不加到手牌——堆太高反而稀释。
- **每张副本每场只能打一次**：能力牌打出后离场，这张牌也没有 PP 消耗——单张副本一局只能打一次；速度持续整场，叠得越高每回合的抽牌收益越大。
- **泛用性最高的史莱姆**：同为无限升级容器，速度的回报（抽牌）适配一切构筑，不像攻击/防御史莱姆挑输出类型。
- **进化：胜利后自动升级，多张同名互相催化**：[进化](/mechanics/evolve.md)在战斗**胜利**后触发，牌组中**每有 1 张**带进化的牌就执行一次升级——持有 N 张速度史莱姆时，每张各升 N 级。不用打出，只要在牌组里就生效。

## 相关机制

- [速度](/powers/speed_power.md)（每层回合开始多抽 1 张，并须弃掉层数的一半）
- [进化](/mechanics/evolve.md)（战斗胜利后，牌组中的进化牌自动升级）

## 源码

- `SeerSlimeSpeed.cs`
- `SeerSpeedEffectsDriver.cs`
