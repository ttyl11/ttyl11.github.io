# 源光淬体

> **归属**：玩家可施加
> **施加来源**：玩家获得——[无始源光](/cards/character/primordial_light.md)（卡牌）

<img src="/images/powers/primordial_light_buff_power.png" alt="无始源光·增益" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 叠加
- **可见**: 是

## 描述

自身回合开始时，<span style="color:#d4a017;font-weight:600">力量</span>与<span style="color:#d4a017;font-weight:600">速度</span>各+<span style="color:#3aa675;font-weight:600">1</span>，然后层数-<span style="color:#3aa675;font-weight:600">1</span>。

## 详细机制

- **每层换 1 回合成长**：自己回合开始时，力量与速度各 +1，然后层数 −1。
- **层数＝持续回合**：3 层就是接下来 3 个自己的回合各 +1 力量/速度。
- **力量是永久保留**：加出来的力量不会随能力消失，越早获得收益越高。
- **速度同步成长**：速度影响移动/出手节奏，与力量一起每回合各 +1。

## 源码

- `SeerPrimordialLightBuffPower.cs`
