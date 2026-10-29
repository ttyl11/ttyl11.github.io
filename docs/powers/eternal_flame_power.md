# 火种永存

> **归属**：玩家可施加
> **施加来源**：玩家获得——[火种永存](/cards/character/eternal_flame.md)（卡牌）

<img src="/images/powers/eternal_flame_power.png" alt="火种永存" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 递减（计数型）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 焚烬概率 | 70 |
| 固定伤害 | 5 |

## 描述

己方回合开始时，有 <span style="color:#3aa675;font-weight:600">70</span>% 概率对所有敌人各施加 <span style="color:#3aa675;font-weight:600">1</span> 层[焚烬](/powers/ash_power.md)；若某敌人的焚烬层数未增加（<span style="color:#3aa675;font-weight:600">30</span>% 概率未触发，或施加被免疫），则对其施加 <span style="color:#3aa675;font-weight:600">5</span> 点[固定伤害](/powers/fixed_damage_power.md)。触发后层数 -<span style="color:#3aa675;font-weight:600">1</span>。

## 详细机制

- **触发时点**：拥有者一方回合开始前（`BeforeSideTurnStart`）。
- **只掷一次骰**：所有敌人共享同一次 70% 判定——成功则本回合对所有可攻击敌人各施加 1 层焚烬；失败则一个都不施加。
- **逐个对照层数**：对每个敌人分别记录施加前后的焚烬层数；层数没有增加就施加 5 点固定伤害。未增加有两条路径：
  1. 70% 判定失败，本回合压根没施加；
  2. 判定成功但敌人免疫异常，施加被无效化。
- **固定伤害结算**：走[固定伤害](/powers/fixed_damage_power.md)能力，在该敌人自己的回合开始时结算，不是当场扣血。
- **层数递减**：无论是否施加成功，结算后自身层数 -1。
- **保底设计**：免疫焚烬的敌人反而会稳定吃固定伤害，这层是打免疫怪的稳定输出。

## 相关卡牌

- [火种永存](/cards/character/eternal_flame.md)：打出时获得此能力

## 源码

- `SeerEternalFlamePower.cs`
