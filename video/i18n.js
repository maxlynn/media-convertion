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

    'format.label': { 'zh-CN':'输出格式', 'zh-HK':'輸出格式', 'en':'Output Format', 'ja':'出力形式', 'ko':'출력 형식' },
    'format.mp4': { 'zh-CN':'MP4 (H.264) — 推荐','zh-HK':'MP4 (H.264) — 推薦','en':'MP4 (H.264) — Recommended','ja':'MP4 (H.264) — 推奨','ko':'MP4 (H.264) — 권장' },
    'format.mov': { 'zh-CN':'MOV — Apple 生态','zh-HK':'MOV — Apple 生態','en':'MOV — Apple','ja':'MOV — Apple','ko':'MOV — Apple' },
    'format.avi': { 'zh-CN':'AVI — 通用兼容','zh-HK':'AVI — 通用兼容','en':'AVI — Universal','ja':'AVI — ユニバーサル','ko':'AVI — 범용 호환' },
    'format.mkv': { 'zh-CN':'MKV — 无损封装','zh-HK':'MKV — 無損封裝','en':'MKV — Lossless Container','ja':'MKV — ロスレスコンテナ','ko':'MKV — 무손실 컨테이너' },
    'format.webm': { 'zh-CN':'WebM — 网页优化','zh-HK':'WebM — 網頁優化','en':'WebM — Web Optimized','ja':'WebM — Web最適化','ko':'WebM — 웹 최적화' },
    'format.flv': { 'zh-CN':'FLV — Flash 视频','zh-HK':'FLV — Flash 影片','en':'FLV — Flash Video','ja':'FLV — Flash動画','ko':'FLV — Flash 비디오' },
    'format.wmv': { 'zh-CN':'WMV — Windows 媒体','zh-HK':'WMV — Windows 媒體','en':'WMV — Windows Media','ja':'WMV — Windows Media','ko':'WMV — Windows 미디어' },
    'format.m4v': { 'zh-CN':'M4V — iTunes 视频','zh-HK':'M4V — iTunes 影片','en':'M4V — iTunes Video','ja':'M4V — iTunesビデオ','ko':'M4V — iTunes 비디오' },
    'format.3gp': { 'zh-CN':'3GP — 手机视频','zh-HK':'3GP — 手機影片','en':'3GP — Mobile Video','ja':'3GP — モバイル動画','ko':'3GP — 모바일 비디오' },
    'format.ogg': { 'zh-CN':'OGG — 开源容器','zh-HK':'OGG — 開源容器','en':'OGG — Open Container','ja':'OGG — オープンコンテナ','ko':'OGG — 오픈 컨테이너' },
    'format.ts': { 'zh-CN':'TS — 传输流','zh-HK':'TS — 傳輸流','en':'TS — Transport Stream','ja':'TS — トランスポートストリーム','ko':'TS — 전송 스트림' },
    'format.vob': { 'zh-CN':'VOB — DVD 视频','zh-HK':'VOB — DVD 影片','en':'VOB — DVD Video','ja':'VOB — DVDビデオ','ko':'VOB — DVD 비디오' },
    'format.rm': { 'zh-CN':'RM — RealMedia','zh-HK':'RM — RealMedia','en':'RM — RealMedia','ja':'RM — RealMedia','ko':'RM — RealMedia' },
    'format.asf': { 'zh-CN':'ASF — 流媒体','zh-HK':'ASF — 流媒體','en':'ASF — Streaming','ja':'ASF — ストリーミング','ko':'ASF — 스트리밍' },
    'format.divx': { 'zh-CN':'DivX — 高压缩','zh-HK':'DivX — 高壓縮','en':'DivX — High Compression','ja':'DivX — 高圧縮','ko':'DivX — 고압축' },
    'format.f4v': { 'zh-CN':'F4V — Flash HD','zh-HK':'F4V — Flash HD','en':'F4V — Flash HD','ja':'F4V — Flash HD','ko':'F4V — Flash HD' },
    'format.gif': { 'zh-CN':'GIF — 动图','zh-HK':'GIF — 動圖','en':'GIF — Animation','ja':'GIF — アニメーション','ko':'GIF — 애니메이션' },
    'format.mp3': { 'zh-CN':'MP3 — 音频提取','zh-HK':'MP3 — 音頻提取','en':'MP3 — Audio Extract','ja':'MP3 — 音声抽出','ko':'MP3 — 오디오 추출' },
    'format.aac': { 'zh-CN':'AAC — 音频提取','zh-HK':'AAC — 音頻提取','en':'AAC — Audio Extract','ja':'AAC — 音声抽出','ko':'AAC — 오디오 추출' },

    'preset.label': { 'zh-CN':'App 适配（可选）','zh-HK':'App 適配（可選）','en':'App Preset (optional)','ja':'アプリプリセット（任意）','ko':'앱 프리셋 (선택)' },
    'preset.none': { 'zh-CN':'无预设 — 手动设置','zh-HK':'無預設 — 手動設置','en':'None — Manual settings','ja':'なし — 手動設定','ko':'없음 — 수동 설정' },
    'preset.group.douyin': { 'zh-CN':'抖音','zh-HK':'抖音','en':'Douyin / TikTok','ja':'Douyin / TikTok','ko':'Douyin / TikTok' },
    'preset.group.wechat': { 'zh-CN':'微信','zh-HK':'微信','en':'WeChat','ja':'WeChat','ko':'WeChat' },
    'preset.group.xiaohongshu': { 'zh-CN':'小红书','zh-HK':'小紅書','en':'RED / Xiaohongshu','ja':'RED / Xiaohongshu','ko':'RED / Xiaohongshu' },
    'preset.group.bilibili': { 'zh-CN':'B 站','zh-HK':'B 站','en':'Bilibili','ja':'Bilibili','ko':'Bilibili' },
    'preset.douyin-vertical': { 'zh-CN':'竖版短视频 — 1080×1920 9:16','zh-HK':'豎版短視頻 — 1080×1920 9:16','en':'Vertical Short — 1080×1920 9:16','ja':'縦型短尺 — 1080×1920 9:16','ko':'세로 숏 — 1080×1920 9:16' },
    'preset.douyin-horizontal': { 'zh-CN':'横版视频 — 1920×1080 16:9','zh-HK':'橫版視頻 — 1920×1080 16:9','en':'Horizontal — 1920×1080 16:9','ja':'横型 — 1920×1080 16:9','ko':'가로 — 1920×1080 16:9' },
    'preset.wechat-channel': { 'zh-CN':'视频号竖版 — 1080×1920 9:16','zh-HK':'視頻號豎版 — 1080×1920 9:16','en':'Channels — 1080×1920 9:16','ja':'チャンネル縦型 — 1080×1920 9:16','ko':'채널 세로 — 1080×1920 9:16' },
    'preset.wechat-moment': { 'zh-CN':'朋友圈方形 — 1080×1080 1:1','zh-HK':'朋友圈方形 — 1080×1080 1:1','en':'Moments Square — 1080×1080 1:1','ja':'モーメンツ正方形 — 1080×1080 1:1','ko':'모먼트 정사각 — 1080×1080 1:1' },
    'preset.wechat-chat': { 'zh-CN':'聊天视频 — 720×1280 小体积','zh-HK':'聊天視頻 — 720×1280 小體積','en':'Chat Video — 720×1280 Compact','ja':'チャット動画 — 720×1280 軽量','ko':'채팅 영상 — 720×1280 경량' },
    'preset.xiaohongshu-vertical': { 'zh-CN':'竖版笔记 — 1080×1920 9:16','zh-HK':'豎版筆記 — 1080×1920 9:16','en':'Vertical Note — 1080×1920 9:16','ja':'縦型ノート — 1080×1920 9:16','ko':'세로 노트 — 1080×1920 9:16' },
    'preset.xiaohongshu-square': { 'zh-CN':'方形笔记 — 1080×1080 1:1','zh-HK':'方形筆記 — 1080×1080 1:1','en':'Square Note — 1080×1080 1:1','ja':'正方形ノート — 1080×1080 1:1','ko':'정사각 노트 — 1080×1080 1:1' },
    'preset.xiaohongshu-horizontal': { 'zh-CN':'横版笔记 — 1920×1080 16:9','zh-HK':'橫版筆記 — 1920×1080 16:9','en':'Horizontal Note — 1920×1080 16:9','ja':'横型ノート — 1920×1080 16:9','ko':'가로 노트 — 1920×1080 16:9' },
    'preset.bilibili-hd': { 'zh-CN':'高清投稿 — 1920×1080 16:9 高码率','zh-HK':'高清投稿 — 1920×1080 16:9 高碼率','en':'HD Upload — 1920×1080 16:9 High bitrate','ja':'HD投稿 — 1920×1080 16:9 高ビットレート','ko':'HD 업로드 — 1920×1080 16:9 고비트레이트' },

    'quality.label': { 'zh-CN':'画质','zh-HK':'畫質','en':'Quality','ja':'画質','ko':'화질' },
    'quality.best': { 'zh-CN':'最佳','zh-HK':'最佳','en':'Best','ja':'最高','ko':'최상' },
    'quality.good': { 'zh-CN':'良好','zh-HK':'良好','en':'Good','ja':'良好','ko':'양호' },
    'quality.normal': { 'zh-CN':'标准','zh-HK':'標準','en':'Normal','ja':'標準','ko':'표준' },
    'quality.low': { 'zh-CN':'省空间','zh-HK':'省空間','en':'Save Space','ja':'省スペース','ko':'공간 절약' },

    'resolution.label': { 'zh-CN':'分辨率（可选）','zh-HK':'分辨率（可選）','en':'Resolution (optional)','ja':'解像度（任意）','ko':'해상도 (선택)' },
    'resolution.width': { 'zh-CN':'宽','zh-HK':'寬','en':'Width','ja':'幅','ko':'너비' },
    'resolution.height': { 'zh-CN':'高','zh-HK':'高','en':'Height','ja':'高さ','ko':'높이' },
    'resolution.keepRatio': { 'zh-CN':'保持宽高比','zh-HK':'保持寬高比','en':'Keep aspect ratio','ja':'縦横比を維持','ko':'비율 유지' },
    'resolution.unit': { 'zh-CN':'px','zh-HK':'px','en':'px','ja':'px','ko':'px' },

    'fps.label': { 'zh-CN':'帧率','zh-HK':'幀率','en':'Frame Rate','ja':'フレームレート','ko':'프레임 레이트' },
    'fps.original': { 'zh-CN':'原始','zh-HK':'原始','en':'Original','ja':'オリジナル','ko':'원본' },
    'fps.60': { 'zh-CN':'60 fps — 流畅','zh-HK':'60 fps — 流暢','en':'60 fps — Smooth','ja':'60 fps — スムーズ','ko':'60 fps — 부드러움' },
    'fps.30': { 'zh-CN':'30 fps — 标准','zh-HK':'30 fps — 標準','en':'30 fps — Standard','ja':'30 fps — 標準','ko':'30 fps — 표준' },
    'fps.25': { 'zh-CN':'25 fps — PAL','zh-HK':'25 fps — PAL','en':'25 fps — PAL','ja':'25 fps — PAL','ko':'25 fps — PAL' },
    'fps.24': { 'zh-CN':'24 fps — 电影感','zh-HK':'24 fps — 電影感','en':'24 fps — Cinematic','ja':'24 fps — シネマティック','ko':'24 fps — 시네마틱' },

    'drop.title': { 'zh-CN':'拖放视频到此处，或点击选择文件','zh-HK':'拖放影片到此處，或點擊選擇檔案','en':'Drag & drop videos here, or click to browse','ja':'動画をドラッグ＆ドロップ、またはクリックして選択','ko':'동영상을 끌어다 놓거나 클릭하여 선택하세요' },
    'drop.addmore': { 'zh-CN':'📂 点击此处或拖放继续添加','zh-HK':'📂 點擊此處或拖放繼續添加','en':'📂 Click or drop to add more','ja':'📂 クリックまたはドロップで追加','ko':'📂 클릭 또는 드롭으로 추가' },
    'drop.paste': { 'zh-CN':'也支持 <code>Ctrl+V</code> 粘贴视频','zh-HK':'亦支援 <code>Ctrl+V</code> 貼上影片','en':'Also supports <code>Ctrl+V</code> paste','ja':'<code>Ctrl+V</code> での貼り付けも対応','ko':'<code>Ctrl+V</code> 붙여넣기도 지원' },
    'drop.formats': {
      'zh-CN':'通用格式：MP4 · MOV · AVI · MKV · WebM · FLV · WMV · M4V · 3GP · OGG · TS · VOB · RM · ASF · DIVX · F4V · GIF',
      'zh-HK':'通用格式：MP4 · MOV · AVI · MKV · WebM · FLV · WMV · M4V · 3GP · OGG · TS · VOB · RM · ASF · DIVX · F4V · GIF',
      'en':'Formats: MP4 · MOV · AVI · MKV · WebM · FLV · WMV · M4V · 3GP · OGG · TS · VOB · RM · ASF · DIVX · F4V · GIF',
      'ja':'形式：MP4 · MOV · AVI · MKV · WebM · FLV · WMV · M4V · 3GP · OGG · TS · VOB · RM · ASF · DIVX · F4V · GIF',
      'ko':'형식: MP4 · MOV · AVI · MKV · WebM · FLV · WMV · M4V · 3GP · OGG · TS · VOB · RM · ASF · DIVX · F4V · GIF'
    },

    'btn.downloadAll': { 'zh-CN':'⬇ 下载全部','zh-HK':'⬇ 下載全部','en':'⬇ Download All','ja':'⬇ すべてダウンロード','ko':'⬇ 전체 다운로드' },
    'btn.downloadSel': { 'zh-CN':'⬇ 下载选中项','zh-HK':'⬇ 下載選中項','en':'⬇ Download Selected','ja':'⬇ 選択をダウンロード','ko':'⬇ 선택 다운로드' },
    'btn.download': { 'zh-CN':'下载','zh-HK':'下載','en':'Download','ja':'ダウンロード','ko':'다운로드' },
    'btn.delete': { 'zh-CN':'删除','zh-HK':'刪除','en':'Delete','ja':'削除','ko':'삭제' },
    'btn.deleteSel': { 'zh-CN':'删除选中','zh-HK':'刪除選中','en':'Delete Selected','ja':'選択を削除','ko':'선택 삭제' },
    'btn.reconvertSel': { 'zh-CN':'应用当前设置','zh-HK':'應用當前設置','en':'Apply Settings','ja':'設定を適用','ko':'설정 적용' },
    'btn.selectAll': { 'zh-CN':'全选','zh-HK':'全選','en':'Select All','ja':'すべて選択','ko':'전체 선택' },
    'btn.convertAll': { 'zh-CN':'▶ 开始转换','zh-HK':'▶ 開始轉換','en':'▶ Convert All','ja':'▶ 変換開始','ko':'▶ 변환 시작' },
    'btn.deselectAll': { 'zh-CN':'取消全选','zh-HK':'取消全選','en':'Deselect All','ja':'選択解除','ko':'전체 해제' },
    'batch.selected': { 'zh-CN':'已选 {n} 个','zh-HK':'已選 {n} 個','en':'{n} selected','ja':'{n}件選択中','ko':'{n}개 선택됨' },
    'file.count': { 'zh-CN':'{n} 个文件','zh-HK':'{n} 個檔案','en':'{n} file(s)','ja':'{n} ファイル','ko':'파일 {n}개' },

    'ffmpeg.loading': { 'zh-CN':'正在加载视频转换引擎…','zh-HK':'正在載入影片轉換引擎…','en':'Loading video engine…','ja':'動画変換エンジンを読み込み中…','ko':'비디오 변환 엔진 로딩 중…' },
    'ffmpeg.ready': { 'zh-CN':'✅ 引擎就绪','zh-HK':'✅ 引擎就緒','en':'✅ Engine ready','ja':'✅ エンジン準備完了','ko':'✅ 엔진 준비 완료' },
    'ffmpeg.cached': { 'zh-CN':'从本地缓存加载…','zh-HK':'從本機快取載入…','en':'Loading from cache…','ja':'キャッシュから読み込み中…','ko':'캐시에서 로딩 중…' },
    'ffmpeg.errorLoad': { 'zh-CN':'❌ 引擎加载失败，请刷新页面重试（需 Chrome/Edge 浏览器）','zh-HK':'❌ 引擎載入失敗，請重新整理頁面重試（需 Chrome/Edge 瀏覽器）','en':'❌ Engine load failed. Please refresh and try again (Chrome/Edge recommended)','ja':'❌ エンジンの読み込みに失敗しました。ページを更新して再試行してください（Chrome/Edge推奨）','ko':'❌ 엔진 로드 실패. 페이지를 새로고침 후 다시 시도해 주세요 (Chrome/Edge 권장)' },
    'ffmpeg.downloading': { 'zh-CN':'下载引擎 {mb}/{totalMb} MB ({pct}%)','zh-HK':'下載引擎 {mb}/{totalMb} MB ({pct}%)','en':'Downloading engine {mb}/{totalMb} MB ({pct}%)','ja':'エンジンをダウンロード中 {mb}/{totalMb} MB ({pct}%)','ko':'엔진 다운로드 중 {mb}/{totalMb} MB ({pct}%)' },
    'ffmpeg.processing': { 'zh-CN':'转换中，请稍后…','zh-HK':'轉換中，請稍後…','en':'Converting, please wait…','ja':'変換中、お待ちください…','ko':'변환 중, 기다려 주세요…' },
    'ffmpeg.done': { 'zh-CN':'转换完成','zh-HK':'轉換完成','en':'Conversion complete','ja':'変換完了','ko':'변환 완료' },
    'ffmpeg.error': { 'zh-CN':'转换失败: {msg}','zh-HK':'轉換失敗: {msg}','en':'Conversion failed: {msg}','ja':'変換失敗: {msg}','ko':'변환 실패: {msg}' },
    'ffmpeg.fileProgress': { 'zh-CN':'{current}/{total} 个文件','zh-HK':'{current}/{total} 個檔案','en':'{current}/{total} files','ja':'{current}/{total} ファイル','ko':'{current}/{total} 파일' },

    'nav.tagline': { 'zh-CN':'浏览器本地处理，不上传服务器 | 免费浏览器视频格式转换器','zh-HK':'瀏覽器本地處理，不上傳伺服器 | 免費瀏覽器影片格式轉換器','en':'Processed locally in browser, no upload | Free online video converter','ja':'ブラウザでローカル処理、サーバーにアップロードなし | 無料オンライン動画変換','ko':'브라우저에서 로컬 처리, 서버 업로드 불필요 | 무료 온라인 동영상 변환기' },

    'footer.privacy': { 'zh-CN':'隐私政策','zh-HK':'私隱政策','en':'Privacy Policy','ja':'プライバシーポリシー','ko':'개인정보처리방침' },
    'footer.terms': { 'zh-CN':'服务条款','zh-HK':'服務條款','en':'Terms of Service','ja':'利用規約','ko':'서비스 약관' },
    'footer.about': { 'zh-CN':'联系我们','zh-HK':'聯絡我們','en':'Contact Us','ja':'お問い合わせ','ko':'문의하기' },
    'footer.tagline': { 'zh-CN':'所有处理均在浏览器本地完成，文件不会上传到任何服务器','zh-HK':'所有處理均在瀏覽器本機完成，檔案不會上載到任何伺服器','en':'All processing happens locally in your browser — files are never uploaded','ja':'すべての処理はブラウザ内で完結し、ファイルがサーバーにアップロードされることはありません','ko':'모든 처리는 브라우저에서 로컬로 수행되며 파일은 서버에 업로드되지 않습니다' },
    'footer.copyright': { 'en':'© 2026 Video format conversion. All rights reserved.','zh-CN':'© 2026 Video format conversion. All rights reserved.','zh-HK':'© 2026 Video format conversion. All rights reserved.','ja':'© 2026 Video format conversion. All rights reserved.','ko':'© 2026 Video format conversion. All rights reserved.' },
    'footer.contact': { 'zh-CN':'联系我们','zh-HK':'聯絡我們','en':'Contact Us','ja':'お問い合わせ','ko':'문의하기' },
    'page.title.privacy': { 'zh-CN':'隐私政策 — Video format conversion','zh-HK':'私隱政策 — Video format conversion','en':'Privacy Policy — Video format conversion','ja':'プライバシーポリシー — Video format conversion','ko':'개인정보처리방침 — Video format conversion' },
    'page.desc.privacy': { 'zh-CN':'Video format conversion - 隐私政策','zh-HK':'Video format conversion - 私隱政策','en':'Video format conversion - Privacy Policy','ja':'Video format conversion - プライバシーポリシー','ko':'Video format conversion - 개인정보처리방침' },
    'footer.contact': { 'zh-CN':'联系我们','zh-HK':'聯絡我們','en':'Contact Us','ja':'お問い合わせ','ko':'문의하기' },
    'privacy.h1':       { 'zh-CN':'隐私政策', 'zh-HK':'私隱政策', 'en':'Privacy Policy', 'ja':'プライバシーポリシー', 'ko':'개인정보처리방침' },
    'privacy.effective':{ 'zh-CN':'生效日期：2026 年 6 月 4 日', 'zh-HK':'生效日期：2026 年 6 月 4 日', 'en':'Effective Date: June 4, 2026', 'ja':'発効日：2026年6月4日', 'ko':'발효일: 2026년 6월 4일' },
    'privacy.content': {
      'zh-CN': `Video format conversion privacy content`,

    'page.title.index': { 'zh-CN':'Video format conversion - 浏览器本地处理，不上传服务器 | 免费浏览器视频格式转换器','zh-HK':'Video format conversion - 瀏覽器本地處理，不上傳伺服器 | 免費瀏覽器影片格式轉換器','en':'Video format conversion - Processed locally in browser, no upload | Free online video converter','ja':'Video format conversion - ブラウザでローカル処理、サーバーにアップロードなし | 無料オンライン動画変換','ko':'Video format conversion - 브라우저에서 로컬 처리, 서버 업로드 불필요 | 무료 온라인 동영상 변환기' },
    'page.desc.index': { 'zh-CN':'浏览器本地处理，不上传服务器 | 免费浏览器视频格式转换器','zh-HK':'瀏覽器本地處理，不上傳伺服器 | 免費瀏覽器影片格式轉換器','en':'Processed locally in browser, no upload | Free online video converter','ja':'ブラウザでローカル処理、サーバーにアップロードなし | 無料オンライン動画変換','ko':'브라우저에서 로컬 처리, 서버 업로드 불필요 | 무료 온라인 동영상 변환기' },

    'browser.notice': { 'zh-CN':'⚠ 推荐使用 Chrome 内核浏览器（Chrome、Edge 等）以获得最佳性能。首次使用需下载约 31MB 的转换引擎，请耐心等待。Firefox 和 Safari 的性能可能较慢。','zh-HK':'⚠ 建議使用 Chrome 內核瀏覽器（Chrome、Edge 等）以獲得最佳性能。首次使用需下載約 31MB 的轉換引擎，請耐心等待。Firefox 和 Safari 的性能可能較慢。','en':'⚠ Chrome-based browsers (Chrome, Edge) are recommended for best performance. First use downloads ~31MB engine. Firefox & Safari may be slower.','ja':'⚠ Chrome系ブラウザ（Chrome、Edge等）が最高のパフォーマンスを提供します。初回使用時に約31MBのエンジンをダウンロードします。FirefoxやSafariでは低速になる場合があります。','ko':'⚠ Chrome 기반 브라우저(Chrome, Edge 등)를 권장합니다. 첫 사용 시 약 31MB 엔진을 다운로드합니다. Firefox 및 Safari에서는 속도가 느릴 수 있습니다.' },
    'encrypt.notice': { 'zh-CN':'🔒 不支持 QLV、QSV、KUX、XV、BHD、IFOX、LETV、BLV 等平台加密视频格式，详见常见问题 FAQ','zh-HK':'🔒 不支援 QLV、QSV、KUX、XV、BHD、IFOX、LETV、BLV 等平台加密影片格式，詳見常見問題 FAQ','en':'🔒 Encrypted formats (QLV, QSV, KUX, XV, BHD, etc.) are not supported — see FAQ','ja':'🔒 QLV、QSV、KUX、XV、BHDなどの暗号化形式はサポートされていません。よくある質問 FAQ をご覧ください','ko':'🔒 QLV, QSV, KUX, XV, BHD 등 암호화된 형식은 지원되지 않습니다. 자주 묻는 질문 FAQ를 참조하세요' },

    'cookie.text': { 'zh-CN':'本网站使用 Google AdSense 等服务以展示广告。继续使用即表示您同意我们使用 Cookie。详见','zh-HK':'本網站使用 Google AdSense 等服務以展示廣告。繼續使用即表示您同意我們使用 Cookie。詳見','en':'This site uses services like Google AdSense to display ads. By continuing, you agree to our use of cookies. See','ja':'このサイトではGoogle AdSenseなどのサービスを使用して広告を表示しています。続行するとCookieの使用に同意したことになります。','ko':'이 사이트는 Google AdSense와 같은 서비스를 사용하여 광고를 표시합니다. 계속 사용하면 쿠키 사용에 동의하는 것으로 간주됩니다.' },
    'cookie.link': { 'zh-CN':'隐私政策','zh-HK':'私隱政策','en':'Privacy Policy','ja':'プライバシーポリシー','ko':'개인정보처리방침' },
    'cookie.btn': { 'zh-CN':'知道了','zh-HK':'知道了','en':'Got it','ja':'了解','ko':'확인' },

    'theme.dark_hint': { 'zh-CN':'点击切换为白天模式','zh-HK':'點擊切換為白天模式','en':'Switch to light mode','ja':'ライトモードに切替','ko':'라이트 모드로 전환' },
    'theme.light_hint': { 'zh-CN':'点击切换为夜间模式','zh-HK':'點擊切換為夜間模式','en':'Switch to dark mode','ja':'ダークモードに切替','ko':'다크 모드로 전환' },
    'accent.cyan_hint': { 'zh-CN':'点击切换为粉霓虹主题','zh-HK':'點擊切換為粉霓虹主題','en':'Switch to pink neon','ja':'ピンクネオンに切替','ko':'핑크 네온으로 전환' },
    'accent.magenta_hint': { 'zh-CN':'点击切换为青霓虹主题','zh-HK':'點擊切換為青霓虹主題','en':'Switch to cyan neon','ja':'シアンネオンに切替','ko':'시안 네온으로 전환' },

    /* ===== FORMAT GUIDE ===== */
    'guide.title': { 'zh-CN':'📖 视频格式详解','zh-HK':'📖 影片格式詳解','en':'📖 Video Format Guide','ja':'📖 動画形式ガイド','ko':'📖 비디오 형식 가이드' },

    'guide.mp4.name': { 'zh-CN':'MP4 — 通用推荐','zh-HK':'MP4 — 通用推薦','en':'MP4 — Universal','ja':'MP4 — ユニバーサル','ko':'MP4 — 범용 권장' },
    'guide.mp4.desc': { 'zh-CN':'H.264 编码 + AAC 音频，全球最广泛支持的视频格式。兼容所有设备和平台，适合分享、存档、上传。默认推荐格式。','zh-HK':'H.264 編碼 + AAC 音頻，全球最廣泛支援的影片格式。兼容所有設備和平台，適合分享、存檔、上載。預設推薦格式。','en':'H.264 + AAC. The most widely supported video format worldwide. Compatible with all devices and platforms. Default recommendation.','ja':'H.264 + AAC。世界で最も広くサポートされている動画形式。すべてのデバイスとプラットフォームに対応。デフォルト推奨。','ko':'H.264 + AAC. 전 세계적으로 가장 널리 지원되는 비디오 형식. 모든 기기 및 플랫폼과 호환. 기본 권장.' },
    'guide.mov.name': { 'zh-CN':'MOV — Apple 原生','zh-HK':'MOV — Apple 原生','en':'MOV — Apple Native','ja':'MOV — Appleネイティブ','ko':'MOV — Apple 네이티브' },
    'guide.mov.desc': { 'zh-CN':'Apple QuickTime 容器，常用 H.264 编码。macOS/iOS 原生支持最佳，适合在 Apple 设备间传输。Windows 需额外解码器。','zh-HK':'Apple QuickTime 容器，常用 H.264 編碼。macOS/iOS 原生支援最佳，適合在 Apple 設備間傳輸。Windows 需額外解碼器。','en':'Apple QuickTime container, typically H.264. Best native support on macOS/iOS. Ideal for Apple ecosystem. May need codecs on Windows.','ja':'Apple QuickTimeコンテナ、通常H.264。macOS/iOSで最高のネイティブサポート。Apple製品間の転送に最適。Windowsではコーデックが必要な場合あり。','ko':'Apple QuickTime 컨테이너, 일반적으로 H.264. macOS/iOS에서 최고의 네이티브 지원. Apple 기기 간 전송에 이상적. Windows에서는 코덱이 필요할 수 있음.' },
    'guide.avi.name': { 'zh-CN':'AVI — 通用兼容','zh-HK':'AVI — 通用兼容','en':'AVI — Universal','ja':'AVI — ユニバーサル','ko':'AVI — 범용 호환' },
    'guide.avi.desc': { 'zh-CN':'微软最早的多媒体容器格式，H.264 + MP3 编码。兼容大量老旧播放器和设备，适合需要在旧系统上播放的场景。','zh-HK':'微軟最早的多媒體容器格式，H.264 + MP3 編碼。相容大量老舊播放器和設備，適合需要在舊系統上播放的場景。','en':'Microsoft legacy multimedia container, H.264 + MP3. Highly compatible with older players and devices. Good for legacy system playback.','ja':'Microsoftのレガシーマルチメディアコンテナ、H.264 + MP3。古いプレーヤーやデバイスとの高い互換性。レガシーシステムでの再生に適。','ko':'Microsoft 레거시 멀티미디어 컨테이너, H.264 + MP3. 구형 플레이어 및 기기와 높은 호환성. 레거시 시스템 재생에 적합.' },
    'guide.mkv.name': { 'zh-CN':'MKV — 无损封装','zh-HK':'MKV — 無損封裝','en':'MKV — Lossless Container','ja':'MKV — ロスレスコンテナ','ko':'MKV — 무손실 컨테이너' },
    'guide.mkv.desc': { 'zh-CN':'Matroska 开源容器，几乎可以封装任何编码格式。支持多音轨、字幕、章节。适合存档和高级用户。体积较大。','zh-HK':'Matroska 開源容器，幾乎可以封裝任何編碼格式。支援多音軌、字幕、章節。適合存檔和進階用戶。體積較大。','en':'Matroska open container. Supports almost any codec, multiple audio tracks, subtitles, chapters. Great for archiving. Larger file size.','ja':'Matroskaオープンコンテナ。ほぼすべてのコーデック、複数音声トラック、字幕、チャプターに対応。アーカイブに最適。ファイルサイズ大。','ko':'Matroska 오픈 컨테이너. 거의 모든 코덱, 다중 오디오 트랙, 자막, 챕터 지원. 아카이브에 적합. 파일 크기가 큼.' },
    'guide.webm.name': { 'zh-CN':'WebM — 网页优化','zh-HK':'WebM — 網頁優化','en':'WebM — Web Optimized','ja':'WebM — Web最適化','ko':'WebM — 웹 최적화' },
    'guide.webm.desc': { 'zh-CN':'Google 主导的开放网页视频格式，H.264 + AAC 编码。适合网页嵌入和 HTML5 播放，浏览器兼容性好。','zh-HK':'Google 主導的開放網頁影片格式，H.264 + AAC 編碼。適合網頁嵌入和 HTML5 播放，瀏覽器兼容性好。','en':'Open web video format by Google, H.264 + AAC. Ideal for web embedding and HTML5 playback. Good browser compatibility.','ja':'Google主導のオープンWeb動画形式、H.264 + AAC。Web埋め込みやHTML5再生に最適。ブラウザ互換性良好。','ko':'Google 주도의 오픈 웹 비디오 형식, H.264 + AAC. 웹 임베딩 및 HTML5 재생에 이상적. 브라우저 호환성 좋음.' },
    'guide.flv.name': { 'zh-CN':'FLV — Flash 视频','zh-HK':'FLV — Flash 影片','en':'FLV — Flash Video','ja':'FLV — Flash動画','ko':'FLV — Flash 비디오' },
    'guide.flv.desc': { 'zh-CN':'Adobe Flash 时代的流媒体格式，H.264 + AAC 编码。适合转换遗留 Flash 视频或特定流媒体用途。','zh-HK':'Adobe Flash 時代的流媒體格式，H.264 + AAC 編碼。適合轉換遺留 Flash 影片或特定流媒體用途。','en':'Legacy streaming format from the Adobe Flash era, H.264 + AAC. Good for converting old Flash videos or specific streaming use cases.','ja':'Adobe Flash時代のストリーミング形式、H.264 + AAC。古いFlash動画の変換や特定のストリーミング用途に適。','ko':'Adobe Flash 시대의 레거시 스트리밍 형식, H.264 + AAC. 오래된 Flash 비디오 변환이나 특정 스트리밍 용도에 적합.' },
    'guide.wmv.name': { 'zh-CN':'WMV — Windows 媒体','zh-HK':'WMV — Windows 媒體','en':'WMV — Windows Media','ja':'WMV — Windows Media','ko':'WMV — Windows 미디어' },
    'guide.wmv.desc': { 'zh-CN':'微软 Windows Media 格式，H.264 + AAC 编码。Windows 系统原生支持最佳，适合企业内部使用。','zh-HK':'微軟 Windows Media 格式，H.264 + AAC 編碼。Windows 系統原生支援最佳，適合企業內部使用。','en':'Microsoft Windows Media format, H.264 + AAC. Best native support on Windows. Suitable for enterprise internal use.','ja':'Microsoft Windows Media形式、H.264 + AAC。Windowsで最高のネイティブサポート。企業内部での使用に適。','ko':'Microsoft Windows Media 형식, H.264 + AAC. Windows에서 최고의 네이티브 지원. 기업 내부 사용에 적합.' },
    'guide.m4v.name': { 'zh-CN':'M4V — iTunes 视频','zh-HK':'M4V — iTunes 影片','en':'M4V — iTunes Video','ja':'M4V — iTunesビデオ','ko':'M4V — iTunes 비디오' },
    'guide.m4v.desc': { 'zh-CN':'Apple iTunes 视频格式，基于 MP4 容器，H.264 + AAC 编码。适合导入 iTunes 资料库或在 Apple TV 上播放。','zh-HK':'Apple iTunes 影片格式，基於 MP4 容器，H.264 + AAC 編碼。適合匯入 iTunes 資料庫或在 Apple TV 上播放。','en':'Apple iTunes video format, based on MP4 container, H.264 + AAC. Great for importing into iTunes library or Apple TV playback.','ja':'Apple iTunesビデオ形式、MP4コンテナベース、H.264 + AAC。iTunesライブラリへのインポートやApple TVでの再生に最適。','ko':'Apple iTunes 비디오 형식, MP4 컨테이너 기반, H.264 + AAC. iTunes 라이브러리 가져오기 또는 Apple TV 재생에 적합.' },
    'guide.3gp.name': { 'zh-CN':'3GP — 手机视频','zh-HK':'3GP — 手機影片','en':'3GP — Mobile Video','ja':'3GP — モバイル動画','ko':'3GP — 모바일 비디오' },
    'guide.3gp.desc': { 'zh-CN':'3GPP 移动视频标准，H.264 + AAC 编码。适合功能手机或需要极小体积的场景。画质相对较低。','zh-HK':'3GPP 移動影片標準，H.264 + AAC 編碼。適合功能手機或需要極小體積的場景。畫質相對較低。','en':'3GPP mobile video standard, H.264 + AAC. Suitable for feature phones or scenarios requiring extremely small files. Lower visual quality.','ja':'3GPPモバイル動画標準、H.264 + AAC。フィーチャーフォンや非常に小さなファイルが必要な場合に適。画質は比較的低め。','ko':'3GPP 모바일 비디오 표준, H.264 + AAC. 피처폰 또는 매우 작은 파일이 필요한 시나리오에 적합. 화질은 상대적으로 낮음.' },
    'guide.ogg.name': { 'zh-CN':'OGG — 开源容器','zh-HK':'OGG — 開源容器','en':'OGG — Open Container','ja':'OGG — オープンコンテナ','ko':'OGG — 오픈 컨테이너' },
    'guide.ogg.desc': { 'zh-CN':'Xiph.org 开源容器格式，H.264 + AAC 编码。完全无专利限制，适合开源项目。部分播放器兼容性有限。','zh-HK':'Xiph.org 開源容器格式，H.264 + AAC 編碼。完全無專利限制，適合開源專案。部分播放器兼容性有限。','en':'Xiph.org open-source container format, H.264 + AAC. Completely patent-free. Ideal for open-source projects. Limited player compatibility.','ja':'Xiph.orgオープンソースコンテナ形式、H.264 + AAC。完全に特許フリー。オープンソースプロジェクトに最適。一部プレーヤーで互換性に制限あり。','ko':'Xiph.org 오픈소스 컨테이너 형식, H.264 + AAC. 완전히 특허 무료. 오픈소스 프로젝트에 이상적. 일부 플레이어에서 호환성 제한.' },
    'guide.ts.name': { 'zh-CN':'TS — 传输流','zh-HK':'TS — 傳輸流','en':'TS — Transport Stream','ja':'TS — トランスポートストリーム','ko':'TS — 전송 스트림' },
    'guide.ts.desc': { 'zh-CN':'MPEG 传输流格式，H.264 + AAC 编码。用于数字电视广播和 HLS 流媒体。适合需要切片的流媒体场景。','zh-HK':'MPEG 傳輸流格式，H.264 + AAC 編碼。用於數字電視廣播和 HLS 流媒體。適合需要切片的流媒體場景。','en':'MPEG Transport Stream format, H.264 + AAC. Used in digital TV broadcasting and HLS streaming. Good for segment-based streaming.','ja':'MPEGトランスポートストリーム形式、H.264 + AAC。デジタルテレビ放送やHLSストリーミングで使用。セグメントベースのストリーミングに適。','ko':'MPEG 전송 스트림 형식, H.264 + AAC. 디지털 TV 방송 및 HLS 스트리밍에 사용. 세그먼트 기반 스트리밍에 적합.' },
    'guide.vob.name': { 'zh-CN':'VOB — DVD 视频','zh-HK':'VOB — DVD 影片','en':'VOB — DVD Video','ja':'VOB — DVDビデオ','ko':'VOB — DVD 비디오' },
    'guide.vob.desc': { 'zh-CN':'DVD 视频对象格式，H.264 + AAC 编码。适合制作兼容 DVD 播放器的视频文件。通常需要与其他 IFO/BUP 文件配合。','zh-HK':'DVD 影片對象格式，H.264 + AAC 編碼。適合製作兼容 DVD 播放器的影片檔案。通常需要與其他 IFO/BUP 檔案配合。','en':'DVD Video Object format, H.264 + AAC. Suitable for creating DVD player-compatible video files. Usually needs IFO/BUP companion files.','ja':'DVDビデオオブジェクト形式、H.264 + AAC。DVDプレーヤー互換のビデオファイル作成に適。通常IFO/BUPファイルと共に使用。','ko':'DVD 비디오 객체 형식, H.264 + AAC. DVD 플레이어 호환 비디오 파일 생성에 적합. 일반적으로 IFO/BUP 동반 파일 필요.' },
    'guide.rm.name': { 'zh-CN':'RM — RealMedia','zh-HK':'RM — RealMedia','en':'RM — RealMedia','ja':'RM — RealMedia','ko':'RM — RealMedia' },
    'guide.rm.desc': { 'zh-CN':'RealNetworks 旧式流媒体格式，H.264 + AAC 编码。兼容 RealPlayer 等老旧播放器。适合转换遗留 RealMedia 视频。','zh-HK':'RealNetworks 舊式流媒體格式，H.264 + AAC 編碼。兼容 RealPlayer 等老舊播放器。適合轉換遺留 RealMedia 影片。','en':'RealNetworks legacy streaming format, H.264 + AAC. Compatible with RealPlayer and other old players. For converting legacy RealMedia videos.','ja':'RealNetworksのレガシーストリーミング形式、H.264 + AAC。RealPlayer等の古いプレーヤーに対応。レガシーRealMedia動画の変換に。','ko':'RealNetworks 레거시 스트리밍 형식, H.264 + AAC. RealPlayer 등 구형 플레이어와 호환. 레거시 RealMedia 비디오 변환용.' },
    'guide.asf.name': { 'zh-CN':'ASF — 流媒体','zh-HK':'ASF — 流媒體','en':'ASF — Streaming','ja':'ASF — ストリーミング','ko':'ASF — 스트리밍' },
    'guide.asf.desc': { 'zh-CN':'微软高级流格式，H.264 + AAC 编码。支持流媒体传输和渐进下载。Windows 系统原生支持，适合 Windows 环境。','zh-HK':'微軟高級流格式，H.264 + AAC 編碼。支援流媒體傳輸和漸進下載。Windows 系統原生支援，適合 Windows 環境。','en':'Microsoft Advanced Streaming Format, H.264 + AAC. Supports streaming and progressive download. Native Windows support. Good for Windows environments.','ja':'Microsoft Advanced Streaming Format、H.264 + AAC。ストリーミングとプログレッシブダウンロードに対応。Windowsネイティブサポート。Windows環境に最適。','ko':'Microsoft Advanced Streaming Format, H.264 + AAC. 스트리밍 및 점진적 다운로드 지원. Windows 네이티브 지원. Windows 환경에 적합.' },
    'guide.divx.name': { 'zh-CN':'DivX — 高压缩','zh-HK':'DivX — 高壓縮','en':'DivX — High Compression','ja':'DivX — 高圧縮','ko':'DivX — 고압축' },
    'guide.divx.desc': { 'zh-CN':'DivX 高压缩视频格式，H.264 + AAC 编码。以高压缩比著称，适合在保持较好画质的同时大幅减小文件体积。','zh-HK':'DivX 高壓縮影片格式，H.264 + AAC 編碼。以高壓縮比著稱，適合在保持較好畫質的同時大幅減小檔案體積。','en':'DivX high-compression video format, H.264 + AAC. Known for high compression ratios while maintaining decent quality. Great for reducing file size.','ja':'DivX高圧縮動画形式、H.264 + AAC。高圧縮比で知られ、適度な画質を維持しながらファイルサイズを大幅に削減。','ko':'DivX 고압축 비디오 형식, H.264 + AAC. 적절한 품질을 유지하면서 높은 압축률로 파일 크기를 크게 줄이는 데 적합.' },
    'guide.f4v.name': { 'zh-CN':'F4V — Flash HD','zh-HK':'F4V — Flash HD','en':'F4V — Flash HD','ja':'F4V — Flash HD','ko':'F4V — Flash HD' },
    'guide.f4v.desc': { 'zh-CN':'Adobe Flash 高清视频格式，基于 MP4 容器，H.264 + AAC 编码。FLV 的后继者，支持高清内容。','zh-HK':'Adobe Flash 高清影片格式，基於 MP4 容器，H.264 + AAC 編碼。FLV 的後繼者，支援高清內容。','en':'Adobe Flash HD video format, based on MP4 container, H.264 + AAC. Successor to FLV with HD support.','ja':'Adobe Flash HDビデオ形式、MP4コンテナベース、H.264 + AAC。FLVの後継でHD対応。','ko':'Adobe Flash HD 비디오 형식, MP4 컨테이너 기반, H.264 + AAC. HD 지원 FLV의 후속.' },
    'guide.gif.name': { 'zh-CN':'GIF — 动图输出','zh-HK':'GIF — 動圖輸出','en':'GIF — Animated Image','ja':'GIF — アニメーション画像','ko':'GIF — 애니메이션 이미지' },
    'guide.gif.desc': { 'zh-CN':'从视频片段生成循环动图，256 色调色板。适合短小有趣的片段分享。注意：文件可能较大，建议截取 10 秒以内。','zh-HK':'從影片片段生成循環動圖，256 色調色板。適合短小有趣的片段分享。注意：檔案可能較大，建議截取 10 秒以內。','en':'Create looping GIFs from video clips. 256 color palette. Great for short, fun clips. Note: files can be large, keep under 10 seconds.','ja':'動画クリップからループGIFを生成。256色パレット。短い面白いクリップの共有に最適。ファイルサイズが大きくなる場合があるため10秒以内を推奨。','ko':'비디오 클립에서 루프 GIF 생성. 256색 팔레트. 짧고 재미있는 클립 공유에 적합. 파일이 커질 수 있으므로 10초 이내 권장.' },
    'guide.mp3.name': { 'zh-CN':'MP3 — 音频提取','zh-HK':'MP3 — 音頻提取','en':'MP3 — Audio Extract','ja':'MP3 — 音声抽出','ko':'MP3 — 오디오 추출' },
    'guide.mp3.desc': { 'zh-CN':'从视频中提取音频并编码为 MP3。最通用的音频格式，所有设备均支持。适合提取视频中的音乐、对话、播客素材。','zh-HK':'從影片中提取音頻並編碼為 MP3。最通用的音頻格式，所有設備均支援。適合提取影片中的音樂、對話、播客素材。','en':'Extract and encode audio as MP3. The most universal audio format, supported everywhere. Great for extracting music, dialogue, podcast material.','ja':'動画から音声を抽出しMP3にエンコード。最も普及している音声形式で、すべてのデバイスで再生可能。音楽、会話、ポッドキャスト素材の抽出に最適。','ko':'비디오에서 오디오를 추출하여 MP3로 인코딩. 가장 보편적인 오디오 형식으로 모든 기기에서 지원. 음악, 대화, 팟캐스트 소재 추출에 적합.' },

    /* ===== HOW TO USE ===== */
    'howto.title': { 'zh-CN':'🚀 如何使用','zh-HK':'🚀 如何使用','en':'🚀 How to Use','ja':'🚀 使い方','ko':'🚀 사용 방법' },
    'howto.step1.title': { 'zh-CN':'上传视频','zh-HK':'上傳影片','en':'Upload Video','ja':'動画をアップロード','ko':'비디오 업로드' },
    'howto.step1.desc': { 'zh-CN':'拖放视频文件到上方区域，或点击选择文件。支持 MP4、MOV、AVI、MKV、WebM、FLV 等 20+ 格式。','zh-HK':'拖放影片檔案到上方區域，或點擊選擇檔案。支援 MP4、MOV、AVI、MKV、WebM、FLV 等 20+ 格式。','en':'Drag & drop videos into the area above, or click to browse. Supports MP4, MOV, AVI, MKV, WebM, FLV, and 20+ formats.','ja':'動画ファイルを上部エリアにドラッグ＆ドロップ、またはクリックして選択。MP4、MOV、AVI、MKV、WebM、FLVなど20以上の形式に対応。','ko':'비디오 파일을 위 영역에 끌어다 놓거나 클릭하여 선택하세요. MP4, MOV, AVI, MKV, WebM, FLV 등 20개 이상의 형식을 지원합니다.' },
    'howto.step2.title': { 'zh-CN':'选择格式或预设','zh-HK':'選擇格式或預設','en':'Choose Format or Preset','ja':'形式またはプリセットを選択','ko':'형식 또는 프리셋 선택' },
    'howto.step2.desc': { 'zh-CN':'在左侧面板选择输出格式，或选择 App 适配预设（抖音、微信、小红书、B 站）一键配置最佳参数。','zh-HK':'在左側面板選擇輸出格式，或選擇 App 適配預設（抖音、微信、小紅書、B 站）一鍵配置最佳參數。','en':'Select output format or choose an App preset (Douyin, WeChat, RED, Bilibili) to auto-configure optimal settings.','ja':'左パネルで出力形式を選択するか、アプリプリセット（Douyin、WeChat、RED、Bilibili）を選んで最適設定を自動構成。','ko':'왼쪽 패널에서 출력 형식을 선택하거나 앱 프리셋(Douyin, WeChat, RED, Bilibili)을 선택하여 최적 설정을 자동 구성하세요.' },
    'howto.step3.title': { 'zh-CN':'调整参数','zh-HK':'調整參數','en':'Adjust Settings','ja':'設定を調整','ko':'설정 조정' },
    'howto.step3.desc': { 'zh-CN':'根据需要调整画质滑块、输出分辨率、帧率等参数。选择音频格式时将仅提取音频不包含视频画面。','zh-HK':'根據需要調整畫質滑塊、輸出分辨率、幀率等參數。選擇音頻格式時將僅提取音頻不包含影片畫面。','en':'Adjust quality, resolution, frame rate as needed. Audio formats will extract sound only without video.','ja':'必要に応じて品質、解像度、フレームレートを調整。音声形式を選択すると映像なしで音声のみ抽出します。','ko':'필요에 따라 품질, 해상도, 프레임 레이트를 조정하세요. 오디오 형식을 선택하면 비디오 없이 소리만 추출됩니다.' },
    'howto.step4.title': { 'zh-CN':'下载结果','zh-HK':'下載結果','en':'Download Results','ja':'結果をダウンロード','ko':'결과 다운로드' },
    'howto.step4.desc': { 'zh-CN':'单文件下载或一键打包 ZIP。所有转换在浏览器中完成，大文件请耐心等待处理。','zh-HK':'單檔案下載或一鍵打包 ZIP。所有轉換在瀏覽器中完成，大檔案請耐心等待處理。','en':'Download individually or as ZIP. All conversion happens in your browser. Please be patient with large files.','ja':'個別ダウンロードまたはZIPで一括保存。すべての変換はブラウザ内で行われます。大きなファイルはお待ちください。','ko':'개별 다운로드 또는 ZIP으로 일괄 저장. 모든 변환은 브라우저에서 수행됩니다. 대용량 파일은 기다려 주세요.' },

    /* ===== FAQ ===== */
    'faq.title': { 'zh-CN':'❓ 常见问题 FAQ','zh-HK':'❓ 常見問題 FAQ','en':'❓ FAQ','ja':'❓ よくある質問 FAQ','ko':'❓ 자주 묻는 질문 FAQ' },
    'faq.q1': { 'zh-CN':'视频会上传到服务器吗？','zh-HK':'影片會上載到伺服器嗎？','en':'Are videos uploaded to a server?','ja':'動画はサーバーにアップロードされますか？','ko':'비디오가 서버에 업로드되나요?' },
    'faq.a1': { 'zh-CN':'不会。所有视频处理均在您的浏览器本地完成，依赖 ffmpeg.wasm 引擎。文件不会离开您的设备。可以断开网络连接使用（引擎缓存后）。','zh-HK':'不會。所有影片處理均在您的瀏覽器本機完成，依賴 ffmpeg.wasm 引擎。檔案不會離開您的裝置。可以斷開網絡連接使用（引擎緩存後）。','en':'No. All processing happens locally via ffmpeg.wasm. Files never leave your device. Works offline once the engine is cached.','ja':'いいえ。すべての処理はffmpeg.wasmエンジンによりブラウザ内でローカルに完了します。ファイルがデバイスから出ることはありません。エンジンがキャッシュされればオフラインでも動作します。','ko':'아니요. 모든 처리는 ffmpeg.wasm 엔진을 통해 브라우저에서 로컬로 수행됩니다. 파일이 기기를 떠나지 않습니다. 엔진이 캐시된 후에는 오프라인에서도 작동합니다.' },
    'faq.q2': { 'zh-CN':'支持哪些视频格式？','zh-HK':'支援哪些影片格式？','en':'What video formats are supported?','ja':'どのような動画形式に対応していますか？','ko':'어떤 비디오 형식을 지원하나요?' },
    'faq.a2': { 'zh-CN':'输入支持 MP4、MOV、AVI、MKV、WebM、FLV、WMV、M4V、3GP、OGG、TS、VOB、RM、ASF、DIVX、F4V、GIF 等 20+ 格式。输出支持 MP4、MOV、AVI、MKV、WebM、FLV、WMV、M4V、3GP、OGG、TS、VOB、RM、ASF、DivX、F4V、GIF、MP3、AAC 共 19 种格式。','zh-HK':'輸入支援 MP4、MOV、AVI、MKV、WebM、FLV、WMV、M4V、3GP、OGG、TS、VOB、RM、ASF、DIVX、F4V、GIF 等 20+ 格式。輸出支援 MP4、MOV、AVI、MKV、WebM、FLV、WMV、M4V、3GP、OGG、TS、VOB、RM、ASF、DivX、F4V、GIF、MP3、AAC 共 19 種格式。','en':'Input: MP4, MOV, AVI, MKV, WebM, FLV, WMV, M4V, 3GP, OGG, TS, VOB, RM, ASF, DIVX, F4V, GIF (20+). Output: MP4, MOV, AVI, MKV, WebM, FLV, WMV, M4V, 3GP, OGG, TS, VOB, RM, ASF, DivX, F4V, GIF, MP3, AAC (19 formats).','ja':'入力：MP4、MOV、AVI、MKV、WebM、FLV、WMV、M4V、3GP、OGG、TS、VOB、RM、ASF、DIVX、F4V、GIF（20以上）。出力：MP4、MOV、AVI、MKV、WebM、FLV、WMV、M4V、3GP、OGG、TS、VOB、RM、ASF、DivX、F4V、GIF、MP3、AAC（19形式）。','ko':'입력: MP4, MOV, AVI, MKV, WebM, FLV, WMV, M4V, 3GP, OGG, TS, VOB, RM, ASF, DIVX, F4V, GIF (20+). 출력: MP4, MOV, AVI, MKV, WebM, FLV, WMV, M4V, 3GP, OGG, TS, VOB, RM, ASF, DivX, F4V, GIF, MP3, AAC (19형식).' },
    'faq.q3': { 'zh-CN':'处理速度如何？','zh-HK':'處理速度如何？','en':'How fast is the processing?','ja':'処理速度はどうですか？','ko':'처리 속도는 어느 정도인가요?' },
    'faq.a3': { 'zh-CN':'速度取决于您的设备性能和视频文件大小。由于 ffmpeg.wasm 运行在浏览器中，处理速度约为原生 ffmpeg 的 1/3 到 1/2。建议单文件控制在 500MB 以内。','zh-HK':'速度取決於您的裝置性能和影片檔案大小。由於 ffmpeg.wasm 運行在瀏覽器中，處理速度約為原生 ffmpeg 的 1/3 到 1/2。建議單檔案控制在 500MB 以內。','en':'Speed depends on your device and file size. ffmpeg.wasm runs in-browser at about 1/3 to 1/2 native speed. We recommend files under 500MB.','ja':'速度はデバイスの性能とファイルサイズに依存します。ffmpeg.wasmはブラウザ内で実行されるため、ネイティブの1/3～1/2程度の速度です。500MB以内を推奨します。','ko':'속도는 기기 성능과 파일 크기에 따라 다릅니다. ffmpeg.wasm은 브라우저에서 실행되므로 네이티브 속도의 약 1/3~1/2입니다. 500MB 이내를 권장합니다.' },
    'faq.q4': { 'zh-CN':'App 预设是什么意思？','zh-HK':'App 預設是什麼意思？','en':'What are App presets?','ja':'アプリプリセットとは何ですか？','ko':'앱 프리셋이란 무엇인가요?' },
    'faq.a4': { 'zh-CN':'我们针对抖音、微信、小红书、B 站等平台推荐的视频参数提供了预设。选择预设后会自动配置分辨率、编码格式、帧率等，您也可以在此基础上手动微调。','zh-HK':'我們針對抖音、微信、小紅書、B 站等平台推薦的影片參數提供了預設。選擇預設後會自動配置分辨率、編碼格式、幀率等，您也可以在此基礎上手動微調。','en':'We provide presets optimized for Douyin, WeChat, RED, Bilibili, etc. Selecting a preset auto-configures resolution, codec, frame rate — you can still fine-tune afterwards.','ja':'Douyin、WeChat、RED、Bilibiliなどのプラットフォームに最適化されたプリセットを提供しています。プリセットを選択すると解像度、コーデック、フレームレートが自動設定され、その後手動調整も可能です。','ko':'Douyin, WeChat, RED, Bilibili 등 플랫폼에 최적화된 프리셋을 제공합니다. 프리셋을 선택하면 해상도, 코덱, 프레임 레이트가 자동 구성되며 이후 수동 조정도 가능합니다.' },
    'faq.q5': { 'zh-CN':'为什么首次加载比较慢？','zh-HK':'為什麼首次載入比較慢？','en':'Why is the first load slow?','ja':'初回の読み込みが遅いのはなぜですか？','ko':'첫 로딩이 느린 이유는 무엇인가요?' },
    'faq.a5': { 'zh-CN':'首次使用需下载 ffmpeg.wasm 引擎（约 31MB），这是视频转换的核心。下载后会缓存在浏览器中，下次访问无需重新下载。','zh-HK':'首次使用需下載 ffmpeg.wasm 引擎（約 31MB），這是影片轉換的核心。下載後會緩存在瀏覽器中，下次訪問無需重新下載。','en':'First use downloads the ffmpeg.wasm engine (~31MB), the core of video conversion. It caches in your browser for instant reuse.','ja':'初回使用時にffmpeg.wasmエンジン（約31MB）をダウンロードします。これが動画変換の中核です。ブラウザにキャッシュされるため、次回からは再ダウンロード不要です。','ko':'첫 사용 시 ffmpeg.wasm 엔진(약 31MB)을 다운로드합니다. 이는 비디오 변환의 핵심입니다. 브라우저에 캐시되어 다음 방문 시 다시 다운로드할 필요가 없습니다.' },
    'faq.q6': { 'zh-CN':'支持 4K 视频吗？','zh-HK':'支援 4K 影片嗎？','en':'Is 4K video supported?','ja':'4K動画に対応していますか？','ko':'4K 비디오를 지원하나요?' },
    'faq.a6': { 'zh-CN':'支持，但由于浏览器内存限制，4K 视频的处理速度会明显变慢。建议分辨率不超过 4K，文件大小不超过 500MB，以确保稳定处理。','zh-HK':'支援，但由於瀏覽器記憶體限制，4K 影片的處理速度會明顯變慢。建議分辨率不超過 4K，檔案大小不超過 500MB，以確保穩定處理。','en':'Yes, but processing 4K videos is significantly slower due to browser memory limits. We recommend max 4K resolution and 500MB file size for stable processing.','ja':'対応していますが、ブラウザのメモリ制限により4K動画の処理速度は大幅に低下します。安定した処理のために4K解像度以下、500MB以下を推奨します。','ko':'지원하지만 브라우저 메모리 제한으로 인해 4K 비디오 처리 속도가 크게 느려집니다. 안정적인 처리를 위해 최대 4K 해상도, 500MB 이하를 권장합니다.' },
    'faq.q7': { 'zh-CN':'支持加密视频格式吗？','zh-HK':'支援加密影片格式嗎？','en':'Are encrypted video formats supported?','ja':'暗号化された動画形式はサポートされていますか？','ko':'암호화된 비디오 형식을 지원하나요?' },
    'faq.a7': { 'zh-CN':'不支持。QLV（腾讯视频）、QSV（爱奇艺）、KUX（优酷）、XV（迅雷）、BHD（暴风影音）、IFOX（搜狐）、LETV（乐视）、BLV/M4S（B站）、EV4（网易云课堂）、T9（腾讯课堂）、PCF（网易公开课）等平台专属加密格式均受 DRM 版权保护，只能在各自官方客户端播放，无法通过本工具转换。','zh-HK':'不支援。QLV（騰訊視頻）、QSV（愛奇藝）、KUX（優酷）、XV（迅雷）、BHD（暴風影音）、IFOX（搜狐）、LETV（樂視）、BLV/M4S（B站）、EV4（網易雲課堂）、T9（騰訊課堂）、PCF（網易公開課）等平台專屬加密格式均受 DRM 版權保護，只能在各自官方客戶端播放，無法通過本工具轉換。','en':'No. QLV (Tencent), QSV (iQiyi), KUX (Youku), XV (Xunlei), BHD (Storm), IFOX (Sohu), LETV (LeTV), BLV/M4S (Bilibili), EV4, T9, PCF and other platform-specific encrypted formats are DRM-protected. They can only be played in their official apps and cannot be converted here.','ja':'いいえ。QLV（Tencent）、QSV（iQiyi）、KUX（Youku）、XV（Xunlei）、BHD（Storm）、IFOX（Sohu）、LETV（LeTV）、BLV/M4S（Bilibili）、EV4、T9、PCFなど、各プラットフォーム固有の暗号化形式はDRM保護されており、公式アプリでのみ再生可能です。本ツールでは変換できません。','ko':'아니요. QLV(Tencent), QSV(iQiyi), KUX(Youku), XV(Xunlei), BHD(Storm), IFOX(Sohu), LETV(LeTV), BLV/M4S(Bilibili), EV4, T9, PCF 등 플랫폼 고유의 암호화된 형식은 DRM 보호되어 공식 앱에서만 재생 가능하며 본 도구로 변환할 수 없습니다.' },

    /* ===== WHY US ===== */
    'why.title': { 'zh-CN':'💎 为什么选择我们','zh-HK':'💎 為什麼選擇我們','en':'💎 Why Choose Us','ja':'💎 当サイトの強み','ko':'💎 선택해야 하는 이유' },
    'why.card1.title': { 'zh-CN':'隐私安全','zh-HK':'私隱安全','en':'Privacy First','ja':'プライバシー保護','ko':'개인정보 보호' },
    'why.card1.desc': { 'zh-CN':'纯本地处理，视频不上传服务器。没有隐私泄露风险，引擎缓存后可离线使用。','zh-HK':'純本機處理，影片不上載伺服器。沒有私隱洩露風險，引擎緩存後可離線使用。','en':'100% local processing. Videos never uploaded. No privacy risk. Works offline after engine cache.','ja':'完全ローカル処理。動画のアップロードなし。プライバシーリスクゼロ。エンジンキャッシュ後はオフラインでも使用可能。','ko':'100% 로컬 처리. 비디오가 서버에 업로드되지 않습니다. 개인정보 유출 위험 없음. 엔진 캐시 후 오프라인 사용 가능.' },
    'why.card2.title': { 'zh-CN':'格式全面','zh-HK':'格式全面','en':'Comprehensive Formats','ja':'豊富な形式','ko':'포괄적인 형식' },
    'why.card2.desc': { 'zh-CN':'支持 20+ 输入格式，19 种输出格式（含视频、动图、音频），覆盖日常全场景需求。','zh-HK':'支援 20+ 輸入格式，19 種輸出格式（含影片、動圖、音頻），覆蓋日常全場景需求。','en':'20+ input formats, 19 output types (video, GIF, audio). Covers all common needs.','ja':'20以上の入力形式、19種類の出力（動画、GIF、音声）。あらゆるニーズに対応。','ko':'20개 이상의 입력 형식, 19가지 출력 유형(비디오, GIF, 오디오). 모든 일반적인 요구를 충족.' },
    'why.card3.title': { 'zh-CN':'App 适配','zh-HK':'App 適配','en':'App Presets','ja':'アプリプリセット','ko':'앱 프리셋' },
    'why.card3.desc': { 'zh-CN':'内置抖音、微信、小红书、B 站等主流平台适配预设，一键生成符合平台推荐的视频参数。','zh-HK':'內置抖音、微信、小紅書、B 站等主流平台適配預設，一鍵生成符合平台推薦的影片參數。','en':'Built-in presets for Douyin, WeChat, RED, Bilibili. One-click optimal settings for each platform.','ja':'Douyin、WeChat、RED、Bilibiliなどの主要プラットフォーム向けプリセット内蔵。ワンクリックで各プラットフォームの推奨設定を適用。','ko':'Douyin, WeChat, RED, Bilibili 등 주요 플랫폼용 프리셋 내장. 각 플랫폼에 최적화된 설정을 원클릭으로 적용.' },
    'why.card4.title': { 'zh-CN':'完全免费','zh-HK':'完全免費','en':'100% Free','ja':'完全無料','ko':'100% 무료' },
    'why.card4.desc': { 'zh-CN':'无订阅、无限制、无水印。永久免费使用，不捆绑任何付费功能。','zh-HK':'無訂閱、無限制、無水印。永久免費使用，不捆綁任何付費功能。','en':'No subscriptions, no limits, no watermarks. Free forever, no hidden paid features.','ja':'サブスクリプションなし、制限なし、透かしなし。永久無料で、隠れた有料機能は一切ありません。','ko':'구독 없음, 제한 없음, 워터마크 없음. 숨겨진 유료 기능 없이 영원히 무료.' },
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
