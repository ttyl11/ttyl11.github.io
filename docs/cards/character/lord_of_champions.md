# 诸雄之主

<img src="/images/cards/lord_of_champions.png" alt="诸雄之主" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌

- **最大PP**: 5

- **能量消耗**: 0

- **类型**: 攻击

- **稀有度**: 稀有

- **目标**: 单个敌方

- **可升级**: 是（1 级）

- **关键词**: 回响、迁鸣

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 基础伤害 | 7 | 10 |
| 迁鸣堕落 | 7 | 7 |
| 伤害倍率 | 每满100层堕落×2 | 每满100层堕落×2 |
| PP | 5 | 5 |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> [<span style="color:#d44;font-weight:600">迁鸣</span>](/mechanics/qianming.md)：[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">7</span>。造成<span style="color:#d44;font-weight:600">7</span>点伤害，每<span style="color:#3aa675;font-weight:600">100</span>层堕落伤害×<span style="color:#3aa675;font-weight:600">2</span>，末两位%概率再×<span style="color:#3aa675;font-weight:600">2</span>。

## 升级后

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> [<span style="color:#d44;font-weight:600">迁鸣</span>](/mechanics/qianming.md)：[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">7</span>。造成<span style="color:#d44;font-weight:600">10</span>点伤害，每<span style="color:#3aa675;font-weight:600">100</span>层堕落伤害×<span style="color:#3aa675;font-weight:600">2</span>，末两位%概率再×<span style="color:#3aa675;font-weight:600">2</span>。

## 工作机制

- **回响复制**：[<span style="color:#d44;font-weight:600">回响</span>](/mechanics/echo.md)——此牌在[抽牌堆](/mechanics/draw_pile.md)时，每个回合开始时向[弃牌堆](/mechanics/discard_pile.md)生成一张复制品，等于持续自我增殖。

- **迁鸣堕落7**：[<span style="color:#d44;font-weight:600">迁鸣</span>](/mechanics/qianming.md)——此牌每次[变化牌堆](/mechanics/qianming.md)时堕落+7；配合回响复制体反复进出牌堆，堕落快速累积。

- **堕落倍率**：伤害基数 × 2^⌊堕落/100⌋，且堕落%100 非零时以该值百分比概率再翻倍一次（例：堕落 333 → 100/200/300 各翻倍 = ×8，另有33%概率 ×16）。

## 小贴士

- **0费成长引擎**：0费版[回响](/mechanics/echo.md)+[迁鸣](/mechanics/qianming.md)——每次变化牌堆堕落+7，回响持续补牌，堕落与卡数双滚雪球。

- **倍率越高越"赌"**：尾数概率带来波动，越接近百位数触发概率越高；想稳就卡在 100/200/300 整层，想搏 16 倍就冲 99 尾数。

- **堕落是你自己的燃料**：堕落越高倍率越恐怖，但代价是[魔君接管](/powers/demon_takeover_power.md)的失控也越近——需要边滚雪球边控制阈值。

- **升级纯收益**：伤害 7→10（+43%），回响与迁鸣联动不变，升级后基础盘更高，爆发更强。

## 相关能力

- [堕落](/powers/fallen_power.md)（迁鸣每变化+7；倍率来源）

## 相关机制

- [回响](/mechanics/echo.md)（抽牌堆自我复制）
- [迁鸣](/mechanics/qianming.md)（变化牌堆触发+7堕落）
- [PP系统](/mechanics/pp-system.md)（PP 消耗）

## 源码

- `SeerLordOfChampions.cs`