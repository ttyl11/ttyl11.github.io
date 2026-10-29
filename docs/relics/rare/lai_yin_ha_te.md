# 莱茵哈特

<img src="/images/relics/lai_yin_ha_te.png" alt="莱茵哈特" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 稀有
- **进化链**: [小特](/relics/common/xiao_te.md) → [莱茵](/relics/uncommon/lai_yin.md) → [莱茵哈特] → [混沌地王·莱茵哈特](/relics/epic/hun_dun_di_wang_lai_yin_ha_te.md) / [混灵·莱茵哈特](/relics/epic/hun_ling_lai_yin_ha_te.md)

### 数值参数

| 参数 | 数值 |
|---|---|
| ①消强获得格挡 | +12 |
| ②格挡消失给固伤 | 所有敌人 10 固定伤害 |
| ③精英战场次 | 3 场 |
| ③判定 | 「施加（格挡+固伤）」≥「伤害（攻击伤害）」→ 混沌地王·莱茵哈特，否则 → 混灵·莱茵哈特 |

## 描述

①<span style="color:#d4a017;font-weight:600">能力提升</span>降至<span style="color:#3aa675;font-weight:600">0</span>或以下，获<span style="color:#3aa675;font-weight:600">12</span><span style="color:#d4a017;font-weight:600">格挡</span>。<br/>②<span style="color:#d4a017;font-weight:600">格挡</span>非回合结束消失，对所有敌人施加<span style="color:#3aa675;font-weight:600">10</span><span style="color:#d4a017;font-weight:600">固定伤害</span>。<br/>③<span style="color:#3aa675;font-weight:600">3</span>场<span style="color:#d4a017;font-weight:600">精英战</span>，剩<span style="color:#3aa675;font-weight:600"></span>场，统计施加<span style="color:#d4a017;font-weight:600">格挡</span>+<span style="color:#d4a017;font-weight:600">固定伤害</span><span style="color:#3aa675;font-weight:600">0</span>与<span style="color:#d4a017;font-weight:600">伤害</span><span style="color:#3aa675;font-weight:600">0</span>。前者≥后者升级为<span style="color:#d4a017;font-weight:600">混沌地王·莱茵哈特</span>，否则<span style="color:#d4a017;font-weight:600">混灵·莱茵哈特</span>。

## 详细机制

- **①"能力提升降为 0 或以下"触发**：四维（力量/防御/命中/速度）正提升的**总和**从 >0 降为 0 时触发一次，获得 12 格挡（`Creature.PowerApplied` / `PowerIncreased` / `PowerDecreased` / `PowerRemoved` 事件都会重算总量；负层能力继续下降走 `PowerIncreased`）。单维归零但仍有其它正提升时不触发。**同一次净化连移四维**只按总量归零结算一次——不会四维连过导致 4×12=48 格挡。
- **①"降至0"与"被移除"都算**：四维正提升被直接移除（净化/消buff），或降到 0 以下（被压低），只要**四维正提升总和归零**就触发；只移除其中一维、其余仍有正层时不算；原本就是负值的能力被移除不算（只认正层衰减）。
- **②"格挡非回合结束消失"定义**：指回合内**自消、被攻击击破、被技能消除**等非回合切换自然清空的格挡消失情况。**回合切换自然清空不算**。触发时对所有敌人施加 10 [固定伤害](/powers/fixed_damage_power.md)。
- **③精英战计数**：累计进行 **3 场精英战**，每场在**胜利结算后**扣减（只剩普通战斗、Boss 不计）。角标/描述实时显示剩余场次以及两项累积值：
  - **施加（格挡+固伤）**：精英战内你获得的格挡总量 + 你施加的固定伤害总量（只统计精英战内、且由你或你的宠物执行的）。
  - **伤害（攻击伤害）**：精英战内你的**攻击伤害**总量（只算受攻击强度影响的攻击伤害；不统计固定伤害/中毒等）。
  - 判定只发生在第 3 场精英战胜利结算时：**格挡+固伤 ≥ 伤害 → [混沌地王·莱茵哈特](/relics/epic/hun_dun_di_wang_lai_yin_ha_te.md)；否则 → [混灵·莱茵哈特](/relics/epic/hun_ling_lai_yin_ha_te.md)**（平局进混沌地王）。

## 小贴士

- **想走"混沌地王"线（防御控制流）**：③要你**格挡+固伤 ≥ 攻击伤害**——多用格挡牌、能力牌、固定伤害牌，少打攻击牌。②的"格挡被打掉→敌人吃固伤"天然堆固伤计数，配合高格挡构筑，3 战后稳稳进混沌地王。
- **想走"混灵"线（进攻召唤流）**：③要你**攻击伤害 > 格挡+固伤**——中规中矩的攻击流即可，3 场精英战打出高攻击伤害就进混灵。适合已有攻击体系、不想为遗物改变打法的牌组。
- **①吃"被消强"的亏也赚**：敌人/技能把你的四维正提升**全部**消光时，等于送你 12 格挡——消强的一方反倒是帮你续航。只消掉一两维、其余维度仍有正层时不会触发①。
- **②是被动反制输出**：格挡被打掉是"坏事"，但落你头上就变成"所有敌人吃 10 固伤"——回合内滥用格挡、被打破都白送一次群体固伤，敌方攻击越勤，②触发越频繁。
- **精英战不是本遗物独有机制**：只要你在跑精英房，3 场就自动结算进化，不用主动操作；3 场内若中断（翻车/跳过）则场次保留、下次继续原进度。

## 相关能力 / 机制

- [固定伤害](/powers/fixed_damage_power.md)（②施加 / ③计数）
- [格挡](/mechanics/block.md)（①获取 / ②/③计数）
- 能力提升（四维正层数之和，①触发来源）

## 进化链

- 上一环：[莱茵](/relics/uncommon/lai_yin.md)（累计施加 200 固定伤害后进化而来）
- 下一环：[混沌地王·莱茵哈特](/relics/epic/hun_dun_di_wang_lai_yin_ha_te.md) / [混灵·莱茵哈特](/relics/epic/hun_ling_lai_yin_ha_te.md)（3 场精英战后按统计结果进化）

## 源码

- `SeerLaiYinHaTe.cs`