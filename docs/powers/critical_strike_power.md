# 暴击

> **归属**：玩家与怪物均可持有——本能力是整个暴击系统的**引擎**
> **施加来源**：跟随暴击率来源自动获得——首次获得正[命中](/powers/accuracy_power.md)、被施加[锁定I/II](/powers/lock_one_power.md)、获得[北冥之刃系](/relics/epic/huo_guang.md)、[海棠教皇·未明](/relics/epic/hai_tang_jiao_huang_wei_ming.md)或任意"必定暴击"效果（[幻影蝶](/relics/uncommon/phantom_butterfly.md)、[梦祈天怜](/cards/character/dream_pray_heaven.md)、[冲天霸气](/powers/tiger_crit_counter_power.md)等）时自动挂上；怪物开局自带——[盖亚](/monsters/boss/gaia_monster.md)、[雷伊](/monsters/boss/ray_monster.md)

<img src="/images/powers/critical_strike_power.png" alt="暴击" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 中性（不属于增益也不属于减益，不被驱散/净化类效果清除）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 基础暴击率 | 0（由[命中](/powers/accuracy_power.md)提供：每层 +10%） |
| 暴击倍率 | 1.5 |

## 描述

有概率造成 <span style="color:#3aa675;font-weight:600">1.5</span> 倍伤害（概率 = 实时暴击率，显示在图标角标上）。暴击率由[命中](/powers/accuracy_power.md)提供（每层 +10%），[锁定](/powers/lock_one_power.md)为下限。

## 详细机制

- **引擎本体**：所有暴击判定（命中提供的触发率、锁定保底、必定暴击）与暴击增伤都由它执行。**没有本能力的单位完全不会暴击**；本能力会在单位首次获得任意暴击率来源时自动挂上（正命中、锁定、北冥之刃、海棠教皇等），无需手动维护。
- **判定流程**：每次攻击命令开始时结算一次触发率 `max(锁定档位, 命中 × 10%)`（多人同步安全）：
  - 触发率为 0 → 直接不暴击（不掷骰）
  - 触发率 1%~99% → 掷骰判定
  - 触发率 ≥<span style="color:#3aa675;font-weight:600">100</span>%（或被[锁定II](/powers/lock_two_power.md)保底）→ 直接暴击（不掷骰）
  - 各类"必定暴击"来源（[北冥之刃系](/relics/epic/huo_guang.md)、[幻影蝶](/relics/uncommon/phantom_butterfly.md)、[梦祈天怜](/cards/character/dream_pray_heaven.md)等）会把本次判定强制改为暴击
- **角标与描述实时刷新**：能力图标上的数字 = 描述里的概率 = 当前触发率 `max(锁定档位, 命中×10%)`——命中/锁定层数一变立刻同步，悬浮图标即可看到最新百分数。另外，在场必定暴击来源会让显示直接为 <span style="color:#3aa675;font-weight:600">100%</span>：[北冥之刃/狂刃](/relics/epic/huo_guang.md)（常驻）、[海棠教皇·未明](/relics/epic/hai_tang_jiao_huang_wei_ming.md)（满血时，随生命实时切换），以及回合/次数型必暴（[幻影蝶](/relics/uncommon/phantom_butterfly.md)、[冲天霸气](/powers/tiger_crit_counter_power.md)、[君临天下](/powers/octagon_debt_power.md)等）在场期间。
- **一次攻击只掷一次**：多段攻击（如 3×5）共享判定——要么全部段数暴击，要么全部不暴。
- **暴击增伤 ×1.5**：判定成功时攻击伤害 ×1.5（独立乘区，与其它乘法修正链式相乘）。
- **"暴击时触发"的查询口**：[镜](/powers/mirror_power.md)、[二律背反](/powers/antinomy_power.md)、[五月之刃](/powers/may_edge_power.md)、[天规](/powers/heaven_rule_power.md)、[返璞归真](/powers/return_to_nature_power.md)、[应援](/powers/support_power.md)等"暴击时"效果都查询本能力的判定结果——**所有"必定暴击"来源都写入判定**（2026-09-30 统一），照常触发这些联动。
- **只影响常规攻击**——[固定伤害](/powers/fixed_damage_power.md)、DoT 等非攻击伤害不参与暴击。

## 小贴士

- **触发率是实时账**：正命中每层 +10%——堆命中就是堆暴击率；被叠负命中时暴击率立刻归零（负层不提供暴击率），但你的负命中会反过来帮对手闪避，计算得失时把两头都算上。
- **"必定暴击"全部走引擎真判定**：[北冥之刃](/relics/epic/huo_guang.md)、[海棠教皇·未明](/relics/epic/hai_tang_jiao_huang_wei_ming.md)、[锁定II](/powers/lock_two_power.md)、[幻影蝶](/relics/uncommon/phantom_butterfly.md)（回合必暴）、[梦祈天怜/黎羽幻生/倒吊人](/powers/next_guaranteed_crit_power.md)（下次必暴）、[冲天霸气](/powers/tiger_crit_counter_power.md)、[君临天下](/powers/octagon_debt_power.md)、[幽冥帝尊·修罗](/relics/rare/nether_emperor.md)——照常触发[五月之锋](/powers/may_edge_power.md)、[二律背反](/powers/antinomy_power.md)等"暴击时"联动，在场的暴击率显示直接 100%。
- **驱散不掉**：本能力为中性，驱散增益/减益对它无效；想压暴击只能清掉对方的暴击率来源（命中/锁定）或控攻击节奏。

## 相关能力

- [命中](/powers/accuracy_power.md)（暴击率来源：每层 +10%）
- [锁定I](/powers/lock_one_power.md)（暴击率至少 50%）/ [锁定II](/powers/lock_two_power.md)（必定暴击）
- [必定暴击](/powers/next_guaranteed_crit_power.md)（真暴击判定，×1.5 由本引擎结算，触发全部"暴击时"联动）
- [魔王咒怨](/powers/demon_king_curse_power.md)（独立的增伤/即死体系，与暴击判定无关）

## 相关卡牌

- [黎羽幻生](/cards/character/feather_phantom.md)（通过[必定暴击](/powers/next_guaranteed_crit_power.md)获得真暴击判定与 1.5 倍伤害）

## 源码

- `SeerCriticalStrikePower.cs`
- `SeerAccuracyPower.cs`
- `SeerGaiaMonster.cs`、`SeerRayMonster.cs`
