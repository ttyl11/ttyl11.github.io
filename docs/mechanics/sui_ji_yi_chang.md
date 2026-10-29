# 随机异常（SuiJiYiChang）

**随机异常**是 Seer Mod 的自定义卡牌关键词，施加 X 种随机[异常状态](/mechanics/abnormal-status.md)，持续 Y 回合。

## 基本信息

| 项目 | 说明 |
| --- | --- |
| 类型 | Mod 卡牌关键词（异常施加型） |
| 效果 | 施加 X 种随机异常状态，持续 Y 回合 |
| 适用 | 卡面缩写术语，X/Y 由具体卡牌数值决定 |

## 规则说明

- **随机抽取池（23 种）**：在全部 27 种[异常状态](/mechanics/abnormal-status.md)中，**狂暴、星赐、凝滞、超频 4 种已被硬性排除在随机池外**。随机异常只从剩余的 23 种负面异常中抽取，绝不会随出狂暴（+25% 增伤）、星赐（+10% 增伤与充能）等正面增益，避免给敌人送 Buff 的灾难体验。
- **抽取方式与数量**：抽取 X 种不重复的异常状态，施加给目标各持续 Y 回合。底层统一走权威随机池 `SeerAbnormalStatus.RandomPool` 派生。
- 可抽到[石化](/powers/petrify_power.md)等强控，也可能抽到持续扣血或减伤类异常。
- 例：[魔·黑天暗罚](/fifth-skill/magic_black_sky_punishment.md)的"随机异常 2，2"（从 23 种负面异常中随机 2 种、各持续 2 回合）

## 携带卡牌

- [婵·命定星缘](/fifth-skill/destined_star_bond.md)
- [好女孩](/cards/colorless/good_girl.md)
- [魔·黑天暗罚](/fifth-skill/magic_black_sky_punishment.md)
- [染夜天妖](/cards/character/night_demon.md)
- [曙光普照](/cards/character/shining_light.md)
- [七月的海螺](/cards/character/july_conch.md)
- [十月的唱片](/cards/character/october_record.md)
- [璨灵圣光](/cards/ancient/radiant_holy_light.md)

## 相关词条

- [异常状态](/mechanics/abnormal-status.md) — 随机抽取并施加的状态池
- [混乱](/potions/chaos_potion.md) — 效果相近的药水（4 种随机异常 4 回合）
- [关键词图鉴](/mechanics/keywords.md)

<br />