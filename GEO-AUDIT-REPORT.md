# GEO 审计报告：mediaconvertion.com

**审计日期：** 2026-06-20
**URL：** https://mediaconvertion.com
**业务类型：** SaaS / 免费在线媒体格式转换工具（纯客户端 Web 应用）
**页面分析数：** 7

---

## 执行摘要

**综合 GEO 评分：53/100（Fair）**

mediaconvertion.com 在前端工程和产品体验上表现出色——纯客户端 ffmpeg.wasm 引擎、完善的 i18n（5 语言）、精美的 UI 设计。技术基础扎实：llms.txt、结构化数据（WebSite + Organization + WebApplication）、OG/Twitter Card、Canonical、Sitemap、robots.txt 均已到位。但品牌权威几乎为零（无 Wikipedia/Reddit/GitHub 存在、Gmail 联系邮箱、域名拼写异常），内容和 E-E-A-T 信号薄弱（无团队信息、无作者署名、无博客/教程），严重制约了 AI 系统的引用意愿。

### 评分明细

| 类别 | 得分 | 权重 | 加权得分 |
|---|---|---|---|
| AI 可引用性 | 65/100 | 25% | 16.25 |
| 品牌权威 | 25/100 | 20% | 5.00 |
| 内容 E-E-A-T | 45/100 | 20% | 9.00 |
| 技术 GEO 基础设施 | 78/100 | 15% | 11.70 |
| Schema & 结构化数据 | 68/100 | 10% | 6.80 |
| 平台优化 | 45/100 | 10% | 4.50 |
| **综合 GEO 评分** | | | **53/100** |

---

## 严重问题（立即修复）

- **品牌权威缺失**：在 Wikipedia、Reddit、YouTube、LinkedIn、GitHub 上均无品牌存在。Brand Authority 评分仅 25/100，这是 AI 实体识别的重要因素。
- **无团队/公司信息**：About 页仅标注「个人开发者维护」，无姓名、无资质、无公司主体、使用 Gmail 联系邮箱。E-E-A-T 严重不足。

## 高优先级问题（1 周内修复）

- **域名拼写异常**：`mediaconvertion.com`（convertion 应为 conversion），可能导致流量损失和品牌信任度下降
- **无 AI 爬虫专用规则**：robots.txt 是 Allow all 的通用规则，缺少对 GPTBot、ClaudeBot、PerplexityBot、OAI-SearchBot 的显式声明
- **无博客/教程/对比文章**：网站没有任何格式对比、教学指南、使用教程等深度内容，AI 无可引用的丰富语料
- **子工具页（image/audio/video）无结构化数据**：Schema 仅存在于首页，三个核心工具页面没有任何结构化标记
- **首页无 hreflang 标签**：虽然有 5 语言 i18n，但搜索引擎无法发现多语言版本（image 子页面已有 hreflang）

## 中优先级问题（1 个月内修复）

- **FAQ 缺少 FAQPage Schema**：首页有 4 个 Q&A，但未用 FAQPage 标记，错失 AI 摘要机会
- **联系邮箱为个人 Gmail**：`icloudmayun@gmail.com` 非域名邮箱，降低专业度
- **无 BreadcrumbList Schema**：缺少面包屑导航结构化数据
- **About/Privacy/Terms 页面设为 noindex**：这些页面包含重要的 E-E-A-T 信号，noindex 后 AI 无法访问
- **首页 title 标签中英文混杂**：中文关键词 + 英文品牌名混排，可能影响多语言 AI 理解
- **网站缺少显式使用统计数据**：如「已处理 X 次转换」「服务 X 用户」等社会证明

## 低优先级问题（优化时处理）

- **无 Person Schema**：即使只有一个开发者，添加 Person + 合理社交媒体链接也有助品牌权威
- **Sitemap 缺少 lastmod**：7 个 URL 的 sitemap 没有 lastmod 字段
- **i18n 纯客户端注入**：多语言内容对搜索引擎爬虫不可见（JS 渲染后才能看到翻译内容）
- **首页 meta description 偏短**：当前约 140 字符可接受，但可更突出 USPs
- **无社交媒体链接**：GitHub、Twitter/X 等平台的缺失使品牌权威难以建立

---

## 分类深度分析

### AI 可引用性（65/100）

**已做对的：**
- ✅ robots.txt 允许所有爬虫（`Allow: /`），包括 AI 爬虫
- ✅ **llms.txt 存在且完善**——这是最重要的 AI 发现信号之一，`/llms.txt` 包含了完整的工具摘要、格式列表、技术栈、FAQ
- ✅ 内容结构清晰：FAQ 有 4 个高引用潜力的问答（隐私、质量、批量、付费）
- ✅ 三个工具卡片各有明确的格式标签和功能描述
- ✅ OG/Twitter Card/Canonical 均已到位
- ✅ 5 语言 i18n 扩大了可引用的语料范围
- ✅ 首页 JSON-LD 结构化数据正确标记

