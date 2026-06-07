# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

Media Format Conversion Toolbox 是三个本地媒体转换工具的聚合导航页，纯静态 HTML 单文件，无构建工具、无依赖。

## 父子关系

三个子项目通过 `../` 相对路径引用：

```
CC/
├── Media Format Conversion Toolbox/  ← 当前目录（导航聚合页）
├── 2/Image format conversion/       ← 图片转换（Canvas 引擎）
├── Audio format conversion/         ← 音频转换（ffmpeg.wasm）
└── Video-format-conversion/         ← 视频转换（ffmpeg.wasm）
```

工具箱页面通过 `<a href="...">` 链接到三个子项目的 `index.html`，底部链接指向图片转换项目的 `privacy.html`、`terms.html`、`about.html`。

## 共享设计系统

三个子项目和工具箱共享同一套 CSS 变量规范和交互模式。修改工具箱样式时需保持一致：

- `clip-path: var(--clip-angle)` — 切角边框，全局使用
- `data-theme="dark|light"` — 明暗主题，存在完整的 `:root` 和 `[data-theme="light"]` 两套变量
- `data-accent="cyan|magenta"` — 霓虹配色，切换 `--accent` 系列变量和背景网格颜色
- localStorage key 前缀 `imgshift-*`（`imgshift-theme`、`imgshift-accent`、`imgshift-lang`），跨子项目共享

### 工具箱自有 CSS 变量

工具箱在子项目变量基础之上增加了三种工具卡专用色：

```css
--cyan: #00f0ff;     /* 图片转换 */
--magenta: #f72585;  /* 音频转换 */
--gold: #ffb800;     /* 视频转换 */
```

工具卡顶部色条和 hover 光晕按 `.tool-card.image` / `.audio` / `.video` 分别使用对应色。

## i18n

i18n 以内联 `<script>` 形式写在 `index.html` 底部（不拆独立文件）。结构：

```js
const I18N = {
  current: 'zh-CN',
  supported: [ /* 5 种语言 */ ],
  dict: { 'key': { 'zh-CN': '...', 'en': '...', ... } },
  // ...
};
```

与子项目一样使用 `data-i18n`、`data-i18n-html`、`data-i18n-title` 属性标记可翻译节点。修改页面内容需同步更新 `I18N.dict` 中对应键的所有 5 种语言。
