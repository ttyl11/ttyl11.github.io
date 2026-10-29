# 虚空形态

<img src="/images/powers/void_form_power.png" alt="虚空形态" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **归属**：玩家能力（原版）
- **类型**：增益
- **叠加**：计数型（层数 = 每回合免能的牌数）
- **施加来源**：原版卡牌「虚空形态」；[超算鲁比克](/relics/rare/rubik_supercomputer.md)（战斗开始时 PP 牌矩阵秩为 0，与永久异常免疫一同获得）

## 描述

每回合前等同于层数的牌，费用变为 <span style="color:#3aa675;font-weight:600">0</span>。

## 详细机制

- 只影响**手牌中**拥有者自己的牌；不在手牌里的牌不享受免能。
- 每回合重置计数，本回合已经免费打出等同于层数的牌后，剩下的牌恢复原费用。
- 能量费用与辉星费用都会变成 0；PP 消耗不因此免除。
- 自动打出的牌不计入免能次数。

## 源码

- 原版 `VoidFormPower.cs`
- `SeerRubikSupercomputer.cs`（超算鲁比克）
