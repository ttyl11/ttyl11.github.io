# 大数回廊

<img src="/images/cards/great_number_corridor.png" alt="大数回廊" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 罕见
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 人工制品层数 | 1 | 1 |
| 回血触发阈值 | 25% | 25% |
| 回血目标比例 | 50% | 60% |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 获得<span style="color:#3aa675;font-weight:600">1</span>层<span style="color:#d4a017;font-weight:600">人工制品</span>。生命低于<span style="color:#3aa675;font-weight:600">25</span>%时回血至<span style="color:#3aa675;font-weight:600">50</span>%，下回合再次检查。

## 升级后

PP: 5/5 获得<span style="color:#3aa675;font-weight:600">1</span>层<span style="color:#d4a017;font-weight:600">人工制品</span>。生命低于<span style="color:#3aa675;font-weight:600">25</span>%时回血至<span style="color:#3aa675;font-weight:600">50</span>%，下回合再次检查。

## 小贴士

- **双效卡**：1 费获得[人工制品](/powers/artifact_power.md) + 生命低于 25% 时回血至 50%（升级后 60%），且下回合开始再检查一次。
- **人工制品保命**：获得 1 层人工制品——免疫下一次受到的负面效果（虚弱/易伤/力量下降等）。
- **回血机制**：打出时立即检查生命值，低于 25% 则回血至 50%（升级后 60%）；下回合开始时**再检查一次**（仍需低于 25% 才触发）——连续两次回血窗口，覆盖"打出时残血"和"敌人回合被打残"两种情况。
- **回血计算**：以最大生命值百分比计算。例如最大生命 100，当前 20（20%），回血至 50% = 回复 30 点；升级后回至 60% = 回复 40 点。高最大生命构筑下回血绝对量更大。
- **配合建议**：残血危机时打出收益最大（保命+回血二合一）；血线相对健康时价值有限，主要靠人工制品的免伤。
- **升级的关键性**：回血目标 50%→60%（多回 10% 最大生命），人工制品不变。优先级中等——提升的是保命下限。
- **性价比**：1 费保命（人工制品免伤 + 残血回血），血线健康时打会浪费回血检查，时机价值大于牌面价值。

## 相关能力

- [人工制品](/powers/artifact_power.md)（免疫 1 次负面效果）

## 源码

- `SeerGreatNumberCorridor.cs`
