# 枫落殇·西叶

<img src="/images/relics/feng_luo_shang_xi_ye.png" alt="枫落殇·西叶" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 史诗（自定义稀有度）

### 数值参数

| 参数 | 数值 |
|---|---|
| 死亡增益 | 流血 +2、寄生 +2（初次，此后每次死亡各 +1） |
| 减伤 | 每 1 种异常 -20%（攻击伤害与固定伤害） |
| 减伤上限 | 5 种异常 = 完全豁免 |
| 枫落殇思触发 | 回合结束时异常种类 > 4 |
| 堕落转召唤 | 每 10 层堕落 = 召唤 1 |

## 描述

①有生物死亡：自身[流血](/powers/bleed_power.md)、[寄生](/powers/parasite_power.md)各+<span style="color:#3aa675;font-weight:600">2</span>（此后每死一次各+<span style="color:#3aa675;font-weight:600">1</span>），自身[PP](/mechanics/pp-system.md)回满，全场生物恢复等量生命。②每有<span style="color:#3aa675;font-weight:600">1</span>种[异常](/mechanics/abnormal-status.md)：攻击伤害与[固定伤害](/mechanics/fixed-damage.md)-<span style="color:#3aa675;font-weight:600">20%</span>；回合结束异常种类><span style="color:#3aa675;font-weight:600">4</span>触发[枫落殇思](/powers/maple_fall_sadness_power.md)。③回合结束每<span style="color:#3aa675;font-weight:600">10</span>层[堕落](/mechanics/fallen.md)，[召唤](/mechanics/summon.md)<span style="color:#3aa675;font-weight:600">1</span>，并清空[堕落](/mechanics/fallen.md)。

## 详细机制

### ① 死亡计数（敌我均算）

- 任意生物死亡（**敌人或自身都计**）时：本场死亡计数 +1（每场战斗重置），随后依次结算三件事：
  1. **叠流血/寄生**：自身获得流血、寄生各（死亡计数 + 1）层——第 1 次死亡各 +2、第 2 次各 +3、第 3 次各 +4……随死亡次数递增；
  2. **回满 PP**：将**所有** PP 牌回满（只统计不满的牌，回满量 = Σ(最大PP − 当前PP)）；
  3. **全场回血**：若本次回满总量 > 0，**全场所有生物（敌人 + 自身）**各恢复等量生命。
- 已经满 PP 的情况（回满总量 = 0）：流血/寄生照常叠加，但全场回血不执行。

### ② 异常抗压：种类越多越肉

- **常驻减伤**：自身每处于 **1 种**异常状态（按种类计，层数 > 0 即算 1 种），受到的**攻击伤害**与**固定伤害**各 -20%——
  - 攻击伤害：于伤害结算时乘算减免（只拦攻击类伤害）；
  - 固定伤害：于施加时拦截[固定伤害](/powers/fixed_damage_power.md)层数（向下取整）。
- 5 种及以上 → 攻击伤害全部减免、固定伤害全免疫（下限 0，不会反弹成增伤）。
- **回合结束触发枫落殇思**：自身异常种类 > 4（即 5 种以上）时，赋予自身 1 层[枫落殇思](/powers/maple_fall_sadness_power.md)。

### ③ 堕落转召唤（西叶改造堕落体系）

- **堕落停用其它效果**：西叶在场时，堕落层**正常施加、正常显示**，但堕落本身其它能力全部停用——100 层混沌化身、抽牌、魔君接管等效果不再触发。
- **回合结束按 10:1 转召唤**：我方回合结束时，每满 10 层堕落 → [召唤](/mechanics/summon.md) 1（即奥斯提最大生命 +1 并回复等量生命），随后**清空全部堕落层（零头一并清空，不保留）**；堕落不足 10 层时本回合不触发，堕落层自然留存继续累计。
- 战斗结束后堕落层随战斗清空（本遗物不跨场累积）。

## 风味文字

<span style="color:#d44;font-weight:600">枫落殇·西叶。</span>

## 小贴士

- **死亡计数是双重资源**：每死一个生物（含敌人）既把西叶自身叠成"红标"（流血+寄生），又白赚一端口满 PP + 全场回血——AOE 多、速杀快的战斗里每回合都能白嫖一次"回满 PP + 回满血"。
- **②③互为开关**：异常种类堆到 5+ 就免掉攻击/固定伤害，但回合结束会触发枫落殇思；而③要求身上攒至少 10 层堕落才转召唤，且触发一次就清空全部堕落（零头不保留）——想靠堕落转奥斯提就攒大整倍数再结算，反之想靠异常减伤苟命，就把异常种类堆到 5 种以上直接免伤。
- **枫落殇思是"异常堆的奖励回合"**：触发后下回合开局解完全身异常（正好把"异常种类 > 4"的条件清零），手牌上限 +8、PP 全免费、0PP 牌全入手——异常压得越狠，奖励回合来得越猛。
- **堕落别真当负面**：本遗物下 10 层堕落 = 1 点奥斯提养成，配[召唤](/mechanics/summon.md)类构筑可以把堕落变成从容的召唤刷量。
- **减伤口径**：只减"攻击伤害"（攻击牌/攻击技能）与"固定伤害"能力，中毒/烧伤等回合开始 DoT 不受②影响（它们不算攻击伤害）。

## 相关能力 / 机制

- [枫落殇思](/powers/maple_fall_sadness_power.md)（②触发，一次性奖励回合）
- [流血](/powers/bleed_power.md)、[寄生](/powers/parasite_power.md)（①死亡时对自身施加）
- [异常状态](/mechanics/abnormal-status.md)、[堕落](/mechanics/fallen.md)、[召唤](/mechanics/summon.md)、[PP 系统](/mechanics/pp-system.md)

## 源码

- `SeerFengLuoShangXiYe.cs`
- `SeerFallenCountHelper.cs`（持西叶时堕落停用其余能力）