# 氪金

<img src="/images/cards/pay_to_win.png" alt="氪金" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 诅咒牌
- **类型**: 诅咒
- **稀有度**: 诅咒
- **关键词**: [回响](/mechanics/echo.md)、[不可打出](/mechanics/unplayable.md)、[迁鸣](/mechanics/qianming.md)
- **可升级**: 否

### 数值参数

| 参数 | 数值 |
|---|---|
| 每次挪牌扣除的金币 | 6 |

## 描述

[<span style="color:#d44;font-weight:600">迁鸣</span>](/mechanics/qianming.md)：扣除 <span style="color:#3aa675;font-weight:600">6</span> [金币](/mechanics/money_pouch.md)。

## 小贴士

- **它是"经济滴漏"，不是战斗威胁**：带[迁鸣](/mechanics/qianming.md)——每次在牌堆间挪动（抽到、弃置、洗回）就扣 <span style="color:#3aa675;font-weight:600">6</span> 金币；再叠上[回响](/mechanics/echo.md)（躺在抽牌堆时，每回合自我复制一张到弃牌堆），牌堆里的氪金会**越滚越多、越漏越快**。
- **越拖越亏，发现就该处理**：它不掉血，掉的是金币——而本 mod 的金币直接挂钩商店、泰坦之灵抽奖和大量遗物联动，长期漏金毁的是**整局经济节奏**。
- **不可打出=只能靠"变"**：战斗中打不了它，正解是用**变牌**把它变走（变牌会触发最后一次迁鸣，然后这张牌就没了）；销毁类效果也能把它移出战斗。
- **金币不足 6 时按实际持有量扣**、不会变负——所以刚开局的空钱包阶段反而不怕它。
- **性价比**：无费不可打出。它是纯粹的负面经济诅咒，而且会自我增殖——**无脑优先处理**。

## 相关机制

- [迁鸣](/mechanics/qianming.md)（牌堆变化时触发）
- [回响](/mechanics/echo.md)（每回合自我复制）
- [金币](/mechanics/money_pouch.md)（扣除的资源）
- [不可打出](/mechanics/unplayable.md)
- [手牌](/mechanics/hand.md) / [抽牌堆](/mechanics/draw_pile.md) / [弃牌堆](/mechanics/discard_pile.md)（挪牌触发的位置）

## 源码

- `SeerPayToWin.cs`