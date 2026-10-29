# 睡眠

> **归属**：玩家与怪物均可持有
> **施加来源**：玩家获得——[神游](/powers/trance_power.md)（能力联动）、[魏武帝·曹操](/relics/ancient/wei_di_wu_cao_cao.md)（遗物，自身使用能力牌时）；玩家施加给敌方——[曙光普照](/cards/character/shining_light.md)（卡牌）、[Buff消失睡眠触发](/powers/buff_sleep_trigger_power.md)（能力联动）、[清](/powers/clarity_power.md)（能力联动）、[晓](/powers/dawn_power.md)（能力联动）、[好女孩](/powers/good_girl_power.md)（能力联动）、[万相乖离](/powers/universal_divergence_power.md)（能力联动）、[白色龙鳞](/powers/white_dragon_scale_power.md)（能力联动）、[混沌天蛇太祖](/relics/rare/chaotic_snake.md)（遗物）、[艾夏拉](/relics/rare/constancy.md)（遗物）；怪物施加给玩家——[狄修斯](/monsters/normal/dixius_monster.md)、[哈耶克](/monsters/elite/hayek_monster.md)、[魔花仙子](/monsters/normal/magic_flower_monster.md)、[墨鲁萨](/monsters/elite/medusa_minion_monster.md)、[缪斯](/monsters/boss/muse_monster.md)（安魂曲）、[不灭地威·萨瑞卡](/monsters/elite/immortal_earth_sarika_monster.md)（技能施加）；附魔——[睡眠宝石](/enchantments/sleep_gem.md)（打出时施加）

<img src="/images/powers/sleep_power.png" alt="睡眠" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff），列入[异常状态](/mechanics/abnormal-status.md)列表
- **叠加方式**: 叠加（Counter）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| DamageReductionPercent | 50 |

## 描述

①自身攻击伤害降低<span style="color:#3aa675;font-weight:600">50%</span>。<br/>②受到未被<span style="color:#d4a017;font-weight:600">格挡</span>的伤害时，移除此能力（缪斯施加的睡眠改为层数-<span style="color:#3aa675;font-weight:600">1</span>）。<br/>自身回合结束时层数-<span style="color:#3aa675;font-weight:600">1</span>。

## 详细机制

- **攻击伤害降低**：
  - 持有者造成的攻击伤害降低 50%（乘以 0.5）
  - 仅影响攻击伤害，不影响[固定伤害](/powers/fixed_damage_power.md)等非攻击伤害
  - 减伤幅度固定 50%，不随层数变化
- **受击移除**：
  - 持有者受到未被格挡的伤害时，立即移除睡眠状态
  - 例外：缪斯施加的睡眠受[天蛇之瞳](/powers/snake_eye_power.md)保护，改为只减少 1 层
  - 即"打一下就醒"——任意未格挡的伤害都会唤醒（缪斯施加的睡眠除外）
- **回合结束减层**：
  - 持有者一方回合结束时，层数 -1
  - 若未被攻击，睡眠会随回合自然消退

## 小贴士

- **打一下就醒（非缪斯）**：任意未格挡伤害立即移除睡眠。适合用低伤害高频攻击先唤醒再输出，避免浪费高伤害卡。缪斯施加的睡眠则只减1层，不能一次唤醒。
- **降伤固定50%**：不随层数变化，多层施加无额外减伤收益。

## 相关机制

- [异常状态](/mechanics/abnormal-status.md)

## 源码

- `SeerSleepPower.cs`
