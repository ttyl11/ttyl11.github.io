# 海棠教皇·未明

<img src="/images/relics/hai_tang_jiao_huang_wei_ming.png" alt="海棠教皇·未明" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 史诗（自定义稀有度）

### 数值参数

| 参数 | 数值 |
|---|---|
| 每朵海棠花的生命加值 | 2 |
| 满血增伤 | +50% |
| 暴击倍率 | ×1.5（与增伤叠乘，总倍率 ×2.25） |
| ③判定阈值 | 20 |
| 冰封回合 | 2 |
| 随机扣 PP | 1 |
| 海棠花：回合开始每朵减堕落 | 10 |
| 海棠花：回合结束回血 | 7 |
| 海棠花：回合结束回 PP | 共 4 点（随机分配） |

## 描述

①有牌被[消耗](/mechanics/exhaust.md)：获 <span style="color:#3aa675;font-weight:600">1</span> 朵**海棠花**。②生命不小于最大生命（额外 +<span style="color:#3aa675;font-weight:600">2</span>×海棠花）：伤害 +<span style="color:#3aa675;font-weight:600">50%</span> 且[必定暴击](/mechanics/critical-strike.md)。③攻击伤害 ><span style="color:#3aa675;font-weight:600">20</span>：该敌人[冰封](/powers/freeze_power.md)<span style="color:#3aa675;font-weight:600">2</span>；<<span style="color:#3aa675;font-weight:600">20</span>：随机牌 [PP](/mechanics/pp-system.md)-<span style="color:#e74c3c;font-weight:600">1</span>。

## 详细机制

### ① 有牌被消耗 → 1 朵海棠花

- **只算自己的牌**：判定条件是「被消耗的牌属于本遗物持有者」。队友的牌被消耗不算。
- **任意消耗来源都算**：主动消耗、[虚无](/mechanics/ethereal.md)牌回合结束自灭、[蚀返](/mechanics/shifan.md)类效果等，每消耗 1 张牌 → 海棠花 +1 朵。
- **花朵是战斗内计数**：层数记在能力「海棠花」上，随战斗结束清除，不跨场累积。
- **海棠花自身的效果**（能力自带，与遗物无关）：
  - 回合开始：每有 1 朵，减 <span style="color:#3aa675;font-weight:600">10</span> 层[堕落](/mechanics/fallen.md)（最多减到 0，不会减成负数）；
  - 回合结束：若**真实生命未满**，消耗 1 朵，恢复 <span style="color:#3aa675;font-weight:600">7</span> 点生命，并随机给 PP 不满的牌共恢复 <span style="color:#3aa675;font-weight:600">4</span> 点 PP（每点随机挑一张 +1，补满即止）。
  - 满血时不消耗花朵，花朵继续留着吃下回合的减堕落。

### ② 满血（含花朵加成）→ +50% 伤害 + 必定暴击

- **判定用的是"当前生命 + 2×花朵数"**：这个加成**只影响本遗物的满血判定**，不会真的改生命/最大生命。例：最大生命 100、当前生命 90、身上 5 朵花 → 判定值 90+10=100 ≥ 100，**算满血**。
- **只作用于自身的攻击伤害**：`dealer == 自己` 且为攻击类伤害（中毒/流血等 DoT 与固定伤害不算）。
- **必定暴击**：攻击结算**前**先给自身置上暴击标记，由暴击系统结算 ×1.5 并自动复位；此时若身上还没有暴击能力（战斗开局暴击能力尚未施加的瞬间），遗物会**直接补上 ×1.5 的倍率**，保证总倍率恒为 **×2.25**（1.5 增伤 × 1.5 暴击），不会因为暴击能力缺席而掉到 ×1.5。
- **因此花朵越多越容易"假满血"**：2 朵花 = 判定值 +4，等于把满血门槛往下挪 4 点。配合①的消耗攒花，能在掉血后继续吃满血增伤。

