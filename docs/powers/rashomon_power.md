# 罗生门

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物招式——[斗神瑞尔斯](/monsters/normal/doushen_ruiersi_monster.md)的"罗生门"（5 层）

<img src="/images/powers/rashomon_power.png" alt="罗生门" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 计数（Counter）
- **可见**: 是

## 描述

①免疫<span style="color:#d44;font-weight:600">异常状态</span>。<br/>②敌人打出PP牌时，PP额外-<span style="color:#3aa675;font-weight:600">2</span>。<br/>敌方回合结束时，层数-<span style="color:#3aa675;font-weight:600">1</span>。

## 详细机制

- **免疫异常**：免疫所有 Seer [异常状态](/mechanics/abnormal-status.md)（施加量归零），**不免疫原版 Debuff**（虚弱/易伤等照常生效）。
- **PP 惩罚**：敌方（玩家方）每打出一张 PP 牌，该牌的 PP 消耗**额外 +2**（源码 `num += 2`）。基础消耗 1 的牌变成 3，基础消耗 2 的牌变成 4，与卡面"额外减 2"一致。
- **衰减**：在**对方（玩家方）回合结束**时 -1 层。斗神瑞尔斯一次施加 5 层，恰好覆盖 5 个玩家回合；衰减归零后移除。
- **双刃剑**：罗生门在场期间玩家的异常施加全部无效，但 PP 牌被加税——要么先用手里的非异常手段压血量等结界过期，要么接受每张 PP 牌多 2 点消耗强攻。

## 小贴士

- 斗神瑞尔斯开罗生门的那一回合**它自己不出攻击招式**（招式就是施加罗生门本身），是玩家安全铺 buff/格挡的回合。
- 罗生门只免 Seer 异常——原版的虚弱/易伤/力量削减等常规 Debuff 全部照常生效，带削力量或虚弱牌的卡组基本无损失。
- PP 牌在罗生门期间消耗 +2；最大 PP 为 0 的牌不进入消耗流程，不受影响，可以正常打出。

## 相关怪物

- [斗神瑞尔斯](/monsters/normal/doushen_ruiersi_monster.md)（招式"罗生门"；其余招式：蔽日食月功、鬼哭神嚎·灭、连击"蔽日食月功·鬼哭神嚎"）

## 源码

- `SeerRashomonPower.cs`
- `SeerPpCardModel.cs` 的 `CalculateModifiedCost`（PP 消耗 +2 实现）
