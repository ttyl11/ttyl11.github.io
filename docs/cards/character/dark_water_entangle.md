# 幽水缠绕

<img src="/images/cards/dark_water_entangle.png" alt="幽水缠绕" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 攻击
- **稀有度**: 普通
- **目标**: 敌方单体
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害 | 8 | 12 |
| [堕落](/powers/fallen_power.md)（上一张为技能牌） | 16 | 16 |
| [害怕](/powers/fear_power.md)回合（上一张为攻击牌） | 3 | 3 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 造成<span style="color:#3aa675;font-weight:600">8</span>点伤害。上一张牌是<span style="color:#d4a017;font-weight:600">技能牌</span>：[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">16</span>；是<span style="color:#d4a017;font-weight:600">攻击牌</span>：所有生物[<span style="color:#d4a017;font-weight:600">害怕</span>](/powers/fear_power.md)<span style="color:#3aa675;font-weight:600">3</span>回合。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 造成<span style="color:#3aa675;font-weight:600">12</span>点伤害。上一张牌是<span style="color:#d4a017;font-weight:600">技能牌</span>：[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">16</span>；是<span style="color:#d4a017;font-weight:600">攻击牌</span>：所有生物[<span style="color:#d4a017;font-weight:600">害怕</span>](/powers/fear_power.md)<span style="color:#3aa675;font-weight:600">3</span>回合。

## 详细机制

- **结算顺序**：先造成伤害 → 再按「上一张打出的牌的类型」结算附加效果。两个分支**互斥**（同一张牌不可能既是技能牌又是攻击牌）：
  - 上一张是**技能牌** → 自身[堕落](/powers/fallen_power.md) +16。
  - 上一张是**攻击牌** → **所有生物**（含自己与队友）[害怕](/powers/fear_power.md) 3 回合。
  - 上一张是能力牌 / 状态牌 / 诅咒牌，或本场战斗还没打出过任何牌 → 只结算伤害，无附加。
- **「上一张」的判定口径**：读取本场战斗中**自己最近一次打出的牌**（本牌自身此时还没进入记录，所以读到的确实是上一张）。注意这份记录**跨回合保留**——若本回合还没出过牌，读到的会是上一回合的最后一张牌；想要哪个分支，把对应类型的牌排在它前面即可。
- **[害怕](/powers/fear_power.md)**：拥有者的攻击伤害 ×0.7（-30%），回合结束时 -1 层。
- **害怕范围是所有生物**：自己与队友同样被削弱，联机时要注意队友的输出节奏。害怕只削**攻击伤害**，非攻击伤害不受影响。
- **伤害为攻击伤害**：吃[力量](/powers/strength_power.md) / 易伤 / [暴击](/mechanics/critical-strike.md)加成，可被[格挡](/mechanics/block.md)抵消。
- **害怕会削弱自己**：[害怕](/powers/fear_power.md)是对**所有生物**施加的，自己与队友同样 -30% 攻击伤害。触发攻击分支后，本回合后续自己的攻击也会变弱。
- **升级只提升伤害**：8 → 12（+4）。

## 小贴士

- **出牌顺序就是选择器**：想要堕落就先打一张技能牌，想要控场就先打一张攻击牌——1 费一张牌，两种用途随时切换。
- **害怕是「双向减伤」**：敌人伤害 ×0.7 是净收益，但自己与队友也吃这份削弱。这张牌打出后，本回合后续自己的攻击同样 -30%——想继续输出，就把它放在本回合最后一张攻击牌的位置；否则先打完其它攻击再打它。**联机时要先看队友的爆发回合**。
- **堕落 16 是稳定供能，但也是负债**：单靠这张牌要 **7 次**（16×7=112）才能把堕落推过 100 层，实际通常与其他堕落牌一起累积；跨过 100 的倍数会获得[混沌化身](/mechanics/chaos-incarnation.md)，同时触发[魔君接管](/powers/demon_takeover_power.md)强控乱打（混沌化身之后能量不足出牌还会扣最大生命）。想连着刷堕落，先确认这回合手里没有不想被自动打掉的牌。
- **跨回合要留意**：上回合最后打的是技能牌、本回合首打卡它，仍然会吃「技能牌」分支——别以为「本回合第一张」就一定是白板。
- **性价比**：1 费 8（升级 12）点攻击伤害，附加「堕落 +16」或「全体害怕 3 回合」二选一。单纯按伤害算略低于同费攻击牌，但它同时是堕落体系的供能牌与控制牌，功能密度高；升级 +4 伤害后回到合格线。

## 相关能力

- [堕落](/powers/fallen_power.md)（上一张为技能牌时 +16 层）
- [害怕](/powers/fear_power.md)（上一张为攻击牌时，所有生物 3 回合）

## 相关机制

- [PP系统](/mechanics/pp-system.md)（每次打出消耗 1 点 PP）
- [格挡](/mechanics/block.md)（伤害为攻击伤害，可被格挡抵消）
- [混沌化身](/mechanics/chaos-incarnation.md)（堕落满 100 层触发）

## 源码

- `SeerDarkWaterEntangle.cs`