# 极天之翼

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带常驻被动——极天之翼·托鲁克

<img src="/images/powers/extreme_sky_wing_toruk_power.png" alt="极天之翼" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**：中性（None）
- **叠加方式**：不叠加
- **可见**：是

### 数值参数

| 参数 | 数值 |
|---|---|
| FirstStrikeGain | 3 |

## 描述

每回合开始时，若自身没有[gold]先制[/gold]，则获得[blue]3[/blue]层[gold]先制[/gold]。

## 详细机制

- **只在自己的回合开始检查**：已有先制（层数 > 0）就不再补，避免叠加。
- **先制的含义**：托鲁克持有 3 层先制时，玩家**下一张牌**耗能 +3；玩家打出任意一张牌后先制整层清空。
- **实际节奏**：先制在被消耗后，托鲁克下个自己的回合开始会重新获得 3 层——所以几乎每个回合玩家都要为第一张牌多付 3 费。

## 源码

- `SeerExtremeSkyWingTorukPower.cs`；先制结算见 `SeerFirstStrikePower.cs`
