# 寄生

> **归属**：玩家与怪物均可持有
> **施加来源**：玩家施加给敌方——[曙光普照](/cards/character/shining_light.md)（卡牌）、[寄生种子](/cards/character/parasite_seed.md)（卡牌）、[缠管海绵](/potions/seaweed_potion.md)（药水）、[好女孩](/powers/good_girl_power.md)（能力联动）、[万相乖离](/powers/universal_divergence_power.md)（能力联动）、[腐坏幽魔·克劳里菲](/relics/rare/corrupt_demon_clawrify.md)（遗物）、[婕克拉德](/relics/uncommon/jiekelade.md)（遗物）；玩家自身获得——[枫落殇·西叶](/relics/epic/feng_luo_shang_xi_ye.md)（遗物，自身寄生）；怪物施加给玩家——[古温婆婆](/monsters/elite/guwen_granny_monster.md)（桑田）

<img src="/images/powers/parasite_power.png" alt="寄生" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff），列入[异常状态](/mechanics/abnormal-status.md)列表
- **叠加方式**: 叠加（Counter）
- **可见**: 是
- **血条预测**: 是（绿色，数值随层数）

### 数值参数

| 参数 | 数值 |
|---|---|
| 每回合伤害 | 等同当前寄生层数 |
| 治疗对手 | 等同当前寄生层数 |

## 描述

自身回合开始时受到等同当前[gold]寄生[/gold]层数的伤害，并使所有对手回复等量[gold]生命值[/gold]。<br/>然后层数-[blue]1[/blue]。

## 详细机制

- **伤害随层数走**：不是固定 2 点——1 层掉 1、5 层掉 5；层数越高压得越狠。
- **不可格挡、非攻击**：以固定伤害形式直接扣血，格挡挡不住，也不吃力量/增伤。
- **治疗所有对手**：伤害结算后若持有者仍存活，场上每个对手各回复等量生命。
- **然后减层**：每次结算后层数 −1，层数归零自动移除。
- **血条预测**：绿色，数值等于当前层数（即下次结算的伤害/治疗量）。

## 小贴士

- **双向差值**：每层每回合造成 1 点伤害 + 给对手回 1 点，等效 2 点差值——层数越高削得越狠。
- **对怪物最有效**：给高血量怪物叠寄生，等于持续放血还给它对手回血，比单纯直伤更拖。

## 相关机制

- [异常状态](/mechanics/abnormal-status.md)

## 源码

- `SeerParasitePower.cs`
