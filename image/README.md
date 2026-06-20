# Image format conversion

纯浏览器端图片批量格式转换工具。所有处理均在本地完成，文件不会上传到任何服务器。

## 功能

- 🖼️ 支持 60+ 输入格式：JPG · PNG · GIF · WebP · AVIF · ICO · BMP · SVG · HEIC · TIFF · PSD · TGA · HDR · PDF · 50+ 相机 RAW
- 📤 输出格式：WebP · AVIF · PNG · JPEG · BMP
- ⚙️ 可调质量（1-100%）和自定义缩放
- 📦 批量转换，支持 ZIP 打包下载
- 🌐 5 种语言：简体中文 · 繁體中文 · English · 日本語 · 한국어
- 🌓 深色/浅色主题 + 双色霓虹配色
- 🔒 本地处理，断网也能用

## 技术栈

纯静态页面，HTML + CSS + JS，无构建工具。

CDN 库按需懒加载：
- [JSZip](https://github.com/Stuk/jszip) — ZIP 打包
- [heic2any](https://github.com/alexcorvi/heic2any) — HEIC 解码
- [UTIF.js](https://github.com/photopea/UTIF.js) — TIFF / RAW 解码

## 部署

静态文件直接托管即可，无需任何服务端。推荐使用 Nginx、GitHub Pages 或任意 CDN。

## License

MIT
