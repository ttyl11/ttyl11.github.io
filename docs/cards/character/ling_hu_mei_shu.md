# 灵狐魅术

<img src="/images/cards/ling_hu_mei_shu.png" alt="灵狐魅术" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌

- **最大PP**: 10

- **能量消耗**: 1

- **类型**: 技能

- **稀有度**: 普通

- **目标**: 自身

- **可升级**: 是（1 级）

### 数值参数

| 参数   | 数值 | 升级后 |
| ---- | -- | --- |
| 格挡   | 8  | 8   |
| 转化张数 | 2  | 3   |
| PP   | 10 | 10  |
| 最大PP | 10 | 10  |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> 获得<span style="color:#3aa675;font-weight:600">8</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。从[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/hand.md)中选择<span style="color:#3aa675;font-weight:600">2</span>张牌，将其[<span style="color:#d4a017;font-weight:600">变化</span>](/mechanics/transform.md)。

## 升级后

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> 获得<span style="color:#3aa675;font-weight:600">8</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。从[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/hand.md)中选择<span style="color:#3aa675;font-weight:600">3</span>张牌，将其[<span style="color:#d4a017;font-weight:600">变化</span>](/mechanics/transform.md)。

## 小贴士

- **抽牌堆定向改造**：从[<span style="color:#3aa675;font-weight:600">抽牌堆</span>](/mechanics/hand.md)里选 <span style="color:#3aa675;font-weight:600">2</span> 张牌（升级 <span style="color:#3aa675;font-weight:600">3</span> 张）[<span style="color:#d4a017;font-weight:600">变化</span>](/mechanics/transform.md)成随机牌——和"变化手牌"不同，它动的是抽牌堆，意味着你能**提前清掉抽牌堆里不想抽到的牌**，而不是等它们上手再处理。

- **变化是随机结果**：[<span style="color:#d4a017;font-weight:600">变化</span>](/mechanics/transform.md)是随机转成一张随机牌，不确定结果。它更像"重铸"，用于替换掉当前抽牌堆中占用位置的低价值牌（诅咒/状态、用不上的多余牌），把这些位置换成有潜力的随机牌。

- **先格挡再改牌库**：本回合先拿 <span style="color:#3aa675;font-weight:600">8</span> 格挡生存，然后把抽牌堆里接下来一两回合可能抽到的"废牌"提前变化掉，等于**为一两回合后的抽牌质量做一次手术**。

- **升级补足覆盖面**：2 → 3 张，升级后一次能处理的三张牌，在抽牌堆顶都是同质废牌时价值更高——你更有可能把一整手即将上手的坏牌一网打尽。

- **配合"抽到触发"效果**：[<span style="color:#d4a017;font-weight:600">变化</span>](/mechanics/transform.md)在抽牌堆中原地替换，若某张牌带"抽到时触发"效果且不再需要，把它变化掉可避免其触发或保留执行空间。

- **性价比**：1 费换 8 格挡 + 2 张抽牌堆重铸，普通品质里偏实用的"防御 + 牌库清洁"二合一，去掉不愿抽的牌本身就是一种间接收益。

## 相关机制

- [PP系统](/mechanics/pp-system.md)（PP 消耗）

- [转化](/mechanics/transform.md)（把牌变为随机牌）

- [卡牌牌堆](/mechanics/hand.md)（手牌/抽牌堆/弃牌堆）

- [格挡](/mechanics/block.md)（防御机制）

## 源码

- `SeerLingHuMeiShu.cs`

