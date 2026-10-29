# 千重影缠身

<img src="/images/cards/thousand_shadow_bind.png" alt="千重影缠身" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 第五技能
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 攻击
- **稀有度**: 普通
- **目标**: 所有敌人
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 最低伤害 | 10 | 20 |
| 最高伤害 | 30 | 45 |
| 每次使用最低值提升 | 5 | 5 |
| 堕落 | 30% | 30% |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: 5/5 对所有敌人随机造成<span style="color:#3aa675;font-weight:600">10</span>-<span style="color:#3aa675;font-weight:600">30</span>点伤害。本场每打出一次，最低值+<span style="color:#3aa675;font-weight:600">5</span>。<span style="color:#d44;font-weight:600">堕落</span><span style="color:#3aa675;font-weight:600">30%</span>。

## 升级后

PP: 5/5 对所有敌人随机造成<span style="color:#3aa675;font-weight:600">20</span>-<span style="color:#3aa675;font-weight:600">45</span>点伤害。本场每打出一次，最低值+<span style="color:#3aa675;font-weight:600">5</span>。<span style="color:#d44;font-weight:600">堕落</span><span style="color:#3aa675;font-weight:600">30%</span>。

## 小贴士

- **战斗内滚雪球**：每打出一次，下一次的最低伤害+<span style="color:#3aa675;font-weight:600">5</span>（计数在造成伤害后才+1，所以本次打出的仍是旧下限）。PP5 意味着一场战斗最多打 5 次，下限依次为 <span style="color:#3aa675;font-weight:600">10</span>→<span style="color:#3aa675;font-weight:600">15</span>→<span style="color:#3aa675;font-weight:600">20</span>→<span style="color:#3aa675;font-weight:600">25</span>→<span style="color:#3aa675;font-weight:600">30</span>，此后与上限 <span style="color:#3aa675;font-weight:600">30</span> 重合。注意计数每场战斗结束重置，下一场从 <span style="color:#3aa675;font-weight:600">10</span> 重新爬起。
- **每个敌人独立随机**：伤害对每个敌人单独掷骰（10-30 各 roll 各的），对群体时每个敌人都有机会吃到高伤，总伤期望 = 敌人数 × 平均值，多敌场合收益放大。
- **常规攻击伤害**：吃力量/[<span style="color:#d44;font-weight:600">易伤</span>](/powers/vulnerable_power.md)加成、可被格挡——先上易伤再连发，滚雪球效果更好。
- **升级抬高两端**：升级把区间从 10-30 抬到 20-45（下限 +10、上限 +15）。升级后的 5 连发下限为 <span style="color:#3aa675;font-weight:600">20</span>→<span style="color:#3aa675;font-weight:600">25</span>→<span style="color:#3aa675;font-weight:600">30</span>→<span style="color:#3aa675;font-weight:600">35</span>→<span style="color:#3aa675;font-weight:600">40</span>，此后逼近上限 <span style="color:#3aa675;font-weight:600">45</span>，收尾稳定且爆发更高。
- **堕落 30%：滚雪球连失控一起滚**：每次打出获得当前[堕落](/powers/fallen_power.md)×<span style="color:#3aa675;font-weight:600">30%</span>——按比例增长，堕落层数越高加得越多。堕落是负面机制，每满<span style="color:#3aa675;font-weight:600">100</span>层被[魔君接管](/powers/demon_takeover_power.md)强制乱打；配合 PP<span style="color:#3aa675;font-weight:600">5</span> 连打，伤害下限和堕落进度一起滚雪球，长局速通时要把失控阈值纳入节奏。
- **性价比**：1 费 AOE 自带成长，单场多次打出后质变为稳定高伤全体攻击，是普通牌里的多敌战主力；单体 Boss 战收益减半（只有一次掷骰），价值随敌人数量上升。

## 源码

- `SeerThousandShadowBind.cs`