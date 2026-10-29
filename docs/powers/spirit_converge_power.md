# 灵能汇聚

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[苍天歌](/monsters/elite/cang_tian_ge_monster.md)「灵能汇聚」
> **类型**：中性（None）
> **叠加方式**：按层数叠加（层数＝剩余回合）
> **可见**：是

<img src="/images/powers/spirit_converge_power.png" alt="灵能汇聚" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

### 数值参数

| 参数 | 数值 |
|---|---|
| Types | 2 |
| Turns | 2 |

## 描述

持续期间，敌人每打出[blue]1[/blue]张牌，随机获得[blue]2[/blue]种异常，每种[blue]2[/blue]层。

## 详细机制

- **每出一张牌就上异常**：玩家每打出 1 张牌，随机抽 2 种异常（尽量不重复），每种 2 层。
- **异常池 23 种**：从随机异常池抽取，排除狂暴、星赐、凝滞、超频。
- **按出牌次数结算**：同一回合打得多，异常叠得越快；自动打出也会触发。
- **只针对敌方**：苍天歌自己出牌不触发。
- **层数＝剩余回合**：敌方回合结束时 −1，归零移除。

## 源码

- `SeerNewSkillPowersD.cs`（`SeerSpiritConvergePower`）
- `SeerCangTianGeMonster.cs:211`
