# 色欲

<img src="/images/cards/lust.png" alt="色欲" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 诅咒牌
- **能量消耗**: 4
- **类型**: 诅咒
- **稀有度**: 诅咒
- **关键词**: [永恒](/mechanics/eternal.md)、[薇](/mechanics/vigil.md)
- **可升级**: 否

### 数值参数

| 参数 | 数值 |
|---|---|
| 随机异常施加次数 | 4 |
| 每个异常层数 | 4 |

## 描述

自身[随机异常](/mechanics/abnormal-status.md)：施加 <span style="color:#3aa675;font-weight:600">4</span> 个随机[异常状态](/mechanics/abnormal-status.md)，各 <span style="color:#3aa675;font-weight:600">4</span> 层。

## 小贴士

- **它是"手牌位置的雷区"**：带[薇](/mechanics/vigil.md)——只要你在它旁边打出一张非薇牌，它就自动打出（不耗能量），往你身上挂 <span style="color:#3aa675;font-weight:600">4</span> 个随机异常、各 4 层。也就是说，**在它旁边出牌 = 免费给自己上 4 个 debuff**。
- **4 费主动打出几乎只为"排雷"**：正常没人愿意花 4 费自罚；主动打它，多半是为了把它从手牌挪进弃牌堆、让它离开薇的位置、不再连锁触发。
- **随机的方差极大**：4 个异常完全随机，而且**可能重复**——同一异常被抽中两次会直接叠加层数；可能只是轻度减伤，也可能抽到[石化](/mechanics/abnormal-status.md)、[臣服](/mechanics/abnormal-status.md)这类 4 层的重伤，直接影响你接下来的输出节奏。
- **手牌管理是关键**：薇只看相邻位置，**尽量把它留在手牌首 / 末位**（只有一侧有邻居）能减少触发面；有弃牌类效果时优先把它丢掉。
- **永恒=甩不掉**：不能删、不能变，每场随洗牌循环回来——这是长期要背的包袱。
- **性价比**：4 费不是为"主动打出"定的价，而是限制薇连锁的频率感；真实成本写在"4 个随机异常 × 各 4 层"里。**把它当位置雷区规避，别当主动牌用**。

## 相关机制

- [手牌](/mechanics/hand.md)（薇按相邻位置判定）
- [薇](/mechanics/vigil.md)（相邻牌打出时自动打出）
- [异常状态](/mechanics/abnormal-status.md)（随机施加的对象）
- [永恒](/mechanics/eternal.md)（不能删除、不能变化）

## 源码

- `SeerLust.cs`