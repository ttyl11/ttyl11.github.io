# 龙胆世无双

<img src="/images/powers/dragon_whisper_unmatched_power.png" alt="龙胆世无双" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **归属**：玩家能力
- **类型**：增益
- **叠加**：单层
- **施加来源**：[赤胆游龙赵云](/relics/epic/chivalrous_dragon_yun.md)（累计 <span style="color:#3aa675;font-weight:600">7</span> 根龙须后获得）
- **可见**: 是

## 描述

自身使用牌不消耗 PP。

## 详细机制

- 只要能力在场，拥有者打出 PP 牌时**不再扣除 PP**；牌本身的费用（能量）照常支付。
- 不是「PP 无限」：牌上的 PP 数值仍在，只是本次打出不扣；离开能力后恢复原来的 PP 规则。
- 获得条件由赤胆游龙赵云控制：自己回合结束时每有 1 项正值属性就 +1 根龙须（力量/防御/命中/速度各算 1），累计 7 根后自动获得，每场战斗限一次。
- 龙须与触发标记在战斗结束时清空，下场战斗重新累计。

## 源码

- `SeerDragonWhisperUnmatchedPower.cs`
- `SeerChivalrousDragonYun.cs`（赤胆游龙赵云）
- `SeerPpCardModel.cs`（PP 扣除判定）
