# 终末

> **归属**：怪物专属（[终末大天使](/monsters/elite/end_archangel_monster.md)）
> **类型**：中性（None）
> **叠加方式**：单例（层数隐藏）
> **可见**：是

<img src="/images/powers/end_archangel_power.png" alt="终末" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

### 数值参数

| 参数 | 数值 |
|---|---|
| DodgePercent | 100 |

## 描述

自身未处于属性提升状态时，获得[blue]100%[/blue][gold]闪避[/gold]。

## 详细机制

- **属性提升状态**：[力量](/powers/strength_power.md)、[防御](/powers/defense_power.md)、[命中](/powers/accuracy_power.md)、[速度](/powers/speed_power.md)四项中任意一项层数 > 0，即视为处于属性提升状态。
- **生效方式**：未处于属性提升状态时，直接获得 100 层真实闪避（图标显示 100%），由攻击结算时掷骰判定，不是伤害乘区。
- **实时同步**：能力挂上时先判定一次；此后四项属性任意一项出现正层，立刻撤掉这 100% 闪避；四项全部回到 0 或负数时重新获得。
- **闪避范围**：只闪避敌方的攻击伤害；持续伤害、固定伤害、非攻击伤害不会触发闪避。
- **命中削弱**：攻击者的[命中](/powers/accuracy_power.md)每层会降低 5% 闪避率，因此 100% 闪避并非绝对无敌。

## 相关怪物

- [终末大天使](/monsters/elite/end_archangel_monster.md)

## 源码

- `SeerEndArchangelPower.cs`
- `SeerDodgePower.cs`
