# 金火

> **归属**：玩家可施加
> **施加来源**：玩家获得——[四象琉璃盏](/relics/ancient/orobos_four_flames.md)（遗物）；玩家施加给敌方——[🟡 金火](/potions/gold_fire_potion.md)（药水）

<img src="/images/powers/gold_fire_power.png" alt="金火" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 计数器（层数不改变减伤）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 攻击伤害减免 | 30% |

## 描述

双方受到的攻击伤害减少<span style="color:#3aa675;font-weight:600">30</span>%。

## 详细机制

- **只保护持有者**：谁持有，谁受到的攻击伤害 ×0.7；施加给敌人时保护的是敌人。
- **只减攻击伤害**：固定伤害、持续伤害等非攻击伤害不受影响。
- **层数不叠加效果**：减伤固定 30%，多层不会变成 60%。

## 源码

- `SeerGoldFirePower.cs`
