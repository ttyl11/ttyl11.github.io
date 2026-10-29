# 危机感

<img src="/images/powers/sense_of_crisis_power.png" alt="危机感" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **归属**：玩家能力
- **类型**：增益
- **叠加**：计数型
- **施加来源**：[琉梦](/relics/epic/liu_meng.md)（战斗开始时施加）
- **可见**: 是

## 描述

获得时层数至少为 <span style="color:#3aa675;font-weight:600">1 + 当前存活敌人数</span>；作为[希望之花](/powers/flower_of_hope_power.md)的成长系数。

## 详细机制

- 只在**获得时**结算一次：把层数提高到「1 + 当前存活敌人数」，如果已有层数更高则不降低。
- 它本身不会随敌人死亡或新增自动变化；后续要再提高只能重新获得。
- 没有直接的战斗效果，唯一作用是给希望之花提供每回合增长量（每层 +15）。
- 层数不会被负数抵消。

## 源码

- `SeerSenseOfCrisisPower.cs`
- `SeerLiuMeng.cs`（琉梦）
- `SeerFlowerOfHopePower.cs`（希望之花）
