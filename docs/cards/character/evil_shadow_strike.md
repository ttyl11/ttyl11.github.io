# 恶影袭

<img src="/images/cards/evil_shadow_strike.png" alt="恶影袭" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 10
- **能量消耗**: 1
- **类型**: 攻击
- **稀有度**: 普通
- **目标**: 单个敌方
- **可升级**: 是（1 级）
- **关键词**: 无

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 基础伤害 | 5 | 5 |
| 已损生命固定伤害比例 | 6% | 10% |
| PP | 10 | 10 |
| 最大PP | 10 | 10 |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> 对单个敌人造成<span style="color:#d44;font-weight:600">5</span>点伤害。附加敌人已损生命值<span style="color:#d44;font-weight:600">6%</span>的[<span style="color:#9b59b6;font-weight:600">固定伤害</span>](/powers/fixed_damage_power.md)。

## 升级后

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> 对单个敌人造成<span style="color:#d44;font-weight:600">5</span>点伤害。附加敌人已损生命值<span style="color:#d44;font-weight:600">10%</span>的[<span style="color:#9b59b6;font-weight:600">固定伤害</span>](/powers/fixed_damage_power.md)。

## 工作机制

- **基础伤害**：造成 5 点攻击伤害，无连击。
- **固定伤害施加**：伤害结算后，对目标施加[固定伤害](/powers/fixed_damage_power.md)能力，数值 = 目标已损生命 × 6%（升级后 10%）。固定伤害在目标下回合开始时结算并移除，可绕过格挡。
- **固定伤害叠层**：同一目标多次被打上固定伤害时，每层独立计算并分别在下回合结算。

## 小贴士

- **已损生命即伤害**：固定伤害基数 = 目标已损生命（最大生命 − 当前生命）。目标血量越低，已损生命越大，固定伤害越高——但注意基础伤害始终是固定的 5 点，只有固定伤害部分随目标血量变化。
- **固定伤害绕格挡**：[固定伤害](/powers/fixed_damage_power.md)以能力形式施加在目标身上，下回合开始时结算，完全不经过格挡计算，是对付高格挡敌人的有效手段。
- **持久战的连续压制**：高 PP 让这张牌能反复打出，每次叠加新的固定伤害层数。对同一目标连续施加时，层数叠加——每层独立结算，形成持续的延迟伤害压力。
- **升级收益显著**：固定伤害比例从 6% 提升至 10%（+4%）。目标已损生命 50 点时，升级前后固定伤害从 3 点提升至 5 点；目标已损生命 100 点时，从 6 点提升至 10 点。在高血量Boss战中升级收益尤为突出。
- **使用节奏建议**：优先在目标血量较高时使用以最大化固定伤害基数（已损生命大）；配合其他固定伤害类卡牌可形成"多段固伤"体系，快速压低敌人血线。1 费的低耗能使其成为填充回合的理想选择。

## 相关能力

- [固定伤害](/powers/fixed_damage_power.md)（对目标施加延迟伤害，下回合结算，绕格挡）

## 相关机制

- [PP系统](/mechanics/pp-system.md)（PP 消耗）
- [固定伤害](/powers/fixed_damage_power.md)（延迟结算的伤害机制）
- [格挡](/mechanics/block.md)（固定伤害绕过的防御机制）

## 源码

- `SeerEvilShadowStrike.cs`
