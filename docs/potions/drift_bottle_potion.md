# 🍾 漂流瓶

## 基本信息

- **分类**: 资源
- **稀有度**: 稀有
- **使用时机**: 战斗外
- **目标**: 自身

## 描述

在[宝箱房](/mechanics/game-flow.md)使用获得 <span style="color:#3aa675;font-weight:600">15</span> [泰坦之灵](/mechanics/currency.md)；在[事件房](/events/index.md)使用获得 <span style="color:#3aa675;font-weight:600">1000万</span> [赛尔豆](/mechanics/currency.md)；在[休息处](/mechanics/game-flow.md)使用获得 <span style="color:#3aa675;font-weight:600">300</span> [金币](/mechanics/currency.md)。无法在**战斗**中使用。

## 详细机制

- **按房间类型给奖励**：效果取决于当前所在房间节点类型——
  - **宝箱房**（`Treasure`）：获得 15 泰坦之灵。
  - **事件房**（`EventRoom`）：获得 1000 万赛尔豆。
  - **休息处**（`RestSite`）：获得 300 金币。
- **战斗外**：只能在非战斗状态下使用，战斗中不可用。
- **使用条件**：仅当前处于上述三种房间之一时才可使用。

## 小贴士

- **对症下药**：想冲哪类资源就把瓶子留到对应房里用（泰坦之灵/赛尔豆/金币按需取舍）。
- **稀有指定型**：稀有稀有度，属于"三选一资源"，价值随当前资源缺口变化。

## 源码

- `SeerDriftBottlePotion.cs`