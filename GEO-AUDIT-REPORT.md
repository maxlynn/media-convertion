# GEO 审计报告：mediaconvertion.com

**审计日期：** 2026-06-20  
**业务类型：** 免费在线媒体格式转换工具（纯客户端 Web 应用）  
**主要语言：** 简体中文（支持 EN/JA/KO/ZH-HK）  
**核心产品：** 图片/音频/视频格式转换，纯浏览器端 ffmpeg.wasm 处理

---

## 综合 GEO 评分

| 类别 | 权重 | 得分 |
|---|---|---|
| AI 可引用性 & 可见性 | 25% | **53** |
| 品牌权威信号 | 20% | **30** |
| 内容质量 & E-E-A-T | 20% | **45** |
| 技术基础 | 15% | **62** |
| 结构化数据 | 10% | **0** |
| 平台优化 | 10% | **14** |
| **综合 GEO 评分** | **100%** | **39/100** |

---

## 1. AI 可引用性 & 可见性 — 53/100

### 优势
- robots.txt 允许所有爬虫访问，包括 AI 爬虫
- 内容紧凑，有 5 个高引用潜力的段落（隐私声明、ffmpeg.wasm 技术、格式支持列表、社交媒体预设）
- 多语言内容丰富了可引用语料库

### 关键问题
- 网站在 Google/Bing 索引中基本不存在（`site:mediaconvertion.com` 无结果）
- 无 `llms.txt`、无 `ai.txt`、无 AI 特定爬虫规则
- 无 Open Graph / Twitter Card 标签
- 无 canonical 标签
- 首页 meta description 仅 39 个字符，远低于推荐值

### 改进建议（优先级从高到低）
1. 提交到 Google Search Console 和 Bing Webmaster Tools
2. 创建 `llms.txt` 文件并列明工具摘要、格式列表和隐私声明
3. 在 robots.txt 中添加 OAI-SearchBot、PerplexityBot、Claude-Web 规则
4. 为所有页面添加 OG 和 Twitter Card 标签

---

## 2. 品牌权威信号 — 30/100

### 优势
- 隐私声明贯穿全站，隐私政策内容详实（涵盖 GDPR/CCPA）
- Cookie 同意横幅合规
- 有限但可用的 About/Terms/Privacy 页面

### 关键问题
- 无公司名称或运营主体信息（仅个人 Gmail 联系邮箱）
- 无社交媒体账号、无 GitHub 链接
- 无用户评价、使用统计数据或社会证明
- 品牌 "Media Format Conversion" / "MFC" 在互联网上几乎未被提及
- 无外链、无媒体报道
- 域名 `mediaconvertion.com`（拼写可能造成流量损失，`conversion` vs `convertion`）

### 改进建议
1. 添加团队/公司信息到 about 页面
2. 在 ProductHunt、GitHub 等平台发布
3. 收集和展示使用统计（"已处理 X 次转换"）
4. 建立社交媒体存在（至少 GitHub 和 Twitter/X）

---

## 3. 内容质量 & E-E-A-T — 45/100

### 优势
- 内容清晰简洁，可读性良好（75/100）
- 格式指南覆盖全面（图片 13 种、音频 11 种、视频多种）
- FAQ 回答详细，覆盖 6 个常见问题
- 翻译完整，5 种语言覆盖全面
- UI/UX 设计精良，交互反馈完善

### 关键问题
- 首页内容非常薄（约 200-300 字可见文本）
- 格式指南和 FAQ 文本通过 `display: none` 或 JS 动态注入，搜索引擎不可见
- 纯客户端 i18n：搜索引擎只能看到 `data-i18n` 占位符，而非实际翻译文本
- 无博客、无教程、无格式对比文章
- 无作者署名、无资质证明
- 无 hreflang 标签，搜索引擎无法发现多语言内容
- 页面 title 命名不一致（"Media Format Conversion" vs "Audio format conversion" vs "Media Format Conversion Toolbox"）

### 改进建议
1. 将格式指南默认展开（或至少部分展开），让搜索引擎可抓取
2. 为每种语言创建独立 URL（`/en/`、`/ja/` 等），添加 hreflang 标签
3. 创建 3-5 篇格式对比/教程文章（如 "WebP vs AVIF 对比"）
4. 在 about 页面添加团队背景、技术栈说明
5. 统一全站品牌命名

---

## 4. 技术基础 — 62/100

### 优势
- CSS 全部内联，零外部 CSS 请求
- 仅两个非阻塞外部 JS（AdSense async + AMP auto-ads async）
- 系统字体，无外部字体加载
- 响应式设计，viewport 正确设置
- HTTPS（Let's Encrypt 证书有效期内）
- 静态 HTML，服务器端渲染友好
- 爬取路径浅：所有页面距离首页最多 1 次点击

### 关键问题
- **可索引性 35/100** — 最大问题区域
  - 客户端 i18n 导致多语言内容对搜索引擎不可见
  - 无 hreflang 标签
  - 无 canonical 标签
  - 首页 meta description 过短
- CSS 全部内联导致后续页面无法利用缓存
- ffmpeg.wasm（~20-30MB WASM 二进制）按需加载时会严重阻塞主线程
- Sitemap 仅 4 个 URL，无 `lastmod`
- 导航缺少直接链接到三个工具页
- 子页面无面包屑导航

### 改进建议
1. 实现服务端多语言 URL 架构 + hreflang
2. 提取 CSS 为外部文件并设置强缓存
3. 改进 Sitemap（添加 `lastmod`、扩充 URL 数量）
4. 添加 canonical 标签和面包屑导航
5. ffmpeg.wasm 改为用户交互后懒加载

