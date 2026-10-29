# 枫眠

<img src="/images/relics/maple_sleep.png" alt="枫眠" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 稀有

### 数值参数

| 参数 | 数值 |
|---|---|
| HealAmount（回复生命） | 3 |
| PpRestore（恢复PP） | 1 |
| BurnTurns（施加烧伤层数） | 2 |

## 描述

回合开始时，若自身无任一属性提升，下次攻击必定暴击。<br/>对每个敌人：若有属性提升，消除之并施加<span style="color:#3aa675;font-weight:600">2</span>层<span style="color:#d44;font-weight:600">烧伤</span>；若无属性提升，施加<span style="color:#3aa675;font-weight:600">2</span>层<span style="color:#d44;font-weight:600">烧伤</span>，若失败则消除其所有<span style="color:#d4a017;font-weight:600">增益</span>。<br/>回合结束时，若双方任意一方处于<span style="color:#d44;font-weight:600">异常状态</span>，回复<span style="color:#3aa675;font-weight:600">3</span>点生命，恢复消耗牌堆中随机1张卡牌<span style="color:#3aa675;font-weight:600">1</span>点<span style="color:#d4a017;font-weight:600">PP</span>。

- **敌人处理**：对每个敌人，若有属性正值则消除其正值属性并施加 <span style="color:#3aa675;font-weight:600">2</span> 层[烧伤](/powers/burn_power.md)；若无属性正值则施加 <span style="color:#3aa675;font-weight:600">2</span> 层[烧伤](/powers/burn_power.md)，若敌人免疫烧伤则清空其所有可见增益。
- **回合结束回复**：若自身或任一敌人处于[异常状态](/mechanics/abnormal-status.md)，回复 <span style="color:#3aa675;font-weight:600">3</span> 点生命，并从消耗堆随机选 1 张 PP 未满的 PP 牌恢复 <span style="color:#3aa675;font-weight:600">1</span> 点 PP。

## 风味文字

<span style="color:#d44;font-weight:600">枫眠。</span>

## 小贴士

- **对敌人的两套拆解逻辑不对称**：敌人有属性正值 → 只把四种属性的**正值部分**归零（其他增益如再生留着）+ 挂 2 层烧伤；敌人无属性正值但**免疫烧伤** → 清空其**所有可见增益**（不限于四种属性）。前者是精确狙杀属性增益，后者是免疫惩罚——别指望靠"故意不触发烧伤"骗全清，免疫是敌人的被动不是你的选择。
- **烧伤的真实输出：每敌每回合 3 点不可格挡磨血**：[烧伤](/powers/burn_power.md)每层在敌方回合开始造成 3 点不可格挡掉血并消耗 1 层（层数是持续时间不是强度），同时让敌人的攻击伤害**固定 -1**。枫眠每回合 +2 层、每回合只烧掉 1 层——烧伤永续不断档：每个敌人每回合稳定吃 3 点真伤、攻击永久 -1。多敌人战斗里这份磨血和减伤相当扎实。
- **回合结束的回血几乎是"每回合必发"**：触发条件是"自身或任一敌人处于异常状态"——而你每回合都在给所有敌人挂烧伤（烧伤就是异常状态），所以**回复 3 生命基本等于无条件每回合触发**，一场 10 回合的战斗白拿 30 点回复。
- **PP 回收只作用于消耗堆里的 PP 牌**：从消耗堆随机挑 1 张"PP 未满的 PP 牌"回 1 点 PP（牌留在消耗堆里不回手）。对能从消耗堆打牌的效果（如[万剑归一](/cards/character/myriad_swords_unity.md)自动从消耗堆打君王之剑）来说，这些 PP 是实打实的弹药；配合主动消耗 PP 牌的卡组才是完整收益，没有这类配合时这条等于白板。
- **构筑相性**：枫眠的核心是"每回合给全体敌人挂烧伤 + 消除属性增益"——对叠属性的敌人是精确拆解，对免疫烧伤的敌人是清增益惩罚。它不要求你自身属性状态，纯被动运转，配合任何牌组都能稳定提供磨血、减攻和每回合回血。

## 源码

- `SeerMapleSleep.cs`
