# 四象琉璃盏

<img src="/images/relics/orobos_four_flames.png" alt="四象琉璃盏" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 先古

## 描述

每场战斗开始时，获得<span style="color:#9b59b6;font-weight:600">金火</span>、<span style="color:#9b59b6;font-weight:600">蓝火</span>、<span style="color:#9b59b6;font-weight:600">绿火</span>、<span style="color:#9b59b6;font-weight:600">紫火</span>。

- **触发时机**：战斗开始前自动施加，整场战斗持续。
- **金火**：你受到的攻击伤害 **-30%**（源码只对拥有者生效；本地化写"双方"，实际不是全场光环）。
- **紫火**：你造成的攻击伤害 **+50%**（源码只在你作为攻击方时生效，同样不是全场光环）。
- **蓝火**：你的回合结束时回复 <span style="color:#3aa675;font-weight:600">5</span> 点生命（敌方回合结束不触发）。
- **绿火**：每个你的回合开始时，[力量](/powers/strength_power.md)、[命中](/powers/accuracy_power.md)、[防御](/powers/defense_power.md)、[速度](/powers/speed_power.md)各 +<span style="color:#3aa675;font-weight:600">1</span>（每回合都有，不是每 3 回合）。

## 风味文字

<span style="color:#d44;font-weight:600">四火之力。</span>

## 小贴士

- **金紫火是"我方双强化"，不是全球减速**：紫火让你的攻击伤害 ×1.5，金火让你受到的攻击伤害 ×0.7——输出端 +50%、承伤端 -30%，两项都只认拥有者，不会同时惠及敌人。合起来是这遗物最核心的攻防收益。
- **金紫火只管攻击伤害**：灼烧、中毒、[固定伤害](/powers/fixed_damage_power.md)等非攻击伤害**完全不受金紫火影响**（既不被金火减免、也不被紫火放大）。敌方是 DoT 输出型时金火的减伤帮不上忙。
- **金紫火不叠加层数收益**：遗物只给各 1 层；金火紫火也不随层数变强（-30%/+50% 固定），多层的意义仅在于对抗消层效果。四火全部整场持续、不衰减，是"挂机型"被动。
- **绿火四属性的实际含金量**：[力量](/powers/strength_power.md) +1（攻击伤害 +1）和[防御](/powers/defense_power.md) +1（受到的攻击伤害 -1）是直接数值；[速度](/powers/speed_power.md)每层回合开始多抽 1 张（随后弃掉层数一半），当回合就能兑现；[命中](/powers/accuracy_power.md)正层每层 +10% 暴击率。15 回合 Boss 战累计 15 次结算 = 力量/防御各 +15，长战斗里绿火是最肥的一条线。
- **蓝火按"己方回合"结算**：敌方回合结束不回血，单回合收益就是稳定的 +5——10 回合战斗白嫖 50 点生命，配合金火 -30% 承伤，等效续航相当可观。
- **四火全为 Buff 类型**：可以被消 buff 类敌方效果清除，但开局自动获得意味着下场战斗照常重置——单场内被清了就是纯亏，遇到会清 buff 的敌人注意节奏。

## 源码

- `SeerOrobosFourFlames.cs`
