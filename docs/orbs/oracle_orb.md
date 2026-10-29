# 神谕

<img src="/images/orbs/oracle_orb.png" alt="神谕" style="max-width:120px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: mod 充能球
- **注册 ID**: `SEER_ORB_SEER_ORACLE_ORB`
- **颜色**: `#FFAA00`（橙色）

### 数值参数

| 参数 | 数值 |
|---|---|
| 被动数值 | 1 |
| 激发数值 | 1 |

## 描述

[<span style="color:#d4a017;font-weight:600">被动：</span>](/mechanics/orb.md)回合开始时，随机提升力量、防御、命中或速度<span style="color:#3aa675;font-weight:600">1</span>点。
[<span style="color:#d4a017;font-weight:600">激发：</span>](/mechanics/evoke.md)随机为一张手牌施加随机附魔。
神谕充能球不受[<span style="color:#d4a017;font-weight:600">集中</span>](/powers/focus_power.md)影响。

## 详细机制

- **被动触发**：
  - 触发时机：回合开始时
  - 目标选择：无目标，作用于自身
  - 效果：随机选一项提升 <span style="color:#3aa675;font-weight:600">1</span> 点：
    - 0 → [力量](/powers/strength_power.md)
    - 1 → [防御](/powers/defense_power.md)
    - 2 → [命中](/powers/accuracy_power.md)
    - 3 → [速度](/powers/speed_power.md)
  - 音效：`event:/sfx/characters/defect/defect_dark_channel`
- **激发效果**：
  - 目标：手牌中一张未附魔的随机卡牌
  - 效果：从 mod 附魔池中筛选可附魔、排除测试占位与注能/永耀/冷却时间后，随机施加一个
  - 音效：`event:/sfx/characters/defect/defect_dark_channel`
- **生成音效**：`event:/sfx/characters/defect/defect_dark_channel`（原版暗球仅此一个 FMOD 事件，被动/激发复用）
- **集中影响**：不受[集中](/powers/focus_power.md)影响（被动数值和激发数值均为固定值）
- **附魔过滤**：激发时排除测试占位附魔与注能/永耀/冷却时间，只从可用的正式 mod 附魔中随机
- **悬浮提示**：提供力量、防御、命中、速度的能力说明悬浮提示

## 相关能力

- [<span style="color:#d4a017;font-weight:600">力量</span>](/powers/strength_power.md)：被动可能提升
- [<span style="color:#d4a017;font-weight:600">防御</span>](/powers/defense_power.md)：被动可能提升
- [<span style="color:#d4a017;font-weight:600">命中</span>](/powers/accuracy_power.md)：被动可能提升
- [<span style="color:#d4a017;font-weight:600">速度</span>](/powers/speed_power.md)：被动可能提升

## 相关卡牌

- [五芒星](/cards/character/pentagram.md)（生成 3 个神谕充能球）
- [元神启动](/cards/colorless/spirit_activation.md)（每回合开始时生成 2 个神谕充能球）
- [圣杯](/cards/colorless/holy_grail.md)（打出时随机生成 2 个充能球，含神谕）
- [圣灵雷霆斩](/cards/colorless/holy_thunder_slash.md)（获得 4 个随机充能球，含神谕）
- [魔法元素泡泡](/cards/character/magic_element_bubble.md)（随机生成充能球，含神谕）

## 小贴士

- **不吃集中**：神谕是少数不受[集中](/powers/focus_power.md)影响的充能球，被动和激发数值固定为 1，叠集中对神谕无收益。
- **激发随机附魔**：激发为未附魔手牌随机施加附魔，结果不可控——可能强化关键牌，也可能附到即将弃掉的低价值牌上。

## 源码

- `SeerOracleOrb.cs`
