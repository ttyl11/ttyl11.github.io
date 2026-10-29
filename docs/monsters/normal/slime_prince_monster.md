# 史莱姆王子

<img src="/images/monsters/slime_prince_monster.png" alt="史莱姆王子" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

| 属性 | 数值 |
|---|---|
| 分类 | [普通怪物](/monsters/normal/) |
| 生命值 | <span style="color:#3aa675;font-weight:600">113 - 118</span> |

## 被动能力

无被动能力。闪光漩涡由空间魔法施加，不属于开局被动。

## 行动逻辑

按「空间魔法 → 星火坠 → 空间魔法·星火坠 → 能量震波」四回合一循环。

```mermaid
flowchart TD
    A["第1回合<br/>空间魔法"] --> B["第2回合<br/>星火坠"]
    B --> C["第3回合<br/>空间魔法 + 星火坠"]
    C --> D["第4回合<br/>能量震波"]
    D -->|"循环（第5回合回到空间魔法）"| A
```

> **说明**：第 3 回合的组合招会先施放空间魔法——此时你已有闪光漩涡，所以直接吃 12 点伤害，再吃星火坠。

## 招式表

| 招式 | 意图 | 描述 | 数值 |
|---|---|---|---|
| 空间魔法 | 空间魔法 | 施加闪光漩涡。若已有，造成12点伤害。 | 闪光漩涡 <span style="color:#3aa675;font-weight:600">1</span> 层；已有则 <span style="color:#3aa675;font-weight:600">12</span> 点伤害 |
| 星火坠 | 星火坠 | 造成10点伤害。向你的抽牌堆加入3张黏液？。 | 伤害 <span style="color:#3aa675;font-weight:600">10</span>，黏液？ <span style="color:#3aa675;font-weight:600">3</span> 张 |
| 能量震波 | 能量震波 | 你的全属性-2，先制-1。升级所有黏液？。 | 全属性 <span style="color:#3aa675;font-weight:600">-2</span>，先制 <span style="color:#3aa675;font-weight:600">-1</span> |
| 空间魔法·星火坠 | 空间魔法 + 星火坠 | 第3回合组合招式，依次执行空间魔法与星火坠。 | 同上两项 |

## 相关能力说明

- **闪光漩涡**：每回合结束时，若你的四个牌堆（抽牌/手牌/弃牌/消耗）中有 3 个及以上存在状态牌，累计 1 张"战后惩罚牌"；战斗结束后按累计数向你的牌组加入等量粘液。
- **全属性**：指力量、防御、命中、速度各 -2，能量震波额外施加先制 -1。
- **黏液？**：状态牌，被能量震波升级后会增强。
- **空间魔法的伤害**：已有闪光漩涡时造成的 <span style="color:#3aa675;font-weight:600">12</span> 点伤害属于攻击伤害，可被格挡，受力量/易伤影响，也会触发荆棘、振翅等受击效果。

## 遭遇战

| 遭遇战 | 房间类型 | 池子 | 数量 | 说明 |
|---|---|---|---|---|
| `SeerSlimePrinceWeakEncounter` | Monster | 弱怪池 | <span style="color:#3aa675;font-weight:600">1</span> 只 | 单王子（位置 prince1） |
| `SeerSlimePrinceStrongEncounter` | Monster | 强怪池 | <span style="color:#3aa675;font-weight:600">2</span> 只 | 史莱姆王子 ×1 + 史莱姆 ×1 |
| `SeerSlimePrinceDoubleKingWeakEncounter` | Monster | 弱怪池 | <span style="color:#3aa675;font-weight:600">3</span> 只 | 史莱姆国王 ×1 + 史莱姆王子 ×2 |

## 策略提示

1. **闪光漩涡的潜伏威胁——每满足一次就多一张粘液**：闪光漩涡本身不立即造成伤害，但每回合结束时，若你的四个牌堆（抽牌/手牌/弃牌/消耗）中**有 3 个及以上**存在状态牌，就累计 1 张粘液；战斗结束后按累计数一次性加入牌组，长期污染牌组。星火坠塞的黏液？是状态牌，会满足"抽牌堆有状态牌"的条件。如果你的手牌有状态牌（如原版粘液）、弃牌堆也有状态牌，闪光漩涡就会触发。及时清理状态牌可避免牌组被长期污染。

