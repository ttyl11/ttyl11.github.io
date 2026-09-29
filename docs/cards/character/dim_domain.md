# 昏暗领域

<img src="/images/cards/dim_domain.png" alt="昏暗领域" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 5
- **能量消耗**: 0
- **类型**: 攻击
- **稀有度**: 普通
- **目标**: 所有敌人
- **可升级**: 是（1 级）
- **关键词**: [保留](/mechanics/retain.md)

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害 | 敌方最大生命之和 × 7% | 敌方最大生命之和 × 10% |
| [堕落](/powers/fallen_power.md) | 5 | 5 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 对所有敌人造成其<span style="color:#d4a017;font-weight:600">最大生命</span>之和<span style="color:#3aa675;font-weight:600">7</span>%的伤害。[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">5</span>。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 对所有敌人造成其<span style="color:#d4a017;font-weight:600">最大生命</span>之和<span style="color:#3aa675;font-weight:600">10</span>%的伤害。[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">5</span>。

## 详细机制

- **伤害口径**：伤害 = **所有敌人最大生命值之和** × <span style="color:#3aa675;font-weight:600">7</span>%（升级后 10%），**每个敌人吃同一个数值**——不是「各按自己的最大生命算百分比」。
  - 例：两个敌人最大生命 100 + 100 = 200，未升级时每个敌人都吃 200 × 7% = <span style="color:#3aa675;font-weight:600">14</span> 点。
  - 因此**敌人越多、单个敌人吃到的伤害越高**，这是它和普通全体牌最大的区别。
- **该伤害是攻击伤害**：吃[力量](/powers/strength_power.md) / [易伤](/powers/vulnerable_power.md) / [暴击](/mechanics/critical-strike.md)加成，会被[格挡](/mechanics/block.md)抵消。
- **[堕落](/powers/fallen_power.md) +5**：固定值，与伤害无关。
- **[保留](/mechanics/retain.md)**：本牌恒定拥有该关键词（非升级获得），回合结束时不会被弃掉，可以一直留在手里等时机。
- **升级只提升百分比**：7% → 10%（+3%），堕落与 PP 不变。

## 小贴士

- **后期与多目标才强**：百分比伤害随敌人最大生命线性增长，越到后期越痛；而对多敌人时按「总和」算，等于把这份伤害又乘上敌人数。
- **是攻击伤害，怕格挡**：面对高格挡敌人会被大幅削减，遇到大盾怪时不如直接上[固定伤害](/mechanics/fixed-damage.md)手段。
- **[保留](/mechanics/retain.md) = 时机自由**：可以一直握在手里，等敌人最大生命被抬高（例如敌方自我增血、或等更多敌人入场）后再打，收益立刻上一个台阶。
- **堕落 5 很便宜**：可作为堕落体系的稳定小额供能，配合[悚颜](/cards/character/ghastly_face)把堕落精确校准到临界值。
- **性价比**：0 费、PP 5。空场单怪时收益平平（一个 100 血的敌人只吃 7 点），多敌人 / 高血量 / 保留等待后才体现价值；升级把百分比抬到 10%，是纯粹的数值提升。

## 相关能力

- [堕落](/powers/fallen_power.md)（每次打出 +5 层）

## 相关机制

- [保留](/mechanics/retain.md)（回合结束不弃掉）
- [格挡](/mechanics/block.md)（伤害为攻击伤害，可被格挡抵消）
- [PP系统](/mechanics/pp-system.md)（每次打出消耗 1 点 PP）

## 源码

- `SeerDimDomain.cs`