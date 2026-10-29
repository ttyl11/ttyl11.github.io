# 战意

> **归属**：玩家可施加（当前版本未使用）
> **施加来源**：无

<img src="/images/powers/fighting_spirit_power.png" alt="战意" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 叠加
- **可见**: 是

## 说明

当前版本没有卡牌、遗物或怪物施加此能力（源码保留）。以下为该能力自身的效果。

## 描述

每层减少<span style="color:#3aa675;font-weight:600">5</span>%<span style="color:#d4a017;font-weight:600">固定伤害</span>、增加<span style="color:#3aa675;font-weight:600">5</span>%攻击伤害，最高20层。

## 详细机制

- **攻击增伤**：自身造成的**攻击伤害**每层 +5%，有效层数封顶 20（最高 +100%）。
- **固定伤害减免**：自身受到**来自他人**的固定伤害（同时带「不可格挡 + 无加成」标记的伤害）每层 -5%，同样按 20 层封顶；自己给自己施加的固定伤害不减免。
- **层数可超过 20**：超出的层数仍会显示，但增伤/减伤只按 20 层计算。

## 源码

- `SeerFightingSpiritPower.cs`