**可改进的：**
- ⚠️ FAQ 未使用 FAQPage Schema，AI 摘要机会浪费
- ⚠️ 首页约 800 字内容，大部分在 i18n 字典中——搜索引擎爬虫可能无法抓取 JS 渲染后的实际文本
- ⚠️ About/Privacy/Terms 页面的 noindex 指令阻止 AI 访问这些 E-E-A-T 信号页
- ⚠️ 内容以中文为主，英文版本偏少，限制全球 AI 引用范围

**建议：**
- 为 FAQ 添加 FAQPage Schema（预计 +5-8 分）
- 考虑将 i18n 字典部分内容改为 HTML 静态文本（至少首页核心 USP）
- 移除 About 页的 noindex，让 AI 可访问团队信息

### 品牌权威（25/100）

**已做对的：**
- ✅ 隐私政策详实，覆盖 GDPR/CCPA
- ✅ Cookie 同意横幅合规
- ✅ 完整的 i18n 隐私政策、服务条款、联系页面
- ✅ Google AdSense 广告展示（对 Google 算法为正信号）

**严重不足：**
- ❌ **Wikipedia：无条目**
- ❌ **Reddit：无提及**
- ❌ **YouTube：无频道/视频**
- ❌ **LinkedIn：无公司页面**
- ❌ **GitHub：无项目链接**
- ❌ **外链：几乎为零**
- ❌ 域名 `mediaconvertion.com` 使用拼写错误的「convertion」（应为 conversion）
- ❌ 联系邮箱为个人 Gmail，非域名邮箱
- ❌ 无社会证明（使用统计、用户评价、案例）

**建议：**
- 在 GitHub 上开源部分工具代码或 ffmpeg.wasm 封装库
- 在 ProductHunt 发布产品
- 添加使用统计计数器（如「已服务 X 次转换」）
- 注册域名邮箱（如 `contact@mediaconvertion.com`）
- 创建至少 LinkedIn 公司页面和 GitHub 组织

### 内容 E-E-A-T（45/100）

**Experience（经验）：55/100**
- FAQ 覆盖了用户实际关心的 4 个问题（隐私、质量、批量、付费）——表明了解用户需求
- 工具功能描述针对中文社交媒体（抖音/微信/小红书/B站）预设——显示本地化经验
- 但无用户案例、无使用教程、无实际场景演示

**Expertise（专业知识）：40/100**
- 技术栈描述准确（ffmpeg.wasm、Canvas API）
- 格式支持列表完整（图片 15+、音频 11+、视频 7+ 格式）
- **但无作者署名、无开发团队介绍、无技术资质证明**
- **核心问题：About 页声明为「个人开发者维护」但未显示任何开发者身份**

**Authoritativeness（权威性）：30/100**
- 无外链、无媒体报道、无第三方引用
- 无行业认证或参与
- 无专家背书或推荐
- 域名拼写错误进一步削弱权威感

**Trustworthiness（信任度）：55/100**
- 完整的隐私政策（9 个章节）✓
- Cookie 同意横幅 ✓
- HTTPS（Let's Encrypt）✓
- 明确的免费声明 ✓
- **但团队匿名 + Gmail 邮箱 + 域名拼写错误降低信任度**

**建议：**
- About 页添加开发者署名（至少昵称 + GitHub/Twitter 链接）
- 创建 2-3 篇格式对比/教程文章（如「WebP vs AVIF：选哪个」「如何为抖音优化视频」）
- 添加使用统计数字和用户评价
- 注册域名邮箱

### 技术 GEO 基础设施（78/100）

**强有力的基础：**
- ✅ **llms.txt：✅ 存在且完善**——这是当前最亮眼的 GEO 优化点
- ✅ **robots.txt：Allow all**——无任何爬虫限制
- ✅ **Sitemap：✅ 存在**，包含 7 个 URL
- ✅ **OG 标签：✅ present**（og:type, og:title, og:description, og:url, og:locale）
- ✅ **Twitter Card：✅ present**（summary_large_image）
- ✅ **Canonical：✅ present**
- ✅ **HTTPS：✅ 有效**
- ✅ **响应式设计：✅ 有**（media queries, viewport）
- ✅ **页面速度：快**——内联 CSS/JS，仅 AdSense 一个外部请求
- ✅ **Cookie 同意：✅ 有**

**需改进的：**
- ⚠️ 首页缺少 hreflang 标签（image 子页面有 hreflang，但首页没有）
- ⚠️ 未显式声明 AI 爬虫规则（虽然 Allow all 已够用，但显式规则更佳）
- ⚠️ i18n 纯客户端注入——搜索引擎爬虫可能看不到 5 种语言的实际内容
- ⚠️ Sitemap 无 lastmod 字段
- ⚠️ About/Privacy/Terms noindex——阻止搜索引擎索引 E-E-A-T 页面

**建议：**
- 将主页 i18n 内容做服务端渲染或至少保留 HTML 原文
- 添加 AI 爬虫显式规则到 robots.txt（如 `Allow: /` 针对 GPTBot 等）
- 移除 E-E-A-T 页面的 noindex 或只 noindex 非核心页面
- 为 Sitemap 添加 lastmod

### Schema & 结构化数据（68/100）

