# 绝罚羊皮卷

<img src="/images/relics/vaku_contract_and_pp_cards.png" alt="绝罚羊皮卷" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 先古

### 数值参数

| 参数 | 数值 |
|---|---|
| PP 阈值 | 10 |
| 卡牌数量 | 5 |

## 描述

拾起时，获得1张<span style="color:#9b59b6;font-weight:600">禁术·契灭</span>（<span style="color:#d4a017;font-weight:600">消耗</span>）。并随机获得<span style="color:#3aa675;font-weight:600">5</span>张<span style="color:#d4a017;font-weight:600">PP</span>≥<span style="color:#3aa675;font-weight:600">10</span>的高费卡牌（<span style="color:#d4a017;font-weight:600">消耗</span>）。

- **动态卡池**：从全部 Seer PP 卡中筛选 `MaxPp ≥ 10` 的卡牌随机抽取 5 张，不是固定名单；每次拾起结果可能完全不同。
- **全部固有**：契灭与抽到的 5 张牌都会附加[固有](/mechanics/innate.md)——每场战斗开局必定在手，会占掉大量起手手牌位。
- **契灭结算**：打出时把手中其它 PP 牌的全部当前 PP 吸走，并把这些牌**消耗**（本场战斗进入消耗堆）；每 1 点 PP 转化为 3 点伤害，吸走的 PP 总量超过 15（升级后 10）时伤害翻倍，并给自己 1 层[缓冲](/powers/buffer_power.md)；自身固定叠加 20 层[堕落](/powers/fallen_power.md)。
- **卡牌是永久的**：5 张高 PP 卡与契灭都永久加入牌组，不是一次性消耗品；被契灭消耗只影响本场战斗，战斗结束后随牌组恢复，下一场仍能正常使用。

## 风味文字

<span style="color:#d44;font-weight:600">契灭之术。</span>

## 小贴士

- **契灭是核心爆发**：附带的[禁术·契灭](/fifth-skill/contract_destruction.md)会吸走手牌里其它 PP 牌的全部当前 PP，每 1 点 PP 换 3 点伤害；吸走总量超过 15（升级后 10）伤害再翻倍。配合本遗物送的 5 张高 PP 卡，起手就能打出一发大伤害。
- **起手 6 张固有是双刃剑**：契灭与 5 张高 PP 卡每场战斗开局全部在手，爆发组件必定到齐；但 6 张固有会挤占起手手牌，变相减少当回合抽到的其它牌，牌组越精简这种挤压越明显。
- **5 张高 PP 卡是永久资产**：它们是正常加入牌组的卡，不是一次性消耗品；被契灭吸走 PP 后会当回合进入消耗堆，战斗结束随牌组恢复，下一场仍能正常使用。平时可以当高费强卡单独打出，需要爆发时再留给契灭。
- **卡池是动态的**：筛选条件是所有 PP 上限 ≥ 10 的 Seer PP 卡，不限于龙体系，抽到什么取决于当前卡池——可能全是输出，也可能混入功能牌。
- **堕落要记账**：每次打出契灭固定 +20 层[堕落](/powers/fallen_power.md)，满 100 层触发魔君接管；一场战斗多次使用会把失控阈值迅速拉近。
- **性价比**：1 张契灭加 5 张高 PP 卡，且全部固有，起手爆发与稳定性都极强；代价是起手手牌被固有牌占满、契灭自带堕落，以及 5 张高费牌对能量的压力。

## 源码

- `SeerVakuContractAndPpCards.cs`
