# 绝缘之罩

> **归属**：玩家可施加
> **施加来源**：玩家获得——[卫岳](/relics/epic/wei_yue.md)（遗物）

<img src="/images/powers/insulation_cover_power.png" alt="绝缘之罩" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益
- **来源**: [卫岳](/relics/epic/wei_yue.md)
- **叠加方式**: 不叠加（持续型）
- **可见**: 是

## 描述

①开启时，自身获得<span style="color:#3aa675;font-weight:600">5</span>层<span style="color:#d4a017;font-weight:600">再生</span>。<br/>②持有时，自身免疫<span style="color:#d4a017;font-weight:600">麻痹</span>，造成固定伤害提升<span style="color:#3aa675;font-weight:600">50%</span>。

## 数值

| 参数 | 数值 |
|---|---|
| 开启获得再生层数 | 5 |
| 无加成伤害提升 | 50% |

## 详细机制

- **再生**：能力获得时立刻获得 5 层原版「再生」。
- **免疫瘫痪**：持有期间，任何来源、任何层数的「瘫痪」施加都被改为 0。
- **伤害提升的真实口径**：只对伤害来源为自身、且伤害标记**恰好等于「无加成（Unpowered）」**的伤害生效。
- **标准固定伤害不享受**：固定伤害同时带「不可格挡 + 无加成」两种标记，与上述条件不相等，**吃不到这 50%**；中毒、烧伤等持续伤害同样不吃。
- 因此它不是字面上的「固定伤害 +50%」，以源码为准。

## 小贴士

- **免疫瘫痪**：持有时免疫[瘫痪](/powers/paralysis_power.md)（攻击伤害 -10%，以及上回合未造成伤害时回合初获得的虚弱/易伤/缩小），与「跳过回合」类控制无关。
- **别按固定伤害流理解**：想靠它放大固定伤害/中毒/烧伤行不通，它只放大特定标记的无加成伤害。

## 源码

- `SeerInsulationCoverPower.cs`
