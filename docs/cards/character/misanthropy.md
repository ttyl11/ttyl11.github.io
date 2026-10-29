# 厌世

<img src="/images/cards/misanthropy.png" alt="厌世" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌

- **最大PP**: 5

- **能量消耗**: 1

- **类型**: 攻击

- **稀有度**: 罕见

- **目标**: 单个敌方

- **可升级**: 是（1 级）

- **关键词**: 无

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 基础伤害 | 6 | 10 |
| 堕落 | 31 | 31 |
| PP | 5 | 5 |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> [<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">31</span>。造成<span style="color:#d44;font-weight:600">6</span>点伤害，并将目标最大生命值削减至其当前生命值。

## 升级后

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> [<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">31</span>。造成<span style="color:#d44;font-weight:600">10</span>点伤害，并将目标最大生命值削减至其当前生命值。

## 工作机制

- **伤害 + 上限削减双效**：先造成 6/10 点普通伤害，再将目标的最大生命值直接压低到其当前生命值——损失多少血，上限就削多少，等于"永久带走去上限的部分"。

- **堕落31**：基础固定的堕落代价，不随目标或自身状态变化。

- **上限削减无上限**：对满血高血量目标不削减（当前=最大），对残血目标一次性兑现巨大差额——残血 Boss 一样会被压低上限，削减的是「最大生命」而非「当前生命」。

## 小贴士

- **斩杀联动**：目标越残，削减出的生命上限差额越大，配合大伤害先压血再补这刀，一回合内把敌人上限打到个位数，后续任何伤害都能稳定带走。

- **堕落31 的中低代价**：31 层不算激进，三张才逼近 100；作为日常削血上限工具可放心穿插进循环里，不必像高堕落卡那样专门规划[魔君接管](/powers/demon_takeover_power.md)节奏。

- **对高血量敌人优先**：Boss 战里越早打，压制其上限的收益越接近"永久伤害"，把前几回合的爆发转化为可持续的减法。

- **升级收益清晰**：伤害 6→10（+4），上限削减量不变但伤害兑现更快，更快把敌人推入"上限=残血"的斩杀区。

## 相关能力

- [堕落](/powers/fallen_power.md)（基础固定 31 层）

## 相关机制

- [PP系统](/mechanics/pp-system.md)（PP 消耗）
- [最大生命值](/mechanics/game-flow.md)（削减至当前生命值）

## 源码

- `SeerMisanthropy.cs`