***

## title: 溯引（SuYin）

# 溯引（SuYin）

**溯引**是赛尔（Seer）职业独有的稀有关键词，控制带有此关键词的牌在被抽到时的行为。

## 规则说明

| 项目    | 说明                                                                          |
| ----- | --------------------------------------------------------------------------- |
| 适用范围  | 仅赛尔角色牌（Pp 牌与无色牌均可携带）                                                        |
| 触发时机  | **抽到此牌时立即触发**（包括回合开始手牌抽牌、效果抽牌等所有抽牌来源）                                       |
| 效果    | 由该卡牌重写 `OnSuYinTriggered()` 定义具体效果；无重写的卡牌此关键词仅作为标记，不产生额外效果                  |
| 关键词类型 | **触发型关键词**（`ModKeywordCardDescriptionPlacement.None`），不在描述文字中显示，但会出现在关键词标注中 |
| 与消耗关系 | 溯引触发发生在**抽到瞬间**，早于打出；一张牌可以同时带溯引和消耗，抽到即触发溯引效果，打出才消耗                          |

**典型流程：**

1. **抽到**：卡牌从抽牌堆被抽取到手牌的瞬间，`SeerKeywordEffectManager.AfterCardDrawn` 检测到该牌带有溯引关键词，立即调用 `OnSuYinTriggered`。
2. **效果结算**：由卡牌自定义逻辑执行（如生成充能球、抽牌、加能量等）。
3. **进入手牌**：触发完成后，该牌正常进入手牌，等待玩家打出。

## 代码实现

```csharp
// SeerKeywordEffectManager.cs — 溯引统一触发入口
public override async Task AfterCardDrawn(PlayerChoiceContext choiceContext, CardModel card, bool fromHandDraw)
{
    if (card == null || card.Owner == null) return;
    if (!ModKeywordRegistry.TryGetCardKeyword(SeerKeywords.SuYin, out var syKw) || !card.Keywords.Contains(syKw))
        return;
    if (card is SeerPpCardModel syCard)
        await syCard.OnSuYinTriggered(choiceContext, fromHandDraw);
    else if (card is SeerColorlessCardBase syClCard)
        await syClCard.OnSuYinTriggered(choiceContext, fromHandDraw);
}
```

```csharp
// SeerHolyGrail.cs — 溯引的具体效果实现
public override async Task OnSuYinTriggered(PlayerChoiceContext choiceContext, bool fromHandDraw)
{
    if (Owner != null)
        await OrbCmd.Channel<SeerHolyGrailOrb>(choiceContext, Owner);
}
```

关键细节：

- 溯引是**纯触发型关键词**，描述文本中不显示（`CardDescriptionPlacement = None`），只在关键词列表中可见

- 触发时机在**抽牌阶段**，不受是否在手牌中打出影响——即使这张牌留在手牌不打，溯引效果也已结算

- 与**迁鸣**（牌堆变化时触发）的区别：溯引仅响应"被抽到手牌"这一动作，迁鸣响应更广泛的牌堆状态变更（洗牌、抽牌堆顶变化等）

## 带溯引的卡牌

- [圣杯](/cards/colorless/holy_grail.md)：抽到此牌时生成 1 个圣杯充能球（[源码](https://github.com/...) SeerHolyGrail.cs）

## 与类似机制的区别

| 机制               | 区别                                              |
| ---------------- | ----------------------------------------------- |
| **迁鸣（QianMing）** | 迁鸣在牌堆**任何变化**时触发（包括抽牌、洗牌、弃牌等）；溯引仅在**抽到此牌时**触发一次 |
| **固有（Innate）**   | 固有让牌每场战斗开始时出现在手牌；溯引是抽到时的即时效果，不涉及入场时机            |
| **消耗（Exhaust）**  | 消耗是打出后离场；溯引是抽到时触发效果，打出后正常消耗                     |
| **回响（Echo）**     | 回响每回合开始时从任意位置加入手牌；溯引是一次性抽到触发，无重复机制              |

## 相关词条

- \[\[迁鸣|迁鸣（QianMing）]] — 牌堆变化时触发的关键词

- \[\[消耗|消耗（Exhaust）]] — 打出后离场的关键词

- \[\[圣杯|圣杯]] — 唯一带溯引的无色牌

<br />
