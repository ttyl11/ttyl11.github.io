# 圣铸

> **归属**：玩家可施加
> **施加来源**：玩家获得——[至序圣华](/relics/legendary/order_holy_hua.md)（遗物）

<img src="/images/powers/holy_forge_counter_power.png" alt="圣铸" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 否（后台静默运行，不显示图标）

## 描述

①每消耗<span style="color:#3aa675;font-weight:600">1</span>点能量，铸造<span style="color:#3aa675;font-weight:600">1</span>点。<br/>②累计铸造达到<span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">30</span>/<span style="color:#3aa675;font-weight:600">100</span>时，分别将<span style="color:#d4a017;font-weight:600">圣剑一/二/三</span>加入手牌（每场战斗各一次）。<br/>③打出<span style="color:#d4a017;font-weight:600">君王之剑</span>后，<span style="color:#d4a017;font-weight:600">先制</span>+<span style="color:#3aa675;font-weight:600">1</span>。

## 详细机制

- **铸造来源**：不只是消耗能量——所有「铸造」事件都计入累计（遗物、能力、药水、复活清空 PP 等）。
- **阈值奖励**：累计达到 10 / 30 / 100 时，分别把圣剑一 / 二 / 三加入手牌；每个阈值每场战斗只发一次。
- **君王之剑**：打出原版「君王之剑」后，自身获得 1 层先制。
- 隐藏能力，不显示图标。

## 源码

- `SeerHolyForgeCounterPower.cs`
