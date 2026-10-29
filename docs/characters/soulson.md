# 混沌魔君·索伦森

<img src="/images/characters/soulson.png" alt="混沌魔君·索伦森" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **名称**: 混沌魔君·索伦森
- **代词**: 祂
- **性别**: 中性（Neutral）
- **名称颜色**: #7A2B8A（紫黑）
- **初始生命**: 77
- **初始金币**: 100
- **初始充能球槽**: 2
- **攻击动画延迟**: 0.15s
- **施法动画延迟**: 0.25s
- **攻击特效**: 钝击（`vfx_attack_blunt`）、重钝击（`vfx_heavy_blunt`）、斩击（`vfx_attack_slash`）三种随机
- **解锁条件**: 以任意角色通关一次后解锁
- **卡牌修饰名**: 混沌卡牌
- **卡牌修饰描述**: 混沌之力是毁灭而非救赎，埋藏着紫黑的深渊

## 描述

苏醒于混沌的魔君，从秩序尽头归来，以毁灭重塑宇宙

## 初始卡组（11 张）

| 数量 | 卡牌 | 说明 |
|---|---|---|
| 3 | [打击](/cards/basic/soulson_strike.md) | 索伦森专属基础攻击牌 |
| 3 | [防御](/cards/basic/soulson_defend.md) | 索伦森专属基础防御牌 |
| 1 | [寂灭](/cards/basic/nirvana_slash.md) | 堕落加伤的成长攻击牌 |
| 1 | [消亡](/cards/basic/perish.md) | 群体消亡 + 堕落 10 |
| 1 | [灭世挽歌](/cards/basic/extinction_elegy.md) | 夺取敌方全属性 + 面伤 |
| 1 | [堕世](/cards/basic/descent.md) | 0 费回能抽牌格挡 + 堕落 25 |
| 1 | [邪灵降世](/cards/basic/evil_descent.md) | 全属性 + 召唤 + 铸造 + 堕落 40 |

::: tip 与谱尼共用资源池
索伦森与圣灵谱尼**共用同一套卡池/遗物池/药水池**，两个角色的可用内容除专属初始卡组与初始遗物外完全相同。
:::

## 初始遗物

- [混沌起源](/relics/starter/chaos_origin.md)：每场战斗开始时获得[混沌](/powers/chaos_power.md)属性；每回合开始时，每拥有[堕落](/powers/fallen_power.md)<span style="color:#3aa675;font-weight:600">50</span>，获得<span style="color:#3aa675;font-weight:600">1</span>点最大生命。

### 堕落体系

[堕落](/powers/fallen_power.md)是索伦森的核心资源层数，每场战斗独立、**不清零**，由初始卡牌的堕落牌（消亡 +10 / 堕世 +25 / 邪灵降世 +40）积累。每满 <span style="color:#3aa675;font-weight:600">100</span> 层会触发三连：

1. **获得[混沌化身](/mechanics/chaos-incarnation.md)**：能量不足时仍可打出卡牌，差额用最大生命值抵扣（获得后整场持续）；
2. **抽 <span style="color:#3aa675;font-weight:600">1</span> 张牌**；
3. **被[魔君接管](/powers/demon_takeover_power.md)**：自动打出手中所有可打出的牌（优先耗能更高），直到自身下回合开始。

级别越高触发越频繁——200 层、300 层同样触发。**但堕落本质是负面**：每满 <span style="color:#3aa675;font-weight:600">100</span> 层强制接管乱打牌、且[混沌化身](/mechanics/chaos-incarnation.md)打超能量的牌会扣最大生命——是"越堆越失控"的定时炸弹。它的好处在：[混沌起源](/relics/starter/chaos_origin.md)把层数转成每回合回上限（每 50 层 = 1 最大生命），接管时白抽 1 张 + 无能量也能硬打——所以堕落是"坏但不能不用"的双刃剑：靠它输出，也被它绑架。

### 先古升级

被原版遗物「欧洛巴斯之触」升级后，初始遗物变为先古版[混沌魔君索伦森](/relics/legendary/chaos_demon_lord.md)（非塔罗遗物 · 传奇稀有度）。

## 古老牙齿转化

