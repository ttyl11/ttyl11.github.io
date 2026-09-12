# 不朽之盾

<img src="/images/cards/immortal_shield.png" alt="不朽之盾" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 4
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 稀有
- **目标**: 自身
- **获得格挡**: 是
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 格挡 | 7 | 7 |
| 永久减伤 | 12% | 18% |
| PP | 4 | 4 |
| 最大PP | 4 | 4 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">4</span>/<span style="color:#3aa675;font-weight:600">4</span> 获得<span style="color:#3aa675;font-weight:600">7</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)和<span style="color:#3aa675;font-weight:600">12</span>%本场战斗免伤。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">4</span>/<span style="color:#3aa675;font-weight:600">4</span> 获得<span style="color:#3aa675;font-weight:600">7</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)和<span style="color:#3aa675;font-weight:600">18</span>%本场战斗免伤。

## 小贴士

- **免伤只对攻击伤害**：12%[永久减伤](/powers/permanent_damage_reduction_power.md)只减少**攻击伤害**，非攻击伤害（烧伤、[固定伤害](/powers/fixed_damage_power.md)等）不受影响。
- **可叠加，上限 30%**：减伤是叠加型 Power——重复打出本卡层数累加，2 次 24%、3 次封顶 30% 攻击减伤。叠层不衰减，越早打收益越大。
- **整场战斗生效**：PowerType 为 None，不属于增益/减益，不会被"消除增益/减益"类效果清除，12% 减伤持续到战斗结束。长 Boss 战里累积减伤价值显著。
- **1 费双效合理**：1 费换 7 格挡 + 12% 永久免伤。格挡数值偏低（1 费原版标准约 12），但可叠加的永久免伤补偿了即时格挡不足。
- **升级改免伤**：格挡 7 不变，免伤 12% → 18%。升级提升的是减伤上限而非即时格挡，适合长线作战。
- **乘法叠乘算减伤**：与[冰封](/powers/freeze_power.md)等其它百分比减伤按乘法叠乘（30% 减伤 + 20% 减伤 = 实际受 0.7×0.8=56% 伤害），配合多层百分比减伤可堆出极高生存。

## 相关能力

- [永久减伤](/powers/permanent_damage_reduction_power.md)（12% 攻击伤害减免，本场战斗持续）

## 相关机制

- [格挡](/mechanics/block.md)（获得 7 点格挡，升级不增加）

## 源码

- `SeerImmortalShield.cs`
