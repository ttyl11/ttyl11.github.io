# 圣武封灵

> **归属**：怪物施加给玩家
> **施加来源**：怪物技能「斗·圣灵天武」（[圣战·瑞尔斯](/monsters/elite/holy_war_ruiersi_monster.md)）

<img src="/images/powers/heaven_martial_seal_power.png" alt="圣武封灵" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**：中性（None）
- **叠加方式**：不叠加
- **可见**：是

### 数值参数

| 参数 | 数值 |
|---|---|
| TurnsRemaining | 1 |

## 描述

（[blue]1[/blue]回合后）你打出的第一张攻击牌与第一张技能牌无效。

## 详细机制

- **窗口**：玩家接下来的一个回合；玩家回合结束时移除。
- **无效的含义**：牌**照常打出、照常付费**，但效果不执行（打出次数归零），不是"不能打"。
- **只封第一张**：本回合打出的第一张攻击牌与第一张技能牌各失效一次；玩家可以自己选择先打哪张来"顶掉"封印。
- 能力牌、状态牌等不受影响。

## 源码

- `Models/Powers/SeerNewSkillPowersB.cs`（`SeerHeavenMartialSealPower`）
