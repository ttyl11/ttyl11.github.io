# 悚颜

<img src="/images/cards/ghastly_face.png" alt="悚颜" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 10
- **能量消耗**: 0
- **类型**: 攻击
- **稀有度**: 罕见
- **目标**: 敌方单体
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害 | 18 | 25 |
| [堕落](/powers/fallen_power.md)目标值 | 99 | 99 |
| PP | 10 | 10 |
| 最大PP | 10 | 10 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> [<span style="color:#d44;font-weight:600">吸强</span>](/mechanics/xi_qiang.md)。造成<span style="color:#3aa675;font-weight:600">18</span>点伤害。[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)变为<span style="color:#3aa675;font-weight:600">99</span>。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> [<span style="color:#d44;font-weight:600">吸强</span>](/mechanics/xi_qiang.md)。造成<span style="color:#3aa675;font-weight:600">25</span>点伤害。[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)变为<span style="color:#3aa675;font-weight:600">99</span>。

## 详细机制

- **结算顺序**：吸强 → 造成伤害 → [堕落](/powers/fallen_power.md)校准。
- **吸强**：夺取**所有敌人**的四维属性正向层数——敌人该项归零，等量施加给自身。[力量](/powers/strength_power.md) / [防御](/powers/defense_power.md) / [命中](/powers/accuracy_power.md) / [速度](/powers/speed_power.md) 逐项分别处理（先快照层数再清零，否则会读到已归零的引用而给自己加 0）。
- **「变为 99」是覆盖，不是 +99**：当前堕落 <span style="color:#3aa675;font-weight:600">99</span> 时补足到 99；> 99 时下调到 99；正好 99 时无事发生。
- **两个方向的实现不同**：补足走「增加堕落」（会走百位里程碑检查，但目标值 99 不跨 100 层，因此**不会**触发[混沌化身](/mechanics/chaos-incarnation.md)）；下调走「直接修改层数」，同样不做里程碑检查。**这张牌自身永远不会触发混沌化身。**
- **伤害为攻击伤害**：吃力量 / [易伤](/powers/vulnerable_power.md) / [暴击](/mechanics/critical-strike.md)加成，可被[格挡](/mechanics/block.md)抵消。
- **PP 消耗**：每次打出消耗 1 点 PP，PP 10 表示最多可打出 10 次。

## 小贴士

- **堕落体系的「校准器」**：它是唯一能把堕落**拉回 99** 的牌。堕落一旦爆表，后续每次加层都可能再触发[魔君接管](/powers/demon_takeover_power.md)打乱节奏，用它可以一次性把失控阈值重新拴到嘴边。
- **99 是临界值**：校准到 99 后，只要再获得 1 层堕落就会跨过 100 层 → 触发[混沌化身](/mechanics/chaos-incarnation.md)（抽 3 张 + 魔君接管）。想主动开一次堕落爆发时，这是最省事的「扣扳机」手段。
- **和低额度堕落牌配合**：先用悚颜把堕落压到 99，再打一张小额堕落牌（如堕落 5 的[昏暗领域](/cards/character/dim_domain)），就能精确触发混沌化身，比让它随机触发可控得多。
- **吸强才是主菜**：0 费换 18（升级 25）点伤害在罕见里偏低，但把叠满四维的精英 / Boss 属性**整包搬空**的战术价值远超伤害本身，对纯增益敌人等于一次单体缴械。
- **性价比**：0 费、PP 10、最多可打 10 次；伤害倍率平平，价值全在「吸强 + 堕落校准」。堕落体系里是功能牌，非堕落体系里是一张纯吸强牌。

## 相关能力

- [力量](/powers/strength_power.md) / [防御](/powers/defense_power.md) / [命中](/powers/accuracy_power.md) / [速度](/powers/speed_power.md)（吸强夺取的四维）
- [堕落](/powers/fallen_power.md)（层数被覆盖为 99）

## 相关机制

- [吸强](/mechanics/xi_qiang.md)（夺取敌方四维正向层数）
- [全属性](/mechanics/all_attributes.md)（力量 / 防御 / 命中 / 速度四项）
- [PP系统](/mechanics/pp-system.md)（每次打出消耗 1 点 PP）
- [混沌化身](/mechanics/chaos-incarnation.md)（堕落满 100 层触发）

## 源码

- `SeerGhastlyFace.cs`