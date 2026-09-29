# 堕落龙力

<img src="/images/cards/fallen_dragon_force.png" alt="堕落龙力" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

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
| 格挡 | 14 | 14 |
| 堕落 | 18 | 18 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> [<span style="color:#d4a017;font-weight:600">龙属性</span>](/powers/dragon_power.md)生物随机变属性；其余生物获<span style="color:#3aa675;font-weight:600">14</span>点[格挡](/mechanics/block.md)。[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">18</span>。

## 升级后

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 耗能降至<span style="color:#3aa675;font-weight:600">0</span>。[<span style="color:#d4a017;font-weight:600">龙属性</span>](/powers/dragon_power.md)生物随机变属性；其余生物获<span style="color:#3aa675;font-weight:600">14</span>点[格挡](/mechanics/block.md)。[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">18</span>。

## 详细机制

- **作用范围为全场**：遍历敌我**双方所有存活生物**，逐个判定，不是只对自己或只对敌人。
- **龙属性生物**：清空其全部元素，再从 <span style="color:#3aa675;font-weight:600">26</span> 种元素中随机获得 1 种（随机源为 Niche，多人同步同种子）。
- **非龙属性生物**：获得 <span style="color:#3aa675;font-weight:600">14</span> 点[格挡](/mechanics/block.md)——**敌人也会加格挡**。
- **堕落 +18**：固定值，与场上生物数量无关。

## 小贴士

- **本质是"以龙换防"**：对龙属性生物把它从龙属性打散成随机属性；对非龙生物一律给 14 格挡。
- **会给敌人加防**：非龙属性的敌人同样吃 14 格挡，等于给对手送防。使用前务必确认敌方元素状态——如果敌方不是龙属性，这张牌就是纯粹的"资敌"。
- **自己若是龙属性也会被换掉**：龙体系牌组里用这张牌会打断自己的龙属性加成（如依赖龙属性数量的群攻），属于双刃。
- **堕落 +18 是稳定供给**：即便场面不理想，它也能稳定推进 100 层混沌化身进度。
- **升级收益**：耗能 1→0，变成 0 费牌，可与其他牌随意组合，是明显强化。

## 相关能力

- [龙](/powers/dragon_power.md)（判定与变身目标元素）
- [堕落](/powers/fallen_power.md)（每次 +18）

## 相关机制

- [PP系统](/mechanics/pp-system.md)（PP 消耗）
- [格挡](/mechanics/block.md)（非龙属性生物获得 14 格挡）
- [元素克制](/mechanics/element-affinity.md)（26 种元素）
- [混沌化身](/mechanics/chaos-incarnation.md)（堕落满 100 层触发）

## 源码

- `SeerFallenDragonForce.cs`
