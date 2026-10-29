# 日照高林

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[古温婆婆](/monsters/elite/guwen_granny_monster.md)「日照高林」施加 4 层

<img src="/images/powers/sun_high_forest_power.png" alt="日照高林" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 中性（None）
- **叠加方式**: 按层数叠加（层数＝剩余回合）
- **可见**: 是

## 描述

持续期间，每回合将每个敌人的[red]中毒[/red]与[gold]寄生[/gold]层数翻倍。

## 详细机制

- **自己回合开始翻倍**：古温婆婆自己回合开始时，对每个敌人分别读取当前[中毒](/powers/poison_power.md)与[寄生](/powers/parasite_power.md)层数，再施加等量层数——等于把层数 ×2。
- **两种异常各自独立**：中毒翻中毒、寄生翻寄生，互不影响。
- **没有就不翻**：层数为 0 时不产生任何效果。
- **持续 4 个自己的回合**：层数在自己回合结束时 −1，归零移除。
- **指数滚雪球**：连续几回合不处理，中毒/寄生会翻到非常夸张的层数。

## 小贴士

- **这 4 回合内别叠毒**：你叠 1 层，它翻成 2、4、8……等于帮它加速。
- **优先清异常**：中毒/寄生在翻倍前清掉，能让它整段空转。
- **净化要趁早**：第一次翻倍后再清，成本已经翻倍。

## 源码

- `SeerNewSkillPowersA.cs`（`SeerSunHighForestPower`）
- `SeerGuwenGrannyMonster.cs:155`
