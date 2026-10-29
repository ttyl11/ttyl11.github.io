# 弦月锋华

<img src="/images/cards/crescent_edge.png" alt="弦月锋华" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 罕见
- **目标**: 无
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 堕落 | 16 | 16 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: 5/5 免疫下次伤害，以<span style="color:#d4a017;font-weight:600">固定伤害</span>反弹给攻击者。<span style="color:#d44;font-weight:600">堕落</span><span style="color:#3aa675;font-weight:600">16</span>。

## 升级后

PP: 5/5 免疫下次伤害，以<span style="color:#d4a017;font-weight:600">固定伤害</span>反弹给攻击者。<span style="color:#d44;font-weight:600">堕落</span><span style="color:#3aa675;font-weight:600">16</span>。

## 小贴士

- **弦月反弹**（[<span style="color:#d4a017;font-weight:600">查看能力页</span>](/powers/crescent_edge_reflect_power.md)）：打出后对自身施加 1 层弦月反弹能力（增益，可叠加）。该能力实现免疫+反弹机制：
 - **免疫机制**：受到攻击时，先正常消耗[格挡](/mechanics/block.md)，格挡被打破后的剩余伤害被抵消（HP 损失归 0）。
 - **反弹机制**：受到攻击后，将未被格挡的剩余伤害以[固定伤害](/powers/fixed_damage_power.md)形式施加给攻击者，目标下回合开始时结算。
 - **仅限攻击伤害**：只对正常攻击伤害生效，不对持续伤害/固定伤害生效。
 - **消耗 1 层**：每次反弹后层数 -1，层数归 0 后能力自动移除。
- **格挡先抵消，反弹只认溢出——挡满也白白掉层**：免疫机制中[格挡](/mechanics/block.md)先正常消耗——如果格挡挡住了全部伤害（格挡 ≥ 伤害），就没有"溢出"可反弹。但注意：**只要被攻击命中一次（无论是否破防），弦月层就 -1**——格挡挡满的攻击同样消耗层数，等于白丢一次免疫机会。所以这张牌配合低格挡时反弹更多更划算，高格挡时反而把层浪费在被格挡挡掉的攻击上。
- **只认敌方攻击**：自己打自己、非攻击伤害（DOT/固定伤害）既不抵消也不反弹、也不消耗层数——只有**敌方来源的攻击伤害**才走"抵消+反弹+掉层"的完整流程。
- **固定伤害反弹**：反弹的伤害以[固定伤害](/powers/fixed_damage_power.md)形式施加给攻击者——目标**下回合开始时**才结算伤害。这意味着反弹不是即时伤害，目标有一回合的时间可以应对（如获得固定伤害免疫）。
- **配合建议**：最佳配合是**故意不堆格挡**——让格挡少一些，更多伤害溢出触发反弹。面对高攻击力的 Boss 时尤其有效，Boss 一拳打 30+ 伤害，反弹 30+ 固定伤害回去。多层弦月反弹（多次打出）可以反弹多次攻击。
- **堕落 16：防御牌的暗账**：每次打出 +<span style="color:#3aa675;font-weight:600">16</span>[堕落](/powers/fallen_power.md)，PP<span style="color:#3aa675;font-weight:600">5</span> 打满就是 <span style="color:#3aa675;font-weight:600">80</span> 层——堕落是负面机制，每**跨过 100 的倍数**就会被[魔君接管](/powers/demon_takeover_power.md)强制乱打。一张免疫牌叠多了也会把失控阈值推到嘴边，好在有[混沌起源](/relics/starter/chaos_origin.md)兜底，"坏而不致命"，但滥用免疫时要想好接管回合的牌序。
- **升级的价值**：耗能从 1 降至 0。0 费只是免能量，每次仍消耗 1 点 PP 并增加 16 层[堕落](/powers/fallen_power.md)；PP 5 表示单场最多 5 次，不能每回合无脑连打。升级让它在关键时刻更容易插入出牌序列。
- **性价比**：升级前 1 费换一次免疫+反弹已经很值，升级后 0 费更灵活。作为罕见牌，这是谱尼防御体系的核心组件之一，但要算上 PP 与堕落的总量。

## 相关能力

- [弦月反弹](/powers/crescent_edge_reflect_power.md)（打出后对自身施加 1 层）
- [固定伤害](/powers/fixed_damage_power.md)（反弹时施加给攻击者）

## 相关机制

- [格挡](/mechanics/block.md)（免疫机制中格挡先正常消耗）
- [堕落](/powers/fallen_power.md)（每打出一次固定 +16 层）

## 源码

- `SeerCrescentEdge.cs`、`SeerCrescentEdgeReflectPower.cs`
