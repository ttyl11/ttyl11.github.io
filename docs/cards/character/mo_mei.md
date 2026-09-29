# 墨眉

<img src="/images/cards/mo_mei.png" alt="墨眉" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 10
- **能量消耗**: 2
- **类型**: 攻击
- **稀有度**: 普通
- **目标**: 单体敌人
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害 | 16 | 24 |
| [墨染](/powers/mo_ran_power.md)层数 | 150 | 150 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> 获得[墨染](/powers/mo_ran_power.md)<span style="color:#3aa675;font-weight:600">150</span>，造成<span style="color:#3aa675;font-weight:600">16</span>点伤害。[吸强](/mechanics/xi_qiang.md)。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> 获得[墨染](/powers/mo_ran_power.md)<span style="color:#3aa675;font-weight:600">150</span>，造成<span style="color:#3aa675;font-weight:600">24</span>点伤害。[吸强](/mechanics/xi_qiang.md)。

## 详细机制

- **结算顺序**：先给自己加[墨染](/powers/mo_ran_power.md)<span style="color:#3aa675;font-weight:600">150</span> → 造成伤害 → 最后执行[吸强](/mechanics/xi_qiang.md)。
- **[墨染](/powers/mo_ran_power.md)是纯计数资源**：自身回合开始时每 <span style="color:#3aa675;font-weight:600">211</span> 层换 <span style="color:#3aa675;font-weight:600">10</span> 金币，达到 <span style="color:#3aa675;font-weight:600">985</span> 层清空并换 <span style="color:#3aa675;font-weight:600">1</span> 颗[通用刻印激活水晶](/relics/event/universal_engraving_gem_relic.md)；除此之外没有任何战斗效果、没有负面代价。
- **[吸强](/mechanics/xi_qiang.md)是全敌口径**：夺取**所有敌人**的[全属性](/mechanics/all_attributes.md)（力量/防御/命中/速度）正值提升，敌人的负属性不受影响。
- **单次 150 层凑不满一档**：<span style="color:#3aa675;font-weight:600">150</span> 层距第一档（<span style="color:#3aa675;font-weight:600">211</span>）还差 <span style="color:#3aa675;font-weight:600">61</span> 层，打两张就是 <span style="color:#3aa675;font-weight:600">300</span> 层，回合开始时即可拿到一次金币。

## 小贴士

- **它是墨染体系的加速器**：<span style="color:#3aa675;font-weight:600">150</span> 层一次性到账，直接把"墨染经济"推到第一档金币线附近——想围绕墨染拿金币/水晶，这是最快的单卡启动。
- **配合雁翎是指数滚雪球**：[雁翎](/relics/common/yan_ling.md)每回合让墨染翻倍，<span style="color:#3aa675;font-weight:600">150</span> 层进去后按 <span style="color:#3aa675;font-weight:600">300</span> → <span style="color:#3aa675;font-weight:600">600</span> → <span style="color:#3aa675;font-weight:600">1200</span> 一路翻上去，两三回合就能摸到 <span style="color:#3aa675;font-weight:600">985</span> 层的水晶线。
- **先蹭墨染再打人，顺序不吃亏**：加的墨染是自己的、伤害打的是敌人，两件事互不干扰；吸强放在最后，即使这一击把目标打死，也还能夺其它敌人的属性。
- **墨染没有代价，早打早赚**：加墨染不会像[堕落](/powers/fallen_power.md)那样带来失控风险，属于纯粹的资源投放——抽到就可以放心出。
- **性价比**：2 费买 <span style="color:#3aa675;font-weight:600">16</span>（升级 <span style="color:#3aa675;font-weight:600">24</span>）伤害 + <span style="color:#3aa675;font-weight:600">150</span> 墨染 + 全敌吸强，伤害部分只是顺带，真正值钱的是资源投放与吸强，是墨染/属性流的中坚牌。

## 相关能力

- [墨染](/powers/mo_ran_power.md)（自身 +150 层）
- [力量](/powers/strength_power.md) / [防御](/powers/defense_power.md) / [命中](/powers/accuracy_power.md) / [速度](/powers/speed_power.md)（吸强夺取的四维）

## 相关机制

- [吸强](/mechanics/xi_qiang.md)（全敌夺取属性提升）
- [全属性](/mechanics/all_attributes.md)
- [PP系统](/mechanics/pp-system.md)
- [格挡](/mechanics/block.md)（伤害为攻击伤害，可被格挡抵消）

## 相关遗物

- [雁翎](/relics/common/yan_ling.md)（每回合让墨染翻倍）
- [学神](/relics/shop/study_god.md)（战斗开始直接给墨染 333 层）

## 源码

- `SeerMoMei.cs`