# 宝剑

<img src="/images/cards/sword.png" alt="宝剑" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 无色牌
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 罕见
- **目标**: 无
- **可升级**: 否

### 数值参数

| 参数 | 数值 |
|---|---|
| 铸造数值 | 10 |
| 重放次数 | 3 |

## 描述

[<span style="color:#d4a017;font-weight:600">铸造</span>](/mechanics/forge.md)<span style="color:#3aa675;font-weight:600">10</span>，[<span style="color:#d4a017;font-weight:600">消耗</span>](/mechanics/exhaust.md)[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)中所有<span style="color:#d4a017;font-weight:600">君王之剑</span>。[<span style="color:#d4a017;font-weight:600">重放</span>](/mechanics/replay.md)<span style="color:#3aa675;font-weight:600">3</span>次。

## 小贴士

- **🔑 一次打出 = 4 段铸造**：自身 1 段 + 重放 3 段，每段都完整执行「铸造 10 → 消耗手牌中所有君王之剑」，单张宝剑合计 **+40 铸造值**。
- **铸造是 1 次事件、不是 10 次**：每段只触发 1 次铸造事件，给**所有**君王之剑各 +10 伤害（含已进消耗堆的）；按铸造**事件次数**结算的联动（如[圣耀明瞳斩](/cards/colorless/holy_eye_slash.md)）只认 4 次，不认 40。
- **剑越铸越肥**：4 段铸造依次叠加——起手一把剑都没有时，四段结束消耗堆里是伤害 <span style="color:#3aa675;font-weight:600">50/40/30/20</span> 的四把君王之剑（先造的吃满后续铸造）。
- **每段通常会补一把新剑（有条件）**：铸造前若场上**没有未消耗**的君王之剑，会新建 1 把入手（基础 10 伤 + 本次铸造 10 = 20 伤）。宝剑每段都把手中剑全消耗，所以下一段通常又满足"无剑"条件，4 段就产出 4 把；若抽牌堆/弃牌堆还躺着未消耗的剑，则不会新建，只强化已有的那些。
- **消耗是硬性清手**：每段都把手中君王之剑送进消耗堆——想留住剑输出，就得在打宝剑前先把手牌里的剑打出去。
- **君王之剑本体**：2 费衍生攻击、基础 <span style="color:#3aa675;font-weight:600">10</span> 伤、带[保留](/mechanics/retain.md)，是铸造体系的弹药；宝剑负责造剑与养剑，本身不造成伤害。
- **获取**：属于无色牌池，可从无色牌奖励/商店等无色渠道获得；[万剑归一](/cards/character/myriad_swords_unity.md)额外免费生成 3 张 **0 费**宝剑（战斗内衍生，战后消失，不进牌组）。

## 源码

- `SeerSword.cs`
