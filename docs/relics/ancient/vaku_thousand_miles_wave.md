# 千里击涛

<img src="/images/relics/vaku_thousand_miles_wave.png" alt="千里击涛" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 先古

### 数值参数

| 参数 | 数值 |
|---|---|
| 卡牌数量 | 2 |
| 千里击涛增伤（基础） | 200（%） |
| 千里击涛增伤（升级） | 300（%） |
| 千里击涛每回合打牌上限（单卡） | 3 |
| 千里击涛每回合打牌上限（双卡叠加） | 6 |

## 描述

拾起时，获得<span style="color:#3aa675;font-weight:600">2</span>张<span style="color:#9b59b6;font-weight:600">千里击涛</span>卡牌（<span style="color:#9b59b6;font-weight:600">注能</span>附魔）。

- **注能附魔**：每张[千里击涛!!!](/cards/colorless/thousand_miles_wave.md)卡牌附加 1 层[注能](/mechanics/enchantment.md)附魔，在每场战斗第 1 回合的自动预打出阶段自动打出。
- **遗物直接给升级版**：拾起时源码先升级再附魔，所以拿到的 2 张都是升级版（增伤 +300%），不存在 +200% 的基础版。
- **卡牌效果**：[千里击涛!!!](/cards/colorless/thousand_miles_wave.md)是 0 费能力牌，打出后获得[永久增伤](/powers/permanent_damage_boost_power.md)（攻击伤害+200%，升级后+300%）和[千里击涛](/powers/thousand_miles_wave_power.md)（每回合打出 3 张牌后强制结束回合）。
- **悼关键词**：[千里击涛!!!](/cards/colorless/thousand_miles_wave.md)带有[悼](/mechanics/mourning.md)关键词。玩家主动打出时，下个回合由瓦库代替你行动；但本遗物这两张靠注能自动打出，悼会在同一回合的自动预打出阶段结算，所以**第 1 回合瓦库就接管**。

## 风味文字

<span style="color:#d44;font-weight:600">千里。</span>

## 小贴士

- **2 张注能卡牌每战自动打出**：拾起时获得 2 张[千里击涛!!!](/cards/colorless/thousand_miles_wave.md)卡牌，每张都附带[注能](/mechanics/enchantment.md)附魔——每场战斗第 1 回合自动打出，无需抽到也无需主动打出。等于每场战斗开局白嫖两次能力触发，零成本启动。
- **永久增伤双卡叠加**：两张卡牌都自动打出后，[永久增伤](/powers/permanent_damage_boost_power.md)会叠加——遗物给的两张都是升级版 +300%，合计攻击伤害 **+600%（×7.0）**。这是乘算增伤，配合高伤害攻击牌一回合可以打出爆炸输出。注意只对攻击伤害生效，非攻击伤害不加。
- **代价是每回合打牌上限**：每张[千里击涛!!!](/cards/colorless/thousand_miles_wave.md)打出后都会施加[千里击涛](/powers/thousand_miles_wave_power.md)能力——每回合打出 3 张牌后强制结束回合（不可取消）。两张卡牌都自动打出后，能力层数叠加为 6，所以每回合可以打 6 张牌才触发强制结束。这是高速爆发的代价，节奏被限制在 6 张以内。
- **强制结束回合不可撤销**：第 6 张牌打出后会立即触发强制结束回合，玩家无法取消。所以出牌顺序很关键——要把最重要的牌放在前 6 张打出，第 6 张之后的所有操作都会被跳过。配合低耗能高爆发的攻击牌最合适。
- **悼关键词让瓦库接管**：[千里击涛!!!](/cards/colorless/thousand_miles_wave.md)带有[悼](/mechanics/mourning.md)关键词——玩家主动打出时下个回合由瓦库代替你行动。瓦库是 AI 控制的代打，会自动出牌。这两张注能卡牌在第 1 回合自动打出，悼在同一回合结算，所以是**第 1 回合**就被接管（只接管一次，结算后移除）。
- **永久增伤每战重新施加**：[永久增伤](/powers/permanent_damage_boost_power.md)虽然名字带"永久"，但实际持续到战斗结束就移除（"永久"指不会因攻击而移除，区别于[增伤](/powers/next_damage_boost_power.md)）。每场战斗两张注能卡牌自动打出后，增伤重新叠加到 +600%——每场战斗都是稳定的 +600% 攻击增伤，不会跨战斗滚雪球，但每战都是高强度启动。
- **升级后收益已包含在遗物里**：[千里击涛!!!](/cards/colorless/thousand_miles_wave.md)升级后增伤从 200% 提升到 300%。本遗物拾起时就已把两张都升级，所以拿到手直接是 +600%（×7.0），不需要再找升级机会。
- **配合攻击爆发流**：每回合 6 牌上限+永久增伤×7 的组合，最适合配合低耗能高爆发的攻击牌——一回合 6 张攻击牌就能打出巨额伤害。避免配合高耗能或需要长回合铺垫的卡组，6 牌上限会卡死节奏。
- **性价比**：先古稀有度合理——每战自动 +600% 攻击增伤+零成本启动，代价是每回合 6 牌上限和第 1 回合被瓦库接管，高速爆发流的顶级启动件。

## 源码

- `SeerVakuThousandMilesWave.cs`
