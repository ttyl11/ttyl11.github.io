# 虚无

> **归属**：玩家可施加
> **施加来源**：玩家获得——[虚无](/cards/basic/void_nothingness.md)（卡牌）

<img src="/images/powers/void_nothingness_power.png" alt="虚无" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 叠加（Counter，层数 = 还能触发的次数）
- **可见**: 是

## 描述

自身受到伤害时获得[blue]1[/blue]层[gold]缓冲[/gold]，然后此能力层数-[blue]1[/blue]。

## 详细机制

- **施加来源**：[虚无](/cards/basic/void_nothingness.md)一次施加 <span style="color:#3aa675;font-weight:600">3</span> 层。
- **触发条件**：只有**实际掉血**（未格挡伤害大于 0）才触发；被格挡全额抵消的伤害不消耗层数。
- **结算顺序**：先正常结算这次伤害，再获得 <span style="color:#3aa675;font-weight:600">1</span> 层[缓冲](/powers/buffer_power.md)，然后层数 <span style="color:#3aa675;font-weight:600">-1</span>——所以本次伤害不会被打断，缓冲从下一次伤害开始生效。
- **耗尽移除**：层数降到 1 时触发完最后一次并移除自身，不会出现 0 层残留。

## 小贴士

- **拿缓冲挡后续伤害**：能力本身不减免当次伤害，价值在于把连续的小伤害逐次挡掉。
- **多段攻击很划算**：多段攻击每段都算一次“受到伤害”，层数消耗快，但每层都能换 1 层缓冲。

## 相关卡牌

- [虚无](/cards/basic/void_nothingness.md)（施加来源）

## 源码

- `SeerVoidNothingnessPower.cs`
- `SeerVoidNothingness.cs`
