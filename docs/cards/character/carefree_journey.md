# 逍遥游

<img src="/images/cards/carefree_journey.png" alt="逍遥游" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 罕见
- **目标**: 无
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 格挡 | 8 | 8 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 获得<span style="color:#3aa675;font-weight:600">8</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。从[<span style="color:#d4a017;font-weight:600">消耗牌堆</span>](/mechanics/exhaust_pile.md)选一张牌置入[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)顶并恢复PP。

## 升级后

[<span style="color:#d4a017;font-weight:600">保留</span>](/mechanics/retain.md)。PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 获得<span style="color:#3aa675;font-weight:600">8</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。从[<span style="color:#d4a017;font-weight:600">消耗牌堆</span>](/mechanics/exhaust_pile.md)选一张牌置入[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)顶并恢复PP。

## 小贴士

- **回收+护身二合一**：打出时先获得 8 点格挡（提供当回合防御），再从[消耗牌堆](/mechanics/exhaust_pile.md)选 1 张牌放入抽牌堆顶并恢复 PP。既有即时防御，又是消耗体系的回收核心。
- **选牌范围**：从[消耗牌堆](/mechanics/exhaust_pile.md)中任选 1 张牌。消耗堆为空时不触发回收（但仍获得格挡），所以前期消耗堆没牌时它只是一张 1 费 8 格挡的防御牌。
- **置入抽牌堆顶**：选中的牌放入[抽牌堆](/mechanics/draw_pile.md)**顶**，意味着**下回合抽牌时第一张就抽到它**。可以精准规划下回合的核心操作。
- **PP 恢复**：选中的牌若为 PP 卡，其 PP 会**恢复至上限**。这让被消耗的高 PP 卡牌可以满状态回归，不会因为之前用过而 PP 归零。
- **捞回 PP 卡=突破单卡 PP 上限**：PP 是单场战斗资源，PP 卡用光 PP 后本场就废了。逍遥游捞回的 PP 卡**PP 恢复至上限**——等于让同一张卡本场战斗多打一轮。高 PP 终结卡（如 PP5/PP10 的大招）被捞回满状态再战，是这张牌最大的价值点。
- **配合万剑归一——捞君王之剑的两种时机**：[宝剑](/cards/colorless/sword.md)会把铸造出的君王之剑全部送进消耗堆。此时逍遥游有两种用法：其一，[万剑归一](./myriad_swords_unity.md)没上手（没抽到或 PP 不够启动）时，君王之剑只能躺在消耗堆，用逍遥游捞出来继续输出；其二，万剑归一虽每回合自动打一张，但斩杀期等不起排队——把**越早铸造越肥**的那把置入抽牌堆顶，下回合第一抽就抽到手动打出，加速兑现大伤害。
- **配合禁术·契灭——捞回核心 PP 卡**：[禁术·契灭](/fifth-skill/contract_destruction.md)会消耗手牌中**所有** PP 卡换伤害，被消耗的牌 PP 已清零。逍遥游捞回时 PP 恢复至上限——被"all-in"误伤的核心 PP 卡能满状态归队再战一轮，爆发与续航兼得。
- **升级的价值**：获得[保留](/mechanics/retain.md)关键词，回合结束时不被弃置。这让你可以**把这张牌留到消耗堆有值得回收的牌时再打出**，而不是被迫在没好目标时浪费。升级优先级高。
- **性价比**：1 费 8 格挡 + 回收 PP 回满，超值。它是消耗体系的"后悔药"——只要卡组有主动消耗手段（宝剑、契灭等），这张牌就有明确的回收目标。

## 相关机制

- [消耗牌堆](/mechanics/exhaust_pile.md)（选牌来源）
- [抽牌堆](/mechanics/draw_pile.md)（置入目标）
- [保留](/mechanics/retain.md)（升级后获得的关键词）

## 源码

- `SeerCarefreeJourney.cs`
