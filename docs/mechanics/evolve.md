# 进化

> mod 关键词

## 基本信息

- **类型**: mod 卡牌关键词
- **来源**: mod 自定义关键词

## 描述

战斗结束后，此牌自动升级一次。

## 详细机制

- **触发时机**：在一场战斗**胜利结束后**触发（`AfterCombatVictory` 钩子），不要求这张牌当场被打出——只要牌组中存在带有进化的牌，获胜即触发。
- **全牌组生效**：升级的是牌组中**所有同名的进化牌**（例如持有 N 张攻击史莱姆，获胜后 N 张全部各 +1 级），并非仅升打出的那一张。
- **与无限升级叠加**：带进化的四史莱姆均为"无限升级、每级成长"的蓄水池牌（攻击/防御/速度每级 +1，体力每级 +2）——每获胜一场所有同型史莱姆自动再升一级，是**随战斗自动滚雪球**的成长引擎。
- **不触发条件**：逃跑/失败/中途退出等非胜利结局不会升级。

## 相关卡牌

- [攻击史莱姆](/cards/colorless/slime_attack.md)（获得力量，每级 +1，进化）
- [防御史莱姆](/cards/colorless/slime_defense.md)（获得防御，每级 +1，进化）
- [速度史莱姆](/cards/colorless/slime_speed.md)（获得速度，每级 +1，进化）
- [体力史莱姆](/cards/colorless/slime_stamina.md)（回复生命，每级 +2，进化）

## 源码

- `SeerSlimeAttack.cs` / `SeerSlimeDefense.cs` / `SeerSlimeSpeed.cs` / `SeerSlimeStamina.cs`（`AfterCombatVictory` 全牌组升级）
- `SeerKeywords.cs`（关键词定义）
- `card_keywords.json`（本地化）