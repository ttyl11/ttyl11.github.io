# 魇魔

<img src="/images/relics/seer_yuanmo.png" alt="魇魔" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物

- **稀有度**: 稀有

## 描述

你造成的<span style="color:#3aa675;font-weight:600">卡牌伤害</span>改为转化等量<span style="color:#d4a017;font-weight:600">[灾厄](/powers/doom_power)</span>（敌人不再损失生命）。你的<span style="color:#d4a017;font-weight:600">回合结束</span>时，持<span style="color:#d4a017;font-weight:600">[灾厄](/powers/doom_power)</span>的敌人获得<span style="color:#3aa675;font-weight:600">2</span>层<span style="color:#d4a017;font-weight:600">[虚弱](/powers/weak_power)</span>与<span style="color:#3aa675;font-weight:600">2</span>层<span style="color:#d4a017;font-weight:600">[易伤](/powers/vulnerable_power)</span>。

- **伤害转化灾厄**：你每造成一份卡牌伤害，敌人不再损失等量生命，而是获得**等量[灾厄](/powers/doom_power)**。伤害越高，累积的灾厄越多。
- **回合结束诅咒**：在你的回合结束时，每一个持灾厄（层数 ≥ 1）的存活敌人，都会获得 <span style="color:#3aa675;font-weight:600">2</span> 层[虚弱](/powers/weak_power)和 <span style="color:#3aa675;font-weight:600">2</span> 层[易伤](/powers/vulnerable_power)，倾向持续压制敌方。

## 机制说明

- **[灾厄](/powers/doom_power)**（原版）是一种"死刑倒计时"：在该生物自己的回合结束时，若其层数 **≥ 当前生命**，则直接处决——这不是伤害结算，格挡、[无实体](/powers/intangible_power.md)、减伤都无法拦截。
- **只作用于卡牌直接伤害**：由你打出的攻击/技能牌直接造成的伤害才会被转化。非卡牌来源的伤害（如中毒、烧伤、固定伤害等 DoT 与直伤）**不受影响**，仍会正常扣敌人生命，并被你回合末施加的易伤进一步放大。
- **灾厄只累计、不减**：被转化的灾厄层数不会自动下降，只会一路堆积，直到触发处决。你做的越多，敌人越接近被"灾厄线"吞没。
- **回合末的是"目标筛选"**：魔法发生在你自己回合结束——所有存活且携带 ≥1 层灾厄的敌人，都吃满 <span style="color:#3aa675;font-weight:600">2</span> 虚弱 + <span style="color:#3aa675;font-weight:600">2</span> 易伤，与它们身上灾厄具体多少无关。

## 风味文字

<span style="color:#d44;font-weight:600">噩梦缠身，灾厄临降。</span>

## 小贴士

- **这是一件"软刀子"遗物**：它不直接杀人，却把每一次卡牌攻击都变成一份"灾厄存入"。只要你的输出让灾厄堆积超过敌人当前生命，敌人就会在它自己回合结束时被直接处决——对高护甲、高减伤的"铁乌龟"敌人尤其致命，因为它们挡得住伤害，却挡不住灾厄的处决。

- **压血线与控灾厄节拍**：灾厄判定看"该生物当前生命"，且发生在**敌人自己回合结束**。敌人回合内会先正常行动一轮，行动结束后才结算处决——所以别指望灾厄替你挡住它那一轮输出；反过来，你自己回合把血量压到灾厄线以下，它行动完就该死了。

- **回合末双 debuff 的核心作用**：每回合都往所有灾厄携带者身上叠 <span style="color:#3aa675;font-weight:600">2</span> 虚弱（削弱它们接下来的输出）+ <span style="color:#3aa675;font-weight:600">2</span> 易伤（放大它们承受的非卡牌伤害）。在灾厄处决真正落地前，这套 debuff 就是你的生存与收割保险——也正因如此，要善用**非卡牌伤害**（DoT、固定伤害等）去吃这份易伤红利。

- **配合思路**：先靠卡牌攻击把灾厄灌起来、同时囤 debuff，再用 DoT/固定伤害这类不受转化影响的伤害快速跌破灾厄线完成斩杀，两股力一起推，实际击杀周期比纸面快很多。

- **性价比**：稀有。它不是常规的"加伤/减伤"，而是把攻击输出改写成"处决倒计时 + 每回合格档 debuff"的组合——输出越足越强，但对需要秒杀（逼退、触发亡语）的高压对局会显得"杀不快"，属于拉锯、消耗向的稀有遗物。

## 源码

- `SeerYuanmo.cs`