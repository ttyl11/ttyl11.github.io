# 圣灵悲魂

> **归属**：玩家可施加
> **施加来源**：玩家获得——卡牌[圣灵悲魂曲](/cards/ancient/holy_requiem.md)；卡牌[一月的雪鹄](/cards/character/january_snow_owl.md)（[迁鸣](/mechanics/qianming.md)触发时 +1 层）

<img src="/images/powers/hand_size_up_power.png" alt="圣灵悲魂" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 计数器（按层数叠加）
- **可见**: 是

## 描述

自身回合开始时，<span style="color:#d4a017;font-weight:600">手牌上限</span>+<span style="color:#3aa675;font-weight:600">1</span>，获得<span style="color:#3aa675;font-weight:600">1</span>层<span style="color:#d4a017;font-weight:600">缓冲</span>。

## 详细机制

- **累积成长**：层数就是「已累计 +1 的次数」，初始 1 不计入；实际手牌上限 = 原上限 + 层数 − 1。
- **触发在抽牌前**：结算时点在自己的回合开始、抽牌之前，所以当回合的抽牌就能吃到这次 +1。
- **每回合附带缓冲**：每次触发额外获得 1 层原版「缓冲」。
- **本场战斗有效**：战斗结束随能力移除还原。

## 源码

- `SeerHandSizeUpPower.cs`
