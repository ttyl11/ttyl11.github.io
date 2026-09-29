# 无影剑客

<img src="/images/relics/seer_shadowless_swordsman.png" alt="无影剑客" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 罕见

### 数值参数

| 参数 | 数值 |
|---|---|
| 每回合结束自动打出次数 | 1 |

## 描述

你的回合结束时，自动打出<span style="color:#d4a017;font-weight:600">弃牌堆</span>的一张<span style="color:#d4a017;font-weight:600">君王之剑</span>。

每次打出<span style="color:#d4a017;font-weight:600">君王之剑</span>后，自身<span style="color:#d44;font-weight:600">[堕落](/powers/fallen_power.md)</span>等于其当前伤害值。

## 风味文字

<span style="color:#d44;font-weight:600">无影剑客。</span>

## 详细机制

- **触发时机**：你自己的回合结束时触发（`AfterSideTurnEnd` 且 `side` 等于持有者一方），只处理自己回合的结尾，敌人回合结束不触发。
- **来源限定"弃牌堆"**：只在**弃牌堆**里找君王之剑（SovereignBlade），消耗堆、手牌、抽牌堆都不取；取到弃牌堆中第一张君王之剑，若不存在则本回合不触发。
- **必须仍可打出**：若该牌因费用/条件已不可打出（`CanPlay` 为否），跳过本次触发。
- **自动打出且免费用**：通过 `CardCmd.AutoPlay` 直接打出，无需支付费用（不含法力/PP 消耗），选中后立即结算。
- **目标选择**：若君王之剑需要指定单一目标（非自身 / 非全体敌人），则从当前可命中的敌人中随机选一个，使用 `RunState.Rng.CombatTargets` 同步 RNG 保证多人局一致。
- **每回合结束打 1 张**：一次回合结束只自动打出 1 张君王之剑（取第一张）。
- **打出即堕落**：任意君王之剑被打出后（遗物回合末自动打出、或玩家手动打出都算），结算完成时自身获得等于该剑**当前伤害值**的[堕落](/powers/fallen_power.md)。数值读取 `DynamicVars.Damage.BaseValue`（君王之剑基础伤害 10）——若剑的伤害被[神剑·天音](/relics/uncommon/divine_sword_tianyin.md)等效果提升或调整，堕落数值同步增减。

## 小贴士

- **给"弃牌堆回收"牌组加自动输出**：罕见稀有度下，只要弃牌堆里躺着一张君王之剑（常被丢弃/弃牌流堆出来），每回合结束就白吃一次免费攻击，等于回合外多一次稳定的伤害补充。
- **关键在"弃牌堆要存得住君王之剑"**：主动靠弃牌、换牌机制把君王之剑送进弃牌堆，才能每回合稳定触发；若君王之剑一直留在手牌或消耗堆，遗物等于空转。
- **免费输出是白嫖，堕落是附带的负面**：自动打出不占费用和出牌次数，是"白嫖"的一次攻击；但"打出君王之剑→堕落"叠的是**负面层数**——堕落=剑当前伤害值，每回合稳定 10+ 层，逼近 100 会被[魔君接管](/powers/demon_takeover_power.md)失控。想走堕落体系（如配[混沌起源](/relics/starter/chaos_origin.md)把层数换成最大生命）就是免费进度，不想走流派的要留意层数别意外破百。
- **堕落数值跟着剑走**：堕落 = 剑当前的伤害值。多张君王之剑各带各的伤害，谁被打出就按谁的数值叠；剑被[神剑·天音](/relics/uncommon/divine_sword_tianyin.md)养成得越肥，单次叠的负面越多——伤害和失控风险同步放大。
- **性价比**：罕见稀有度、触发条件可控、输出免费且稳定，是优秀的自动输出小件；堕落作为顺带产物对堕落系牌组是免费进度，对其余牌组则是需要留意的负面层数。若从不弃牌则价值偏弱。

## 相关能力

- **君王之剑**（自动打出的目标牌）
- [弃牌堆](/mechanics/discard_pile.md)（取牌的来源位置）
- [堕落](/powers/fallen_power.md)（打出君王之剑的附加收益）

## 源码

- `SeerShadowlessSwordsman.cs`
- `SovereignBlade.cs`（原版君王之剑）