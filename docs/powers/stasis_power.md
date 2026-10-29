# 凝滞

> **归属**：玩家可施加
> **施加来源**：玩家施加给敌方——[曙光普照](/cards/character/shining_light.md)（卡牌）、[好女孩](/powers/good_girl_power.md)（能力联动）、[万相乖离](/powers/universal_divergence_power.md)（能力联动）、[暴君史莱姆](/relics/event/tyrant_slime_relic.md)（遗物）、[不破帝·南霜](/relics/epic/bupo_emperor_nanshuang.md)（遗物，自身与敌方）

<img src="/images/powers/stasis_power.png" alt="凝滞" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff）/ [异常状态](/mechanics/abnormal-status.md)
- **叠加方式**: 叠加
- **可见**: 是
- **多人同步缩放**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| Amount（层数/免疫回合数，施加时决定，默认 1） | 1 |

## 描述

①获得<span style="color:#3aa675;font-weight:600">层数</span>回合<span style="color:#d4a017;font-weight:600">免控</span>。<br/>②玩家持有时，无法额外抽牌。<br/>③怪物持有时，回合开始时随机施加<span style="color:#d4a017;font-weight:600">封属</span>。<br/>自身回合结束时层数-<span style="color:#3aa675;font-weight:600">1</span>。

## 详细机制

- **异常状态免疫**：
  - 当持有者将要受到新的能力施加时，逐一判断是否免疫：
    - 若该能力不可见，则不免疫，照常施加。
    - 若该能力就是凝滞本身（例如凝滞自身的回合减层），则不免疫，否则层数将永远无法减少。
    - 若该能力不属于[异常状态](/mechanics/abnormal-status.md)列表（即普通减益），则不免疫。
    - 其余属于异常状态列表的能力被完全免疫，施加量降为 0。
  - 由此，凝滞只屏蔽异常状态，不屏蔽力量下降、防御下降等普通减益。
- **怪物施加封属**：
  - 仅当持有者为怪物时生效。
  - 持有者一方回合开始时，若凝滞层数大于 0，对其施加封属——非攻击意图（增益/减益/防御/治疗/召唤/状态牌等）效果全部失效，攻击意图照常执行。
  - 纯非攻击行动会被整体失效（显示为行动失效）。
- **玩家无法额外抽牌**：
  - 仅当持有者为玩家时生效。
  - 持有者在回合内无法通过任何效果额外抽牌。
  - 抽牌阶段的正常抽牌不受影响。
- **回合结束减层**：
  - 在持有者一方回合结束时，若持有者存活，层数 -1。
- **多人同步缩放**：多人模式下，凝滞的层数会随玩家人数进行同步缩放。

## 相关机制

- [异常状态](/mechanics/abnormal-status.md)

## 源码

- `SeerStasisPower.cs`
