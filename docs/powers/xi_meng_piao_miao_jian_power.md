# 戏梦缥缈间

> **归属**：玩家可施加
> **施加来源**：玩家获得——[戏梦缥缈间](/cards/character/xi_meng_piao_miao_jian.md)（卡牌）

<img src="/images/powers/xi_meng_piao_miao_jian_power.png" alt="戏梦缥缈间" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 叠加（Counter，层数 = 剩余触发次数）
- **可见**: 是

## 描述

下回合开始时，将你的[gold]手牌[/gold]抽满。

## 详细机制

- **触发时机**：持有者所在阵营的**下个回合开始时**结算，只触发一次；结算后层数归零并移除。
- **补满上限**：按"手牌上限 − 当前手牌数"抽牌，只补到上限，不会超出手牌上限，也不额外多抽。
- **手牌已满则不抽**：当前手牌已达上限时抽牌数为 0，但能力仍会消耗并移除。
- **不影响牌堆**：抽牌照常消耗抽牌堆；抽牌堆不足时按实际剩余数量抽取。

## 相关卡牌

- [戏梦缥缈间](/cards/character/xi_meng_piao_miao_jian.md)（施加来源）

## 源码

- `SeerXiMengPiaoMiaoJianPower.cs`
