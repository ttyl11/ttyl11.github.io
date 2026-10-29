# 永昌玺

> **归属**：玩家可施加
> **施加来源**：玩家获得——[八方·无人来朝](/fifth-skill/octagon.md)（卡牌）、[天下一国](/cards/character/world_one_country.md)（卡牌）、[始皇帝·嬴政](/relics/legendary/shi_huang_di_ying_zheng.md)（遗物，回合结束）

<img src="/images/powers/eternal_seal_power.png" alt="永昌玺" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 叠加
- **可见**: 是
- **允许负值**: 是

## 描述

最高<span style="color:#3aa675;font-weight:600">6</span>层。<br/>①自身造成的伤害提高<span style="color:#3aa675;font-weight:600">8%</span>。<br/>②自身攻击后，对目标造成<span style="color:#3aa675;font-weight:600">1</span>点<span style="color:#d4a017;font-weight:600">固定伤害</span>。<br/>③自身回合结束时，回复<span style="color:#3aa675;font-weight:600">3</span>点<span style="color:#d4a017;font-weight:600">生命值</span>，并回满<span style="color:#3aa675;font-weight:600">1</span>张<span style="color:#d4a017;font-weight:600">PP牌</span>的<span style="color:#d4a017;font-weight:600">PP</span>。<br/>④免疫<span style="color:#d44;font-weight:600">异常状态</span>。<br/>⑤对手获得<span style="color:#d4a017;font-weight:600">先制</span>时，自身获得等量<span style="color:#d4a017;font-weight:600">先制</span>。<br/>⑥每<span style="color:#3aa675;font-weight:600">2</span>回合使对手的意图失效一次。<br/>⑦达到<span style="color:#3aa675;font-weight:600">6</span>层时，立即开启<span style="color:#d4a017;font-weight:600">君临天下</span>。

## 详细机制

- **层数上限6且永不溢出**：代码在 `TryModifyPowerAmountReceived` 中对自身施加封顶（`cap = 6 - 当前层数`），无论来源一次给多少，最多加到6。
- **满6层触发君临天下**：层数达到6的当次变化立即施加[君临天下](/powers/octagon_debt_power.md)（6回合增益；结束时当前生命值设为1，所有牌移入消耗堆、PP牌PP清零）。**每场战斗只触发一次**。
- **逐层解锁效果**（EffectiveAmount = min(层数, 6)）：
  - 每层：攻击伤害 +8%（乘区），只作用于攻击伤害。
  - 层数>1：每次攻击后对**所有敌人**附加 `min(层数-1, 5)` 点固定伤害；多段攻击按一次攻击结算（不会每段都触发）。
  - 层数>2：回合结束恢复3点体力，并从弃牌堆随机一张PP牌将其PP设为1。
  - 层数≥3：免疫异常状态（27 种，施加时改量为0拦截；自己给自己施加的增益型异常也会被拦截）。
  - 层数>4：对手获得先制时，自己也获得等量先制。
  - 层数>5：每2个自己的回合开始时，使**第一个对手**进入击晕、意图失效。

## 源码

- `SeerEternalSealPower.cs`
