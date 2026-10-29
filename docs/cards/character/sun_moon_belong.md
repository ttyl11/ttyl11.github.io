# 日月安属

<img src="/images/cards/sun_moon_belong.png" alt="日月安属" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 5
- **能量消耗**: 2
- **类型**: 技能
- **稀有度**: 罕见
- **目标**: 敌方单体
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 沉默概率 | 80% | 80% |
| 沉默层数 | 2 | 2 |
| 属性锁定回合 | 3 | 3 |
| 能量消耗 | 2 | 1 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: 5/5 <span style="color:#3aa675;font-weight:600">80</span>%沉默对手，失败则免疫下一次受到的攻击并反弹为<span style="color:#d4a017;font-weight:600">固定伤害</span>。<span style="color:#3aa675;font-weight:600">3</span>回合内，敌人属性无法提升，我方属性无法下降。

## 升级后

PP: 5/5 <span style="color:#3aa675;font-weight:600">80</span>%沉默对手，失败则免疫下一次受到的攻击并反弹为<span style="color:#d4a017;font-weight:600">固定伤害</span>。<span style="color:#3aa675;font-weight:600">3</span>回合内，敌人属性无法提升，我方属性无法下降。

## 小贴士

- **沉默是伤害封顶不是禁言**：[沉默](/powers/silence_power.md)并非阻止敌人出牌，而是封顶其单次攻击伤害——若敌人单次攻击伤害超过 <span style="color:#3aa675;font-weight:600">30</span> 点，则该次伤害降为 <span style="color:#3aa675;font-weight:600">0</span>。对依赖大招的 Boss 极其有效，对小怪几乎无用。沉默施加 <span style="color:#3aa675;font-weight:600">2</span> 层，敌方回合结束时对其造成 <span style="color:#3aa675;font-weight:600">1</span> 点伤害并减少 <span style="color:#3aa675;font-weight:600">1</span> 层。
- **失败补偿是"弦月反弹"，不是记录伤害**：判定走 <span style="color:#3aa675;font-weight:600">80</span>% 概率（战斗随机源）；失败、或沉默被免疫/没有实际加上时，自身获得 <span style="color:#3aa675;font-weight:600">1</span> 层[弦月反弹](/powers/crescent_edge_reflect_power.md)。它的效果是：**下一次受到的攻击**先正常扣格挡，格挡后仍有未格挡伤害时，这部分伤害被完全抵消，并以[固定伤害](/powers/fixed_damage_power.md)形式在**攻击者下回合开始**结算；每次消耗 <span style="color:#3aa675;font-weight:600">1</span> 层。只挡攻击伤害，不挡持续伤害/固定伤害；它不会自动衰减，没挨打就一直留着。
- **属性锁定的双向保护**：无论沉默是否成功，都获得 <span style="color:#3aa675;font-weight:600">3</span> 层[日月安属·还原](/powers/sun_moon_belong_restore_power.md)——敌方[全属性](/mechanics/all_attributes.md)提升时立刻回降等量，我方全属性下降时立刻回升等量。覆盖力量、命中、防御、速度四项。衰减在**对方回合结束**进行（每层对应一个敌方回合），<span style="color:#3aa675;font-weight:600">3</span> 层恰好锁满 3 个敌方回合的属性变化。
- **升级降费不改变机制**：升级后耗能从 <span style="color:#3aa675;font-weight:600">2</span> 降为 <span style="color:#3aa675;font-weight:600">1</span>，沉默概率、层数、属性锁定回合数均不变。升级纯粹提升打出灵活性。
- **性价比**：2 费偏贵但机制全面——沉默或弦月反弹加属性锁定双重控制，升级后 1 费更灵活，适合应对叠属性或大招型 Boss。

## 相关能力

- [沉默](/powers/silence_power.md)（伤害封顶异常状态）
- [弦月反弹](/powers/crescent_edge_reflect_power.md)（失败补偿：抵消下一次攻击的未格挡伤害并反弹为固定伤害）
- [日月安属·还原](/powers/sun_moon_belong_restore_power.md)（属性锁定）
- [固定伤害](/powers/fixed_damage_power.md)（反弹伤害类型）

## 相关机制

- [全属性](/mechanics/all_attributes.md)（力量 / 命中 / 防御 / 速度）
- [异常状态](/mechanics/abnormal-status.md)

## 源码

- `SeerSunMoonBelong.cs`
