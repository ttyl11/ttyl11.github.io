# 龙缘之息

> **归属**：玩家可施加
> **施加来源**：
> - [龙缘之息](/cards/character/dragon_breath.md)（卡牌——打出后获得 1 层）

<img src="/images/powers/dragon_breath_power.png" alt="龙缘之息" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 计数（Counter）
- **可见**: 是

## 描述

抽到名称带有<span style="color:#d4a017;font-weight:600">龙</span>的牌时，自动打出该牌。

## 详细机制

- **触发条件**：自身抽到一张**卡名带"龙"**的牌时，自动打出该牌。判定看本地化卡名（中文名含「龙」，英文名含 Dragon / Draconic）；注意这与[龙魂](/cards/quest/dragon_soul.md)按**内部类名**判定不是同一口径。
- **不可打出的牌不自动打出**：带[不能被打出](/mechanics/unplayable.md)关键词的牌会被跳过（例如状态牌）。
- **目标选择**：需要指定目标的牌，会从当前可命中敌人中**随机**选一个；群体 / 无目标 / 自身的牌按原样结算。
- **照常消耗 PP，但不检查 PP 门槛**：自动打出不检查 `IsPlayable`，PP 已为 0 时仍会打出并结算，PP 只扣到 0 为止（只有手动打出才受 PP 门槛限制）。
- **层数不参与数值计算**：能力本身没有"每层效果"，层数仅作标记；重复获得不会叠加效果。

## 小贴士

- **龙体系的核心引擎**：牌组里"龙"字牌越多，抽牌即自动出牌，等于白嫖一次打出。抽牌环节本身变成了输出环节。
- **注意 PP 会被吃掉**：自动打出依然消耗 PP，但 PP 为 0 也能打出去；别把 PP 全留给关键牌。
- **随机目标有风险**：自动打出的单体牌目标随机，可能打偏；群体牌不受影响。
- **来源牌带[迟涌](/mechanics/chiyong.md)**：[龙缘之息](/cards/character/dragon_breath.md)本身带迟涌，打出后洗牌时会沉到抽牌堆底部，需要抽完整轮才能再拿到——这是对"强力常驻能力"的频率限制。

## 相关卡牌

- [龙缘之息](/cards/character/dragon_breath.md)（唯一施加来源）

## 相关能力

- [龙](/powers/dragon_power.md)（龙属性体系）

## 相关机制

- [PP系统](/mechanics/pp-system.md)（自动打出同样消耗 PP）
- [迟涌](/mechanics/chiyong.md)（来源牌的洗牌位置）
- [不能被打出](/mechanics/unplayable.md)（这类牌不会被自动打出）

## 源码

- `SeerDragonBreath.cs`（`SeerDragonBreathPower`、龙缘之息卡牌）
