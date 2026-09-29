# 黑暗之门

> **归属**：玩家
> **施加来源**：[黑暗之门](/cards/character/dark_gate.md)（能力牌）打出时

<img src="/images/powers/dark_gate_power.png" alt="黑暗之门" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 无类型（不参与增益/减益分类，不可被驱散/净化）
- **叠加方式**: 单例（不可叠加）
- **可见**: 否（隐身，不显示能力图标）

## 描述

本场战斗内每有 <span style="color:#3aa675;font-weight:600">100</span> 层[堕落](/powers/fallen_power.md)，[最大能量](/mechanics/energy.md)+<span style="color:#3aa675;font-weight:600">1</span>。

## 详细机制

- **一次性判定**：[黑暗之门](/cards/character/dark_gate.md)打出时按**当时的堕落层数** ÷ <span style="color:#3aa675;font-weight:600">100</span> 向下取整，作为本能力层数施加（如打出时 300 层 → 层数 3，最大能量 +3）。打出后堕落继续增长**不会追加**层数。
- **仅本场战斗生效**：能力随战斗结束移除，最大能量加成自动还原，跨战斗不继承、不累计。
- **隐身**：能力图标不显示，玩家通过最大能量上限变化感知加成。

## 相关能力

- [堕落](/powers/fallen_power.md)（加成来源）

## 相关机制

- [能量](/mechanics/energy.md)（最大能量成长）

## 源码

- `SeerDarkGatePower.cs`