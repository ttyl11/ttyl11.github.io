# 异变

> mod 关键词（SEER_KEYWORD_ABERRATION）

## 基本信息

- **类型**: mod 卡牌关键词
- **来源**: mod 自定义关键词

## 描述

打出时，对自己施加随机 <span style="color:#3aa675;font-weight:600">1</span> 种[异常状态](/mechanics/abnormal-status.md)，持续 <span style="color:#3aa675;font-weight:600">2</span> 回合。

## 详细机制

- **触发时机**：在卡牌打出后触发。
- **异常状态池**：从 23 种随机异常状态中选取一种（排除狂暴、星赐、凝滞、超频）。
- **随机选取**：随机选取一种异常状态，多人模式下两端结果一致。
- **施加层数**：持续 <span style="color:#3aa675;font-weight:600">2</span> 回合。
- **目标**：对自己施加。

## 相关机制

- [异常状态](/mechanics/abnormal-status.md)（27 种权威异常状态，其中 23 种进入随机池）

## 源码

- `SeerKeywordEffectManager.cs`
- `SeerKeywordCardModel.cs`
- `card_keywords.json`（本地化）
