# 八方·无人来朝

<img src="/images/cards/octagon.png" alt="八方·无人来朝" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 第五技能
- **最大PP**: 1
- **能量消耗**: 3
- **类型**: 攻击
- **稀有度**: 稀有
- **目标**: 所有敌方
- **关键词**: [寂灭](/mechanics/annihilation.md)
- **可升级**: 否

### 数值参数

| 参数 | 数值 |
|---|---|
| 伤害 | 170 |
| PP | 1 |
| 最大PP | 1 |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 对所有敌人造成<span style="color:#3aa675;font-weight:600">170</span>点伤害并[击晕](/mechanics/stun.md)，清除敌方[增益](/mechanics/bound.md)和自身[减益](/mechanics/abnormal-status.md)。获得<span style="color:#3aa675;font-weight:600">6</span>层[永昌玺](/powers/eternal_seal_power.md)。

## 详细机制

- **170点单张核弹**：对所有敌人造成 170 点攻击伤害，配合[永昌玺](/powers/eternal_seal_power.md)的增伤词条可再放大。
- **击晕所有敌人**：全部敌人本回合无法行动（[击晕](/mechanics/stun.md)）。
- **清除敌方增益+自身减益**：清除所有敌人的正面增益、清除自身所有负面减益（保留敌方减益与自身增益，非[净场](/mechanics/jing_chang.md)的全清）——控场+净化双保险。
- **永昌玺直接拉满6层**：层数上限 6 且永不溢出（`TryModifyPowerAmountReceived` 封顶），因此本卡打出的 6 层一定是"达到6层"→ **立即触发[君临天下](/powers/octagon_debt_power.md)**（本场只一次）：6回合内抽满手牌/能量+6/必定暴击/每牌附15固定伤害，结束后所有牌清PP入消耗+生命设为1。
- **[寂灭](/mechanics/annihilation.md)且不可升级**：打出后此牌进入消耗并永久移除（寂灭关键词效果），卡面固定 170 伤害无法再强化——是一发入魂的终结牌。

## 小贴士

- **是"立刻打满一次君临天下"的钥匙**：永昌玺满6自动开君临天下，本卡直接给满6层，等于打出即进入6回合的全面推进模式——前期留到关键回合（如精英/Boss）收益最高。
- **清除增益先手**：先清敌方增益（护甲/力量/属性）再结算伤害，确保170伤害不被高额减伤/护甲大量消耗。
- **寂灭一次性**：勿在杂兵战随手打掉，用在必须一波带走的战斗。

## 相关能力 / 机制

- [永昌玺](/powers/eternal_seal_power.md)：本卡获得6层，满6触发君临天下
- [君临天下](/powers/octagon_debt_power.md)：6回合全面推进 + 结束后清牌降命至1
- [击晕](/mechanics/stun.md)、[寂灭](/mechanics/annihilation.md)、[增益](/mechanics/bound.md)/[异常状态](/mechanics/abnormal-status.md)

## 源码

- `SeerOctagon.cs`