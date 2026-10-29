# 第四幕与第五幕

Seer Mod 在原版三幕流程之后追加了**第四幕「星海尽头」**与**第五幕「终焉之门」**，一局游戏自动从三幕变五幕，不需要额外解锁或设置。

## 幕位置与地图规模

| 项目 | 第四幕 | 第五幕 | 原版第三幕（参照） |
| --- | --- | --- | --- |
| 幕序号 | 第 4 幕（Act 3） | 第 5 幕（Act 4） | 第 3 幕（Act 2） |
| 默认进入 | 是 | 是 | 是 |
| 房间数 | <span style="color:#3aa675;font-weight:600">13</span> | <span style="color:#3aa675;font-weight:600">13</span> | <span style="color:#3aa675;font-weight:600">13</span> |
| 弱怪房间 | <span style="color:#3aa675;font-weight:600">2</span> | <span style="color:#3aa675;font-weight:600">2</span> | <span style="color:#3aa675;font-weight:600">2</span> |
| 休息处 | <span style="color:#3aa675;font-weight:600">5~6</span> | <span style="color:#3aa675;font-weight:600">5~6</span> | <span style="color:#3aa675;font-weight:600">5~6</span> |

两幕都是默认幕，并进入一局的随机幕列表；单人默认顺序固定为「第一幕 → 第二幕 → 第三幕 → 第四幕 → 第五幕」。

## Boss 池

| 幕 | Boss 数量 | 成员 |
| --- | --- | --- |
| 第四幕 | <span style="color:#3aa675;font-weight:600">5</span> | [机械王·马尔修斯](/monsters/boss/maerxiusi_monster)、[不灭·艾恩斯](/monsters/boss/bumie_ai_en_si_monster)、[圣光斯嘉丽](/monsters/boss/holy_light_scarlett_boss_monster)、[冥契·格斯塔丝](/monsters/boss/mingqi_gesitasi_monster)、[不羁·弗里德](/monsters/boss/bujifulide_monster) |
| 第五幕 | <span style="color:#3aa675;font-weight:600">4</span> | [混沌·千夜死神](/monsters/boss/hundun_qian_ye_si_shen_monster)、[孤烛灯使](/monsters/boss/guzhudengshi_monster)、[莫塔里安](/monsters/boss/motalian_monster)、[百罗鬼帝](/monsters/boss/bailuoguidi_monster) |

两幕的 Boss 房只从本幕 Boss 池抽取，低层赛尔 Boss 与原版 Boss 都不会进入。

::: tip 多 Boss 规则与进阶模式对应
第四、五幕的首领战完全遵从[进阶挑战体系](/mechanics/ascension)的规则演进：
- **A0 ~ A18**：第四、五幕每幕挑战 <span style="color:#3aa675;font-weight:600">1</span> 个 Boss（注：A10 官方原版双 Boss 仅在第 3 幕生效）。
- **A19 ~ A28**：受【双影双生】影响，第四、五幕与前三幕一致，必须连续挑战 <span style="color:#3aa675;font-weight:600">2</span> 个 Boss。
- **A29 ~ A30**：受【三界归寂】影响，全 5 幕均必须连续挑战 <span style="color:#3aa675;font-weight:600">3</span> 个 Boss，第三个 Boss 从本幕 Boss 池补抽。
:::

## 普通与精英遭遇池

第四、五幕的普通房与精英房共用同一套池子：把第 1/2/3 层的赛尔普通、精英遭遇混在一起随机，**不混入任何原版遭遇**。

| 来源幕 | 普通遭遇 | 精英遭遇 | 合计 |
| --- | --- | --- | --- |
| 第一层（密林 / 暗港） | <span style="color:#3aa675;font-weight:600">19</span> | <span style="color:#3aa675;font-weight:600">4</span> | <span style="color:#3aa675;font-weight:600">23</span> |
| 第二层（巢穴） | <span style="color:#3aa675;font-weight:600">22</span> | <span style="color:#3aa675;font-weight:600">4</span> | <span style="color:#3aa675;font-weight:600">26</span> |
| 第三层（荣耀） | <span style="color:#3aa675;font-weight:600">20</span> | <span style="color:#3aa675;font-weight:600">5</span> | <span style="color:#3aa675;font-weight:600">25</span> |
| **合计** | <span style="color:#3aa675;font-weight:600">61</span> | <span style="color:#3aa675;font-weight:600">13</span> | <span style="color:#3aa675;font-weight:600">74</span> |

低层 Boss 不会进入这两幕的普通 / 精英池。

## 出身幕缩放

第四、五幕的敌人会按「它原本来自第几层」获得永久强化，避免低层怪在高层白给：

| 出身幕 | 第四幕强化数值 | 第五幕强化数值 |
| --- | --- | --- |
| **第一层出身** | 最大生命 <span style="color:#3aa675;font-weight:600">×10</span><br>减伤 <span style="color:#3aa675;font-weight:600">50%</span> / 增伤 <span style="color:#3aa675;font-weight:600">400%</span> | 最大生命 <span style="color:#3aa675;font-weight:600">×15</span><br>减伤 <span style="color:#3aa675;font-weight:600">55%</span> / 增伤 <span style="color:#3aa675;font-weight:600">500%</span> |
| **第二层出身** | 最大生命 <span style="color:#3aa675;font-weight:600">×6</span><br>减伤 <span style="color:#3aa675;font-weight:600">40%</span> / 增伤 <span style="color:#3aa675;font-weight:600">200%</span> | 最大生命 <span style="color:#3aa675;font-weight:600">×9</span><br>减伤 <span style="color:#3aa675;font-weight:600">45%</span> / 增伤 <span style="color:#3aa675;font-weight:600">300%</span> |
| **第三层出身** | 最大生命 <span style="color:#3aa675;font-weight:600">×2</span><br>减伤 <span style="color:#3aa675;font-weight:600">30%</span> / 增伤 <span style="color:#3aa675;font-weight:600">100%</span> | 最大生命 <span style="color:#3aa675;font-weight:600">×3</span><br>减伤 <span style="color:#3aa675;font-weight:600">35%</span> / 增伤 <span style="color:#3aa675;font-weight:600">150%</span> |

