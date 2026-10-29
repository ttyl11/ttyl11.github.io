# 灵籁泳馆

> **归属**：玩家可施加
> **施加来源**：玩家获得——[欢梦芳逝](/cards/character/phantom_dream_fade.md)（卡牌）

<img src="/images/powers/ling_lai_swim_hall_power.png" alt="灵籁泳馆" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 计数（层数递减）
- **可见**: 是

## 描述

①免疫<span style="color:#d4a017;font-weight:600">力量</span>、<span style="color:#d4a017;font-weight:600">防御</span>、<span style="color:#d4a017;font-weight:600">命中</span>、<span style="color:#d4a017;font-weight:600">速度</span>的下降。<br/>②你的回合结束时回复<span style="color:#3aa675;font-weight:600">3</span>点生命值；敌方回合结束时层数-<span style="color:#3aa675;font-weight:600">1</span>。

## 详细机制

- **免疫范围**：只拦四维的**负层**施加（下降量改为0），与其它属性/减益无关。
- **回血**：自己的回合结束时恢复 3 点生命。
- **衰减**：对方回合结束时层数 -1；N 层 = 覆盖 N 个完整敌方回合 + N 次回血。

## 数值参数

| 参数 | 数值 |
|---|---|
| 回复生命 | 3 |

## 关联

- 由卡牌**欢梦芳逝**（`SeerPhantomDreamFade`）施加：下场战斗开启灵籁泳馆和星璨舞台若干回合。

## 源码

- `SeerLingLaiSwimHallPower.cs`
