# 万动异甲

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[机械王·马尔修斯](/monsters/boss/maerxiusi_monster.md)常驻被动

<img src="/images/powers/maerxiusi_power.png" alt="万动异甲" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 中性（None）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| FortressReduction | 50 |
| FortressBlock | 100 |
| SpeedAttributeGain | 8 |
| DestructionBoost | 80 |
| DestructionAttackBonus | 50 |

## 描述

开局为普通形态；首次受到致命伤害时免疫死亡，回满生命并切换至【坚壁形态】。<br/>【坚壁形态】登场时获得<span style="color:#3aa675;font-weight:600">50%</span><span style="color:#d4a017;font-weight:600">永久减伤</span>；敌人回合开始时获得<span style="color:#3aa675;font-weight:600">100</span>点<span style="color:#d4a017;font-weight:600">格挡</span>；自身回合结束时若无<span style="color:#d4a017;font-weight:600">格挡</span>，回复自身已损失生命的<span style="color:#3aa675;font-weight:600">40%</span>。<br/>【极速形态】登场时全属性各+<span style="color:#3aa675;font-weight:600">8</span>；攻击造成伤害后，敌人全属性各-<span style="color:#3aa675;font-weight:600">2</span>，自身<span style="color:#d4a017;font-weight:600">先制</span>+<span style="color:#3aa675;font-weight:600">2</span>。<br/>【毁灭形态】登场时获得<span style="color:#3aa675;font-weight:600">80%</span><span style="color:#d4a017;font-weight:600">永久增伤</span>；自身攻击伤害额外提高<span style="color:#3aa675;font-weight:600">50%</span>；造成伤害后，直接消灭生命值低于<span style="color:#3aa675;font-weight:600">30%</span>的敌人。

## 详细机制

### 形态与复活

- **开局普通形态**：无任何形态加成，只有「首次致命伤害免死」这一条底牌。
- **免死只有一次**：第一次被打死时不会死亡，而是回满生命并切入【坚壁形态】；复活瞬间无敌、不可被选中，也不会让战斗提前结束。
- **形态切换靠技能**：后续由马尔修斯的技能随机切换到「与当前不同」的形态（坚壁/极速/毁灭都可再次进入）。
- **登场效果可重复叠**：每次重新进入某形态，都会再次结算该形态的登场效果——永久减伤、永久增伤、全属性加成都按次数累计。

### 坚壁形态

- **登场**：获得 <span style="color:#3aa675;font-weight:600">50%</span> [永久减伤](/powers/permanent_damage_reduction_power.md)。
- **玩家回合开始时**：获得 <span style="color:#3aa675;font-weight:600">100</span> 点[格挡](/mechanics/block.md)。
- **马尔修斯自己回合结束时**：若自身格挡为 0，回复**已损失生命**的 <span style="color:#3aa675;font-weight:600">40%</span>——血越残回得越多。

### 极速形态

- **登场**：力量、防御、命中、速度各 +<span style="color:#3aa675;font-weight:600">8</span>。
- **每次攻击后**：自身[先制](/powers/first_strike_power.md) +<span style="color:#3aa675;font-weight:600">2</span>。
- **攻击造成伤害后**：被命中的敌人全属性各 −<span style="color:#3aa675;font-weight:600">2</span>；固定伤害、DoT 不触发削属性。

### 毁灭形态

- **登场**：获得 <span style="color:#3aa675;font-weight:600">80%</span> [永久增伤](/powers/permanent_damage_boost_power.md)。
- **攻击伤害**：自身攻击再额外 <span style="color:#3aa675;font-weight:600">×1.5</span>。
- **造成伤害后斩杀**：只要马尔修斯造成过伤害，场上所有生命低于 <span style="color:#3aa675;font-weight:600">30%</span> 的敌人直接被消灭（不止被命中的那一个）。

## 小贴士

- **免死一次要留斩杀**：第一次击杀只是把它送进坚壁形态，真正要准备的是坚壁形态下的第二管血。
- **坚壁形态别让它空场**：它自己回合结束时若无格挡会回 40% 已损失生命——要么在它回合前打空血线，要么用攻击压住它的格挡，别让它安稳回血。
- **极速形态削属性很痛**：每次攻击都削全属性 2 点，拖久了力量/防御/命中/速度会被磨穿，优先控它的攻击次数。
- **毁灭形态会清场**：低于 30% 血线的敌人会被无差别斩杀，召唤物和残血队友要提前收好。
- **形态越切越强**：登场效果可重复累计，战斗拖得越久，永久减伤/增伤和属性越夸张——速战速决。

## 源码

- `SeerMaerxiusiPower.cs`
- `SeerMaerxiusiMonster.cs`（形态切换技能）
