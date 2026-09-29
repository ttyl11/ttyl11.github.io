# 弹簧

<img src="/images/cards/spring.png" alt="弹簧" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 衍生牌
- **最大PP**: 5
- **能量消耗**: 2
- **类型**: 技能
- **稀有度**: 衍生
- **目标**: 无
- **可升级**: 是（1 级）
- **关键词**: [奇巧](/mechanics/sly.md)

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 格挡 | 9 | 9 |
| 多抽/多能量 | 2 | 3 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: 5/5 获得<span style="color:#3aa675;font-weight:600">9</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)，丢弃手中所有牌。下次回合开始时多抽<span style="color:#3aa675;font-weight:600">2</span>张牌，多获得<span style="color:#3aa675;font-weight:600">2</span>点[<span style="color:#d4a017;font-weight:600">能量</span>](/mechanics/energy.md)。

## 升级后

PP: 5/5 获得<span style="color:#3aa675;font-weight:600">9</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)，丢弃手中所有牌。下次回合开始时多抽<span style="color:#3aa675;font-weight:600">3</span>张牌，多获得<span style="color:#3aa675;font-weight:600">3</span>点[<span style="color:#d4a017;font-weight:600">能量</span>](/mechanics/energy.md)。

## 小贴士

- **🔑 弃手堆资源 + 下回合双 buff**：2 费打出后**丢弃手中所有牌**（清空手牌），同时获得 <span style="color:#3aa675;font-weight:600">9</span> 点[格挡](/mechanics/block.md)，并在**下一回合开始时**多抽 <span style="color:#3aa675;font-weight:600">2</span> 张牌、多获得 <span style="color:#3aa675;font-weight:600">2</span> 点[能量](/mechanics/energy.md)（升级后 3/3）。本质是"牺牲手牌换下一回合资源"的过牌引擎。
- **奇巧保护**：自带[奇巧](/mechanics/sly.md)——被丢弃时免费打出。弹簧本身要求你弃掉手牌，手牌里若还有其它奇巧牌（如米咔、各种保留牌）会在被丢弃瞬间自动打出，触发它们的免费效果。
- **PP 卡、每场限 5 次**：PP 上限 5，打出 5 次后本场就无法再用了——长战斗规划资源节奏。
- **来源**：由克雷扎（SeerKeiza）遗物效果转化产生（`SeerKeiza.TransformTo<SeerSpring>`），不通过常规卡牌奖励获得。
- **只在本场有效**：作为衍生牌，弹簧在战斗结束后消失，不会留在牌组。

## 相关遗物

- [克雷扎](/relics/rare/keiza.md)（由该遗物效果转化生成弹簧）

## 相关机制

- [格挡](/mechanics/block.md)（打出获得 9 点）
- [奇巧](/mechanics/sly.md)（被丢弃时免费打出）
- [PP](/mechanics/pp-system.md)（本牌消耗 1 点 PP，上限 5）

## 源码

- `SeerSpring.cs`
- `SeerSpringBonusPower.cs`（多抽+多能量能力）
