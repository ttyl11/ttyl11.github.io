# 君临天下（原八方债）

> **归属**：玩家可施加
> **施加来源**：玩家获得——[始皇帝·嬴政](/relics/legendary/shi_huang_di_ying_zheng.md)（遗物，永昌玺满6触发）、[八方·无人来朝](/fifth-skill/octagon.md)（卡牌，永昌玺提升至6后触发）

<img src="/images/powers/octagon_debt_power.png" alt="君临天下" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 无（既非增益也非减益，不会被净化/清除效果误清）
- **叠加方式**: 计数
- **可见**: 是

## 描述

<span style="color:#3aa675;font-weight:600">6</span>回合内：每回合开始抽满手牌、能量+<span style="color:#3aa675;font-weight:600">6</span>，攻击必定暴击，任何牌附加<span style="color:#3aa675;font-weight:600">15</span>点[固定伤害](/powers/fixed_damage_power.md)。结束后所有牌[PP](/mechanics/pp-system.md)清0并消耗，生命设为<span style="color:#3aa675;font-weight:600">1</span>。

## 详细机制

- **倒计时**: 施加时层数=6（原八方债改造），每回合结束递减1，归零时结算代价并移除自身。图标数字即剩余回合数。
- **增益期**（剩余回合>0）：
  - 每回合开始：抽满手牌（按当前手牌上限自动停止）+ 能量+6。
  - 所有攻击必定暴击（伤害×1.5）。
  - 打出任何牌：对所有敌人附加15点固定伤害。
- **代价**（倒计时归零）：
  - 所有牌PP清0并置入消耗堆。
  - 生命值**直接设为1**（`SetCurrentHp` 赋值，非伤害——不触发伤害增幅/减伤/格挡）。
- **Type=None**：既不是增益也不是减益，因此"清除敌方buff""解除自身debuff"等效果不会误清它；打牌附15固定伤害的目标是可命中敌人。

## 源码

- `SeerOctagonDebtPower.cs`