**已实现（首页 JSON-LD @graph）：**
- ✅ **WebSite**：name、alternateName、description、inLanguage、publisher
- ✅ **Organization**：name、url、description、contactPoint（email）
- ✅ **WebApplication**：name、applicationCategory（Multimedia）、operatingSystem、browserRequirements、offers（free）、featureList（7 项）、isAccessibleForFree、inLanguage
- ✅ Schema 语法正确，验证通过

**缺失的：**
- ❌ **FAQPage**：首页有 4 个 FAQ，但未标记为 FAQPage——这是最浪费的机会
- ❌ **BreadcrumbList**：导航结构可用面包屑标记
- ❌ **Person**：即使只有一个人维护，Person Schema + sameAs 链接也有助 AI 实体识别
- ❌ 三个子工具页（image/audio/video）无任何结构化数据
- ❌ About/Privacy/Terms 页面无结构化数据

**建议：**
- 添加 FAQPage Schema 标记首页 4 个 Q&A（高优先级，预计 +5-10 分）
- 为三个子工具页分别添加 WebApplication Schema（中优先级）
- 添加 BreadcrumbList（低优先级）

### 平台优化（45/100）

| 平台 | 准备度 | 说明 |
|---|---|---|
| **Google AI Overviews** | 50/100 | FAQ 结构良好，缺 FAQPage Schema；内容新鲜度低（无博客更新） |
| **ChatGPT / OpenAI** | 50/100 | llms.txt ✅ 存在，robots.txt 允许 GPTBot；但无 AI 专用规则声明 |
| **Perplexity** | 45/100 | 同上；llms.txt ✅ 有帮助，但品牌权威不足会降低引用概率 |
| **Gemini** | 45/100 | 结构化数据 ✅；但中文内容为主，Google 对多语言处理有改进空间 |
| **Bing Copilot** | 40/100 | 多语言 i18n 非服务端渲染，Bing 索引效率可能受限 |

**共性瓶颈：**
1. **品牌权威不足**——AI 更倾向于引用有知名度的品牌
2. **内容深度不足**——缺少教程、对比、指南类「厚内容」
3. **缺少 FAQPage Schema**——直接影响 AI 摘要获取
4. **i18n 客户端渲染**——限制搜索引擎发现多语言内容

---

## 快速致胜（本周内实施）

| # | 行动 | 预计提分 | 工作量 |
|---|---|---|---|
| 1 | 将首页 FAQ 添加 FAQPage Schema | +5 分 | 30 分钟 |
| 2 | 为三个子工具页添加 WebApplication + BreadcrumbList Schema | +4 分 | 1 小时 |
| 3 | 在 robots.txt 中添加 AI 爬虫显式规则 | +2 分 | 15 分钟 |
| 4 | 为首页添加 hreflang 标签 | +2 分 | 15 分钟 |
| 5 | 移除 About 页的 noindex | +2 分 | 1 分钟 |
| 6 | About 页添加开发者署名 + GitHub 链接 | +3 分 | 30 分钟 |

## 30 天行动计划

### 第 1 周：结构化数据 & 技术修复
- [x] FAQPage Schema 标记首页 4 个 FAQ
- [x] 三个子工具页添加 WebApplication Schema
- [x] robots.txt 添加 AI 爬虫规则
- [x] 首页添加 hreflang 标签
- [x] About 页移除 noindex
- [x] About 页添加开发者信息

### 第 2 周：品牌权威建设
- [ ] 在 GitHub 创建项目仓库，将工具核心功能代码开源
- [ ] 在 ProductHunt 发布产品
- [ ] 创建 LinkedIn 公司页面
- [ ] 注册域名邮箱（contact@mediaconvertion.com）
- [ ] 在网站底部添加「已服务 X 次转换」计数器

### 第 3 周：内容深度提升
- [ ] 创建一篇格式对比教程（如「WebP vs AVIF vs PNG」）
- [ ] 创建一篇社交媒体视频预设指南
- [ ] 为每个 FAQ 扩展更多上下文（至少 100 字/条）
- [ ] 在 GitHub Releases 发布版本更新日志

### 第 4 周：持续优化
- [ ] 提交 Google Search Console 监控索引状态
- [ ] 在 Reddit 相关子版块（r/webdev、r/selfhosted）发布工具介绍
- [ ] 将 i18n 部分内容改为服务端渲染（至少首页核心内容）
- [ ] 添加 Person Schema 到 About 页

---

## 附录：页面分析

| URL | Title | GEO 问题数 |
|---|---|---|
| https://mediaconvertion.com/ | Media Format Conversion — 免费浏览器多媒体格式转换器 | 5 |
| https://mediaconvertion.com/image/index.html | Image format conversion — 图片格式转换 | 3 |
| https://mediaconvertion.com/audio/index.html | Audio format conversion | 3 |
| https://mediaconvertion.com/video/index.html | Video format conversion | 3 |
| https://mediaconvertion.com/privacy.html | 隐私政策 — Media Format Conversion | 1（noindex） |
| https://mediaconvertion.com/terms.html | 服务条款 — Media Format Conversion | 1（noindex） |
| https://mediaconvertion.com/about.html | 联系我们 — Media Format Conversion | 2（noindex、无作者信息） |
