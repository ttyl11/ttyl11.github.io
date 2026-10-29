# 进化

> mod 关键词

## 基本信息

- **类型**: mod 卡牌关键词
- **来源**: mod 自定义关键词

## 描述

战斗结束后，此牌自动升级一次。

## 详细机制

- **具体触发看卡牌实现**：四张史莱姆（攻击/防御/速度/体力）在战斗**胜利**后触发；[保底](/cards/curse/guaranteed.md)则在**每场战斗结束**时触发（胜负都算）。
- **只升级牌组里的牌**：战斗中的临时复制品不会升级，升级对象是牌组本体。
- **四史莱姆：全牌组同型一起升，且张数会互相催化**：牌组中每有 1 张同型进化牌，胜利后就执行一次"升级牌组中全部同型牌"——持有 N 张攻击史莱姆时，每张各升 N 级。不用打出，只要在牌组里就生效。
- **保底：只升自己**：每场战斗结束这张牌自身 +1 级，多张各自独立，最高 99 级。
- **与无限升级叠加**：四张史莱姆的升级没有上限（攻击/防御/速度每级 +1，体力每级 +2），配合进化会随胜场自动滚雪球。
- **不触发条件**：非胜利结局不会让四张史莱姆升级；保底不受胜负影响。

## 相关卡牌

- [攻击史莱姆](/cards/colorless/slime_attack.md)（获得力量，每级 +1，进化）
- [防御史莱姆](/cards/colorless/slime_defense.md)（获得防御，每级 +1，进化）
- [速度史莱姆](/cards/colorless/slime_speed.md)（获得速度，每级 +1，进化）
- [体力史莱姆](/cards/colorless/slime_stamina.md)（回复生命，每级 +2，进化）
- [保底](/cards/curse/guaranteed.md)（诅咒牌，每场战斗结束 +1 级，最高 99 级）

## 源码

- `SeerSlimeAttack.cs` / `SeerSlimeDefense.cs` / `SeerSlimeSpeed.cs` / `SeerSlimeStamina.cs`（`AfterCombatVictory` 全牌组同型升级）
- `SeerGuaranteed.cs`（`AfterCombatEnd` 自身升级）
- `card_keywords.json`（本地化）
