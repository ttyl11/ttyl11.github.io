# 银雾之翼

<img src="/images/cards/silver_mist_wing.png" alt="银雾之翼" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 攻击
- **稀有度**: 罕见
- **目标**: 敌方单体
- **关键词**: [炼狱](/mechanics/purgatory.md)、[消强](/mechanics/xiao_qiang.md)
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害 | 5 | 10 |
| 神耀能量 | 1 | 1 |
| 暴击神耀能量 | 2 | 2 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

[<span style="color:#d4a017;font-weight:600">炼狱</span>](/mechanics/purgatory.md)。PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 造成<span style="color:#3aa675;font-weight:600">5</span>点伤害。消除对手[<span style="color:#d4a017;font-weight:600">全属性</span>](/mechanics/all_attributes.md)提升。获得<span style="color:#3aa675;font-weight:600">1</span>层[<span style="color:#9b59b6;font-weight:600">神耀能量</span>](/powers/divine_energy_power.md)，打出[<span style="color:#d4a017;font-weight:600">暴击</span>](/powers/critical_strike_power.md)时获得<span style="color:#3aa675;font-weight:600">2</span>层。

## 升级后

[<span style="color:#d4a017;font-weight:600">炼狱</span>](/mechanics/purgatory.md)。PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 造成<span style="color:#3aa675;font-weight:600">10</span>点伤害。消除对手[<span style="color:#d4a017;font-weight:600">全属性</span>](/mechanics/all_attributes.md)提升。获得<span style="color:#3aa675;font-weight:600">1</span>层[<span style="color:#9b59b6;font-weight:600">神耀能量</span>](/powers/divine_energy_power.md)，打出[<span style="color:#d4a017;font-weight:600">暴击</span>](/powers/critical_strike_power.md)时获得<span style="color:#3aa675;font-weight:600">2</span>层。

## 小贴士

- **一牌三用的控场攻击**：这张牌同时做三件事——打伤害、清对手增益、给自己叠防御减伤。1 费打出相当于一次实体攻击 + 一次净化 + 一次自我强化，密度极高。
- **只清正数层数的全属性**：消除对手身上层数为正的[力量](/powers/strength_power.md)、[命中](/powers/accuracy_power.md)、[防御](/powers/defense_power.md)、[速度](/powers/speed_power.md)。负数层数（即对手自身的减益）不会被动到，所以这张牌是纯净化工具，不是反向利用。面对靠叠力量爆发的 Boss（如各种狂暴型精英），一费把它的增益清空等于废掉它一回合的输出。
- **神耀能量是防御性增益**：分类为增益，效果是**每层减少自身受到的攻击伤害 12%，上限 6 层（共 72%）**。叠满后近 3/4 的攻击伤害被吃掉，等同于一张常驻的高额减伤。注意它只对攻击伤害生效，[固定伤害](/powers/fixed_damage_power.md)等非攻击伤害不受影响。
- **暴击翻倍神耀能量**：若此次攻击触发[暴击](/powers/critical_strike_power.md)，神耀能量获取从 1 层变 2 层。配合暴击体系（如堆暴击率的能力/遗物）能更快叠到 6 层上限，是这张牌的成长路径。
- **炼狱：伤害翻倍 + 随机自染**：[炼狱](/mechanics/purgatory.md)让此牌的攻击伤害 ×<span style="color:#3aa675;font-weight:600">2</span>——基础 <span style="color:#3aa675;font-weight:600">5</span> 实际按 <span style="color:#3aa675;font-weight:600">10</span> 结算，升级后 <span style="color:#3aa675;font-weight:600">10</span> 按 <span style="color:#3aa675;font-weight:600">20</span>；代价是打出时对自己施加随机 1 种[异常状态](/mechanics/abnormal-status.md)持续 5 回合，需净化手段配合。
- **升级伤害跃升**：伤害从 <span style="color:#3aa675;font-weight:600">5</span> 提到 <span style="color:#3aa675;font-weight:600">10</span>，配合炼狱翻倍达到 <span style="color:#3aa675;font-weight:600">20</span>，让这张牌从"工具牌"变成"工具 + 实打实的输出"。功能完全不变，升级优先级中等——先升主力输出牌再升它。
- **性价比**：1 费换"清增益 + 自叠减伤 + 可观伤害"非常划算，面对增益型 Boss 时是关键解牌。炼狱抬高上限但需容忍随机异常代价。

## 相关能力

- [神耀能量](/powers/divine_energy_power.md)（自身减伤增益）
- [暴击](/powers/critical_strike_power.md)（触发翻倍条件）

## 相关机制

- [全属性](/mechanics/all_attributes.md)（消除对手提升的核心机制）
- [炼狱](/mechanics/purgatory.md)（伤害翻倍 + 自身随机异常的代价关键词）

## 源码

- `SeerSilverMistWing.cs`