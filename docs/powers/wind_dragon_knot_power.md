# 风龙结

> **归属**：玩家可施加
> **施加来源**：玩家获得——[嘲风](/relics/epic/chao_feng.md)（遗物，受异常状态时获得手牌上限个）

<img src="/images/powers/wind_dragon_knot_power.png" alt="风龙结" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 中性（非增益非减益）
- **叠加方式**: 叠加计数
- **可见**: 是
- **层数上限**: 100

### 数值参数

| 参数 | 数值 |
|---|---|
| 每层增伤 | 自身造成伤害 +1% |
| 层数上限 | 100 |
| 龙属性永久减伤 | 50%（每场仅一次） |

## 描述

每有 <span style="color:#3aa675;font-weight:600">1</span> 个，自身造成伤害+<span style="color:#3aa675;font-weight:600">1</span>%。最多 <span style="color:#3aa675;font-weight:600">100</span> 个。到达 <span style="color:#3aa675;font-weight:600">100</span> 个时：若不为[龙](/powers/dragon_power.md)，消耗全部并恢复所有 PP、变为[龙](/powers/dragon_power.md)；若为[龙](/powers/dragon_power.md)，[永久减伤](/powers/permanent_damage_reduction_power.md)<span style="color:#3aa675;font-weight:600">50</span>%（每场一次），风龙结保持 <span style="color:#3aa675;font-weight:600">100</span>。

## 详细机制

- **每层 1% 增伤**：只作用于**自身造成的攻击伤害**（固定伤害、失去生命等不吃），增伤乘区与其它增伤**相乘**。层数越高，打出去的伤害越夸张——这是条攻击向的能力。
- **上限 100、溢出丢弃**：正向施加超过 100 的部分直接丢弃，不会负、不会爆。
- **到 100 结算，两分支消耗不同**：层数到达 100 当场结算，之后去向取决于是否已为[龙](/powers/dragon_power.md)：
  - **不为龙**：消耗全部风龙结 → 恢复所有 PP（所有 PP 牌回满）→ 切换自身属性为[龙](/powers/dragon_power.md)（移除原有元素属性）。清零后重新从 0 叠，**不**给永久减伤。
  - **为龙（每场仅一次）**：获得[永久减伤](/powers/permanent_damage_reduction_power.md) 50 层（50%），**不消耗风龙结**——风龙结稳定在 100（增伤 +100% 保留）。每场只有这一次 50%，之后因层数不再变化也不会再触发结算。
- **开局就是龙属性的边界**：若进入战斗时自身已为[龙](/powers/dragon_power.md)，叠满 100 直接走"为龙"分支——**第一个 100 就能拿到永久减伤 50% 且风龙结保持 100**（省去先变龙的一轮），但**不会触发**"恢复所有 PP"（该福利只在非龙分支）。开局龙 = 更快拿减伤，代价是永远吃不到回 PP。
- **与嘲风遗物的分工**：本能力只负责增伤与到 100 结算；"受异常→加结"和">50→清异常"由[嘲风](/relics/epic/chao_feng.md)遗物实现。

## 小贴士

- **200 个 = 全效果**：风龙结叠满 100 的第一轮是"变身"（回满 PP + 变龙），变龙后再叠 100 才拿到唯一一次的永久减伤 50%，且此后风龙结稳定在 100——增伤 +100% 与减伤 50% 同时常驻，攻防毕业。
- **增伤在龙分支后常驻 100%**：非龙阶段到 100 会清零重来，想长期挂高增伤得"踩刹车"（别叠满）；但一旦走完"变龙 → 再叠 100"流程，风龙结固定 100 层，增伤永久 +100%（伤害翻倍）不再波动。
- **永久减伤仅一次**：50% 永久减伤是唯一一次"防御兑现"，到不了 100%——设计上保证它"强但有限"。

## 相关能力

- [龙](/powers/dragon_power.md)（到 100 结算切换的属性）
- [永久减伤](/powers/permanent_damage_reduction_power.md)（为龙后唯一一次获得）

## 相关遗物

- [嘲风](/relics/epic/chao_feng.md)（风龙结的唯一施加来源）

## 源码

- `SeerWindDragonKnotPower.cs`
