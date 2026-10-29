# 辉星

## 基本信息

- **类型**: 原版资源（储君体系）
- **本地化描述**: 你当前的辉星数。储君的部分卡牌可能会需要辉星才能打出。

## 详细机制

- **用途**：辉星是储君（Regent）卡牌的专属资源，部分储君卡牌需要消耗辉星才能打出。
- **获取方式**：卡牌、遗物、充能球、永久属性等效果均可获得辉星。
- **消耗**：打出需要辉星的卡牌时自动扣除。
- **不足时**：无法打出该卡，提示「我没有足够的辉星」。
- **跨角色使用**：Mod 的无色辉星牌带 Regent 标签，但只要通过生成/奖励拿到手，任何角色都能打出。

## 相关卡牌

- [予天繁星](/cards/colorless/give_heaven_stars.md)：将 5 张随机储君牌加入抽牌堆（升级后为已升级版本），获得 18 点辉星
- [圣耀明瞳斩](/cards/colorless/holy_eye_slash.md)：铸造 5；本场每铸造过一次，获得 1 点辉星、1 张随机辉星牌入手牌、1 张碎屑入抽牌堆
- [辰](/cards/status/morning_star.md)：抽到时获得 2 点辉星、1 点能量，并将 1 张储君牌加入手牌

## 相关遗物

- [星灵圣王](/relics/common/star_holy_king.md)：卡牌被生成或自身卡牌被消耗时，获得 1 辉星并铸造 1（每回合至多 5 次）
- [尤纳斯](/relics/uncommon/yunas.md)：战斗开始时将「黑洞」加入手牌；自身每次生命变化获得 1 辉星与 3 层堕落（每回合至多 5 次）

## 相关充能球

- [星星充能球](/orbs/star_orb.md)：被动/激发效果提供辉星

## 源码

- `PlayerCmd.cs`（GainStars）
- `PlayerCombatState.cs`
- `SeerHolyEyeSlash.cs`
- `SeerGiveHeavenStars.cs`
- `SeerMorningStar.cs`
