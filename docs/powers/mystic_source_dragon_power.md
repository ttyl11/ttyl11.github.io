# 玄源之龍

> **归属**：玩家可施加
> **施加来源**：玩家获得——[镇世·乔特鲁德](/relics/legendary/world_suppressor_jortrud.md)（遗物）

<img src="/images/powers/mystic_source_dragon_power.png" alt="玄源之龍" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益
- **来源**: [镇世·乔特鲁德](/relics/legendary/world_suppressor_jortrud.md)
- **叠加方式**: 不叠加（一次性）
- **可见**: 是

## 描述

①免疫<span style="color:#d44;font-weight:600">疲惫</span>。<br/>②Boss房间中，若自身与Boss的生命值首次同时低于<span style="color:#3aa675;font-weight:600">20%</span>，最大生命值提高<span style="color:#3aa675;font-weight:600">20%</span>，下一张牌会处决生命值低于<span style="color:#3aa675;font-weight:600">20%</span>的敌人，之后永久移除此能力。

## 数值

| 参数 | 数值 |
|---|---|
| 触发血量阈值（自身与Boss） | 20% |
| 最大生命提升 | 20% |
| 处决血量阈值 | 20% |

## 详细机制

- **免疫疲惫**：任何来源的[疲惫](/powers/fatigue_power.md)施加量都被改成 0，挂不上。
- **触发时机**：自己回合开始时检查，且只在 **Boss 房间**（房间类型为 Boss）生效。
- **双低条件**：自身生命 **< 20%** 且场上第一个 Boss 生命 **< 20%**（都按严格小于判定），两者同时满足才触发；整场只判定一次。
- **最大生命提升**：按当前最大生命的 <span style="color:#3aa675;font-weight:600">20%</span> 永久提高最大生命（不足 1 点时不加）。
- **处决窗口**：触发后进入「待处决」状态——你之后打出的**任意一张牌**都会检查全场，若有敌人生命 ≤ 20%，直接击杀其中 1 名，然后能力移除。
- **永久失去**：一旦完成处决、能力被移除，遗物[镇世·乔特鲁德](/relics/legendary/world_suppressor_jortrud.md)会在本场战斗结束后永久关闭这条能力，后续战斗不再获得。
- **没处决掉会保留**：若触发后一直没打到 20% 以下的敌人，能力不会主动消失，可以继续等机会。

## 小贴士

- **Boss战双低触发**：仅在 Boss 房间生效，需自身与 Boss 血量同时低于 20% 才触发，单方低血不触发。
- **处决别浪费**：触发后任意一张牌都会触发处决，先确认场上已有 ≤20% 的敌人再出牌，否则这张牌就白用了。

## 源码

- `SeerMysticSourceDragonPower.cs`
