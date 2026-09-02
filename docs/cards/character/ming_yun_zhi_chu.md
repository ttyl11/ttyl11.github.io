# 命运之初

<img src="/images/cards/ming_yun_zhi_chu.png" alt="命运之初" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: X（动态）
- **类型**: 技能
- **稀有度**: 稀有
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| X（能量/打出牌数） | 取决于支付能量 | X+1 张 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 随机打出<span style="color:#d44;font-weight:600">X</span>张[抽牌堆](/mechanics/draw_pile.md)的牌，将其[转化](/mechanics/transform.md)为随机牌（先自动打出享受效果，打出后变形成随机牌保留在牌组）。

## 升级后

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 随机打出<span style="color:#d44;font-weight:600">X+1</span>张[抽牌堆](/mechanics/draw_pile.md)的牌，将其[转化](/mechanics/transform.md)为随机牌（先自动打出享受效果，打出后变形成随机牌保留在牌组）。

## 小贴士

- **X 耗能杠杆效应**：X = 本场支付的能量数。3 费打出 3 张牌，5 费打出 5 张牌。能量越多，随机抽取的牌越多，收益呈线性增长。0 费时此牌无效，需确保至少支付 1 能量。
- **两步流程**：① 从抽牌堆随机选取 X 张牌免费自动打出（享受原牌全部效果）；② 每张打出后的牌变形成随机新牌，保留在牌组中。原牌的效果被完整执行，变形仅影响牌组构成。
- **转化保留在牌组**：变形成随机牌后新牌留在牌组，可反复使用。这是"命运之初"的核心价值——免费打出 X 张未知牌效果的同时，把它们变形成 X 张新牌持续扩充牌组池；升级后则是 X+1 张。
- **升级的价值**：升级让牌数从 X 变为 X+1，而能量消耗不变。每次升级相当于"免费多发一张牌"，性价比极高。
- **与静止领域的联动**：[静止领域](./jing_zhi_ling_yu.md)可以给弃牌堆的牌打上[冷却时间](/mechanics/enchantment.md)附魔。这些牌被命运之初抽取到时，打出后仍享有重放机会，一张牌产生两次效果。

## 相关机制

- [PP系统](/mechanics/pp-system.md)
- [X 耗能](/mechanics/energy.md)
- [转化](/mechanics/transform.md)
- [抽牌堆](/mechanics/draw_pile.md)

## 源码

- `SeerMingYunZhiChu.cs`
