# 处决

> **归属**：玩家可施加
> **施加来源**：[至序圣华](/relics/legendary/order_holy_hua.md)（遗物）——战斗开始时对最大生命最高的敌人施加若干层；此后每个玩家回合结束时，对生命 ≤50% 的敌人各 +1 层（生命 >50% 或无限血的敌人改为玩家自身 +1 层先制）

<img src="/images/powers/execute_power.png" alt="处决" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff）
- **叠加方式**: 计数型
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 固定伤害量 | 5 |
| 最高有效层数 | 3 |

## 描述

层数向下涵盖。<br/>①1层：回合开始受到<span style="color:#3aa675;font-weight:600">5</span>点<span style="color:#d4a017;font-weight:600">固定伤害</span>。<br/>②2层：自身无法回复生命，治疗后受到等量<span style="color:#d4a017;font-weight:600">固定伤害</span>。<br/>③3层：回合开始时移除自身所有增益。<br/>最高<span style="color:#3aa675;font-weight:600">3</span>层。

## 详细机制

- **有效层数**：实际生效层数上限为 3；层数超过 3 时仍按 3 层结算。
- **层数向下涵盖**：1 层只触发 1 层效果；2 层同时触发 1、2 层；3 层全部触发。
- **1 层效果（回合开始）**：自身回合开始时，给自己施加 5 点[固定伤害](/powers/fixed_damage_power.md)能力。固定伤害在该目标**下一次自身回合开始**才结算——第一次伤害会晚一个回合；只要处决还在，从第 2 个自身回合起每回合都会吃 5 点。
- **2 层效果（治疗反制）**：自身生命值增加（delta > 0）时，施加等量固定伤害。这笔反伤同样在**下一次自身回合开始**结算，不是立刻扣血；治疗来源不限。
- **3 层效果（清除增益）**：自身回合开始时（与 1 层同一时机），清除自身所有 Buff。
  - **清除范围包含复活类增益**：[复苏](/powers/revive_three_power.md) I/II/III、【不灭之血】（泰勒斯）等 Buff 类复活能力会被一并清除——之后被击杀时不会复活（看起来像"固定伤害穿掉了复活"，实际是复活增益先被清掉）。
  - 不受影响的复活：类型为 None 的能力不在此清除范围内（如菲尼克斯涅槃、[谱尼](/monsters/boss/puni_monster.md)换形态）；此外清除逻辑还会跳过 4 个原版动画依赖型能力（Skittish/Illusion/SteamEruption/Sandpit）、虱虫之祖的蜷身（CurlUp），以及永久增伤/减伤（SeerPermanentDamageBoostPower/SeerPermanentDamageReductionPower）。
  - 这是**设计行为**（描述字面即"清除自身所有Buff"），已在常见问题清单 F-58 记录。

## 源码

- `SeerExecutePower.cs`；结算时机见 `SeerFixedDamagePower.cs`
