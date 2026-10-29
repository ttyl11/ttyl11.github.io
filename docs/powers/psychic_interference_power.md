# 精神干涉

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[提亚斯](/monsters/elite/tias_monster.md)

<img src="/images/powers/psychic_interference_power.png" alt="精神干涉" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 无类型（不参与增益/减益分类，不可被驱散/净化）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

在你方回合开始时，你方所有角色的<span style="color:#d4a017;font-weight:600">命中</span>与<span style="color:#d4a017;font-weight:600">速度</span>各-<span style="color:#3aa675;font-weight:600">2</span>。

## 详细机制

- **每回合都触发**：每个玩家回合开始时，对玩家方所有角色各施加命中 −2、速度 −2。
- **永久叠加**：减属性不会随回合恢复，回合越多越弱——第 3 回合就是 −6 命中/速度。
- **只削玩家方**：提亚斯自己与友军不受影响。
- **可被免弱/属性下降免疫挡下**：免弱类能力可以拦住这笔减属性。

## 小贴士

- **速战速决**：拖得越久命中/速度掉得越狠，爆发窗口要提前规划。
- **带免弱**：永久免控/免弱能完全无视它，是打提亚斯的关键防御件。

## 源码

- `SeerPsychicInterferencePower.cs`
