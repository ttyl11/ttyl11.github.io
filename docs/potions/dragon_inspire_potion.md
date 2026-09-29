# 🐉 龙的振奋药水

## 基本信息

- **分类**: 恢复 / 净化
- **稀有度**: 罕见
- **使用时机**: 战斗内
- **目标**: 自身

### 数值参数

| 参数 | 数值 |
|---|---|
| 回血量 | 12 |

## 描述

恢复<span style="color:#3aa675;font-weight:600">12</span>点生命值。移除自身所有负属性。

## 详细机制

- **直接回复**：立即恢复 12 点生命。
- **净化范围**：移除自身[力量](/powers/strength_power.md)/[速度](/powers/speed_power.md)/[命中](/powers/accuracy_power.md)/[防御](/powers/defense_power.md)这四维中**为负值**的部分。
- **仅限四维**：只处理四项属性 debuff，不包含中毒/束缚/虚弱等其他异常状态（那些需要[圣佑](holy_blessing_potion.md)这类净化）。

## 小贴士

- **针对性解围**：回复 12 + 洗掉四维负面，专治"被 debuff 压制输出/防御"的场景。身负力量 -3、命中 -5 时喝一口，不仅回血还把手感全部救回来。
- **与[圣佑](holy_blessing_potion.md)的分工与补充**：圣佑全清、不管属性正负；龙振奋只清四维负值但换一口奶。若你身上四维负面扎堆，龙振奋的回血+净化一次性解决；若负面是中毒/束缚一类，选圣佑更对症。
- **半瓶奶的价值**：12 点回血量中规中矩，但多出来的"清负属性"是它最大的溢价。面对喜欢给玩家上属性 debuff 的敌人（如磨属性流），它是稳定解围药。
- **别当纯奶用**：只为了 12 血喝会显得亏（不如[雷诺急救包](reno_first_aid_potion.md)的 33 血）。先判断自己是否背着四维负面，再决定值不值。

## 相关能力

- [力量](/powers/strength_power.md)、[速度](/powers/speed_power.md)、[命中](/powers/accuracy_power.md)、[防御](/powers/defense_power.md)

## 源码

- `SeerDragonInspirePotion.cs`