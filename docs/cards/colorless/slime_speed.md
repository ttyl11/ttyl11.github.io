# 速度史莱姆

<img src="/images/cards/slime_speed.png" alt="速度史莱姆" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 无色牌
- **能量消耗**: 1
- **类型**: 能力
- **稀有度**: 普通
- **目标**: 自身
- **可升级**: 是（无限级，可重复升级）
- **关键词**: [进化](/mechanics/evolve.md)

### 数值参数

| 参数 | 数值 |
|---|---|
| 速度数值 | 1 |

## 描述

获得<span style="color:#3aa675;font-weight:600">1</span>点[<span style="color:#d4a017;font-weight:600">速度</span>](/powers/speed_power.md)。

## 升级后

获得<span style="color:#3aa675;font-weight:600">2</span>点[<span style="color:#d4a017;font-weight:600">速度</span>](/powers/speed_power.md)。

## 小贴士

- **🔑 无限升级的抽牌引擎**：[速度](/powers/speed_power.md)的效果是**每层 = 回合开始多抽 1 张、须弃掉半数**——**可无限次升级、每级 +<span style="color:#3aa675;font-weight:600">1</span> 层**：升 3 次 = 4 层 = 每回合 +4 抽（弃 2），升 7 次 = 8 层 = 每回合 +8 抽（弃 4），**每回合永久多抽的速度没有上限**。
- **速度是最被低估的成长轴**：力量/防御是数值型收益，速度是**资源型收益**——多抽 = 更多选择、更多联动、更快凑齐 combo；4 层速度 = 每回合多抽 4 张、弃 2 张（净 +2 手牌），长战斗累计价值极高。
- **净收益 = 每 2 层 +1 手牌**：多抽数 = 层数、弃牌数 = 层数 ÷ 2 向下取整——2 层净 +1、4 层净 +2，奇数层还会少弃半张，没有"必须凑偶数"的压力。
- **PP 1 = 每场只能打出一次**：单场限打 1 次（[PP](/mechanics/pp-system.md) 机制），能力离场后速度永久保留整场——升得越高，单次打出的每回合抽牌收益越大。
- **升级资源充足时的首选史莱姆**：同为无限升级容器，速度史莱姆的回报（抽牌）适配一切构筑，不像攻击/防御史莱姆挑输出类型——泛用性最高的一张。
- **进化：每场胜利自动再升一级**：[进化](/mechanics/evolve.md)让战斗**胜利结束后牌组中所有速度史莱姆各自动升级一次**——配合无限升级和偶数层阈值，连胜几场后速度自动滚到 +抽档位，是最省心的"赢就变强"抽牌引擎。

## 相关机制

- [PP](/mechanics/pp-system.md)（PP 1：单场限打一次）
- [速度](/powers/speed_power.md)（每层每回合多抽 1 张牌并须弃掉半数）
- [进化](/mechanics/evolve.md)（战斗结束后，此牌自动升级一次）

## 源码

- `SeerSlimeSpeed.cs`
