# 双生不朽

<img src="/images/relics/tezcatara_triple_card.png" alt="双生不朽" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 先古

## 描述

拾起时，获得1张<span style="color:#9b59b6;font-weight:600">好女孩</span>、1张<span style="color:#9b59b6;font-weight:600">好男孩</span>和1张<span style="color:#9b59b6;font-weight:600">不死之身</span>（均附<span style="color:#9b59b6;font-weight:600">注能</span>附魔）。

- **卡牌获取**：获得[好女孩](/cards/colorless/good_girl.md)、[好男孩](/cards/colorless/good_boy.md)各 1 张，永久加入牌组（主牌堆底部）；两张均为未升级状态。
- **注能附魔**：两张牌均附加[注能](/enchantments/imbued.md)附魔，每场战斗第 1 回合开始时自动打出，无需消耗能量。
- **注能牌置底**：带注能的卡牌战斗开始时置于抽牌堆底部——通常不会被起手抽走，第 1 回合直接从抽牌堆自动打出，不占手牌位。
- **本地化差异**：本地化文案还提到第三张「不死之身」，但当前源码只发放好女孩与好男孩两张。

## 风味文字

<span style="color:#d44;font-weight:600">能力。</span>

## 小贴士

- **两张能力免费自动释放**：[注能](/enchantments/imbued.md)附魔让[好女孩](/cards/colorless/good_girl.md)、[好男孩](/cards/colorless/good_boy.md)在每场战斗第 1 回合自动打出，相当于免费获得原本需要 2 点能量（1+1）才能打出的两张能力。
- **好女孩免费控场**：[好女孩](/powers/good_girl_power.md)每个你的回合开始时随机施加 2 层[异常状态](/mechanics/abnormal-status.md)（每层持续 2 回合，类型与目标均随机，可重复；升级后 3 层），全程免费干扰，有效降低敌人输出。
- **好男孩的防线**：[好男孩](/powers/good_boy_power.md)每个你的回合结束时提供 12 点[格挡](/mechanics/block.md)并叠加 1 层[防御](/powers/defense_power.md)（每层使受到的攻击伤害 -1），代价是每回合失去 1 点[力量](/powers/strength_power.md)（升级后 20 点格挡）——适合防守反击流，不适合靠力量堆伤害的流派。
- **一攻一守的组合**：好女孩压制对手输出、好男孩提供稳定格挡，两张都是"每回合自动生效"的长效能力，越早拿到收益越大。
- **性价比**：免费自动释放两张能力牌是稳定的能量收益，全程自动生效、不占手牌位，拿到就是纯赚，适合各种风格的卡组。

## 源码

- `SeerTezcataraTripleCard.cs`