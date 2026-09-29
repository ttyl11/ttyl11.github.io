# 召唤

## 基本信息

- **类型**: 原版状态机制
- **本地化来源**: `static_hover_tips.json` 的 `SUMMON_DYNAMIC` / `SUMMON_STATIC`

## 描述

召唤是亡灵契约师专属机制，用于养成场上唯一的奥斯提。奥斯提不会"多只"——**"召唤 N"的真实含义是：若奥斯提已在场上，则其最大生命 +N 并回复 N 点生命；若奥斯提不在场或已死亡，则以 N 点最大生命重新召唤/复活它。**

## 详细机制

- **召唤语义**：
  - `OstyCmd.Summon(amount)`：奥斯提已存活时 → `GainMaxHp(amount)` + `Heal(amount)`；奥斯提不在场/已死亡时 → `SetMaxHp(amount)` + `Heal(amount)` + 赋予"为你而死"
  - 奥斯提是场上唯一的亡灵契约师伙伴，每次召唤只会增加其最大生命，不会生成多只
- **召唤量数值**：卡牌/遗物/药水上的"召唤 N"中的 N 是**奥斯提最大生命增量**，不是召唤数量
- **与奥斯提联动的其它机制**：
  - 奥斯提最大生命值可被其它卡牌/遗物利用（如 [夜·冥昭瞢闇](/cards/colorless/dark_oblivion.md) 根据奥斯提最大生命值施加[灾厄](/powers/doom_power.md)）
  - 奥斯提在场时，部分卡牌效果（[核威强袭](/cards/token/nuclear_assault.md)、[激鸣雷封](/cards/token/thunder_seal.md) 等）才有实际效果

## 相关卡牌

- [夜·冥昭瞢闇](/cards/colorless/dark_oblivion.md)：召唤 8（奥斯提最大生命 +8），再根据奥斯提最大生命值施加灾厄
- [亡灵律动](/cards/colorless/undead_rhythm.md)：召唤 10（奥斯提最大生命 +10）

## 源码

- `OstyCmd.cs`
- `StaticHoverTip.cs`
