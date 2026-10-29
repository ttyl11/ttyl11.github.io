# 渺小

> **归属**：怪物施加给玩家
> **施加来源**：怪物施加给玩家——[萨克森](/monsters/normal/sakesen_monster.md)

<img src="/images/powers/tiny_power.png" alt="渺小" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff）
- **叠加方式**: 计数器（按层数叠加）
- **可见**: 是

## 描述

①打出卡牌时，手牌中每张<span style="color:#d4a017;font-weight:600">渺小</span>牌造成<span style="color:#3aa675;font-weight:600">2</span>点伤害。<br/>手牌中没有<span style="color:#d4a017;font-weight:600">渺小</span>时移除此能力。

## 详细机制

- **每次出牌结算一次**：自己打出一张牌后，统计手牌中所有「渺小」牌的面板伤害之和，对自己造成等量固定伤害。
- **伤害打自己**：这是固定伤害、不可格挡，也不吃增伤/减伤。
- **手牌决定数值**：手里渺小牌越多，每次出牌掉得越多——尽快打掉/弃掉它们。
- **没有渺小牌就移除**：手牌中一张渺小都没有时，能力自动消失。
- **重放不重复**：同一张牌多次重放只在最后一次结算一次。

## 源码

- `SeerTinyPower.cs`
