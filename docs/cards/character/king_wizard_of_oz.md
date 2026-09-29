# 王·绿野仙踪

<img src="/images/cards/king_wizard_of_oz.png" alt="王·绿野仙踪" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 5
- **能量消耗**: 2
- **类型**: 攻击
- **稀有度**: 普通
- **目标**: 单体敌人
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害 | 18 | 18 |
| 每层属性提升附加[固定伤害](/powers/fixed_damage_power.md) | 5 | 8 |
| 目标克制自身时每层附加 | 10 | 16 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 造成<span style="color:#3aa675;font-weight:600">18</span>点伤害。每层[属性提升](/mechanics/all_attributes.md)附加<span style="color:#3aa675;font-weight:600">5</span>点[固定伤害](/powers/fixed_damage_power.md)，其属性克制自身时翻倍。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 造成<span style="color:#3aa675;font-weight:600">18</span>点伤害。每层[属性提升](/mechanics/all_attributes.md)附加<span style="color:#3aa675;font-weight:600">8</span>点[固定伤害](/powers/fixed_damage_power.md)，其属性克制自身时翻倍。

## 详细机制

- **结算顺序**：先造成 <span style="color:#3aa675;font-weight:600">18</span> 点伤害，再把[固定伤害](/powers/fixed_damage_power.md)挂到目标身上。
- **"层数"= 你的四维正值之和**：[力量](/powers/strength_power.md)、[防御](/powers/defense_power.md)、[命中](/powers/accuracy_power.md)、[速度](/powers/speed_power.md)的正层数相加（负层数不计、不扣减）。
- **每层附加 <span style="color:#3aa675;font-weight:600">5</span>（升级 <span style="color:#3aa675;font-weight:600">8</span>）点[固定伤害](/powers/fixed_damage_power.md)**：例如身上共 <span style="color:#3aa675;font-weight:600">4</span> 层属性提升 → 附加 <span style="color:#3aa675;font-weight:600">20</span>（升级 <span style="color:#3aa675;font-weight:600">32</span>）点；零层或负层时则不附加。
- **目标属性克制自身时翻倍**：满足时每层附加量 ×2（<span style="color:#3aa675;font-weight:600">10</span> / 升级 <span style="color:#3aa675;font-weight:600">16</span>）；只看"对方是否克你"，与你是否克对方无关（见[元素克制](/mechanics/element-affinity.md)）。
- **[固定伤害](/powers/fixed_damage_power.md)是延迟结算**：挂在目标身上，目标下回合开始时才扣血；不吃[格挡](/mechanics/block.md)、不受[力量](/powers/strength_power.md)/易伤/元素克制影响，可被[免疫固定伤害](/powers/immune_fixed_damage_power.md)一类的效果挡下。
- **目标被打死则不再附加**：如果 <span style="color:#3aa675;font-weight:600">18</span> 点伤害直接击杀目标，附加的固定伤害就不会挂上（固伤是"补刀"而不是"过杀"）。

## 小贴士

- **它是属性流的"弹药放大器"**：任何一张给[全属性](/mechanics/all_attributes.md)+1 的牌都等于给它 +<span style="color:#3aa675;font-weight:600">4</span> 层，<span style="color:#3aa675;font-weight:600">4</span> 层就是 <span style="color:#3aa675;font-weight:600">20</span>（升级 <span style="color:#3aa675;font-weight:600">32</span>）点固伤——属性叠得越厚，它越像核弹。
- **固定伤害不吃格挡，专破龟壳**：面对高[格挡](/mechanics/block.md)敌人，<span style="color:#3aa675;font-weight:600">18</span> 点攻击伤害可能被挡掉大半，但附加的固伤会稳稳按预扣血段在对方下回合开始掉血。
- **克制翻倍是白送的加码**：目标带克制你的属性时（例如你是火、对方是水），附加量直接 ×2——先看一眼对方的属性图标再决定要不要把这张牌交给它。
- **延迟结算要算好血量**：固伤在**目标下回合开始**才扣血，击杀节奏会慢一拍；对方有[免疫固定伤害](/powers/immune_fixed_damage_power.md)类能力时，固伤部分会被完全挡掉。
- **性价比**：2 费买 <span style="color:#3aa675;font-weight:600">18</span> 点稳定伤害 + 一笔随属性层数放大的固伤，属性流里明显超值；属性为零时只是一张普通的 <span style="color:#3aa675;font-weight:600">18</span> 伤攻击，属于"看身材定价"的牌。

## 相关能力

- [固定伤害](/powers/fixed_damage_power.md)（按属性层数附加给目标）
- [力量](/powers/strength_power.md) / [防御](/powers/defense_power.md) / [命中](/powers/accuracy_power.md) / [速度](/powers/speed_power.md)（决定附加层数的四维）

## 相关机制

- [全属性](/mechanics/all_attributes.md)
- [固定伤害](/mechanics/fixed-damage.md)
- [元素克制](/mechanics/element-affinity.md)
- [PP系统](/mechanics/pp-system.md)
- [格挡](/mechanics/block.md)（18 点攻击伤害可被格挡，附加的固定伤害不受格挡影响）

## 源码

- `SeerKingWizardOfOz.cs`