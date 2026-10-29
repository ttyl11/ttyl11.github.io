# 燎原之火

> **归属**：玩家可施加 / 怪物自带
> **施加来源**：玩家方——由[烈焰](/powers/blaze_power.md)转化（火种 → 火苗 → 烈焰 → 燎原之火）；怪物方——[不灭·艾恩斯](/monsters/boss/bumie_ai_en_si_monster.md)会积累并利用它

<img src="/images/powers/wildfire_power.png" alt="燎原之火" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 叠加（Counter，层数可见）
- **可见**: 是

## 描述

火焰的最终形态，不再转化。

## 详细机制

- **转化链终点**：[烈焰](/powers/blaze_power.md)在自己的回合开始时按每层 <span style="color:#3aa675;font-weight:600">10%</span> 概率独立转化，转化成功的层数变为等量燎原之火；燎原之火自身**不会再转化**，也不会自然衰减。
- **本身没有周期效果**：它不直接造成伤害或施加异常，价值体现在与其它火焰机制的联动上。
- **焚世涅槃的复活燃料**：持有[焚世涅槃](/powers/burning_nirvana_power.md)时，首次致死无条件复活；此后每有 <span style="color:#3aa675;font-weight:600">1</span> 层燎原之火就能再挡一次死亡，复活后消耗 <span style="color:#3aa675;font-weight:600">1</span> 层。
- **不灭·艾恩斯的增伤**：每有 <span style="color:#3aa675;font-weight:600">1</span> 层燎原之火，其招式施加给敌人的焚烬与烧伤层数额外 <span style="color:#3aa675;font-weight:600">+100%</span>（线性叠加）。
- **不可被常规驱散**：部分"移除敌方增益"的效果会跳过燎原之火，避免把火焰体系的核心燃料直接抹掉。

## 小贴士

- **别让它囤起来**：面对不灭·艾恩斯时，燎原之火层数越高，后续焚烬/烧伤越夸张，也会让它的复活次数变多。
- **玩家侧的火焰链**：烈焰每层都是独立 10% 判定，层数越多越容易出货，但未转化的层会直接消失，属于高风险高回报的堆叠玩法。

## 源码

- `SeerWildfirePower.cs`
- `SeerBlazePower.cs`
- `SeerBurningNirvanaPower.cs`
