# 寂灭

<img src="/images/cards/nirvana_slash.png" alt="寂灭" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 基础牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 攻击
- **稀有度**: 基础
- **目标**: 敌方单体
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 基础伤害 | 6 | 10 |
| 堕落加成除数 | 10 | 10 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: 5/5 造成<span style="color:#3aa675;font-weight:600">6</span>点伤害，每<span style="color:#3aa675;font-weight:600">10</span>层<span style="color:#d44;font-weight:600">堕落</span>额外造成<span style="color:#3aa675;font-weight:600">1</span>点伤害。

## 升级后

PP: 5/5 造成<span style="color:#3aa675;font-weight:600">10</span>点伤害，每<span style="color:#3aa675;font-weight:600">10</span>层<span style="color:#d44;font-weight:600">堕落</span>额外造成<span style="color:#3aa675;font-weight:600">1</span>点伤害。

## 详细机制

- **堕落加伤向下取整**：额外伤害 = 当前[堕落](/powers/fallen_power.md)层数 ÷ 10 向下取整。堕落 9 层无加成、10 层 +1、19 层 +1、20 层 +2——小数部分不结算。
- **堕落战斗内不清零**：[堕落](/powers/fallen_power.md)层数在**本场战斗内不会清零**，每逢 100 层倍数触发一次[魔君接管](/powers/demon_takeover_power.md)；战斗结束后堕落能力随玩家能力一起清除，下场重新从 0 累积。所以加伤会随战斗推进稳定增长，越拖越高。
- **⚠️ 与关键词「寂灭」同名不同物**：[寂灭](/mechanics/nirvana.md)是 mod 关键词（打出后战斗结束从牌组移除本牌），本卡是索伦森初始攻击牌，**不携带**该关键词——名字相同，机制毫无关系，战斗结束本卡不会从牌组移除。

## 小贴士

- **索伦森的成长型打底攻击**：基础 <span style="color:#3aa675;font-weight:600">6</span> 点伤害（升级 <span style="color:#3aa675;font-weight:600">10</span>），加上堕落加伤——堕落 <span style="color:#3aa675;font-weight:600">100</span> 层时就是 <span style="color:#3aa675;font-weight:600">6+10=16</span> 点。从开局一路成长到后期，是索伦森卡组里越打越疼的基石牌。
- **堕落是刻度尺不是终点**：这张牌的价值跟着堕落走，而堕落本身又会触发魔君接管把整手牌打光——所以它的加伤和堕落体系的"失控爆发"是同一根曲线。续航思路是多打[消亡](/cards/basic/perish.md)、[堕世](/cards/basic/descent.md)积累堕落，靠这张牌把积累兑现成伤害。
- **升级的含金量**：基础伤害 <span style="color:#3aa675;font-weight:600">6 → 10</span>（+4），同样是 +4，但基数越大堕落加伤的占比越舒服。作为初始牌优先升级的性价比很高。
- **性价比**：<span style="color:#3aa675;font-weight:600">1</span> 费换"基础伤害 + 堕落成长"，是一张成本极低、随战斗滚雪球的攻击牌。

## 相关机制

- [堕落](/powers/fallen_power.md)（加伤来源）
- [寂灭](/mechanics/nirvana.md)（同名关键词，本卡不携带）

## 源码

- `SeerNirvanaSlash.cs`