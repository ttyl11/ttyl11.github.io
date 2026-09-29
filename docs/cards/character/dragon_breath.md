# 龙缘之息

<img src="/images/cards/dragon_breath.png" alt="龙缘之息" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 1
- **能量消耗**: 2
- **类型**: 能力
- **稀有度**: 稀有
- **目标**: 自身
- **关键词**: [迟涌](/mechanics/chiyong.md)
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| PP | 1 | 1 |
| 最大PP | 1 | 1 |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 抽到带「[<span style="color:#d4a017;font-weight:600">龙</span>](/powers/dragon_power.md)」的牌：自动打出。[迟涌](/mechanics/chiyong.md)。

## 升级后

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 耗能降至<span style="color:#3aa675;font-weight:600">1</span>。抽到带「[<span style="color:#d4a017;font-weight:600">龙</span>](/powers/dragon_power.md)」的牌：自动打出。[迟涌](/mechanics/chiyong.md)。

## 详细机制

- 打出后获得[龙缘之息](/powers/dragon_breath_power.md)能力。
- **触发条件**：自身抽到一张**名称含"龙"字**的牌时，自动打出该牌。判定按卡牌本地化中文名是否包含「龙」，与龙魂等龙牌体系口径一致。
- **不可打出的牌不自动打出**（带[不能被打出](/mechanics/unplayable.md)关键词的牌会被跳过）。
- **目标选择**：需要指定目标的牌，会从当前可命中敌人中**随机**选一个；群体 / 无目标 / 自身的牌按原样结算。
- **自动打出照常消耗 PP**：走标准打出流程，PP 不足的牌打不出去（不会自动补 PP）。
- **[迟涌](/mechanics/chiyong.md)**：洗牌时此牌不随机分配位置，而是直接放入[抽牌堆](/mechanics/draw_pile.md)**底部**（每场战斗独立计算）。

## 小贴士

- **龙体系的引擎**：牌组里"龙"字牌越多，抽牌即自动出牌，等于白嫖一次打出。配合大量龙牌构筑时，抽牌环节本身就变成输出环节。
- **要注意 PP 会被吃掉**：自动打出依然消耗 PP——如果被自动打出的牌 PP 已耗尽，它打不出去。所以别把 PP 都留给关键牌。
- **随机目标有风险**：自动打出的单体牌目标是随机的，可能打偏；群体牌不受影响。
- **迟涌让它"晚点回来"**：打出后洗牌时会沉到牌堆底部，需要抽完整轮才能再拿到——这是对"强力常驻能力"的频率限制。
- **升级只降费**（2→1），能力本身不变。降费后更容易与龙牌同回合组合，优先级中等。

## 相关能力

- [龙缘之息](/powers/dragon_breath_power.md)（抽到龙牌自动打出的常驻能力）
- [龙](/powers/dragon_power.md)（龙属性体系）

## 相关机制

- [PP系统](/mechanics/pp-system.md)（PP 消耗，自动打出同样消耗）
- [迟涌](/mechanics/chiyong.md)（洗牌时沉入抽牌堆底部）
- [抽牌堆](/mechanics/draw_pile.md)（迟涌的作用位置）
- [不能被打出](/mechanics/unplayable.md)（这类牌不会被自动打出）

## 源码

- `SeerDragonBreath.cs`
