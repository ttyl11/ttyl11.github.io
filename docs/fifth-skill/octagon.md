# 八方·无人来朝

<img src="/images/cards/octagon.png" alt="八方·无人来朝" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 第五技能
- **最大PP**: 1
- **能量消耗**: 3
- **类型**: 攻击
- **稀有度**: 稀有
- **目标**: 所有敌方
- **关键词**: [寂灭](/mechanics/nirvana.md)
- **可升级**: 否

### 数值参数

| 参数 | 数值 |
|---|---|
| 伤害 | 170 |
| PP | 1 |
| 最大PP | 1 |

## 描述

PP: 1/1 对所有敌人造成<span style="color:#3aa675;font-weight:600">170</span>点伤害并<span style="color:#d4a017;font-weight:600">击晕</span>，清除敌人<span style="color:#d4a017;font-weight:600">增益</span>和自身<span style="color:#d4a017;font-weight:600">减益</span>。获得<span style="color:#3aa675;font-weight:600">6</span>层<span style="color:#9b59b6;font-weight:600">永昌玺</span>。

## 详细机制

- **170点单张核弹**：对所有敌人造成 170 点攻击伤害，先结算伤害，再处理击晕与清增益。
- **击晕所有敌人**：全部敌人在**其下一回合**无法行动（[击晕](/mechanics/stun.md)）。
- **清除敌方增益+自身减益**：伤害结算后，清除所有敌人的正面增益、清除自身所有负面减益（保留敌方减益与自身增益，非[净场](/mechanics/jing_chang.md)的全清）。
- **永昌玺直接拉满6层**：层数上限 6 且永不溢出，因此本卡打出的 6 层一定触发[君临天下](/powers/octagon_debt_power.md)（本场只一次）：6 回合内抽满手牌/能量 +6/必定暴击/每牌附 15 固定伤害，结束后所有牌清 PP 入消耗 + 生命设为 1。
- **[寂灭](/mechanics/nirvana.md)且不可升级**：打出后记录，本场战斗结束时从此牌组永久移除（不是当场消耗），卡面固定 170 伤害无法再强化——是一发入魂的终结牌。

## 小贴士

- **是"立刻打满一次君临天下"的钥匙**：永昌玺满6自动开君临天下，本卡直接给满6层，等于打出即进入6回合的全面推进模式——前期留到关键回合（如精英/Boss）收益最高。
- **清增益在伤害之后**：170 点伤害先结算，之后才清除敌方增益——别指望清掉敌人的力量/减伤来放大这一击；它的清增益主要用于后续回合与击晕联动。
- **寂灭一次性**：勿在杂兵战随手打掉，用在必须一波带走的战斗。

## 相关能力 / 机制

- [永昌玺](/powers/eternal_seal_power.md)：本卡获得6层，满6触发君临天下
- [君临天下](/powers/octagon_debt_power.md)：6回合全面推进 + 结束后清牌降命至1
- [击晕](/mechanics/stun.md)、[寂灭](/mechanics/annihilation.md)、[增益](/mechanics/bound.md)/[异常状态](/mechanics/abnormal-status.md)

## 源码

- `SeerOctagon.cs`