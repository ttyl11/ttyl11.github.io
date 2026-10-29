# 暴击

暴击是 Seer Mod 独有的伤害放大机制。与原版的"力量/易伤"等增伤不同，暴击是**概率触发的固定倍率放大**，触发率由[命中](/powers/accuracy_power.md)提供、由[锁定](/powers/lock_one_power.md)系能力保底。

::: tip 暴击 vs 力量
力量是"每次攻击 +N"的加法增伤；暴击是"概率 ×1.5"的独立乘区。暴击与力量、虚弱、易伤在同一个伤害公式里**相乘结算**——暴击不会绕过它们，也不会被它们抵消。
:::

---

## 基础规则

| 参数 | 默认值 |
| --- | --- |
| 基础暴击率 | <span style="color:#3aa675;font-weight:600">0</span>（由[命中](/powers/accuracy_power.md)提供：每层 +<span style="color:#3aa675;font-weight:600">10%</span>） |
| 暴击倍率 | ×<span style="color:#3aa675;font-weight:600">1.5</span> |
| 能力类型 | 中性（不是 Buff 也不是 Debuff） |

### 关键特性

- **不被清除**：暴击能力是中性类型，不会被消除 Buff/Debuff 类效果清除
- **只影响攻击伤害**：暴击只修正攻击伤害，不影响持续伤害、固定伤害、充能球伤害等
- **乘法结算**：暴击在伤害计算的乘法阶段生效，与力量（加法）、虚弱/易伤（乘法）链式相乘，不是互相覆盖
- **触发率实时结算**：[命中](/powers/accuracy_power.md)层数增减立刻影响下一次攻击的暴击率
- **跟随来源存在**：没有任何暴击率来源的单位身上没有暴击能力，也不会暴击——首次获得暴击率来源（正命中、锁定、必定暴击类效果）时自动获得

## 触发流程

1. **计算触发率**：`max(锁定档位, 命中层数 × 10%)`
2. **攻击前**：掷骰判定本次攻击是否暴击——达到 <span style="color:#3aa675;font-weight:600">100%</span> 时直接判定暴击（不掷骰），为 <span style="color:#3aa675;font-weight:600">0</span> 时直接判定不暴击（不掷骰）
3. **伤害计算**（乘法伤害修正阶段）：若判定为暴击，伤害 ×<span style="color:#3aa675;font-weight:600">1.5</span>
4. **攻击后**：重置暴击标记，准备下次判定

::: tip 判定时机
暴击判定在攻击前完成，一旦判定本次攻击为暴击，则该次攻击的所有伤害段都享受 ×1.5 倍率。
:::

---

## 暴击率来源

| 来源 | 效果 |
| --- | --- |
| [命中](/powers/accuracy_power.md) | 每层 +<span style="color:#3aa675;font-weight:600">10%</span> 暴击率（仅正层；负层不提供暴击率） |
| [锁定I](/powers/lock_one_power.md) | 暴击率**至少** <span style="color:#3aa675;font-weight:600">50%</span>（可被更高的命中推高） |
| [锁定II](/powers/lock_two_power.md) | 暴击率**至少** <span style="color:#3aa675;font-weight:600">100%</span>（必定暴击，不再掷骰） |

::: warning 下限取高，不是相加
锁定与命中**取高**：命中 12 层（120%）+ 锁定I → 100%（封顶）；命中 6 层（60%）+ 锁定I → 60%。
:::

::: info "要害"是独立体系
[要点探寻I](/powers/key_one_power.md)的"15% 概率伤害翻倍（×2）"**不属于暴击系统**——它有独立的判定与倍率，不触发"暴击时"联动，也不受本页规则影响。
:::

## 强制暴击

部分效果可以**强制暴击**——写入暴击判定，触发全部"暴击时"联动；来源在场期间，暴击率显示直接为 <span style="color:#3aa675;font-weight:600">100%</span>。**本地化写"暴击"的效果一律按真暴击结算**（2026-09-30 统一）：

- **常驻**：[北冥之刃 / 北冥狂刃](/relics/epic/huo_guang.md)（火光遗物，持有期间所有攻击必定暴击）、[海棠教皇·未明](/relics/epic/hai_tang_jiao_huang_wei_ming.md)（生命满足条件时必定暴击）
- **回合型**：[幻影蝶](/relics/uncommon/phantom_butterfly.md)（下场战斗 2 回合[回合必定暴击](/powers/turn_guaranteed_crit_power.md)）、[幽冥帝尊·修罗](/relics/rare/nether_emperor.md)（生命低于阈值时本回合必暴）
- **次数型**：[冲天霸气](/powers/tiger_crit_counter_power.md)（泰格尔招式，下 2 次）、[君临天下](/powers/octagon_debt_power.md)（持续期间）
- **单次型（下次攻击必暴）**：[梦祈天怜](/cards/character/dream_pray_heaven.md) / [黎羽幻生](/cards/character/feather_phantom.md) / [倒吊人](/relics/common/tarot_hanged_man.md)；怪物招式——**不灭斗气**（[盖亚](/monsters/boss/gaia_monster.md)）、**圣光气**（[谱尼](/monsters/boss/puni_monster.md)）、**灭魂天葬击**（[哈耶克](/monsters/elite/hayek_monster.md)）
- **精神同步**（提亚斯招式）：首次使用后暴击率至少 50%（[锁定I](/powers/lock_one_power.md)），再次使用后至少 100%（[锁定II](/powers/lock_two_power.md)），三次以上下次攻击伤害翻倍

---

## 暴击与异常状态交互

### 沸涌

沸涌异常状态会**改变暴击倍率**：

- 持有沸涌的目标受到暴击时，暴击倍率从 ×1.5 提升至 **×2.0**
- 这是对暴击流的一种反制——沸涌让暴击更痛，但沸涌本身有"攻击伤害至少为下限值"的减伤效果

### 雷雨天

雷雨天能力让自身攻击**必定暴击**，但每次造成伤害（含自伤）后闪电充能球 +1。

---

## 暴击与秒杀

部分能力在暴击基础上还有**秒杀**机制：

### 魔王咒怨

- 攻击伤害增加、伤害减免
- 攻击技能有概率秒杀对面
- 秒杀会**传染同 HP 敌人**——如果场上有多个 HP 相同的敌人，秒杀一个会连带秒杀其它同 HP 的
- 达到阈值层数时自身免疫异常状态

---

## 相关页面

- [命中](/powers/accuracy_power.md)（暴击率的主要来源）
- [锁定I](/powers/lock_one_power.md) / [锁定II](/powers/lock_two_power.md)（暴击率下限）
- [暴击](/powers/critical_strike_power.md)（能力本体）
- [闪避](/powers/dodge_power.md)（命中的另一去处：负命中使受击目标更易闪避）

## 源码参考

- `SeerCriticalStrikePower.cs`
- `SeerLockOnePower.cs` / `SeerLockOneStackPower.cs`
- `SeerLockTwoPower.cs` / `SeerLockTwoStackPower.cs`
- `SeerAccuracyPower.cs`
- `SeerBoilingPower.cs`
- `SeerRainstormPower.cs`
- `SeerDemonKingCursePower.cs`