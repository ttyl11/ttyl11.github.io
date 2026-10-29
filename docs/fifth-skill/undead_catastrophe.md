# 沦·亡灵天灾

<img src="/images/cards/undead_catastrophe.png" alt="沦·亡灵天灾" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 第五技能
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 攻击
- **稀有度**: 普通
- **目标**: 敌方单体
- **关键词**: [凝驻](/mechanics/ningzhu.md)
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害 | 16 | 16 |
| 判定阈值 | 20 | 20 |
| 堕落 | 22 | 22 |
| 保留 | 否 | 是 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: 5/5 造成<span style="color:#3aa675;font-weight:600">16</span>点伤害。伤害≥<span style="color:#3aa675;font-weight:600">20</span>获<span style="color:#3aa675;font-weight:600">1</span>层<span style="color:#d4a017;font-weight:600">人工制品</span>，否则获<span style="color:#d4a017;font-weight:600">灾祸</span>。<span style="color:#d44;font-weight:600">堕落</span><span style="color:#3aa675;font-weight:600">22</span>。

## 升级后

PP: 5/5 造成<span style="color:#3aa675;font-weight:600">16</span>点伤害。伤害≥<span style="color:#3aa675;font-weight:600">20</span>获<span style="color:#3aa675;font-weight:600">1</span>层<span style="color:#d4a017;font-weight:600">人工制品</span>，否则获<span style="color:#d4a017;font-weight:600">灾祸</span>。<span style="color:#d44;font-weight:600">堕落</span><span style="color:#3aa675;font-weight:600">22</span>。

## 小贴士

- **默认走灾祸分支**：基础伤害 <span style="color:#3aa675;font-weight:600">16</span> 点，本身低于阈值 <span style="color:#3aa675;font-weight:600">20</span>。不加任何增益直接打出，必定获得灾祸而非人工制品。想稳定拿人工制品，得靠力量/易伤等把总伤害顶到 <span style="color:#3aa675;font-weight:600">21</span> 以上。
- **判定看总伤害，不看扣血**：高低比较基于敌人受到的"总伤害"（含被[格挡](/mechanics/block.md)的部分），不是实际扣血量。所以格挡不影响判定——只要面板伤害（含力量/易伤）>20，即便被格挡全额吸收，依然走人工制品分支。打高甲敌人也能稳定拿人工制品。
- **恰好 20 点是真空区**：总伤害刚好等于 <span style="color:#3aa675;font-weight:600">20</span> 时既不给人工制品也不给灾祸，白板收场。这个边界很容易踩到——基础 <span style="color:#3aa675;font-weight:600">16</span> 加 <span style="color:#3aa675;font-weight:600">4</span> 点力量是 <span style="color:#3aa675;font-weight:600">20</span>（啥都没有），加 <span style="color:#3aa675;font-weight:600">5</span> 点力量才是 <span style="color:#3aa675;font-weight:600">21</span>（人工制品）。
- **灾祸是攻击牌引擎**：灾祸每次你打出攻击牌就往[手牌](/mechanics/hand.md)塞随机攻击牌（数量等于灾祸层数），层数可叠加。走灾祸流时这张牌是稳定启动器，配合多段攻击能滚雪球；但塞进来的随机攻击牌不可控，可能稀释关键牌。
- **人工制品是减益盾**：1 层人工制品挡下一次可见减益（如[虚弱](/powers/weak_power.md)、[易伤](/powers/vulnerable_power.md)等），适合对抗爱挂减益的精英/Boss。但它只挡减益，不挡直接伤害。
- **凝驻：不洗入抽牌堆**：[凝驻](/mechanics/ningzhu.md)让此牌停留在[弃牌堆](/mechanics/discard_pile.md)，不会随洗牌进入抽牌堆——方便你主动规划何时再次抽到它（配合保留/回收弃牌堆的手段）。
- **升级只加保留**：升级后伤害、阈值都不变，仅添加[保留](/mechanics/retain.md)关键词。保留让这张牌能攒在手里等时机——比如等力量叠够再打去拿人工制品，对灾祸流也方便留住启动器。升级价值在于"留牌灵活性"，不提升单次强度。
- **堕落 22：分支牌上的固定暗账**：每次打出 +<span style="color:#3aa675;font-weight:600">22</span>[堕落](/powers/fallen_power.md)——堕落是负面机制，每满<span style="color:#3aa675;font-weight:600">100</span>层被[魔君接管](/powers/demon_takeover_power.md)强制乱打；PP<span style="color:#3aa675;font-weight:600">5</span> 打满就是 110 层、必触发一次。带[凝驻](/mechanics/ningzhu.md)的牌打不了太多轮，属可管理的暗账，但与灾祸流/人工制品流叠用时要一起看失控进度。
- **性价比**：1 费 <span style="color:#3aa675;font-weight:600">16</span> 点伤害本身中规中矩，价值在分支奖励与凝驻的牌堆控制上。需要围绕"顶伤害拿人工制品"或"吃灾祸滚攻击牌"做构筑才划算，单挂一般。

## 相关能力

- [人工制品](/powers/artifact_power.md)（高伤分支授予的减益盾）
- 灾祸（低伤分支授予的攻击牌生成能力）
- [堕落](/powers/fallen_power.md)（每打出一次固定 +22 层）

## 相关机制

- [保留](/mechanics/retain.md)（升级后获得的关键词）
- [凝驻](/mechanics/ningzhu.md)（不洗入抽牌堆，停留在弃牌堆）
- [堕落](/powers/fallen_power.md)（满 100 层触发魔君接管）

## 源码

- `SeerUndeadCatastrophe.cs`
