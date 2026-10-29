# 曲径通幽

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[古温婆婆](/monsters/elite/guwen_granny_monster.md)（技能「曲径通幽」）

## 基本信息

- **类型**: 中性（None，不参与增益/减益分类）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| FixedDamage | 24 |

## 描述

该招式给予的[gold]格挡[/gold]消失时，对所有敌人造成[blue]24[/blue]点[gold]固定伤害[/gold]。

## 详细机制

- **施加方式**：古温婆婆使用「曲径通幽」时，先获得 <span style="color:#3aa675;font-weight:600">240</span> 点格挡、再给自己挂上本能力，并回复 <span style="color:#3aa675;font-weight:600">240</span> 点生命。
- **触发条件**：持有者的格挡因伤害被打空（`AfterBlockBroken`）或因回合开始等原因被清除（`AfterBlockCleared`）时触发。
- **结算内容**：对所有存活敌人各施加 <span style="color:#3aa675;font-weight:600">24</span> 点[固定伤害](/powers/fixed_damage_power.md)，随后移除自身——只触发一次。
- **近似判定**：判定只看"持有者的格挡消失"，并不区分这些格挡是否真由「曲径通幽」提供；只要该能力的格挡被清空即结算。

## 小贴士

- **别急着破盾**：打穿她的 240 格挡会立刻换来全体 24 点固定伤害——固定伤害不吃力量/易伤，靠格挡硬抗更稳。
- **拖过回合也会触发**：若她的格挡在回合开始被常规清除，同样会结算，无法通过"不打她"完全规避。

## 源码

- `SeerNewSkillPowersC.cs`（`SeerWindingPathPower`）
- `SeerGuwenGrannyMonster.cs`
