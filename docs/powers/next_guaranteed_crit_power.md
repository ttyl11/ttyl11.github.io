# 必定暴击

> **归属**：玩家与怪物均可持有
> **施加来源**：玩家获得——[梦祈天怜](/cards/character/dream_pray_heaven.md)（卡牌）、[黎羽幻生](/cards/character/feather_phantom.md)（卡牌）、[倒吊人](/relics/common/tarot_hanged_man.md)（遗物，每次受到伤害时）；怪物自带——[盖亚](/monsters/boss/gaia_monster.md)（不灭斗气）、[哈耶克](/monsters/elite/hayek_monster.md)（灭魂天葬击）、[谱尼](/monsters/boss/puni_monster.md)（圣光气）、[哀目黑子](/monsters/elite/aimu_heizi_monster.md)（2 层）、[鬼蚀豹尊](/monsters/elite/ghost_erosion_leopard_lord_monster.md)（2 层）、[鬼面阎罗](/monsters/elite/ghost_face_yama_monster.md)（1 层）、[混沌·千夜死神](/monsters/boss/hundun_qian_ye_si_shen_monster.md)、[墨影星魂](/monsters/elite/ink_shadow_star_soul_monster.md)（给友军 2 层）、[冥契·格斯塔丝](/monsters/boss/mingqi_gesitasi_monster.md)（给友军）；刻印——[高级暴动刻印](/engravings/index.md)（每场战斗开始 1 层）

<img src="/images/powers/next_guaranteed_crit_power.png" alt="必定暴击" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 计数器（层数=剩余必暴次数）
- **可见**: 是

## 描述

下次攻击必定<span style="color:#d4a017;font-weight:600">暴击</span>（1.5倍伤害）。

## 详细机制

- **真暴击判定**：拥有者攻击前写入暴击判定（强制暴击）——[暴击](/powers/critical_strike_power.md)引擎按判定结果结算 ×1.5，并**触发全部"暴击时"联动**（[五月之锋](/cards/character/may_edge.md)、[二律背反](/powers/antinomy_power.md)、[镜](/powers/mirror_power.md)等）。
- **计数器**：每次攻击后层数 -1、归零移除。多段攻击（如 3×5）算一次攻击——**每一段都享受 ×1.5**，只消耗 1 层。
- **层数=剩余次数**：[黎羽幻生](/cards/character/feather_phantom.md)施加 2 层（真正覆盖下两次），[梦祈天怜](/cards/character/dream_pray_heaven.md)/[倒吊人](/relics/common/tarot_hanged_man.md)/枫眠及怪物招式施加 1 层（下一次）；同类计数器参见[冲天霸气](/powers/tiger_crit_counter_power.md)（泰格尔，下 2 次）。
- **只影响攻击伤害**：仅对"吃增伤/力量修正的攻击伤害"生效；固定伤害、生命流失等非攻击伤害不吃加成。
- **与命中/锁定同一乘区**：本能力与随机暴击（[命中](/powers/accuracy_power.md)/[锁定](/powers/lock_one_power.md)提供）属同一判定层——同时存在时伤害仍为 ×1.5，不会叠乘。

## 小贴士

- **稳定触发"暴击时"联动**：配合[五月之锋](/cards/character/may_edge.md)、[奥菲利娅](/relics/legendary/ophelia.md)（天命之耀）等"暴击时"效果时，这一次攻击必定吃到联动加成——单次必暴是"点杀联动"最可控的开关。
- **与锁定II 同理**：[锁定II](/powers/lock_two_power.md)的 100% 下限也是"真暴击"，与本能力同属一个判定层——两者同时在场时倍率仍是 ×1.5。
- **多段攻击收益最大**：段数越多，×1.5 覆盖的伤害总量越大；配合多 hits 的攻击牌打出来最划算。
- **倒吊人的发动机**：持有[倒吊人](/relics/common/tarot_hanged_man.md)时每次受到伤害都会 +1 层（**可叠层**）——挨打越多、攒的必暴次数越多；注意倒吊人自身还有"造成伤害时追伤+回血"，攻防两端形成正反馈。
- **敌方持有时的信号**：盖亚（不灭斗气）、哈耶克（灭魂天葬击）、谱尼（圣光气）挂上本能力图标后，**下一回合的攻击大概率是重击**——提前铺格挡或开减伤。

## 相关卡牌

- [梦祈天怜](/cards/character/dream_pray_heaven.md)（施加 1 点）
- [黎羽幻生](/cards/character/feather_phantom.md)（施加 2 层，覆盖下两次攻击）

## 相关能力

- [暴击](/powers/critical_strike_power.md)（暴击系统引擎，本能力的 ×1.5 判定与倍率由它承担）
- [冲天霸气](/powers/tiger_crit_counter_power.md)（同类计数器：泰格尔招式，下 2 次）
- [精神同步](/powers/next_attack_double_damage_power.md)（同模式但 ×2）
- [锁定I](/powers/lock_one_power.md) / [锁定II](/powers/lock_two_power.md)（改写暴击率，能触发真暴击联动）

## 源码

- `SeerNextGuaranteedCritPower.cs`
