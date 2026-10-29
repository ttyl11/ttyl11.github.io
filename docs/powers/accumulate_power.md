# 蓄力

> **归属**：玩家可施加
> **施加来源**：玩家获得——[御象灵尊](/relics/epic/yu_xiang_ling_zun.md)（遗物）、[御象灵尊](/cards/colorless/elephant_spirit_lord.md)（卡牌）

<img src="/images/powers/accumulate_power.png" alt="蓄力" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益
- **叠加方式**: 递减
- **可见**: 是
- **层数上限**: 9（能力本身锁死，所有来源统一）

### 数值参数

| 参数 | 数值 |
|---|---|
| 增伤百分比 | 35 |
| 先制数值 | 1 |
| 层数上限 | 9 |

## 描述

①自身回合开始时，<span style="color:#d4a017;font-weight:600">先制</span>+<span style="color:#3aa675;font-weight:600">1</span>。<br/>②每层<span style="color:#9b59b6;font-weight:600">蓄力</span>使自身造成的伤害提高<span style="color:#3aa675;font-weight:600">35%</span>，最多<span style="color:#3aa675;font-weight:600">9</span>层。<br/>③每发起<span style="color:#3aa675;font-weight:600">1</span>次攻击，<span style="color:#9b59b6;font-weight:600">蓄力</span>层数-<span style="color:#3aa675;font-weight:600">1</span>。

## 详细机制

- **先制**：每个自身回合开始时获得 <span style="color:#3aa675;font-weight:600">1</span> 层[先制](/powers/first_strike_power.md)，只减下一张牌的耗能，打出后即消耗。
- **增伤**：每层使自身造成的**攻击伤害** +<span style="color:#3aa675;font-weight:600">35%</span>；固定伤害、DoT 等非攻击伤害不吃加成。
- **递减**：每发起**一次攻击**（一次攻击命令，无论打几段、命中几个目标）层数 -<span style="color:#3aa675;font-weight:600">1</span>，所以 9 层最多覆盖 9 次攻击。
- **上限锁死 9 层**：任何来源施加超过 9 层的部分都会被丢弃，不存在 10 层以上的蓄力。

## 源码

- `SeerAccumulatePower.cs`
