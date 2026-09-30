# 匠心

<img src="/images/cards/craftsman_heart.png" alt="匠心" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 任务牌
- **能量消耗**: 无
- **类型**: 任务
- **稀有度**: 任务
- **目标**: 自身
- **可升级**: 否
- **关键词**: [不能被打出](/mechanics/unplayable.md)

### 数值参数

| 参数 | 数值 |
|---|---|
| 伤害阈值 | 8000 |
| 当前伤害 | 0 |

## 描述

不可打出。记录你造成的伤害之和：<span style="color:#3aa675;font-weight:600">0</span>/<span style="color:#3aa675;font-weight:600">8000</span>。达到<span style="color:#3aa675;font-weight:600">8000</span>时获得神秘奖励并移除此牌。

## 小贴士

- **任务牌**：属于任务牌，无法被打出（[不能被打出](/mechanics/unplayable.md)），不参与抽牌/弃牌流程，仅存在于主牌组中。
- **伤害记录**：你每次造成伤害时，记录该次伤害的数值本身（整数，向下取整）。**伤害来源不限**——攻击牌、[固定伤害](/mechanics/fixed-damage.md)、反噬、多段伤害的每一段都单独计算，只要出伤害的人是你（多人模式下队友的伤害不算）。
- **🔑 判定 = 伤害之和，看的是总输出量**：每次伤害按数值等值累计（不再平方），大数字和刮痧效率相同——单次 100 伤害记 <span style="color:#3aa675;font-weight:600">100</span>，打 <span style="color:#3aa675;font-weight:600">80</span> 次达标；单次 10 伤害记 <span style="color:#3aa675;font-weight:600">10</span>，打 <span style="color:#3aa675;font-weight:600">800</span> 次达标。多段、AOE、固定伤害都能有效推进，达标快慢完全取决于整局总输出。
- **奖励触发**：战斗结束后，若牌在主牌组且累计值 ≥ <span style="color:#3aa675;font-weight:600">8000</span>，触发奖励（战斗中途达标也要等战斗结束才结算）。
- **神秘奖励**：实际为 <span style="color:#3aa675;font-weight:600">8000</span> [金币](/mechanics/money_pouch.md)——一笔巨款，直接改变本局的商店/事件购买力。
- **移除机制**：奖励触发后，在进入下一个房间时从主牌组中移除此牌。
- **跨战斗持续**：累计值在多场战斗间持续累加，直到达标；达标后停止记录（超出的伤害不再累计）。

## 源码

- `SeerCraftsmanHeart.cs`
