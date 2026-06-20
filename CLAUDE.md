# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

Media Format Conversion 是一个导航聚合页，聚合了 image/、audio/、video/ 三个本地媒体转换工具。纯静态 HTML，无构建工具、无依赖。

## 目录结构

三个子项目作为 gitlink 嵌入在当前仓库的子目录中：

```
Media Format Conversion/            ← 当前目录（导航聚合页）
├── image/                          ← 图片转换（Canvas 引擎，独立 git repo）
├── audio/                          ← 音频转换（ffmpeg.wasm，独立 git repo）
└── video/                          ← 视频转换（ffmpeg.wasm，独立 git repo）
```

导航页通过 `<a href="image/index.html">`/`audio/index.html`/`video/index.html` 链接到三个子项目。底部链接指向本仓库根目录的 `privacy.html`、`terms.html`、`about.html`。

## 设计系统

导航页的 CSS 变量和交互模式：

- `clip-path: var(--clip-angle)` — 切角边框，全局使用
- `data-theme="dark|light"` — 明暗主题，`:root` 和 `[data-theme="light"]` 两套变量
- `data-accent="cyan|magenta"` — 霓虹配色切换（仅 cyan/magenta 两档，无 gold）
- localStorage key 前缀 `imgshift-*`（`imgshift-theme`、`imgshift-accent`、`imgshift-lang`、`imgshift-cookie-consent`），跨子项目共享

### 工具卡配色变量

```css
--cyan: #00f0ff;     /* 图片转换 */
--magenta: #f72585;  /* 音频转换 */
--gold: #ffb800;     /* 视频转换 */
```

工具卡顶部色条和 hover 光晕按 `.tool-card.image` / `.audio` / `.video` 分别使用对应色。

## i18n

i18n 以内联 `<script>` 形式写在 `index.html` 底部。结构：

```js
const I18N = {
  current: 'zh-CN',
  supported: [ /* 5 种语言 */ ],
  dict: { 'key': { 'zh-CN': '...', 'en': '...', ... } },
  // ...
};
```

使用 `data-i18n`、`data-i18n-html`、`data-i18n-title` 属性标记可翻译节点。修改页面内容需同步更新 `I18N.dict` 中对应键的所有 5 种语言。
