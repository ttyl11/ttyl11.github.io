# 无实体

<img src="/images/powers/intangible_power.png" alt="无实体" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **归属**：任意角色均可持有（原版能力）
- **类型**：增益
- **叠加**：计数型（层数 = 覆盖的敌方回合数）
- **施加来源**：多处——[无常幽鬼](/relics/common/ghost_impermanence.md)、[飞镰](/relics/rare/flying_scythe.md)、部分卡牌、怪物与刻印

## 描述

持有期间，自身受到的伤害与生命损失均降为 <span style="color:#3aa675;font-weight:600">1</span>；每个敌方回合结束时层数 −1。

## 详细机制

- **不是按次数递减**：被打多少次都不会掉层，只在**敌方回合结束**时 −1 层。N 层 = N 个敌方回合的保护。
- 任何大于等于 1 点的生命损失都会被压成 1 点，包括攻击伤害、非攻击伤害与直接生命流失。
- 格挡损失与伤害预览同样按 1 点计算，所以多段攻击每段都只打 1 点。
- 生命损失本身为 0 或负数时不受影响。
- 与「缓冲」不同：缓冲是抵消一次完整伤害后消失，无实体是把每段伤害压到 1 并持续整轮。

## 源码

- 原版 `IntangiblePower.cs`
- `SeerPhantomButterfly.cs`、`SeerFlyingScythe.cs`、`SeerGhostImpermanence.cs`（施加示例）
