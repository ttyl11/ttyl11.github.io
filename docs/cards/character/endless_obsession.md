# 无终痴念

<img src="/images/cards/endless_obsession.png" alt="无终痴念" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 罕见
- **目标**: 自身
- **关键词**: [预见](/mechanics/scry.md)
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 每抽堕落 | 7 | 7 |
| 最大抽牌数 | 20 | 20 |
| 预见数量 | 3 | 3 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: 5/5 [<span style="color:#d4a017;font-weight:600">预见</span>](/mechanics/scry.md)<span style="color:#3aa675;font-weight:600">3</span>。抽牌直到抽到能力牌，每抽一张[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">7</span>。

## 升级后

PP: 5/5 [<span style="color:#d4a017;font-weight:600">预见</span>](/mechanics/scry.md)<span style="color:#3aa675;font-weight:600">3</span>。抽牌直到抽到能力牌，每抽一张[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">7</span>。

> 升级后耗能降至 <span style="color:#3aa675;font-weight:600">0</span>。

## 小贴士

- **核心定位——检索能力牌 + 顺带爆抽**：本意是把牌组里的能力牌"放走"（抽到手）——循环抽牌，每张都进手牌，直到抽中能力牌才停。注意**中途抽到的所有牌都留在手牌**，能力牌只是"停止信号"——所以这张牌不只是检索，更是一台爆抽引擎：能力牌藏得越深，你白赚的手牌越多。
- **7 堕落/张的代价核算**：每抽一张 +<span style="color:#3aa675;font-weight:600">7</span>[堕落](/powers/fallen_power.md)，不扣体力——比原来的"1 血/张"友好得多，但也换了个更隐蔽的代价：堕落是负面机制，每跨过 100 层都会被[魔君接管](/powers/demon_takeover_power.md)强制乱打手牌。连抽 8~9 张（56~63 层）就接近半程失控阈值，抽得越多、失控越近——爆抽引擎和堕落推进是同一枚硬币的两面。
- **抽牌机制细节**：循环上限 <span style="color:#3aa675;font-weight:600">20</span> 次，每次抽 1 张后加堕落、再检查新抽的牌是否为能力牌，抽中即停（**命中能力牌的那一张同样加堕落**）。**手牌抽满会提前中断**（抽的牌进不了手牌即停）——所以实际连抽数 = 打出时的手牌空位，空手牌打出最多连抽 10 张即满手，"20 连抽"只在手牌不断被消耗的场合才接近。若牌组+弃牌堆里一张能力牌都没有，循环会一路抽到满手或 20 次耗尽（最多加 140 层堕落）后自动停止，不会卡死。抽牌堆抽空会自动洗牌，不会中断循环。
- **预见的用途**：[预见](/mechanics/scry.md) 3 让你先看[抽牌堆](/mechanics/draw_pile.md)顶 3 张牌，可选择弃置。它有两个用法：把顶部的非能力牌弃掉能让循环更快命中能力牌（少抽少加堕落）；或者留着顶部的关键牌不弃，让循环按原顺序推进。预见的弃牌进弃牌堆，**不消耗**抽牌循环的堕落（也不触发堕落）。
- **配合建议**：
 - **能力牌体系**：卡组能力牌密度越高，命中越快——即使能力牌在深处，多抽的手牌也是净收益，不存在"检索失败"的窘境（但要留意抽得多时堕落阈值逼近）。
 - **大手牌联动**：爆抽出的手牌配合"手牌数量"相关效果（如弃牌、连击体系）收益放大。
 - **堕落管理**：这张牌单次打出就可能加 20~60 层堕落，尽量在靠近 100 层倍数触发前规划——被接管前把手牌清到只剩想打的牌，让"失控"帮自己输出。
- **升级的关键性**：耗能从 <span style="color:#3aa675;font-weight:600">1</span> 降至 <span style="color:#3aa675;font-weight:600">0</span>。0 费爆抽不占能量，任意回合可用，性价比大幅提升。升级优先级高。
- **性价比**：1 费换"定向检索 + 满手爆抽"（打出时手牌越少赚得越多），每次打出另耗 1 PP（PP 5 = 单场最多 5 次）；代价从扣体力改为每张 <span style="color:#3aa675;font-weight:600">7</span> 层堕落——不伤血但推进失控进度，只要管好堕落层数，几乎稳赚不亏。罕见稀有度合理——这种检索+爆抽复合能力本就稀缺。

## 相关机制

- [预见](/mechanics/scry.md)（mod 关键词，预见 3）
- [堕落](/powers/fallen_power.md)（每抽一张 +7 层，每跨过 100 层触发魔君接管）

## 源码

- `SeerEndlessObsession.cs`
