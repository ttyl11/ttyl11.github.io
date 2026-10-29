# 正义圣盾

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——正义圣盾·凯普特

> **类型**：中性（None）
> **叠加方式**：不叠加
> **可见**：是

<img src="/images/powers/justice_shield_kaipte_power.png" alt="正义圣盾" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 描述

①每回合开始时，获得等于敌人所有生物当前生命值总和的[gold]格挡[/gold]。
②自身[gold]格挡[/gold]不会消失，并在每回合开始时翻倍。

## 详细机制

- **结算顺序**：自己回合开始时，先把现有格挡翻倍，再获得等于敌方全体当前生命值总和的格挡。
- **格挡不消失**：自身格挡不会在回合开始被清空，可以持续累积。
- 两次格挡都按正常「获得格挡」结算（受敏捷等修正影响）。

## 源码

- `SeerJusticeShieldKaiptePower.cs`
