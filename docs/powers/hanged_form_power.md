# 缢形


> **归属**：玩家可施加
> **施加来源**：玩家获得——关键词系统

<img src="/images/powers/hanged_form_power.png" alt="缢形" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff）
- **叠加方式**: 计数（层数不改变效果）
- **可见**: 是

## 描述

本回合内不可以再获得任何<span style="color:#d4a017;font-weight:600">增益</span>。

## 详细机制

- **拦截范围**：任何 **增益（Buff）类型、正层数** 的施加都会被改为 0——包括自己给自己、队友给的增益。
- **不影响**：减益、异常状态、属性下降等照常施加。
- **移除时点**：持有者自己的回合结束时移除；因此效果覆盖到该回合结束。

## 源码

- `SeerHangedFormPower.cs`
