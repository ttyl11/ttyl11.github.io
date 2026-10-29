# 天奔流·东辉

<img src="/images/relics/seer_tian_ben_liu_dong_hui.png" alt="天奔流·东辉" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 史诗

### 数值参数

| 参数 | 数值 |
|---|---|
| 每张PP不满牌减伤 | 固定伤害 -20%（满5张完全免疫） |
| 释罪触发条件 | 回合结束时，PP不满牌数 > 7 |
| 大PP牌阈值 | 卡面最大 PP > 7 |
| 疲惫/冰封 | 全体敌人各 3 |
| 回合开始格挡 | 已损生命 ÷ 3（向下取整） |
| 释罪恢复 | 7 生命 |

## 描述

①每有<span style="color:#3aa675;font-weight:600">1</span>张<span style="color:#d4a017;font-weight:600">PP</span>不满的牌，<span style="color:#d4a017;font-weight:600">固定伤害</span>减<span style="color:#3aa675;font-weight:600">20%</span>（<span style="color:#3aa675;font-weight:600">5</span>张完全免疫）。<br/>②回合结束，<span style="color:#d4a017;font-weight:600">PP</span>不满牌数><span style="color:#3aa675;font-weight:600">7</span>：获<span style="color:#d4a017;font-weight:600">天奔释罪</span>（下回合触发）。<br/>③打出<span style="color:#d4a017;font-weight:600">最大PP</span>><span style="color:#3aa675;font-weight:600">7</span>的牌：清空其<span style="color:#d4a017;font-weight:600">PP</span>，全体敌人<span style="color:#d44;font-weight:600">疲惫</span><span style="color:#3aa675;font-weight:600">3</span>、<span style="color:#d44;font-weight:600">冰封</span><span style="color:#3aa675;font-weight:600">3</span>。<br/>④回合开始，任一敌人有<span style="color:#d4a017;font-weight:600">攻击意图</span>且无<span style="color:#d4a017;font-weight:600">属性提升</span>：获已损生命<span style="color:#3aa675;font-weight:600">1/3</span>的<span style="color:#d4a017;font-weight:600">格挡</span>。

## 详细机制

- **①减伤是常驻被动**：每有 1 张 PP 不满的牌，受到的**固定伤害** -20%，加算累计，5 张即 100%（完全免疫固定伤害），超过的无效；PP 不满的牌数会随消耗/回复实时变动，减伤随之浮动。
- **②改为回合结束时判定**：**自身回合结束时**结算一次，若此刻场内 PP 不满的牌 > 7，给自身赋予 1 层[天奔释罪](/powers/tian_ben_shi_zui_power.md)。能力在**下个自身回合开始时**触发完整效果（消强/解弱/清异常/免疫/回血/回 PP），触发后消失（一次性，不叠加）；每回合最多赋与一次。
- **③大 PP 牌的代价**：卡面最大 PP > 7 的牌打出即被清空剩余 PP（当作额外消耗），并让**全体敌人**获得疲惫 3、冰封 3——异常压制用，代价是废掉该牌后续的 PP 资源。
- **④回合开始判定**：仅在自身回合开始时检查——任一敌人当前意图含「攻击」且该敌人四维（力量/防御/命中/速度）均无正提升，则获得「最大生命 - 当前生命」÷3（向下取整）点格挡。
- **①只减严格口径的"固定伤害"**：代码只在 `TryModifyPowerAmountReceived` 中拦截 [固定伤害](/powers/fixed_damage_power.md) 能力（施加时改层数）。**中毒、烧伤等独立 DoT 不受减伤**；卡牌/怪物攻击也不受影响（那是攻击伤害）。

## 小贴士

- **②从"打牌触发"改为"回合结束触发"**：不再随出牌节奏波动，只要回合结束瞬间场上不满 PP 牌 > 7 就一定挂上天奔释罪，下回合开始兑现——触发更稳定，但无法再靠"打出一张牌立刻触发"同回合翻盘。
- **③清空 PP 反而助攻①/②**：最大 PP>7 的大牌被③清空剩余 PP 后，自己就变成一张"PP 不满的牌"计入①的减伤和②的计数——打出大牌不仅压制敌人，还顺手把"不满 PP 牌数"往上顶。
- **减伤+释罪一起养**：想常驻 100% 固定伤害免疫，至少保证场内 5 张不满 PP 的牌；配合"满 PP 才触发大 PP 牌"的节奏，把牌库压到刚好 8~10 张不满，①和②都能吃到。
- **释罪是"满不满牌>7"的开关**：需要触发时别急着回 PP；一旦触发会全牌回满，等于每回合白嫖一次"消强+解弱+清异常+回血+回PP"的整合大礼包。
- **③适合高费大 PP 进化链**：把"最大 PP 大的高阶牌"留到关键回合打出，一次清空 PP 换来全敌疲惫+冰封。
- **④是残血法宝**：血越残格挡越高（已损生命1/3），配合①的固定伤害减伤，血线越低越扛。

## 相关能力 / 机制

- [天奔释罪](/powers/tian_ben_shi_zui_power.md)（②赋与，下回合开始触发）
- [疲惫](/powers/fatigue_power.md)、[冰封](/powers/freeze_power.md)（③对全体敌人施加）
- [异常免疫](/powers/debuff_immune_power.md)（释罪获得1回合）

## 源码

- `SeerTianBenLiuDongHui.cs`