const I18N = {
  current: 'en',

  supported: [
    { code: 'en',    label: 'English' },
    { code: 'ja',    label: '日本語' },
    { code: 'ko',    label: '한국어' },
    { code: 'zh-CN', label: '简体中文' },
    { code: 'zh-HK', label: '繁體中文' },
  ],

  dict: {
    'nav.home':    { 'zh-CN':'首页',     'zh-HK':'首頁',     'en':'Home',         'ja':'ホーム',       'ko':'홈' },
    'nav.about':   { 'zh-CN':'关于',     'zh-HK':'關於',     'en':'About',        'ja':'概要',         'ko':'소개' },
    'nav.contact': { 'zh-CN':'联系我们', 'zh-HK':'聯絡我們', 'en':'Contact',      'ja':'お問い合わせ', 'ko':'문의' },
    'nav.back':    { 'zh-CN':'← 返回首页', 'zh-HK':'← 返回首頁', 'en':'← Back Home', 'ja':'← ホームへ', 'ko':'← 홈으로' },

    'format.label':   { 'zh-CN':'输出格式', 'zh-HK':'輸出格式', 'en':'Output Format', 'ja':'出力形式',     'ko':'출력 형식' },
    'format.webp':    { 'zh-CN':'WebP',     'zh-HK':'WebP',     'en':'WebP',          'ja':'WebP',         'ko':'WebP' },
    'format.png':     { 'zh-CN':'PNG',      'zh-HK':'PNG',      'en':'PNG',           'ja':'PNG',          'ko':'PNG' },
    'format.jpeg':    { 'zh-CN':'JPEG',     'zh-HK':'JPEG',     'en':'JPEG',          'ja':'JPEG',         'ko':'JPEG' },
    'format.avif':    { 'zh-CN':'AVIF',     'zh-HK':'AVIF',     'en':'AVIF',          'ja':'AVIF',         'ko':'AVIF' },
    'format.bmp':     { 'zh-CN':'BMP',      'zh-HK':'BMP',      'en':'BMP',           'ja':'BMP',          'ko':'BMP' },
    'format.gif':     { 'zh-CN':'GIF',      'zh-HK':'GIF',      'en':'GIF',           'ja':'GIF',          'ko':'GIF' },
    'format.tiff':    { 'zh-CN':'TIFF',     'zh-HK':'TIFF',     'en':'TIFF',          'ja':'TIFF',         'ko':'TIFF' },
    'format.ico':     { 'zh-CN':'ICO',      'zh-HK':'ICO',      'en':'ICO',           'ja':'ICO',          'ko':'ICO' },

    'quality.label':  { 'zh-CN':'质量',     'zh-HK':'質量',     'en':'Quality',       'ja':'品質',         'ko':'품질' },

    'scale.label':    { 'zh-CN':'缩放（可选）', 'zh-HK':'縮放（可選）', 'en':'Resize (optional)', 'ja':'リサイズ（任意）', 'ko':'크기 조정 (선택)' },
    'scale.width':    { 'zh-CN':'宽',       'zh-HK':'寬',       'en':'Width',         'ja':'幅',           'ko':'너비' },
    'scale.height':   { 'zh-CN':'高',       'zh-HK':'高',       'en':'Height',        'ja':'高さ',         'ko':'높이' },
    'scale.unit':     { 'zh-CN':'px',       'zh-HK':'px',       'en':'px',            'ja':'px',           'ko':'px' },
    'scale.keepRatio':{ 'zh-CN':'保持宽高比','zh-HK':'保持寬高比','en':'Keep aspect ratio','ja':'縦横比を維持','ko':'비율 유지' },

    'drop.title':     { 'zh-CN':'拖放图片到此处，或点击选择文件', 'zh-HK':'拖放圖片到此處，或點擊選擇檔案', 'en':'Drag & drop images here, or click to browse', 'ja':'画像をドラッグ＆ドロップ、またはクリックして選択', 'ko':'이미지를 끌어다 놓거나 클릭하여 선택하세요' },
    'drop.addmore':   { 'zh-CN':'📂 点击此处或拖放继续添加 — JPG·PNG·GIF·WebP·AVIF·ICO·BMP·SVG·HEIC / PSD·TIFF·TGA·HDR / CR2·NEF·ARW·DNG 等 RAW / PDF', 'zh-HK':'📂 點擊此處或拖放繼續添加 — JPG·PNG·GIF·WebP·AVIF·ICO·BMP·SVG·HEIC / PSD·TIFF·TGA·HDR / CR2·NEF·ARW·DNG 等 RAW / PDF', 'en':'📂 Click or drop to add more — JPG·PNG·GIF·WebP·AVIF·ICO·BMP·SVG·HEIC / PSD·TIFF·TGA·HDR / CR2·NEF·ARW·DNG & more RAW / PDF', 'ja':'📂 クリックまたはドロップで追加 — JPG·PNG·GIF·WebP·AVIF·ICO·BMP·SVG·HEIC / PSD·TIFF·TGA·HDR / CR2·NEF·ARW·DNG 等 RAW / PDF', 'ko':'📂 클릭 또는 드롭으로 추가 — JPG·PNG·GIF·WebP·AVIF·ICO·BMP·SVG·HEIC / PSD·TIFF·TGA·HDR / CR2·NEF·ARW·DNG 등 RAW / PDF' },
    'drop.paste':     { 'zh-CN':'也支持 <code>Ctrl+V</code> 粘贴图片', 'zh-HK':'亦支援 <code>Ctrl+V</code> 貼上圖片', 'en':'Also supports <code>Ctrl+V</code> paste', 'ja':'<code>Ctrl+V</code> での貼り付けも対応', 'ko':'<code>Ctrl+V</code> 붙여넣기도 지원' },
    'drop.formats': {
      'zh-CN':'常见图片：JPG · PNG · GIF · WebP · AVIF · ICO · BMP · SVG · HEIC / 大型文档：PSD · TIFF · TGA · HDR / 相机 RAW：CR2 · NEF · ARW · DNG 等 / PDF',
      'zh-HK':'常見圖片：JPG · PNG · GIF · WebP · AVIF · ICO · BMP · SVG · HEIC / 大型文檔：PSD · TIFF · TGA · HDR / 相機 RAW：CR2 · NEF · ARW · DNG 等 / PDF',
      'en':'Images: JPG · PNG · GIF · WebP · AVIF · ICO · BMP · SVG · HEIC / Documents: PSD · TIFF · TGA · HDR / Camera RAW: CR2 · NEF · ARW · DNG etc / PDF',
      'ja':'画像：JPG · PNG · GIF · WebP · AVIF · ICO · BMP · SVG · HEIC / 文書：PSD · TIFF · TGA · HDR / カメラRAW：CR2 · NEF · ARW · DNG 他 / PDF',
      'ko':'이미지: JPG · PNG · GIF · WebP · AVIF · ICO · BMP · SVG · HEIC / 문서: PSD · TIFF · TGA · HDR / 카메라 RAW: CR2 · NEF · ARW · DNG 등 / PDF'
    },

    'btn.downloadAll':{ 'zh-CN':'⬇ 下载全部', 'zh-HK':'⬇ 下載全部', 'en':'⬇ Download All', 'ja':'⬇ すべてダウンロード', 'ko':'⬇ 전체 다운로드' },
    'btn.downloadSel':{ 'zh-CN':'⬇ 下载选中项', 'zh-HK':'⬇ 下載選中項', 'en':'⬇ Download Selected', 'ja':'⬇ 選択をダウンロード', 'ko':'⬇ 선택 다운로드' },
    'btn.download':   { 'zh-CN':'下载', 'zh-HK':'下載', 'en':'Download', 'ja':'ダウンロード', 'ko':'다운로드' },
    'btn.delete':      { 'zh-CN':'删除', 'zh-HK':'刪除', 'en':'Delete', 'ja':'削除', 'ko':'삭제' },
    'btn.deleteSel':   { 'zh-CN':'删除选中', 'zh-HK':'刪除選中', 'en':'Delete Selected', 'ja':'選択を削除', 'ko':'선택 삭제' },
    'btn.reconvertSel':{ 'zh-CN':'应用当前设置', 'zh-HK':'應用當前設置', 'en':'Apply Settings', 'ja':'設定を適用', 'ko':'설정 적용' },
    'btn.selectAll':   { 'zh-CN':'全选', 'zh-HK':'全選', 'en':'Select All', 'ja':'すべて選択', 'ko':'전체 선택' },
    'btn.deselectAll': { 'zh-CN':'取消全选', 'zh-HK':'取消全選', 'en':'Deselect All', 'ja':'選択解除', 'ko':'전체 해제' },
    'batch.selected':  { 'zh-CN':'已选 {n} 个', 'zh-HK':'已選 {n} 個', 'en':'{n} selected', 'ja':'{n}件選択中', 'ko':'{n}개 선택됨' },
    'view.grid':       { 'zh-CN':'📐 网格', 'zh-HK':'📐 網格', 'en':'📐 Grid', 'ja':'📐 グリッド', 'ko':'📐 그리드' },
    'view.list':       { 'zh-CN':'📋 列表', 'zh-HK':'📋 列表', 'en':'📋 List', 'ja':'📋 リスト', 'ko':'📋 리스트' },

    'empty.icon':     { 'zh-CN':'📸', 'zh-HK':'📸', 'en':'📸', 'ja':'📸', 'ko':'📸' },
    'empty.text':     { 'zh-CN':'上传图片开始转换 — 所有处理均在浏览器本地完成，文件不会上传到任何服务器！', 'zh-HK':'上傳圖片開始轉換 — 所有處理均在瀏覽器本機完成，檔案不會上載到任何伺服器！', 'en':'Upload images to start — All processing happens locally in your browser. Files are never uploaded!', 'ja':'画像をアップロードして開始 — すべての処理はブラウザ内で完結し、ファイルがサーバーにアップロードされることはありません！', 'ko':'이미지를 업로드하여 시작하세요 — 모든 처리는 브라우저에서 로컬로 수행되며 파일은 서버에 업로드되지 않습니다!' },

    'cookie.text':    { 'zh-CN':'本网站使用 Google AdSense 等服务以展示广告。继续使用即表示您同意我们使用 Cookie。详见', 'zh-HK':'本網站使用 Google AdSense 等服務以展示廣告。繼續使用即表示您同意我們使用 Cookie。詳見', 'en':'This site uses services like Google AdSense to display ads. By continuing, you agree to our use of cookies. See', 'ja':'このサイトではGoogle AdSenseなどのサービスを使用して広告を表示しています。続行するとCookieの使用に同意したことになります。', 'ko':'이 사이트는 Google AdSense와 같은 서비스를 사용하여 광고를 표시합니다. 계속 사용하면 쿠키 사용에 동의하는 것으로 간주됩니다. ' },
    'cookie.link':    { 'zh-CN':'隐私政策', 'zh-HK':'私隱政策', 'en':'Privacy Policy', 'ja':'プライバシーポリシー', 'ko':'개인정보처리방침' },
    'cookie.btn':     { 'zh-CN':'知道了', 'zh-HK':'知道了', 'en':'Got it', 'ja':'了解', 'ko':'확인' },

    'file.count':     { 'zh-CN':'{n} 个文件', 'zh-HK':'{n} 個檔案', 'en':'{n} file(s)', 'ja':'{n} ファイル', 'ko':'파일 {n}개' },
    'file.savings':   { 'zh-CN':'节省', 'zh-HK':'節省', 'en':'saved', 'ja':'削減', 'ko':'절약' },
    'file.more':      { 'zh-CN':'增大', 'zh-HK':'增大', 'en':'larger', 'ja':'増加', 'ko':'증가' },

    'footer.privacy': { 'zh-CN':'隐私政策', 'zh-HK':'私隱政策', 'en':'Privacy Policy',  'ja':'プライバシーポリシー', 'ko':'개인정보처리방침' },
    'footer.terms':   { 'zh-CN':'服务条款', 'zh-HK':'服務條款', 'en':'Terms of Service','ja':'利用規約',         'ko':'서비스 약관' },
    'footer.contact': { 'zh-CN':'联系我们', 'zh-HK':'聯絡我們', 'en':'Contact Us',      'ja':'お問い合わせ',     'ko':'문의하기' },
    'footer.about':   { 'zh-CN':'联系我们', 'zh-HK':'聯絡我們', 'en':'Contact Us',      'ja':'お問い合わせ',     'ko':'문의하기' },
    'footer.tagline': { 'zh-CN':'所有处理均在浏览器本地完成，文件不会上传到任何服务器', 'zh-HK':'所有處理均在瀏覽器本機完成，檔案不會上載到任何伺服器', 'en':'All processing happens locally in your browser — files are never uploaded', 'ja':'すべての処理はブラウザ内で完結し、ファイルがサーバーにアップロードされることはありません', 'ko':'모든 처리는 브라우저에서 로컬로 수행되며 파일은 서버에 업로드되지 않습니다' },
    'footer.copyright':{ en:'© 2026 Image format conversion. All rights reserved.', 'zh-CN':'© 2026 Image format conversion. All rights reserved.', 'zh-HK':'© 2026 Image format conversion. All rights reserved.', 'ja':'© 2026 Image format conversion. All rights reserved.', 'ko':'© 2026 Image format conversion. All rights reserved.' },

    'page.title.index':   { 'zh-CN':'Image format conversion - 浏览器本地处理，不上传服务器 | 图片格式转换 - 免费浏览器本地转换', 'zh-HK':'Image format conversion - 瀏覽器本機處理，不上載伺服器 | 圖片格式轉換 - 免費瀏覽器本機轉換', 'en':'Image format conversion - Local Processing, No Upload | Image Format Converter - Free Browser-Local Conversion', 'ja':'Image format conversion - ブラウザローカル処理、アップロード不要 | 画像フォーマット変換 - 無料ブラウザローカル変換', 'ko':'Image format conversion - 브라우저 로컬 처리, 업로드 없음 | 이미지 형식 변환 - 무료 브라우저 로컬 변환' },
    'page.subtitle':      { 'zh-CN':'浏览器本地处理，不上传服务器 | 免费浏览器图片格式转换器', 'zh-HK':'瀏覽器本機處理，不上載伺服器 | 免費瀏覽器圖片格式轉換器', 'en':'Local Processing, No Upload | Free Browser Image Format Converter', 'ja':'ブラウザローカル処理、アップロード不要 | 無料ブラウザ画像フォーマット変換', 'ko':'브라우저 로컬 처리, 업로드 없음 | 무료 브라우저 이미지 형식 변환기' },
    'page.desc.index':    { 'zh-CN':'Image format conversion - 免费图片格式转换工具，支持JPG、PNG、WebP、HEIC、SVG等50+格式互转。纯浏览器本地处理，图片不上传服务器，保护你的隐私安全。无需注册、无水印、不限次数，一键快速转换。还支持批量图片格式转换，轻松应对多张图片处理需求。无论你是设计师、电商卖家还是普通用户，都能在这里找到简单好用的图片格式转换解决方案。立即使用，完全免费。', 'zh-HK':'Image format conversion - 免費圖片格式轉換工具，支援JPG、PNG、WebP、HEIC、SVG等50+格式互轉。純瀏覽器本機處理，圖片不上載伺服器，保護你的私隱安全。無需註冊、無水印、不限次數，一鍵快速轉換。還支援批量圖片格式轉換，輕鬆應對多張圖片處理需求。無論你是設計師、電商賣家還是普通用戶，都能在這裡找到簡單好用的圖片格式轉換解決方案。立即使用，完全免費。', 'en':'Image format conversion - Free image format converter supporting 50+ formats including JPG, PNG, WebP, HEIC, SVG. Pure browser local processing — images never uploaded to any server, protecting your privacy. No registration, no watermarks, unlimited conversions, one-click quick conversion. Also supports batch image format conversion for multiple images. Whether you\'re a designer, e-commerce seller or casual user, find a simple and effective image format conversion solution here. Start now, completely free.', 'ja':'Image format conversion - JPG、PNG、WebP、HEIC、SVGなど50以上の形式に対応した無料画像フォーマット変換ツール。純粋なブラウザローカル処理で画像はサーバーにアップロードされず、プライバシーを保護します。登録不要、透かしなし、回数無制限、ワンクリックで高速変換。複数画像のバッチ変換にも対応。デザイナー、EC販売者、一般ユーザーを問わず、シンプルで使いやすい画像フォーマット変換ソリューションを提供します。今すぐ無料でご利用ください。', 'ko':'Image format conversion - JPG, PNG, WebP, HEIC, SVG 등 50개 이상의 형식을 지원하는 무료 이미지 형식 변환 도구. 순수 브라우저 로컬 처리로 이미지가 서버에 업로드되지 않아 개인정보를 보호합니다. 등록 불필요, 워터마크 없음, 무제한 변환, 원클릭 빠른 변환. 여러 이미지의 배치 형식 변환도 지원합니다. 디자이너, 전자상거래 판매자, 일반 사용자 누구나 간단하고 효과적인 이미지 형식 변환 솔루션을 찾을 수 있습니다. 지금 바로 무료로 시작하세요.' },
    'page.title.privacy': { 'zh-CN':'Image format conversion - 本地图片格式转换 - 图片不上传服务器，隐私100%安全', 'zh-HK':'Image format conversion - 本機圖片格式轉換 - 圖片不上載伺服器，私隱100%安全', 'en':'Image format conversion - Local Image Converter - No Server Upload, 100% Privacy Safe', 'ja':'Image format conversion - ローカル画像変換 - サーバーアップロード不要、プライバシー100%安全', 'ko':'Image format conversion - 로컬 이미지 변환 - 서버 업로드 없음, 개인정보 100% 안전' },
    'page.desc.privacy':  { 'zh-CN':'Image format conversion - 担心图片上传泄露隐私？这款图片格式转换工具全程在浏览器本地完成，所有图片数据不上传服务器，离线也能用。支持JPG、PNG、WebP、HEIC等主流格式互转，转换后图片自动清理，不留任何缓存。无需登录、无需安装软件，打开网页即可使用。适合处理证件照、合同扫描件、设计稿等敏感图片。免费、无水印、不限次数，真正安全的本地图片格式转换器，让你用得放心。', 'zh-HK':'Image format conversion - 擔心圖片上載洩露私隱？這款圖片格式轉換工具全程在瀏覽器本機完成，所有圖片數據不上載伺服器，離線也能用。支援JPG、PNG、WebP、HEIC等主流格式互轉，轉換後圖片自動清理，不留任何緩存。無需登錄、無需安裝軟件，打開網頁即可使用。適合處理證件照、合同掃描件、設計稿等敏感圖片。免費、無水印、不限次數，真正安全的本機圖片格式轉換器，讓你用得放心。', 'en':'Image format conversion - Worried about image uploads leaking your privacy? This image format converter works entirely in your browser locally — all image data stays on your device, never uploaded to any server, works offline too. Supports JPG, PNG, WebP, HEIC and other mainstream format conversions. Images are automatically cleaned up after conversion, leaving no cache behind. No login, no software installation, just open the webpage and use it. Perfect for sensitive images like ID photos, contract scans, and design drafts. Free, no watermarks, unlimited conversions — a truly secure local image format converter you can trust.', 'ja':'Image format conversion - 画像アップロードによるプライバシー漏洩が心配ですか？この画像フォーマット変換ツールはすべてブラウザローカルで完結し、すべての画像データはサーバーにアップロードされず、オフラインでも使用可能です。JPG、PNG、WebP、HEIC等の主要形式の相互変換に対応し、変換後の画像は自動的にクリーンアップされキャッシュは残りません。ログイン不要、ソフトウェアインストール不要、ウェブページを開くだけですぐに使用できます。証明写真、契約書スキャン、デザイン原稿などの機密画像の処理に最適です。無料、透かしなし、回数無制限、本当に安全なローカル画像フォーマット変換器です。', 'ko':'Image format conversion - 이미지 업로드로 인한 개인정보 유출이 걱정되시나요? 이 이미지 형식 변환 도구는 모든 작업이 브라우저 로컬에서 이루어지며, 모든 이미지 데이터는 서버에 업로드되지 않고 오프라인에서도 사용 가능합니다. JPG, PNG, WebP, HEIC 등 주요 형식 간 변환을 지원하며, 변환 후 이미지는 자동으로 정리되어 캐시가 남지 않습니다. 로그인 불필요, 소프트웨어 설치 불필요, 웹페이지를 열기만 하면 바로 사용할 수 있습니다. 증명사진, 계약서 스캔, 디자인 원고 등 민감한 이미지 처리에 적합합니다. 무료, 워터마크 없음, 무제한 변환 — 믿고 사용할 수 있는 진정한 보안 로컬 이미지 형식 변환기입니다.' },
    'page.title.terms':   { 'zh-CN':'Image format conversion - 服务条款 — Image format conversion', 'zh-HK':'Image format conversion - 服務條款 — Image format conversion', 'en':'Image format conversion - Terms of Service — Image format conversion', 'ja':'Image format conversion - 利用規約 — Image format conversion', 'ko':'Image format conversion - 서비스 약관 — Image format conversion' },
    'page.title.contact': { 'zh-CN':'Image format conversion - 联系我们 — Image format conversion', 'zh-HK':'Image format conversion - 聯絡我們 — Image format conversion', 'en':'Image format conversion - Contact Us — Image format conversion', 'ja':'Image format conversion - お問い合わせ — Image format conversion', 'ko':'Image format conversion - 문의하기 — Image format conversion' },
    'page.title.about':   { 'zh-CN':'Image format conversion - 联系我们 — Image format conversion', 'zh-HK':'Image format conversion - 聯絡我們 — Image format conversion', 'en':'Image format conversion - Contact Us — Image format conversion', 'ja':'Image format conversion - お問い合わせ — Image format conversion', 'ko':'Image format conversion - 문의하기 — Image format conversion' },

    'browser.notice': {
      'zh-CN':'⚠ 推荐使用 Chrome 内核浏览器（Chrome、Edge 等）以获得所有格式的最佳支持。Firefox 和 Safari 可能无法解码部分 RAW / HEIC 格式。',
      'zh-HK':'⚠ 建議使用 Chrome 內核瀏覽器（Chrome、Edge 等）以獲得所有格式的最佳支援。Firefox 和 Safari 可能無法解碼部分 RAW / HEIC 格式。',
      'en':'⚠ Chrome-based browsers (Chrome, Edge, etc.) are recommended for the best format support. Firefox and Safari may not decode some RAW / HEIC formats.',
      'ja':'⚠ すべての形式に最適な対応を得るには、Chrome系ブラウザ（Chrome、Edgeなど）をお勧めします。FirefoxやSafariでは一部のRAW/HEIC形式をデコードできない場合があります。',
      'ko':'⚠ 모든 형식을 최적으로 지원하려면 Chrome 기반 브라우저(Chrome, Edge 등)를 권장합니다. Firefox 및 Safari에서는 일부 RAW/HEIC 형식을 디코딩하지 못할 수 있습니다.'
    },

    'theme.dark_hint':  { 'zh-CN':'点击切换为白天模式', 'zh-HK':'點擊切換為白天模式', 'en':'Switch to light mode', 'ja':'ライトモードに切替', 'ko':'라이트 모드로 전환' },
    'theme.light_hint': { 'zh-CN':'点击切换为夜间模式', 'zh-HK':'點擊切換為夜間模式', 'en':'Switch to dark mode', 'ja':'ダークモードに切替', 'ko':'다크 모드로 전환' },
    'accent.cyan_hint':  { 'zh-CN':'点击切换为粉霓虹主题', 'zh-HK':'點擊切換為粉霓虹主題', 'en':'Switch to pink neon', 'ja':'ピンクネオンに切替', 'ko':'핑크 네온으로 전환' },
    'accent.magenta_hint': { 'zh-CN':'点击切换为青霓虹主题', 'zh-HK':'點擊切換為青霓虹主題', 'en':'Switch to cyan neon', 'ja':'シアンネオンに切替', 'ko':'시안 네온으로 전환' },

    /* ===== PRIVACY PAGE ===== */
    'privacy.h1':       { 'zh-CN':'隐私政策', 'zh-HK':'私隱政策', 'en':'Privacy Policy', 'ja':'プライバシーポリシー', 'ko':'개인정보처리방침' },
    'privacy.effective':{ 'zh-CN':'生效日期：2026 年 6 月 4 日', 'zh-HK':'生效日期：2026 年 6 月 4 日', 'en':'Effective Date: June 4, 2026', 'ja':'発効日：2026年6月4日', 'ko':'발효일: 2026년 6월 4일' },
    'privacy.content': {
      'zh-CN': `<p>Image format conversion（以下简称"我们"）非常重视您的隐私。本隐私政策说明了当您访问我们的网站时，我们如何收集、使用和保护您的信息。</p>
<h2>1. 我们收集的信息</h2>
<h3>1.1 自动收集的信息</h3>
<p>当您访问我们的网站时，我们和我们的广告合作伙伴可能会自动收集某些信息，包括：</p>
<ul><li>浏览器类型和版本</li><li>操作系统</li><li>IP 地址（匿名处理）</li><li>访问时间和日期</li><li>浏览行为（通过 Cookie 和类似技术）</li></ul>
<h3>1.2 我们不收集的信息</h3>
<ul><li>您的图片/文件内容 — 所有图片转换均在您的浏览器本地完成，不会上传到任何服务器</li><li>个人身份信息（姓名、邮箱、地址等）</li><li>支付信息</li></ul>
<h2>2. Cookie 的使用</h2>
<p>我们使用 Cookie 和类似追踪技术来：</p>
<ul><li>记住您的偏好设置</li><li>通过 Google AdSense 等服务展示相关广告</li><li>分析网站流量（使用 Google Analytics）</li></ul>
<p>您可以在浏览器设置中禁用 Cookie。但请注意，禁用 Cookie 可能影响部分功能的使用。</p>
<h2>3. 第三方服务</h2>
<h3>3.1 Google AdSense</h3>
<p>我们使用 Google AdSense 展示广告。Google 使用 Cookie 来展示基于用户兴趣的广告。您可以通过访问 Google 广告设置来选择退出。</p>
<h3>3.2 Google Analytics</h3>
<p>我们使用 Google Analytics 来分析网站流量。</p>
<h3>3.3 JSZip (CDN)</h3>
<p>我们通过 jsDelivr CDN 加载 JSZip 库以提供 ZIP 下载功能。</p>
<h2>4. 数据共享</h2>
<p>我们不会向第三方出售、交易或转让您的个人信息。自动收集的匿名数据可能通过 Cookie 与我们的广告和分析合作伙伴共享。</p>
<h2>5. 数据安全</h2>
<p>由于所有图片处理均在您的浏览器本地完成，且我们不存储任何上传的文件，因此不存在文件泄露的风险。</p>
<h2>6. 儿童隐私</h2>
<p>我们的服务不面向 13 岁以下的儿童。</p>
<h2>7. 您的权利</h2>
<p>根据适用的隐私法律（如 GDPR、CCPA），您有权：访问我们持有的关于您的个人数据、要求删除您的个人数据、选择退出定向广告、撤回同意。</p>
<h2>8. 联系我们</h2>
<p>如果您对本隐私政策有任何疑问，请通过我们的联系页面与我们联系。</p>
<h2>9. 政策更新</h2>
<p>我们可能会不时更新本隐私政策。所有更新将在本页面上发布。</p>`,
      'zh-HK': `<p>Image format conversion（以下簡稱"我們"）非常重視您的私隱。本私隱政策說明了當您訪問我們的網站時，我們如何收集、使用和保護您的資訊。</p>
<h2>1. 我們收集的資訊</h2>
<h3>1.1 自動收集的資訊</h3>
<p>當您訪問我們的網站時，我們和我們的廣告合作夥伴可能會自動收集某些資訊，包括：</p>
<ul><li>瀏覽器類型和版本</li><li>操作系統</li><li>IP 地址（匿名處理）</li><li>訪問時間和日期</li><li>瀏覽行為（通過 Cookie 和類似技術）</li></ul>
<h3>1.2 我們不收集的資訊</h3>
<ul><li>您的圖片/檔案內容 — 所有圖片轉換均在您的瀏覽器本機完成，不會上載到任何伺服器</li><li>個人身份資訊（姓名、電郵、地址等）</li><li>支付資訊</li></ul>
<h2>2. Cookie 的使用</h2>
<p>我們使用 Cookie 和類似追蹤技術來：</p>
<ul><li>記住您的偏好設定</li><li>通過 Google AdSense 等服務展示相關廣告</li><li>分析網站流量（使用 Google Analytics）</li></ul>
<p>您可以在瀏覽器設定中禁用 Cookie。</p>
<h2>3. 第三方服務</h2>
<h3>3.1 Google AdSense</h3>
<p>我們使用 Google AdSense 展示廣告。Google 使用 Cookie 來展示基於用戶興趣的廣告。</p>
<h3>3.2 Google Analytics</h3>
<p>我們使用 Google Analytics 來分析網站流量。</p>
<h3>3.3 JSZip (CDN)</h3>
<p>我們通過 jsDelivr CDN 加載 JSZip 庫以提供 ZIP 下載功能。</p>
<h2>4. 數據共享</h2>
<p>我們不會向第三方出售、交易或轉讓您的個人資訊。</p>
<h2>5. 數據安全</h2>
<p>由於所有圖片處理均在您的瀏覽器本機完成，且我們不存儲任何上載的檔案，因此不存在檔案洩露的風險。</p>
<h2>6. 兒童私隱</h2>
<p>我們的服務不面向 13 歲以下的兒童。</p>
<h2>7. 您的權利</h2>
<p>根據適用的私隱法律（如 GDPR），您有權：訪問我們持有的關於您的個人數據、要求刪除您的個人數據、選擇退出定向廣告、撤回同意。</p>
<h2>8. 聯絡我們</h2>
<p>如果您對本私隱政策有任何疑問，請通過我們的聯絡頁面與我們聯絡。</p>
<h2>9. 政策更新</h2>
<p>我們可能會不時更新本私隱政策。所有更新將在本頁面上發佈。</p>`,
      'en': `<p>Image format conversion ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.</p>
<h2>1. Information We Collect</h2>
<h3>1.1 Automatically Collected Information</h3>
<p>When you visit our website, we and our advertising partners may automatically collect certain information, including:</p>
<ul><li>Browser type and version</li><li>Operating system</li><li>IP address (anonymized)</li><li>Date and time of visit</li><li>Browsing behavior (via cookies and similar technologies)</li></ul>
<h3>1.2 Information We Do NOT Collect</h3>
<ul><li>Your images/files — all image conversion happens locally in your browser; files are never uploaded</li><li>Personal identification information (name, email, address, etc.)</li><li>Payment information</li></ul>
<h2>2. Use of Cookies</h2>
<p>We use cookies and similar tracking technologies to:</p>
<ul><li>Remember your preferences</li><li>Display relevant ads via Google AdSense and similar services</li><li>Analyze website traffic (via Google Analytics)</li></ul>
<p>You can disable cookies in your browser settings.</p>
<h2>3. Third-Party Services</h2>
<h3>3.1 Google AdSense</h3>
<p>We use Google AdSense to display advertisements. Google uses cookies to serve interest-based ads. You can opt out via Google Ads Settings.</p>
<h3>3.2 Google Analytics</h3>
<p>We use Google Analytics to analyze website traffic.</p>
<h3>3.3 JSZip (CDN)</h3>
<p>We load the JSZip library via jsDelivr CDN to provide ZIP download functionality.</p>
<h2>4. Data Sharing</h2>
<p>We do not sell, trade, or transfer your personal information to third parties.</p>
<h2>5. Data Security</h2>
<p>Since all image processing happens locally in your browser and we store no uploaded files, there is no risk of file leakage.</p>
<h2>6. Children's Privacy</h2>
<p>Our service is not directed at children under the age of 13.</p>
<h2>7. Your Rights</h2>
<p>Under applicable privacy laws (such as GDPR, CCPA), you have the right to: access, delete, opt out of targeted advertising, and withdraw consent.</p>
<h2>8. Contact Us</h2>
<p>If you have questions about this Privacy Policy, please contact us via our contact page.</p>
<h2>9. Policy Updates</h2>
<p>We may update this Privacy Policy from time to time. All updates will be posted on this page.</p>`,
      'ja': `<p>Image format conversion（以下「当社」）は、お客様のプライバシーを尊重します。本プライバシーポリシーは、当社ウェブサイト訪問時の情報の収集、使用、保護について説明します。</p>
<h2>1. 収集する情報</h2>
<h3>1.1 自動収集される情報</h3>
<ul><li>ブラウザの種類とバージョン</li><li>オペレーティングシステム</li><li>IPアドレス（匿名化）</li><li>アクセス日時</li><li>閲覧行動（Cookieおよび類似技術による）</li></ul>
<h3>1.2 収集しない情報</h3>
<ul><li>画像/ファイル内容 — すべての変換はブラウザ内で行われ、サーバーにアップロードされません</li><li>個人識別情報（名前、メール、住所など）</li><li>支払い情報</li></ul>
<h2>2. Cookieの使用</h2>
<p>当社は以下の目的でCookieを使用します：設定の記憶、Google AdSense経由の広告表示、Google Analyticsによるトラフィック分析。</p>
<h2>3. 第三者サービス</h2>
<h3>3.1 Google AdSense</h3><p>広告表示にGoogle AdSenseを使用しています。</p>
<h3>3.2 Google Analytics</h3><p>トラフィック分析にGoogle Analyticsを使用しています。</p>
<h3>3.3 JSZip (CDN)</h3><p>ZIPダウンロード機能のためにjsDelivr CDNからJSZipを読み込んでいます。</p>
<h2>4. データ共有</h2><p>個人情報を第三者に販売、取引、譲渡することはありません。</p>
<h2>5. データセキュリティ</h2><p>すべての画像処理はブラウザ内で行われ、ファイルは保存されないため、漏洩のリスクはありません。</p>
<h2>6. 子供のプライバシー</h2><p>本サービスは13歳未満の子供を対象としていません。</p>
<h2>7. お客様の権利</h2><p>適用されるプライバシー法（GDPR等）に基づき、アクセス、削除、オプトアウト、同意撤回の権利があります。</p>
<h2>8. お問い合わせ</h2><p>ご質問はお問い合わせページからご連絡ください。</p>
<h2>9. ポリシーの更新</h2><p>本ポリシーは随時更新されることがあります。</p>`,
      'ko': `<p>Image format conversion("당사")는 귀하의 개인정보를 소중히 보호합니다. 본 개인정보처리방침은 당사 웹사이트 방문 시 정보 수집, 사용 및 보호 방법을 설명합니다.</p>
<h2>1. 수집하는 정보</h2>
<h3>1.1 자동 수집 정보</h3>
<ul><li>브라우저 유형 및 버전</li><li>운영체제</li><li>IP 주소(익명화)</li><li>방문 일시</li><li>쿠키 및 유사 기술을 통한 브라우징 행동</li></ul>
<h3>1.2 수집하지 않는 정보</h3>
<ul><li>이미지/파일 내용 — 모든 변환은 브라우저에서 로컬로 수행되며 서버에 업로드되지 않습니다</li><li>개인 식별 정보(이름, 이메일, 주소 등)</li><li>결제 정보</li></ul>
<h2>2. 쿠키 사용</h2>
<p>당사는 환경설정 기억, Google AdSense를 통한 광고 표시, Google Analytics를 통한 트래픽 분석을 위해 쿠키를 사용합니다.</p>
<h2>3. 제3자 서비스</h2>
<h3>3.1 Google AdSense</h3><p>광고 표시를 위해 Google AdSense를 사용합니다.</p>
<h3>3.2 Google Analytics</h3><p>트래픽 분석을 위해 Google Analytics를 사용합니다.</p>
<h3>3.3 JSZip (CDN)</h3><p>ZIP 다운로드 기능을 위해 jsDelivr CDN에서 JSZip을 로드합니다.</p>
<h2>4. 데이터 공유</h2><p>개인정보를 제3자에게 판매, 거래 또는 이전하지 않습니다.</p>
<h2>5. 데이터 보안</h2><p>모든 이미지 처리가 브라우저에서 로컬로 수행되며 파일을 저장하지 않으므로 유출 위험이 없습니다.</p>
<h2>6. 아동 개인정보</h2><p>본 서비스는 13세 미만의 아동을 대상으로 하지 않습니다.</p>
<h2>7. 귀하의 권리</h2><p>관련 개인정보 보호법에 따라 접근, 삭제, 타겟 광고 거부, 동의 철회 권리가 있습니다.</p>
<h2>8. 문의하기</h2><p>본 개인정보처리방침에 대한 질문은 문의 페이지를 통해 연락해 주세요.</p>
<h2>9. 정책 업데이트</h2><p>본 정책은 수시로 업데이트될 수 있습니다.</p>`
    },

    /* ===== TERMS PAGE ===== */
    'terms.h1':  { 'zh-CN':'服务条款', 'zh-HK':'服務條款', 'en':'Terms of Service', 'ja':'利用規約', 'ko':'서비스 약관' },
    'terms.effective': { 'zh-CN':'生效日期：2026 年 6 月 4 日', 'zh-HK':'生效日期：2026 年 6 月 4 日', 'en':'Effective Date: June 4, 2026', 'ja':'発効日：2026年6月4日', 'ko':'발효일: 2026년 6월 4일' },
    'terms.content': {
      'zh-CN': `<p>欢迎使用 Image format conversion（以下简称"服务"）。使用我们的网站即表示您同意以下条款。</p>
<h2>1. 服务描述</h2><p>Image format conversion 是一个免费的在线图片格式转换工具。所有图片处理均在您的浏览器本地完成，文件不会上传到我们的服务器。</p>
<h2>2. 使用条款</h2><ul><li>本服务按"现状"提供，仅供个人及商业用途使用</li><li>您不得将本服务用于任何非法或未经授权的目的</li><li>您不得尝试干扰本服务的正常运行</li><li>我们保留随时修改或终止服务的权利</li></ul>
<h2>3. 知识产权</h2><p>您保留通过本服务处理的图片的完整所有权。网站本身的代码、设计和内容为 Image format conversion 所有。</p>
<h2>4. 免责声明</h2><p>本服务按"现状"提供，不附带任何明示或暗示的保证。您使用本服务的风险由您自行承担。</p>
<h2>5. 责任限制</h2><p>在法律允许的最大范围内，Image format conversion 不对因使用或无法使用本服务而产生的任何直接、间接、附带或结果性损害承担责任。</p>
<h2>6. 第三方链接和广告</h2><p>我们的网站可能包含第三方广告（如 Google AdSense）和指向外部网站的链接。我们不对这些第三方内容负责。</p>
<h2>7. 终止</h2><p>如果我们认为您违反了这些条款，我们保留终止或暂停您访问服务的权利。</p>
<h2>8. 适用法律</h2><p>这些条款受中华人民共和国法律管辖。</p>
<h2>9. 条款变更</h2><p>我们保留随时修改这些条款的权利。继续使用服务即表示接受修改后的条款。</p>
<h2>10. 联系我们</h2><p>如果您对这些条款有任何疑问，请通过我们的联系页面与我们联系。</p>`,
      'zh-HK': `<p>歡迎使用 Image format conversion（以下簡稱"服務"）。使用我們的網站即表示您同意以下條款。</p>
<h2>1. 服務描述</h2><p>Image format conversion 是一個免費的線上圖片格式轉換工具。所有圖片處理均在您的瀏覽器本機完成，檔案不會上載到我們的伺服器。</p>
<h2>2. 使用條款</h2><ul><li>本服務按"現狀"提供，僅供個人及商業用途使用</li><li>您不得將本服務用於任何非法或未經授權的目的</li><li>我們保留隨時修改或終止服務的權利</li></ul>
<h2>3. 知識產權</h2><p>您保留通過本服務處理的圖片的完整所有權。網站本身的代碼、設計和內容為 Image format conversion 所有。</p>
<h2>4. 免責聲明</h2><p>本服務按"現狀"提供，不附帶任何明示或暗示的保證。</p>
<h2>5. 責任限制</h2><p>在法律允許的最大範圍內，Image format conversion 不對因使用本服務而產生的任何損害承擔責任。</p>
<h2>6. 第三方連結和廣告</h2><p>我們的網站可能包含第三方廣告和外部連結。我們不對這些第三方內容負責。</p>
<h2>7. 終止</h2><p>我們保留在違反條款時終止或暫停您訪問服務的權利。</p>
<h2>8. 適用法律</h2><p>這些條款受中華人民共和國香港特別行政區法律管轄。</p>
<h2>9. 條款變更</h2><p>我們保留隨時修改這些條款的權利。</p>
<h2>10. 聯絡我們</h2><p>如果您對這些條款有任何疑問，請通過我們的聯絡頁面與我們聯絡。</p>`,
      'en': `<p>Welcome to Image format conversion ("Service"). By using our website, you agree to these terms.</p>
<h2>1. Service Description</h2><p>Image format conversion is a free online image format converter. All processing happens locally in your browser; files are never uploaded.</p>
<h2>2. Terms of Use</h2><ul><li>The Service is provided "as is" for personal and commercial use</li><li>You may not use the Service for any illegal or unauthorized purpose</li><li>We reserve the right to modify or discontinue the Service at any time</li></ul>
<h2>3. Intellectual Property</h2><p>You retain full ownership of images processed through the Service. The website code, design, and content are owned by Image format conversion.</p>
<h2>4. Disclaimer</h2><p>The Service is provided "as is" without warranties of any kind. Use at your own risk.</p>
<h2>5. Limitation of Liability</h2><p>To the fullest extent permitted by law, Image format conversion shall not be liable for any damages arising from use of the Service.</p>
<h2>6. Third-Party Links & Ads</h2><p>Our website may contain third-party ads (e.g., Google AdSense) and external links. We are not responsible for third-party content.</p>
<h2>7. Termination</h2><p>We reserve the right to terminate or suspend access for violations of these terms.</p>
<h2>8. Governing Law</h2><p>These terms are governed by the laws of the People's Republic of China.</p>
<h2>9. Changes to Terms</h2><p>We reserve the right to modify these terms at any time.</p>
<h2>10. Contact</h2><p>If you have questions about these terms, please contact us via our contact page.</p>`,
      'ja': `<p>Image format conversion（以下「本サービス」）へようこそ。本サイトの利用により、以下の利用規約に同意したものとみなされます。</p>
<h2>1. サービスの説明</h2><p>Image format conversionは無料のオンライン画像変換ツールです。すべての処理はブラウザ内で行われ、ファイルはアップロードされません。</p>
<h2>2. 利用条件</h2><ul><li>本サービスは「現状のまま」提供され、個人および商用利用が可能です</li><li>違法または不正な目的での使用は禁止します</li><li>当社は事前通知なくサービスの変更または中止を行う権利を留保します</li></ul>
<h2>3. 知的財産権</h2><p>処理された画像の所有権はお客様に帰属します。サイトのコード、デザイン、コンテンツはImage format conversionが所有します。</p>
<h2>4. 免責事項</h2><p>本サービスはいかなる保証もなく「現状のまま」提供されます。自己責任でご利用ください。</p>
<h2>5. 責任の制限</h2><p>法律で許容される最大限の範囲において、Image format conversionは本サービスの利用から生じる損害について責任を負いません。</p>
<h2>6. 第三者リンクと広告</h2><p>本サイトにはGoogle AdSense等の第三者広告や外部リンクが含まれる場合があります。</p>
<h2>7. 終了</h2><p>利用規約違反があった場合、アクセスを終了または停止する権利を留保します。</p>
<h2>8. 準拠法</h2><p>本規約は日本法に準拠します。</p>
<h2>9. 規約の変更</h2><p>当社は随時本規約を変更する権利を留保します。</p>
<h2>10. お問い合わせ</h2><p>ご質問はお問い合わせページからご連絡ください。</p>`,
      'ko': `<p>Image format conversion("서비스")에 오신 것을 환영합니다. 당사 웹사이트를 사용함으로써 귀하는 본 약관에 동의하게 됩니다.</p>
<h2>1. 서비스 설명</h2><p>Image format conversion는 무료 온라인 이미지 형식 변환 도구입니다. 모든 처리는 브라우저에서 로컬로 수행되며 파일은 서버에 업로드되지 않습니다.</p>
<h2>2. 이용 약관</h2><ul><li>본 서비스는 "있는 그대로" 제공되며 개인 및 상업적 용도로 사용 가능합니다</li><li>불법적이거나 무단 목적으로 서비스를 사용할 수 없습니다</li><li>당사는 언제든지 서비스를 수정하거나 중단할 권리를 보유합니다</li></ul>
<h2>3. 지식 재산권</h2><p>서비스를 통해 처리된 이미지의 소유권은 귀하에게 있습니다. 웹사이트 코드, 디자인 및 콘텐츠는 Image format conversion가 소유합니다.</p>
<h2>4. 면책 조항</h2><p>본 서비스는 어떠한 보증도 없이 "있는 그대로" 제공됩니다. 자신의 책임하에 사용하십시오.</p>
<h2>5. 책임 제한</h2><p>법이 허용하는 최대 범위 내에서 Image format conversion는 서비스 사용으로 인한 손해에 대해 책임을 지지 않습니다.</p>
<h2>6. 제3자 링크 및 광고</h2><p>당사 웹사이트에는 Google AdSense와 같은 제3자 광고 및 외부 링크가 포함될 수 있습니다.</p>
<h2>7. 종료</h2><p>약관 위반 시 서비스 액세스를 종료하거나 중단할 권리를 보유합니다.</p>
<h2>8. 준거법</h2><p>본 약관은 대한민국 법률의 적용을 받습니다.</p>
<h2>9. 약관 변경</h2><p>당사는 언제든지 본 약관을 수정할 권리를 보유합니다.</p>
<h2>10. 문의</h2><p>약관에 대한 질문이 있으시면 문의 페이지를 통해 연락해 주십시오.</p>`
    },

    /* ===== CONTACT PAGE ===== */
    'contact.h1': { 'zh-CN':'联系我们', 'zh-HK':'聯絡我們', 'en':'Contact Us', 'ja':'お問い合わせ', 'ko':'문의하기' },
    'contact.intro': {
      'zh-CN':'我们乐意听取您的意见！无论您有功能建议、错误报告还是广告合作意向，都可以通过以下方式联系我们。',
      'zh-HK':'我們樂意聽取您的意見！無論您有功能建議、錯誤報告還是廣告合作意向，都可以通過以下方式聯絡我們。',
      'en':'We\'d love to hear from you! Whether you have feature suggestions, bug reports, or advertising inquiries, feel free to reach out.',
      'ja':'ご意見をお待ちしております！機能提案、バグ報告、広告に関するお問い合わせなど、お気軽にご連絡ください。',
      'ko':'의견을 기다립니다! 기능 제안, 버그 신고, 광고 문의 등 언제든지 연락해 주세요.'
    },
    'contact.email.label': { 'zh-CN':'📧 电子邮件', 'zh-HK':'📧 電郵', 'en':'📧 Email', 'ja':'📧 メール', 'ko':'📧 이메일' },
    'contact.feedback.label': { 'zh-CN':'🐛 功能建议 / 问题反馈', 'zh-HK':'🐛 功能建議 / 問題反饋', 'en':'🐛 Feature Requests / Bug Reports', 'ja':'🐛 機能提案 / バグ報告', 'ko':'🐛 기능 제안 / 버그 신고' },
    'contact.feedback.text': {
      'zh-CN':'请通过邮件联系我们，并在标题中注明 [反馈] 或 [问题]。如果您有功能建议，请详细描述使用场景。',
      'zh-HK':'請通過電郵聯絡我們，並在標題中註明 [反饋] 或 [問題]。如果您有功能建議，請詳細描述使用場景。',
      'en':'Please email us with [Feedback] or [Bug] in the subject line. For feature suggestions, please describe your use case in detail.',
      'ja':'件名に [フィードバック] または [バグ] と明記してメールでご連絡ください。機能提案の場合は、ユースケースを詳しく説明してください。',
      'ko':'제목에 [피드백] 또는 [버그]를 명시하여 이메일로 연락해 주세요. 기능 제안의 경우 사용 사례를 자세히 설명해 주세요.'
    },
    'contact.ads.label': { 'zh-CN':'📢 广告合作', 'zh-HK':'📢 廣告合作', 'en':'📢 Advertising Inquiries', 'ja':'📢 広告に関するお問い合わせ', 'ko':'📢 광고 문의' },
    'contact.ads.text': {
      'zh-CN':'我们欢迎广告合作意向。请通过邮件联系我们，标题注明 [广告合作]，我们会尽快回复。',
      'zh-HK':'我們歡迎廣告合作意向。請通過電郵聯絡我們，標題註明 [廣告合作]，我們會盡快回覆。',
      'en':'We welcome advertising partnership inquiries. Please email us with [Advertising] in the subject line, and we\'ll get back to you promptly.',
      'ja':'広告提携のお問い合わせを歓迎します。件名に [広告] と明記してメールでご連絡ください。迅速に対応いたします。',
      'ko':'광고 제휴 문의를 환영합니다. 제목에 [광고]를 명시하여 이메일로 연락해 주시면 신속히 답변 드리겠습니다.'
    },
    'contact.faq': { 'zh-CN':'常见问题', 'zh-HK':'常見問題', 'en':'FAQ', 'ja':'よくある質問', 'ko':'자주 묻는 질문' },
    'contact.faq1.q': { 'zh-CN':'图片会上传到服务器吗？', 'zh-HK':'圖片會上載到伺服器嗎？', 'en':'Are images uploaded to a server?', 'ja':'画像はサーバーにアップロードされますか？', 'ko':'이미지가 서버에 업로드되나요?' },
    'contact.faq1.a': { 'zh-CN':'不会。所有转换均在您的浏览器本地完成。', 'zh-HK':'不會。所有轉換均在您的瀏覽器本機完成。', 'en':'No. All conversion happens locally in your browser.', 'ja':'いいえ。すべての変換はブラウザ内で行われます。', 'ko':'아니요. 모든 변환은 브라우저에서 로컬로 수행됩니다.' },
    'contact.faq2.q': { 'zh-CN':'有文件大小限制吗？', 'zh-HK':'有檔案大小限制嗎？', 'en':'Is there a file size limit?', 'ja':'ファイルサイズ制限はありますか？', 'ko':'파일 크기 제한이 있나요?' },
    'contact.faq2.a': { 'zh-CN':'没有硬性限制，但超大文件可能受浏览器内存限制。', 'zh-HK':'沒有硬性限制，但超大檔案可能受瀏覽器記憶體限制。', 'en':'No hard limit, but very large files may be constrained by browser memory.', 'ja':'厳格な制限はありませんが、非常に大きなファイルはブラウザのメモリ制約を受ける場合があります。', 'ko':'엄격한 제한은 없지만 매우 큰 파일은 브라우저 메모리 제약을 받을 수 있습니다.' },
    'contact.faq3.q': { 'zh-CN':'支持批量转换吗？', 'zh-HK':'支援批量轉換嗎？', 'en':'Is batch conversion supported?', 'ja':'バッチ変換は対応していますか？', 'ko':'일괄 변환이 지원되나요?' },
    'contact.faq3.a': { 'zh-CN':'支持，可同时转换多张图片。', 'zh-HK':'支援，可同時轉換多張圖片。', 'en':'Yes, you can convert multiple images at once.', 'ja':'はい、複数の画像を同時に変換できます。', 'ko':'네, 여러 이미지를 한 번에 변환할 수 있습니다.' },

    /* ===== ABOUT PAGE ===== */
    'about.h1':    { 'zh-CN':'关于 Image format conversion', 'zh-HK':'關於 Image format conversion', 'en':'About Image format conversion', 'ja':'Image format conversionについて', 'ko':'Image format conversion 소개' },
    'about.intro': {
      'zh-CN':'Image format conversion 是一个完全免费的在线图片格式转换工具。我们的使命是为所有人提供快速、私密、零门槛的图片处理体验。',
      'zh-HK':'Image format conversion 是一個完全免費的線上圖片格式轉換工具。我們的使命是為所有人提供快速、私密、零門檻的圖片處理體驗。',
      'en':'Image format conversion is a completely free online image format converter. Our mission is to provide fast, private, zero-friction image processing for everyone.',
      'ja':'Image format conversionは完全無料のオンライン画像変換ツールです。すべての人に高速でプライバシーを守り、障壁のない画像処理体験を提供することをミッションとしています。',
      'ko':'Image format conversion는 완전 무료 온라인 이미지 형식 변환 도구입니다. 우리의 사명은 모든 사람에게 빠르고 비공개적이며 장벽 없는 이미지 처리 경험을 제공하는 것입니다.'
    },
    'about.card1.title': { 'zh-CN':'隐私优先', 'zh-HK':'私隱優先', 'en':'Privacy First', 'ja':'プライバシー優先', 'ko':'개인정보 보호 우선' },
    'about.card1.text':  { 'zh-CN':'所有图片处理在您的浏览器本地完成，文件不会上传到任何服务器。断网也能用。', 'zh-HK':'所有圖片處理在您的瀏覽器本機完成，檔案不會上載到任何伺服器。離線也能用。', 'en':'All processing happens locally in your browser. Files are never uploaded. Works offline.', 'ja':'すべての処理はブラウザ内で完結。ファイルのアップロードなし。オフラインでも使用可能。', 'ko':'모든 처리가 브라우저에서 로컬로 수행됩니다. 파일이 서버에 업로드되지 않습니다. 오프라인에서도 작동합니다.' },
    'about.card2.title': { 'zh-CN':'极速处理', 'zh-HK':'極速處理', 'en':'Blazing Fast', 'ja':'超高速処理', 'ko':'초고속 처리' },
    'about.card2.text':  { 'zh-CN':'利用现代浏览器 API，无需等待上传和下载。', 'zh-HK':'利用現代瀏覽器 API，無需等待上載和下載。', 'en':'Powered by modern browser APIs. No upload/download wait time.', 'ja':'最新のブラウザAPIを活用。アップロード・ダウンロード待ちなし。', 'ko':'최신 브라우저 API로 구동됩니다. 업로드/다운로드 대기 시간이 없습니다.' },
    'about.card3.title': { 'zh-CN':'完全免费', 'zh-HK':'完全免費', 'en':'100% Free', 'ja':'完全無料', 'ko':'100% 무료' },
    'about.card3.text':  { 'zh-CN':'无订阅、无文件数量限制、无文件大小限制，永久免费。', 'zh-HK':'無訂閱、無檔案數量限制、無檔案大小限制，永久免費。', 'en':'No subscriptions, no file count limits, no file size limits. Free forever.', 'ja':'サブスクリプションなし、ファイル数無制限、サイズ制限なし。永久無料。', 'ko':'구독 없음, 파일 수 제한 없음, 파일 크기 제한 없음. 영원히 무료.' },
    'about.card4.title': { 'zh-CN':'专业功能', 'zh-HK':'專業功能', 'en':'Pro Features', 'ja':'プロ仕様', 'ko':'전문가 기능' },
    'about.card4.text':  { 'zh-CN':'支持自定义质量、批量缩放、多格式输出，满足专业需求。', 'zh-HK':'支援自訂質量、批量縮放、多格式輸出，滿足專業需求。', 'en':'Custom quality, batch resize, multi-format output for professional needs.', 'ja':'カスタム品質、一括リサイズ、マルチフォーマット出力に対応。', 'ko':'사용자 정의 품질, 일괄 크기 조정, 다중 형식 출력으로 전문가 요구를 충족합니다.' },
    'about.tech':    { 'zh-CN':'支持的技术特性', 'zh-HK':'支援的技術特性', 'en':'Technical Features', 'ja':'技術仕様', 'ko':'기술 기능' },
    'about.tech.input': {
      'zh-CN':'输入格式 — 常见图片：JPG · PNG · GIF · WebP · AVIF · ICO · BMP · SVG · HEIC · JPE · JFIF | 大型文档：PSD · TIFF · TGA · HDR · FITS · PPM · PGM · PFM · MNG · DDS | 相机 RAW（50+）：CR2 · NEF · ARW · DNG · RW2 · ORF · PEF · RAF · SRW 等 | PDF',
      'zh-HK':'輸入格式 — 常見圖片：JPG · PNG · GIF · WebP · AVIF · ICO · BMP · SVG · HEIC · JPE · JFIF | 大型文檔：PSD · TIFF · TGA · HDR · FITS · PPM · PGM · PFM · MNG · DDS | 相機 RAW（50+）：CR2 · NEF · ARW · DNG · RW2 · ORF · PEF · RAF · SRW 等 | PDF',
      'en':'Input formats — Images: JPG · PNG · GIF · WebP · AVIF · ICO · BMP · SVG · HEIC · JPE · JFIF | Documents: PSD · TIFF · TGA · HDR · FITS · PPM · PGM · PFM · MNG · DDS | Camera RAW (50+): CR2 · NEF · ARW · DNG · RW2 · ORF · PEF · RAF · SRW etc | PDF',
      'ja':'入力形式 — 画像：JPG · PNG · GIF · WebP · AVIF · ICO · BMP · SVG · HEIC · JPE · JFIF | 文書：PSD · TIFF · TGA · HDR · FITS · PPM · PGM · PFM · MNG · DDS | カメラRAW（50+）：CR2 · NEF · ARW · DNG · RW2 · ORF · PEF · RAF · SRW 他 | PDF',
      'ko':'입력 형식 — 이미지: JPG · PNG · GIF · WebP · AVIF · ICO · BMP · SVG · HEIC · JPE · JFIF | 문서: PSD · TIFF · TGA · HDR · FITS · PPM · PGM · PFM · MNG · DDS | 카메라 RAW (50+): CR2 · NEF · ARW · DNG · RW2 · ORF · PEF · RAF · SRW 등 | PDF'
    },
    'about.tech.output': { 'zh-CN':'输出格式：WebP、AVIF、PNG、JPEG、GIF、BMP、TIFF、ICO', 'zh-HK':'輸出格式：WebP、AVIF、PNG、JPEG、GIF、BMP、TIFF、ICO', 'en':'Output formats: WebP, AVIF, PNG, JPEG, GIF, BMP, TIFF, ICO', 'ja':'出力形式：WebP、AVIF、PNG、JPEG、GIF、BMP、TIFF、ICO', 'ko':'출력 형식: WebP, AVIF, PNG, JPEG, GIF, BMP, TIFF, ICO' },
    'about.tech.batch':  { 'zh-CN':'批量处理：支持多张图片同时转换', 'zh-HK':'批量處理：支援多張圖片同時轉換', 'en':'Batch processing: convert multiple images at once', 'ja':'一括処理：複数画像の同時変換に対応', 'ko':'일괄 처리: 여러 이미지를 한 번에 변환' },
    'about.tech.quality':{ 'zh-CN':'质量控制：1-100% 可调节', 'zh-HK':'質量控制：1-100% 可調節', 'en':'Quality control: adjustable 1-100%', 'ja':'品質管理：1～100%で調整可能', 'ko':'품질 제어: 1-100% 조정 가능' },
    'about.tech.resize': { 'zh-CN':'缩放功能：自定义宽高，支持保持比例', 'zh-HK':'縮放功能：自訂寬高，支援保持比例', 'en':'Resize: custom width/height with aspect ratio lock', 'ja':'リサイズ：縦横比を維持したカスタムサイズ変更', 'ko':'크기 조정: 비율 유지로 사용자 정의 너비/높이' },
    'about.tech.zip':    { 'zh-CN':'批量下载：ZIP 打包一键下载', 'zh-HK':'批量下載：ZIP 打包一鍵下載', 'en':'Bulk download: one-click ZIP archive', 'ja':'一括ダウンロード：ワンクリックZIP保存', 'ko':'일괄 다운로드: 원클릭 ZIP 아카이브' },
    'about.support':     { 'zh-CN':'如何支持我们', 'zh-HK':'如何支持我們', 'en':'How to Support Us', 'ja':'サポート方法', 'ko':'후원 방법' },
    'about.support.text':{
      'zh-CN':'Image format conversion 是完全免费的工具。网站的运营依赖于广告收入来支付服务器和域名费用。我们通过 Google AdSense 展示非侵入式广告。如果您喜欢我们的服务，将我们推荐给朋友就是对我们最大的支持！',
      'zh-HK':'Image format conversion 是完全免費的工具。網站的運營依賴於廣告收入來支付伺服器和域名費用。我們通過 Google AdSense 展示非侵入式廣告。如果您喜歡我們的服務，將我們推薦給朋友就是對我們最大的支持！',
      'en':'Image format conversion is a completely free tool. The site relies on ad revenue to cover server and domain costs. We display non-intrusive ads via Google AdSense. If you like our service, recommending us to friends is the best way to support us!',
      'ja':'Image format conversionは完全無料のツールです。サーバーとドメインの費用は広告収入でまかなっています。Google AdSenseを通じて控えめな広告を表示しています。気に入っていただけたら、お友達に紹介していただくことが最大のサポートです！',
      'ko':'Image format conversion는 완전 무료 도구입니다. 사이트 운영은 서버 및 도메인 비용을 충당하기 위해 광고 수익에 의존합니다. Google AdSense를 통해 비침입적 광고를 표시합니다. 저희 서비스가 마음에 드셨다면 친구에게 추천해 주시는 것이 가장 큰 힘이 됩니다!'
    },

    /* ===== FORMAT GUIDE ===== */
    'guide.title': { 'zh-CN':'📖 图片格式详解', 'zh-HK':'📖 圖片格式詳解', 'en':'📖 Image Format Guide', 'ja':'📖 画像形式ガイド', 'ko':'📖 이미지 형식 가이드' },

    'guide.webp.name': { 'zh-CN':'WebP — 现代首选','zh-HK':'WebP — 現代首選','en':'WebP — Modern Choice','ja':'WebP — モダンな選択','ko':'WebP — 모던 초이스' },
    'guide.webp.desc':  { 'zh-CN':'Google 开发，支持有损/无损/透明/动画，比 JPEG 小 25-35%，比 PNG 小 26%，浏览器支持率 97%+。适合绝大多数场景。','zh-HK':'Google 開發，支援有損/無損/透明/動畫，比 JPEG 小 25-35%，比 PNG 小 26%，瀏覽器支援率 97%+。適合絕大多數場景。','en':'By Google. Lossy/lossless/transparency/animation. 25-35% smaller than JPEG, 26% smaller than PNG. 97%+ browser support. Best all-rounder.','ja':'Google開発。非可逆/可逆/透過/アニメ対応。JPEG比25-35%減、PNG比26%減。ブラウザ対応率97%+。最もバランスの良い形式。','ko':'Google 개발. 손실/무손실/투명/애니메이션 지원. JPEG 대비 25-35%, PNG 대비 26% 작음. 97%+ 브라우저 지원. 최고의 범용 포맷.' },

    'guide.avif.name': { 'zh-CN':'AVIF — 极致压缩','zh-HK':'AVIF — 極致壓縮','en':'AVIF — Ultimate Compression','ja':'AVIF — 究極の圧縮','ko':'AVIF — 극한의 압축' },
    'guide.avif.desc':  { 'zh-CN':'基于 AV1 编码，比 WebP 再小 20-30%，支持 HDR、广色域和胶片颗粒。Safari 16+ 已支持，适合追求最小体积。','zh-HK':'基於 AV1 編碼，比 WebP 再小 20-30%，支援 HDR、廣色域和膠片顆粒。Safari 16+ 已支援，適合追求最小體積。','en':'AV1-based. 20-30% smaller than WebP. HDR, wide gamut, film grain support. Safari 16+ supported. Best for smallest file size.','ja':'AV1ベース。WebP比20-30%減。HDR/広色域/フィルムグレイン対応。Safari 16+対応。最小サイズを求める場合に最適。','ko':'AV1 기반. WebP 대비 20-30% 작음. HDR/광색역/필름 그레인 지원. Safari 16+ 지원. 최소 용량에 최적.' },

    'guide.jpeg.name': { 'zh-CN':'JPEG — 通用兼容','zh-HK':'JPEG — 通用兼容','en':'JPEG — Universal','ja':'JPEG — ユニバーサル','ko':'JPEG — 범용 호환' },
    'guide.jpeg.desc':  { 'zh-CN':'最广泛支持的图片格式，有损压缩，无透明通道。适合照片和复杂渐变。1992 年诞生至今仍是互联网标配。','zh-HK':'最廣泛支援的圖片格式，有損壓縮，無透明通道。適合照片和複雜漸變。1992 年誕生至今仍是互聯網標配。','en':'Most universal format. Lossy, no transparency. Best for photos and gradients. The web standard since 1992.','ja':'最も普及している形式。非可逆、透過なし。写真やグラデーションに最適。1992年からWeb標準。','ko':'가장 널리 지원되는 형식. 손실 압축, 투명 불가. 사진과 그라데이션에 적합. 1992년부터 웹 표준.' },

    'guide.png.name': { 'zh-CN':'PNG — 无损透明','zh-HK':'PNG — 無損透明','en':'PNG — Lossless','ja':'PNG — 可逆圧縮','ko':'PNG — 무손실 투명' },
    'guide.png.desc':  { 'zh-CN':'无损压缩，完美支持透明通道（Alpha），适合 Logo、图标、截图、UI 元素。体积比有损格式大。','zh-HK':'無損壓縮，完美支援透明通道（Alpha），適合 Logo、圖標、截圖、UI 元素。體積比有損格式大。','en':'Lossless with full alpha transparency. Ideal for logos, icons, screenshots, UI elements. Larger than lossy formats.','ja':'可逆圧縮、フルアルファ透過。ロゴ、アイコン、スクリーンショット、UI要素に最適。非可逆形式より大きい。','ko':'무손실 압축, 풀 알파 투명도. 로고, 아이콘, 스크린샷, UI 요소에 적합. 손실 형식보다 용량이 큼.' },

    'guide.gif.name': { 'zh-CN':'GIF — 经典动画','zh-HK':'GIF — 經典動畫','en':'GIF — Animation','ja':'GIF — アニメーション','ko':'GIF — 클래식 애니메이션' },
    'guide.gif.desc':  { 'zh-CN':'仅 256 色，支持简单动画和透明（无半透明）。适合短循环动图，WebP/AVIF 动画可替代但兼容性不同。','zh-HK':'僅 256 色，支援簡單動畫和透明（無半透明）。適合短循環動圖，WebP/AVIF 動畫可替代但兼容性不同。','en':'256 colors only. Simple animation + binary transparency. Good for short loops. WebP/AVIF animation can replace but compatibility differs.','ja':'256色のみ。シンプルなアニメとバイナリ透過。短いループに適。WebP/AVIFアニメで代替可能だが互換性に注意。','ko':'256색만 지원. 간단한 애니메이션과 이진 투명도. 짧은 루프에 적합. WebP/AVIF 애니메이션으로 대체 가능.' },

    'guide.svg.name': { 'zh-CN':'SVG — 矢量图形','zh-HK':'SVG — 向量圖形','en':'SVG — Vector','ja':'SVG — ベクター','ko':'SVG — 벡터 그래픽' },
    'guide.svg.desc':  { 'zh-CN':'基于 XML 的矢量格式，无限缩放不模糊。适合图标、插图、图表。可嵌入 CSS/JS，文件极小。不支持照片。','zh-HK':'基於 XML 的向量格式，無限縮放不模糊。適合圖標、插圖、圖表。可嵌入 CSS/JS，檔案極小。不支援照片。','en':'XML-based vector. Infinitely scalable without blur. Perfect for icons, illustrations, charts. Tiny file size. Not for photos.','ja':'XMLベースのベクター形式。無限に拡大してもぼやけない。アイコン、イラスト、チャートに最適。写真不可。','ko':'XML 기반 벡터 형식. 무한 확대해도 깨지지 않음. 아이콘, 일러스트, 차트에 최적. 사진에는 부적합.' },

    'guide.heic.name': { 'zh-CN':'HEIC/HEIF — Apple 格式','zh-HK':'HEIC/HEIF — Apple 格式','en':'HEIC/HEIF — Apple','ja':'HEIC/HEIF — Apple形式','ko':'HEIC/HEIF — Apple 형식' },
    'guide.heic.desc':  { 'zh-CN':'Apple 设备默认格式，基于 HEVC，比 JPEG 节省约 50% 空间。支持连拍、深度图和 HDR。iPhone 拍摄的照片默认格式。','zh-HK':'Apple 裝置預設格式，基於 HEVC，比 JPEG 節省約 50% 空間。支援連拍、深度圖和 HDR。iPhone 拍攝的照片預設格式。','en':'Apple default. HEVC-based, ~50% smaller than JPEG. Burst, depth map, HDR support. Default for iPhone photos.','ja':'Apple標準。HEVCベース、JPEG比約50%減。バースト/深度/HDR対応。iPhone写真のデフォルト形式。','ko':'Apple 기본 형식. HEVC 기반, JPEG 대비 약 50% 작음. 버스트/뎁스맵/HDR 지원. iPhone 사진 기본 형식.' },

    'guide.bmp.name': { 'zh-CN':'BMP — 无压缩位图','zh-HK':'BMP — 無壓縮位圖','en':'BMP — Uncompressed','ja':'BMP — 無圧縮','ko':'BMP — 무압축 비트맵' },
    'guide.bmp.desc':  { 'zh-CN':'Windows 原生位图，不压缩，文件极大。不推荐用于 Web。偶尔用于需要原始像素数据的场景。','zh-HK':'Windows 原生位圖，不壓縮，檔案極大。不推薦用於 Web。偶爾用於需要原始像素數據的場景。','en':'Windows native bitmap. Uncompressed, very large files. Not recommended for web. Only for raw pixel data needs.','ja':'Windowsネイティブ。無圧縮で非常に大きい。Web非推奨。生ピクセルデータが必要な場合のみ。','ko':'Windows 기본 비트맵. 무압축, 파일 크기가 매우 큼. 웹용으로 부적합. 원시 픽셀 데이터 필요시에만 사용.' },

    'guide.ico.name': { 'zh-CN':'ICO — 图标格式','zh-HK':'ICO — 圖標格式','en':'ICO — Icon','ja':'ICO — アイコン','ko':'ICO — 아이콘' },
    'guide.ico.desc':  { 'zh-CN':'Windows 图标格式，可包含多种尺寸（16/32/48/256px）。用于网站 favicon 和桌面应用图标。','zh-HK':'Windows 圖標格式，可包含多種尺寸（16/32/48/256px）。用於網站 favicon 和桌面應用圖標。','en':'Windows icon. Multiple sizes in one file (16/32/48/256px). Used for favicons and desktop app icons.','ja':'Windowsアイコン。1ファイルに複数サイズ（16/32/48/256px）。ファビコンやアプリアイコンに。','ko':'Windows 아이콘. 여러 크기를 한 파일에 (16/32/48/256px). 파비콘 및 앱 아이콘용.' },

    'guide.tiff.name': { 'zh-CN':'TIFF — 专业影像','zh-HK':'TIFF — 專業影像','en':'TIFF — Professional','ja':'TIFF — プロフェッショナル','ko':'TIFF — 전문 이미징' },
    'guide.tiff.desc':  { 'zh-CN':'无损/有损可选，支持多层、16 位色深、CMYK。印刷、扫描、归档行业标准。文件较大。','zh-HK':'無損/有損可選，支援多層、16 位色深、CMYK。印刷、掃描、歸檔行業標準。檔案較大。','en':'Lossless or lossy. Layers, 16-bit depth, CMYK. Industry standard for print, scan, archive. Large files.','ja':'可逆/非可逆選択可。レイヤー/16bit深度/CMYK対応。印刷/スキャン/アーカイブの業界標準。ファイル大。','ko':'무손실/손실 선택 가능. 레이어/16비트/CMYK 지원. 인쇄/스캔/아카이브 업계 표준. 파일 크기가 큼.' },

    'guide.psd.name': { 'zh-CN':'PSD — Photoshop','zh-HK':'PSD — Photoshop','en':'PSD — Photoshop','ja':'PSD — Photoshop','ko':'PSD — Photoshop' },
    'guide.psd.desc':  { 'zh-CN':'Adobe Photoshop 原生格式，保留图层、蒙版、调整层等全部编辑信息。适合设计源文件。','zh-HK':'Adobe Photoshop 原生格式，保留圖層、蒙版、調整層等全部編輯資訊。適合設計源檔案。','en':'Adobe Photoshop native. Preserves layers, masks, adjustments. For design source files.','ja':'Adobe Photoshopネイティブ。レイヤー/マスク/調整レイヤーを保持。デザインソースファイル用。','ko':'Adobe Photoshop 기본 형식. 레이어/마스크/조정 레이어 등 보존. 디자인 소스 파일용.' },

    'guide.tga.name': { 'zh-CN':'TGA — 游戏纹理','zh-HK':'TGA — 遊戲紋理','en':'TGA — Game Texture','ja':'TGA — ゲームテクスチャ','ko':'TGA — 게임 텍스처' },
    'guide.tga.desc':  { 'zh-CN':'Truevision 图形适配器格式，支持 RGBA、RLE 压缩。游戏开发和 3D 建模中常用。','zh-HK':'Truevision 圖形適配器格式，支援 RGBA、RLE 壓縮。遊戲開發和 3D 建模中常用。','en':'Truevision format. RGBA, RLE compression. Common in game development and 3D modeling.','ja':'Truevision形式。RGBA/RLE圧縮対応。ゲーム開発や3Dモデリングで一般的。','ko':'Truevision 형식. RGBA, RLE 압축 지원. 게임 개발 및 3D 모델링에서 사용.' },

    'guide.hdr.name': { 'zh-CN':'HDR — 高动态范围','zh-HK':'HDR — 高動態範圍','en':'HDR — High Dynamic Range','ja':'HDR — ハイダイナミックレンジ','ko':'HDR — 하이 다이내믹 레인지' },
    'guide.hdr.desc':  { 'zh-CN':'存储远超普通 8 位的亮度信息（32 位浮点），适合 3D 渲染环境光和反射贴图。不支持直接 Web 显示。','zh-HK':'存儲遠超普通 8 位的亮度信息（32 位浮點），適合 3D 渲染環境光和反射貼圖。不支援直接 Web 顯示。','en':'32-bit float luminance, far beyond 8-bit. For 3D environment lighting and reflection maps. Not for direct web display.','ja':'8bitを超える32bit浮動小数点輝度。3D環境光やリフレクションマップ用。Web直接表示不可。','ko':'8비트를 초과하는 32비트 부동소수점 휘도. 3D 환경광 및 반사 맵용. 직접 웹 표시 불가.' },

    'guide.raw.name': { 'zh-CN':'RAW 格式 — 相机原始数据','zh-HK':'RAW 格式 — 相機原始數據','en':'RAW — Camera Raw','ja':'RAW — カメラRAW','ko':'RAW — 카메라 원본' },
    'guide.raw.desc':  { 'zh-CN':'各相机品牌的原始传感器数据：CR2（佳能）、NEF（尼康）、ARW（索尼）、DNG（通用）等。未经处理，保留最大后期空间。','zh-HK':'各相機品牌的原始感測器數據：CR2（佳能）、NEF（尼康）、ARW（索尼）、DNG（通用）等。未經處理，保留最大後期空間。','en':'Raw sensor data by brand: CR2 (Canon), NEF (Nikon), ARW (Sony), DNG (universal), etc. Unprocessed for maximum editing flexibility.','ja':'各カメラメーカーの生センサーデータ：CR2（Canon）、NEF（Nikon）、ARW（Sony）、DNG（共通）等。未処理で最大の編集余裕を保持。','ko':'카메라 브랜드별 원시 센서 데이터: CR2(Canon), NEF(Nikon), ARW(Sony), DNG(범용) 등. 무처리, 최대 편집 유연성.' },

    'guide.pdf.name': { 'zh-CN':'PDF — 文档格式','zh-HK':'PDF — 文檔格式','en':'PDF — Document','ja':'PDF — 文書','ko':'PDF — 문서' },
    'guide.pdf.desc':  { 'zh-CN':'便携式文档格式，可内嵌图片。本工具提取 PDF 首页作为图片进行转换，不支持多页处理。','zh-HK':'可攜式文件格式，可內嵌圖片。本工具提取 PDF 首頁作為圖片進行轉換，不支援多頁處理。','en':'Portable document. Can embed images. This tool extracts the first page as an image for conversion.','ja':'ポータブル文書形式。画像を埋め込み可能。本ツールでは最初のページを画像として抽出して変換します。','ko':'휴대용 문서 형식. 이미지 포함 가능. 본 도구는 첫 페이지만 이미지로 추출하여 변환합니다.' },

    /* ===== HOW TO USE ===== */
    'howto.title': { 'zh-CN':'🚀 如何使用','zh-HK':'🚀 如何使用','en':'🚀 How to Use','ja':'🚀 使い方','ko':'🚀 사용 방법' },
    'howto.step1.title': { 'zh-CN':'上传图片','zh-HK':'上傳圖片','en':'Upload Images','ja':'画像をアップロード','ko':'이미지 업로드' },
    'howto.step1.desc':  { 'zh-CN':'拖放图片到上方区域，或点击选择文件。支持 JPG、PNG、WebP、HEIC、TIFF、RAW 等 60+ 格式。','zh-HK':'拖放圖片到上方區域，或點擊選擇檔案。支援 JPG、PNG、WebP、HEIC、TIFF、RAW 等 60+ 格式。','en':'Drag & drop images into the area above, or click to browse. Supports 60+ formats including JPG, PNG, WebP, HEIC, TIFF, RAW.','ja':'画像を上部エリアにドラッグ＆ドロップ、またはクリックして選択。JPG、PNG、WebP、HEIC、TIFF、RAWなど60以上の形式に対応。','ko':'이미지를 위 영역에 끌어다 놓거나 클릭하여 선택하세요. JPG, PNG, WebP, HEIC, TIFF, RAW 등 60개 이상의 형식을 지원합니다.' },
    'howto.step2.title': { 'zh-CN':'选择格式','zh-HK':'選擇格式','en':'Choose Format','ja':'形式を選択','ko':'형식 선택' },
    'howto.step2.desc':  { 'zh-CN':'在左侧面板选择目标格式：WebP（推荐）、AVIF（最小体积）、PNG（无损）、JPEG（兼容）、GIF、BMP、TIFF 或 ICO。','zh-HK':'在左側面板選擇目標格式：WebP（推薦）、AVIF（最小體積）、PNG（無損）、JPEG（兼容）、GIF、BMP、TIFF 或 ICO。','en':'Pick your output format from the left panel: WebP (recommended), AVIF (smallest), PNG (lossless), JPEG (compatible), GIF, BMP, TIFF, or ICO.','ja':'左パネルから出力形式を選択：WebP（推奨）、AVIF（最小サイズ）、PNG（可逆）、JPEG（互換性）、GIF、BMP、TIFF、ICO。','ko':'왼쪽 패널에서 출력 형식을 선택하세요: WebP(권장), AVIF(최소 용량), PNG(무손실), JPEG(호환성), GIF, BMP, TIFF, ICO.' },
    'howto.step3.title': { 'zh-CN':'调整参数','zh-HK':'調整參數','en':'Adjust Settings','ja':'設定を調整','ko':'설정 조정' },
    'howto.step3.desc':  { 'zh-CN':'拖动质量滑块（1-100%），或输入目标宽高进行缩放。保持宽高比可避免图片变形。','zh-HK':'拖動質量滑塊（1-100%），或輸入目標寬高進行縮放。保持寬高比可避免圖片變形。','en':'Drag the quality slider (1-100%), or enter target dimensions to resize. Keep aspect ratio to avoid distortion.','ja':'品質スライダー（1-100%）を調整、または目標サイズを入力してリサイズ。縦横比を維持すると歪みを防げます。','ko':'품질 슬라이더(1-100%)를 조정하거나 원하는 크기를 입력하여 크기를 조정하세요. 비율을 유지하면 왜곡을 방지할 수 있습니다.' },
    'howto.step4.title': { 'zh-CN':'下载结果','zh-HK':'下載結果','en':'Download Results','ja':'結果をダウンロード','ko':'결과 다운로드' },
    'howto.step4.desc':  { 'zh-CN':'单张下载或一键打包 ZIP。所有转换在浏览器中即时完成，无需等待上传。','zh-HK':'單張下載或一鍵打包 ZIP。所有轉換在瀏覽器中即時完成，無需等待上載。','en':'Download individually or as a ZIP archive. All conversion happens instantly in your browser — no upload wait time.','ja':'個別ダウンロードまたはZIPで一括保存。すべての変換はブラウザ内で即時完了し、アップロード待ちは不要です。','ko':'개별 다운로드 또는 ZIP으로 일괄 저장. 모든 변환은 브라우저에서 즉시 완료되며 업로드 대기 시간이 없습니다.' },

    /* ===== FAQ ===== */
    'faq.title': { 'zh-CN':'❓ 常见问题','zh-HK':'❓ 常見問題','en':'❓ FAQ','ja':'❓ よくある質問','ko':'❓ 자주 묻는 질문' },
    'faq.q1': { 'zh-CN':'图片会上传到服务器吗？','zh-HK':'圖片會上載到伺服器嗎？','en':'Are images uploaded to a server?','ja':'画像はサーバーにアップロードされますか？','ko':'이미지가 서버에 업로드되나요?' },
    'faq.a1': { 'zh-CN':'不会。所有图片处理均在您的浏览器本地完成，文件不会离开您的设备。即使断开网络连接，本工具也能正常使用。','zh-HK':'不會。所有圖片處理均在您的瀏覽器本機完成，檔案不會離開您的裝置。即使斷開網絡連接，本工具也能正常使用。','en':'No. All processing happens locally in your browser. Files never leave your device. The tool works even when offline.','ja':'いいえ。すべての画像処理はブラウザ内でローカルに完了します。ファイルがデバイスから出ることはありません。オフラインでも動作します。','ko':'아니요. 모든 이미지 처리는 브라우저에서 로컬로 수행됩니다. 파일이 기기를 떠나지 않습니다. 오프라인에서도 작동합니다.' },
    'faq.q2': { 'zh-CN':'支持哪些图片格式？','zh-HK':'支援哪些圖片格式？','en':'What image formats are supported?','ja':'どのような画像形式に対応していますか？','ko':'어떤 이미지 형식을 지원하나요?' },
    'faq.a2': { 'zh-CN':'输入支持 JPG、PNG、GIF、WebP、AVIF、ICO、BMP、SVG、HEIC、TIFF、PSD、TGA、HDR、PDF 以及 50+ 相机 RAW 格式（CR2、NEF、ARW、DNG 等）。输出支持 WebP、AVIF、PNG、JPEG、GIF、BMP、TIFF、ICO。','zh-HK':'輸入支援 JPG、PNG、GIF、WebP、AVIF、ICO、BMP、SVG、HEIC、TIFF、PSD、TGA、HDR、PDF 以及 50+ 相機 RAW 格式（CR2、NEF、ARW、DNG 等）。輸出支援 WebP、AVIF、PNG、JPEG、GIF、BMP、TIFF、ICO。','en':'Input: JPG, PNG, GIF, WebP, AVIF, ICO, BMP, SVG, HEIC, TIFF, PSD, TGA, HDR, PDF, and 50+ camera RAW formats (CR2, NEF, ARW, DNG, etc.). Output: WebP, AVIF, PNG, JPEG, GIF, BMP, TIFF, ICO.','ja':'入力：JPG、PNG、GIF、WebP、AVIF、ICO、BMP、SVG、HEIC、TIFF、PSD、TGA、HDR、PDF、および50以上のカメラRAW形式（CR2、NEF、ARW、DNG等）。出力：WebP、AVIF、PNG、JPEG、GIF、BMP、TIFF、ICO。','ko':'입력: JPG, PNG, GIF, WebP, AVIF, ICO, BMP, SVG, HEIC, TIFF, PSD, TGA, HDR, PDF 및 50개 이상의 카메라 RAW 형식(CR2, NEF, ARW, DNG 등). 출력: WebP, AVIF, PNG, JPEG, GIF, BMP, TIFF, ICO.' },
    'faq.q3': { 'zh-CN':'可以批量转换吗？','zh-HK':'可以批量轉換嗎？','en':'Can I batch convert images?','ja':'一括変換はできますか？','ko':'일괄 변환이 가능한가요?' },
    'faq.a3': { 'zh-CN':'可以。一次性拖入多张图片即可批量处理，完成后可通过 ZIP 一键下载所有转换结果。','zh-HK':'可以。一次性拖入多張圖片即可批量處理，完成後可通過 ZIP 一鍵下載所有轉換結果。','en':'Yes. Drop multiple images at once for batch processing. After conversion, download all results as a single ZIP file.','ja':'はい。複数の画像を一度にドロップして一括処理できます。変換後、ZIPでまとめてダウンロード可能です。','ko':'네. 여러 이미지를 한 번에 끌어다 놓아 일괄 처리할 수 있습니다. 변환 후 ZIP으로 모든 결과를 한 번에 다운로드할 수 있습니다.' },
    'faq.q4': { 'zh-CN':'转换会降低图片质量吗？','zh-HK':'轉換會降低圖片質量嗎？','en':'Will conversion reduce image quality?','ja':'変換で画質は劣化しますか？','ko':'변환하면 이미지 품질이 저하되나요?' },
    'faq.a4': { 'zh-CN':'有损格式（WebP、AVIF、JPEG）可通过质量滑块控制。设为 90-100% 几乎看不出差异。PNG 为无损格式，画质无损失。','zh-HK':'有損格式（WebP、AVIF、JPEG）可通過質量滑塊控制。設為 90-100% 幾乎看不出差異。PNG 為無損格式，畫質無損失。','en':'Lossy formats (WebP, AVIF, JPEG) are controlled via the quality slider. At 90-100%, the difference is nearly invisible. PNG is lossless — no quality loss.','ja':'非可逆形式（WebP、AVIF、JPEG）は品質スライダーで調整できます。90-100%ではほとんど違いがわかりません。PNGは可逆形式で、品質の低下はありません。','ko':'손실 형식(WebP, AVIF, JPEG)은 품질 슬라이더로 조정할 수 있습니다. 90-100%에서는 거의 차이를 느낄 수 없습니다. PNG는 무손실 형식으로 품질 저하가 없습니다.' },
    'faq.q5': { 'zh-CN':'有文件大小或数量限制吗？','zh-HK':'有檔案大小或數量限制嗎？','en':'Are there file size or quantity limits?','ja':'ファイルサイズや数量の制限はありますか？','ko':'파일 크기나 수량 제한이 있나요?' },
    'faq.a5': { 'zh-CN':'没有硬性限制。但超大文件（如几百 MB 的 TIFF）可能因浏览器内存限制处理较慢。建议单文件控制在 100MB 以内。','zh-HK':'沒有硬性限制。但超大檔案（如幾百 MB 的 TIFF）可能因瀏覽器記憶體限製處理較慢。建議單檔案控制在 100MB 以內。','en':'No hard limits. However, very large files (e.g., 100+ MB TIFFs) may process slowly due to browser memory constraints. We recommend keeping files under 100MB.','ja':'厳格な制限はありませんが、非常に大きなファイル（100MB以上のTIFFなど）はブラウザのメモリ制約により処理が遅くなる場合があります。100MB以内を推奨します。','ko':'엄격한 제한은 없습니다. 하지만 매우 큰 파일(예: 100MB 이상 TIFF)은 브라우저 메모리 제약으로 인해 처리 속도가 느려질 수 있습니다. 100MB 이내를 권장합니다.' },
    'faq.q6': { 'zh-CN':'为什么推荐 WebP 格式？','zh-HK':'為什麼推薦 WebP 格式？','en':'Why is WebP recommended?','ja':'なぜWebPが推奨されますか？','ko':'WebP 형식이 권장되는 이유는 무엇인가요?' },
    'faq.a6': { 'zh-CN':'WebP 由 Google 开发，比 JPEG 小 25-35%，比 PNG 小 26%，同时支持有损、无损、透明和动画。浏览器支持率超 97%，是兼顾体积与兼容性的最佳选择。','zh-HK':'WebP 由 Google 開發，比 JPEG 小 25-35%，比 PNG 小 26%，同時支援有損、無損、透明和動畫。瀏覽器支援率超 97%，是兼顧體積與兼容性的最佳選擇。','en':'WebP was developed by Google. It is 25-35% smaller than JPEG and 26% smaller than PNG, while supporting lossy, lossless, transparency, and animation. With 97%+ browser support, it is the best balance of size and compatibility.','ja':'WebPはGoogleが開発した形式で、JPEGより25-35%、PNGより26%小さく、非可逆・可逆・透過・アニメーションに対応しています。ブラウザ対応率97%以上で、サイズと互換性のバランスが最も優れています。','ko':'WebP는 Google이 개발한 형식으로, JPEG보다 25-35%, PNG보다 26% 작으면서 손실, 무손실, 투명도, 애니메이션을 지원합니다. 97% 이상의 브라우저 지원률로, 용량과 호환성의 최적 균형을 제공합니다.' },

    /* ===== WHY US ===== */
    'why.title': { 'zh-CN':'💎 为什么选择我们','zh-HK':'💎 為什麼選擇我們','en':'💎 Why Choose Us','ja':'💎 当サイトの強み','ko':'💎 선택해야 하는 이유' },
    'why.card1.title': { 'zh-CN':'隐私安全','zh-HK':'私隱安全','en':'Privacy First','ja':'プライバシー保護','ko':'개인정보 보호' },
    'why.card1.desc':  { 'zh-CN':'纯本地处理，文件不上传服务器。没有隐私泄露风险，断网也能用。','zh-HK':'純本機處理，檔案不上載伺服器。沒有私隱洩露風險，離線也能用。','en':'100% local processing. Files are never uploaded. No privacy risk. Works offline.','ja':'完全ローカル処理。ファイルのアップロードなし。プライバシーリスクゼロ。オフラインでも動作。','ko':'100% 로컬 처리. 파일이 서버에 업로드되지 않습니다. 개인정보 유출 위험이 없으며 오프라인에서도 작동합니다.' },
    'why.card2.title': { 'zh-CN':'即时转换','zh-HK':'即時轉換','en':'Instant Conversion','ja':'即時変換','ko':'즉시 변환' },
    'why.card2.desc':  { 'zh-CN':'借助现代浏览器 API，无需上传等待。拖入即转，所见即所得。','zh-HK':'借助現代瀏覽器 API，無需上載等待。拖入即轉，所見即所得。','en':'Powered by modern browser APIs. No upload wait. Drag in, convert instantly — what you see is what you get.','ja':'最新のブラウザAPIを活用。アップロード待ちなし。ドラッグするだけで即時変換。','ko':'최신 브라우저 API로 구동됩니다. 업로드 대기 시간이 없습니다. 끌어다 놓기만 하면 즉시 변환됩니다.' },
    'why.card3.title': { 'zh-CN':'格式全面','zh-HK':'格式全面','en':'Comprehensive Formats','ja':'豊富な形式','ko':'포괄적인 형식' },
    'why.card3.desc':  { 'zh-CN':'支持 60+ 输入格式，覆盖日常图片、专业文档、相机 RAW，一站式处理。','zh-HK':'支援 60+ 輸入格式，覆蓋日常圖片、專業文件、相機 RAW，一站式處理。','en':'60+ input formats — photos, professional documents, camera RAW — all in one place.','ja':'60以上の入力形式に対応。写真、プロフェッショナル文書、カメラRAWまで一括処理。','ko':'60개 이상의 입력 형식을 지원합니다. 사진, 전문 문서, 카메라 RAW를 한 곳에서 처리할 수 있습니다.' },
    'why.card4.title': { 'zh-CN':'完全免费','zh-HK':'完全免費','en':'100% Free','ja':'完全無料','ko':'100% 무료' },
    'why.card4.desc':  { 'zh-CN':'无订阅、无限制、无水印。永久免费使用，不捆绑任何付费功能。','zh-HK':'無訂閱、無限制、無水印。永久免費使用，不捆綁任何付費功能。','en':'No subscriptions, no limits, no watermarks. Free forever with no hidden paid features.','ja':'サブスクリプションなし、制限なし、透かしなし。永久無料で、隠れた有料機能は一切ありません。','ko':'구독 없음, 제한 없음, 워터마크 없음. 숨겨진 유료 기능 없이 영원히 무료로 사용할 수 있습니다.' },
  },

  t(key, params) {
    const entry = this.dict[key];
    if (!entry) return key;
    let text = entry[this.current] || entry['en'] || key;
    if (params) {
      for (const [k, v] of Object.entries(params)) {
        text = text.replace(`{${k}}`, v);
      }
    }
    return text;
  },

  setLang(code) {
    this.current = code;
    localStorage.setItem('imgshift-lang', code);
    this.apply();
  },

  apply() {
    document.documentElement.lang = this.current;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = this.t(key);
      if (text) el.textContent = text;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      const text = this.t(key);
      if (text) el.innerHTML = text;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const text = this.t(key);
      if (text) el.placeholder = text;
    });
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      const text = this.t(key);
      if (text) el.title = text;
    });

    const titleEl = document.querySelector('title');
    const pageTitleKey = document.documentElement.getAttribute('data-page-title');
    if (pageTitleKey && titleEl) titleEl.textContent = this.t(pageTitleKey);

    const descEl = document.querySelector('meta[name="description"]');
    const descKey = document.documentElement.getAttribute('data-page-desc');
    if (descKey && descEl) descEl.setAttribute('content', this.t(descKey));

    this.updateThemeButtons();
    this.updateLangLabel();
    document.dispatchEvent(new CustomEvent('i18n-applied'));
  },

  updateThemeButtons() {
    const btn = document.getElementById('btn-theme');
    const accentBtn = document.getElementById('btn-accent');
    const theme = document.documentElement.getAttribute('data-theme') || 'dark';
    const accent = document.documentElement.getAttribute('data-accent') || 'cyan';
    if (btn) {
      btn.textContent = theme === 'dark' ? '🌙' : '☀️';
      btn.title = this.t(theme === 'dark' ? 'theme.dark_hint' : 'theme.light_hint');
    }
    if (accentBtn) {
      accentBtn.textContent = accent === 'cyan' ? '🩵' : '💗';
      accentBtn.title = this.t(accent === 'cyan' ? 'accent.cyan_hint' : 'accent.magenta_hint');
    }
  },

  updateLangLabel() {
    const sel = document.getElementById('lang-select');
    if (sel) sel.value = this.current;
  },

  init() {
    const saved = localStorage.getItem('imgshift-lang');
    if (saved && this.supported.some(s => s.code === saved)) {
      this.current = saved;
    }
    this.apply();
  }
};

(function initTheme() {
  const savedTheme = localStorage.getItem('imgshift-theme') || 'dark';
  const savedAccent = localStorage.getItem('imgshift-accent') || 'cyan';
  document.documentElement.setAttribute('data-theme', savedTheme);
  document.documentElement.setAttribute('data-accent', savedAccent);
})();

document.addEventListener('DOMContentLoaded', () => {
  I18N.init();

  const themeBtn = document.getElementById('btn-theme');
  const accentBtn = document.getElementById('btn-accent');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = cur === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('imgshift-theme', next);
      I18N.updateThemeButtons();
    });
  }
  if (accentBtn) {
    accentBtn.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-accent') || 'cyan';
      const next = cur === 'cyan' ? 'magenta' : 'cyan';
      document.documentElement.setAttribute('data-accent', next);
      localStorage.setItem('imgshift-accent', next);
      I18N.updateThemeButtons();
    });
  }

  const sel = document.getElementById('lang-select');
  if (sel) {
    sel.addEventListener('change', () => {
      I18N.setLang(sel.value);
    });
  }
});
