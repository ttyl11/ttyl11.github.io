# 七曜天轮

> **归属**：怪物专属（[圣光斯嘉丽（Boss）](/monsters/boss/holy_light_scarlett_boss_monster.md)）
> **类型**：中性（None，不可被消除）
> **叠加方式**：按层数叠加
> **可见**：是

<img src="/images/powers/seven_luminaries_power.png" alt="七曜天轮" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 描述

①当前光线：。<br/>②持有光线的效果：<br/><span style="color:#d44;font-weight:600">红光</span>：自身造成的攻击伤害提高<span style="color:#3aa675;font-weight:600">80%</span>。<br/>[orange]橙光[/orange]：自身受到的攻击伤害降低<span style="color:#3aa675;font-weight:600">40%</span>。<br/><span style="color:#d4a017;font-weight:600">黄光</span>：敌人本回合无法打出攻击牌。<br/><span style="color:#5a9e2e;font-weight:600">绿光</span>：自身回合开始时，回复<span style="color:#3aa675;font-weight:600">50%</span>已损失生命值。<br/>[aqua]青光[/aqua]：敌人回合开始时，随机获得<span style="color:#3aa675;font-weight:600">5</span>种<span style="color:#d44;font-weight:600">异常状态</span>，每种<span style="color:#3aa675;font-weight:600">5</span>层。<br/><span style="color:#3aa675;font-weight:600">蓝光</span>：敌人本回合无法打出技能牌。<br/><span style="color:#9b59b6;font-weight:600">紫光</span>：敌人本回合无法打出带有<span style="color:#d4a017;font-weight:600">堕落</span>的牌。

## 详细机制

- **开局紫光 1 种**，技能 4 / 5 各补 1 色。
- **七色齐**：此后永久只用王·圣璨天洁，且加费张数恒为 7。
- **切色触发**：[炫目天轮](/powers/dazzling_wheel_power.md) 会在每次切换光线时，给所有可叠加的敌方减益与自身增益加层数，层数＝当前颜色数。

## 相关能力

- [炫目天轮](/powers/dazzling_wheel_power.md)

## 源码

- `SeerSevenLuminariesPower.cs`
