# 纵横三千界

<img src="/images/cards/vertical_horizontal_worlds.png" alt="纵横三千界" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 第五技能
- **最大PP**: 1
- **能量消耗**: 1
- **类型**: 能力
- **稀有度**: 稀有
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 能量消耗 | 1 | 0 |
| PP | 1 | 1 |
| 最大PP | 1 | 1 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 立即触发战斗开始时的遗物效果。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 立即触发战斗开始时的遗物效果。耗能降至 <span style="color:#3aa675;font-weight:600">0</span>。

## 小贴士

- **1 费再放一次开局遗物**：这张能力牌打出后，立即按原版顺序重放你**自己持有的（未熔化的）遗物**的"战斗开始时"与"首回合开始时"钩子——先 `BeforeCombatStart` 全部走一遍，再 `BeforeCombatStartLate` 走一遍，随后补第一回合的 `BeforeSideTurnStart`（写有"回合数≤1"的遗物）、`AfterSideTurnStart`、`AfterPlayerTurnStart(Early/Late)`。等于把遗物的开局收益复制一次。
- **只重放自己的遗物**：重放范围仅限你持有且未熔化的遗物，敌方能力/怪物模型/卡牌/充能球/药水/队友遗物一律不重放——避免怪物增益被重复叠加、回合起始状态被重置、一次性遗物因"已触发"标记被吞而失效（这正是旧版"莫名其妙触发、很多不触发"的根因）。
- **不会二次抬升敌方最大生命**：重放窗口内会临时禁止"再次给敌人加最大生命"（如群星的礼赠史诗/传说档按当前最大生命复利加血），玩家自身/召唤物/队友以及降低最大生命的调用照常。
- **价值完全看遗物阵容**：没有强开局遗物时这是张废牌；持有多个开局触发遗物时则超值。配牌思路就是"遗物越多越赚"，适合遗物成型的后期关卡。
- **升级降至 0 费**：升级后耗能 1 → 0，纯正面提升——同一回合内可以先把别的牌打完，再白嫖一次开局遗物。升级优先级取决于你多在意它的使用频率。
- **PP 消耗极低**：仅 1PP，几乎不占 PP 资源，主要成本是占一次出牌和手牌位。

## 相关机制

- [PP 系统](/mechanics/pp-system.md)（消耗 1PP，每场战斗回满）

## 源码

- `SeerVerticalHorizontalWorlds.cs`
