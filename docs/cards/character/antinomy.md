# 二律背反

<img src="/images/cards/antinomy.png" alt="二律背反" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 攻击
- **稀有度**: 罕见
- **目标**: 敌方单体
- **可升级**: 是（1 级）
- **关键词**: [反强](/mechanics/fan_qiang.md)

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害 | 8 | 12 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 造成<span style="color:#3aa675;font-weight:600">8</span>点伤害。反转对手<span style="color:#d4a017;font-weight:600">全属性</span>。免疫下一次非[<span style="color:#d4a017;font-weight:600">暴击</span>](/powers/critical_strike_power.md)[<span style="color:#d4a017;font-weight:600">攻击</span>](/mechanics/intent.md)。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 造成<span style="color:#3aa675;font-weight:600">12</span>点伤害。反转对手<span style="color:#d4a017;font-weight:600">全属性</span>。免疫下一次非[<span style="color:#d4a017;font-weight:600">暴击</span>](/powers/critical_strike_power.md)[<span style="color:#d4a017;font-weight:600">攻击</span>](/mechanics/intent.md)。

## 小贴士

- **反转全属性的实现**：对目标的力量/速度/命中/防御四种能力逐一检查——若为正层数，先**移除该能力**，再施加等量**负层数**（如敌人有 +3 力量，变为 -3 力量）。注意是"移除再施加负数"，不是简单取反，原能力的来源/附魔信息会丢失。
- **战术价值**：针对依赖力量叠层的 Boss（如力量流怪物）非常有效，一刀把 +5 力量打成 -5 力量，相当于净差 10 点攻击伤害。但 0 层或负层数的属性不受影响——所以对已经虚弱（力量为负）的敌人再用这张牌，其力量不会被"反转"回正数，这点可以放心。
- **反转范围有限**：只反转力量/速度/命中/防御四种 seer 自定义属性能力，**不反转**原版的虚弱/易伤/缩身等减益，也不反转其它 seer 能力（如暴击、先制、元素等）。所以这张牌不是"全属性清零"，是"四属性取反"。
- **免疫下一次非暴击攻击**：打出后自身获得 1 层[二律背反](/powers/antinomy_power.md)——免疫**下一次非暴击攻击**（触发后移除）。注意是"非暴击"，若敌人有暴击能力则免疫无效。可用于硬吃一次大招，但别指望挡暴击。
- **伤害是攻击伤害**：8 点伤害是**正常攻击伤害**——吃力量/易伤，可被格挡，可触发"四月的信徒"翻倍（若目标有异常状态）。所以这张牌不只是功能牌，也能配合增伤体系提升伤害。
- **升级的价值**：伤害从 8 提升至 12（+50%），反转和免疫效果不变。升级纯增伤，直伤能力更扎实，值得升级。
- **性价比**：1 费合理——三合一效果（8 点伤害+四属性反转+一次免疫），不占大额能耗便于连击。

## 源码

- `SeerAntinomy.cs`
