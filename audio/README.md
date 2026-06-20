# Audio format conversion

纯浏览器端音频批量格式转换工具。所有处理均在本地完成，文件不会上传到任何服务器。

## 功能

- 🎵 支持 30+ 输入格式：MP3 · WAV · OGG · FLAC · AAC · M4A · WMA · OPUS · AIFF · AMR · APE · WV · TTA · MIDI · AC3 · DTS 等
- 📤 输出格式：MP3 · WAV · OGG · AAC · FLAC · OPUS · M4A
- ⚙️ 可调比特率（64-320 kbps）、采样率（8k-96k Hz）、声道（单/立体声）
- 📦 批量转换，支持 ZIP 打包下载
- 🎧 内置音频预览播放 + 波形可视化
- 🔀 网格/列表双视图切换
- 🌐 5 种语言：简体中文 · 繁體中文 · English · 日本語 · 한국어
- 🌓 深色/浅色主题 + 双色霓虹配色
- 🔒 本地处理，断网也能用

## 技术栈

纯静态页面，HTML + CSS + JS，无构建工具。

CDN 库按需懒加载：
- [ffmpeg.wasm](https://github.com/ffmpegwasm/ffmpeg.wasm) — 音频格式转换引擎
- [JSZip](https://github.com/Stuk/jszip) — ZIP 打包

## 部署

静态文件直接托管即可，无需任何服务端。推荐使用 Nginx、GitHub Pages 或任意 CDN。

## License

MIT
