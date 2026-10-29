# 宇宙胎动

<img src="/images/cards/cosmic_movement.png" alt="宇宙胎动" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

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
| 生命百分比 | 10 | 10 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: 5/5 <span style="color:#d4a017;font-weight:600">全属性</span><span style="color:#3aa675;font-weight:600">+1</span>。消耗最大生命值<span style="color:#3aa675;font-weight:600">10</span>%的生命，获得等量的[<span style="color:#d4a017;font-weight:600">力量</span>](/powers/strength_power.md)与[<span style="color:#d4a017;font-weight:600">敏捷</span>](/powers/dexterity_power.md)。

## 升级后

PP: 5/5 <span style="color:#d4a017;font-weight:600">全属性</span><span style="color:#3aa675;font-weight:600">+1</span>。消耗最大生命值<span style="color:#3aa675;font-weight:600">10</span>%的生命，获得等量的<span style="color:#d4a017;font-weight:600">力量</span>与<span style="color:#d4a017;font-weight:600">敏捷</span>。

## 详细机制

- **全属性 +1**：依次获得 1 层[力量](/powers/strength_power.md)、[命中](/powers/accuracy_power.md)、[防御](/powers/defense_power.md)、[速度](/powers/speed_power.md)。
- **自伤**：按当前最大生命的 10% 计算，向下取整；伤害不可格挡、不受力量或易伤影响，属于非攻击伤害。会触发“受到伤害”类效果，也可能直接把低血量的自己打死。
- **等量成长**：自伤后获得与损失量相等的[力量](/powers/strength_power.md)与[敏捷](/powers/dexterity_power.md)。注意力量在此之前已经 +1，所以**力量总量是 1 + 损失量**，敏捷只有损失量。
- **数值示例**：最大生命 100 时，自伤 10 点 → 力量共 11 层、敏捷 10 层；最大生命 75 时，自伤 7 点 → 力量 8 层、敏捷 7 层。
- **PP**：每次打出消耗本牌 1 点 PP；PP 5 表示单场最多 5 次（除非有恢复 PP 的手段）。
- **升级**：能量消耗 1 → 0，PP 消耗与自伤不变。

## 小贴士

- **“全属性 +1”收益不均衡**：+1 力量让每张攻击牌 +1 伤害；+1 防御让受到的攻击伤害 -1；+1 命中提供 **+10% 暴击率**；+1 速度让回合开始多抽 1 张、弃牌数为层数的一半向下取整（1 层不弃牌）。即时收益最高的是力量与防御。
- **自伤换增益**：最大生命越高，换到的力量/敏捷越多，收益随游戏进程递增；但自伤是真实的生命损失，低血量时可能致死，打之前先看当前生命。
- **力量与敏捷都是长期成长**：力量每层让攻击牌 +1 伤害，敏捷每层让格挡牌 +1 格挡，持续整场战斗。力量与敏捷一攻一防，构成长期双维成长。
- **力量总量比牌面多 1**：因为“全属性 +1”里已经含 1 层力量，最终力量 = 自伤损失量 + 1。计算输出时别漏掉这一层。
- **自伤不受加成**：自伤为不可格挡的非攻击伤害（最大生命 × 10%，整数截断），不受力量、易伤等加成影响。但会触发“受伤”相关效果。
- **升级后仍受 PP 限制**：0 费只是免能量，每次仍消耗 1 点 PP，单场最多 5 次；而且每次都要付 10% 最大生命的自伤，不能无脑连打。
- **配合建议**：适合高最大生命的体系，配合回血手段抵消自伤；力量配合高伤/多段攻击牌爆发，敏捷配合格挡牌堆防御。
- **性价比**：1 费换全属性 +1 + 双维成长，升级后 0 费更灵活；但要算上每张 10% 最大生命的自伤与 5 点 PP 的总量限制。

## 相关能力

- [力量](/powers/strength_power.md)（全属性之一，并获得等量成长）
- [命中](/powers/accuracy_power.md)（全属性之一，每层 +10% 暴击率）
- [防御](/powers/defense_power.md)（全属性之一，每层攻击伤害 -1）
- [速度](/powers/speed_power.md)（全属性之一，每层多抽 1 张）
- [敏捷](/powers/dexterity_power.md)（获得等量敏捷）

## 源码

- `SeerCosmicMovement.cs`
- `SeerAccuracyPower.cs`
- `SeerSpeedPower.cs`
