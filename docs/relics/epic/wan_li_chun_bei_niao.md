# 万里春·北鸟

<img src="/images/relics/wan_li_chun_bei_niao.png" alt="万里春·北鸟" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 史诗（自定义稀有度）

### 数值参数

| 参数 | 数值 |
|---|---|
| 开场混乱 | 所有生物各 2 |
| 首个异常转化 | 转为 3 回合混乱 |
| 回血 | 全场异常每 1 层，自身恢复 2 生命 |
| 万里春啼触发 | 全场异常总层数 > 5 |
| 攻击牌异常 | 记录异常 2 回合 |
| 无记录减伤 | 受到的伤害 -30% |

## 描述

①战斗开始：所有生物<span style="color:#d44;font-weight:600">混乱</span><span style="color:#3aa675;font-weight:600"></span>；无<span style="color:#d4a017;font-weight:600">记录</span>时，首个<span style="color:#d44;font-weight:600">异常</span>转为<span style="color:#3aa675;font-weight:600"></span>回合<span style="color:#d44;font-weight:600">混乱</span>并<span style="color:#d4a017;font-weight:600">记录</span>（<span style="color:#d44;font-weight:600">混乱</span>不记录），此后<span style="color:#d44;font-weight:600">异常</span>不再转化。<br/>②回合开始：全场<span style="color:#d44;font-weight:600">异常</span>每有<span style="color:#3aa675;font-weight:600">1</span>层，自身恢复<span style="color:#3aa675;font-weight:600"></span>生命；总层数><span style="color:#3aa675;font-weight:600">5</span>触发<span style="color:#9b59b6;font-weight:600">万里春啼</span>。<br/>③有<span style="color:#d4a017;font-weight:600">记录</span>：打出<span style="color:#d4a017;font-weight:600">攻击牌</span>，敌人进入<span style="color:#d44;font-weight:600">记录异常</span><span style="color:#3aa675;font-weight:600">2</span>回合；无<span style="color:#d4a017;font-weight:600">记录</span>：受到伤害-<span style="color:#3aa675;font-weight:600">%</span>。<br/>当前<span style="color:#d4a017;font-weight:600">记录</span>：

## 详细机制

### ① 开场混乱 + 首个异常转化（记录核心）

- **战斗开始**：敌我**所有生物**各获得[混乱](/powers/confusion_power.md) 2 层；同时清空北鸟的记录（记录即本场内首个被拦截的异常类型，仅本场有效：战斗开始与战斗结束都会清空）。
- **首个异常转化**：自身**无记录**且**首次**进入异常状态时——
  - [混乱](/powers/confusion_power.md)本身：**不参与记录、不转化**（开场全场混乱 2 照常生效）；
  - **首个非混乱异常**：施加量被拦截（不生效），改为转化为 [混乱](/powers/confusion_power.md) 3 层，并把该异常类型**记录**下来（只记第一个，此后不再改记）。
- **有记录后**：异常不再转化、不再记录，正常生效。

### ② 回合开始：全场异常换血

- 统计**全场所有生物（敌人 + 自身）**异常总层数 N（每层 = 1 回合），自身恢复 2 × N 生命。
- 若 N > 5（超过 5 回合），额外赋予自身 [万里春啼](/powers/wan_li_chun_ti_power.md)。

### ③ 有记录：攻击牌附加记录异常；无记录：减伤

- **有记录**：自身打出[攻击牌](/mechanics/card-tags.md)时，**所有存活敌人**进入所记录异常 <span style="color:#3aa675;font-weight:600">2</span> 回合（记录异常不可能是混乱，混乱不进记录）。
- **无记录**：受到的伤害减少 30%（一切伤害来源均减）。

## 风味文字

<span style="color:#d44;font-weight:600">万里春·北鸟。</span>

## 小贴士

- **开局强制全员混乱**：敌方开局被混乱 2 回合，回合开始先吃 5 伤、命中 -1，变相削弱敌方第一轮输出；自身同样被混乱，但②能靠全场异常层数回血反而受益。
- **记录即"本场异常焦点"**：第一次吃到的非混乱异常会被转化成 3 回合混乱并记为"记录异常"——之后你打攻击牌就是让敌人也吃这个异常。想控谁，先吃谁的异常。
- **②的回复量与混乱持续正相关**：敌人和自身身上挂的异常层数越多，回合开始回血越多；层数 > 5 直接额外触发[万里春啼](/powers/wan_li_chun_ti_power.md)——异常海洋越大，收益越稳。
- **万里春啼是"焦虑型清洁工"**：回合结束时解除所有生物异常（每种计 1）、每解除 1 种所有敌人[全属性](/mechanics/all_attributes.md)-1，并清空记录；下回合开局敌方被挂上等量随机[异常](/mechanics/abnormal-status.md) 2 回合——等于把本场异常势头一次性转嫁并重置记录，适合长线消耗。
- **③的减伤是保底**：记录未建立前受到伤害 -30%，前期容错高；一旦建立记录，优先收益转向"攻击牌人人都吃记录异常"+ 全局回血，减伤让位。

## 相关能力 / 机制

- [混乱](/powers/confusion_power.md)（开场全员 / 转化目标 / 攻击牌附加记录异常）
- [万里春啼](/powers/wan_li_chun_ti_power.md)（回合结束清全身异常 + 转嫁随机异常）
- [异常状态](/mechanics/abnormal-status.md)、[全属性](/mechanics/all_attributes.md)、[攻击牌](/mechanics/card-tags.md)

## 源码

- `SeerWanLiChunBeiNiao.cs`
- `SeerWanLiChunTiPower.cs`