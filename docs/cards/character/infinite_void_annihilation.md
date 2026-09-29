# 无限·虚数湮灭

<img src="/images/cards/infinite_void_annihilation.png" alt="无限·虚数湮灭" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 3
- **能量消耗**: 2
- **类型**: 攻击
- **稀有度**: 罕见
- **目标**: 所有敌方
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害 | 12 | 12 |
| 堕落 | 33×敌人数 | 33×敌人数 |
| 能量消耗 | 2 | 1 |
| PP | 3 | 3 |
| 最大PP | 3 | 3 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">3</span>/<span style="color:#3aa675;font-weight:600">3</span> 对所有敌人造成<span style="color:#3aa675;font-weight:600">12</span>点伤害并施加[封属](/mechanics/intent)（非攻击意图效果失效）。[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">33×敌人数</span>。

## 升级后

耗能<span style="color:#3aa675;font-weight:600">-1</span>。PP: <span style="color:#3aa675;font-weight:600">3</span>/<span style="color:#3aa675;font-weight:600">3</span> 对所有敌人造成<span style="color:#3aa675;font-weight:600">12</span>点伤害并施加[封属](/mechanics/intent)（非攻击意图效果失效）。[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">33×敌人数</span>。

## 小贴士

- **攻击牌自带伤害**：对所有敌人造成 <span style="color:#3aa675;font-weight:600">12</span> 点攻击伤害（受[力量](/powers/strength_power.md)/[易伤](/powers/vulnerable_power.md)影响），是全屏 AOE，多敌人时价值放大。
- **封属按类型生效，只取消非攻击部分**：对每个敌人施加[封属](/mechanics/intent)——非攻击意图（格挡、增益、召唤、施加诅咒、塞状态牌等）效果**全部**失效，**攻击意图原样保留照常出手**。敌人"攻击+增益"的组合回合会跳过增益、照常打你；纯技能回合（蓄力/召唤/纯增益）则整回合空过。用前先看敌方意图栏——它惩罚的是"蓄力回合"而非"输出回合"。
- **纯攻击意图的敌人不受封属影响**：意图全是攻击的敌人，此牌只吃到 12 点伤害，封属部分落空。封属的控场价值集中在有技能意图的敌人上。
- **2 费与升级**：2 费换"全屏 12 伤 + 全敌人技能回合跳过"，伤害+控场一体；升级后 1 费，灵活性大幅提升，可更随意地当过渡 AOE 打。
- **堕落 = 33×敌人数：人数越多越接近失控**：堕落按敌人数量 ×<span style="color:#3aa675;font-weight:600">33</span> 结算——3 个敌人就是 <span style="color:#3aa675;font-weight:600">99</span> 层，恰好差<span style="color:#3aa675;font-weight:600">1</span>触发[魔君接管](/powers/demon_takeover_power.md)。堕落是负面机制，每满<span style="color:#3aa675;font-weight:600">100</span>层会强制接管乱打手牌；多怪房打这张群控 AOE 时几乎必然把失控阈值顶到嘴边，好在接管连带抽<span style="color:#3aa675;font-weight:600">3</span>张与混沌化身，坏而不致命，但要有心理预期。

## 源码

- `SeerInfiniteVoidAnnihilation.cs`
