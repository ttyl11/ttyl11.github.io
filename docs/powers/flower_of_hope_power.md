# 希望之花

<img src="/images/powers/flower_of_hope_power.png" alt="希望之花" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **归属**：玩家能力
- **类型**：增益
- **叠加**：计数型（可增长到 <span style="color:#3aa675;font-weight:600">100</span> 层）
- **施加来源**：[琉梦](/relics/epic/liu_meng.md)（战斗开始时获得 1 层，同时按敌人数施加危机感）
- **可见**: 是

## 描述

①此能力获得时自动为1层。<br/>②在你的回合结束时+<span style="color:#3aa675;font-weight:600">15</span>×<span style="color:#9b59b6;font-weight:600">危机感</span>层数。<br/>③在你的回合开始时若≥<span style="color:#3aa675;font-weight:600">100</span>层，移除<span style="color:#9b59b6;font-weight:600">希望之花</span>，生成<span style="color:#9b59b6;font-weight:600">希望</span>。

## 详细机制

- 施加时固定为 1 层（琉梦按 1 层施加）。
- 增长只看**危机感当前层数**：危机感越高，每回合长得越快；危机感为 0 时当回合不增长。
- 判定顺序是「回合结束先增长 → 下回合开始再检查」，所以刚跨过 100 层的那一回合不会立刻转化，要等到下一次自己回合开始。
- 转化时移除整个希望之花，并施加 1 层希望；希望之花本身没有其他效果。
- 琉梦在战斗开始时按存活敌人数施加危机感（敌人数 +1），因此多怪战斗成长更快。

## 源码

- `SeerFlowerOfHopePower.cs`
- `SeerLiuMeng.cs`（琉梦）、`SeerSenseOfCrisisPower.cs`（危机感）
