# 淬焰凡芯

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物技能——孤烛灯使

> **类型**：增益（Buff）
> **叠加方式**：按层数叠加
> **可见**：是

<img src="/images/powers/kindle_response_power.png" alt="淬焰凡芯" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 描述

持续<span style="color:#3aa675;font-weight:600">层数</span>回合：敌人点亮<span style="color:#d4a017;font-weight:600">魂灯</span>时，自身立即点亮<span style="color:#3aa675;font-weight:600">1</span>盏<span style="color:#d4a017;font-weight:600">魂灯</span>。

## 详细机制

- **反应点灯**：玩家点亮魂灯的瞬间，自身同步点亮 1 盏（由魂灯驱动统一处理）。
- **持续**：层数 = 剩余回合，自己的回合开始时 -1，归零移除。

## 源码

- `SeerKindleResponsePower.cs`
