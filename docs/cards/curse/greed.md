# 贪婪

<img src="/images/cards/greed.png" alt="贪婪" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 诅咒牌
- **能量消耗**: 2
- **类型**: 诅咒
- **稀有度**: 诅咒
- **关键词**: [永恒](/mechanics/eternal.md)、[保留](/mechanics/retain.md)
- **可升级**: 否

### 数值参数

| 参数 | 数值 |
|---|---|
| 伤害百分比 | 5% |

## 描述

回合结束时若此牌在[手牌](/mechanics/hand.md)中，受到当前[金币](/mechanics/money_pouch.md) <span style="color:#3aa675;font-weight:600">5</span>% 的伤害。

## 小贴士

- **它惩罚的是"囤金币"，不惩罚别的**：留它在手，每回合结束就扣当前金币的 5%（不可[格挡](/mechanics/block.md)）。金币越厚掉得越狠——<span style="color:#3aa675;font-weight:600">100</span> 金每回合 5 点、<span style="color:#3aa675;font-weight:600">500</span> 金 25 点、<span style="color:#3aa675;font-weight:600">1000</span> 金 50 点。**你越有钱，它越致命**。
- **把金币花掉 = 直接把伤害摁到地板**：5% 向下取整——金币低于 <span style="color:#3aa675;font-weight:600">20</span> 时伤害直接归 0，完全不掉血。所以**囤钱流（靠金币的遗物 / 事件）最怕它，及时消费流几乎免疫**。
- **保留=不处理就每回合放血**：它不弃牌，会一直躺在手里。想止血只有两条路：花 2 费把它打出去（进弃牌堆、暂时消停），或用消耗类效果移走。
- **决策点**：金币多且血线紧 → 优先 2 费打出去或消耗掉；金币少 → 留着无妨，甚至可以不管它。
- **永恒=每场重来**：不能删、不能变，它永远在牌组里，每场战斗都会再来一遍。
- **性价比**：2 费 = "把这张牌从手里丢掉"的止损价。它没有任何收益，纯粹是负担——**越有钱越该付这 2 费**。

## 相关机制

- [手牌](/mechanics/hand.md)（触发条件：回合结束时在手牌）
- [保留](/mechanics/retain.md)（回合结束不弃牌）
- [金币](/mechanics/money_pouch.md)（伤害基数）
- [永恒](/mechanics/eternal.md)（不能删除、不能变化）

## 源码

- `SeerGreed.cs`