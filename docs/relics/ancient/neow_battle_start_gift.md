# 燃血战鼓

<img src="/images/relics/neow_battle_start_gift.png" alt="燃血战鼓" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 先古

### 数值参数

| 参数 | 数值 |
|---|---|
| 召唤数量 | 3 |
| 铸造数量 | 3 |
| 抽牌数量 | 1 |
| 能量获取 | 1 |
| 生命损失 | 1 |

## 描述

每场战斗首回合<span style="color:#d4a017;font-weight:600">[召唤](/mechanics/summon.md)</span><span style="color:#3aa675;font-weight:600">3</span>，<span style="color:#d4a017;font-weight:600">[铸造](/mechanics/forge.md)</span><span style="color:#3aa675;font-weight:600">3</span>，抽<span style="color:#3aa675;font-weight:600">1</span>张牌，获得<span style="color:#3aa675;font-weight:600">1</span>点<span style="color:#d4a017;font-weight:600">[能量](/mechanics/energy.md)</span>，失去<span style="color:#3aa675;font-weight:600">1</span>点生命。

- **触发时机**：每场战斗拥有者首回合开始时触发一次，整场战斗仅生效一次。
- **执行顺序**：依次进行 3 次奥斯提最大生命 +1（若奥斯提不在场则以 1 HP 召唤/复活）→ 3 次铸造 → 抽 1 张牌 → 获得 1 点能量 → 自身失去 1 点生命。

## 风味文字

<span style="color:#d44;font-weight:600">全能。</span>

## 小贴士

- **首回合资源拉满**：开局同时拿到 3 次奥斯提最大生命 +1（合计 +3 最大生命并回复 3 点生命）、3 次铸造、1 张抽牌、1 点能量，相当于免费送一个完整启动回合。第一回合就能让奥斯提登场并养厚 + 铸造储备，节奏比对手快一拍。
- **额外抽牌发生在正常抽牌之后**：回合开始先抽基础 5 张，然后本遗物再额外抽 1 张——首回合手牌直接 6 张起步，操作空间比常规开局大一圈。
- **召唤 / 铸造流派的核心起搏器**：依赖奥斯提最大生命或铸造层数的卡组收益最大——[铸造](/mechanics/forge.md)给所有君王之剑永久加伤害，开局白嫖 3 次铸造等于君王之剑开局 +3 伤害（首次铸造时若没有剑会生成一把）；吃奥斯提最大生命的卡（如按奥斯提最大生命值结算的）开局就有 +3 最大生命打底。无相关流派时这遗物价值打折明显——奥斯提最大生命 +3 没有后续养成手段就是白板肉盾，铸造对 [宝剑](/cards/colorless/sword.md)/[万剑归一](/cards/character/myriad_swords_unity.md) 体系外也无处生效。
- **代价是 1 点不可格挡伤害**：失去的 1 点生命走伤害结算，格挡无法抵消。单场战斗 1 点不算痛，但长跑图累积下来需要回血手段兜底。
- **性价比**：先古稀有度合理——首回合多重资源补给换 1 点生命，启动节奏强劲。

## 源码

- `SeerNeowBattleStartGift.cs`
