# 荣尽枯生

<img src="/images/cards/glory_exhaustion.png" alt="荣尽枯生" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 罕见
- **目标**: 自身
- **可升级**: 是（1 级）
- **关键词**: 凝驻

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 格挡 | 8 | 8 |
| 反弹中毒层数 | 4 | 6 |
| 反弹持续回合 | 3 | 3 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 获得<span style="color:#3aa675;font-weight:600">8</span>点<span style="color:#d4a017;font-weight:600">格挡</span>。<span style="color:#3aa675;font-weight:600">3</span>回合内，受到伤害时对来源施加<span style="color:#3aa675;font-weight:600">4</span>层<span style="color:#d4a017;font-weight:600">中毒</span>。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 获得<span style="color:#3aa675;font-weight:600">8</span>点<span style="color:#d4a017;font-weight:600">格挡</span>。<span style="color:#3aa675;font-weight:600">3</span>回合内，受到伤害时对来源施加<span style="color:#3aa675;font-weight:600">6</span>层<span style="color:#d4a017;font-weight:600">中毒</span>。

## 小贴士

- **格挡+反弹双效**：1 费获得 8 [格挡](/mechanics/block.md) + 获得[荣尽枯生](/powers/glory_exhaustion_power.md)能力 3 层——每个敌方回合内受到来自敌人的伤害时，对伤害来源施加中毒，是防御+反击一体牌。
- **反弹机制细节**：触发条件是"受到伤害且来源是敌人"——不限于攻击伤害，敌人施加的中毒/灼烧等 DoT 掉血（来源仍算敌人）同样触发反弹；自己打自己或无来源的掉血不触发。多个敌人轮流攻击时每次受击都各反弹一次，敌人攻击越频繁、段数越多，中毒叠得越快。
- **持续时间**：能力 3 层，每个自己回合开始前 -1 层，覆盖打出后的 **3 个敌方回合**（反弹在敌方回合生效、衰减在自己回合开始前，正好错开不损失）。多次打出层数叠加，覆盖时间顺延。
- **中毒机制**：中毒生物在自身回合开始时失去等于层数的生命，随后层数减半。多次受击不断叠加，敌人攻击频率越高毒性滚得越快。
- **格挡保底**：8 格挡保证反弹期间不裸奔。注意格挡挡掉的伤害**依然触发反弹**（判定的是"受到伤害"事件而非实际掉血），贴脸承伤不是必须的。
- **配合建议**：面对多段攻击/群殴型敌人收益最高；配合中毒加深/层数翻倍类效果放大反弹毒性；3 个敌方回合的窗口内敌人攻击欲望越强，这张牌越超值。
- **升级的关键性**：升级格挡不变（8），反弹中毒层数 4→6。毒伤提升 50%，对持续高压更有价值，优先级中等。
- **性价比**：1 费换格挡 + 3 个敌方回合的反伤毒，对高频攻击敌群是攻防一体的优质选择；对低频重击型单体敌人收益一般。

## 相关能力

- [荣尽枯生](/powers/glory_exhaustion_power.md)（受伤时对来源施加中毒，持续 3 回合）
- [中毒](/powers/poison_power.md)（回合开始时受到等于层数的伤害，随后层数减半）

## 相关机制

- [格挡](/mechanics/block.md)（获得 8 点格挡）

## 源码

- `SeerGloryExhaustion.cs`
