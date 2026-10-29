# 保底

<img src="/images/cards/guaranteed.png" alt="保底" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 诅咒牌
- **能量消耗**: 0
- **类型**: 诅咒
- **稀有度**: 诅咒
- **关键词**: [碎心](/mechanics/shattered_heart.md)、[进化](/mechanics/evolve.md)
- **可升级**: 是（最高 99 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 获得遗物的概率 | 1% | 每次升级 +2 个百分点 |

## 描述

<span style="color:#3aa675;font-weight:600">1</span>% 获得随机遗物，否则获得 <span style="color:#3aa675;font-weight:600">1</span> [金币](/mechanics/money_pouch.md)。

## 升级后

<span style="color:#3aa675;font-weight:600">2</span>%获得随机遗物，否则获得1<span style="color:#d4a017;font-weight:600">金币</span>。

## 小贴士

- **它是一台"血换遗物"的老虎机**：每次打出白扣 <span style="color:#3aa675;font-weight:600">2</span> 点最大生命（[碎心](/mechanics/shattered_heart.md)），然后掷概率——中了给一张随机遗物，没中只给 1 金币。它不是战斗牌，而是**用永久最大生命赌史诗收益**。
- **前期别碰，后期才值**：基础概率只有 1%，但带[进化](/mechanics/evolve.md)——**每打完一场战斗自动升 1 级、概率 +2 个百分点**。也就是说它随你的局越走越高（10 场 ≈ 21%、20 场 ≈ 41%）。前期抽到就刷等于"白送 2 血换 1 金币"，**留到概率积累起来再打**。
- **成本要算清楚**：每次都是 2 点**永久**最大生命。按 50% 算，平均两次中一次 = 4 点最大生命换一张随机遗物——血量厚或有回复手段时才划算，残血 / 上限低时别上头。
- **打法**：在战斗快结束、手头有余裕时打出（不影响节奏）；把它当"后期的额外遗物来源"，而不是开局就刷。
- **可升级到 99 级**：手动升级（休息处等）每级实际再 +2 个百分点，配合进化能叠很高；普通一局虽堆不满，但升到十几级后中奖率就很可观了。
- **性价比**：0 费，真实成本是"每次 2 点最大生命"。**概率没起来之前它纯亏**——一张"后期才解冻"的彩票。

## 相关机制

- [碎心](/mechanics/shattered_heart.md)（打出时失去 2 点最大生命）
- [进化](/mechanics/evolve.md)（战斗结束后自动升级）
- [金币](/mechanics/money_pouch.md)（未中奖时的兜底收益）
- [遗物图鉴](/relics/index.md)（中奖奖励来源）

## 源码

- `SeerGuaranteed.cs`