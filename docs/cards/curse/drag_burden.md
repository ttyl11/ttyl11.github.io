# 拖50

<img src="/images/cards/drag_burden.png" alt="拖50" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 诅咒牌
- **类型**: 诅咒
- **稀有度**: 诅咒
- **关键词**: [迟涌](/mechanics/chiyong.md)、[不可打出](/mechanics/unplayable.md)
- **可升级**: 否

### 数值参数

| 参数 | 数值 |
|---|---|
| 每回合伤害系数 | 3 |

## 描述

回合结束时若此牌在[手牌](/mechanics/hand.md)中，受到当前回合数×<span style="color:#3aa675;font-weight:600">3</span> 的伤害。

## 小贴士

- **它是"拖延检测器"，越拖越痛**：回合结束时在手就扣"当前回合数 × 3"——第 3 回合 <span style="color:#3aa675;font-weight:600">9</span> 点、第 10 回合 <span style="color:#3aa675;font-weight:600">30</span> 点、第 17 回合 <span style="color:#3aa675;font-weight:600">51</span> 点，**全部不可格挡，也不吃力量、易伤等增减伤**。长战斗里它能直接终结你。
- **[迟涌](/mechanics/chiyong.md)在这里是"帮凶"**：它洗回牌堆时会沉到牌堆底，于是总在战斗后期才被重新抽到——而偏偏后期伤害最高。"抽得越晚越痛"是设计好的组合。
- **反过来利用它：主动把这张牌提前捞出来**：伤害只跟"抽到它时的回合数"有关，所以**越早抽到越安全**。有[预见](/mechanics/scry.md)、额外抽牌类手段时，可以在前几回合就把它从牌堆底捞出来，趁回合数小的时候把这刀挨掉（第 2 回合只扣 6 点）。
- **不保留=间歇性咬人**：它抽到的那回合结束结算一次就进弃牌堆，之后在牌堆里的回合完全无事——所以它只在你抽到它的回合发作。
- **不可打出=只能靠效果处理**：想跳过某一次结算，只能用消耗、弃牌等手段在回合结束前把它移出手牌。
- **性价比**：无费不可打出。它把"战斗时长"直接换算成掉血，最优解永远是**尽快结束战斗**。

## 相关机制

- [手牌](/mechanics/hand.md)（触发条件：此牌在手牌中）
- [迟涌](/mechanics/chiyong.md)（洗回牌堆时沉底）
- [不可打出](/mechanics/unplayable.md)（无法主动打出）
- [格挡](/mechanics/block.md)（惩罚伤害不受格挡减免）

## 源码

- `SeerDragBurden.cs`