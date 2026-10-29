# 诛邪

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[六界帝神](/monsters/elite/six_realm_god_monster.md)常驻
> **类型**：中性（None）
> **叠加方式**：不叠加
> **可见**：是

<img src="/images/powers/six_realm_judgment_power.png" alt="诛邪" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

### 数值参数

| 参数 | 数值 |
|---|---|
| BoostPerFallen | 1 |

## 描述

敌人每拥有[blue]1[/blue]层[red]堕落[/red]，自身造成的伤害提高[blue]1%[/blue]。

## 详细机制

- **按目标的堕落层数加伤**：每次结算读取**被打目标**身上的[堕落](/powers/fallen_power.md)层数，每层 +1%（精英房 +2%）。
- **精英房翻倍**：普通房间每层 +1%，精英房间每层 +2%——悬浮描述会显示当前房间对应的数值。
- **只看堕落**：目标没有堕落层数时不加伤。
- **不限伤害类型**：自身造成的攻击、固定伤害都吃这个乘区（DoT 无来源，不经过它）。

## 小贴士

- **别给它叠堕落**：给六界帝神的目标叠堕落，等于给它加输出——堕落流在这里是负资产。
- **精英房更痛**：精英遭遇里每层堕落 +2%，同样层数伤害翻倍，优先清堕落。

## 源码

- `SeerSixRealmJudgmentPower.cs`
