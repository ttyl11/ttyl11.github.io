# 始皇帝·嬴政

<img src="/images/relics/seer_shi_huang_di_ying_zheng.png" alt="始皇帝·嬴政" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 传说

### 数值参数

| 参数 | 数值 |
|---|---|
| 臣服回合 | 5 |
| 每敌人额外永昌玺 | +1 |
| 免疫臣服 | 是 |
| 复活给卡 | 八方·无人来朝 |

## 描述

①自身免疫[臣服](/powers/subjugation_power.md)，战斗开始所有敌人[臣服](/powers/subjugation_power.md)[blue]5[/blue]回合。②回合结束，自身获得[blue]1[/blue]方[永昌玺](/powers/eternal_seal_power.md)；每有敌人被[封属](/mechanics/intent.md)/[封攻击](/mechanics/intent.md)或[击晕](/mechanics/stun.md)，再获得[blue]1[/blue]方。③自身触发[复活](/mechanics/revive.md)后，向牌组加入[八方·无人来朝](/fifth-skill/octagon.md)。

## 详细机制

- **①免疫臣服 + 开局压制**：自身施加臣服一律被拦截（`TryModifyPowerAmountReceived` 返回 0）；战斗第 1 回合对所有敌人施[臣服](/powers/subjugation_power.md) 5 回合（受到的攻击伤害-70%，每回合结束-1层）。
- **②回合结束积攒永昌玺**：每回合结束获得 1 方；场上每有一个敌人处于**封属**或**封攻击**（`SeerSealAttributePower`/`SeerSealAttackPower`）或**击晕**（`IsStunned`）状态，再 +1 方。配合自己的①开局全敌臣服/反复封属控场，永昌玺会快速增长。
- **②永昌玺最高6、满6开君临天下**：永昌玺自身有 6 层硬上限（`TryModifyPowerAmountReceived` 封顶），达到 6 层立即触发一次[君临天下](/powers/octagon_debt_power.md)（本场只一次）——6回合全面推进，结束后清牌、生命设为1。遗物本体的①②与八方·无人来朝、天下一国共用同一套永昌玺机制。
- **③复活后补充核弹**：战斗中自身任何来源的复活（死亡→回血复活，`Creature.Revived` 事件）都会向牌组加入一张[八方·无人来朝](/fifth-skill/octagon.md)——配合君临天下结束后生命设为1的高危血线，复活后立刻多一把 170 点核弹。

## 小贴士

- **搭配愚蠢流（封属/封攻击/击晕）**：遗物②每回合根据控场人数加速永昌玺，配合自身开局臣服，回合数越少越早触发出君临天下。
- **作前排活下去靠臣服+免疫**：自身免疫臣服不怕被反向压制，敌人巨幅减伤下攻击压力大减，攒玺期更安全。
- **复活给卡是翻盘引擎**：血量被君临天下/敌人压到极限触发的复活=立刻获得一张八方·无人来朝核弹，后续再打满一次君临天下也不亏。

## 相关能力 / 机制

- [臣服](/powers/subjugation_power.md)（①对敌施加/自身免疫）
- [永昌玺](/powers/eternal_seal_power.md)（②积攒，满6开君临天下）
- [君临天下](/powers/octagon_debt_power.md)（满6触发）
- [封属](/mechanics/intent.md)、[封攻击](/mechanics/intent.md)、[击晕](/mechanics/stun.md)（②计数条件）
- [八方·无人来朝](/fifth-skill/octagon.md)（③复活获卡）

## 源码

- `SeerShiHuangDiYingZheng.cs`