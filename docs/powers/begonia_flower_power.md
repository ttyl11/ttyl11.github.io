# 海棠花

> **归属**：玩家可施加
> **施加来源**：
> - [海棠教皇·未明](/relics/epic/hai_tang_jiao_huang_wei_ming.md)（遗物）

<img src="/images/powers/begonia_flower_power.png" alt="海棠花" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 计数（Counter）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 每朵减堕落 | 10 |
| 回复生命 | 7 |
| PP 恢复总量 | 4 |

## 描述

①回合开始时：每<span style="color:#3aa675;font-weight:600">1</span>朵使<span style="color:#d44;font-weight:600">堕落</span>-<span style="color:#3aa675;font-weight:600">10</span>。<br/>②回合结束时：若生命值未满，消耗<span style="color:#3aa675;font-weight:600">1</span>朵，回复<span style="color:#3aa675;font-weight:600">7</span>点生命值与<span style="color:#3aa675;font-weight:600">4</span>点<span style="color:#d4a017;font-weight:600">PP</span>。

## 详细机制

- **层数 = 花朵数**。
- **回合开始**（自身回合）：每有 1 朵，减少 <span style="color:#3aa675;font-weight:600">10</span> 层[堕落](/powers/fallen_power.md)；减少量按"最多减到 0"封顶，不会把堕落减成负数。堕落为 0 时不结算。
- **回合结束**（自身回合）：仅当**当前生命未满**时，消耗 <span style="color:#3aa675;font-weight:600">1</span> 朵，回复 <span style="color:#3aa675;font-weight:600">7</span> 点生命，并随机分配 <span style="color:#3aa675;font-weight:600">4</span> 点 [PP](/mechanics/pp-system.md)。
- **满血时不消耗**：生命已满时花朵保留，不回复、不给 PP——所以花朵可以攒着，等掉血后再逐回合消耗。
- **PP 恢复是随机的**：每 1 点随机给一张 PP 未满的牌 +1，补满即止；没有 PP 未满的牌时该点作废。

## 小贴士

- **攻守兼备的双向能力**：回合开始每朵清 10 层堕落，回合结束每朵回 7 血 + 4 PP。
- **3 朵时的单回合收益**：回合开始清 30 层堕落，回合结束回 7 血 + 4 PP——堕落体系里既是"止损阀"又是续航源。
- **满血等于免费攒花**：不掉血就不消耗花朵，所以花朵会一直留着，适合在安全回合囤积。
- **与[极昼](/cards/character/polar_day.md)的取舍**：极昼把堕落一次性换成格挡，海棠花则是每回合小额清堕落 + 回血回 PP。前者是爆发保命，后者是长期续航。
- **PP 恢复不指定目标**：是随机补给 PP 未满的牌，无法定向给关键牌充能。

## 相关遗物

- [海棠教皇·未明](/relics/epic/hai_tang_jiao_huang_wei_ming.md)（唯一来源）

## 相关能力

- [堕落](/powers/fallen_power.md)（回合开始时被花朵削减）

## 相关机制

- [PP系统](/mechanics/pp-system.md)（回合结束恢复 PP）

## 源码

- `SeerBegoniaFlowerPower.cs`
