# 中毒

> **归属**：玩家与怪物均可持有
> **施加来源**：玩家获得——[感染](/powers/infect_power.md)（能力联动）；玩家施加给敌方——[曙光普照](/cards/character/shining_light.md)（卡牌）、[森林](/orbs/forest_orb.md)（充能球）、[好女孩](/powers/good_girl_power.md)（能力联动）、[万相乖离](/powers/universal_divergence_power.md)（能力联动）、[白色龙鳞](/powers/white_dragon_scale_power.md)（能力联动）；玩家侧联动——[荣尽枯生](/powers/glory_exhaustion_power.md)；怪物施加给玩家——[魔花仙子](/monsters/normal/magic_flower_monster.md)、[蘑菇怪](/monsters/elite/mushroom_monster.md)

<img src="/images/powers/poison_power.png" alt="中毒" style="max-width:120px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 异常状态（Debuff）
- **叠加方式**: 计数器（1，层数可见，回合开始结算后减半）
- **可见**: 是
- **异常状态**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 伤害 | 等于层数 |
| 减半除数 | 2 |

## 描述

在你的回合开始时受到等于层数的伤害，然后层数减半（向下取整）。

## 详细机制

- **触发时机**：在拥有者一方回合开始时触发
- **存活检查**：拥有者存活时才触发伤害
- **伤害计算**：伤害 = 当前层数（例：5 层中毒 = 5 点伤害）
- **伤害类型**：不可格挡且非攻击伤害
- **递减**：造成伤害后层数减半（向下取整）：5 → 2 → 1 → 移除（1 层时归 0，直接移除）
- **死亡处理**：如果拥有者死亡，等待 <span style="color:#3aa675;font-weight:600">0.1</span> 秒
- **血条预测**：在血条上显示中毒预期伤害（绿色段，等于当前层数）

## 小贴士

- **一次性爆发**：伤害 = 层数本身，贴得越厚单跳越痛（10 层 = 10 点），但结算后立刻减半，层数撑不了几回合——适合"贴一大口立刻爆发"，不适合慢慢耗。
- **衰减极快**：5 层 → 2 → 1，三个回合清空；想维持高单跳伤害，必须持续补毒。

## 相关能力

- [<span style="color:#d44;font-weight:600">感染</span>](/powers/infect_power.md)：回合结束时获得 2 层中毒

## 相关卡牌

- [曙光普照](/cards/character/shining_light.md)
- [荣尽枯生](/cards/character/glory_exhaustion.md)

## 相关充能球

- [森林](/orbs/forest_orb.md)（被动：对随机敌人施加 3 层中毒）

## 源码

- `SeerPoisonPower.cs`
