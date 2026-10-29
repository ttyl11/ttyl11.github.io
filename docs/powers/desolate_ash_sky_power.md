# 荒灰天

> **归属**：玩家可施加
> **施加来源**：玩家获得——[荒烬涂天](/cards/character/desolate_ash_sky.md)（卡牌）

<img src="/images/powers/desolate_ash_sky_power.png" alt="荒灰天" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 递减（计数型）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| BurnStacks | 1 |
| AshStacks | 1 |
| Amount | 1 |

## 描述

在你的回合开始时，获得<span style="color:#3aa675;font-weight:600">2</span>层<span style="color:#d4a017;font-weight:600">先制</span>，并使所有敌人获得<span style="color:#3aa675;font-weight:600">1</span>层<span style="color:#d44;font-weight:600">烧伤</span>与<span style="color:#3aa675;font-weight:600">1</span>层<span style="color:#d44;font-weight:600">焚烬</span>。

## 详细机制

- **回合开始触发**：在拥有者一方回合开始时：
  1. 闪烁能力图标
  2. 对自身施加 <span style="color:#3aa675;font-weight:600">3</span> 层[先制](/powers/first_strike_power.md)
  3. 对每个敌人施加 <span style="color:#3aa675;font-weight:600">1</span> 层[烧伤](/powers/burn_power.md)和 <span style="color:#3aa675;font-weight:600">1</span> 层[焚烬](/powers/ash_power.md)
- **结算后递减**：同一次回合开始结算完成后，层数 -<span style="color:#3aa675;font-weight:600">1</span>，因此 N 层等于之后 N 个己方回合各触发一次。
- **与本地化文本的差异**：能力描述写「获得 2 层先制」，源码实际施加 <span style="color:#3aa675;font-weight:600">3</span> 层。

## 相关卡牌

- [荒烬涂天](/cards/character/desolate_ash_sky.md)：打出时对自身施加 99 层荒灰天

## 源码

- `SeerDesolateAshSkyPower.cs`
