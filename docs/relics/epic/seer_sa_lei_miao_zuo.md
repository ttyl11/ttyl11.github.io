# 飒雷·喵佐

<img src="/images/relics/seer_sa_lei_miao_zuo.png" alt="飒雷·喵佐" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 史诗
- **进化链**: 喵佐 → 飒雷·喵佐 → 飒雷孤影·喵佐

### 数值参数

| 参数 | 数值 |
|---|---|
| 每回合可消耗的最大牌数 | 6 |
| 每消耗一张获得的力量 | 1 |
| 每消耗一张获得的堕落 | 3 |
| 进化的精英战斗数 | 4 |

## 描述

每回合开始时，选择消耗<span style="color:#d4a017;font-weight:600">弃牌堆</span>的最多<span style="color:#3aa675;font-weight:600">6</span>张牌，每消耗一张获得<span style="color:#3aa675;font-weight:600">1</span>点<span style="color:#d4a017;font-weight:600">力量</span>和<span style="color:#d44;font-weight:600">堕落</span><span style="color:#3aa675;font-weight:600">3</span>。击败<span style="color:#3aa675;font-weight:600">4</span>场精英战斗后，变化为<span style="color:#d4a017;font-weight:600">飒雷孤影·喵佐</span>。

## 风味文字

<span style="color:#d44;font-weight:600">雷影随身，孤身踏血。</span>

## 详细机制

- **触发时机**：你自己的回合开始时触发，弹出选牌界面从[gold]弃牌堆[/gold]中选择**最多 6 张**牌（可选 0 张直接跳过本次）。
- **力量结算**：每选中一张并消耗，获得 1 点[gold]力量[/gold]（永久本场）和 3 层[堕落](/powers/fallen_power.md)。6 张拉满就是每回合 +6 力量 +18 堕落。
- **消耗时清空 PP**：被消耗的牌若是[gold]PP 牌[/gold]，其 PP 会被**清空**（设为 0）再进入消耗牌堆——这与[奥利贡](/relics/uncommon/orichalcum.md)的"清空 PP 并消耗"一致，防止 PP 通过消耗牌堆被"囤积"再利用。
- **精英计数进化**：每次**击败精英战斗**，遗物上的计数器 +1（对局内以数字显示）。累计 4 场精英后自动进化为[飒雷孤影·喵佐](/relics/legendary/seer_sa_lei_gu_ying_miao_zuo.md)——进化瞬间会执行最终形态的"拾起"逻辑（随机给 3 张牌附魔孤雷风暴）。普通战斗/Boss 不计入精英计数。
- **每回合都可触发**：无每回合次数限制，只要弃牌堆有牌即可选。

## 小贴士

- **主战场是力量成长**：这是半局靠"每回合白嫖 0~6 点力量"滚雪球的遗物——配合多段攻击牌（连击、多目标）收益爆炸。尽量把启动牌先打出再启动本遗物，让弃牌堆积够可选牌。
- **堕落进账可观，但要算失控频率**：每消耗一张额外 +3 [堕落](/powers/fallen_power.md)，6 张拉满 = 每回合 +18——配索伦森的堕落体系约 6 回合推满一轮 100 层。这也意味着大约每 6 回合就要吃一次[魔君接管](/powers/demon_takeover_power.md)强控乱打；堆得快是把双刃剑。
- **消耗要挑**：弃牌堆里各牌价值不一，优先消耗**已无用的牌**（诅咒、状态、用完的爆发牌），留有用的核心牌循环；但在力量面前，即使消耗后期核心也不亏，因为每回合都能捞回新牌。
- **对 PP 牌的取舍**：一次性爆发型 PP 牌被打出后进弃牌堆，此时被此遗物消耗会清空 PP——如果你想保留它的 PP 复用，就别选它；反之选它等于把 PP 变现成力量。
- **进化路线的取舍**：4 精英要求主动走精英节点。若当前处于精英难打的流派（脆皮法师流），可以晚点进化——但史诗形态的力量成长本身已很强，不必急着变传说形态。
- **性价比**：史诗遗物里纯白送成长系，0 费无副作用、每回合稳定正收益，属于拿到即强化的类型。

## 相关能力 / 机制

- [gold]力量[/gold]（每消耗一张获得）
- [堕落](/powers/fallen_power.md)（每消耗一张 +3）
- PP 清空（消耗 PP 牌时）

## 相关遗物 / 进化

- [喵佐](/relics/rare/seer_miao_zuo.md)（前身，6 房间进化而来）
- [飒雷孤影·喵佐](/relics/legendary/seer_sa_lei_gu_ying_miao_zuo.md)（4 精英后进化）

## 源码

- `SeerSaLeiMiaoZuo.cs`