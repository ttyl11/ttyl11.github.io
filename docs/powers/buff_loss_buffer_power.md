# 濛若沙尘

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[狂沙之主·萨特](/monsters/elite/mad_sand_lord_sate_monster.md)（技能 4）
> **类型**：中性（None）
> **叠加方式**：按层数叠加
> **可见**：是

<img src="/images/powers/buff_loss_buffer_power.png" alt="濛若沙尘" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

### 数值参数

| 参数 | 数值 |
|---|---|
| BufferPerLoss | 1 |

## 描述

在下一回合中，自身每失去[blue]1[/blue]个增益，获得[blue]1[/blue]层[gold]缓冲[/gold]。

## 详细机制

- **只统计自身可见增益**：持有者自己的、可见的 Buff 被移除才计数；减益、隐藏能力、别人的增益都不算，能力自身被移除也不触发。
- **按移除事件给**：一个增益被移除时给 1 层[缓冲](/powers/buffer_power.md)，与其原本多少层无关。
- **窗口关闭**：在**对方阵营回合结束时**移除本能力，覆盖对方整个出招窗口。

## 源码

- `SeerBuffLossBufferPower.cs`
