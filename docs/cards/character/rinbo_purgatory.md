# 轮墓边狱

<img src="/images/cards/rinbo_purgatory.png" alt="轮墓边狱" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色牌

- **最大PP**: 1

- **能量消耗**: 1（升级后 0）

- **类型**: 技能

- **稀有度**: 稀有

- **目标**: 自己

- **可升级**: 是（1 级）

- **关键词**: [残鸣](/mechanics/canming.md)

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 堕落 | 49 | 49 |
| 格挡 | 13 | 13 |
| 残鸣触发 | 每50层堕落 | 每50层堕落 |
| 能量消耗 | 1 | 0 |
| PP | 1 | 1 |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> [<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">49</span>。[<span style="color:#d44;font-weight:600">消强</span>](/mechanics/xiao_qiang.md)。[<span style="color:#d44;font-weight:600">反弱</span>](/mechanics/fan_ruo.md)。获得<span style="color:#3aa675;font-weight:600">13</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。[<span style="color:#d44;font-weight:600">残鸣</span>](/mechanics/canming.md)：每有<span style="color:#3aa675;font-weight:600">50</span>层堕落，随机打出[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)一张牌。

## 升级后

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> [<span style="color:#d44;font-weight:600">堕落</span>](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">49</span>。[<span style="color:#d44;font-weight:600">消强</span>](/mechanics/xiao_qiang.md)。[<span style="color:#d44;font-weight:600">反弱</span>](/mechanics/fan_ruo.md)。获得<span style="color:#3aa675;font-weight:600">13</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。[<span style="color:#d44;font-weight:600">残鸣</span>](/mechanics/canming.md)：每有<span style="color:#3aa675;font-weight:600">50</span>层堕落，随机打出[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)一张牌。耗能降至<span style="color:#3aa675;font-weight:600">0</span>。

## 工作机制

- **打出即触发残鸣**：本牌虽是技能牌，打出后却直接进入[消耗牌堆](/mechanics/exhaust_pile.md)而非弃牌堆，因此[残鸣](/mechanics/canming.md)在**打出瞬间**就结算——堕落每满 <span style="color:#3aa675;font-weight:600">50</span> 层，从[抽牌堆](/mechanics/draw_pile.md)随机选一张牌免费打出，次数 = 堕落 ÷ <span style="color:#3aa675;font-weight:600">50</span> 向下取整；每打出一张后重新取抽牌堆快照，抽牌堆空或战斗结束时停止。

- **残鸣结算时堕落已含本卡的 49 层**：打出结算顺序是"先堕落 +<span style="color:#3aa675;font-weight:600">49</span>，再消强、反弱、格挡，最后进消耗堆触发残鸣"——所以残鸣的层数判断把本卡刚加的 <span style="color:#3aa675;font-weight:600">49</span> 层也算进去了。堕落 <span style="color:#3aa675;font-weight:600">51</span> 层时打出 → 堕落变 <span style="color:#3aa675;font-weight:600">100</span> → 直接触发 <span style="color:#3aa675;font-weight:600">2</span> 次。

- **消强是范围性**：消除**所有可命中敌人**的力量/防御/命中/速度正层数——整项移除而非清零到 0，负层数不动，虚弱/易伤等原版减益不在处理范围内。

- **反弱是负值翻正**：逐一检查自身四维，为负时施加该负值绝对值 <span style="color:#3aa675;font-weight:600">2</span> 倍的正层数（力量 <span style="color:#3aa675;font-weight:600">-2</span> → 施加 <span style="color:#3aa675;font-weight:600">+4</span> → 净 <span style="color:#3aa675;font-weight:600">+2</span>），只翻正自身不碰对手。

## 小贴士

- **一费两段结算的"自带残鸣"卡**：本体（堕落 +49、消强、反弱、13 格挡）之外，打出后立刻白嫖"堕落÷50"次免费打牌——绝大多数[残鸣](/mechanics/canming.md)牌要靠外力消耗才触发，这张牌**自己消耗自己**，效果即刻兑现。

- **49 层是残鸣的门槛缺口**：堕落不足 <span style="color:#3aa675;font-weight:600">50</span> 层时残鸣空转（0+49 → 49÷50=0 次）；堕落 <span style="color:#3aa675;font-weight:600">51</span> 层打出 → <span style="color:#3aa675;font-weight:600">100</span> → 打 <span style="color:#3aa675;font-weight:600">2</span> 张；堕落 <span style="color:#3aa675;font-weight:600">100</span> 层打出 → <span style="color:#3aa675;font-weight:600">149</span> → 打 <span style="color:#3aa675;font-weight:600">2</span> 张；<span style="color:#3aa675;font-weight:600">300</span> 层 → <span style="color:#3aa675;font-weight:600">349</span> → 打 <span style="color:#3aa675;font-weight:600">6</span> 张。堕落层数本身就是这张牌的"弹药量"。

- **免费打出不限费用**：残鸣随机打出的牌不消耗能量，抽牌堆里积压的高费爆发牌也会被白嫖打出——抽牌堆"存货"越多、越贵，这一段的收益越高；但打出的是**随机**牌，无法指定，抽牌堆里混着状态牌时可能"打空气"。

- **堕落越高越混乱**：每满 <span style="color:#3aa675;font-weight:600">100</span> 层会被[魔君接管](/powers/demon_takeover_power.md)强制打空手牌，而这张牌的残鸣又把抽牌堆的牌也拉进"自动打牌"节奏——高堕落时打出，等于让[魔君接管](/powers/demon_takeover_power.md)和残鸣两套自动打牌同时开火，场面失控风险极高。

- **消强专治叠四维的强敌**：只消四维（力量/防御/命中/速度），对叠[力量](/powers/strength_power.md)/[防御](/powers/defense_power.md)的精英和 Boss 是关键解牌；反弱则是"属性下降流"的自救开关，配合先被压属性再反打的节奏。

- **反弱的命中/速度即时收益弱**：力量正层直接加攻击伤害、防御正层直接减受击伤害，但命中正层只提供 +10%/层的暴击率（仅放大攻击伤害），速度单层只多抽 1 张并须弃掉半数——若自身只有命中/速度是负值，反弱的即时收益不如力量/防御明显。

- **升级降费**：<span style="color:#3aa675;font-weight:600">1</span> 费 → <span style="color:#3aa675;font-weight:600">0</span> 费，其余数值不变。0 费让"消强反弱+格挡+残鸣"整套可以当免费动作穿插在任何回合，性价比大幅提升。

- **性价比**：<span style="color:#3aa675;font-weight:600">1</span> 费合理——消强、反弱、13 格挡三合一还白送"堕落÷50"次免费打牌，是一张越打越赚的堕落系工具牌。

## 相关能力

- [堕落](/powers/fallen_power.md)（固定 49 层 + 残鸣层数来源）

## 相关机制

- [残鸣](/mechanics/canming.md)（被消耗时触发：每50层堕落随机打出抽牌堆一张牌）
- [消强](/mechanics/xiao_qiang.md)（消除对手全属性提升）
- [反弱](/mechanics/fan_ruo.md)（反转自身全属性下降）
- [全属性](/mechanics/all_attributes.md)（力量 / 命中 / 防御 / 速度）
- [格挡](/mechanics/block.md)（13 点）
- [消耗](/mechanics/exhaust.md)（打出即进消耗堆触发残鸣）
- [抽牌堆](/mechanics/draw_pile.md)（残鸣随机打出的来源）
- [PP系统](/mechanics/pp-system.md)（PP 消耗）

## 源码

- `SeerRinboPurgatory.cs`
