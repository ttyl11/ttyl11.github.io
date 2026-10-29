# 懒惰

> **归属**：玩家可施加
> **施加来源**：玩家获得——[懒惰](/cards/curse/sloth.md)（卡牌）

<img src="/images/powers/sloth_power.png" alt="懒惰" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff）
- **叠加方式**: 计数（Counter），不递减
- **可见**: 否（后台静默运行，不显示图标）
- **允许负值**: 否

## 描述

此牌在<span style="color:#d4a017;font-weight:600">手牌</span>中时，无法打出<span style="color:#d4a017;font-weight:600">攻击牌</span>。

## 详细机制

- **封锁攻击牌**：持有者手牌中存在懒惰牌时，其攻击牌无法打出；技能牌、能力牌照常。
- **懒惰牌本身放行**：懒惰牌不会被自己封锁，仍可正常打出。
- **其它放行条件**：非持有者的牌、自动打出（AutoPlay）、不在手牌中的牌均不受封锁。
- **不自然衰减**：计数型（Counter），层数不会随回合减少；只要懒惰牌仍在手牌中，封锁就持续生效。
- **仅限制持有者**：只限制持有者打出的卡牌，其他玩家不受影响。

## 相关卡牌

- [神灵之触](/cards/ancient/divine_touch.md)（提及无视懒惰的限制）

## 源码

- `SeerSlothPower.cs`
