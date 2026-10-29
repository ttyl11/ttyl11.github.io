# 吃月亮

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自身获得——[英普瑞斯](/monsters/elite/holy_feather_imperius_monster.md)、[布蕾里克](/monsters/elite/buleilike_monster.md)、[圣战瑞尔斯](/monsters/elite/holy_war_ruiersi_monster.md)、[圣光斯嘉丽](/monsters/elite/holy_light_scarlett_monster.md)、[堕息·迹](/monsters/elite/duoxiji_monster.md)、[六界帝神](/monsters/elite/six_realm_god_monster.md)、[坚盾·瓦尔德](/monsters/elite/shield_warde_monster.md)、[逆魂佩特菲德](/monsters/elite/reverse_soul_petefide_monster.md)、[希拓](/monsters/elite/xituo_monster.md)、[不羁·弗里德](/monsters/boss/bujifulide_monster.md)、[不灭·艾恩斯](/monsters/boss/bumie_ai_en_si_monster.md)、[斗神瑞尔斯](/monsters/normal/doushen_ruiersi_monster.md)、[孤烛灯使](/monsters/boss/guzhudengshi_monster.md)、[混沌·千夜死神](/monsters/boss/hundun_qian_ye_si_shen_monster.md)、[墨鲁萨](/monsters/elite/medusa_minion_monster.md)、[莫塔里安](/monsters/boss/motalian_monster.md)；施加给友军——[冥契·格斯塔丝](/monsters/boss/mingqi_gesitasi_monster.md)

<img src="/images/powers/eat_moon_power.png" alt="吃月亮" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 叠加
- **可见**: 是

## 描述

自身回合开始时，回复自身最大生命值<span style="color:#3aa675;font-weight:600">1/4</span>的生命值，并对每个对手造成等同本次<span style="color:#d4a017;font-weight:600">实际回复量</span><span style="color:#3aa675;font-weight:600">20%</span>的<span style="color:#d4a017;font-weight:600">固定伤害</span>。<br/>触发后层数-<span style="color:#3aa675;font-weight:600">1</span>。

## 详细机制

- **先回血、再按回血量打固伤**：持有者自己回合开始时先回复**最大生命 25%**（满血时回复量为 0，固伤也随之归零），再把**本次实际回复量**的 20% 作为[固定伤害](/powers/fixed_damage_power.md)打给**对面全体**。
- **口径是实际回复量**：与"最大生命的 20%"不同——满血时不触发固伤，残血时回多少就打多少的 20%。
- **层数即持续回合**：每触发一次减 1 层，层数归零后消失。

## 源码

- `SeerEatMoonPower.cs`