获得原版遗物「古老牙齿」时，索伦森的 5 张初始牌（寂灭/消亡/灭世挽歌/堕世/邪灵降世）中按牌组顺序选第一张存在的，变化为[混沌灭世决](/cards/ancient/world_end_decree.md)（先古真神牌）；5 张全部转化后回退为任意非混沌灭世决的牌。

## 角色专属机制

- [堕落](/powers/fallen_power.md)：索伦森核心资源，每满 100 层强制接管（负面为主的双刃剑）。
- [魔君接管](/powers/demon_takeover_power.md)：堕落满 100 后自动打光可打的牌（失控）。
- [混沌化身](/mechanics/chaos-incarnation.md)：能量不足仍可出击，差额扣最大生命（堕落满 100 获得，整场战斗持续）。
- [PP 系统](/mechanics/pp-system.md)：索伦森卡牌独有的 PP 资源系统。
- [混沌属性](/powers/chaos_power.md)：初始遗物每场给予，克制 飞行/冰/神秘/次元/邪灵/自然/神灵。
- [元素克制](/mechanics/element-affinity.md)：26 种元素属性相生相克。
- [异常状态](/mechanics/abnormal-status.md)：mod 战斗的核心压制手段。
- [全属性](/mechanics/all_attributes.md)：力量/命中/防御/速度四属性体系。
- [固定伤害](/mechanics/fixed-damage.md)：延迟结算、不可格挡的特殊伤害机制。
- [充能球](/mechanics/orb.md)：索伦森初始 2 槽位，与谱尼相同。
- [铸造系统](/mechanics/forge.md)：铸造剑刃衍生物的机制。
- [真神牌堆](/mechanics/true-god-pile.md)：独立于抽/弃/消耗牌堆的二级资源系统。

## 角色可用资源统计

索伦森与圣灵谱尼**共用全部 mod 资源**（卡池/遗物池/药水池），可用内容完全相同，完整清单见各图鉴：

| 资源类型 | 链接 |
|---|---|
| 卡牌图鉴（角色/先古/无色/诅咒/状态/事件/衍生/任务） | [卡牌图鉴](/cards/) |
| 遗物图鉴 | [遗物图鉴](/relics/) |
| 能力图鉴 | [能力图鉴](/powers/) |
| 附魔图鉴 | [附魔图鉴](/enchantments/) |
| 充能球图鉴 | [充能球图鉴](/orbs/) |
| 药水图鉴 | [药水图鉴](/potions/) |
| 混沌属性 | [混沌](/powers/chaos_power.md) |

## 风味文字

- **死亡防触发台词**：混沌不会如此轻易湮灭。
- **金币独白**：这些财富……或许能助我重筑混沌的秩序。
- **混沌气息**：秩序的气息……不过是对混沌的一种曲解。
- **回合结束闲聊（存活）**：混沌不朽。
- **回合结束闲聊（死亡）**：……

## 小贴士

- **堕落是把双刃剑，别当纯收益**：初始卡组 3 张堕落牌每回合都在涨层数，配合混沌起源回上限，看着像"越打越强"，但每次满 <span style="color:#3aa675;font-weight:600">100</span> 层都是强制失控——手牌被接管打光、混沌化身会把打超能量的牌折成最大生命消耗。堕落越高，接管的触发越快，控制的主动权越少；收益是白抽 <span style="color:#3aa675;font-weight:600">1</span> 张 + 上限续航，代价是每 100 层失控一次。
- **接管不可怕，可怕的是没准备**：100 层触发自动打光手牌，好处是免费把牌用掉；坏处是打乱规划、还会因混沌化身扣最大生命——出牌前留意自己离 100 层还有多远，把关键牌在接管前打完，别让工具牌被白白乱打变成浪费。
- **2 槽位的充能球空间**：初始 2 个充能球槽，配合 orb 体系的构筑空间更大。
- **77 生命是"脆皮 + 失控"双高风险**：与谱尼同为 77 血最低档，堕落体系靠混沌起源回上限"养"，但每次接管乱打+扣上限都在反噬这个血线——生命上限起起伏伏是索伦森的常态，别真把自己当肉盾。

## 源码

- `Soulson.cs`
- `SeerChaosOrigin.cs`（初始遗物）
- `SeerFallenPower.cs` / `SeerDemonTakeoverPower.cs`（堕落体系）
- `SeerArchaicToothPatch.cs`（古老牙齿转化）