# 德莱赫墨

<img src="/images/powers/drache_moire_power.png" alt="德莱赫墨" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **归属**：玩家能力
- **类型**：增益
- **叠加**：最高 <span style="color:#3aa675;font-weight:600">4</span> 层，超过 4 层按 4 层结算
- **施加来源**：[克雷弗德](/relics/epic/clifford.md)（战斗开始 1 层；战斗中每生成 1 张新牌 +1 层，最多 4 层）
- **可见**: 是

## 描述

最高<span style="color:#3aa675;font-weight:600">4</span>层。<br/>①1层：受到伤害减少<span style="color:#3aa675;font-weight:600">40%</span>。<br/>②2层：受到伤害减少<span style="color:#3aa675;font-weight:600">20%</span>。<br/>③3层：造成伤害增加<span style="color:#3aa675;font-weight:600">30%</span>，<span style="color:#d4a017;font-weight:600">先制</span>+<span style="color:#3aa675;font-weight:600">1</span>。<br/>④4层：造成伤害增加<span style="color:#3aa675;font-weight:600">45%</span>，<span style="color:#d4a017;font-weight:600">先制</span>+<span style="color:#3aa675;font-weight:600">2</span>。

## 详细机制

- 层数只取 1~4；**2 层的减伤是 20%，反而低于 1 层的 40%**——这是源码里的实际数值，并非笔误。叠到 2 层会从「防守」转向「准备进攻」。
- 减伤只对**别人打到拥有者身上**的伤害生效，自己打自己不减；结算在生命流失前，非攻击伤害同样减。
- 增伤只对拥有者用**攻击牌**造成的伤害生效；固定伤害、流失等不受影响。
- 3 层与 4 层在拥有者回合开始时分别追加 1 / 2 层先制，先制不会因能力消失而回退。
- 克雷弗德在战斗中每生成一张新牌就 +1 层（核袭、雷印除外），所以生成类卡组能很快叠满 4 层。

## 源码

- `SeerDracheMoirePower.cs`
- `SeerClifford.cs`（克雷弗德）
