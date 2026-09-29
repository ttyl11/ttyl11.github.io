# 隐者

<img src="/images/relics/tarot_hermit.png" alt="隐者" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 塔罗遗物
- **稀有度**: 普通

## 描述

自身在战斗中首次[变换属性](/mechanics/element-affinity.md)时，获得 <span style="color:#3aa675;font-weight:600">1</span> 层[无实体](/powers/intangible_power.md)。

- **触发时机**：战斗内，当自身获得任意一种元素属性（施加[元素属性](/mechanics/element-affinity.md)）的瞬间，每场战斗仅 1 次。
- **"变换属性"的含义**：这里的"属性"指[元素属性](/mechanics/element-affinity.md)（火、水、草、龙、虚空等 26 种元素），不是力量/防御/命中/速度那种[全属性](/mechanics/all_attributes.md)。只要自身在战斗中挂上某个新的元素属性，就视为一次变换。
- **范围**：仅自身获得 1 层[无实体](/powers/intangible_power.md)。

## 风味文字

<span style="color:#d44;font-weight:600">隐者。</span>

## 小贴士

- **属性=元素，不是四维全属**：触发判定看的是[元素属性](/mechanics/element-affinity.md)（火水草龙等 26 种），而非[全属性](/mechanics/all_attributes.md)（力量/防御/命中/速度）。所以给它挂火、水之类元素附着的卡牌/药水/遗物才能触发，普通叠攻防不触发。
- **首次即触发**：战斗内自身第一次获得任一元素属性的瞬间就拿到 1 层[无实体](/powers/intangible_power.md)，每场只有这一次。像[圣灵起源](/relics/starter/origin_shift.md)那种战斗开始就给自己挂[神灵](/powers/divine_power.md)属性的遗物，会在开场直接触发——省心但吃掉了唯一一次机会。
- **无实体挡一切伤害**：无实体把受到的每次伤害与生命损失都封顶在 1 点，多段攻击也只每段 1 点。正好在"切换元素属性"这个通常伴随进攻节奏变化的节点，给一整个敌方回合罩上减伤保护。
- **好触发源**：元素附着卡、属性变换类药水、[群星的礼赠](/relics/starter/elemental_core.md)等能便捷变换属性的手段，都能稳定吃到这层无实体。
- **每场 1 次是上限**：虽然能反复变换属性，但只在第一次带属性变化的瞬间给无实体，后续变换不再给。规划时把它当成一次性保命手段，而不是持续防御。
- **性价比**：普通稀有度保命件，价值取决于卡组能否经常变换元素属性——属性附着流里非常好用，纯物理攻防流则基本吃不到。

## 源码

- `SeerTarotHermit.cs`