# 殊死一搏

<img src="/images/cards/desperate_last_stand.png" alt="殊死一搏" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 4
- **能量消耗**: 0
- **类型**: 攻击
- **稀有度**: 稀有
- **目标**: 单个敌方
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害 | 10 | 15 |
| 死亡倒计时 | 16 | 16 |
| PP | 4 | 4 |
| 最大PP | 4 | 4 |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">4</span>/<span style="color:#3aa675;font-weight:600">4</span> 造成<span style="color:#3aa675;font-weight:600">10</span>点伤害。[<span style="color:#d44;font-weight:600">回收</span>](/mechanics/hui_shou.md)。<span style="color:#3aa675;font-weight:600">16</span>回合后死亡。每打出一次：伤害翻倍、剩余回合减半。

## 升级后

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">4</span>/<span style="color:#3aa675;font-weight:600">4</span> 造成<span style="color:#3aa675;font-weight:600">15</span>点伤害。[<span style="color:#d44;font-weight:600">回收</span>](/mechanics/hui_shou.md)。<span style="color:#3aa675;font-weight:600">16</span>回合后死亡。每打出一次：伤害翻倍、剩余回合减半。

## 详细机制

- **[回收](/mechanics/hui_shou.md)**：打出后回到手牌，因此可以连续多次打出。
- **首次打出**：获得 <span style="color:#3aa675;font-weight:600">16</span> 层[殊死](/powers/desperate_last_stand_power.md)能力，层数即"剩余回合"。
- **后续每次打出**：剩余回合**减半并向上取整**——16 → 8 → 4 → 2 → 1 → 1。剩 1 层时不再下降（避免倒计时归零被清掉、反而"逃过一死"）。
- **伤害翻倍**：每次打出后卡面伤害 ×2，10 → 20 → 40 → 80…（升级后 15 → 30 → 60…）。卡面数值实时更新。
- **倒计时结算**：自身回合结束时殊死 -1；降到 0 时**自身立即死亡**（直接击杀，不造成伤害，可被[复活](/mechanics/revive.md)类效果救回）。
- **不可被净化**：殊死类型为"中性"（既非增益也非减益），不会被清增益 / 清减益 / 净化类效果移除。
- **卡面同步**：无论此牌在手中、抽牌堆还是弃牌堆，卡面的剩余回合数都会跟着能力层数同步。

## 小贴士

- **自我倒计时的高爆发牌**：0 费 + [回收](/mechanics/hui_shou.md) + 伤害指数增长，代价是给自己挂一个 16 回合的死亡倒计时。
- **节奏表**（初始 16 回合）：

| 打出次数 | 本次伤害 | 本次伤害（升级） | 打出后剩余回合 |
|---|---|---|---|
| 第 1 次 | 10 | 15 | 8 |
| 第 2 次 | 20 | 30 | 4 |
| 第 3 次 | 40 | 60 | 2 |
| 第 4 次 | 80 | 120 | 1 |
| 第 5 次 | 160 | 240 | 1 |

- **打几次就停手**：打 3 次累计 70 伤害（升级 105），还剩 2 回合；再打一次就只剩 1 回合的死亡窗口。第 4 次之后基本等于"当场自尽"。
- **归零必死，没有豁免**：只要不再打出，倒计时自然走到 0 也会死亡。想活下来只能靠[复活](/mechanics/revive.md)或免疫死亡类效果对冲。
- **PP 4 天然限流**：打 4 次即耗尽 PP，机制上限制了无限爆发。
- **升级收益**：伤害 10→15，整条翻倍序列同步提升（20→30、40→60…），是纯粹的爆发强化。

## 相关能力

- [殊死](/powers/desperate_last_stand_power.md)（倒计时能力，层数=剩余回合，归零击杀自身）

## 相关机制

- [PP系统](/mechanics/pp-system.md)（PP 消耗）
- [回收](/mechanics/hui_shou.md)（打出后回到手牌）
- [复活机制](/mechanics/revive.md)（对冲归零死亡）

## 源码

- `SeerDesperateLastStand.cs`
- `SeerDesperateLastStandPower.cs`
