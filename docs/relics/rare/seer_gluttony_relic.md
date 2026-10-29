# 格拉托尼

<img src="/images/relics/seer_gluttony_relic.png" alt="格拉托尼" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物

- **稀有度**: 稀有

## 描述

战斗结束<span style="color:#d4a017;font-weight:600">卡牌奖励</span>选项数+1。<br/>①【暴食】放弃选牌，获得<span style="color:#3aa675;font-weight:600">4</span>点<span style="color:#d4a017;font-weight:600">最大生命</span>。<br/>累计选<span style="color:#3aa675;font-weight:600">7</span>次后，牌组加入<span style="color:#d4a017;font-weight:600">暴食</span>。

## 风味文字

<span style="color:#d44;font-weight:600">暴食，吞尽一切。</span>

## 机制说明

- **选项数 +1**：战斗胜利后的卡牌奖励多给 1 张。

- **「暴食」替代按钮**：点击即放弃本次选牌，**永久 +4 点最大生命**。

- **累计 7 次后并入罪牌**：向牌组加入 1 张[<span style="color:#3aa675;font-weight:600">暴食</span>](/cards/curse/gluttony)诅咒牌；此后「暴食」按钮失效。

## 小贴士

- **纯赚坦度**：每次 +4 最大生命，攒满 7 次共 +28 最大生命——远超多数加血类遗物。对依赖最大生命上限的构筑（回复、护盾、百分比伤害）价值极高。

- **最多 7 次**：累计点满 7 次后「暴食」按钮永久消失并加入[暴食诅咒](/cards/curse/gluttony)，无法继续叠加；总收益为 +28 最大生命。放弃当次卡牌奖励，换来永久血上限。

- **最大生命同步提升当前生命**：获得最大生命时会按比例补上当前生命，配合治疗能明显拉高生存容错，长线续航显著。

- **与百分比/回复体系联动**：回复量、以最大生命为分母的护盾/恢复类效果收益等比放大，血越厚越划算。

- **选牌与血量权衡**：前期牌组还缺关键牌时慎点（会亏构筑）；血上限开够、靠坦度拼长战的卡组里，"点暴食"几乎是白赚。

- **7 次后的暴食诅咒是唯一损失**：[暴食诅咒](/cards/curse/gluttony)是诅咒，但前面 +28 血的价值通常远高于一张诅咒，不必为它刻意停手。

## 扩展·机制说明（补充）

- 「暴食」获得的是**最大生命上限**永久提升（非临时生命），当前生命会跟随提升，战斗与地图阶段均生效。

## 源码

- `SeerGluttonyRelic.cs`

- 罪牌 [`SeerGluttony.cs`](/cards/curse/gluttony)