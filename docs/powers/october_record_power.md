# 唱片

> **归属**：玩家可施加
> **施加来源**：玩家获得——[十月的唱片](/cards/character/october_record.md)（卡牌）

<img src="/images/powers/october_record_power.png" alt="唱片" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

当你打出的牌与上一张类型不同时，随机<span style="color:#3aa675;font-weight:600">1</span>名敌人获得<span style="color:#3aa675;font-weight:600">1</span>层随机<span style="color:#d44;font-weight:600">异常状态</span>。

## 详细机制

- **只比较「类型」**：攻击 / 技能 / 能力三种类型，不看具体牌名；与上一张类型不同才触发。
- **第一张不触发**：没有上一张可比，第一张牌只记录类型。
- **跨回合继续比较**：上一张类型不会在回合开始时重置，上回合最后一张与这回合第一张也会比较。
- **随机目标 + 随机异常**：从所有可命中敌人里随机 1 名，再从 23 种随机异常池（排除狂暴、星赐、凝滞、超频）里随机 1 种，施加 1 回合。
- **只看自己的牌**：队友打出的牌不参与记录。

## 源码

- `SeerOctoberRecordPower.cs`
