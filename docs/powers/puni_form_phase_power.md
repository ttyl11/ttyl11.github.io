# 秩段档位

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[谱尼](/monsters/boss/puni_monster.md)

<img src="/images/powers/puni_form_phase_power.png" alt="秩段档位" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 无类型（不参与增益/减益分类，不可被驱散/净化）
- **叠加方式**: 叠加
- **可见**: 否（后台静默运行，不显示图标）

## 描述

①谱尼当前秩段档位（<span style="color:#3aa675;font-weight:600">0</span>-<span style="color:#3aa675;font-weight:600">6</span>为七形态，<span style="color:#3aa675;font-weight:600">7</span>为最终阶段）。<br/>②每次切换时，最大生命值提高当前上限的<span style="color:#3aa675;font-weight:600">27%</span>。

## 详细机制

- **纯后台计数**：0～6 对应七个形态，7 为最终阶段；能力隐藏，不显示图标。
- **切换加血**：每次进入下一档位，最大生命按当前上限的 27% 提高。
- **到 7 解除免死**：只有档位达到 7（最终阶段），谱尼才允许真正死亡。
- **不会被净化**：中性能力，清除增益/减益的效果都动不了它。

## 源码

- `SeerPuniFormPhasePower.cs`
