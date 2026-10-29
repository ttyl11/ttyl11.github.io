# 圣耀明瞳斩

<img src="/images/cards/holy_eye_slash.png" alt="圣耀明瞳斩" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 无色牌
- **能量消耗**: 0
- **类型**: 技能
- **稀有度**: 罕见
- **目标**: 自身
- **可升级**: 是（1 级）
- **升级后关键词**: [<span style="color:#d4a017;font-weight:600">保留</span>](/mechanics/retain.md)

### 数值参数

| 参数 | 数值 |
|---|---|
| 铸造 | 5 |
| 辉星获取 | 1 |

## 描述

<span style="color:#d4a017;font-weight:600">铸造</span><span style="color:#3aa675;font-weight:600">5</span>。本场战斗中每<span style="color:#d4a017;font-weight:600">铸造</span>过一次，获得<span style="color:#3aa675;font-weight:600">1</span>点<span style="color:#d4a017;font-weight:600">辉星</span>、<span style="color:#3aa675;font-weight:600">1</span>张随机辉星牌入<span style="color:#d4a017;font-weight:600">弃牌堆</span>，并将<span style="color:#3aa675;font-weight:600">1</span>张碎屑放入<span style="color:#d4a017;font-weight:600">抽牌堆</span>。

## 升级后

<span style="color:#d4a017;font-weight:600">铸造</span><span style="color:#3aa675;font-weight:600">5</span>。本场战斗中每<span style="color:#d4a017;font-weight:600">铸造</span>过一次，获得<span style="color:#3aa675;font-weight:600">1</span>点<span style="color:#d4a017;font-weight:600">辉星</span>、<span style="color:#3aa675;font-weight:600">1</span>张随机辉星牌入<span style="color:#d4a017;font-weight:600">弃牌堆</span>，并将<span style="color:#3aa675;font-weight:600">1</span>张碎屑放入<span style="color:#d4a017;font-weight:600">抽牌堆</span>。

## 小贴士

- **🔑 计数是"铸造事件数"，不是铸造点数**：本场战斗每执行**一次**铸造就记 1 次——无论这一次铸造多少点。这张牌自己"铸造 5"也只算 <span style="color:#3aa675;font-weight:600">1</span> 次。
- **单卡打出 = 结算 1 档**：打出时自身铸造 1 次 → <span style="color:#3aa675;font-weight:600">1</span> 辉星 + <span style="color:#3aa675;font-weight:600">1</span> 张随机辉星牌（入手牌）+ <span style="color:#3aa675;font-weight:600">1</span> 张碎屑（进抽牌堆）。本场此前每多一次其它铸造，再多 1 档。
- **跨牌累积**：其它铸造牌（[圣灵雷霆斩](/cards/colorless/holy_thunder_slash.md)/[圣地擎山碎](/cards/colorless/holy_mountain_crush.md)等）每打出一次各 +1 档；本场铸造越频繁，这张牌结算次数越多。
- **卡面写"弃牌堆"，实际入手牌**：随机辉星牌是直接加入[手牌](/mechanics/hand.md)底部（当回合就能打），只有碎屑进[抽牌堆](/mechanics/draw_pile.md)。
- **辉星牌池 = 全局所有星费牌**：筛选条件是"带辉星费用或 X 费星牌"，**不限储君、不限 mod**——原版与新角色的星牌都可能被抽到。
- **辉星立即到账**：获得的辉星当回合可用，可以直接接手里吃辉星的牌。
- **碎屑是代价：不可打出的 1 费废牌**：每次结算塞 1 张碎屑进抽牌堆——抽到它白占一个手牌位；用消耗/毁灭类效果清理碎屑可以回收手牌质量。
- **0 费 = 零门槛引爆器**：不占能量，手里有它就随时可以引爆累计的铸造次数；抽到即打不亏，唯一决策是"现在打还是等本场再铸造几次"。
- **升级[保留](/mechanics/retain.md) = 等次数攒高再收**：升级后回合结束不弃牌——手里同时握着多张铸造牌时，先打其它铸造牌把次数抬高，此牌留到下回合再引爆，单次收益更高。

## 相关能力

- 铸造追踪（mod 能力）：记录本场战斗铸造次数，无对应能力页

## 相关机制

- [铸造](/mechanics/forge.md)（执行铸造并按全场铸造数结算收益）
- [辉星](/mechanics/star.md)（每次铸造获得 1 点，立即到账）
- [保留](/mechanics/retain.md)（升级后获得）

## 源码

- `SeerHolyEyeSlash.cs`
