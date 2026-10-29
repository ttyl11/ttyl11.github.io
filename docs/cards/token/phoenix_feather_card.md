# 烬翎

<img src="/images/cards/phoenix_feather_card.png" alt="烬翎" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 衍生牌
- **最大PP**: 1
- **能量消耗**: 0
- **类型**: 技能
- **稀有度**: 衍生
- **目标**: 无
- **可升级**: 否
- **关键词**: [毁灭](/mechanics/destruction.md)

### 数值参数

| 参数 | 数值 |
|---|---|
| 抽牌数量 | 1 |
| 能量获取 | 2 |
| 胜利所需烬翎数 | 20 |
| PP | 1 |
| 最大PP | 1 |

## 描述

PP: 1/1 抽<span style="color:#3aa675;font-weight:600">1</span>张牌，获得<span style="color:#3aa675;font-weight:600">2</span>点[<span style="color:#d4a017;font-weight:600">能量</span>](/mechanics/energy.md)。

## 小贴士

- **这不是垃圾牌，是胜利计数器**：[菲尼克斯](/monsters/boss/phoenix_monster.md)（Boss）在**它自己的回合结束**时向你的[抽牌堆](/mechanics/draw_pile.md)随机位置塞 1 张烬翎；当**每个玩家各自**的抽牌堆+[手牌](/mechanics/hand.md)+[弃牌堆](/mechanics/discard_pile.md)合计达到 <span style="color:#3aa675;font-weight:600">24</span> 片时，菲尼克斯会在**它自己的回合开始时**判定并真正死亡——战斗直接获胜（多人各算各的，每个人都得到 24 片才算过）。烬翎本质是这场 Boss 战的**软胜利计时器**。
- **硬杀可以，但很拖**：菲尼克斯被击杀后会以**上次最大生命的 80%** 满血复活并附带 1 层缓冲——每复活一次最大生命都下降，越杀越脆，但每次复活也会塞你 1 片烬翎。正常打法仍是攒烬翎：第 24 片到位后的下一个敌方回合开始即胜。
- **主动进攻反而加速胜利**：每次成功"杀死"菲尼克斯触发复活时，会额外塞给你 <span style="color:#3aa675;font-weight:600">1</span> 片烬翎。输出够高就边打边攒，倒数计时大幅提前。
- **打出烬翎稳赚不亏**：0 费打出 = 抽 <span style="color:#3aa675;font-weight:600">1</span> 张 + 得 <span style="color:#3aa675;font-weight:600">2</span> 点[能量](/mechanics/energy.md)（净赚），且打出后进[弃牌堆](/mechanics/discard_pile.md)——**弃牌堆在计数范围内，进度一点不掉**。抽到手里就放心打，别让它在手里占位。
- **千万别让烬翎进消耗堆或销毁堆**：计数只统计抽牌堆+手牌+弃牌堆三处，被[消耗](/mechanics/exhaust.md)或移入销毁堆的烬翎**不计入胜利进度**——等于亲手把倒计时往回拨。
- **毁灭效果是双刃剑**：烬翎自带[毁灭](/mechanics/destruction.md)——打出时把[消耗堆](/mechanics/exhaust_pile.md)的牌移入销毁堆**永久离场**（不是回收再利用）。配合[屠·扼心恶世](/cards/character/slaughter_grip_evil_world.md)这类按"牌组数−四堆之和"结算的卡，毁灭清消耗堆是核心增益；反之若你的构筑依赖消耗堆囤牌计数，每打出一张烬翎都会触发一次毁灭，请掂量时机。
- **留在抽牌堆里也计数**：不需要把烬翎抽到手里——抽牌堆中的烬翎同样计数，无需刻意去摸牌。

## 相关怪物

- [菲尼克斯](/monsters/boss/phoenix_monster.md)（烬翎的塞入者与胜利判定的持有者）

## 相关机制

- [毁灭](/mechanics/destruction.md)（打出时将消耗堆移入销毁堆）
- [能量](/mechanics/energy.md)（打出获得 2 点）
- [消耗堆](/mechanics/exhaust_pile.md)（此处与销毁堆的烬翎不计入胜利计数）

## 源码

- `SeerPhoenixFeatherCard.cs`
- `SeerPhoenixNirvanaPower.cs`
