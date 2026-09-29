# 发条之鸣

<img src="/images/cards/clockwork_chime.png" alt="发条之鸣" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 攻击
- **稀有度**: 普通
- **目标**: 敌方单体
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害 | 6 | 10 |
| 激发充能球数 | 1 | 1 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 造成<span style="color:#3aa675;font-weight:600">6</span>点伤害。[<span style="color:#d4a017;font-weight:600">激发</span>](/mechanics/evoke.md)<span style="color:#3aa675;font-weight:600">1</span>个随机[<span style="color:#d4a017;font-weight:600">充能球</span>](/mechanics/orb.md)。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 造成<span style="color:#3aa675;font-weight:600">10</span>点伤害。[<span style="color:#d4a017;font-weight:600">激发</span>](/mechanics/evoke.md)<span style="color:#3aa675;font-weight:600">1</span>个随机[<span style="color:#d4a017;font-weight:600">充能球</span>](/mechanics/orb.md)。

## 详细机制

- **结算顺序**：先造成伤害，**再**激发充能球。
- **激发对象是随机的**：从当前充能球队列中**随机抽 1 个**激发——不是「最左侧」的那个。因为对象随机，卡面不会高亮任何一个球（避免误导演示成队首球）。
- **走完整激发流程**：动画、被动钩子、球被移除等都由原版激发流程处理，所以「激发时」触发的效果（如激发闪电球造成伤害、激发森林球施加感染）照常生效。
- **无球时跳过**：队列为空时只有伤害，不报错、不消耗任何东西。
- **是「激发」不是「生成」**：球会被消耗掉（离开队列），不会留在队友列表里。
- **伤害为攻击伤害**：吃[力量](/powers/strength_power.md) / 易伤 / [暴击](/mechanics/critical-strike.md)加成，可被[格挡](/mechanics/block.md)抵消。
- **升级只提升伤害**：6 → 10（+4）。

## 小贴士

- **「攻击牌顺带激发」的定位**：它不是球流的核心（只激发 1 个），而是让攻击牌在不损失节奏的前提下多吃一次激发收益——球流构筑里相当于「1 费攻击 + 1 次激发」，非球流则接近白板小攻击。
- **球越多，期望越不可控**：随机激发的坏处是无法精确引爆关键球（例如想用黑暗球收尾，却被随机到别的球上）；好消息是无论随机到哪个球都会触发一次激发收益。
- **升级收益很实在**：6 → 10 是 +67%，在普通牌里升级幅度偏大，值得优先升级。
- **性价比**：1 费 6（升级 10）点伤害 + 1 次随机激发。球流构筑里是合格的节奏牌（一次激发 ≈ 一张牌的价值），纯攻击构筑里则弱于同费的纯输出牌。

## 相关能力

- 无（本牌不施加能力）

## 相关机制

- [充能球](/mechanics/orb.md)（激发队列中的 1 个随机球）
- [激发](/mechanics/evoke.md)（走完整激发流程，触发激发类效果）
- [格挡](/mechanics/block.md)（伤害为攻击伤害，可被格挡抵消）
- [PP系统](/mechanics/pp-system.md)（每次打出消耗 1 点 PP）

## 源码

- `SeerClockworkChime.cs`