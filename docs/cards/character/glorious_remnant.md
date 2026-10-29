# 耀武遗辉

<img src="/images/cards/glorious_remnant.png" alt="耀武遗辉" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌
- **最大PP**: 2
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 稀有
- **目标**: 无
- **可升级**: 是（1 级）
- **关键词**: [迟涌](/mechanics/chiyong.md)、[残鸣](/mechanics/canming.md)

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| PP | 2 | 2 |
| 最大PP | 2 | 2 |
| 能量消耗 | 1 | 0 |

## 描述

PP: 2/2 <span style="color:#d44;font-weight:600">残鸣</span>：所有牌<span style="color:#d44;font-weight:600">归源</span>（此牌除外）。 将<span style="color:#d4a017;font-weight:600">消耗牌堆</span>的所有牌添加<span style="color:#d4a017;font-weight:600">重放1</span>。

## 升级后

PP: 2/2 <span style="color:#d44;font-weight:600">残鸣</span>：所有牌<span style="color:#d44;font-weight:600">归源</span>（此牌除外）。 将<span style="color:#d4a017;font-weight:600">消耗牌堆</span>的所有牌添加<span style="color:#d4a017;font-weight:600">重放1</span>。

## 小贴士

- **先说清楚：它不回收任何牌**。这张牌只给消耗牌堆里的牌挂上[重放](/mechanics/replay.md)标记（下次被打出时效果结算 2 次），**牌本身仍然留在消耗牌堆里**。而消耗牌堆的牌既不会被抽到、也不会自动打出——**单靠这张牌，重放永远不会触发**。它是"激活剂"，不是"回收站"。
- **必须搭配"能把消耗堆的牌用起来"的效果**：
 - **[万剑归一](/cards/character/myriad_swords_unity.md)**：天然搭子。它的能力每回合开始自动从你的消耗牌堆打出一张君王之剑——先用耀武遗辉给消耗堆的剑加重放，之后每回合自动打出的君王之剑效果结算 2 次（伤害、触发全部翻倍）。
 - 任何"从消耗牌堆拿回牌 / 直接打出消耗牌堆的牌"的效果同理：重放跟着牌走，牌被用几次，重放就结几次。
- **先加重放、再触发，顺序很重要**：重放标记挂在牌上不会消失（本场战斗持续），所以正确姿势是先把牌消耗进堆 → 打出耀武遗辉 → 再用捞牌/自动打出手段结算。反过来（先捞出来再加重放）就白给了——牌已经离开消耗堆，吃不到加成。
- **叠加效果**：PP 2/2 意味着一场战斗最多主动打出 2 次，两次都给消耗堆所有牌各 +1 重放——同一批牌可叠到重放 2（共结算 3 次）。配合其他重放来源还能继续往上叠。
- **迟涌的节奏**：带[迟涌](/mechanics/chiyong.md)——每次洗牌固定沉到抽牌堆底部，开局也生效。第二次上手通常要抽完整轮牌，卡组越薄越快；它没有虚无时限，不必抽到当回合就急着打。
- **性价比**：1 费 + 一张稀有牌位，换的是一个需要体系支撑的乘数。有万剑归一/PP 消耗流时它是核心倍增器；没有配套手段时它几乎是一张白板——拿之前先看看你的卡组有没有"用得上消耗堆"的牌。

## 相关机制

- [迟涌](/mechanics/chiyong.md)（洗牌时固定沉到抽牌堆底部）
- [重放](/mechanics/replay.md)（打出时效果额外结算 1 次）
- [消耗](/mechanics/exhaust.md)（作用于消耗牌堆中的牌，牌本身不会因此离开消耗堆）
- [归源](/mechanics/xu_pp.md)（残鸣触发时所有牌回满 PP）

## 相关卡牌

- [万剑归一](/cards/character/myriad_swords_unity.md)（每回合自动打出消耗堆的君王之剑，天然触发器）

## 源码

- `SeerGloriousRemnant.cs`
- `SeerMyriadSwordsUnityPower.cs`
