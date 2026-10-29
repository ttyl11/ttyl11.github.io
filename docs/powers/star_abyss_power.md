# 独步星渊

> **归属**：怪物专属（[不羁·弗里德](/monsters/boss/bujifulide_monster.md)）
> **类型**：中性（None，不可被消除）
> **叠加方式**：按层数叠加
> **可见**：是

<img src="/images/powers/star_abyss_power.png" alt="独步星渊" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 描述

①敌方回合开始时，本回合内前<span style="color:#3aa675;font-weight:600">0</span>张打出的牌无效。<br/>数量 = 敌方先制 - 自身先制（最低<span style="color:#3aa675;font-weight:600">0</span>）。<br/>②敌方所有牌堆中每存在<span style="color:#3aa675;font-weight:600">1</span>张<span style="color:#d4a017;font-weight:600">状态牌</span>，自身受到的攻击伤害降低<span style="color:#3aa675;font-weight:600">5%</span>，造成的攻击伤害提高<span style="color:#3aa675;font-weight:600">15%</span>（当前减伤<span style="color:#3aa675;font-weight:600">0%</span>，增伤<span style="color:#3aa675;font-weight:600">0%</span>）。<br/>③敌人每次获得<span style="color:#d4a017;font-weight:600">辉星</span>时，自身先制<span style="color:#3aa675;font-weight:600">-1</span>，并对该敌人造成<span style="color:#3aa675;font-weight:600">10</span>点<span style="color:#d4a017;font-weight:600">固定伤害</span>。

## 详细机制

- **先制差封牌**：这个差值同时受双方先制影响，你堆先制也在放大封牌数量。
- **状态牌喂养**：你的状态牌会同时给它减伤与增伤，牌堆越脏它越强。
- **辉星反噬**：每次获得辉星都会触发固定伤害，并把它的先制再拉低。

## 相关能力

- [先制](/powers/first_strike_power.md)、[辉星](/mechanics/star)

## 源码

- `SeerStarAbyssPower.cs`
