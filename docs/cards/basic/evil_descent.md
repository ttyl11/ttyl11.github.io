# 邪灵降世

<img src="/images/cards/evil_descent.png" alt="邪灵降世" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 基础牌
- **最大PP**: 3
- **能量消耗**: 2
- **类型**: 技能
- **稀有度**: 基础
- **目标**: 无
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 全属性提升 | 1 | 1 |
| 格挡 | 10 | 10 |
| 召唤 | 10 | 10 |
| 铸造 | 10 | 10 |
| 堕落获取 | 40 | 40 |
| PP | 3 | 3 |
| 最大PP | 3 | 3 |

## 描述

PP: 3/3 [全属性](/mechanics/all_attributes.md)<span style="color:#3aa675;font-weight:600">+1</span>，获得<span style="color:#3aa675;font-weight:600">10</span>点[格挡](/mechanics/block.md)，[召唤](/mechanics/summon.md)<span style="color:#3aa675;font-weight:600">10</span>，[铸造](/mechanics/forge.md)<span style="color:#3aa675;font-weight:600">10</span>。[堕落](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">40</span>。

## 升级后

PP: 3/3 <span style="color:#d4a017;font-weight:600">全属性</span><span style="color:#3aa675;font-weight:600">+1</span>，获得<span style="color:#3aa675;font-weight:600">10</span>点<span style="color:#d4a017;font-weight:600">格挡</span>，<span style="color:#d4a017;font-weight:600">召唤</span><span style="color:#3aa675;font-weight:600">10</span>，<span style="color:#d4a017;font-weight:600">铸造</span><span style="color:#3aa675;font-weight:600">10</span>。<span style="color:#d44;font-weight:600">堕落</span><span style="color:#3aa675;font-weight:600">40</span>。

## 详细机制

- **全属性+1**：力量/防御/命中/速度四项同时提升 <span style="color:#3aa675;font-weight:600">1</span> 层（详细见[全属性](/mechanics/all_attributes.md)）。
- **[召唤](/mechanics/summon.md)与[铸造](/mechanics/forge.md)**：召唤 <span style="color:#3aa675;font-weight:600">10</span> = 召唤奥斯提并获得 10 点生命；若奥斯提已在场，则改为给它 **+10 最大生命**（不回复当前生命）。铸造 <span style="color:#3aa675;font-weight:600">10</span> = 为你的所有君王之剑累积 10 点伤害（详见[铸造](/mechanics/forge.md)）。
- **堕落+40**：单卡堕落获取量全 mod 基础牌最高（对比[堕世](/cards/basic/descent.md) +25、[消亡](/cards/basic/perish.md) +10），是索伦森最快冲满 100 层触发[魔君接管](/powers/demon_takeover_power.md)的爆发牌。
- **升级加[保留](/mechanics/retain.md)**：升级后本牌在回合结束不会弃掉，可以留到关键回合统一爆发。

## 小贴士

- **全家桶式德鲁伊牌**：属性 + 护甲 + 召唤 + 铸造 + 堕落，五条收益线叠满——但<span style="color:#3aa675;font-weight:600">2</span> 费 + PP3 也是索伦森开局最重的牌，前两回合千万别无脑甩。
- **堕落 40 = 五分之二接管**：加 40 层让魔君接管的 100 层门槛一口气吃掉 2/5。开局若能迅速打出，堕落第一档 100 层触发时机大幅提前——**提前意味着更快被接管**：爆发来得越急，失控和不请自来的扣最大生命也越早，用它之前先想好这回合要不要保留手牌。
- **升级后是保底爆发**：[保留](/mechanics/retain.md)让它不再怕手牌污染——升级后留到召唤/铸造资源齐备的回合打出，收益最大化；未升级时则要赶在回合结束前规划好这两项资源。
- **性价比**：<span style="color:#3aa675;font-weight:600">2</span> 费换属性 + 护甲 + 召唤 + 铸造 + 堕落五合一，单张收益极高；升级后多送保留，是 2 费牌里少有的"费用越花越值"。

## 相关机制

- [全属性](/mechanics/all_attributes.md)（四项属性提升）
- [召唤](/mechanics/summon.md)（召唤生物）
- [铸造](/mechanics/forge.md)（强化铸件）
- [堕落](/powers/fallen_power.md)（堕落积累）
- [魔君接管](/powers/demon_takeover_power.md)（堕落满 100 触发）

## 源码

- `SeerEvilDescent.cs`