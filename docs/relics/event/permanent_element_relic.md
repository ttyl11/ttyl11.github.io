# 属性转化印记

<img src="/images/relics/permanent_element_relic.png" alt="属性转化印记" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 事件
- **获取途径**: **不可主动获取**——使用「永久变 X 系」系列药水或[庆典多味豆](/potions/celebration_beans_potion.md)时自动附身（隐形成员遗物，不进入任何奖励池）

### 数值参数

| 参数 | 数值 |
|---|---|
| 可记录元素数 | 1（永久元素模式）或 2（庆典模式） |
| 元素池 | 26 种元素属性 |

## 描述

记录你<span style="color:#d4a017;font-weight:600">永久改变属性</span>的元素。持有期间，于每场<span style="color:#d4a017;font-weight:600">战斗开始</span>时重新施加该元素。当前属性：[orange][/orange]。

## 风味文字

属性既定，循环不息。

## 详细机制

- **隐形标记遗物**：它不是奖励池里的遗物，而是**药水的跨战斗载体**。元素 Power 本身是战斗作用域的（战斗结束即清除），所以"永久变 X 系"需要一件遗物来记住目标元素，并在每场战斗开始时重新施加。
- **两种模式，互斥**：
  - **永久元素模式**（`ElementIndex > 0`）：由「永久变 X 系」药水写入，记录 1 个固定元素。
  - **庆典模式**（`CelebrationActive`）：由[庆典多味豆](/potions/celebration_beans_potion.md)写入，每场战斗开始弹两次三选一。
  - 写其中一种会**清掉另一种**（设永久元素时关闭庆典标记，反之亦然），避免两套机制同时触发。
- **战斗开始时的行为**：
  - 永久元素模式：先**清空自身所有元素**，再重新施加记录的那个元素（覆盖旧属性，保持纯净）。
  - 庆典模式：连续弹出**两次**三选一，把选中的两个元素依次施加到自身（同样先清空旧元素）。
- **悬浮框实时标注**：遗物悬浮框会按当前记录动态显示元素能力的悬浮提示（永久元素 + 庆典选中的两个元素）。
- **描述里的「当前属性」是动态的**：`{CurrentAttribute}` 实时渲染当前记录的元素名，没有记录时显示"无"。

## 小贴士

- **它本身没有战斗力**：这是一件纯粹的"记账遗物"，所有实际效果都来自它重新施加的元素能力——别指望它单独提供任何收益。
- **一次只能走一条路线**：用了「永久变 X 系」药水，之前吃的[庆典多味豆](/potions/celebration_beans_potion.md)就作废（反之亦然）。想走固定单元素流就吃变身药，想每场自选克制就吃庆典豆，别混着用。
- **永久元素不会叠加**：再次使用变身药会**覆盖**旧元素（先清空再施加），不会同时持有两种永久元素。
- **每场战斗都白嫖一次变身**：核心价值在这里——一次用药，之后整局的每一场战斗开局都自动带上该元素，长期收益远超单发变身。
- **元素决定双向倍率**：你的元素既影响你打敌人的伤害倍率，也影响有元素的敌人打你的倍率（克制 ×1.5、被克 ×0.75）。选元素时要兼顾"克敌"和"不被敌克"。
- **能记录的元素共 26 种**：草 / 水 / 火 / 飞行 / 电 / 机械 / 地面 / 普通 / 冰 / 超能 / 战斗 / 光 / 暗影 / 神秘 / 龙 / 圣灵 / 次元 / 远古 / 邪灵 / 自然 / 王 / 混沌 / 神灵 / 轮回 / 虫 / 虚空。

## 相关药水（12 种）

- [蓝色药丸](/potions/blue_pill_potion.md)（水）
- [返祖针剂](/potions/atavism_injection_potion.md)（普通）
- [绯红鱼罐头](/potions/crimson_fish_can_potion.md)（火）
- [暗物质巧克力](/potions/dark_matter_chocolate_potion.md)（暗影）
- [梦境边陲棉花糖](/potions/dream_cotton_candy_potion.md)（超能）
- [邪恶贝果](/potions/evil_bagel_potion.md)（邪灵）
- [正义冰淇淋](/potions/justice_ice_cream_potion.md)（光）
- [生命苔原口嚼糖](/potions/life_tundra_gum_potion.md)（草）
- [神圣蛋白霜饼](/potions/sacred_meringue_potion.md)（圣灵）
- [智慧果实](/potions/wisdom_fruit_potion.md)（自然）
- [至尊曲奇](/potions/supreme_cookie_potion.md)（次元）
- [庆典多味豆](/potions/celebration_beans_potion.md)（庆典模式——每场战斗自选 2 个属性）

## 相关机制

- [属性克制](/mechanics/element-affinity.md)（元素的实际作用）
- [27 种异常状态](/mechanics/abnormal-status.md)（元素与异常状态是两套独立系统）

## 源码

- `SeerPermanentElementRelic.cs`（`SeerPermanentElementRelic`、`SeerElementHelper`）