---

## 5. 结构化数据 — 0/100

### 现状
**所有页面均为零结构化数据。** 未发现 JSON-LD、Microdata 或 RDFa。

### 缺失的关键 Schema
- `WebSite` — 网站名称、描述、URL
- `Organization` — 品牌实体定义
- `WebApplication` / `SoftwareApplication` — 每个工具页面的核心标记
- `BreadcrumbList` — 面包屑导航
- `FAQPage` — FAQ 内容标记

### 推荐实现（首页示例）

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://mediaconvertion.com/#website",
      "url": "https://mediaconvertion.com",
      "name": "Media Format Conversion",
      "alternateName": "免费浏览器多媒体格式转换器",
      "description": "浏览器本地处理，不上传服务器 | 免费浏览器多媒体格式转换器",
      "inLanguage": ["zh-CN", "en", "ja", "ko", "zh-HK"]
    },
    {
      "@type": "Organization",
      "@id": "https://mediaconvertion.com/#organization",
      "name": "Media Convertion",
      "url": "https://mediaconvertion.com"
    },
    {
      "@type": "WebApplication",
      "@id": "https://mediaconvertion.com/#webapp",
      "name": "Media Format Conversion Toolbox",
      "applicationCategory": "Multimedia",
      "operatingSystem": "Browser (client-side WASM)",
      "browserRequirements": "JavaScript + WebAssembly",
      "description": "Free browser-based multimedia format converter for images, audio, and video. No upload, no registration.",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
      "isAccessibleForFree": true
    }
  ]
}
```

### 实施优先级
- **第 1 层（0.5 天）：** 首页添加 WebSite + Organization + WebApplication JSON-LD
- **第 1 层（0.5 天）：** 三个工具页分别添加 WebApplication + BreadcrumbList
- **第 1 层（0.5 天）：** 每个 `<head>` 添加 hreflang 标签
- **第 2 层（1 天）：** FAQP age 标记 FAQ 内容，添加 logo 属性

---

## 6. 平台优化 — 14/100

| 平台 | 得分 | 主要阻碍 |
|---|---|---|
| ChatGPT / OpenAI | 15 | 未索引；无 OAI-SearchBot 配置；无结构化数据 |
| Google AI Overviews | 10 | 未索引；无 Schema；无外链 |
| Perplexity | 10 | 未索引；无可引用数据；无 llms.txt |
| Claude / Anthropic | 20 | 索引依赖最低但仍不可见 |

### 共性问题
- **在所有平台上的根本障碍：网站未被搜索引擎索引**
- 客户端 i18n 导致非 JS 环境看不到实际内容
- 无结构化数据
- 无权威信号和外部引用

### 差异化优势（应在 AI 输出中强化）
- 中文社交媒体预设（抖音/微信/小红书/B站）—— 竞争对手无此功能
- 三合一工具（图片+音频+视频）—— 竞争对手通常专精单一类型
- 纯本地处理 — 隐私理念与 AI 安全偏好一致

---

## 快速行动计划

### 🔴 立即执行（本周）

| # | 任务 | 影响 | 工作量 |
|---|---|---|---|
| 1 | 提交到 Google Search Console + Bing Webmaster Tools | 极高 | 1 小时 |
| 2 | 添加 JSON-LD 结构化数据（WebSite + WebApplication） | 高 | 2 小时 |
| 3 | 添加 hreflang 标签到所有页面 | 高 | 1 小时 |
| 4 | 添加 canonical 标签 | 中 | 30 分钟 |
| 5 | 添加 OG 和 Twitter Card 标签 | 中 | 1 小时 |
| 6 | 改进首页 meta description 至 120-155 字符 | 中 | 30 分钟 |

### 🟡 短期（1-2 周）

| # | 任务 | 影响 | 工作量 |
|---|---|---|---|
| 7 | 创建 `llms.txt` 和 `robots.txt` AI 规则 | 高 | 1 小时 |
| 8 | 格式指南默认展开（移除 `display: none`） | 高 | 2 小时 |
| 9 | 导航中添加工具页链接 + 面包屑导航 | 中 | 2 小时 |
| 10 | 改进 Sitemap（添加 `lastmod` 和更多 URL） | 中 | 1 小时 |
| 11 | about 页面添加团队/项目信息（非 noindex） | 中 | 2 小时 |
| 12 | 提取 CSS 为外部文件设置缓存 | 中 | 2 小时 |

### 🟢 中期（2-4 周）

| # | 任务 | 影响 | 工作量 |
|---|---|---|---|
| 13 | 实现服务端多语言 URL（`/en/`、`/ja/` 等） | 极高 | 2-3 天 |
| 14 | 创建 3-5 篇格式对比/教程博客文章 | 中 | 3-5 天 |
| 15 | 在 ProductHunt / GitHub 发布 | 中 | 2 天 |
| 16 | 添加使用统计数字（"已转换 X 文件"） | 中 | 1 天 |
| 17 | 统一全站品牌命名 | 中 | 1 天 |

---

## 总结

mediaconvertion.com 拥有**优秀的产品和设计**，但 SEO 基础和 AI 可见性接近零。当前 GEO 评分 **39/100**，主要拖分点是：

1. **未被搜索引擎索引** — 根因，修复后其他问题才有意义
2. **零结构化数据** — 修复成本最低但回报最高的改动
3. **客户端 i18n** — 5 种语言内容对搜索引擎完全不可见
4. **无品牌权威** — 无外链、无社交证明、无团队信息

实施"立即执行"的 6 项任务后，预计 GEO 评分可提升至 **55-60/100**。完成中期任务后可达到 **70-75/100**。
