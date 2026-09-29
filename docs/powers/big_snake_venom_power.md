# 大蛇毒液

> **归属**：玩家可施加
> **施加来源**：
> - [大蛇毒液](/cards/character/big_snake_venom.md)（能力牌——打出后获得 1 层）

<img src="/images/powers/big_snake_venom_power.png" alt="大蛇毒液" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 中性（None）
- **叠加方式**: 单例（Single，不叠加）
- **可见**: 是

## 描述

每回合开始时向你的[手牌](/mechanics/hand.md)加入一张[蛇咬](/cards/character/big_snake_venom.md)，蛇咬必须优先打出。

## 详细机制

- **回合开始生成**：自身回合开始时，向[手牌](/mechanics/hand.md)的**随机位置**加入 1 张原版状态牌「蛇咬」（Snakebite）。
- **优先打出锁定**：只要手牌里存在蛇咬，**其它牌一律无法打出**；蛇咬本身永远可以打出。
  - **自动打出不受限制**（自动打出的牌会放行）。
  - 该拦截逻辑参考原版「执迷」（MustPlayFirst 机制）。
- **类型为中性**：既非增益也非减益，不会被"清增益/清减益"类效果移除；战斗结束时随能力自动移除、手牌限制一并解除。
- **不叠加**：重复获得不会增加每回合生成的蛇咬数量。

## 小贴士

- **本质是"每回合白送一张上毒牌 + 手牌锁"**：蛇咬打出后会施加中毒（原版中毒已由全局补丁统一转为赛尔[中毒](/powers/poison_power.md)），所以它每回合稳定给你一次上毒机会。
- **代价是出牌节奏被锁**：手上有蛇咬时必须先打它，会挤掉一次出牌机会——需要打关键牌的回合尤其难受。
- **反向利用"强制打出"**：蛇咬会被强制优先打出，等于每回合多触发一次"每打出一张牌"类效果（如[苔原汲取](/powers/life_tundra_gum_power.md)、[火焰护身](/powers/phoenix_fire_aura_power.md)）。
- **蛇咬本身是状态牌**：占手牌位、不吃你的 PP 体系；手牌被蛇咬锁住时可以考虑用"弃牌/消耗"类效果直接处理掉。

## 相关卡牌

- [大蛇毒液](/cards/character/big_snake_venom.md)（唯一施加来源）

## 相关能力

- [中毒](/powers/poison_power.md)（蛇咬打出后施加的异常状态）

## 源码

- `SeerBigSnakeVenomPower.cs`
- `SeerBigSnakeVenom.cs`
