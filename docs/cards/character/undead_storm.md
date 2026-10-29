# 亡灵风暴

<img src="/images/cards/undead_storm.png" alt="亡灵风暴" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 10
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 稀有
- **目标**: 所有敌方
- **标签**: 亡灵契约师
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 灾厄层数 | 4 | 8 |
| 奥斯提最大生命增量 | 9 | 9 |
| 堕落 | 3 | 3 |
| PP | 10 | 10 |
| 最大PP | 10 | 10 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> 奥斯提最大生命<span style="color:#3aa675;font-weight:600">+9</span>（不在场则以此值召唤/复活）。随机选一个生物，赋予其<span style="color:#3aa675;font-weight:600">4</span>层[<span style="color:#9b59b6;font-weight:600">灾厄</span>](/powers/doom_power.md)，直至所有生物均有灾厄。[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">3</span>。

## 升级后

PP: 10/10 <span style="color:#d4a017;font-weight:600">召唤</span><span style="color:#3aa675;font-weight:600">9</span>。随机选一个生物（含自身与队友）赋予<span style="color:#3aa675;font-weight:600">8</span>层<span style="color:#d4a017;font-weight:600">灾厄</span>，直至所有生物均有<span style="color:#d4a017;font-weight:600">灾厄</span>。<span style="color:#d44;font-weight:600">堕落</span><span style="color:#3aa675;font-weight:600">3</span>。

## 小贴士

- **奥斯提最大生命 +9 养成**：打出即让奥斯提最大生命 +9（不在场则以 9 HP 召唤/复活）——奥斯提越养越厚是亡灵契约师体系的核心成长线，为后续按奥斯提最大生命值结算的卡牌（[夜·冥昭瞢闇](/cards/colorless/dark_oblivion.md)、[核威强袭](/cards/token/nuclear_assault.md) 等）创造巨大空间。
- **灾厄是从全场生物里随机反复抽**：每次从**所有生物**（自己、队友、敌人、奥斯提）中随机选一个，施加 <span style="color:#3aa675;font-weight:600">4</span>（升级 <span style="color:#3aa675;font-weight:600">8</span>）层灾厄；只要还有生物身上没有灾厄，就继续抽。允许重复命中同一目标——运气差时可能自己或某个敌人被叠很多层，也可能因 50 次尝试上限提前停止（极端情况）。它**不是**"只给敌人挂"，自己也会被挂上。
- **灾厄是斩杀线，也会反噬自己**：灾厄在**持有者所在阵营回合结束**时结算——若其当前生命不高于灾厄层数，直接死亡，无视[格挡](/mechanics/block.md)。所以先压血再挂灾厄，让斩杀线覆盖敌人血量，能跨甲收割；但自己身上被随机叠了灾厄时，同样会在**自己回合结束**被判死，血线低时要格外小心。
- **升级灾厄翻倍是核心**：升级把每次赋予层数从 <span style="color:#3aa675;font-weight:600">4</span> 提到 <span style="color:#3aa675;font-weight:600">8</span>，斩杀线直接翻倍，能威胁更多残血敌人；奥斯提最大生命增量不变。升级收益集中在数值爆发。
- **堕落 3：全场最低的暗账**：每次打出 +<span style="color:#3aa675;font-weight:600">3</span>[堕落](/powers/fallen_power.md)，PP<span style="color:#3aa675;font-weight:600">10</span> 打满也才 30 层——堕落是负面机制，每满<span style="color:#3aa675;font-weight:600">100</span>层被[魔君接管](/powers/demon_takeover_power.md)强制乱打，但 3 层几乎可忽略，是完全不用顾虑的档位，可以放心反复铺灾厄。
- **性价比**：<span style="color:#3aa675;font-weight:600">1</span> 费换来 <span style="color:#3aa675;font-weight:600">9</span> 点奥斯提最大生命增量 + 全场随机灾厄覆盖，亡灵契约师体系里的强力群压件，但"自己也会被挂灾厄"让它带有明显反噬风险，稀有稀有度合理。

## 相关能力

- [灾厄](/powers/doom_power.md)（回合结束时生命不高于灾厄值则立即死亡）
- [堕落](/powers/fallen_power.md)（每打出一次固定 +3 层）

## 相关机制

- [召唤](/mechanics/summon.md)（奥斯提最大生命 +9）
- [堕落](/powers/fallen_power.md)（满 100 层触发魔君接管）

## 源码

- `SeerUndeadStorm.cs`