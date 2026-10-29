# 元神启动

> **归属**：玩家可施加
> **施加来源**：玩家获得——[元神启动](/cards/colorless/spirit_activation.md)（卡牌，施加 2 层）

<img src="/images/powers/spirit_activation_power.png" alt="元神启动" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 计数（层数 = 每回合生成的神谕球数）
- **可见**: 是

## 描述

在你的回合开始时，获得一个<span style="color:#d4a017;font-weight:600">神谕充能球</span>。

> 悬浮提示固定写"获得一个"，实际按层数结算，以 2 个为准。

## 详细机制

- **触发时机**：`BeforeSideTurnStart`，只在持有者所属阵营的回合开始时；早于当回合抽牌，也早于场上充能球的被动触发。
- **生成数量**：取层数的整数部分，层数不足 1 时按 1 个生成。
- **球位已满**：每次生成前先激发队首球腾位，被激发的不一定是神谕球。
- **当回合生效**：本回合新生成的神谕球会在随后的充能球被动阶段正常触发一次。

## 源码

- `SeerSpiritActivationPower.cs`
