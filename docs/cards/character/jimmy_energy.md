# 几米能量

<img src="/images/cards/jimmy_energy.png" alt="几米能量" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 5
- **能量消耗**: 3
- **类型**: 技能
- **稀有度**: 普通
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 全属性层数 | 1 | 1 |
| 生命回复 | 5 | 5 |
| 缓冲层数 | 1 | 1 |
| 下回合能量 | 2 | 4 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 全属性+<span style="color:#3aa675;font-weight:600">1</span>。恢复<span style="color:#3aa675;font-weight:600">5</span>点生命。获得<span style="color:#3aa675;font-weight:600">1</span>层[缓冲](/powers/buffer_power.md)。下回合获得<span style="color:#3aa675;font-weight:600">2</span>点[能量](/mechanics/energy.md)。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 全属性+<span style="color:#3aa675;font-weight:600">1</span>。恢复<span style="color:#3aa675;font-weight:600">5</span>点生命。获得<span style="color:#3aa675;font-weight:600">1</span>层[缓冲](/powers/buffer_power.md)。下回合获得<span style="color:#3aa675;font-weight:600">4</span>点[能量](/mechanics/energy.md)。

## 小贴士

- **全属性四合一**：[力量](/powers/strength_power.md)、[命中](/powers/accuracy_power.md)、[防御](/powers/defense_power.md)、[速度](/powers/speed_power.md)各 +1 层。力量每层 +1 攻击伤害；命中每层 +10% 暴击率（仅放大攻击伤害）；防御每层固定减少 1 点受到的攻击伤害（非攻击伤害不受影响）；速度每层回合开始多抽 1 张、并弃掉一半（向下取整）。
- **多重增益叠加**：1 张牌换 4 属性 + 5 回血 + 1 缓冲 + 2 能量。[缓冲](/powers/buffer_power.md)每层抵消下一次完整生命值损失，是即时常减伤。
- **下回合能量回本**：下回合获得 <span style="color:#3aa675;font-weight:600">2</span> 点能量，跨两回合合计净花 1 费（3-2=1）。升级后下回合 <span style="color:#3aa675;font-weight:600">4</span> 点能量，跨两回合反而净赚 1 点。
- **3 费换全套增益合理**：3 费换 4 属性 + 5 血 + 1 缓冲 + 2 能量（下回合回本后净 1 费），作为普通牌性价比优秀。升级只提高下回合能量（2→4），不改变本牌 3 费。
- **适合起手打出**：起手全属性提升 + 回血 + 缓冲 + 下回合能量，为整场战斗建立属性基础；升级后起手打出，下回合的能量回报更高。

## 相关能力

- [力量](/powers/strength_power.md)（原版增益，每层 +1 攻击伤害）
- [命中](/powers/accuracy_power.md)（mod 增益，正层每层 +10% 暴击率；负层让受击目标闪避 +5%）
- [防御](/powers/defense_power.md)（mod 增益，每层减少 1 点受到的攻击伤害）
- [速度](/powers/speed_power.md)（mod 增益，影响抽牌）
- [缓冲](/powers/buffer_power.md)（原版增益，每层抵消下一次生命值损失）

## 相关机制

- [能量](/mechanics/energy.md)（下回合获得 2/4 点能量）

## 源码

- `SeerJimmyEnergy.cs`
