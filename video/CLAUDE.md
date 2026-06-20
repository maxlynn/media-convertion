# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

纯浏览器端视频格式转换工具 — 静态 HTML/CSS/JS 网站，无构建工具，无服务端。所有视频转换通过 ffmpeg.wasm 在浏览器本地完成，文件不上传任何服务器。

## 文件结构

```
index.html      — 主页面：全部 HTML/CSS/JS 内联（~1875行），包含 UI、转换逻辑、文件处理
i18n.js         — 国际化系统 + 主题初始化：5 语言字典 + I18N 对象，底部含 theme/accent 初始化和按钮事件绑定
about.html      — 联系我们页面
privacy.html    — 隐私政策页面
terms.html      — 服务条款页面
```

## 核心架构

### ffmpeg.wasm 转换引擎
- CDN: `https://cdn.jsdelivr.net/npm/@ffmpeg/ffmpeg@0.12.10/dist/umd/ffmpeg.js`
- 首次加载约 31MB，缓存在浏览器中
- `initFFmpeg()` 页面加载时自动调用，状态显示在 `#engine-status`
- 核心转换函数 `convertVideo(file, opts)` → `buildFFmpegArgs()` → `ffmpeg.exec(args)`

### 预设系统 (PRESETS)
`index.html:1105-1115` — `PRESETS` 对象定义了各 App 的默认参数：
- 抖音竖版/横版、微信视频号/朋友圈/聊天、小红书竖版/方形/横版、B站高清
- 每个预设包含 format、crf、分辨率、fps、音频编码等

### 质量系统
- 视频：CRF 18-51，UI 映射为 1-100（`crfToPct` / `pctToCrf`）
- 音频：bitrate 64-320 kbps（`AUDIO_ONLY_FORMATS = ['mp3', 'aac']`）
- `updateQualityUI()` 在视频/音频模式间切换滑块行为

### 国际化 (I18N)
- `I18N` 全局对象，5 种语言：zh-CN, zh-HK, en, ja, ko
- HTML 属性：`data-i18n`（textContent）、`data-i18n-html`（innerHTML）
- 页面标题/描述：`html[data-page-title]` / `html[data-page-desc]`
- 语言切换后派发 `i18n-applied` 自定义事件，供动态内容重新渲染
- 语言偏好存储在 `localStorage['vidshift-lang']`

### 主题系统
- `html[data-theme]` = dark | light
- `html[data-accent]` = cyan | magenta
- 分别存储于 `localStorage['vidshift-theme']` 和 `localStorage['vidshift-accent']`
- 主题/配色按钮通过 `I18N.updateThemeButtons()` 更新
- about/privacy/terms 页面各自有独立的主题切换脚本（不如 index.html 完善，缺少 I18N 集成）

### 设置联动与自动重转
- `formatSelect.change` → 清空预设选择 → `updateQualityUI()` → 立即调用 `reconvertAll()`
- `qualitySlider.input` / `scaleW.input` / `scaleH.input` / `fpsSelect.change` → 500ms 防抖后调用 `reconvertAll()`（`debounceReconvert`）
- `presetSelect.change` → 调用 `applyPreset()` 填入预设参数（会触发上述 input 事件从而自动重转）
- 当输出格式为纯音频（mp3/aac）时，分辨率、帧率输入框自动禁用

### 文件批处理流程
1. 用户拖放/选择/粘贴文件 → `handleFiles()`
2. 调用 `processAll()` → 等待 ffmpeg 就绪 → 逐个调用 `convertVideo()`
3. `renderAll()` 渲染卡片网格，显示缩略图、文件大小对比、下载按钮
4. 批量操作：全选/反选、批量应用设置、批量删除、ZIP 打包下载（JSZip）

### 缩略图生成
`generateThumbnail(file)` — 使用 `<video>` 元素 seek 到 1 秒处以 canvas 截图
GIF 文件直接使用原始文件作为缩略图

### localStorage 键名
全部使用 `vidshift-` 前缀：`vidshift-lang`、`vidshift-theme`、`vidshift-accent`、`vidshift-cookie-consent`

## 注意事项

- **无构建工具**：纯 HTML 文件，直接编辑即可，直接部署
- **无测试**：没有测试框架或测试文件
- **无包管理**：所有依赖通过 CDN 加载（ffmpeg.wasm、JSZip）
- **推荐浏览器**：Chrome/Edge（Firefox 和 Safari 性能较慢）
- **about/privacy/terms 页面**：各自有重复的 CSS/主题切换代码，修改主题样式时需同步 4 个文件
- **输出格式**：MP4(H.264)、WebM(VP9)、MOV、MKV、GIF、MP3、AAC
- **输入格式**：20+ 种，定义在 `VIDEO_EXTS` Set 中
