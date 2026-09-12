# 戕伐樊笼

<img src="/images/cards/cage_destruction.png" alt="戕伐樊笼" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 稀有
- **目标**: 所有敌方
- **可升级**: 是（1 级）
- **关键词**: [凝驻](/mechanics/ningzhu.md)

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 异常免疫次数 | 4 | 4 |
| 消亡层数 | 10 | 15 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 清除双方所有增益和减益。自身获得<span style="color:#3aa675;font-weight:600">4</span>次[<span style="color:#d4a017;font-weight:600">异常免疫</span>](/powers/debuff_immune_power.md)。对方获得<span style="color:#3aa675;font-weight:600">10</span>层[<span style="color:#9b59b6;font-weight:600">消亡</span>](/powers/demise_power.md)。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 清除双方所有增益和减益。自身获得<span style="color:#3aa675;font-weight:600">4</span>次[<span style="color:#d4a017;font-weight:600">异常免疫</span>](/powers/debuff_immune_power.md)。对方获得<span style="color:#3aa675;font-weight:600">15</span>层[<span style="color:#9b59b6;font-weight:600">消亡</span>](/powers/demise_power.md)。

## 小贴士

- **清场+斩杀+护身三合一**：一次打出同时做三件事——清除双方所有增益和减益（包括力量、敏捷、虚弱、易伤等全部）、给所有敌人挂 10 层（升级后 15 层）消亡、自身获得 4 次异常免疫。这是 mod 中少有的"全清+护身"效果，面对堆满增益且带异常控制的精英/Boss 时价值极高。
- **消亡的伤害是持续放血**：消亡是原版减益，持有者**回合结束时**失去等于当前层数的生命（不可格挡的非攻击伤害），**且层数不衰减**——10 层消亡 = 敌人每回合稳定掉 10 点，直到战斗结束或敌人用"清除自身减益"类手段移掉它。3 回合就是 30 点真实伤害（升级后 15 层 = 每回合 15 点，3 回合 45 点），对高格挡/高血量 Boss 是绕过防御的斩杀线。多敌人遭遇战时每个敌人都挂 10/15 层，总伤按敌人数量倍增。
- **异常免疫护身**：自身获得 4 次[异常免疫](/powers/debuff_immune_power.md)——接下来 4 次异常状态施加被免疫掉。配合清场效果，打出后自己短期内不会被敌人挂异常，为后续输出提供安全窗口。
- **双刃剑——自己也被清**：清除是**双方**的，你的力量、敏捷、活力等增益也会被一并清掉。最佳使用时机是你身上增益不多、敌人身上增益很多的时候。如果你正在跑力量体系或活力体系，打出这张等于自废武功。
- **凝驻关键词（不会洗入抽牌堆）**：带有[凝驻](/mechanics/ningzhu.md)——此牌无法从[弃牌堆](/mechanics/discard_pile.md)洗入[抽牌堆](/mechanics/draw_pile.md)，打出后停留在弃牌堆。配合回手效果（如[返璞归真](./return_to_nature.md)类回收牌）或复制手段可以反复打出；但正常洗牌循环里它不会自动回来，需要主动回收手段才能多用一次。
- **清除范围有保护**：清除时会自动排除动画相关的能力（如惊跳、幻影、蒸汽喷发、沙坑），不会导致游戏异常。但 mod 自定义的怪物增益属于正常增益/减益，会被清除。
- **配合建议**：适合作为"重启键"——当你被敌人挂满减益、敌人自己堆满增益时，一张牌清空全部、自身免疫异常再挂消亡斩杀。消亡的生命损失配合后续的攻击牌可以快速收割。升级后 15 层消亡是质变——每回合 15 点真实伤害足以单靠 DOT 磨死多数精英。
- **升级的价值**：消亡层数从 10 提升至 15（+50%）。异常免疫次数不变（4 次）。升级纯增伤，是斩杀线的直接提升。升级优先级高。
- **性价比**：1 费合理——清全场增益减益加 15 层消亡生命损失与 4 次异常免疫，斩杀、重启、护身一体。

## 相关能力

- [异常免疫](/powers/debuff_immune_power.md)（自身获得 4 次）
- [消亡](/powers/demise_power.md)（对方获得 10/15 层）

## 相关机制

- [凝驻](/mechanics/ningzhu.md)（mod 关键词，不随洗牌进入抽牌堆）

## 源码

- `SeerCageDestruction.cs`
