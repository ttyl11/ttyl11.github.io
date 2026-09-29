# 灰月之吻

<img src="/images/cards/hui_yue_zhi_wen.png" alt="灰月之吻" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 10
- **能量消耗**: 0
- **类型**: 技能
- **稀有度**: 普通
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 格挡 | 6 | 6 |
| 抽牌 | 1 | 2 |
| 置于抽牌堆顶 | 1 | 1 |
| PP | 10 | 10 |
| 最大PP | 10 | 10 |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> 获得<span style="color:#3aa675;font-weight:600">6</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。抽<span style="color:#3aa675;font-weight:600">1</span>张牌。将手牌中的一张牌放到[<span style="color:#d4a017;font-weight:600">抽牌堆顶</span>](/mechanics/hand.md)。

## 升级后

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> 获得<span style="color:#3aa675;font-weight:600">6</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。抽<span style="color:#3aa675;font-weight:600">2</span>张牌。将手牌中的一张牌放到[<span style="color:#d4a017;font-weight:600">抽牌堆顶</span>](/mechanics/hand.md)。

## 小贴士

- **0 费三合一的小巧技能**：抽牌前先给 <span style="color:#3aa675;font-weight:600">6</span> 格挡垫底，抽牌则刷新手牌，最后把**手牌中的一张牌**放到抽牌堆顶——三件事一根轴，本质是一张低成本的手牌调整 + 轻防御牌。
- **置顶牌的真正用途**：把牌放到抽牌堆顶，等于**安排下一回合第一张会被抽到的牌**。最适合放一张下回合想优先打出的大牌或关键牌，保证下回合稳定上手。
- **抽完再选时机**：先抽 1 张（升级 2 张）再选牌置顶，所以你可以根据抽到的新牌决定放哪张——是保留一张攻击等着下回合打，还是把一张暂时用不上的诅咒/状态放回去防卡手。
- **和 PP 的关系**：PP 是单张卡单场使用次数，这张 <span style="color:#3aa675;font-weight:600">10</span> 的 PP 在 0 费卡里算高，单场基本不会被 PP 卡住——它更像一张"低费就多摸摸牌库"的过牌件，滥用也难亏。
- **性价比**：0 费换 6 格挡 + 抽牌 + 手牌顶置控序，作为普通品质的低费过牌防御牌非常合格，升级后的双抽补强了过牌能力。

## 相关机制

- [PP系统](/mechanics/pp-system.md)（PP 消耗）
- [卡牌牌堆](/mechanics/hand.md)（手牌/抽牌堆/弃牌堆）
- [格挡](/mechanics/block.md)（防御机制）

## 源码

- `SeerHuiYueZhiWen.cs`