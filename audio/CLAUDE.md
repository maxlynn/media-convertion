# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

纯浏览器端音频批量格式转换工具 — 所有处理在本地完成，文件不上传服务器。纯静态页面，无构建工具、无 package.json。

## 核心架构

### 转换引擎 (index.html)

- **`CDN` 对象** (~line 610): 按需懒加载外部库 (`ffmpeg.wasm`, `JSZip`)，首次调用时动态注入 `<script>` 标签
- **`ensureEngine()`** (~line 774): 获取 ffmpeg.wasm 实例，首次调用需下载约 30MB WebAssembly 文件
- **`convertAudio(file, engine, opts)`** (~line 837): 核心转换逻辑 — 通过 ffmpeg.wasm 的虚拟文件系统读写，调用 `ffmpeg.run()` 传参 `-i`, `-b:a`, `-ar`, `-ac`
- **`results` 数组** (~line 660): 全局状态 `[{file, converted, duration}]`
- **`handleFiles(files)`** (~line 736): 过滤支持格式 → 追加到 results → 调用 `extractDurations()` → 触发 `processAll()`

### 国际化 (i18n.js)

- **`I18N` 对象**: `current` 当前语言, `supported[]` 5 种语言, `dict{}` 所有翻译键
- **`I18N.t(key, params?)`**: 读取当前语言的翻译文本，支持 `{n}` 占位
- HTML 中使用 `data-i18n="key"` 属性标记需翻译的元素
- 独立页面 (about/privacy/terms.html) 共享同一个 i18n.js

### 主题系统

CSS 变量在 `:root` 定义深色默认主题，`[data-theme="light"]` 覆写浅色主题变量。`[data-accent="magenta"]` 将 cyan 主色切换为 magenta。主题/accent 属性设置在 `<html>` 上。

### 文件结构 

```
index.html      — 主页面：dropzone、转换设置、结果列表/网格、FAQ、优势板块
i18n.js         — 所有翻译文本的字典
about.html      — 联系我们页面（独立 HTML，共享 i18n.js）
privacy.html    — 隐私政策
terms.html      — 服务条款
```

子页面遵循相同模式：独立 CSS 变量定义 + 共享 i18n.js + `data-page-title` 属性用作标题翻译键。

## 开发注意事项

- 无构建步骤，直接编辑 HTML/JS/CSS 文件即可
- ffmpeg.wasm 版本锁定在 `@ffmpeg/ffmpeg@0.11.6` + `@ffmpeg/core@0.11.0`，升级需注意 API 兼容
- `results` 数组中的 `converted` 字段为 `null` 表示未转换，转为 `Blob` 表示已完成
- 比特率选项 `'same'` 表示不传 `-b:a` 参数；采样率和声道的 `'same'` 同理
- Cookie 横幅状态存 `localStorage` 键 `afc-cookie-consent`
