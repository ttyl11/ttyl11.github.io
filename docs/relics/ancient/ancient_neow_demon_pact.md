# 魔裔契约

<img src="/images/relics/ancient_neow_demon_pact.png" alt="魔裔契约" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 先古

### 数值参数

| 参数 | 数值 |
|---|---|
| 恶魔男爵数量 | 3 |

## 描述

拾起时，获得<span style="color:#3aa675;font-weight:600">3</span>个遗物<span style="color:#d4a017;font-weight:600">[恶魔男爵](/relics/uncommon/demon_baron.md)</span>和1张<span style="color:#d4a017;font-weight:600">[保底](/cards/curse/guaranteed.md)</span>。

- **拾起发放**：拾起时循环获得恶魔男爵数量个恶魔男爵遗物。
- **保底牌**：生成 1 张保底加入主牌组。

## 风味文字

<span style="color:#d44;font-weight:600">恶魔的馈赠。</span>

## 小贴士

- **3 个恶魔男爵叠加**：拾起时一次性获得 3 个[恶魔男爵](/relics/uncommon/demon_baron.md)，效果叠加——恶魔男爵每回合给所有敌人等于回合数的灾厄，3 个就是 3 倍灾厄。灾厄是即死机制：敌人回合结束时若灾厄值≥当前生命，直接死亡。3 倍灾厄意味着第 5 回合累计 45 层灾厄（1+2+3+4+5=15，×3=45），足以即死大部分非 Boss 敌人。
- **堕落也在翻 3 倍**：每个恶魔男爵在给灾厄的同时，还会给拥有者叠加等于回合数的[堕落](/powers/fallen_power.md)——3 个就是每回合 +3×回合数，第 5 回合累计同样 45 层。灾厄在杀敌，堕落却在把自己推向魔君接管，长战必须把这条暗账算进去。
- **杂耍也翻 3 倍**：每个恶魔男爵开局给 1 层[杂耍](/powers/juggling_power.md)（每回合第 3 张攻击牌复制入手牌），3 个 = 3 层 = 第 3 张攻击牌复制 3 张。攻击牌密集的卡组收益极高。
- **战后塞牌膨胀牌组**：每个恶魔男爵战斗胜利后往牌组塞 1 张小丑牌，3 个 = 每场战斗后多 3 张。长线跑会快速膨胀牌组，需要定期移牌。
- **保底不是纯废诅咒**：[保底](/cards/curse/guaranteed.md)是 0 费、可反复打出的诅咒——每次打出触发[碎心](/mechanics/shattered_heart.md)失去 2 点最大生命，然后 1% 概率（每级 +1%）获得随机遗物，否则只给 1 金币；带[进化](/mechanics/evolve.md)，每场战斗结束自动升级 +1%。前期概率低时别急着刷，留到后期当彩票。
- **性价比**：先古稀有度——一件遗物换 3 件罕见遗物 + 3 层杂耍 + 3 倍灾厄 + 每场 3 张小丑，收益极其丰厚。代价是 1 张保底、牌组膨胀，以及 3 倍堕落带来的失控压力。先古的定价合理，拿到就是质变。

## 源码

- `SeerAncientNeowDemonPact.cs`
