# 好女孩

> **归属**：玩家可施加
> **施加来源**：玩家获得——[好女孩](/cards/colorless/good_girl.md)（卡牌）

<img src="/images/powers/good_girl_power.png" alt="好女孩" style="max-width:120px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 实例化（每次施加独立实例，各自结算）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 每实例施加异常数量 | 2 |
| 持续回合 | 2 |

## 描述

在你的回合开始时，让对手随机获得<span style="color:#3aa675;font-weight:600">2</span>种<span style="color:#d44;font-weight:600">异常状态</span>各<span style="color:#3aa675;font-weight:600">2</span>层。

## 详细机制

- **触发时机**：在拥有者一方回合开始前触发。
- **异常状态池**：从 **23 种随机池**中抽取（已排除狂暴、星赐、凝滞、超频），池内每种都有对应的施加逻辑，不会空转。
- **施加流程**：每个实例每回合重复 <span style="color:#3aa675;font-weight:600">2</span> 次：
  - 异常状态种类：从 23 种中随机选取 1 种
  - 目标：从敌方中随机选取 1 个
  - 对目标施加该异常状态 <span style="color:#3aa675;font-weight:600">2</span> 回合（层数 = 2）
  - 每次独立选取，可对同一目标施加多种异常状态
- **实例层数不参与结算**：施加数量固定取能力自身配置的 2，卡牌升级后显示的"3 层"只影响图标与卡面文字，不会变成 3 种。
- **多端同步**：使用 Niche 随机源选异常状态、CombatTargets 随机源选目标，确保多人模式下结果一致。
- **独立实例**：本能力为 Instanced 类型，每次打出卡牌生成一个独立实例，每个实例各撒 2 种——两张好女孩 = 每回合 4 种（可重复）。

## 相关卡牌

- [好女孩](/cards/colorless/good_girl.md)（每次打出生成 1 个实例，每回合 2 种异常；升级只改显示）

## 源码

- `SeerGoodGirlPower.cs`
