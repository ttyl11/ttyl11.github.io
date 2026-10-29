# 电玩小子

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[苍天歌](/monsters/elite/cang_tian_ge_monster.md)（技能「电玩小子」）
> **类型**：中性（None）
> **叠加方式**：单例（不叠加）
> **可见**：是

<img src="/images/powers/arcade_boy_power.png" alt="电玩小子" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

### 数值参数

| 参数 | 数值 |
|---|---|
| TurnsRemaining | 1 |

## 描述

接下来的玩家回合中，你打出的第<span style="color:#3aa675;font-weight:600">2</span>、<span style="color:#3aa675;font-weight:600">4</span>、<span style="color:#3aa675;font-weight:600">6</span>…张攻击牌无效。

## 详细机制

- **"无效"不是不能打**：被无效的攻击牌照常耗能、进弃牌堆/消耗堆，但 OnPlay 与附魔、词缀效果一次都不结算。
- **按真实打出顺序数**：只统计敌对玩家的攻击牌，自动打出的攻击牌也会计数并被无效化。
- **同一张牌不重复编号**：按卡牌实例去重，一张牌回手后再打不会重新排队，仍保留第一次打出时的奇偶序号。
- **窗口**：覆盖接下来的玩家回合，玩家回合结束时移除此能力。

## 源码

- `SeerNewSkillPowersE.cs`（`SeerArcadeBoyPower`）
