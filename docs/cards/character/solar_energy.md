# 太阳能

<img src="/images/cards/solar_energy.png" alt="太阳能" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 普通
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 基础能量获取 | 2 | 2 |
| 光属性额外能量 | 4 | 4 |
| 能量消耗 | 1 | 0 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 获得<span style="color:#3aa675;font-weight:600">2</span>点[<span style="color:#d4a017;font-weight:600">能量</span>](/mechanics/energy.md)。带[<span style="color:#9b59b6;font-weight:600">光</span>](/powers/light_power.md)系时额外获得<span style="color:#3aa675;font-weight:600">4</span>点。

## 升级后

PP: 5/5 获得<span style="color:#3aa675;font-weight:600">2</span>点<span style="color:#d4a017;font-weight:600">能量</span>。带<span style="color:#9b59b6;font-weight:600">光</span>系时额外获得<span style="color:#3aa675;font-weight:600">4</span>点。

## 小贴士

- **光属性专属的能量爆发牌**：这张牌的价值完全取决于你是否处于[光](/powers/light_power.md)属性状态。没有光属性时它只是一张平庸的能量循环牌；一旦你有光属性，1 费直接换 6 点能量，是全 mod 最猛的爆发能量源之一。
- **无光属性时基本白打**：打出换 <span style="color:#3aa675;font-weight:600">2</span> 点能量、耗 1 费，净收益 <span style="color:#3aa675;font-weight:600">+1</span> 能量——相当于花 1 费换 2 费，不赚太多能量，只消耗 1 点 PP。升级后耗能归 <span style="color:#3aa675;font-weight:600">0</span>，打白赚 <span style="color:#3aa675;font-weight:600">2</span> 点能量，才算勉强有点用。所以**没有光属性体系就别带这张牌**，纯浪费卡位。
- **有光属性时是质变**：光属性状态下 1 费换 <span style="color:#3aa675;font-weight:600">2</span>+<span style="color:#3aa675;font-weight:600">4</span>=<span style="color:#3aa675;font-weight:600">6</span> 点能量，净赚 <span style="color:#3aa675;font-weight:600">5</span> 点；升级后 0 费换 <span style="color:#3aa675;font-weight:600">6</span> 点能量，净赚 <span style="color:#3aa675;font-weight:600">6</span> 点。一回合多出 5-6 点能量意味着你可以连打数张高费核弹牌，是光属性流派的爆发引擎。
- **光属性怎么来**：[光](/powers/light_power.md)是精灵元素属性之一（克制超能/暗影/虫），游戏中可通过[怀生菩怜态](/powers/compassionate_bodhi_power.md)（稳定获得光属性）、[无相](/potions/attribute_change_potion.md)（随机换属性）等途径进入光属性状态；此外开局若自身尚无任何元素属性，会被随机分配一个（能否拿到光看运气）。组建光属性流派时这张牌是核心供能件，平时拿它没用。
- **升级收益是耗能归零**：升级后能量获取（基础 <span style="color:#3aa675;font-weight:600">2</span>、光系额外 <span style="color:#3aa675;font-weight:600">4</span>）都不变，唯一变化是耗能 <span style="color:#3aa675;font-weight:600">1</span>→<span style="color:#3aa675;font-weight:600">0</span>。有光属性时从净赚 <span style="color:#3aa675;font-weight:600">5</span> 变净赚 <span style="color:#3aa675;font-weight:600">6</span>，是无光属性时从净 <span style="color:#3aa675;font-weight:600">+1</span> 变纯白赚 <span style="color:#3aa675;font-weight:600">+2</span>。**只有决定走光属性流时才值得升级它**，否则升级优先级很低。
- **性价比**：无光属性时是亏卡位的废件，1 费换 2 能量；有光属性时是超模爆发，1 费换 6 能量直接撑起一回合核弹连击。属于"绑定体系才好用"的专属组件；升级免费化增强全系收益。

## 相关能力

- [光](/powers/light_power.md)（触发额外能量的元素属性）

## 相关机制

- [能量](/mechanics/energy.md)（核心产出资源）

## 源码

- `SeerSolarEnergy.cs`
