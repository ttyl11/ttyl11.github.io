# 神羽

<img src="/images/powers/divine_feather_power.png" alt="神羽" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **归属**：玩家能力（图标数字 = 剩余神羽片数）
- **类型**：增益
- **叠加**：计数型（每层 = 1 片神羽）
- **施加来源**：[皮神](/relics/epic/pi_shen.md)（永久神羽）、[皮神的羽毛](/potions/pi_feather_potion.md)（药水）、泰坦之灵房间
- **可见**: 是

## 描述

①每层代表<span style="color:#3aa675;font-weight:600">1</span>片神羽。<br/>②每回合结束时，若自身当前生命低于最大生命的<span style="color:#3aa675;font-weight:600">60%</span>，消耗<span style="color:#3aa675;font-weight:600">1</span>片神羽将自身生命回复至<span style="color:#3aa675;font-weight:600">97%</span>；神羽耗尽后无法再触发恢复效果。

## 详细机制

- **触发时机**：拥有者自己的回合结束时，只看当前生命百分比，不看本次受到了多少伤害。
- **回复口径**：把生命补到最大生命的 97%，不是「回复 97% 最大生命」；已经高于 97% 时不会触发。
- **消耗 1 片**：触发一次扣 1 层，同时扣除本局永久神羽库存，跨战斗剩余片数保持一致。
- **层数为 0**：完全不触发，不会消耗任何资源。
- 图标上的数字就是剩余片数，方便判断还能救几次。

## 源码

- `SeerDivineFeatherPower.cs`
- `SeerPiShen.cs`（皮神）、`SeerPiFeatherPotion.cs`（皮神的羽毛）
- `SeerPermanentBonusPatch.cs`（每场战斗统一施加）
