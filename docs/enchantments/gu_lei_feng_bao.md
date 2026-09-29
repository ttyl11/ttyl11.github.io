# 孤雷风暴

<img src="/images/enchantments/seer_gu_lei_feng_bao.png" alt="孤雷风暴" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 特殊附魔
- **可附魔牌类型**: 攻击 / 技能 / 能力
- **显示数量**: 否
- **额外卡牌文本**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 每堆可选销毁上限 | 2 |

## 描述

打出时，选择销毁三个牌堆（[抽牌堆](/mechanics/draw_pile.md)/[弃牌堆](/mechanics/discard_pile.md)/[消耗牌堆](/mechanics/exhaust_pile.md)）中各最多<span style="color:#3aa675;font-weight:600">2</span>张牌，每销毁一张，[全属性](/mechanics/all_attributes.md)+<span style="color:#3aa675;font-weight:600">1</span>。

## 详细机制

- **触发时机**：附魔牌每次被打出后触发（含自动打出）。
- **逐堆选择**：依次弹出[抽牌堆](/mechanics/draw_pile.md)、[弃牌堆](/mechanics/discard_pile.md)、[消耗牌堆](/mechanics/exhaust_pile.md)的选择界面，每堆最多选 <span style="color:#3aa675;font-weight:600">2</span> 张，可选 0 张直接跳过；牌堆为空时跳过该堆。
- **销毁去向**：被选中的牌移入[销毁牌堆](/mechanics/destroyed_pile.md)——本场战斗内无法再取回，战斗结束时随销毁牌堆一起清空。
- **全属性 +1**：每销毁一张，自身[力量](/powers/strength_power.md)/[防御](/powers/defense_power.md)/[命中](/powers/accuracy_power.md)/[速度](/powers/speed_power.md)各 +1——三堆选满 6 张 = 全属性各 +6。

## 小贴士

- **优先吃消耗牌堆，代价最低**：三堆里消耗牌堆的牌基本已在本场战斗"退役"，销毁它们几乎零代价；抽牌堆和弃牌堆才是真金白银——削抽牌堆影响后续上手质量，削弃牌堆影响循环。牌堆紧张时把两刀都留给消耗牌堆那格。
- **销毁 ≠ 永久删卡**：销毁牌堆只存在于本场战斗，战斗结束即清空——真正损失的是"本场少了几张可循环的牌"，换取的是本场全属性成长，不是把牌组永久打薄。
- **属性是战斗内的滚雪球**：全属性 +1 只在本场战斗生效，换场清零——所以它适合长战斗里多张附魔牌反复触发，别指望跨战斗累计。
- **自动打出同样弹窗**：附魔牌被自动打出（如接管类构筑）时照样逐堆弹出选择，节奏会被拖慢——不需要销毁时每堆选 0 张快速跳过即可。
- **性价比**：由传说遗物[飒雷孤影·喵佐](/relics/legendary/seer_sa_lei_gu_ying_miao_zuo.md)拾起时直接附 3 张，不占卡位、不看费用——三堆选满即净赚全属性各 +6，消耗牌堆部分几乎免费，纯赚。

## 相关遗物

- [飒雷孤影·喵佐](/relics/legendary/seer_sa_lei_gu_ying_miao_zuo.md)（拾起时随机 3 张牌附魔孤雷风暴）

## 相关机制

- [全属性](/mechanics/all_attributes.md)（力量 / 防御 / 命中 / 速度）
- [销毁牌堆](/mechanics/destroyed_pile.md)（战斗内隔离，不可取回）

## 源码

- `SeerGuLeiFengBao.cs`