### ③ 攻击伤害高于/低于 20 的两种结算

- **只认自身的攻击伤害**：与②同口径，DoT 与固定伤害不触发。
- **判定用的是"实际造成的伤害"**：即经过力量/增伤/暴击/格挡等结算后真正打出去的那一下，而不是卡面标称值。
- **每次伤害实例各判一次**：多段攻击每段判一次、群体攻击对每个敌人各判一次（各自冰封）。
- **> 20**：对该敌人施加[冰封](/powers/freeze_power.md)<span style="color:#3aa675;font-weight:600">2</span> 回合。**只冰封敌人**——自身或队友受伤不触发。
- **< 20**：随机挑 1 张 **PP > 0** 的牌，PP -1。范围是**所有牌堆**（[抽牌堆](/mechanics/draw_pile.md)/[手牌](/mechanics/hand.md)/[弃牌堆](/mechanics/discard_pile.md)/[消耗堆](/mechanics/exhaust_pile.md)），可能扣到手牌里的关键牌。
- **恰好等于 20 时两个分支都不触发**。

## 风味文字

<span style="color:#d44;font-weight:600">海棠开处，教皇临世。</span>

## 小贴士

- **消耗流是天然搭档**：①只看"自己的牌被消耗"，所以带[虚无](/mechanics/ethereal.md)、主动消耗、[蚀返](/mechanics/shifan.md)的构筑能一回合攒出好几朵花——花朵既是②的满血筹码，也是回合开始的减[堕落](/mechanics/fallen.md)与回合结束的回血回 PP 来源。
- **②是"第二条命"**：满血判定放宽 2×花朵，意味着掉血后不必真回满就能继续吃 +50% 与必定暴击；花朵越多，容错越大。反之血量掉太多（超过 2×花朵的补偿）就只剩普通伤害了。
- **③是双刃**：伤害高（>20）时冰封敌人 2 回合，等于白送一轮控制；但打出小伤害（<20）会随机扣自己一张牌的 PP——多段小伤害的牌尤其容易触发扣 PP，出手前先想清楚这回合是想控制还是想省 PP。
- **①与③能接成一条循环**：起始遗物[群星的礼赠](/relics/starter/elemental_core.md)自带一条规则——**回合结束时，PP 被耗到 0 的 PP 牌会被消耗**。所以③把某张牌扣到 0 PP 后，它回合结束就会被消耗，反手给①喂 1 朵花。小伤害并非全是坏事：扣 PP → 消耗 → 攒花，能自洽。
- **减堕落是白送的**：花朵在回合开始会自动削[堕落](/mechanics/fallen.md)（每朵 10 层），配[堕落](/mechanics/fallen.md)类构筑时，攒花本身就等于给自己装了半个净化器。
- **注意满血判定与真实血量是两套**：②判定成立**不会**真的回血，也不会改最大生命——它只是一个"是否吃加成"的开关。

## 相关能力 / 机制

- **海棠花**（①获得；回合开始每朵减 10 堕落、回合结束未满血则消耗 1 朵回 7 生命 + 共 4 点 PP）
- [冰封](/powers/freeze_power.md)（③施加给敌人）
- [堕落](/mechanics/fallen.md)（海棠花回合开始削减）
- [消耗](/mechanics/exhaust.md)、[虚无](/mechanics/ethereal.md)、[蚀返](/mechanics/shifan.md)（①的触发来源）
- [必定暴击](/mechanics/critical-strike.md)、[PP 系统](/mechanics/pp-system.md)

## 相关遗物

- [枫落殇·西叶](/relics/epic/feng_luo_shang_xi_ye.md)（同为"堕落 / 消耗"体系的史诗遗物）
- [坦普瑞](/relics/epic/tan_pu_rui.md)（同样围绕 PP 值做文章的史诗遗物）

## 源码

- `SeerHaiTangJiaoHuangWeiMing.cs`
- `SeerBegoniaFlowerPower.cs`（海棠花能力）
