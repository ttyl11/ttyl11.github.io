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
> **施加来源**：玩家施加给敌方——[破黯穿穹](/cards/event/break_dark_pierce_sky.md)（卡牌）、[一念去留断](/cards/character/go_stay_break.md)（卡牌）、摆渡者·费雷（遗物，战斗首次打出「仅剩1场」的契约牌时给随机敌人施加）；玩家侧联动——[梅赫维特](/relics/legendary/mehrwert.md)

## 描述

不可计数。<br/>持有此状态的敌人所对应的所有<span style="color:#d4a017;font-weight:600">幻扰</span>施加异常状态成功概率下降<span style="color:#3aa675;font-weight:600">50%</span>，且此敌人死亡后，直接<span style="color:#9b59b6;font-weight:600">消逝</span>。

## 详细机制

- **不可计数**：单例叠加，多次施加不会累加层数，仅保持单例存在。
- **异常状态失效**：持有此状态的敌怪，其施加的任何[异常状态](/mechanics/abnormal-status.md)有 <span style="color:#3aa675;font-weight:600">50%</span> 概率失效（失效则施加 0 层），不再局限于幻扰系列。**只拦 27 种异常状态**，不拦属性下降、普通减益或其他能力。
- **对谁都拦**：不限制目标，该敌怪给玩家、给队友或其他敌人施加异常状态时都会判定。
- **每次施加独立判定**：每施加一次异常状态就掷一次 50%（同步随机数），不是整场一次。
- **消逝效果**：持有此状态的敌怪死亡后直接"消逝"（减益传染给所有队友，跳过亡语），但**带复活能力的目标不受阻断**——圣灵谱尼、实验体（原版）以及带复活能力的模组目标死亡时正常走复活流程，不被消逝打断。
- **无动态变量**：本能力不使用动态变量，所有效果通过外部代码检测是否持有此能力来实现。

## 相关卡牌

- [破黯穿穹](/cards/event/break_dark_pierce_sky.md)（施加曝状态）
- [一念去留断](/cards/character/go_stay_break.md)（未击杀目标时给目标附加曝）

## 相关能力

- 复活豁免：圣灵谱尼、实验体及所有带复活能力的模组目标（如重生之翼、神灵的复活等）死亡时消逝不阻断其复活

## 源码

- `SeerExposePower.cs`
- `SeerVanishPatch.cs`
