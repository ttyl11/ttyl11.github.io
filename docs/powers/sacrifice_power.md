# 血契

> **归属**：玩家可施加
> **施加来源**：玩家获得——[🩸 血契](/potions/sacrifice_potion.md)（药水）

### 数值参数

| 参数 | 数值 |
|---|---|
| SummonCount | 等同当前层数 |

<img src="/images/powers/sacrifice_power.png" alt="血契" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 叠加
- **可见**: 是

## 描述

在你的回合开始时，<span style="color:#d4a017;font-weight:600">召唤</span><span style="color:#3aa675;font-weight:600">1</span>只<span style="color:#d4a017;font-weight:600">奥斯提</span>。

## 详细机制

- **描述与实现的差异**：游戏内描述写「召唤层数只奥斯提」，实际是**召唤 1 只、其生命值等于当前层数**——奥斯提只能同时存在 1 只。
- **已有奥斯提则加血**：奥斯提还活着时不会新增，而是给它增加等同层数的最大生命。
- **层数不消耗**：每次回合开始都按当前层数重新召唤/加血，能力本身不减少。
- **只给持有者**：召唤物归属持有者，队友/敌人不受影响。

## 源码

- `SeerSacrificePower.cs`
