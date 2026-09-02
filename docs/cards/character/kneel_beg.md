# 跪地求饶

<img src="/images/cards/kneel_beg.png" alt="跪地求饶" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 3
- **能量消耗**: X
- **类型**: 技能
- **稀有度**: 罕见
- **目标**: 无
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 额外意图 | 0 | 1 |
| PP | 3 | 3 |
| 最大PP | 3 | 3 |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">3</span>/<span style="color:#3aa675;font-weight:600">3</span> 随机施加<span style="color:#3aa675;font-weight:600">X</span>次[攻击无效](/mechanics/intent)或[封属](/mechanics/intent)（随机一个）。若本回合受到攻击伤害，自身死亡。

## 升级后

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">3</span>/<span style="color:#3aa675;font-weight:600">3</span> 随机施加<span style="color:#3aa675;font-weight:600">X</span>+<span style="color:#3aa675;font-weight:600">1</span>次攻击无效或封属（随机一个）。若本回合受到攻击伤害，自身死亡。

## 小贴士

- **X 费换 X 次封印，赌博型清意图**：把本回合所有能量砸进封印（攻击无效或封属随机），每次封印约值 <span style="color:#3aa675;font-weight:600">1</span> 费。代价是被攻击即死——这是 mod 里最极端的高风险高回报卡，要么封印清掉关键意图白嫖保命，要么剩关键意图没清就暴毙。
- **死亡条件要精读：未被格挡的攻击伤害**：触发死亡需要三个条件同时满足——①受到的是**攻击伤害**（非攻击伤害如烧伤自伤、固定伤害不触发）②伤害**未被格挡**（实际掉血，被格挡到 <span style="color:#3aa675;font-weight:600">0</span> 不死）③在能力存在期间（打出后到敌人回合结束，玩家回合内受反击也会触发）。所以意图被封印、攻击被格挡、攻击未命中都不触发死亡。
- **X 耗能的矛盾：砸越多越安全但越废回合**：X 越大封印越多越安全，但 X = 所有能量，打完这回合基本无法做其它事（除非有 <span style="color:#3aa675;font-weight:600">0</span> 费牌或能量回复）。想安全就砸更多能量，砸完能量这回合就废了——这是"用回合行动力换生存"的交易。
- **封印是跨所有敌人随机的**：随机选敌人施加攻击无效或封属——多敌人场景下随机性大，可能集中封一个敌人也可能分散。无法指定封哪个敌人，所以多敌人时风险更高（可能漏掉高威胁敌人）。
- **封印按敌人分配，每敌人最多各 1 个**：只在还没集齐两种封印的敌人里随机选，并施加它缺少的类型（攻击无效或封属）。X 次可能分散到不同敌人，也可能集中到同一敌人直到它满 2 个封印（攻击无效+封属各 1）；所有敌人集齐后停止，多余次数不再浪费。
- **看图标判断封的类型**：被封印的敌人意图栏末尾显示攻击无效/封属图标——攻击无效图标 = 该敌人攻击意图失效（纯攻击敌人整回合空过），封属图标 = 非攻击意图失效。数一数剩余攻击意图就知道还会不会挨打。
- **格挡能保命但通常没能量格挡**：死亡条件是"未被格挡的攻击伤害"，所以理论上格挡能保命。但打这张牌消耗所有能量，通常没能量再格挡——除非有 <span style="color:#3aa675;font-weight:600">0</span> 费格挡牌或被动格挡能力。所以实际是"清不干净就死"。
- **升级 X→X+1 提升下限**：升级额外 <span style="color:#3aa675;font-weight:600">+1</span> 次封印。X=<span style="color:#3aa675;font-weight:600">0</span> 时（没能量）也能施加 <span style="color:#3aa675;font-weight:600">1</span> 次封印，提升下限。X 越大升级收益越明显（X=<span style="color:#3aa675;font-weight:600">3</span> 时施加 <span style="color:#3aa675;font-weight:600">4</span> 次）。
- **最佳时机：敌人少或能确保不被打到**：对单个敌人集齐攻击无效+封属就能整回合封死，敌人数量越少越容易封全。配合反弹类能力（如[护盾反弹](/powers/reflect_block_power.md)）或 <span style="color:#3aa675;font-weight:600">0</span> 费格挡牌能降低风险——只要格挡掉所有攻击就不死。
- **性价比**：X 费换 X（升级 X+1）次封印，每次封印约值 <span style="color:#3aa675;font-weight:600">1</span> 费——死亡风险是真正的定价变量：封掉关键意图时白嫖保命，剩关键意图没封就暴毙。

## 相关能力

- [跪地求饶](/powers/kneel_beg_power.md)：减益，敌人回合受到未被格挡的攻击伤害时自身死亡，敌人回合结束时移除

## 源码

- `SeerKneelBeg.cs`
