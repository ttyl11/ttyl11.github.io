# 灾厄之劫

<img src="/images/cards/doom_calamity.png" alt="灾厄之劫" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 10
- **能量消耗**: 0
- **类型**: 攻击
- **稀有度**: 普通
- **目标**: 敌方单体
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害 | 12 | 18 |
| [瘫痪](/powers/paralysis_power.md)（对手） | 1 | 1 |
| [灾厄](/powers/doom_power.md)（自身） | 8 | 8 |
| [堕落](/powers/fallen_power.md)（自身） | 12 | 12 |
| PP | 10 | 10 |
| 最大PP | 10 | 10 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> [<span style="color:#d4a017;font-weight:600">瘫痪</span>](/powers/paralysis_power.md)<span style="color:#3aa675;font-weight:600">1</span>。自身[<span style="color:#d4a017;font-weight:600">灾厄</span>](/powers/doom_power.md)<span style="color:#3aa675;font-weight:600">8</span>、[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">12</span>。造成<span style="color:#3aa675;font-weight:600">12</span>点伤害。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> [<span style="color:#d4a017;font-weight:600">瘫痪</span>](/powers/paralysis_power.md)<span style="color:#3aa675;font-weight:600">1</span>。自身[<span style="color:#d4a017;font-weight:600">灾厄</span>](/powers/doom_power.md)<span style="color:#3aa675;font-weight:600">8</span>、[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">12</span>。造成<span style="color:#3aa675;font-weight:600">18</span>点伤害。

## 详细机制

- **结算顺序**：对手[瘫痪](/powers/paralysis_power.md) 1 → 自身[灾厄](/powers/doom_power.md) +8、[堕落](/powers/fallen_power.md) +12 → 造成伤害。
- **[瘫痪](/powers/paralysis_power.md)施加给目标**：目标攻击伤害 ×0.9；若它上回合没造成过伤害，回合开始前还会被自叠[虚弱](/powers/weak_power.md)、[易伤](/powers/vulnerable_power.md)、[缩小](/powers/shrink_power.md)各 1 层。
  - 注意瘫痪减的是**对方的攻击伤害**，不影响本牌这次的伤害。
- **[灾厄](/powers/doom_power.md)施加给自身**：8 层灾厄挂在**自己**身上——在自己回合结束时，若自身当前生命 ≤ 8，则**直接死亡**（原版灾厄的处决判定）。这是本牌的代价，不是收益。
- **[堕落](/powers/fallen_power.md) +12**：固定值，推动堕落体系运行。
- **伤害为攻击伤害**：吃[力量](/powers/strength_power.md) / 易伤 / [暴击](/mechanics/critical-strike.md)加成，可被[格挡](/mechanics/block.md)抵消。
- **升级只提升伤害**：12 → 18（+6）。

## 小贴士

- **0 费，但代价在血线上**：自身 8 层灾厄意味着**回合结束时生命 ≤ 8 就会直接死亡**。残血时打它等于自杀，出手前先确认自己的血量与[格挡](/mechanics/block.md)安排（格挡不挡灾厄的处决判定，判定只看当前生命）。
- **0 费 + PP 10 = 一回合可以连打**：单看数值是「1 费级」的伤害，靠 0 费可以在一回合内叠多次瘫痪和堕落，用来快速堆堕落层数。
- **瘫痪是「软减伤」**：-10% 攻击伤害、每回合 -1 层，1 层基本只够顶一回合；它的真正价值是配合「多打几张」把对方长期压在减伤状态。
- **堕落 +12 是主收益**：配合 0 费连打，一张牌就能推进 12 层堕落，是堕落体系里性价比很高的供能手段。
- **性价比**：0 费换 12（升级 18）点攻击伤害 + 对手瘫痪 1 + 自身堕落 12，代价是自身 8 层灾厄（死亡线风险）。满血时是纯赚，残血时是禁牌——是否值得打，取决于你能否把血量维持在 8 以上。

## 相关能力

- [瘫痪](/powers/paralysis_power.md)（施加给对手）
- [灾厄](/powers/doom_power.md)（施加给自身，生命 ≤ 8 时处决）
- [堕落](/powers/fallen_power.md)（自身 +12 层）

## 相关机制

- [PP系统](/mechanics/pp-system.md)（每次打出消耗 1 点 PP）
- [格挡](/mechanics/block.md)（伤害为攻击伤害，可被格挡抵消）
- [混沌化身](/mechanics/chaos-incarnation.md)（堕落满 100 层触发）

## 源码

- `SeerDoomCalamity.cs`