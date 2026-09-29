# 极昼

<img src="/images/cards/polar_day.png" alt="极昼" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 1
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 普通
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| PP | 1 | 1 |
| 最大PP | 1 | 1 |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 清除所有[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)，获得等量[格挡](/mechanics/block.md)。

## 升级后

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 耗能降至<span style="color:#3aa675;font-weight:600">0</span>。清除所有[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)，获得等量[格挡](/mechanics/block.md)。

## 详细机制

- 读取自身当前[堕落](/powers/fallen_power.md)层数；若为 0，则**完全不结算**（不移除、不获得格挡）。
- 移除自身堕落能力（层数清零），并获得**等于清掉层数**的[格挡](/mechanics/block.md)。
- 格挡按招式来源结算，可被格挡类加成影响。
- **持[枫落殇·西叶](/relics/epic/feng_luo_shang_xi_ye.md)时堕落另有用途**（回合结束按 10:1 转[召唤](/mechanics/summon.md)并清空），此时用这张牌会把转化计数提前清掉。

## 小贴士

- **把进攻资源一次性转成防御**：堕落 300 层 → 300 格挡，是极强的保命牌。
- **代价是清空堕落进度**：如果你正在攒 100 层触发[混沌化身](/mechanics/chaos-incarnation.md)，这张牌等于把进度清零。什么时候"把堕落变现"，是堕落体系的核心决策点。
- **PP 只需 1，升级后 0 费**：成本极低，等于白嫖一次大格挡（前提是堕落足够多）。堕落为 0 时打出去毫无效果，注意别空放。
- **与枫落殇·西叶冲突**：西叶在场时堕落只作转化计数（回合结束转召唤），这张牌会打断该节奏。

## 相关能力

- [堕落](/powers/fallen_power.md)（被清除并转化为格挡的来源）

## 相关机制

- [PP系统](/mechanics/pp-system.md)（PP 消耗）
- [格挡](/mechanics/block.md)（获得等量格挡）
- [混沌化身](/mechanics/chaos-incarnation.md)（清空堕落会推迟其触发）

## 源码

- `SeerPolarDay.cs`
