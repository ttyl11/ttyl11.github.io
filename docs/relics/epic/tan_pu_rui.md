# 坦普瑞

<img src="/images/relics/tan_pu_rui.png" alt="坦普瑞" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 史诗

### 数值参数

| 参数 | 数值 |
|---|---|
| 降 PP 间隔 | 每堕落 5 → 1 次 |
| 恢复 PP | 每张 0PP 牌 → 全体 +1 |
| 随机属性 | 力量/防御/命中/速度 +1 |
| 额外抽牌阈值 | 0PP 牌 > 3 |

## 描述

①回合结束时，每[堕落](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">5</span>，随机 <span style="color:#3aa675;font-weight:600">1</span> 张牌 PP<span style="color:#e74c3c;font-weight:600">-1</span>。②回合开始时，每有 <span style="color:#3aa675;font-weight:600">1</span> 张牌 PP 为 <span style="color:#3aa675;font-weight:600">0</span>，所有牌恢复 <span style="color:#3aa675;font-weight:600">1</span> 点 PP 并随机属性+<span style="color:#3aa675;font-weight:600">1</span>。若 PP 为 <span style="color:#3aa675;font-weight:600">0</span> 的牌超过 <span style="color:#3aa675;font-weight:600">3</span> 张，额外抽等量张牌并获得等量能量。

## 详细机制

- **堕落越低越好的"反向代价"**：回合结束时按当前[堕落](/powers/fallen_power.md)层数结算，每 5 层堕落随机挑 1 张**PP > 0 的牌**降 1 点 PP（最低降到 0，不会再负）。堕落 5~9 每回合降 1 张、堕落 10~14 降 2 张，以此类推——堕落越高，牌组 PP 被削得越狠。
- **回合开始按 0PP 牌数"全体 +1"**：统计当前战斗内所有 **有 PP 上限且当前为 0** 的牌的数量 n（本身没有 PP 概念的牌不计入，如普通打击/防御），然后**循环 n 次**：所有未满 PP 的牌各 +1、随机属性（力量/防御/命中/速度四维之一）+1。n 张 0PP 牌 = 全体 PP +n、随机属性 +n（可能集中砸同一维）。
- **额外抽牌/能量是独立档位**：只要 0PP 牌 > 3 张（n ≥ 4），额外抽 n 张牌并获得 n 点能量——与前面的"全体 +1"并行，不互相抵消。n 越大，这一口过牌+能量越足。
- **0PP 牌是"燃料"**：触发源是"PP 为 0 的牌"——[虚无](/cards/basic/void_nothingness.md)牌（PP 1/1，打出后降为 0）、刚被打空 PP 的牌都会喂燃料。恢复效果会把它们抬离 0，但下回合打空又会重新触发，形成循环。
- **属性是四维随机**：随机属性在[力量](/powers/strength_power.md)、[防御](/powers/defense_power.md)、[命中](/powers/accuracy_power.md)、[速度](/powers/speed_power.md)四个维度里随机一个 +1，多次触发可能重复堆在同一维。

## 小贴士

- **控堕落就是控牌组**：这条遗物把"堕落"变成双刃剑——堕落既是资源（低层数没事），又是负担（5 层开始削 PP）。想保住 PP 牌的质量，要么压低堕落（少用堕落卡/遗物），要么接受"每回合随机废 1 张 PP 牌"的代价换堕落带来的其它收益。
- **0PP 是发电机**：牌组里只要有几张常驻 0PP 的牌（虚无牌、被降到 0 的牌），每回合稳定全体 PP +n + 属性 +n；堆到 4 张以上还白送 4+ 张牌和 4+ 能量——"以 0PP 换全局资源"是核心玩法。
- **与虚无牌天然契合**：虚无牌 PP 为 1/1，打出后降到 0，是这条遗物稳定的每回合燃料：回合开始被②回满后，再打空即可再次计数。带几张虚无牌（如[虚无](/cards/basic/void_nothingness.md)系），每回合都能吃满全体 +PP 和抽牌能量。
- **降 PP 与恢复的拉锯**：回合结束削 PP、回合开始回 PP，两件事互相抵消一部分——实际净效果是"0PP 牌越多，回得越多；堕落越高，削得越多"。数值上全体 +n 通常大于被削的 1~2 张，总体是正收益，但别让堕落失控。
- **前中期偏软后期爆发**：0PP 牌少时（0~3 张）只有全体 +1~3 和随机属性；一旦超过 3 张进入额外抽牌档，过牌量直接起飞，是后期成型后的大资源引擎。

## 相关能力

- [堕落](/powers/fallen_power.md)（①结算的计数源）
- [力量](/powers/strength_power.md)/[防御](/powers/defense_power.md)/[命中](/powers/accuracy_power.md)/[速度](/powers/speed_power.md)（②随机属性四维）

## 相关遗物

- [缔笙](/relics/epic/di_sheng.md)（自愈系，与坦普瑞的资源循环互补）
- [御象灵尊](/relics/epic/yu_xiang_ling_zun.md)（同为"回合开始结算"型遗物，叠加速度接近）

## 源码

- `SeerTanPuRui.cs`
