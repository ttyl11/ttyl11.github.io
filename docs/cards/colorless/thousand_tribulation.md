# 千劫战意

<img src="/images/cards/thousand_tribulation.png" alt="千劫战意" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 无色牌
- **能量消耗**: 0
- **类型**: 技能
- **稀有度**: 罕见
- **目标**: 自身
- **标签**: 铁血战士
- **可升级**: 是（1 级）

## 描述

将随机<span style="color:#3aa675;font-weight:600">1</span>张铁血战士的牌加入[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)，其获得[<span style="color:#d4a017;font-weight:600">消耗</span>](/mechanics/exhaust.md)。

## 升级后

将随机<span style="color:#3aa675;font-weight:600">1</span>张<span style="color:#d4a017;font-weight:600">升级</span>后的铁血战士的牌加入[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)，其获得[<span style="color:#d4a017;font-weight:600">消耗</span>](/mechanics/exhaust.md)。

## 小贴士

- **🔑 0 费借一张铁血卡**：打出时从铁血战士（Ironclad）卡池的**所有已解锁卡**中随机抽一张，加入[抽牌堆](/mechanics/draw_pile.md)**底部**——0 费换一张外池卡，期望不亏。
- **"获得消耗"的主体是生成的牌**：生成的牌被附加[消耗](/mechanics/exhaust.md)关键词，打出一次后进消耗堆；此牌自身打出后正常进弃牌堆，可反复使用。
- **战斗内衍生**：生成的牌只在本次战斗存在，战斗结束消失，不进牌组——不是永久补牌。
- **抽牌堆底部**：沉入底部意味着需要抽牌引擎或长战斗才能摸到，速攻局可能整场都抽不上来。
- **卡池范围**：铁血战士的普通/罕见/稀有卡都在池内（未解锁的除外），0 费可能摸到重刃、燃烧契约这类强卡，也可能摸到过渡卡。
- **升级效果**：生成的牌自动以升级形态加入（此牌自身无其他变化）。
- **与十倍二长老对比**：同为"借其他角色卡池"的无色牌——千劫战意只借铁血战士池、一次一张且附带消耗；[十倍二长老？](/cards/colorless/ten_times_two_elder.md)借五角色池且每回合持续供牌。

## 相关机制

- [抽牌堆](/mechanics/draw_pile.md)（生成的牌加入底部）
- [消耗](/mechanics/exhaust.md)（生成的牌附加消耗）

## 源码

- `SeerThousandTribulation.cs`
