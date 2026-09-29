# 昆仑

<img src="/images/relics/seer_kun_lun.png" alt="昆仑" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物

- **稀有度**: 罕见

## 描述

战斗开始时，将 <span style="color:#3aa675;font-weight:600">32</span> 点伤害**随机分摊**给所有敌人（每个敌人分得随机份额，总和恰好 <span style="color:#3aa675;font-weight:600">32</span>），自身获得 <span style="color:#3aa675;font-weight:600">24</span> 层<span style="color:#d44;font-weight:600">[堕落](/powers/fallen_power.md)</span>。敌人数量大于 <span style="color:#3aa675;font-weight:600">2</span> 时，伤害与堕落各翻倍为 <span style="color:#3aa675;font-weight:600">64</span> / <span style="color:#3aa675;font-weight:600">48</span>。

- **分摊规则**：每个存活敌人都分到一份伤害，每份至少 <span style="color:#3aa675;font-weight:600">1</span> 点，分配比例完全随机。
- **翻倍条件**：敌人 ≥ <span style="color:#3aa675;font-weight:600">3</span> 个时，总分摊由 <span style="color:#3aa675;font-weight:600">32</span> 变为 <span style="color:#3aa675;font-weight:600">64</span>，堕落由 <span style="color:#3aa675;font-weight:600">24</span> 变为 <span style="color:#3aa675;font-weight:600">48</span>。
- **伤害性质**：普通攻击伤害，可被[格挡](/mechanics/block)减免。
- **堕落**：战斗开始即获得<span style="color:#3aa675;font-weight:600">24</span>层，敌人 ≥ <span style="color:#3aa675;font-weight:600">3</span> 个时翻倍为 <span style="color:#3aa675;font-weight:600">48</span>。堕落是**负面层数**、不清零，满 100 触发[魔君接管](/powers/demon_takeover_power.md)失控——它能让堕落系卡牌/遗物更快启动，也把你更快推向失控线，两边都要算。

## 风味文字

<span style="color:#d44;font-weight:600">巍巍昆仑，镇守天地。</span>

## 小贴士

- **战斗开场免费砸 32 伤害**：进战就先手给对面一轮物理伤害再正常打，等于白嫖一轮攻击的输出，属于最朴素的"进场强一截"遗物。

- **敌人越多反而越强**：敌人 ≥ <span style="color:#3aa675;font-weight:600">3</span> 个时总分摊翻倍到 <span style="color:#3aa675;font-weight:600">64</span>——正好逆着"多敌 = 更难"的直觉，让它在群殴战里尤其值钱，单挑/双敌时反而收益一般。

- **随机分摊有双面性**：是"随机"名额，可能把大额砸在高威胁怪上，也可能把 64 摊成每人十几点。对精英/Boss 这种单敌或双敌场景伤害被锁在 32，别期待它一招制敌。

- **不可穿透格挡**：这是普通攻击伤害，敌方格挡会吃掉部分。想吃到全额先手砸脸，最好配合削挡手段，或干脆当"额外补刀"用。

- **性价比**：罕见，凭本事进战就血赚——单体 <span style="color:#3aa675;font-weight:600">32</span>、三敌以上 <span style="color:#3aa675;font-weight:600">64</span> 的开场白嫖输出，任何卡组拿了都不亏。
- **堕落是附带的负面，别真当收益**：[堕落](/powers/fallen_power.md)本质是**负面层数**——开场白给 24 层（三敌以上 48 层），等于开局就往失控线上推近半个/接近一半百位。虽然有[无常幽鬼](/relics/common/ghost_impermanence.md)（堕落100获无实体）这类"垫层数换加成"的用途，但配合[兹拉特](/relics/common/zi_la_te.md)（开场 51）时总层数直接破百、当回合就被[魔君接管](/powers/demon_takeover_power.md)强控——带这两件要么主动走堕落流，要么做好失控预案，别把它当纯白嫖。

## 源码

- `SeerKunLun.cs`