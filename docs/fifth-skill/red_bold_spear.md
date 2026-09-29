# 赤胆缀银枪

<img src="/images/cards/red_bold_spear.png" alt="赤胆缀银枪" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 第五技能
- **最大PP**: 5
- **能量消耗**: 7
- **类型**: 攻击
- **稀有度**: 稀有
- **目标**: 所有敌方
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害 | 7 | 7 |
| 固定伤害每增益 | 7 | 7 |
| 回复阈值 | 4 | 4 |
| 回复百分比 | 50 | 75 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 自身每有一种[<span style="color:#d4a017;font-weight:600">属性提升</span>](/mechanics/all_attributes.md)，耗能<span style="color:#3aa675;font-weight:600">-1</span>，对所有敌人造成 <span style="color:#3aa675;font-weight:600">7</span>×属性提升种类数 伤害并附加 <span style="color:#3aa675;font-weight:600">7</span>×属性提升种类数 点[<span style="color:#d4a017;font-weight:600">固定伤害</span>](/powers/fixed_damage_power.md)。打出时耗能&lt;<span style="color:#3aa675;font-weight:600">4</span>，恢复已损失生命<span style="color:#3aa675;font-weight:600">50</span>%。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 自身每有一种[<span style="color:#d4a017;font-weight:600">属性提升</span>](/mechanics/all_attributes.md)，耗能<span style="color:#3aa675;font-weight:600">-1</span>，对所有敌人造成 <span style="color:#3aa675;font-weight:600">7</span>×属性提升种类数 伤害并附加 <span style="color:#3aa675;font-weight:600">7</span>×属性提升种类数 点[<span style="color:#d4a017;font-weight:600">固定伤害</span>](/powers/fixed_damage_power.md)。打出时耗能&lt;<span style="color:#3aa675;font-weight:600">4</span>，恢复已损失生命<span style="color:#3aa675;font-weight:600">75</span>%。（升级提升回复百分比 50% → 75%）

## 小贴士

- **7 费但属性减费——每种属性 -1 费**：自身每有一种[属性提升](/mechanics/all_attributes.md)（[力量](/powers/strength_power.md)、[防御](/powers/defense_power.md)、[命中](/powers/accuracy_power.md)、[速度](/powers/speed_power.md)且层数 > <span style="color:#3aa675;font-weight:600">0</span>），耗能 <span style="color:#3aa675;font-weight:600">-1</span>。基础 <span style="color:#3aa675;font-weight:600">7</span> 费，四种全有时降至 <span style="color:#3aa675;font-weight:600">3</span> 费——需要提前叠加属性才能打出并吃满加成。
- **全体伤害随属性种类数缩放**：对所有敌人造成 <span style="color:#3aa675;font-weight:600">7</span> × 属性提升种类数 点攻击伤害。没有任何属性提升时不造成伤害；四种属性全有时每个敌人吃 <span style="color:#3aa675;font-weight:600">28</span> 点——群体核弹级输出。
- **附加的固定伤害同样随种类数缩放**：对**所有敌人**施加 <span style="color:#3aa675;font-weight:600">7</span> × 属性提升种类数 层[固定伤害](/powers/fixed_damage_power.md)（数值取决于属性种类数）。没有任何属性提升时不施加；四种属性全有时每个敌人各 <span style="color:#3aa675;font-weight:600">28</span> 层。
- **回血条件：实耗 &lt;4——必须四种属性全有**：打出时若**实际消耗的耗能** &lt; <span style="color:#3aa675;font-weight:600">4</span>，恢复已损失生命的 <span style="color:#3aa675;font-weight:600">50</span>%（升级 <span style="color:#3aa675;font-weight:600">75</span>%）。由于减费每属性 <span style="color:#3aa675;font-weight:600">-1</span>，要满 <span style="color:#3aa675;font-weight:600">7</span> - 种类数 &lt; <span style="color:#3aa675;font-weight:600">4</span> 需种类数 ≥ <span style="color:#3aa675;font-weight:600">4</span>——即四种属性全有（压到 <span style="color:#3aa675;font-weight:600">3</span> 费）才触发回血。属性减费与回血条件联动，集齐四属即可又减费又回血。
- **升级提升回复百分比 50% → 75%**：升级后伤害/固定伤害/回血条件都不变，只把满四属时的回复比例从 50% 抬到 75%。
- **性价比**：<span style="color:#3aa675;font-weight:600">7</span> 费（属性减费后大降）换全体 <span style="color:#3aa675;font-weight:600">7</span>×种类数 伤害 + <span style="color:#3aa675;font-weight:600">7</span>×种类数 固定伤害 + 四属时回血；属性越多越强，四属全有时接近攻防一体大牌。升级提升回复百分比。

## 相关机制

- [属性提升（全属性）](/mechanics/all_attributes.md)：力量、防御、命中、速度四种能力
- [固定伤害](/powers/fixed_damage_power.md)：根据属性种类数附加

## 源码

- `SeerRedBoldSpear.cs`