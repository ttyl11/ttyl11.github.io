# 唤龙逆鳞

<img src="/images/relics/orobos_dragon_cards.png" alt="唤龙逆鳞" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 先古

### 数值参数

| 参数 | 数值 |
|---|---|
| 卡牌数量 | 6 |

## 描述

拾起时，获得<span style="color:#3aa675;font-weight:600">6</span>张随机包含龙字的Seer卡牌加入牌组。

- **龙牌判定**：按卡牌**内部类名**筛选——类名包含 "Dragon" 或 "龙" 即入选，与中文名是否带"龙"字无直接关系。
- **不限稀有度**：候选只按类名筛选，不叠加稀有度过滤——普通、罕见、稀有龙牌都可能被抽到（如罕见的[龙威](/cards/character/dragon_awe.md)）。
- **池子远多于 6 张**：类名含 Dragon 的赛尔卡共 21 张，所以每次只是从中随机取 6 张（互不重复，多端一致）。
- **加入位置**：直接进牌组（不是抽牌堆），永久保留直到被消耗或移除。

## 风味文字

<span style="color:#d44;font-weight:600">龙族的卡牌。</span>

## 小贴士

- **6 张随机龙牌直接铺底**：拾起瞬间牌组进 6 张随机龙牌——龙卡流的构筑起点直接完成一半，后续只需围绕这些牌补配合件；对比[拣选者手札](/relics/ancient/orobos_card_pool.md)（15 选 5 覆盖全稀有池）主题更聚焦但**没有选择权**，给什么用什么。
- **龙魂任务的头号加速器**：[龙魂](/cards/quest/dragon_soul.md)要求牌组攒齐 **12 张**龙牌触发奖励（打包全部龙遗物）——逆鳞一次贡献 6 张，再凑 6 张龙牌即可达标；注意达标结算时会**清空牌组所有龙牌**换一包龙遗物，拿逆鳞冲龙魂线时想清楚这个终局置换。
- **判定只看内部类名**：筛选逻辑认的是代码类名里的 "Dragon"/"龙"，不叠加任何稀有度过滤——[龙宴](/cards/character/dragon_feast.md)、[真龙形态](/cards/character/true_dragon_form.md)在池内，[龙威](/cards/character/dragon_awe.md)、[龙烙](/cards/character/dragon_brand.md)、[龙王波](/cards/character/dragon_king_wave.md)、[滔天龙汲水](/cards/character/soaring_dragon_water.md)这些普通/罕见件同样在池内、也可能被抽到。个别中文名带"龙"但类名不带的不入选，反之亦然。
- **与龙系遗物的天然联动**：[镇世·乔特鲁德](/relics/legendary/world_suppressor_jortrud.md)的格挡与攻击增伤按牌组龙牌数结算（每张龙牌 = 每回合 +1 格挡 + 攻击 +5%）——开局拿逆鳞 + 后续入手乔特鲁德，6 张底仓直接换成每回合 +8 格挡 + 攻击 +40% 的持续收益。
- **随机 6 张，结果不可规划**：池子里远不止 6 张龙牌，每次抽到的都是随机 6 张——[真龙形态](/cards/character/true_dragon_form.md)这种天花板不保证必得，[邪龙勿用](/cards/character/evil_dragon_unused.md)这类冷门件也可能混进来。好处是主题集中、数量可观，坏处是没法规避不想要的牌。
- **随机结果多端一致**：抽选走同步随机源，多人模式下两端拿到的 6 张完全相同。

## 源码

- `SeerOrobosDragonCards.cs`
