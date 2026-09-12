# 曝

<img src="/images/powers/expose_power.png" alt="曝" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff）
- **叠加方式**: 单例（不叠加）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 异常状态施加失效概率 | 50 |

> 注：本能力无动态变量，上述数值由代码逻辑硬编码。
> **归属**：玩家可施加
> **施加来源**：玩家施加给敌方——[破黯穿穹](/cards/event/break_dark_pierce_sky.md)（卡牌）；玩家侧联动——[梅赫维特](/relics/legendary/mehrwert.md)

## 描述

不可计数。持有此状态的敌怪，其施加的[<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)有<span style="color:#3aa675;font-weight:600">50%</span>概率失效（不限幻扰）；此敌怪死亡后直接[<span style="color:#9b59b6;font-weight:600">消逝</span>]，但不会打断圣灵谱尼、实验体等带复活能力目标的复活。

## 详细机制

- **不可计数**：单例叠加，多次施加不会累加层数，仅保持单例存在。
- **异常状态失效**：持有此状态的敌怪，其施加的任何[异常状态](/mechanics/abnormal-status.md)有 <span style="color:#3aa675;font-weight:600">50%</span> 概率失效（失效则施加 0 层），不再局限于幻扰系列。
- **消逝效果**：持有此状态的敌怪死亡后直接"消逝"（减益传染给所有队友，跳过亡语），但**带复活能力的目标不受阻断**——圣灵谱尼、实验体（原版）以及带复活能力的模组目标死亡时正常走复活流程，不被消逝打断。
- **无动态变量**：本能力不使用动态变量，所有效果通过外部代码检测是否持有此能力来实现。

## 相关卡牌

- [破黯穿穹](/cards/event/break_dark_pierce_sky.md)（施加曝状态）

## 相关能力

- 复活豁免：圣灵谱尼、实验体及所有带复活能力的模组目标（如重生之翼、神灵的复活等）死亡时消逝不阻断其复活

## 源码

- `SeerExposePower.cs`
- `SeerVanishPatch.cs`
