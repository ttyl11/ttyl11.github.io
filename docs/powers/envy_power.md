# 嫉妒

> **归属**：玩家可施加（当前版本未使用）
> **施加来源**：无

<img src="/images/powers/envy_power.png" alt="嫉妒" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 计数
- **可见**: 是

## 说明

当前版本没有卡牌或遗物施加此能力：诅咒牌[嫉妒](/cards/curse/envy)已改为由卡牌自身结算（每场战斗最多加入 1 张打击或防御）。下面是能力源码保留的旧版逻辑。

## 描述（旧版逻辑）

①在你的回合结束时，若[嫉妒](/cards/curse/envy)在[手牌](/mechanics/hand.md)中，累计计数 +1（每回合最多 +1，多张在手也只算 1 次）。
②战斗结束后，按累计计数随机加入等量的打击或防御（每张独立 50%，加入牌组顶部），随后计数归零。

## 源码

- `SeerEnvyPower.cs`
