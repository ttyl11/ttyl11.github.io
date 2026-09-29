# 鬼剑罗刹

<img src="/images/relics/ghost_sword_rakshasa.png" alt="鬼剑罗刹" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 普通

### 数值参数

| 参数 | 数值 |
|---|---|
| 每次消耗堕落 | 21 |
| 每次消耗力量 | 1 |

## 描述

卡牌被<span style="color:#d4a017;font-weight:600">[消耗](/mechanics/exhaust.md)</span>时：<span style="color:#d44;font-weight:600">[堕落](/powers/fallen_power.md)</span><span style="color:#3aa675;font-weight:600">21</span>，<span style="color:#d4a017;font-weight:600">[力量](/powers/strength_power.md)</span>+<span style="color:#3aa675;font-weight:600">1</span>。

- **消耗即触发**：任意自己拥有的卡牌被消耗时（主动消耗、虚无导致消耗均算）同时堕落21并+1力量。
- **无次数限制**：不设每回合上限，一次能消耗多少张就触发多少次。

## 风味文字

<span style="color:#d44;font-weight:600">鬼剑罗刹。</span>

## 小贴士

- **无上限叠力量**：每消耗1张牌，力量+1。单回合多段消耗（如批量消耗流）可一次性叠多层力量——这是真正的收益；堕落+21 只是顺带叠起的负面层数，消耗越多力量越密、堕落失控也越快。
- **堕落量很足，是债不是福**：约 5 次消耗就跨过一个百位，触发[混沌化身](/powers/soulson_chaos_incarnation_power.md)+抽3+[魔君接管](/powers/demon_takeover_power.md)（当回合失控自动打牌，索伦森通用）——堕落是**负面层数**，消耗流很快会撞上接管，走堕落体系顺带受益，其它角色要接受这份失控风险。
- **力量常驻成长**：每层力量+1最终伤害，配合攻击牌多的牌组，把"消耗动作"转化为稳定的输出叠加。
- **不挑牌组**：任意消耗手段都能触发，消耗流最适合——越频繁消耗，力量滚得越快，同时堕落失控也来得越快，收益与风险同步放大。

## 源码

- `SeerGhostSwordRakshasa.cs`