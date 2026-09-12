# 无尽能源

<img src="/images/cards/endless_energy.png" alt="无尽能源" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 无色牌
- **能量消耗**: 0
- **类型**: 技能
- **稀有度**: 稀有
- **目标**: 无
- **可升级**: 是（1 级）

## 描述

获得<span style="color:#3aa675;font-weight:600">999</span>点[<span style="color:#d4a017;font-weight:600">能量</span>](/mechanics/energy.md)。本回合每打出一张牌，向[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)加入1张随机[<span style="color:#d4a017;font-weight:600">诅咒</span>](/mechanics/curse.md)（含原版诅咒）。

## 升级后

获得<span style="color:#3aa675;font-weight:600">999</span>点[<span style="color:#d4a017;font-weight:600">能量</span>](/mechanics/energy.md)。本回合每打出一张牌，向[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)加入1张随机[<span style="color:#d4a017;font-weight:600">诅咒</span>](/mechanics/curse.md)（含原版诅咒）。

## 小贴士

- **🔑 0 费换一个无限费回合**：<span style="color:#3aa675;font-weight:600">999</span> 点能量 = 本回合费用实际上无限——抽牌、出牌循环全开，一回合把抽牌堆里所有能打的牌全部倾泻出去。注意能量回合结束清空，**必须在当回合花完**，憋着等于白拿。
- **代价实时结算——每打一张塞一张诅咒**：此牌打出后，本回合你每打出一张牌（包括随后打出的每一张），就从诅咒池（**含原版诅咒**）随机塞 <span style="color:#3aa675;font-weight:600">1</span> 张诅咒到手牌底部。打得越多诅咒越多——输出爆发的同时手牌质量实时崩坏。
- **诅咒池 = 赛尔 17 张 + 原版诅咒全收录**：随机范围不再局限于赛尔诅咒，原版自带诅咒也在池内——塞进来的牌种类更杂，但强度逻辑不变：都是污染手牌质量的负面牌。
- **诅咒只污染本场，不进局外牌组**：塞进来的诅咒是战斗内生成的衍生牌，战斗结束全部消失——**不会弄脏你的局外牌组**。代价仅限本场战斗的手牌/弃牌堆循环。
- **本场的滚雪球代价**：打 15 张牌 = 15 张诅咒入循环——弃牌堆被塞满，洗牌后再抽回来，后续回合手牌全是诅咒。**这是斩杀牌不是发育牌**：确保本回合打死或打残敌人再用，打成持久战就是自毁手感。
- **配合诅咒收益构筑可反转代价**：若构筑里有"诅咒联动"（消耗诅咒、诅咒触发类效果），诅咒从代价变成燃料——无限能源反而成为诅咒引擎的启动器。
- **先打关键牌再让诅咒进手**：诅咒塞到手牌**底部**，爆发顺序上先打核心输出、后打填充牌——诅咒最后进手，减少对当回合操作的影响。
- **升级拉通——前后效果一致**：升级后不加保留，基础与升级效果完全相同——抽到即打即可，无需刻意攒手。

## 相关能力

- [无尽能源](/powers/endless_energy_power.md)（打出后施加此能力）

## 相关机制

- [能量](/mechanics/energy.md)（获得 999 点能量）
- [手牌](/mechanics/hand.md)（诅咒牌加入手牌）
- [诅咒](/mechanics/curse.md)（随机诅咒含原版）

## 源码

- `SeerEndlessEnergy.cs`
