# 烈焰

> **归属**：玩家可施加
> **施加来源**：玩家获得——[火苗](/powers/flame_power.md)（能力联动）

<img src="/images/powers/blaze_power.png" alt="烈焰" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益
- **叠加方式**: 递减
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 转化概率 | 10 |

## 描述

①自身回合开始时，每个<span style="color:#d4a017;font-weight:600">烈焰</span>有<span style="color:#3aa675;font-weight:600">10%</span>概率转化为<span style="color:#d4a017;font-weight:600">燎原之火</span>；未转化的<span style="color:#d4a017;font-weight:600">烈焰</span>消失（持有<span style="color:#d4a017;font-weight:600">焚世涅槃</span>时保留）。<br/>②每转化<span style="color:#3aa675;font-weight:600">1</span>个，令<span style="color:#3aa675;font-weight:600">1</span>名随机敌人失去等同于其最大生命值的生命值（对<span style="color:#d4a017;font-weight:600">Boss</span>减半）。

## 详细机制

- **判定时点是自身回合开始**，不是回合结束：每层烈焰独立掷 <span style="color:#3aa675;font-weight:600">10%</span>，可能一次转化多层，也可能一层都不转化。
- **未转化部分**：普通持有者直接清空全部烈焰；持有[焚世涅槃](/powers/burning_nirvana_power.md)时只扣掉已转化的层数，剩下的留到下一回合继续判定。
- **转化收益**：转化几层就获得几层[燎原之火](/powers/wildfire_power.md)。
- **生命流失**：每转化 1 层，随机选 1 名不重复的敌人，造成等于其**最大生命值**的生命流失——不可格挡、不吃增伤/减伤；Boss 房或持有焚世涅槃时减半（对玩家侧同样按 50% 结算）。
- **转化数超过敌人数**：最多按存活敌人数结算，不会重复命中同一目标。

## 源码

- `SeerBlazePower.cs`