2. **空间魔法的二段伤害机制**：首次空间魔法施加闪光漩涡（不造成伤害），再次使用空间魔法时（如第 3 回合组合招中的空间魔法）因你已有闪光漩涡而直接造成 <span style="color:#3aa675;font-weight:600">12</span> 点攻击伤害——可被格挡，也吃力量/易伤加成。若不希望被砸，可在其再次行动前清除闪光漩涡。但闪光漩涡是能力类型，难以清除。

3. **能量震波的全属性削弱**：第 <span style="color:#3aa675;font-weight:600">4</span> 回合能量震波使你全属性（力量/防御/命中/速度）各 -<span style="color:#3aa675;font-weight:600">2</span>、先制 -<span style="color:#3aa675;font-weight:600">1</span>，并升级所有黏液？。全属性 -2 会削弱你的输出和防御能力，先制 -1 会让你回合顺位靠后。应在此之前抢血或清理黏液？，避免被削弱后输出能力下降。

4. **黏液？污染抽牌堆**：星火坠每回合向抽牌堆加入 <span style="color:#3aa675;font-weight:600">3</span> 张黏液？，能量震波又会升级它们。3 回合一循环中星火坠出现 2 次（第 2 回合 + 第 3 回合组合招），共塞入 <span style="color:#3aa675;font-weight:600">6</span> 张黏液？。黏液？是状态牌，会堵塞抽牌堆并可能触发闪光漩涡。应及时打出或处理黏液？，避免抽牌堆被堵塞。

5. **四步循环可预判**：史莱姆王子行动序列固定——空间魔法 → 星火坠 → 空间魔法+星火坠（组合招）→ 能量震波。第 3 回合组合招的空间魔法不再施加闪光漩涡，而是因为漩涡已存在直接打 12 点攻击伤害，随后 10 攻击伤害 + 3 黏液？，是威胁最大的回合。第 4 回合能量震波不直接造成伤害但会削弱全属性，是相对安全的输出窗口。

6. **113~118 血需要 2~3 回合击杀**：史莱姆王子血量中等，配合闪光漩涡和黏液？污染，拖延会让牌组越来越差。建议在第 3 回合组合招前集中火力击杀，避免能量震波削弱全属性后输出能力下降。

7. **与史莱姆国王同场的双重威胁**：弱怪池遭遇战是 2 只史莱姆王子 + 1 只史莱姆国王。国王首回合传说结界+国王之怒，王子首回合各自空间魔法施加闪光漩涡。三只同时施压，状态牌会快速堆积触发闪光漩涡/黏液污染机制。优先击杀王子（血量较低），再处理国王。

## 源码

- 怪物：`SeerSlimePrinceMonster.cs`
- 招式相关 Power：`SeerFlashVortexPower.cs`、`SeerDefensePower.cs`、`SeerAccuracyPower.cs`、`SeerSpeedPower.cs`、`SeerFirstStrikePower.cs`、`StrengthPower.cs`
- 卡牌：`SeerSlimeQuest.cs`（黏液？）
- 遭遇战：`SeerSlimePrinceWeakEncounter.cs`、`SeerSlimePrinceStrongEncounter.cs`、`SeerSlimePrinceDoubleKingWeakEncounter.cs`
- 本地化：`monsters.json`（`SEER_MONSTER_SEER_SLIME_PRINCE_MONSTER.*`）、`intents.json`（`SEER_SPACE_MAGIC.*`、`SEER_STAR_FALL.*`、`SEER_ENERGY_SHOCKWAVE.*`）、`powers.json`（`SEER_POWER_SEER_FLASH_VORTEX_POWER.*`、`SEER_POWER_SEER_DEFENSE_POWER.*`、`SEER_POWER_SEER_ACCURACY_POWER.*`、`SEER_POWER_SEER_SPEED_POWER.*`、`SEER_POWER_SEER_FIRST_STRIKE_POWER.*`）
