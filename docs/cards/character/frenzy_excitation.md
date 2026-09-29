# 狂能激发

<img src="/images/cards/frenzy_excitation.png" alt="狂能激发" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 5
- **能量消耗**: 0
- **类型**: 技能
- **稀有度**: 普通
- **目标**: 无
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 敌人狂暴层数 | 6 | 4 |
| 获得能量 | 5 | 5 |
| 堕落 | x² | x² |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 场上所有敌人获得<span style="color:#3aa675;font-weight:600">6</span>层<span style="color:#9b59b6;font-weight:600">狂暴</span>。获得<span style="color:#3aa675;font-weight:600">5</span>点<span style="color:#d4a017;font-weight:600">能量</span>。[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">x²</span>（x=当前能量）。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 场上所有敌人获得<span style="color:#3aa675;font-weight:600">4</span>层<span style="color:#9b59b6;font-weight:600">狂暴</span>。获得<span style="color:#3aa675;font-weight:600">5</span>点<span style="color:#d4a017;font-weight:600">能量</span>。[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">x²</span>（x=当前能量）。

## 小贴士

- **0 费净赚 5 能量**：代价是所有敌人获得 6 层[狂暴](/powers/fury_power.md)（每层攻击伤害 +25%，6 层 = 敌人攻击伤害 ×2.5）。这是典型的"贷款爆发"牌——用未来的防御压力换当下的进攻资源。
- **风险曲线**：狂暴在**敌人自己回合结束**才 -1 层，所以峰值是打出后的第一个敌方回合（+150%），之后逐回合衰减（+125% → +100% → …）。前两个敌方回合最危险，撑过去收益就稳了。
- **狂暴只加攻击伤害**：敌人身上的灼烧/中毒/固伤类不受狂暴影响，趁敌人被 DoT 拖着时打这张牌，实际风险比面板更低；反之敌人是大攻击型（高伤害单段攻击）时风险最大。
- **能量要有牌消费**：5 点能量当回合不用就浪费，但狂暴代价照付——手里必须攥着一波能吃满 5 费的牌（大牌、多段、连打）再开。空手开等于白送敌人增强。
- **最佳时机**：①本回合能终结战斗（狂暴来不及生效）；②敌人即将进入眩晕/无法攻击的回合；③手里正好有一波爆发需要能量。最差时机：残血防守、手里没牌。
- **双人房警告**：5 能量只有打牌者自己获得，但敌人狂暴对全队的攻击都增强——队友没同意别乱开，容易坑死队友。
- **升级是纯减负**：狂暴 6 层 → 4 层（峰值 +150% → +100%，持续 6 → 4 个敌方回合），能量收益不变。0 费牌升级无代价，优先级高。
- **堕落 = 当前能量²**：堕落按**打出瞬间的当前能量**结算——能量 <span style="color:#3aa675;font-weight:600">1</span> 时只 +<span style="color:#3aa675;font-weight:600">1</span>，能量 <span style="color:#3aa675;font-weight:600">3</span> 时 +<span style="color:#3aa675;font-weight:600">9</span>，满能量高蓄时平方放大。堕落是负面机制，每满<span style="color:#3aa675;font-weight:600">100</span>层被[魔君接管](/powers/demon_takeover_power.md)强制乱打——想压低堕落就趁能量见底时打，想靠它快速推进失控阈值（配合触发抽牌/混沌化身）就攒满能量再开，节奏完全由你掌控。
- **性价比**：0 费换 5 能量是全 mod 最高的能量效率，代价完全可控（速攻/清场局几乎白赚）；持久战和残局慎用。

## 相关能力

- [狂暴](/powers/fury_power.md)（每层攻击伤害 +25%，回合结束 -1 层）

## 相关机制

- [能量](/mechanics/energy.md)（获得 5 点能量）
- [堕落](/powers/fallen_power.md)（堕落 = 当前能量²，满 100 触发魔君接管）

## 源码

- `SeerFrenzyExcitation.cs`