- **生命倍率计算时机**：生命倍率在敌人创建时直接相乘生效，早于所有「战斗开始时造成伤害」的遗物，不会出现先被开局伤害打一套、再按比例加血的情况。
- **减伤与增伤属性挂载**：通过 `SeerPermanentDamageReductionPower` 与 `SeerPermanentDamageBoostPower` 动态挂载，按百分比永久生效，战斗结束自动清除，不会跨战斗叠加。
- **作用边界**：**仅对第四、五幕的普通怪与精英怪生效**；低层 Boss、第四/五幕原生 Boss 与子地图活动内的所有战斗不享受出身幕缩放。
- 不在这套三幕注册表里的遭遇（原版遭遇、子地图专属遭遇）不进行缩放。

::: danger 进阶 30【终焉突袭】高危警告
在 **进阶 30（A30）** 难度下，踏入第四幕与第五幕后，**所有遭遇战的第 1 回合行动权均被怪物强制定为先手！** 结合上述高额增伤数值，第一回合对玩家开局被动防御、血量上限与减伤手段构成毁灭级考验。
:::

## 事件与先古

| 项目 | 第四幕 | 第五幕 |
| --- | --- | --- |
| 原版事件 | 原版四幕全部事件（幕内 <span style="color:#3aa675;font-weight:600">39</span> + 共享 <span style="color:#3aa675;font-weight:600">18</span>） | 同左 |
| 赛尔事件 | <span style="color:#3aa675;font-weight:600">30</span> 个（除特殊事件与有条件事件） | 同左 |
| 特殊 / 有条件事件 | 不进 | 不进 |
| 先古之民 | [圣光灵神](/mechanics/ancients) | [重生之翼](/mechanics/ancients) |

第四、五幕的事件池 = **原版四幕全部事件 + 除特殊/有条件事件外的全部赛尔事件**。赛尔豆商店、泰坦之灵商店与志旭之战属于特殊事件，[！？商店？！](/events/weird_shop) 需要全员金币 ≥ 50，这 4 个都不进第四、五幕；其余 30 个赛尔事件（含原本限定第一/二/三幕的）在四、五幕都会出现。

先古之民各只有 1 位：第四幕为圣光灵神，第五幕为重生之翼，均提供「传说遗物 + 泰坦之灵 + 随机刻印」的馈赠选项。

## 美术与音乐

| 项目 | 第四幕 | 第五幕 |
| --- | --- | --- |
| 战斗背景 | 自建「星海尽头」 | 自建「终焉之门」 |
| 休息处背景 | 自建 | 自建 |
| 地图三层底图 | 借原版第三幕 | 借原版第三幕 |
| 宝箱骨骼 | 借原版第三幕 | 借原版第三幕 |
| 章节 BGM | 借原版第三幕 | 借原版第三幕 |
| 战斗 BGM | 赛尔专属战斗曲 | 赛尔专属战斗曲 |

战斗 BGM 由赛尔怪物触发：只要战斗中有任意一只是赛尔怪物，就会随机播放一首赛尔战斗曲，与原版曲目不叠加。

## 策略提示

1. **第四、五幕的难度核心来自出身幕缩放**：遭遇池中虽是前三层的怪物，但第一层出身怪在第五幕拥有高达 **生命 ×15、减伤 55%、增伤 500%** 的恐怖数值。遇到第一层小怪群（如皮皮、闪光皮皮等）切勿掉以轻心。
2. **减伤机制使得固定伤害与异常状态价值骤增**：50%~55% 的常驻减伤对直接攻击伤害压制极强，而固定伤害、中毒/烧伤/焚烬等不吃伤害减免的百分比/真实伤害机制，是攻克第四、五幕最稳定的利器。
3. **第三层出身怪物数值模型相对平缓**：第三层出身怪物在第四幕仅 ×2 生命 / 30% 减伤 / 100% 增伤，在第五幕仅 ×3 生命 / 35% 减伤 / 150% 增伤；爆发流卡组面对第三层怪物的窗口期更加宽裕。
4. **单体 Boss 与多首领轮战**：第四、五幕共 9 位 Boss 全部为纯粹单体，无杂兵干扰；在 A19（双 Boss）与 A29（三 Boss）下，必须连续承受多位机制完全不同的高阶单体首领的高频轰击。
5. **幕首先古补给弥足珍贵**：第四、五幕每幕仅有一位先古且仅在开幕登场，高阶进阶下先古恢复受限（A24 仅恢复已损生命的 50%），必须合理规划火堆与血量管理。

## 源码

- `SeerActFour.cs`
- `SeerActFive.cs`
- `SeerLateActPools.cs`
- `SeerLateActScaling.cs`
- `SeerLateActAncients.cs`
- `SeerMultiBossManager.cs`
- `SeerBattleMusicPatch.cs`
