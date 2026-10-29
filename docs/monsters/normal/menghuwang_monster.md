# 猛虎王

<img src="/images/monsters/menghuwang_monster.png" alt="猛虎王" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

| 属性 | 数值 |
|---|---|
| 分类 | [普通怪物](/monsters/normal/) |
| 生命值 | <span style="color:#3aa675;font-weight:600">188 - 191</span> |
| 被动能力 | [百兽之王](#被动能力)（<span style="color:#3aa675;font-weight:600">1</span> 层） |

## 行动逻辑

开局前两个回合连续使用「虎牙瞬迅击」，第 3 回合使用「勇猛」，之后无限连爪与勇猛交替（第 4 回合连爪、第 5 回合勇猛、第 6 回合连爪……）。

```mermaid
flowchart TD
    A([第1回合]) --> B["虎牙瞬迅击"]
    B -->|"第2回合"| B2["虎牙瞬迅击"]
    B2 -->|"第3回合"| C["勇猛"]
    C -->|"第4回合起"| D{"当前回合是奇数还是偶数?"}
    D -->|"偶数回合（第4、6…）"| E["无限连爪"]
    D -->|"奇数回合（第5、7…）"| F["勇猛"]
    E --> D
    F --> D
```

> **说明**：虎牙瞬迅击只在前两回合出现；第 3 回合起勇猛与无限连爪交替，勇猛永远落在奇数回合。

## 招式表

| 招式 | 意图 | 描述 | 数值 |
|---|---|---|---|
| 虎牙瞬迅击 | 虎牙瞬迅击 | 自身**先制**+1，**速度**+1，造成<span style="color:#3aa675;font-weight:600">32</span>点伤害。 | 伤害 <span style="color:#3aa675;font-weight:600">32</span>，先制 <span style="color:#3aa675;font-weight:600">1</span>，速度 <span style="color:#3aa675;font-weight:600">1</span> |
| 勇猛 | 勇猛 | 回复全部生命值，复制并清除你的全属性提升。 | 全属性=力量/防御/命中/速度 |
| 无限连爪 | 无限连爪 | 造成<span style="color:#3aa675;font-weight:600">2</span>点伤害20次。 | 伤害 <span style="color:#3aa675;font-weight:600">2</span>，命中 <span style="color:#3aa675;font-weight:600">20</span> 次（总伤 <span style="color:#3aa675;font-weight:600">40</span>） |

## 被动能力

### 百兽之王（1 层）

战斗开始时，猛虎王对自身施加 <span style="color:#3aa675;font-weight:600">1</span> 层"百兽之王"标记，并对所有玩家施加 <span style="color:#3aa675;font-weight:600">4</span> 层[臣服](#臣服)与 <span style="color:#3aa675;font-weight:600">4</span> 层[害怕](#害怕)。

- **百兽之王**：增益，标记型能力，本身无触发逻辑。战斗开始时使敌人臣服并害怕 4 回合——该效果在加入房间时直接施加。
- **臣服（4 层，施加给玩家）**：攻击伤害降低 <span style="color:#3aa675;font-weight:600">70%</span>，玩家回合结束时减少 1 层；被移除时若拥有者为玩家，获得 <span style="color:#3aa675;font-weight:600">2</span> 张随从牌（随机来自随从打击/随从献祭/随从俯冲轰炸，本回合免费）。
- **害怕（4 层，施加给玩家）**：攻击伤害降低 <span style="color:#3aa675;font-weight:600">30%</span>，玩家回合结束时减少 1 层。
- **威胁**：开局前 <span style="color:#3aa675;font-weight:600">4</span> 回合玩家攻击伤害被严重削弱（臣服与害怕同时存在时叠加降至约 <span style="color:#3aa675;font-weight:600">21%</span> 原伤害），而猛虎王同时连续释放 <span style="color:#3aa675;font-weight:600">32</span> 伤害的虎牙瞬迅击，配合先制+1、速度+1进一步压制。

## 遭遇战

| 遭遇战 | 房间类型 | 池子 | 数量 | 同场怪物 | 说明 |
|---|---|---|---|---|---|
| `SeerMenghuwangStrongEncounter` | Monster | 强怪池 | <span style="color:#3aa675;font-weight:600">1</span> 只 | — | — |

## 策略提示

1. **开局双压制——虎牙瞬迅击 + 臣服/害怕**：前两回合连续使用「虎牙瞬迅击」（<span style="color:#3aa675;font-weight:600">32</span> 点攻击伤害 + 先制 +1 + 速度 +1），同时被动百兽之王开局对所有玩家施加 <span style="color:#3aa675;font-weight:600">4</span> 层[臣服](#臣服)（攻击伤害 -70%）+ <span style="color:#3aa675;font-weight:600">4</span> 层[害怕](#害怕)（攻击伤害 -30%）。两层叠加后你的攻击伤害仅剩约 <span style="color:#3aa675;font-weight:600">21%</span> 原伤害——32 伤害的虎牙瞬迅击打你只被你反击约 7 点。而猛虎王同时输出 32 伤害 × 2 回合 = 64 伤害。开局几乎无法有效反击，必须用护盾、固定伤害或解 debuff 卡牌应对。

2. **臣服的随从牌补偿机制**：臣服 4 层全部消退时（第 4 个回合结束时），若拥有者为玩家，会获得 <span style="color:#3aa675;font-weight:600">2</span> 张随从牌（随机来自随从打击/随从献祭/随从俯冲轰炸，本回合免费）。利用这些随从牌可以在臣服消退后快速反击。

3. **勇猛反制属性流——回满生命并复制清除全属性提升**：第 3 回合及之后的奇数回合使用「勇猛」，先回复全部生命值，再复制并清除你的全属性提升（力量/防御/命中/速度全部正向层数转移至猛虎王）。叠属性流派要避免在勇猛回合前过度堆叠——你叠的力量/防御/命中/速度会被猛虎王全部偷走，同时它还会回满血。建议在勇猛回合前用完属性增益，或在勇猛回合后叠属性。

4. **无限连爪怕护盾和荆棘**：单次仅 <span style="color:#3aa675;font-weight:600">2</span> 伤害但命中 <span style="color:#3aa675;font-weight:600">20</span> 次（总伤 <span style="color:#3aa675;font-weight:600">40</span>），每次独立触发荆棘反伤和护盾。荆棘流应对极佳——3 层荆棘 × 20 次 = 60 点反伤，几乎能反杀猛虎王。护盾也能完全抵挡每次 2 点的小伤害。但注意猛虎王可能通过勇猛偷走你的防御，降低护盾效率。

5. **循环节奏可预判**：前 2 回合虎牙瞬迅击，第 3 回合勇猛，之后第 4 回合无限连爪、第 5 回合勇猛、第 6 回合无限连爪……即**偶数回合连爪、奇数回合勇猛**。虎牙瞬迅击回合需准备 <span style="color:#3aa675;font-weight:600">32</span> 格挡，无限连爪回合需准备 <span style="color:#3aa675;font-weight:600">40</span> 格挡或荆棘反伤。勇猛回合猛虎王不直接造成伤害，是相对安全的输出窗口——但你的正向属性会被偷走，且它会回满生命。

6. **188~191 血是高血量普通怪**：猛虎王血量在普通怪物中偏高，配合臣服/害怕削弱前 4 回合输出，实际击杀需要 5 回合以上。建议前两回合以防御为主（格挡虎牙瞬迅击的 32 伤害），等臣服/害怕消退后再爆发输出。固定伤害/流失伤害不受臣服/害怕影响（它们只削弱攻击伤害），是前 4 回合的有效输出手段。

7. **先制和速度持续增长**：虎牙瞬迅击每次 +1 先制 +1 速度。前 2 回合后猛虎王先制 +2、速度 +2，回合顺位靠前且可能影响你的出牌节奏。但第 3 回合起猛虎王不再使用虎牙瞬迅击，先制和速度不再增长。

## 源码

- 怪物：`SeerMenghuwangMonster.cs`
- 被动能力：`SeerBeastKingPower.cs`、`SeerSubjugationPower.cs`、`SeerFearPower.cs`、`SeerFirstStrikePower.cs`、`SeerSpeedPower.cs`
- 遭遇战：`SeerMenghuwangStrongEncounter.cs`
- 本地化：`monsters.json`（`SEER_MONSTER_SEER_MENGHUWANG_MONSTER.*`）、`intents.json`（`SEER_INFINITE_CLAW.*`、`SEER_BRAVERY.*`、`SEER_TIGER_FANG.*`）、`powers.json`（`SEER_POWER_SEER_BEAST_KING_POWER.*`、`SEER_POWER_SEER_SUBJUGATION_POWER.*`、`SEER_POWER_SEER_FEAR_POWER.*`、`SEER_POWER_SEER_FIRST_STRIKE_POWER.*`、`SEER_POWER_SEER_SPEED_POWER.*`）
