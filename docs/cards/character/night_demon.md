# 染夜天妖

<img src="/images/cards/night_demon.png" alt="染夜天妖" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 5
- **能量消耗**: 2
- **类型**: 技能
- **稀有度**: 罕见
- **目标**: 无
- **可升级**: 是（1 级）
- **关键词**: [弹控](/mechanics/dan_kong.md)、[反弱](/mechanics/fan_ruo.md)、[随机异常](/mechanics/sui_ji_yi_chang.md)

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 反弹回合 | 3 | 3 |
| 状态牌数 | 2 | 2 |
| 异常回合 | 2 | 2 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |
| 格挡 | 8 | 15 |

## 描述

PP: 5/5 <span style="color:#d44;font-weight:600">弹控</span><span style="color:#3aa675;font-weight:600">3</span>。<span style="color:#d44;font-weight:600">反弱</span>，成功则所有敌人<span style="color:#d44;font-weight:600">随机异常</span><span style="color:#3aa675;font-weight:600">2，2</span>。获得<span style="color:#3aa675;font-weight:600">8</span><span style="color:#d4a017;font-weight:600">格挡</span>。

## 升级后

PP: 5/5 <span style="color:#d44;font-weight:600">弹控</span><span style="color:#3aa675;font-weight:600">3</span>。<span style="color:#d44;font-weight:600">反弱</span>，成功则所有敌人<span style="color:#d44;font-weight:600">随机异常</span><span style="color:#3aa675;font-weight:600">2，2</span>。获得<span style="color:#3aa675;font-weight:600">15</span><span style="color:#d4a017;font-weight:600">格挡</span>。

## 小贴士

- **反转是"负值翻正"——施加翻倍正层数抵消并翻正**：对力量/防御/命中/速度四种属性逐一检查——若为负层数，施加**该负值绝对值 <span style="color:#3aa675;font-weight:600">2</span> 倍**的正层数。如力量 <span style="color:#3aa675;font-weight:600">-2</span> → 施加 <span style="color:#3aa675;font-weight:600">+4</span> → 最终 <span style="color:#3aa675;font-weight:600">+2</span>；力量 <span style="color:#3aa675;font-weight:600">-3</span> → 施加 <span style="color:#3aa675;font-weight:600">+6</span> → 最终 <span style="color:#3aa675;font-weight:600">+3</span>。所以反转后正层数等于原来负层数的绝对值——你被降了多少，反转后就有多少正层数，不会凭空产生额外属性。
- **无负属性时只打格挡+免疫**：反转需要自身**先有负属性**才触发。若四属性全是正数或零，这张牌只给格挡和异常免疫反弹——等于一张纯生存牌。所以它天然配合能让自身属性下降的流派使用，没负属性时打出来价值大打折扣。
- **异常免疫·反弹是真反弹**：打出即获得<span style="color:#3aa675;font-weight:600">3</span>回合[异常免疫·反弹](/powers/debuff_immune_reflect_power.md)——不仅免疫异常状态，还把敌人施加给你的异常状态**原样反弹给所有敌人**。面对爱挂异常的 Boss（中毒/衰弱/冰封流）时是硬反制手段，反弹的异常会被分配给每个可命中敌人。
- **群体异常是真随机，多人两端一致**：反转成功后对所有敌人施加<span style="color:#3aa675;font-weight:600">2</span>次随机异常状态，每次从<span style="color:#3aa675;font-weight:600">23</span>种异常里独立抽取（**可能重复抽到同一种**；随机池已排除狂暴、星赐、凝滞、超频），每个敌人都会吃到这两次施加的异常。多人模式下两端抽取结果一致。
- **反转命中/速度的即时收益弱**：力量正层数直接加攻击伤害，防御正层数直接减受击伤害，但**命中正层只提供 +10%/层的暴击率、并使受击目标闪避 -5%/层**（仅放大攻击伤害），**速度单层即多抽 1 张、须弃掉半数**。所以若自身只有命中或速度是负数，反转后即时收益不如力量/防御明显——但反转命中能换来实打实的暴击率，反转速度能立刻多抽并过滤手牌。
- **升级只加格挡**：格挡 <span style="color:#3aa675;font-weight:600">8</span>→<span style="color:#3aa675;font-weight:600">15</span>，其余数值不变。升级价值是提升纯生存能力，不改变反转/异常/免疫的机制。若你主要用它反转属性，升级收益有限；若当通用生存牌打，升级让格挡更顶。
- **性价比**：<span style="color:#3aa675;font-weight:600">2</span> 费合理——格挡+免疫反弹+反转+异常群攻四合一，多功能生存价公道。

## 相关能力

- [异常免疫·反弹](/powers/debuff_immune_reflect_power.md)：免疫异常状态并反弹给所有敌人
- [力量](/powers/strength_power.md)（原版能力，全属性之一）
- [防御](/powers/defense_power.md)（mod 能力，全属性之一）
- [命中](/powers/accuracy_power.md)（mod 能力，全属性之一）
- [速度](/powers/speed_power.md)（mod 能力，全属性之一）

## 源码

- `SeerNightDemon.cs`
