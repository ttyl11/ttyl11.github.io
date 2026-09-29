# 于此臣服

<img src="/images/relics/orobos_eight_directions.png" alt="于此臣服" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 先古

## 描述

拾起时，将[八方·无人来朝](/fifth-skill/octagon.md)加入牌组。

- **入组即用**：创建后直接进牌组主牌堆，永久保留至打出或被[消耗](/mechanics/annihilation.md)。
- **不可升级**：八方·无人来朝重做后不可升级，`CardCmd.Upgrade` 会被跳过，加入的就是卡面本身（170 伤害 / 击晕 / 清增益减益 / 满 6 层永昌玺）。

## 风味文字

<span style="color:#d44;font-weight:600">嬴政。</span>

## 小贴士

- **一张"开君临天下"的钥匙**：[八方·无人来朝](/fifth-skill/octagon.md)打出后全体 170 点伤害并[击晕](/mechanics/stun.md)，清除敌方[增益](/mechanics/bound.md)和自身[减益](/mechanics/abnormal-status.md)，并直接获得满 6 层[永昌玺](/powers/eternal_seal_power.md)——立刻触发一次[君临天下](/powers/octagon_debt_power.md)（6 回合抽满手牌/能量+6/必定暴击/每牌附 15 固定伤害，结束后清 PP 入消耗+生命设为 1）。
- **寂灭一次性**：八方带[寂灭](/mechanics/annihilation.md)——打出后永久移除，整局仅此一发；开局拿到要留到最关键的战斗（精英/Boss）再打。
- **达成"君临天下→复活→再君临天下"循环**：若同时持有[始皇帝·嬴政](/relics/legendary/shi_huang_di_ying_zheng.md)，君临天下结束生命设为 1 后触发复活，复活再送一张八方——等于免费再开一轮君临天下。

## 源码

- `SeerOrobosEightDirections.cs`
