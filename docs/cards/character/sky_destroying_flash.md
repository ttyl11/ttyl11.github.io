# 滅天闪

<img src="/images/cards/sky_destroying_flash.png" alt="滅天闪" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 10
- **能量消耗**: 1
- **类型**: 攻击
- **稀有度**: 稀有
- **目标**: 单个敌方
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害 | 4 | 4 |
| 先制 | 1 | 2 |
| 害怕/沉默回合 | 2 | 2 |
| 堕落 | 44 | 44 |
| PP | 10 | 10 |
| 最大PP | 10 | 10 |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> [<span style="color:#d4a017;font-weight:600">先制</span>](/powers/first_strike_power.md)+<span style="color:#3aa675;font-weight:600">1</span>。[<span style="color:#d44;font-weight:600">吸强</span>](/mechanics/xi_qiang.md)。造成<span style="color:#3aa675;font-weight:600">4</span>点伤害，回[抽牌堆](/mechanics/draw_pile.md)顶。所有敌人[害怕](/powers/fear_power.md)、[沉默](/powers/silence_power.md)<span style="color:#3aa675;font-weight:600">2</span>。[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">44</span>。

## 升级后

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> [<span style="color:#d4a017;font-weight:600">先制</span>](/powers/first_strike_power.md)+<span style="color:#3aa675;font-weight:600">2</span>。[<span style="color:#d44;font-weight:600">吸强</span>](/mechanics/xi_qiang.md)。造成<span style="color:#3aa675;font-weight:600">4</span>点伤害，回[抽牌堆](/mechanics/draw_pile.md)顶。所有敌人[害怕](/powers/fear_power.md)、[沉默](/powers/silence_power.md)<span style="color:#3aa675;font-weight:600">2</span>。[<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">44</span>。

## 详细机制

- **结算顺序**：先制+1 → 吸强 → 造成伤害 → 敌人害怕/沉默 → 堕落 +44 → 回到抽牌堆顶。
- **吸强**：夺取**所有敌人**的四维属性正向层数——敌人该项归零，等量施加给自身。力量 / 防御 / 命中 / 速度逐项分别处理。
- **吸强先于伤害**：目标原有的防御会被搬走，本次 <span style="color:#3aa675;font-weight:600">4</span> 点伤害不会被它削减；夺来的力量则会直接加强这次伤害。
- **回抽牌堆顶**：伤害结算后此牌被放回[抽牌堆](/mechanics/draw_pile.md)**顶部**，下一次抽牌必定抽到它（不进入弃牌堆）。
- **害怕 / 沉默**：对**所有敌人**各施加 2 回合，与本次攻击目标无关。
- **先制 +1**：先制只影响**下一张牌**的耗能（每层 -1），不加伤害；这张牌打出后，先制会由你接下来打出的第一张牌消耗掉，不会跨回合叠加。
- **堕落 +44**：固定值，与伤害无关。

## 小贴士

- **一牌四用**：吸强（抢属性）+ 控制（害怕+沉默）+ 先制 + 回顶（可循环）。单卡承担了输出之外的几乎所有职能。
- **可循环是核心**：因为回到抽牌堆顶，只要有抽牌手段就能**每回合重复打出**——每回合给下一张牌省 1 费，敌人被反复害怕/沉默，等于持续压制。先制本身不会叠加：你打出下一张牌时它就被消耗了。PP 10 决定每场最多手动打出 10 次。
- **吸强对高属性精英/Boss 收益极高**：把敌人的力量/防御/命中/速度整包搬到自己身上，越强的敌人给得越多。因为吸强在伤害之前，目标原有的防御也挡不住这一击。
- **堕落 44 是"自我供能"，也是失控引信**：打 3 次就累计 132 层，跨过百位触发一次[混沌化身](/mechanics/chaos-incarnation.md)（抽 1 张）+[魔君接管](/powers/demon_takeover_power.md)（强控乱打）。配合回顶循环它确实能推动堕落体系运转，但[堕落](/powers/fallen_power.md)是负面层数——转得越快，被接管乱打的频率越高。
- **别指望它打伤害**：本体只有 4 点伤害，价值全在吸强、控制与循环。
- **升级收益**：先制 1→2，等于每回合给下一张牌省 2 费，循环时的出牌节奏更顺；它不提升伤害或控制强度，升级优先级中等偏上。

## 相关能力

- [先制](/powers/first_strike_power.md)（每层使下一张牌耗能 -1，打出牌后移除）
- [害怕](/powers/fear_power.md) / [沉默](/powers/silence_power.md)（全体控制）
- [堕落](/powers/fallen_power.md)（每次 +44）
- [防御](/powers/defense_power.md) / [命中](/powers/accuracy_power.md) / [速度](/powers/speed_power.md)（吸强夺取的属性）

## 相关机制

- [PP系统](/mechanics/pp-system.md)（PP 消耗）
- [吸强](/mechanics/xi_qiang.md)（夺取敌方四维正向层数）
- [抽牌堆](/mechanics/draw_pile.md)（打出后回到牌堆顶）
- [混沌化身](/mechanics/chaos-incarnation.md)（堕落满 100 层触发）

## 源码

- `SeerSkyDestroyingFlash.cs`
