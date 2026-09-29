# 龙族血脉

<img src="/images/cards/dragon_bloodline.png" alt="龙族血脉" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 普通
- **目标**: 自身
- **关键词**: [虚无](/mechanics/ethereal.md)
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 全属性提升 | 1 | 1 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> [<span style="color:#d4a017;font-weight:600">全属性</span>](/mechanics/all_attributes.md)+<span style="color:#3aa675;font-weight:600">1</span>。变为[<span style="color:#d4a017;font-weight:600">龙属性</span>](/powers/dragon_power.md)。[虚无](/mechanics/ethereal.md)。

## 升级后

不再[虚无](/mechanics/ethereal.md)。[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> [<span style="color:#d4a017;font-weight:600">全属性</span>](/mechanics/all_attributes.md)+<span style="color:#3aa675;font-weight:600">1</span>。变为[<span style="color:#d4a017;font-weight:600">龙属性</span>](/powers/dragon_power.md)。

## 详细机制

- **[全属性](/mechanics/all_attributes.md) +1**：力量、防御、命中、速度各 +1（四项分别施加）。
- **变为龙属性**：先清空自身全部元素，再施加[龙](/powers/dragon_power.md)元素。
- **[虚无](/mechanics/ethereal.md)**：回合结束时若此牌仍在手牌，则被[消耗](/mechanics/exhaust.md)。
- **升级移除虚无**：升级后此牌不再被回合结束消耗，可以留在手里等时机。

## 小贴士

- **龙体系的开场铺垫牌**：1 费换"全属性+1 + 变龙属性"。先把元素变成龙，后续依赖龙属性的卡（如按场上龙属性生物数翻倍的群攻牌）才能吃到加成。
- **虚无让升级变成质变**：未升级时必须在抽到的当回合打出，否则白白被消耗；升级去掉虚无后可以囤在手里配合关键回合，优先级很高。
- **全属性 +1 可以叠**：配合回响 / 重放 / 回手类手段反复打出，四维各自线性增长，滚雪球效果明显。
- **注意元素覆盖**：它会清空已有元素再变龙，如果当前元素是别的体系（如刚用火系牌变的火属性），会被覆盖掉。

## 相关能力

- [龙](/powers/dragon_power.md)（变身目标元素）
- [防御](/powers/defense_power.md) / [命中](/powers/accuracy_power.md) / [速度](/powers/speed_power.md)（全属性 +1 作用的属性）

## 相关机制

- [PP系统](/mechanics/pp-system.md)（PP 消耗）
- [全属性](/mechanics/all_attributes.md)（力量/防御/命中/速度四项）
- [虚无](/mechanics/ethereal.md)（回合结束在手牌则消耗）
- [消耗](/mechanics/exhaust.md)（虚无触发的去处）

## 源码

- `SeerDragonBloodline.cs`
