# 火苗

> **归属**：玩家可施加
> **施加来源**：玩家获得——[火种](/powers/spark_power.md)（能力联动）

<img src="/images/powers/flame_power.png" alt="火苗" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 叠加
- **可见**: 是

## 描述

①自身回合开始时，每个<span style="color:#d4a017;font-weight:600">火苗</span>有<span style="color:#3aa675;font-weight:600">10%</span>概率转化为<span style="color:#d4a017;font-weight:600">烈焰</span>；未转化的<span style="color:#d4a017;font-weight:600">火苗</span>消失（持有<span style="color:#d4a017;font-weight:600">焚世涅槃</span>时保留）。<br/>②每转化<span style="color:#3aa675;font-weight:600">1</span>个，随机选择<span style="color:#3aa675;font-weight:600">1</span>种<span style="color:#d44;font-weight:600">异常状态</span>；所有敌人获得等同于转化数量的层数。

## 详细机制

- **触发时点**：自己的回合**开始时**（不是回合结束）。
- **逐层独立判定**：每 1 层火苗各自掷 10%，转化数按二项分布；不是整堆一次判定。
- **未转化的去向**：普通情况下全部消失；持有[焚世涅槃](/powers/burning_nirvana_power.md)时只移除已转化的部分，其余保留到下回合继续转化。
- **转化产物**：每转化 1 层，自身获得 1 层[烈焰](/powers/blaze_power.md)。
- **异常状态**：从 23 种随机池（排除狂暴、星赐、凝滞、超频）中为每层转化各抽 1 种（可重复）；对**每个对手**施加，每种各 `转化数` 层。

## 源码

- `SeerFlamePower.cs`
