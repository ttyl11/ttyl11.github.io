# 福泽千秋

<img src="/images/cards/blessing_millennium.png" alt="福泽千秋" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 5
- **能量消耗**: 2
- **类型**: 技能
- **稀有度**: 罕见
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 异常免疫回合 | 3 | 6 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> <span style="color:#3aa675;font-weight:600">3</span>回合[<span style="color:#d4a017;font-weight:600">异常免疫</span>](/powers/debuff_immune_power.md)。敌方每<span style="color:#3aa675;font-weight:600">1</span>层[<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)，生成<span style="color:#3aa675;font-weight:600">1</span>个[<span style="color:#d4a017;font-weight:600">冰霜</span>](/mechanics/orb.md)充能球。

## 升级后

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> <span style="color:#3aa675;font-weight:600">6</span>回合[<span style="color:#d4a017;font-weight:600">异常免疫</span>](/powers/debuff_immune_power.md)。敌方每<span style="color:#3aa675;font-weight:600">1</span>层[<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)，生成<span style="color:#3aa675;font-weight:600">1</span>个[<span style="color:#d4a017;font-weight:600">冰霜</span>](/mechanics/orb.md)充能球。

## 详细机制

- **异常免疫**：获得 <span style="color:#3aa675;font-weight:600">3</span> 层[异常免疫](/powers/debuff_immune_power.md)（升级 6 层）。
  - 即将受到[异常状态](/mechanics/abnormal-status.md)时，施加量归零（完全免疫该次施加），不消耗层数。
  - 层数在**对方回合结束**时 -1，因此 N 层 = 覆盖 N 个敌方回合。
  - 只挡 <span style="color:#3aa675;font-weight:600">26</span> 种异常状态，**不挡普通减益**（如易伤、虚弱等非异常类）。
- **充能球生成**：统计**所有敌人**身上 26 种异常状态的正向层数**总和**，每 1 层生成 1 个[冰霜充能球](/mechanics/orb.md)。
  - 是"合计"而不是"每个敌人各算一次"：3 个敌人各有 5 层异常 = 合计 15 层 → 生成 15 个冰霜球。
  - 层数只算正值，负向层数不计入。

## 小贴士

- **敌人异常越多，这张牌越强**：敌方合计 20 层异常 → 一次生成 20 个冰霜充能球，直接把充能球资源打满。
- **与异常流派高度协同**：先用中毒 / 烧伤 / 灾厄等牌铺异常，再用本卡把异常层数一次性转成充能球资源，是"异常 → 充能球"的转化枢纽。
- **异常免疫的定位**：3 回合（升级 6 回合）的免疫窗口，适合在敌方高压异常回合前提前打出；注意它挡不住非异常类的普通减益。
- **PP 5 / 2 费**：成本中等，配合异常流派收益远超成本；脱离异常流派时只是"3 回合异常免疫"，价值会大幅缩水。
- **升级收益**：免疫回合 3→6，翻倍，防御面提升明显。

## 相关能力

- [异常免疫](/powers/debuff_immune_power.md)（抵挡 26 种异常状态的施加）
- [冰霜充能球](/mechanics/orb.md)（按敌方异常总层数生成）

## 相关机制

- [PP系统](/mechanics/pp-system.md)（PP 消耗）
- [异常状态](/mechanics/abnormal-status.md)（26 种，决定生成数量）
- [充能球](/mechanics/orb.md)（生成物）

## 源码

- `SeerBlessingMillennium.cs`
