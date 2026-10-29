# 传说结界

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物招式——[史莱姆国王](/monsters/normal/slime_king_monster.md)的"传说结界"、[暴君史莱姆](/monsters/normal/tyrant_slime_monster.md)的"绝望结界"（同一能力，1 层）

<img src="/images/powers/legendary_barrier_power.png" alt="传说结界" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 无（不随增益/减益清除而消失）
- **叠加方式**: 计数（Counter）
- **可见**: 是

## 描述

免疫<span style="color:#d44;font-weight:600">异常状态</span>与属性下降。

## 详细机制

- **免疫全部异常状态**：27 种异常状态都**无法施加**到持有者身上——施加量直接归零，不分正负层数，睡眠、烧伤、中毒、石化、诅咒、臣服、凝滞……全部挡下。
- **免疫能力下降**：力量、防御、命中、速度、先制受到**负向修改**（降低）时归零；[虚弱](/powers/weak_power.md)、[易伤](/powers/vulnerable_power.md)的**负层变化**也同样归零。注意：正常「施加虚弱/易伤」是正层，不会被拦截。
- **整场常驻**：结界无层数衰减、类型为「无」（不被清增益/清减益移除），施加后整场战斗永久生效。
- **与「异常免疫」的区别**：[异常免疫](/powers/debuff_immune_power.md)按敌方回合递减层数（挡 N 次），结界永久且不消耗。

## 小贴士

- **别用异常流打结界怪**：中毒/烧伤/虚弱/石化等异常全部被直接免疫，DoT 与削攻流对它们完全失效——只能靠直接伤害或[固定伤害](/powers/fixed_damage_power.md)。
- **削属性同样无效**：想压制它们的输出只能用直接伤害快速击杀，力量/速度削弱都白费。
- **它本身没有防御能力**：结界只免异常与属性下降，不带格挡/无实体/覆甲——纯攻击伤害全程有效，集中火力速杀是正解。

## 相关怪物

- [史莱姆国王](/monsters/normal/slime_king_monster.md)（招式"传说结界"、连击"传说结界·国王之怒"）
- [暴君史莱姆](/monsters/normal/tyrant_slime_monster.md)（招式"绝望结界"、连击"幻象迭起·绝望结界"）

## 源码

- `SeerLegendaryBarrierPower.cs`
