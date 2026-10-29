# 四绝天罗

> **归属**：怪物专属（[百罗鬼帝](/monsters/boss/bailuoguidi_monster.md)）
> **类型**：中性（None，不可被消除）
> **叠加方式**：不叠加
> **可见**：是

<img src="/images/powers/four_nets_power.png" alt="四绝天罗" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 描述

①单个回合内，玩家队伍累计消耗超过<span style="color:#3aa675;font-weight:600">4</span>点能量后，每额外消耗<span style="color:#3aa675;font-weight:600">1</span>点能量，百罗鬼帝随机获得<span style="color:#3aa675;font-weight:600">1</span>道<span style="color:#d4a017;font-weight:600">鬼祰</span>（当前<span style="color:#3aa675;font-weight:600">0</span>/<span style="color:#3aa675;font-weight:600">4</span>）。<br/>②玩家队伍累计打出<span style="color:#3aa675;font-weight:600">44</span>张卡牌时，立即结束当前玩家回合，并展开<span style="color:#3aa675;font-weight:600">4</span>回合<span style="color:#d4a017;font-weight:600">四杀鬼囹</span>（当前<span style="color:#3aa675;font-weight:600">0</span>/<span style="color:#3aa675;font-weight:600">44</span>）。<br/>③本场战斗进行<span style="color:#3aa675;font-weight:600">444</span>秒时，百罗鬼帝在自身回合开始时消灭全体敌人（当前<span style="color:#3aa675;font-weight:600">0</span>/<span style="color:#3aa675;font-weight:600">444</span>秒）。<br/>④百罗鬼帝已损失生命达到<span style="color:#3aa675;font-weight:600">4444</span>点时，在自身回合结束时彻底湮灭（当前<span style="color:#3aa675;font-weight:600">0</span>/<span style="color:#3aa675;font-weight:600">4444</span>）。

## 详细机制

- **能量税**：每回合最多 4 点能量是安全线，超出部分每点送 1 道鬼祰。
- **44 张牌硬上限**：全队累计出牌数达到 44 立即触发四杀鬼囹，不可重置、不可规避。
- **444 秒现实死线**：战斗进行到 444 秒，它回合开始直接消灭全体。
- **4444 击杀线**：无限生命不会被打空，累计损失生命达到 4444 并在它回合结束仍保持，才会自灭；回血会把进度拉回。

## 相关能力

- [鬼祰·魑](/powers/ghost_net_chi_power.md)、[鬼祰·魅](/powers/ghost_net_mei_power.md)、[鬼祰·魍](/powers/ghost_net_wang_power.md)、[鬼祰·魉](/powers/ghost_net_liang_power.md)
- [四杀鬼囹](/powers/ghost_prison_power.md)

## 源码

- `SeerFourNetsPower.cs`
