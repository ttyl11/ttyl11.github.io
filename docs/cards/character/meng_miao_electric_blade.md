# 萌喵电刃

<img src="/images/cards/meng_miao_electric_blade.png" alt="萌喵电刃" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

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
| 伤害 | 24 | 36 |
| 带电/暗影时伤害 | 48 | 72 |
| [堕落](/powers/fallen_power.md)层数 | 15 | 15 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 造成<span style="color:#3aa675;font-weight:600">24</span>点伤害，[堕落](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">15</span>。自身带[电](/powers/electric_power.md)或[暗影](/powers/shadow_power.md)时伤害翻倍。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 造成<span style="color:#3aa675;font-weight:600">36</span>点伤害，[堕落](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">15</span>。自身带[电](/powers/electric_power.md)或[暗影](/powers/shadow_power.md)时伤害翻倍。

## 详细机制

- **翻倍判定在伤害结算前**：自身当前挂着[电](/powers/electric_power.md)或[暗影](/powers/shadow_power.md)属性时，伤害直接 ×2——<span style="color:#3aa675;font-weight:600">24</span> → <span style="color:#3aa675;font-weight:600">48</span>（升级 <span style="color:#3aa675;font-weight:600">36</span> → <span style="color:#3aa675;font-weight:600">72</span>）。
- **只看自己，不看目标**：翻倍条件与目标属性无关；判定的是"出牌时你身上有没有电/暗影"。
- **两种属性任意其一即可**：同时带电和暗影也不会叠成 ×4。
- **[堕落](/powers/fallen_power.md)固定 +15**：与伤害无关，翻倍也不会让堕落变多。

## 小贴士

- **带属性时它是核弹，不带时它是白板**：<span style="color:#3aa675;font-weight:600">48</span>（升级 <span style="color:#3aa675;font-weight:600">72</span>）点在 2 费里属于顶格爆发，值得围绕"让自己带电/暗影"做构筑；没有属性来源时只有 <span style="color:#3aa675;font-weight:600">24</span>（升级 <span style="color:#3aa675;font-weight:600">36</span>）点，中规中矩。
- **无相是最省事的开关**：[无相](/potions/attribute_change_potion.md)可以移除自身属性并自选任意一种获得——想拔高这张牌，备一瓶无相选[电](/powers/electric_power.md)或[暗影](/powers/shadow_power.md)即可。
- **自身的属性会随战局变化**：属性可以被敌人或自身效果洗掉，出牌前扫一眼自己身上的属性图标，别在属性刚被洗掉后当白板打出去。
- **属性同时影响克制伤害**：带电时你打[水](/powers/water_power.md)/[飞行](/powers/flying_power.md)/[混沌](/powers/chaos_power.md)等目标本就 ×1.5，再翻倍等于双倍收益，对克制目标收益最高（见[元素克制](/mechanics/element-affinity.md)）。
- **性价比**：2 费下限 <span style="color:#3aa675;font-weight:600">24</span>/<span style="color:#3aa675;font-weight:600">36</span> 伤害略偏贵，但条件满足时 <span style="color:#3aa675;font-weight:600">48</span>/<span style="color:#3aa675;font-weight:600">72</span> 是同级最强单体爆发之一，属于"看构筑定价"的牌——带属性来源就不亏。

## 相关能力

- [电](/powers/electric_power.md) / [暗影](/powers/shadow_power.md)（自身带其一时伤害翻倍）
- [堕落](/powers/fallen_power.md)（固定 +15 层）

## 相关机制

- [元素克制](/mechanics/element-affinity.md)
- [堕落](/mechanics/fallen.md)
- [PP系统](/mechanics/pp-system.md)
- [格挡](/mechanics/block.md)（伤害为攻击伤害，可被格挡抵消）

## 源码

- `SeerMengMiaoElectricBlade.cs`