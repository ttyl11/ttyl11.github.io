# 混乱

> **归属**：异常状态

<img src="/images/powers/confusion_power.png" alt="混乱" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff）
- **叠加方式**: 叠加（层数 = 剩余触发回合）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 回合开始伤害 | 5 |
| 命中下降 | -1 |
| 身位 | 异常状态之一（第 25 种） |

## 描述

自身回合开始时受到<span style="color:#3aa675;font-weight:600">5</span>点伤害，<span style="color:#d4a017;font-weight:600">命中</span>-<span style="color:#3aa675;font-weight:600">1</span>。<br/>然后<span style="color:#d44;font-weight:600">混乱</span>层数-<span style="color:#3aa675;font-weight:600">1</span>。

## 详细机制

- **回合开始结算**：层数代表剩余触发回合。每到自己回合开始：先受 5 点伤害（非攻击 DoT）→ 命中 -1（即你的攻击会让受击目标闪避率 +5%）→ 层数 -1。
- **正常衰减**：结算后层数 -1，减到 0 移除；期间若再次受到混乱则叠加层数、延长持续时间。
- **异常状态身份**：是 Seer Mod 的[异常状态](/mechanics/abnormal-status.md)之一（异常免疫类能力可免疫其施加）。

## 施加来源

- [万里春·北鸟](/relics/epic/wan_li_chun_bei_niao.md)：战斗开始敌我各 2 层；首个非混乱异常转化为 3 层混乱；有记录时攻击牌令敌人进入记录异常（不可能是混乱）；[万里春啼](/powers/wan_li_chun_ti_power.md)转嫁随机异常时可能挂混乱。
- 其它随机异常来源（[随机异常关键词](/mechanics/sui_ji_yi_chang.md)、[诅咒药水](/potions/chaos_potion.md)、[万里春啼](/powers/wan_li_chun_ti_power.md)转嫁等）。

## 小贴士

- **双面性**：既扣血又削命中，但敌方回合开始才结算——给敌人挂混乱等于白嫖一轮减伤；给自己挂则要承担每回合 5 伤。
- **命中 -1 让攻击更容易被闪避**：负命中每层让受击目标闪避率 +5%，层数叠高会让自己的输出越来越不稳定，而非防御手段。

## 源码

- `SeerConfusionPower.cs`