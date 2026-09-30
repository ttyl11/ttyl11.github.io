# 锁定I

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[提亚斯](/monsters/elite/tias_monster.md)「精神同步」第 1 次使用时施加（第 2 次使用时会移除本能力并升级为[锁定II](/powers/lock_two_power.md)）；怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/lock_one_power.png" alt="锁定I" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 实例化（每次施加独立实例）
- **可见**: 是

## 描述

自身<span style="color:#d4a017;font-weight:600">暴击</span>率至少<span style="color:#3aa675;font-weight:600">50%</span>。

## 详细机制

- **本体是"档位标记"**：自身无任何逻辑——它是被[暴击](/powers/critical_strike_power.md)引擎读取的标记：引擎在每次攻击前结算触发率时看到持有者身上有锁定I，就把触发率**下限抬到** <span style="color:#3aa675;font-weight:600">50%</span>——命中不足 50% 时按 50% 判定，命中超过 50% 时按命中算（两者取高）。
- **暴击伤害 ×1.5**：暴击成功时伤害 <span style="color:#3aa675;font-weight:600">×1.5</span>（引擎乘区倍增）——与[要点探寻](/powers/key_one_power.md)系的 ×2 是两套独立体系，可同时挂（乘区叠乘）。
- **多段攻击共享判定**：在整个攻击命令前只掷**一次**骰——"攻击 ×3"要么三段全部暴击、要么全部不暴。
- **每次攻击重新判定**：攻击结束后暴击标记重置，下一次攻击重新掷骰。
- **只影响常规攻击**——[固定伤害](/powers/fixed_damage_power.md)、DoT 不参与暴击。
- **施加时自动获得引擎**：锁定被施加时会自动补上[暴击](/powers/critical_strike_power.md)引擎——任何单位拿到锁定I 即可拥有暴击率，无需其它条件。

## 小贴士

- **期望输出 +25%**：50% × 1.5 = 期望全程 1.25 倍伤害——若它另有命中加成还会更高；[格挡](/mechanics/block.md)预算按"意图 ×1.5"的最坏情况留。
- **提亚斯战是倒计时**：提亚斯第一次「精神同步」挂锁定I（50% 暴击），第二次升级为[锁定II](/powers/lock_two_power.md)（100% 暴击）——它每放一次精神同步，你的防御压力就上一个台阶，尽量在第二次之前建立斩杀或控制。
- **暴击档位能驱散**：锁定I 本身是 Buff，持有移除敌方增益的手段可以把它清掉（清掉后回到由命中决定的触发率）；但暴击引擎是驱散不掉——想彻底压暴击只能控攻击（[眩晕](/mechanics/stun.md)、攻击无效）。

## 源码

- `SeerLockOnePower.cs`
- `SeerCriticalStrikePower.cs`
- `SeerTiasMonster.cs`
- `SeerElementalCore.cs`
