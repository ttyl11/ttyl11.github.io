# 恶魔降临

<img src="/images/cards/demon_descent.png" alt="恶魔降临" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 5
- **能量消耗**: 0（每打出一次 +1）
- **类型**: 技能
- **稀有度**: 稀有
- **目标**: 无
- **可升级**: 是（1 级，升级后固有）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 抽牌 | 1 | 1 |
| 能量获得 | 2 | 2 |
| 生命损失 | 3 | 3 |
| 灾厄层数 | 4 | 4 |
| 辉星获得 | 5 | 5 |
| 分配PP | 6 | 6 |
| 堕落 | 7 | 7 |
| 能量消耗 | 0 | 0 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

> 每打出一次，以上所有数值 +1（PP 不变，耗能 +1）。

## 描述

PP: 5/5 抽<span style="color:#3aa675;font-weight:600">1</span>张牌，获得<span style="color:#3aa675;font-weight:600">2</span>点<span style="color:#d4a017;font-weight:600">能量</span>，损失<span style="color:#3aa675;font-weight:600">3</span>点生命，所有敌人<span style="color:#d4a017;font-weight:600">灾厄</span><span style="color:#3aa675;font-weight:600">4</span>，获得<span style="color:#3aa675;font-weight:600">5</span>点<span style="color:#d4a017;font-weight:600">辉星</span>和<span style="color:#3aa675;font-weight:600">6</span>点PP，<span style="color:#d44;font-weight:600">堕落</span><span style="color:#3aa675;font-weight:600">7</span>。每打出一次，除PP外各数值及耗能+1。

## 升级后

<span style="color:#d4a017;font-weight:600">固有</span>。PP: 5/5 抽<span style="color:#3aa675;font-weight:600">1</span>张牌，获得<span style="color:#3aa675;font-weight:600">2</span>点<span style="color:#d4a017;font-weight:600">能量</span>，损失<span style="color:#3aa675;font-weight:600">3</span>点生命，所有敌人<span style="color:#d4a017;font-weight:600">灾厄</span><span style="color:#3aa675;font-weight:600">4</span>，获得<span style="color:#3aa675;font-weight:600">5</span>点<span style="color:#d4a017;font-weight:600">辉星</span>和<span style="color:#3aa675;font-weight:600">6</span>点PP，<span style="color:#d44;font-weight:600">堕落</span><span style="color:#3aa675;font-weight:600">7</span>。每打出一次，除PP外各数值及耗能+1。

## 小贴士

- **稀有·0费全能引擎**：0 费打出即抽 1、回 2 能、赚 5 辉星、给全敌 4 层[灾厄](/powers/doom_power.md)、给其它牌补 6 PP——单张卡完成过牌+产费+资源+群体压制，代价是自身损失 3 生命和 7 层[堕落](/powers/fallen_power.md)。
- **每打出一次全面成长**：每打出一次，抽牌/能量/生命损失/灾厄/辉星/分配PP/堕落全部 +1，且**耗能 +1**（0→1→2…）。本场第 N 次打出时：抽 N 张、回 N+1 能、掉 N+2 血、全敌 N+3 灾厄、N+4 辉星、补 N+5 PP、堕落 N+6。这个次数**只在本场战斗累计，每场战斗重新从 0 开始**。
- **PP 5 = 单场最多 5 次**：每次打出消耗 1 点 PP；第 6 次即使费用够也因 PP 归 0 无法打出。
- **堕落代价**：每打出一次堕落 +7（逐次递增），堕落是负面层数——每**跨过 100 的倍数**触发[魔君接管](/powers/demon_takeover_power.md)失控，连续打会导致堕落快速破百，需配合堕落消耗/控制牌使用。
- **灾厄为全敌群体处决倒计时**：灾厄层数会随打出次数递增，配合高输出让敌人快速跨过"灾厄 ≥ 当前生命"的处决线；但请留意灾厄触发于敌人自己回合结束，别指望它替你挡伤害。
- **分配PP补资源**：给其它未满 PP 的 PP 牌随机分配 PP，等于把这张牌的 PP 转化为全场资源，配合 PP 消耗大户（五芒星、光之盾等）形成连锁。若场上没有可补的 PP 牌，剩余分配点数会直接浪费。
- **生命损失是真实自伤**：损失生命为不可格挡、不受力量/易伤影响的伤害，低血量时可能把自己打死；会触发“受到伤害”类效果。
- **升级加固有**：升级后开局即在手牌，能更早开启"每打出一次全面成长"的雪球，推荐优先升级。
- **性价比**：0 费（升级固有）的成长型多面手，越打越强；堕落与自伤的代价让它的上限受制于你的堕落管理能力，属于高风险高回报的稀有引擎。

## 相关机制

- [能量](/mechanics/energy.md)
- [灾厄](/powers/doom_power.md)
- [辉星](/mechanics/star.md)
- [堕落](/powers/fallen_power.md)
- [固有](/mechanics/innate.md)

## 相关卡牌

- [魔·决裂黎明](/fifth-skill/demon_breaking_dawn.md)（跨战斗打出次数累计机制同源）

## 源码

- `SeerDemonDescent.cs`
