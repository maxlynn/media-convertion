# Media Format Conversion Toolbox

一站式纯本地媒体格式转换工具箱，聚合图片、音频、视频三大转换引擎。

## 三个工具

| 工具 | 引擎 | 输入格式 | 输出格式 |
|---|---|---|---|
| [Image format conversion](../2/Image%20format%20conversion/) | Canvas / OffscreenCanvas | 60+ | WebP · AVIF · PNG · JPEG · BMP |
| [Audio format conversion](../Audio%20format%20conversion/) | ffmpeg.wasm | 30+ | MP3 · WAV · OGG · AAC · FLAC · OPUS · M4A |
| [Video format conversion](../Video-format-conversion/) | ffmpeg.wasm | 20+ | MP4 · WebM · MOV · MKV · GIF · MP3 · AAC |

## 共同特性

- 🔒 **隐私安全** — 所有处理均在浏览器本地完成，文件不上传任何服务器，断网也能用
- ⚡ **专业引擎** — Canvas 与 ffmpeg.wasm 驱动，输出质量媲美桌面端专业软件
- 📦 **批量转换** — 全部支持多文件批量处理，支持 ZIP 打包下载
- 🌐 **5 种语言** — 简体中文 · 繁體中文 · English · 日本語 · 한국어
- 🌓 **双主题** — 深色/浅色模式 × 青霓虹/粉霓虹配色，设置跨子项目共享
- 🆓 **完全免费** — 无订阅、无限制、无水印，永久免费

## 部署

纯静态文件，无需任何服务端。将整个 `CC` 目录部署到任意静态服务器（Nginx、GitHub Pages、Vercel 等）即可。

## License

MIT
