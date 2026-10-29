# 老鼠药

<img src="/images/cards/rat_poison.png" alt="老鼠药" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 诅咒牌
- **能量消耗**: 3
- **类型**: 诅咒
- **稀有度**: 诅咒
- **关键词**: [固有](/mechanics/innate.md)、[保留](/mechanics/retain.md)、[消耗](/mechanics/exhaust.md)
- **可升级**: 否

### 数值参数

| 参数 | 数值 |
|---|---|
| 每次用药水失去的最大生命 | 5 |

## 描述

此牌在[手牌](/mechanics/hand.md)中时，使用[药水](/potions/index.md)失去 <span style="color:#3aa675;font-weight:600">5</span> 点最大生命。

## 小贴士

- **它是"药水税"**：[固有](/mechanics/innate.md)+[保留](/mechanics/retain.md)让它整场贴在手牌里，你每喝一瓶[药水](/potions/index.md)就掉 <span style="color:#3aa675;font-weight:600">5</span> 点**永久**最大生命上限——喝得越多血越短，战斗结束也找不回来。
- **决策点：这场要喝几瓶？** 它可以花 3 费打出（[消耗](/mechanics/exhaust.md)离场），本场就不再收税。**预计喝 ≥2 瓶（亏 ≥10 点上限）就值得提前 3 费买断**；只喝 1 瓶或干脆不喝，留着即可。
- **药水流的重灾区**：本 mod 药水体系很强，很多构筑靠药水救急——对付它们这张牌极伤。**爆发 / 关键回合前，先把老鼠药打掉再连喝药**，能一次性规避全部惩罚。
- **多人模式会连坐**：它只检查自己是否在手牌，不区分药水是谁喝的——队友喝药同样会扣你 5 点最大生命。
- **可能当场压死自己**：若当前生命高于新上限，超出部分会作为不可[格挡](/mechanics/block.md)的伤害直接扣除——残血时连喝药有暴毙风险。
- **性价比**：3 费买断"本场用药水的自由"。喝得多，这 3 费稳赚（两瓶就省回 10 点上限）；完全不喝药，它只是一张白占位的牌。

## 相关机制

- [药水图鉴](/potions/index.md)（触发媒介）
- [固有](/mechanics/innate.md) / [保留](/mechanics/retain.md)（开局必在、常驻手牌）
- [消耗](/mechanics/exhaust.md)（打出后离场）
- [手牌](/mechanics/hand.md)（生效判定位置）

## 源码

- `SeerRatPoison.cs`