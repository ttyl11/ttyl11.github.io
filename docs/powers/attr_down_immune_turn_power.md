# 免弱

> **归属**：玩家可施加
> **施加来源**：玩家获得——[十玄释](/cards/character/shi_xuan_shi.md)（卡牌）、[启灵元神](/relics/legendary/enlightened_spirit_god.md)（遗物）、[至序圣华](/relics/legendary/order_holy_hua.md)（遗物）、[弑序神罗](/relics/legendary/order_killing_god_luo.md)（遗物）

<img src="/images/powers/attr_down_immune_turn_power.png" alt="属性下降免疫" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 计数器（按层数叠加）
- **可见**: 是

## 描述

①获得<span style="color:#3aa675;font-weight:600">层数</span>回合<span style="color:#d4a017;font-weight:600">免弱</span>：免疫<span style="color:#d4a017;font-weight:600">力量</span>、<span style="color:#d4a017;font-weight:600">防御</span>、<span style="color:#d4a017;font-weight:600">命中</span>、<span style="color:#d4a017;font-weight:600">速度</span>的下降。<br/>在对方回合结束时减少<span style="color:#3aa675;font-weight:600">1</span>层。

## 详细机制

- **N 层 = 覆盖 N 个对方回合**：免疫窗口针对敌方施加属性下降的时机，所以递减挂在对方回合结束，不是自己回合结束。
- **只拦四维下降**：力量、防御、命中、速度的负向变化会被改成 0；其他属性或减益不受保护。
- **层数耗尽即失效**：减到 0 后不再拦截。

## 源码

- `SeerAttrDownImmuneTurnPower.cs`
