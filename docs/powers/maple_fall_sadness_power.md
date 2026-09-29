# 枫落殇思

> **归属**：玩家可施加
> **施加来源**：玩家获得——[枫落殇·西叶](/relics/epic/feng_luo_shang_xi_ye.md)（遗物，回合结束时自身异常种类 > 4 时赋予）

<img src="/images/powers/maple_fall_sadness_power.png" alt="枫落殇思" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（一次性，不叠加）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 解除对象 | 自身所有异常状态 |
| 手牌上限 | +8（激活回合内） |
| PP 消耗 | 打出 PP 牌不消耗 PP |
| 0PP 牌 | 可打出，并立即将手中外（抽牌堆/弃牌堆/消耗堆）的 0PP 牌放入手中 |
| 持续时间 | 1 回合，回合结束时移除 |

## 描述

下回合开始：解除[异常状态](/mechanics/abnormal-status.md)，手牌上限+<span style="color:#3aa675;font-weight:600">8</span>，打出[PP 牌](/mechanics/pp-system.md)不消耗[PP](/mechanics/pp-system.md)，立即将手中外的<span style="color:#3aa675;font-weight:600">0PP</span>牌放入手中。回合结束移除。

## 详细机制

### 触发与生效时机

- **触发**：由[枫落殇·西叶](/relics/epic/feng_luo_shang_xi_ye.md)在自身回合结束时（异常种类 > 4 时）赋予，**下回合开始时**生效。
- **手牌上限 +8 提前激活**：在抽牌阶段之前生效，本回合抽牌上限 +8。
- **一次性**：持续 1 回合，激活回合结束时自移除。

### 下回合开始

1. **解除异常**：移除自身所有[异常状态](/mechanics/abnormal-status.md)——正好把西叶"异常种类 > 4"的条件清零。
2. **PP 免费 + 0PP 可打出**：本回合打出 PP 牌不消耗 PP，0PP 牌也可打出（能量消耗保持卡牌原值）。
3. **0PP 牌入手**：立即将抽牌堆、弃牌堆、消耗堆中所有当前 PP=0 的 PP 牌放入手中。

## 小贴士

- **异常堆得越狠，奖励回合越猛**：西叶下要异常种类 > 4 才触发，而触发后开局解完全身异常——异常压得越深，越容易换来这个免费爆发回合。
- **爆发窗口**：手牌上限 +8、PP 全免费、0PP 牌全入手，三件事叠一起，适合一口气打出平时打不起的 PP 大牌。

## 源码

- `SeerFengLuoShangSiPower.cs`