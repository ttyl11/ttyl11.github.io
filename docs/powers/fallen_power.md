# 堕落

> **归属**：玩家专属（混沌魔君·索伦森）
> **施加来源**：玩家自身——索伦森的初始卡牌（[消亡](/cards/basic/perish.md)、[堕世](/cards/basic/descent.md)、[邪灵降世](/cards/basic/evil_descent.md)等）；谱尼侧——[萌喵电刃](/cards/character/meng_miao_electric_blade.md)、[深雷魔闪光](/cards/character/deep_thunder_demon_flash.md)

<img src="/images/powers/fallen_power.png" alt="堕落" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 无类型（不参与增益/减益分类，不可被驱散/净化）
- **叠加方式**: 计数型（通常递增；少数效果可覆盖/清空）
- **可见**: 是（能力图标显示层数）

## 描述

①堕落层数每场战斗独立累计，不会清零。<br/>②每跨过<span style="color:#3aa675;font-weight:600">100</span>层时，你会被<span style="color:#9b59b6;font-weight:600">魔君接管</span>：立即自动打出手中所有可打出的牌（优先耗能更高的牌），持续到你下个回合开始；并获得<span style="color:#d4a017;font-weight:600">混沌化身</span>、抽<span style="color:#3aa675;font-weight:600">1</span>张牌。<br/>③<span style="color:#d4a017;font-weight:600">混沌化身</span>获得后不会消失，持续到战斗结束。

## 堕落的定位：以失控为核心的双刃剑

堕落**本质是负面机制**：每一次满<span style="color:#3aa675;font-weight:600">100</span>层都会强制接管你的回合——手牌被[魔君接管](/powers/demon_takeover_power.md)自动乱打，且[混沌化身](/mechanics/chaos-incarnation.md)会把打超能量部分的差额换算成**最大生命消耗**。层数通常只增；但存在覆盖/清空手段（如[哀目黑子](/monsters/elite/aimu_heizi_monster.md)的「暗蚀诡谲」可将其设为 99，[枫落殇·西叶](/relics/epic/feng_luo_shang_xi_ye.md)会在回合结束转化并清空），失控通常不可避免。

但堕落也"坏得不算彻底"，附带的好处恰好对冲了失控：

- **抽<span style="color:#3aa675;font-weight:600">1</span>张牌**：触发瞬间白补手牌，被接管的回合依然有牌可打；
- **混沌变通**：获得[混沌化身](/mechanics/chaos-incarnation.md)后，能量不足也能继续打出高费牌——能量打空后用最大生命硬顶，等于把"没能量"变成"扣血换出牌"的选项；
- **自动白嫖节奏**：接管自动把手牌全部打出，省去手动决策，攻击型牌组等于多打一轮输出；
- **[混沌起源](/relics/starter/chaos_origin.md)可持续回上限**：初始遗物每回合按堕落层数回复最大生命，把扣掉的上限又喂回来——这正是堕落"负面却不致命"的关键补丁。

因此堕落的正确玩法不是避免它，而是**管理它**：知道自己的层数离 100 的倍数还有多远，在触发前把不想被乱打的牌（关键爆发/保命牌）先打完，让"失控"朝有利方向倾斜。

## 详细机制

- **层数来源**：索伦森的各类堕落牌打出时增加层数（[消亡](/cards/basic/perish.md) +10、[堕世](/cards/basic/descent.md) +25、[邪灵降世](/cards/basic/evil_descent.md) +40）。
- **通常不清零**：层数每场战斗独立、通常只增——战斗内持续累积，跨战斗不保留（每场重置为 0）；但[哀目黑子](/monsters/elite/aimu_heizi_monster.md)的「暗蚀诡谲」可把层数设为 99（高于 99 时下调），[枫落殇·西叶](/relics/epic/feng_luo_shang_xi_ye.md)会按 10:1 转化并清空。
- **100 层倍数触发三连**：每当层数跨过 <span style="color:#3aa675;font-weight:600">100</span> 的倍数（100/200/300...），立即：
  1. 获得[混沌化身](/mechanics/chaos-incarnation.md)（若此前没有，则本场此后一直持有）；
  2. 抽 <span style="color:#3aa675;font-weight:600">1</span> 张牌；
  3. 被[魔君接管](/powers/demon_takeover_power.md)——自动打出手中所有可打出牌直到自身下回合开始。
- **多次跨越连爆**：一次堕落增加若同时跨过两个 100 倍数（如 95→205），会**连续触发两次**三连。
- **枫落殇·西叶会关掉整套机制**：持有[枫落殇·西叶](/relics/epic/feng_luo_shang_xi_ye.md)时，堕落只作为它的转化计数（回合结束按 10:1 转化并清空），100 层的混沌化身、抽牌、魔君接管全部不生效。

## 相关机制

- [混沌起源](/relics/starter/chaos_origin.md)（初始遗物，堕落每 50 层 = 1 最大生命）
- [魔君接管](/powers/demon_takeover_power.md)（满 100 触发的出口）
- [混沌化身](/mechanics/chaos-incarnation.md)（满 100 触发获得）

## 源码

- `SeerFallenPower.cs`
- `SeerFallenCountHelper.cs`