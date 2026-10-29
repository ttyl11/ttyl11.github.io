# 搏命长生筹

<img src="/images/relics/vaku_gambling_emperor_hp.png" alt="搏命长生筹" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 先古

### 数值参数

| 参数 | 数值 |
|---|---|
| 卡牌数量 | 3 |
| 最大生命 | 25 |

## 描述

拾起时，获得 <span style="color:#3aa675;font-weight:600">3</span> 张<span style="color:#9b59b6;font-weight:600">[赛皇](/cards/character/gambling_emperor.md)</span>卡牌。获得 <span style="color:#3aa675;font-weight:600">25</span> 点最大生命值。

- **赛皇发放**：拾起时获得 3 张[赛皇](/cards/character/gambling_emperor.md)加入牌组。
- **生命提升**：拾起时获得 25 点最大生命值，为赛皇的失败代价提供缓冲。

## 风味文字

<span style="color:#d44;font-weight:600">赛皇降临。</span>

## 小贴士

- **赌狗的核弹**：[赛皇](/cards/character/gambling_emperor.md)有概率直接获得战斗胜利（秒杀全部敌人），否则失去 1 点最大生命。3% 的概率看似低，但配合战斗内的自我复制，一场战斗能掷出好几次。
- **回响自我复制**：赛皇带[回响](/mechanics/echo.md)关键词——只要它在**抽牌堆**，你的回合开始时就会复制一张**到弃牌堆**（战斗内生成，战斗结束后消失）。抽牌堆、弃牌堆洗牌循环后，一场战斗里的赛皇会越来越多。
- **每次打出都 +21 堕落**：无论赌赢还是赌输，打出后都固定获得 21 点[堕落](/mechanics/fallen.md)。打 5 次就跨过 100 层，触发[混沌化身](/powers/soulson_chaos_incarnation_power.md)、抽 1 张牌并被[魔君接管](/powers/demon_takeover_power.md)一回合——既是额外收益，也是必须计算的风险。
- **25 点生命是安全垫**：每次失败只扣 1 点最大生命，25 点额外生命等于 25 次失败容错。正常情况下在扣完之前早就赌赢了，容错非常宽裕。
- **升级质变**：赛皇升级后胜率从 3% 提升到 5%，考虑到回响每回合都在追加副本，累计胜率提升非常可观。拿到这张遗物后优先在篝火升级赛皇。
- **性价比**：先古稀有度名副其实，3 张可自我复制的赛皇加 25 点生命缓冲，普通战斗几乎稳赢。风险是连续失败磨低最大生命、以及 5 次打出后触发堕落满百的魔君接管。

## 源码

- `SeerVakuGamblingEmperorHp.cs`
