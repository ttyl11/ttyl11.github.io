# 挽尘吟

<img src="/images/cards/retain_dust_chant.png" alt="挽尘吟" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 10
- **能量消耗**: 1
- **类型**: 攻击
- **稀有度**: 普通
- **目标**: 单个敌方
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害 | 6 | 6 |
| 触发阈值 | 4 | 6 |
| PP | 10 | 10 |
| 最大PP | 10 | 10 |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> [<span style="color:#d44;font-weight:600">消强</span>](/mechanics/xiao_qiang.md)。造成<span style="color:#3aa675;font-weight:600">6</span>点伤害。实际伤害<<span style="color:#3aa675;font-weight:600">4</span>：获<span style="color:#3aa675;font-weight:600">1</span>层[<span style="color:#d4a017;font-weight:600">缓冲</span>](/powers/buffer_power.md)。

## 升级后

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> [<span style="color:#d44;font-weight:600">消强</span>](/mechanics/xiao_qiang.md)。造成<span style="color:#3aa675;font-weight:600">6</span>点伤害。实际伤害<<span style="color:#3aa675;font-weight:600">6</span>：获<span style="color:#3aa675;font-weight:600">1</span>层[<span style="color:#d4a017;font-weight:600">缓冲</span>](/powers/buffer_power.md)。

## 详细机制

- **消强**：移除目标[全属性](/mechanics/all_attributes.md)（力量 / 防御 / 命中 / 速度）四项的**正向层数**（负向层数不受影响）。
- **"实际伤害"取穿透伤害**：判定用的是扣完[格挡](/mechanics/block.md)后**真正打掉的血量**（`UnblockedDamage`），不含被格挡的部分。
- **触发条件**：穿透伤害 **< 阈值**（初始 4，升级 6）时，自身获得 1 层[缓冲](/powers/buffer_power.md)。穿透伤害为 0（被完全格挡）同样触发。
- **[缓冲](/powers/buffer_power.md)**：抵挡下一次生命损失（该次伤害归零），触发后层数 -1。
- **结算顺序**：消强 → 造成伤害 → 判定并给缓冲。

## 小贴士

- **反直觉设计：伤害打得越低越赚**。对高格挡敌人（穿透伤害被压到 0~3）几乎必给缓冲；对毫无防御的敌人反而拿不到。
- **本质是"对高防敌人的续航牌"**：先用消强剥掉敌人的防御属性，再用 6 点小伤害去撞格挡，稳定换 1 层缓冲。消强与"打不动"在这里形成了正向配合。
- **升级把阈值从 4 提到 6**，触发窗口明显变宽（穿透伤害 <6 都给缓冲），是实打实的强化。
- **PP 10 偏高**，属于需要长期养成 PP 才能反复使用的卡；单场收益偏低，定位是功能牌而非主力输出。
- **与[尘封八荒](./dust_sealed_eight_wastes.md)同源**：两张牌都带消强，但尘封八荒偏输出与逝者亡语积累，挽尘吟偏防御续航。

## 相关能力

- [缓冲](/powers/buffer_power.md)（抵挡下一次生命损失）

## 相关机制

- [PP系统](/mechanics/pp-system.md)（PP 消耗）
- [消强](/mechanics/xiao_qiang.md)（移除敌方四维正向层数）
- [全属性](/mechanics/all_attributes.md)（力量/防御/命中/速度四项）
- [格挡](/mechanics/block.md)（决定"实际伤害"的穿透量）

## 源码

- `SeerRetainDustChant.cs`
