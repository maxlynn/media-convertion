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
    'nav.slogan':  { 'en':'Local processing in browser | Free audio converter', 'ja':'ブラウザで処理、サーバー不要 | 無料音声変換', 'ko':'브라우저 내 처리, 서버 업로드 없음 | 무료 오디오 변환기', 'zh-CN':'浏览器本地处理，不上传服务器 | 免费浏览器音频格式转换器', 'zh-HK':'瀏覽器本地處理，不上傳伺服器 | 免費瀏覽器音頻格式轉換器' },

    'format.label':   { 'zh-CN':'输出格式', 'zh-HK':'輸出格式', 'en':'Output Format', 'ja':'出力形式', 'ko':'출력 형식' },
    'format.mp3':     { 'zh-CN':'MP3 — 通用兼容', 'zh-HK':'MP3 — 通用兼容', 'en':'MP3 — Universal', 'ja':'MP3 — ユニバーサル', 'ko':'MP3 — 범용' },
    'format.wav':     { 'zh-CN':'WAV — 无损未压缩', 'zh-HK':'WAV — 無損未壓縮', 'en':'WAV — Uncompressed', 'ja':'WAV — 無圧縮', 'ko':'WAV — 무압축' },
    'format.ogg':     { 'zh-CN':'OGG — 开源 Vorbis', 'zh-HK':'OGG — 開源 Vorbis', 'en':'OGG — Open Source', 'ja':'OGG — オープンソース', 'ko':'OGG — 오픈소스' },
    'format.aac':     { 'zh-CN':'AAC — 高效压缩', 'zh-HK':'AAC — 高效壓縮', 'en':'AAC — High Efficiency', 'ja':'AAC — 高効率圧縮', 'ko':'AAC — 고효율 압축' },
    'format.flac':    { 'zh-CN':'FLAC — 无损压缩', 'zh-HK':'FLAC — 無損壓縮', 'en':'FLAC — Lossless', 'ja':'FLAC — 可逆圧縮', 'ko':'FLAC — 무손실 압축' },
    'format.opus':    { 'zh-CN':'OPUS — 现代编码', 'zh-HK':'OPUS — 現代編碼', 'en':'OPUS — Modern Codec', 'ja':'OPUS — 最新コーデック', 'ko':'OPUS — 최신 코덱' },
    'format.m4a':     { 'zh-CN':'M4A — Apple AAC', 'zh-HK':'M4A — Apple AAC', 'en':'M4A — Apple AAC', 'ja':'M4A — Apple AAC', 'ko':'M4A — Apple AAC' },
    'format.wma':     { 'zh-CN':'WMA — Windows Media', 'zh-HK':'WMA — Windows Media', 'en':'WMA — Windows Media', 'ja':'WMA — Windows Media', 'ko':'WMA — Windows Media' },
    'format.aiff':    { 'zh-CN':'AIFF — 未压缩', 'zh-HK':'AIFF — 未壓縮', 'en':'AIFF — Uncompressed', 'ja':'AIFF — 無圧縮', 'ko':'AIFF — 무압축' },
    'format.ac3':     { 'zh-CN':'AC3 — 杜比数字', 'zh-HK':'AC3 — 杜比數字', 'en':'AC3 — Dolby Digital', 'ja':'AC3 — ドルビーデジタル', 'ko':'AC3 — 돌비 디지털' },
    'format.amr':     { 'zh-CN':'AMR — 移动音频', 'zh-HK':'AMR — 移動音頻', 'en':'AMR — Mobile Audio', 'ja':'AMR — モバイル音声', 'ko':'AMR — 모바일 오디오' },

    'bitrate.label':  { 'zh-CN':'比特率', 'zh-HK':'比特率', 'en':'Bitrate', 'ja':'ビットレート', 'ko':'비트레이트' },
    'bitrate.64':     { 'zh-CN':'64 kbps — 最小体积', 'zh-HK':'64 kbps — 最小體積', 'en':'64 kbps — Smallest', 'ja':'64 kbps — 最小サイズ', 'ko':'64 kbps — 최소 용량' },
    'bitrate.96':     { 'zh-CN':'96 kbps — 语音', 'zh-HK':'96 kbps — 語音', 'en':'96 kbps — Voice', 'ja':'96 kbps — 音声', 'ko':'96 kbps — 음성' },
    'bitrate.128':    { 'zh-CN':'128 kbps — 标准', 'zh-HK':'128 kbps — 標準', 'en':'128 kbps — Standard', 'ja':'128 kbps — 標準', 'ko':'128 kbps — 표준' },
    'bitrate.160':    { 'zh-CN':'160 kbps — 良好', 'zh-HK':'160 kbps — 良好', 'en':'160 kbps — Good', 'ja':'160 kbps — 良好', 'ko':'160 kbps — 양호' },
    'bitrate.192':    { 'zh-CN':'192 kbps — 高质量', 'zh-HK':'192 kbps — 高品質', 'en':'192 kbps — High Quality', 'ja':'192 kbps — 高品質', 'ko':'192 kbps — 고품질' },
    'bitrate.256':    { 'zh-CN':'256 kbps — 极高', 'zh-HK':'256 kbps — 極高', 'en':'256 kbps — Very High', 'ja':'256 kbps — 非常に高い', 'ko':'256 kbps — 매우 높음' },
    'bitrate.320':    { 'zh-CN':'320 kbps — 最佳', 'zh-HK':'320 kbps — 最佳', 'en':'320 kbps — Best', 'ja':'320 kbps — 最高', 'ko':'320 kbps — 최고' },
    'bitrate.same':   { 'zh-CN':'与源文件相同', 'zh-HK':'與源檔案相同', 'en':'Same as source', 'ja':'ソースと同じ', 'ko':'원본과 동일' },

    'samplerate.label':  { 'zh-CN':'采样率', 'zh-HK':'採樣率', 'en':'Sample Rate', 'ja':'サンプルレート', 'ko':'샘플 레이트' },
    'samplerate.same':   { 'zh-CN':'与源文件相同', 'zh-HK':'與源檔案相同', 'en':'Same as source', 'ja':'ソースと同じ', 'ko':'원본과 동일' },
    'samplerate.8000':   { 'zh-CN':'8000 Hz — 电话', 'zh-HK':'8000 Hz — 電話', 'en':'8000 Hz — Telephone', 'ja':'8000 Hz — 電話', 'ko':'8000 Hz — 전화' },
    'samplerate.22050':  { 'zh-CN':'22050 Hz', 'zh-HK':'22050 Hz', 'en':'22050 Hz', 'ja':'22050 Hz', 'ko':'22050 Hz' },
    'samplerate.44100':  { 'zh-CN':'44100 Hz — CD', 'zh-HK':'44100 Hz — CD', 'en':'44100 Hz — CD Quality', 'ja':'44100 Hz — CD品質', 'ko':'44100 Hz — CD 품질' },
    'samplerate.48000':  { 'zh-CN':'48000 Hz — 专业', 'zh-HK':'48000 Hz — 專業', 'en':'48000 Hz — Professional', 'ja':'48000 Hz — プロ', 'ko':'48000 Hz — 전문가' },
    'samplerate.96000':  { 'zh-CN':'96000 Hz — 高清', 'zh-HK':'96000 Hz — 高清', 'en':'96000 Hz — Hi-Res', 'ja':'96000 Hz — ハイレゾ', 'ko':'96000 Hz — 고해상도' },

    'channels.label':  { 'zh-CN':'声道', 'zh-HK':'聲道', 'en':'Channels', 'ja':'チャンネル', 'ko':'채널' },
    'channels.same':   { 'zh-CN':'与源文件相同', 'zh-HK':'與源檔案相同', 'en':'Same as source', 'ja':'ソースと同じ', 'ko':'원본과 동일' },
    'channels.mono':   { 'zh-CN':'单声道 (Mono)', 'zh-HK':'單聲道 (Mono)', 'en':'Mono', 'ja':'モノラル', 'ko':'모노' },
    'channels.stereo': { 'zh-CN':'立体声 (Stereo)', 'zh-HK':'立體聲 (Stereo)', 'en':'Stereo', 'ja':'ステレオ', 'ko':'스테레오' },

    'drop.title':     { 'zh-CN':'拖放音频文件到此处，或点击选择文件', 'zh-HK':'拖放音頻檔案到此處，或點擊選擇檔案', 'en':'Drag & drop audio files here, or click to browse', 'ja':'音声ファイルをドラッグ＆ドロップ、またはクリックして選択', 'ko':'오디오 파일을 끌어다 놓거나 클릭하여 선택하세요' },
    'drop.addmore':   { 'zh-CN':'📂 点击此处或拖放继续添加 — MP3·WAV·OGG·FLAC·AAC·M4A·WMA·OPUS·AIFF 等', 'zh-HK':'📂 點擊此處或拖放繼續添加 — MP3·WAV·OGG·FLAC·AAC·M4A·WMA·OPUS·AIFF 等', 'en':'📂 Click or drop to add more — MP3·WAV·OGG·FLAC·AAC·M4A·WMA·OPUS·AIFF etc', 'ja':'📂 クリックまたはドロップで追加 — MP3·WAV·OGG·FLAC·AAC·M4A·WMA·OPUS·AIFF 等', 'ko':'📂 클릭 또는 드롭으로 추가 — MP3·WAV·OGG·FLAC·AAC·M4A·WMA·OPUS·AIFF 등' },
    'drop.paste':     { 'zh-CN':'也支持 <code>Ctrl+V</code> 粘贴文件', 'zh-HK':'亦支援 <code>Ctrl+V</code> 貼上檔案', 'en':'Also supports <code>Ctrl+V</code> paste', 'ja':'<code>Ctrl+V</code> での貼り付けも対応', 'ko':'<code>Ctrl+V</code> 붙여넣기도 지원' },
    'drop.formats': {
      'zh-CN':'常见音频：MP3 · WAV · OGG · FLAC · AAC · M4A · WMA · OPUS · AIFF · AMR / 无损：FLAC · ALAC · APE · WV · TTA / 其他：AC3 · DTS · MIDI · RA · AU · VOC · SPX · WEBM',
      'zh-HK':'常見音頻：MP3 · WAV · OGG · FLAC · AAC · M4A · WMA · OPUS · AIFF · AMR / 無損：FLAC · ALAC · APE · WV · TTA / 其他：AC3 · DTS · MIDI · RA · AU · VOC · SPX · WEBM',
      'en':'Common: MP3 · WAV · OGG · FLAC · AAC · M4A · WMA · OPUS · AIFF · AMR / Lossless: FLAC · ALAC · APE · WV · TTA / Others: AC3 · DTS · MIDI · RA · AU · VOC · SPX · WEBM',
      'ja':'一般：MP3 · WAV · OGG · FLAC · AAC · M4A · WMA · OPUS · AIFF · AMR / 可逆：FLAC · ALAC · APE · WV · TTA / その他：AC3 · DTS · MIDI · RA · AU · VOC · SPX · WEBM',
      'ko':'일반: MP3 · WAV · OGG · FLAC · AAC · M4A · WMA · OPUS · AIFF · AMR / 무손실: FLAC · ALAC · APE · WV · TTA / 기타: AC3 · DTS · MIDI · RA · AU · VOC · SPX · WEBM'
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

    'file.count':     { 'zh-CN':'{n} 个文件', 'zh-HK':'{n} 個檔案', 'en':'{n} file(s)', 'ja':'{n} ファイル', 'ko':'파일 {n}개' },

    'cookie.text':    { 'zh-CN':'本网站使用 Google AdSense 等服务以展示广告。继续使用即表示您同意我们使用 Cookie。详见', 'zh-HK':'本網站使用 Google AdSense 等服務以展示廣告。繼續使用即表示您同意我們使用 Cookie。詳見', 'en':'This site uses services like Google AdSense to display ads. By continuing, you agree to our use of cookies. See', 'ja':'このサイトではGoogle AdSenseなどのサービスを使用して広告を表示しています。続行するとCookieの使用に同意したことになります。', 'ko':'이 사이트는 Google AdSense와 같은 서비스를 사용하여 광고를 표시합니다. 계속 사용하면 쿠키 사용에 동의하는 것으로 간주됩니다.' },
    'cookie.link':    { 'zh-CN':'隐私政策', 'zh-HK':'私隱政策', 'en':'Privacy Policy', 'ja':'プライバシーポリシー', 'ko':'개인정보처리방침' },
    'cookie.btn':     { 'zh-CN':'知道了', 'zh-HK':'知道了', 'en':'Got it', 'ja':'了解', 'ko':'확인' },

    'footer.privacy': { 'zh-CN':'隐私政策', 'zh-HK':'私隱政策', 'en':'Privacy Policy',  'ja':'プライバシーポリシー', 'ko':'개인정보처리방침' },
    'footer.terms':   { 'zh-CN':'服务条款', 'zh-HK':'服務條款', 'en':'Terms of Service','ja':'利用規約',         'ko':'서비스 약관' },
    'footer.contact': { 'zh-CN':'联系我们', 'zh-HK':'聯絡我們', 'en':'Contact Us',      'ja':'お問い合わせ',     'ko':'문의하기' },
    'footer.github':  { 'zh-CN':'GitHub', 'zh-HK':'GitHub', 'en':'GitHub', 'ja':'GitHub', 'ko':'GitHub' },
    'footer.tagline': { 'zh-CN':'所有处理均在浏览器本地完成，文件不会上传到任何服务器', 'zh-HK':'所有處理均在瀏覽器本機完成，檔案不會上載到任何伺服器', 'en':'All processing happens locally in your browser — files are never uploaded', 'ja':'すべての処理はブラウザ内で完結し、ファイルがサーバーにアップロードされることはありません', 'ko':'모든 처리는 브라우저에서 로컬로 수행되며 파일은 서버에 업로드되지 않습니다' },
    'footer.copyright':{ en:'© 2026 Audio format conversion. All rights reserved.', 'zh-CN':'© 2026 Audio format conversion. All rights reserved.', 'zh-HK':'© 2026 Audio format conversion. All rights reserved.', 'ja':'© 2026 Audio format conversion. All rights reserved.', 'ko':'© 2026 Audio format conversion. All rights reserved.' },

    'page.title.index':   { 'zh-CN':'Audio format conversion — 纯本地音频格式转换器', 'zh-HK':'Audio format conversion — 純本機音頻格式轉換器', 'en':'Audio format conversion — Local Audio Converter', 'ja':'Audio format conversion — ローカル音声変換ツール', 'ko':'Audio format conversion — 로컬 오디오 변환기' },
    'page.desc.index':    { 'zh-CN':'纯浏览器端音频批量转换工具，文件不上传服务器，支持 MP3、WAV、OGG、AAC、FLAC、OPUS、M4A 格式互转', 'zh-HK':'純瀏覽器端音頻批量轉換工具，檔案不上載伺服器，支援 MP3、WAV、OGG、AAC、FLAC、OPUS、M4A 格式互轉', 'en':'Browser-based batch audio converter — no uploads, supports MP3, WAV, OGG, AAC, FLAC, OPUS, M4A', 'ja':'ブラウザ完結のバッチ音声変換 — アップロード不要、MP3/WAV/OGG/AAC/FLAC/OPUS/M4A対応', 'ko':'브라우저 기반 배치 오디오 변환기 — 업로드 없음, MP3/WAV/OGG/AAC/FLAC/OPUS/M4A 지원' },
    'page.title.privacy': { 'zh-CN':'隐私政策 — Audio format conversion', 'zh-HK':'私隱政策 — Audio format conversion', 'en':'Privacy Policy — Audio format conversion', 'ja':'プライバシーポリシー — Audio format conversion', 'ko':'개인정보처리방침 — Audio format conversion' },
    'page.title.terms':   { 'zh-CN':'服务条款 — Audio format conversion', 'zh-HK':'服務條款 — Audio format conversion', 'en':'Terms of Service — Audio format conversion', 'ja':'利用規約 — Audio format conversion', 'ko':'서비스 약관 — Audio format conversion' },
    'page.title.about':   { 'zh-CN':'联系我们 — Audio format conversion', 'zh-HK':'聯絡我們 — Audio format conversion', 'en':'Contact Us — Audio format conversion', 'ja':'お問い合わせ — Audio format conversion', 'ko':'문의하기 — Audio format conversion' },

    'browser.notice': {
      'zh-CN':'⚠ 推荐使用 Chrome 内核浏览器（Chrome、Edge 等）以获得最佳支持。首次加载需下载约 30MB 的转换引擎。',
      'zh-HK':'⚠ 建議使用 Chrome 內核瀏覽器（Chrome、Edge 等）以獲得最佳支援。首次加載需下載約 30MB 的轉換引擎。',
      'en':'⚠ Chrome-based browsers (Chrome, Edge) are recommended. First load requires ~30MB engine download.',
      'ja':'⚠ Chrome系ブラウザ（Chrome、Edge等）をお勧めします。初回ロード時に約30MBのエンジンをダウンロードします。',
      'ko':'⚠ Chrome 기반 브라우저(Chrome, Edge 등)를 권장합니다. 최초 로드 시 약 30MB 엔진 다운로드가 필요합니다.'
    },

    'engine.loading': { 'zh-CN':'正在加载转换引擎 (ffmpeg.wasm)，首次加载约需 5-15 秒…', 'zh-HK':'正在加載轉換引擎 (ffmpeg.wasm)，首次加載約需 5-15 秒…', 'en':'Loading conversion engine (ffmpeg.wasm), first load ~5-15s…', 'ja':'変換エンジン (ffmpeg.wasm) をロード中、初回は約5-15秒…', 'ko':'변환 엔진(ffmpeg.wasm) 로드 중, 최초 로드 약 5-15초…' },
    'engine.ready': { 'zh-CN':'转换引擎就绪 ✓', 'zh-HK':'轉換引擎就緒 ✓', 'en':'Engine ready ✓', 'ja':'エンジン準備完了 ✓', 'ko':'엔진 준비 완료 ✓' },
    'engine.failed': { 'zh-CN':'⚠ 转换引擎加载失败，请刷新页面重试', 'zh-HK':'⚠ 轉換引擎加載失敗，請刷新頁面重試', 'en':'⚠ Engine load failed, please refresh', 'ja':'⚠ エンジンのロードに失敗しました。リロードしてください', 'ko':'⚠ 엔진 로드 실패, 페이지를 새로고침하세요' },
    'processing': { 'zh-CN':'转换中，请稍后…', 'zh-HK':'轉換中，請稍後…', 'en':'Converting, please wait…', 'ja':'変換中、お待ちください…', 'ko':'변환 중, 잠시만 기다려주세요…' },

    'theme.dark_hint':  { 'zh-CN':'点击切换为白天模式', 'zh-HK':'點擊切換為白天模式', 'en':'Switch to light mode', 'ja':'ライトモードに切替', 'ko':'라이트 모드로 전환' },
    'theme.light_hint': { 'zh-CN':'点击切换为夜间模式', 'zh-HK':'點擊切換為夜間模式', 'en':'Switch to dark mode', 'ja':'ダークモードに切替', 'ko':'다크 모드로 전환' },
    'accent.cyan_hint':  { 'zh-CN':'点击切换为粉霓虹主题', 'zh-HK':'點擊切換為粉霓虹主題', 'en':'Switch to pink neon', 'ja':'ピンクネオンに切替', 'ko':'핑크 네온으로 전환' },
    'accent.magenta_hint': { 'zh-CN':'点击切换为青霓虹主题', 'zh-HK':'點擊切換為青霓虹主題', 'en':'Switch to cyan neon', 'ja':'シアンネオンに切替', 'ko':'시안 네온으로 전환' },

    /* ===== FORMAT GUIDE ===== */
    'guide.title': { 'zh-CN':'📖 音频格式详解', 'zh-HK':'📖 音頻格式詳解', 'en':'📖 Audio Format Guide', 'ja':'📖 音声形式ガイド', 'ko':'📖 오디오 형식 가이드' },
    'guide.mp3.name': { 'zh-CN':'MP3 — 通用兼容','zh-HK':'MP3 — 通用兼容','en':'MP3 — Universal','ja':'MP3 — ユニバーサル','ko':'MP3 — 범용 호환' },
    'guide.mp3.desc':  { 'zh-CN':'最广泛支持的音频格式，有损压缩（MPEG-1 Audio Layer 3）。适合音乐、播客和通用场景。几乎所有设备和播放器都支持。','zh-HK':'最廣泛支援的音頻格式，有損壓縮（MPEG-1 Audio Layer 3）。適合音樂、播客和通用場景。幾乎所有設備和播放器都支援。','en':'Most universal audio format. Lossy compression (MPEG-1 Layer 3). Best for music, podcasts, general use. Supported everywhere.','ja':'最も普及している音声形式。非可逆圧縮（MPEG-1 Layer 3）。音楽、ポッドキャスト、一般用途に最適。ほぼすべてのデバイスで再生可能。','ko':'가장 보편적인 오디오 형식. 손실 압축(MPEG-1 Layer 3). 음악, 팟캐스트, 범용에 적합. 거의 모든 기기에서 지원.' },
    'guide.wav.name': { 'zh-CN':'WAV — 无损未压缩','zh-HK':'WAV — 無損未壓縮','en':'WAV — Uncompressed','ja':'WAV — 無圧縮','ko':'WAV — 무손실 무압축' },
    'guide.wav.desc':  { 'zh-CN':'Microsoft/IBM 开发，PCM 未压缩音频。音质完全保真，但文件较大（约 10MB/分钟/CD 质量）。适合音频编辑和存档。','zh-HK':'Microsoft/IBM 開發，PCM 未壓縮音頻。音質完全保真，但檔案較大（約 10MB/分鐘/CD 質量）。適合音頻編輯和存檔。','en':'Microsoft/IBM PCM uncompressed. Perfect fidelity, but large files (~10MB/min at CD quality). Best for editing and archiving.','ja':'Microsoft/IBM開発。PCM無圧縮。完全な忠実度だがファイルは大きい（CD品質で約10MB/分）。編集やアーカイブに最適。','ko':'Microsoft/IBM 개발. PCM 무압축. 완벽한 품질, 하지만 파일이 큼(CD 품질 기준 약 10MB/분). 편집 및 아카이브에 최적.' },
    'guide.ogg.name': { 'zh-CN':'OGG — 开源 Vorbis','zh-HK':'OGG — 開源 Vorbis','en':'OGG — Open Source','ja':'OGG — オープンソース','ko':'OGG — 오픈소스 Vorbis' },
    'guide.ogg.desc':  { 'zh-CN':'完全开源，无专利限制。同码率下音质优于 MP3，支持多声道。用于游戏、流媒体和 Linux/Android 生态。','zh-HK':'完全開源，無專利限制。同碼率下音質優於 MP3，支援多聲道。用於遊戲、流媒體和 Linux/Android 生態。','en':'Fully open source, no patents. Better quality than MP3 at same bitrate. Supports multi-channel. Used in games, streaming, Linux/Android.','ja':'完全オープンソース、特許制限なし。同ビットレートでMP3より高品質。マルチチャンネル対応。ゲーム、ストリーミング、Linux/Androidで使用。','ko':'완전 오픈소스, 특허 제한 없음. 동일 비트레이트에서 MP3보다 우수한 품질. 멀티채널 지원. 게임, 스트리밍, Linux/Android에서 사용.' },
    'guide.aac.name': { 'zh-CN':'AAC — 高效压缩','zh-HK':'AAC — 高效壓縮','en':'AAC — High Efficiency','ja':'AAC — 高効率圧縮','ko':'AAC — 고효율 압축' },
    'guide.aac.desc':  { 'zh-CN':'MP3 后继者，同码率音质优于 MP3。Apple 全系设备原生支持，YouTube/Netflix 标准格式。M4A 文件通常为 AAC 编码。','zh-HK':'MP3 後繼者，同碼率音質優於 MP3。Apple 全系設備原生支援，YouTube/Netflix 標準格式。M4A 檔案通常為 AAC 編碼。','en':'MP3 successor, better quality at same bitrate. Native on all Apple devices. Standard for YouTube/Netflix. M4A files are usually AAC.','ja':'MP3の後継。同ビットレートでMP3より高品質。Apple全デバイスでネイティブ対応。YouTube/Netflixの標準形式。M4Aファイルは通常AAC。','ko':'MP3 후속, 동일 비트레이트에서 더 나은 품질. 모든 Apple 기기에서 기본 지원. YouTube/Netflix 표준 형식. M4A 파일은 일반적으로 AAC.' },
    'guide.flac.name': { 'zh-CN':'FLAC — 无损压缩','zh-HK':'FLAC — 無損壓縮','en':'FLAC — Lossless','ja':'FLAC — 可逆圧縮','ko':'FLAC — 무손실 압축' },
    'guide.flac.desc':  { 'zh-CN':'Free Lossless Audio Codec。无损压缩，文件约 WAV 的 50-60%，完美保留所有音频信息。适合高质量音乐收藏和存档。','zh-HK':'Free Lossless Audio Codec。無損壓縮，檔案約 WAV 的 50-60%，完美保留所有音頻信息。適合高質量音樂收藏和存檔。','en':'Free Lossless Audio Codec. ~50-60% of WAV size with perfect fidelity. Ideal for high-quality music collections and archiving.','ja':'Free Lossless Audio Codec。WAVの約50-60%のサイズで完全な忠実度。高品質な音楽コレクションやアーカイブに最適。','ko':'Free Lossless Audio Codec. WAV의 약 50-60% 크기로 완벽한 품질. 고품질 음악 컬렉션 및 아카이브에 이상적.' },
    'guide.opus.name': { 'zh-CN':'OPUS — 现代编码','zh-HK':'OPUS — 現代編碼','en':'OPUS — Modern Codec','ja':'OPUS — 最新コーデック','ko':'OPUS — 최신 코덱' },
    'guide.opus.desc':  { 'zh-CN':'IETF 标准，综合性能最优的有损编码。支持 6-510 kbps、单声道到 5.1 环绕。低码率下远超 MP3/AAC，VoIP 和流媒体首选。','zh-HK':'IETF 標準，綜合性能最優的有損編碼。支援 6-510 kbps、單聲道到 5.1 環繞。低碼率下遠超 MP3/AAC，VoIP 和流媒體首選。','en':'IETF standard. Best all-around lossy codec. 6-510 kbps, mono to 5.1 surround. Far better than MP3/AAC at low bitrates. Top choice for VoIP/streaming.','ja':'IETF標準。総合性能最高の非可逆コーデック。6-510 kbps、モノラルから5.1サラウンド。低ビットレートでMP3/AACよりはるかに高品質。VoIP/ストリーミングに最適。','ko':'IETF 표준. 최고의 범용 손실 코덱. 6-510 kbps, 모노에서 5.1 서라운드. 낮은 비트레이트에서 MP3/AAC보다 훨씬 우수. VoIP/스트리밍 최적.' },
    'guide.wma.name': { 'zh-CN':'WMA — Windows Media','zh-HK':'WMA — Windows Media','en':'WMA — Windows Media','ja':'WMA — Windows Media','ko':'WMA — Windows Media' },
    'guide.wma.desc':  { 'zh-CN':'Microsoft 开发的有损/无损格式。曾广泛用于 Windows 生态，现代逐渐被 AAC 和 MP3 取代。输入支持。','zh-HK':'Microsoft 開發的有損/無損格式。曾廣泛用於 Windows 生態，現代逐漸被 AAC 和 MP3 取代。輸入支援。','en':'Microsoft lossy/lossless format. Once dominant in Windows ecosystem, now largely replaced by AAC/MP3. Input support only.','ja':'Microsoft開発の非可逆/可逆形式。かつてWindowsエコシステムで主流だったが、現在はAAC/MP3に置き換えられつつある。入力のみ対応。','ko':'Microsoft 손실/무손실 형식. 한때 Windows 생태계에서 주류였으나 현재는 AAC/MP3로 대체. 입력만 지원.' },

    /* ===== HOW TO USE ===== */
    'howto.title': { 'zh-CN':'🚀 如何使用','zh-HK':'🚀 如何使用','en':'🚀 How to Use','ja':'🚀 使い方','ko':'🚀 사용 방법' },
    'howto.step1.title': { 'zh-CN':'上传音频','zh-HK':'上傳音頻','en':'Upload Audio','ja':'音声をアップロード','ko':'오디오 업로드' },
    'howto.step1.desc':  { 'zh-CN':'拖放音频文件到上方区域，或点击选择文件。支持 MP3、WAV、FLAC、AAC、OGG、M4A、WMA、AIFF 等 25+ 格式。','zh-HK':'拖放音頻檔案到上方區域，或點擊選擇檔案。支援 MP3、WAV、FLAC、AAC、OGG、M4A、WMA、AIFF 等 25+ 格式。','en':'Drag & drop audio files into the area above, or click to browse. Supports 25+ formats including MP3, WAV, FLAC, AAC, OGG, M4A, WMA, AIFF.','ja':'音声ファイルを上部エリアにドラッグ＆ドロップ、またはクリックして選択。MP3、WAV、FLAC、AAC、OGG、M4A、WMA、AIFFなど25以上の形式に対応。','ko':'오디오 파일을 위 영역에 끌어다 놓거나 클릭하여 선택하세요. MP3, WAV, FLAC, AAC, OGG, M4A, WMA, AIFF 등 25개 이상의 형식을 지원합니다.' },
    'howto.step2.title': { 'zh-CN':'选择格式','zh-HK':'選擇格式','en':'Choose Format','ja':'形式を選択','ko':'형식 선택' },
    'howto.step2.desc':  { 'zh-CN':'在左侧面板选择目标格式：MP3（通用）、AAC（Apple/YouTube）、FLAC（无损）、WAV（未压缩）、OGG/OPUS（开源）。','zh-HK':'在左側面板選擇目標格式：MP3（通用）、AAC（Apple/YouTube）、FLAC（無損）、WAV（未壓縮）、OGG/OPUS（開源）。','en':'Pick your output format: MP3 (universal), AAC (Apple/YouTube), FLAC (lossless), WAV (uncompressed), OGG/OPUS (open source).','ja':'左パネルから出力形式を選択：MP3（汎用）、AAC（Apple/YouTube）、FLAC（可逆）、WAV（無圧縮）、OGG/OPUS（オープンソース）。','ko':'왼쪽 패널에서 출력 형식을 선택하세요: MP3(범용), AAC(Apple/YouTube), FLAC(무손실), WAV(무압축), OGG/OPUS(오픈소스).' },
    'howto.step3.title': { 'zh-CN':'调整参数','zh-HK':'調整參數','en':'Adjust Settings','ja':'設定を調整','ko':'설정 조정' },
    'howto.step3.desc':  { 'zh-CN':'选择比特率（64-320 kbps）、采样率和声道数。高比特率音质更好，低比特率文件更小。','zh-HK':'選擇比特率（64-320 kbps）、採樣率和聲道數。高比特率音質更好，低比特率檔案更小。','en':'Choose bitrate (64-320 kbps), sample rate, and channels. Higher bitrate = better quality, lower = smaller files.','ja':'ビットレート（64-320 kbps）、サンプルレート、チャンネル数を選択。高ビットレートほど高品質、低ビットレートほど小さいファイルに。','ko':'비트레이트(64-320 kbps), 샘플 레이트, 채널을 선택하세요. 높은 비트레이트는 더 나은 품질, 낮은 비트레이트는 더 작은 파일.' },
    'howto.step4.title': { 'zh-CN':'下载结果','zh-HK':'下載結果','en':'Download Results','ja':'結果をダウンロード','ko':'결과 다운로드' },
    'howto.step4.desc':  { 'zh-CN':'单首下载或一键打包 ZIP。所有转换在浏览器中本地完成，无需等待上传。','zh-HK':'單首下載或一鍵打包 ZIP。所有轉換在瀏覽器中本機完成，無需等待上載。','en':'Download individually or as ZIP. All conversion happens locally in your browser — no upload wait.','ja':'個別ダウンロードまたはZIPで一括保存。すべての変換はブラウザ内でローカルに完了します。','ko':'개별 다운로드 또는 ZIP으로 일괄 저장. 모든 변환은 브라우저에서 로컬로 수행됩니다.' },

    /* ===== FAQ ===== */
    'faq.title': { 'zh-CN':'❓ 常见问题','zh-HK':'❓ 常見問題','en':'❓ FAQ','ja':'❓ よくある質問','ko':'❓ 자주 묻는 질문' },
    'faq.q1': { 'zh-CN':'音频文件会上传到服务器吗？','zh-HK':'音頻檔案會上載到伺服器嗎？','en':'Are audio files uploaded to a server?','ja':'音声ファイルはサーバーにアップロードされますか？','ko':'오디오 파일이 서버에 업로드되나요?' },
    'faq.a1': { 'zh-CN':'不会。所有音频处理均在您的浏览器本地完成，文件不会离开您的设备。即使断开网络连接（转换引擎加载后），本工具也能正常使用。','zh-HK':'不會。所有音頻處理均在您的瀏覽器本機完成，檔案不會離開您的裝置。即使斷開網絡連接（轉換引擎加載後），本工具也能正常使用。','en':'No. All processing happens locally in your browser. Files never leave your device. The tool works offline once the engine is loaded.','ja':'いいえ。すべての処理はブラウザ内でローカルに完了します。ファイルがデバイスから出ることはありません。エンジン読み込み後はオフラインでも動作します。','ko':'아니요. 모든 처리는 브라우저에서 로컬로 수행됩니다. 파일이 기기를 떠나지 않습니다. 엔진 로드 후 오프라인에서도 작동합니다.' },
    'faq.q2': { 'zh-CN':'支持哪些音频格式？','zh-HK':'支援哪些音頻格式？','en':'What audio formats are supported?','ja':'どのような音声形式に対応していますか？','ko':'어떤 오디오 형식을 지원하나요?' },
    'faq.a2': { 'zh-CN':'输入支持 MP3、WAV、OGG、FLAC、AAC、M4A、WMA、OPUS、AIFF、AMR、AC3、DTS、MIDI、APE、WV、TTA 等 25+ 格式。输出支持 MP3、WAV、OGG、AAC、FLAC、OPUS、M4A。','zh-HK':'輸入支援 MP3、WAV、OGG、FLAC、AAC、M4A、WMA、OPUS、AIFF、AMR、AC3、DTS、MIDI、APE、WV、TTA 等 25+ 格式。輸出支援 MP3、WAV、OGG、AAC、FLAC、OPUS、M4A。','en':'Input: MP3, WAV, OGG, FLAC, AAC, M4A, WMA, OPUS, AIFF, AMR, AC3, DTS, MIDI, APE, WV, TTA and more (25+). Output: MP3, WAV, OGG, AAC, FLAC, OPUS, M4A.','ja':'入力：MP3、WAV、OGG、FLAC、AAC、M4A、WMA、OPUS、AIFF、AMR、AC3、DTS、MIDI、APE、WV、TTAなど25以上。出力：MP3、WAV、OGG、AAC、FLAC、OPUS、M4A。','ko':'입력: MP3, WAV, OGG, FLAC, AAC, M4A, WMA, OPUS, AIFF, AMR, AC3, DTS, MIDI, APE, WV, TTA 등 25개 이상. 출력: MP3, WAV, OGG, AAC, FLAC, OPUS, M4A.' },
    'faq.q3': { 'zh-CN':'可以批量转换吗？','zh-HK':'可以批量轉換嗎？','en':'Can I batch convert audio?','ja':'一括変換はできますか？','ko':'일괄 변환이 가능한가요?' },
    'faq.a3': { 'zh-CN':'可以。一次性拖入多首音频即可批量处理，完成后可通过 ZIP 一键下载所有转换结果。','zh-HK':'可以。一次性拖入多首音頻即可批量處理，完成後可通過 ZIP 一鍵下載所有轉換結果。','en':'Yes. Drop multiple audio files at once for batch processing. Download all results as a single ZIP file.','ja':'はい。複数の音声ファイルを一度にドロップして一括処理できます。変換後、ZIPでまとめてダウンロード可能です。','ko':'네. 여러 오디오 파일을 한 번에 끌어다 놓아 일괄 처리할 수 있습니다. 변환 후 ZIP으로 모든 결과를 다운로드할 수 있습니다.' },
    'faq.q4': { 'zh-CN':'转换会降低音质吗？','zh-HK':'轉換會降低音質嗎？','en':'Will conversion reduce audio quality?','ja':'変換で音質は劣化しますか？','ko':'변환하면 음질이 저하되나요?' },
    'faq.a4': { 'zh-CN':'有损格式（MP3、AAC、OGG、OPUS、M4A）可通过比特率控制。设为 256-320 kbps 几乎听不出差异。FLAC 和 WAV 为无损/未压缩格式，音质无损失。','zh-HK':'有損格式（MP3、AAC、OGG、OPUS、M4A）可通過比特率控制。設為 256-320 kbps 幾乎聽不出差異。FLAC 和 WAV 為無損/未壓縮格式，音質無損失。','en':'Lossy formats (MP3, AAC, OGG, OPUS, M4A) are controlled via bitrate. At 256-320 kbps, the difference is nearly inaudible. FLAC and WAV are lossless — no quality loss.','ja':'非可逆形式（MP3、AAC、OGG、OPUS、M4A）はビットレートで調整できます。256-320 kbpsではほとんど違いがわかりません。FLACとWAVは可逆/無圧縮で品質低下なし。','ko':'손실 형식(MP3, AAC, OGG, OPUS, M4A)은 비트레이트로 제어됩니다. 256-320 kbps에서는 거의 차이를 느낄 수 없습니다. FLAC과 WAV는 무손실/무압축으로 품질 저하 없음.' },
    'faq.q5': { 'zh-CN':'为什么首次加载比较慢？','zh-HK':'為什麼首次加載比較慢？','en':'Why is the first load slow?','ja':'初回ロードが遅いのはなぜですか？','ko':'첫 로드가 느린 이유는 무엇인가요?' },
    'faq.a5': { 'zh-CN':'转换引擎（ffmpeg.wasm）首次需下载约 30MB 的 WebAssembly 文件。下载后会由浏览器缓存，再次使用则秒开。','zh-HK':'轉換引擎（ffmpeg.wasm）首次需下載約 30MB 的 WebAssembly 檔案。下載後會由瀏覽器緩存，再次使用則秒開。','en':'The conversion engine (ffmpeg.wasm) needs to download ~30MB of WebAssembly on first use. It is then cached by your browser for instant reuse.','ja':'変換エンジン（ffmpeg.wasm）の初回ダウンロードに約30MBのWebAssemblyが必要です。ダウンロード後はブラウザにキャッシュされ、次回から即座に使用できます。','ko':'변환 엔진(ffmpeg.wasm)이 최초 사용 시 약 30MB의 WebAssembly를 다운로드합니다. 이후 브라우저에 캐시되어 즉시 재사용 가능합니다.' },
    'faq.q6': { 'zh-CN':'MP3 和 AAC 哪个更好？','zh-HK':'MP3 和 AAC 哪個更好？','en':'Which is better, MP3 or AAC?','ja':'MP3とAACどちらが優れていますか？','ko':'MP3와 AAC 중 어느 것이 더 좋은가요?' },
    'faq.a6': { 'zh-CN':'同码率下 AAC 比 MP3 音质更好、文件更小。MP3 兼容性最广，几乎所有设备都能播放。追求质量用 AAC，追求兼容用 MP3。','zh-HK':'同碼率下 AAC 比 MP3 音質更好、檔案更小。MP3 兼容性最廣，幾乎所有設備都能播放。追求質量用 AAC，追求兼容用 MP3。','en':'At the same bitrate, AAC offers better quality in smaller files. MP3 has the widest compatibility. Use AAC for quality, MP3 for compatibility.','ja':'同ビットレートではAACの方が高品質でファイルサイズも小さくなります。MP3は互換性が最も広いです。品質重視ならAAC、互換性重視ならMP3。','ko':'동일 비트레이트에서 AAC가 더 나은 품질과 더 작은 파일 크기를 제공합니다. MP3는 가장 넓은 호환성을 가집니다. 품질은 AAC, 호환성은 MP3.' },

    /* ===== WHY US ===== */
    'why.title': { 'zh-CN':'💎 为什么选择我们','zh-HK':'💎 為什麼選擇我們','en':'💎 Why Choose Us','ja':'💎 当サイトの強み','ko':'💎 선택해야 하는 이유' },
    'why.card1.title': { 'zh-CN':'隐私安全','zh-HK':'私隱安全','en':'Privacy First','ja':'プライバシー保護','ko':'개인정보 보호' },
    'why.card1.desc':  { 'zh-CN':'纯本地处理，文件不上传服务器。没有隐私泄露风险，断网也能用。','zh-HK':'純本機處理，檔案不上載伺服器。沒有私隱洩露風險，離線也能用。','en':'100% local processing. Files are never uploaded. No privacy risk. Works offline.','ja':'完全ローカル処理。ファイルのアップロードなし。プライバシーリスクゼロ。オフラインでも動作。','ko':'100% 로컬 처리. 파일이 서버에 업로드되지 않습니다. 개인정보 유출 위험 없음. 오프라인 작동.' },
    'why.card2.title': { 'zh-CN':'专业引擎','zh-HK':'專業引擎','en':'Pro Engine','ja':'プロエンジン','ko':'전문가 엔진' },
    'why.card2.desc':  { 'zh-CN':'内置 ffmpeg.wasm 引擎，支持几乎所有音频编码格式，媲美桌面端转换质量。','zh-HK':'內置 ffmpeg.wasm 引擎，支援幾乎所有音頻編碼格式，媲美桌面端轉換質量。','en':'Powered by ffmpeg.wasm engine. Supports virtually all audio codecs with desktop-grade quality.','ja':'ffmpeg.wasmエンジン搭載。ほぼすべての音声コーデックに対応し、デスクトップ級の品質。','ko':'ffmpeg.wasm 엔진 탑재. 거의 모든 오디오 코덱을 데스크톱 수준의 품질로 지원합니다.' },
    'why.card3.title': { 'zh-CN':'格式全面','zh-HK':'格式全面','en':'Comprehensive Formats','ja':'豊富な形式','ko':'포괄적 형식' },
    'why.card3.desc':  { 'zh-CN':'支持 25+ 输入格式和 7 种输出格式，覆盖日常音频、无损音频、移动端格式，一站式处理。','zh-HK':'支援 25+ 輸入格式和 7 種輸出格式，覆蓋日常音頻、無損音頻、移動端格式，一站式處理。','en':'25+ input formats and 7 output formats — everyday audio, lossless, mobile — all in one place.','ja':'25以上の入力形式と7つの出力形式に対応。日常的な音声から可逆形式、モバイル形式まで一括処理。','ko':'25개 이상의 입력 형식과 7개의 출력 형식을 지원합니다. 일상 오디오부터 무손실, 모바일 형식까지 한 곳에서.' },
    'why.card4.title': { 'zh-CN':'完全免费','zh-HK':'完全免費','en':'100% Free','ja':'完全無料','ko':'100% 무료' },
    'why.card4.desc':  { 'zh-CN':'无订阅、无限制、无水印。永久免费使用，不捆绑任何付费功能。','zh-HK':'無訂閱、無限制、無水印。永久免費使用，不捆綁任何付費功能。','en':'No subscriptions, no limits, no watermarks. Free forever with no hidden paid features.','ja':'サブスクリプションなし、制限なし、透かしなし。永久無料、隠れた有料機能は一切なし。','ko':'구독 없음, 제한 없음, 워터마크 없음. 숨겨진 유료 기능 없이 영원히 무료.' },

    /* ===== PRIVACY PAGE ===== */
    'privacy.h1':       { 'zh-CN':'隐私政策', 'zh-HK':'私隱政策', 'en':'Privacy Policy', 'ja':'プライバシーポリシー', 'ko':'개인정보처리방침' },
    'privacy.effective':{ 'zh-CN':'生效日期：2026 年 6 月 6 日', 'zh-HK':'生效日期：2026 年 6 月 6 日', 'en':'Effective Date: June 6, 2026', 'ja':'発効日：2026年6月6日', 'ko':'발효일: 2026년 6월 6일' },
    'privacy.content': {
      'zh-CN': `<p>Audio format conversion（以下简称"我们"）非常重视您的隐私。本隐私政策说明了当您访问我们的网站时，我们如何收集、使用和保护您的信息。</p>
<h2>1. 我们收集的信息</h2>
<h3>1.1 自动收集的信息</h3>
<p>当您访问我们的网站时，我们和我们的广告合作伙伴可能会自动收集某些信息，包括：</p>
<ul><li>浏览器类型和版本</li><li>操作系统</li><li>IP 地址（匿名处理）</li><li>访问时间和日期</li><li>浏览行为（通过 Cookie 和类似技术）</li></ul>
<h3>1.2 我们不收集的信息</h3>
<ul><li>您的音频文件内容 — 所有音频转换均在您的浏览器本地完成，不会上传到任何服务器</li><li>个人身份信息（姓名、邮箱、地址等）</li><li>支付信息</li></ul>
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
<h3>3.4 ffmpeg.wasm (CDN)</h3>
<p>我们通过 jsDelivr CDN 加载 ffmpeg.wasm 库以在浏览器端进行音频转码。</p>
<h2>4. 数据共享</h2>
<p>我们不会向第三方出售、交易或转让您的个人信息。自动收集的匿名数据可能通过 Cookie 与我们的广告和分析合作伙伴共享。</p>
<h2>5. 数据安全</h2>
<p>由于所有音频处理均在您的浏览器本地完成，且我们不存储任何上传的文件，因此不存在文件泄露的风险。</p>
<h2>6. 儿童隐私</h2>
<p>我们的服务不面向 13 岁以下的儿童。</p>
<h2>7. 您的权利</h2>
<p>根据适用的隐私法律（如 GDPR、CCPA），您有权：访问我们持有的关于您的个人数据、要求删除您的个人数据、选择退出定向广告、撤回同意。</p>
<h2>8. 联系我们</h2>
<p>如果您对本隐私政策有任何疑问，请通过我们的联系页面与我们联系。</p>
<h2>9. 政策更新</h2>
<p>我们可能会不时更新本隐私政策。所有更新将在本页面上发布。</p>`,
      'zh-HK': `<p>Audio format conversion（以下簡稱"我們"）非常重視您的私隱。本私隱政策說明了當您訪問我們的網站時，我們如何收集、使用和保護您的資訊。</p>
<h2>1. 我們收集的資訊</h2>
<h3>1.1 自動收集的資訊</h3>
<p>當您訪問我們的網站時，我們和我們的廣告合作夥伴可能會自動收集某些資訊，包括：</p>
<ul><li>瀏覽器類型和版本</li><li>操作系統</li><li>IP 地址（匿名處理）</li><li>訪問時間和日期</li><li>瀏覽行為（通過 Cookie 和類似技術）</li></ul>
<h3>1.2 我們不收集的資訊</h3>
<ul><li>您的音頻檔案內容 — 所有音頻轉換均在您的瀏覽器本機完成，不會上載到任何伺服器</li><li>個人身份資訊（姓名、電郵、地址等）</li><li>支付資訊</li></ul>
<h2>2. Cookie 的使用</h2>
<p>我們使用 Cookie 和類似追蹤技術來：</p>
<ul><li>記住您的偏好設定</li><li>通過 Google AdSense 等服務展示相關廣告</li><li>分析網站流量（使用 Google Analytics）</li></ul>
<p>您可以在瀏覽器設定中禁用 Cookie。</p>
<h2>3. 第三方服務</h2>
<h3>3.1 Google AdSense</h3><p>我們使用 Google AdSense 展示廣告。</p>
<h3>3.2 Google Analytics</h3><p>我們使用 Google Analytics 來分析網站流量。</p>
<h3>3.3 JSZip (CDN)</h3><p>我們通過 jsDelivr CDN 加載 JSZip 庫以提供 ZIP 下載功能。</p>
<h3>3.4 ffmpeg.wasm (CDN)</h3><p>我們通過 jsDelivr CDN 加載 ffmpeg.wasm 庫以在瀏覽器端進行音頻轉碼。</p>
<h2>4. 數據共享</h2><p>我們不會向第三方出售、交易或轉讓您的個人資訊。</p>
<h2>5. 數據安全</h2><p>由於所有音頻處理均在您的瀏覽器本機完成，且我們不存儲任何上載的檔案，因此不存在檔案洩露的風險。</p>
<h2>6. 兒童私隱</h2><p>我們的服務不面向 13 歲以下的兒童。</p>
<h2>7. 您的權利</h2><p>根據適用的私隱法律（如 GDPR），您有權：訪問我們持有的關於您的個人數據、要求刪除您的個人數據、選擇退出定向廣告、撤回同意。</p>
<h2>8. 聯絡我們</h2><p>如果您對本私隱政策有任何疑問，請通過我們的聯絡頁面與我們聯絡。</p>
<h2>9. 政策更新</h2><p>我們可能會不時更新本私隱政策。所有更新將在本頁面上發佈。</p>`,
      'en': `<p>Audio format conversion ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.</p>
<h2>1. Information We Collect</h2>
<h3>1.1 Automatically Collected Information</h3>
<p>When you visit our website, we and our advertising partners may automatically collect certain information, including:</p>
<ul><li>Browser type and version</li><li>Operating system</li><li>IP address (anonymized)</li><li>Date and time of visit</li><li>Browsing behavior (via cookies and similar technologies)</li></ul>
<h3>1.2 Information We Do NOT Collect</h3>
<ul><li>Your audio files — all audio conversion happens locally in your browser; files are never uploaded</li><li>Personal identification information (name, email, address, etc.)</li><li>Payment information</li></ul>
<h2>2. Use of Cookies</h2>
<p>We use cookies and similar tracking technologies to:</p>
<ul><li>Remember your preferences</li><li>Display relevant ads via Google AdSense and similar services</li><li>Analyze website traffic (via Google Analytics)</li></ul>
<p>You can disable cookies in your browser settings.</p>
<h2>3. Third-Party Services</h2>
<h3>3.1 Google AdSense</h3><p>We use Google AdSense to display advertisements. Google uses cookies to serve interest-based ads.</p>
<h3>3.2 Google Analytics</h3><p>We use Google Analytics to analyze website traffic.</p>
<h3>3.3 JSZip (CDN)</h3><p>We load the JSZip library via jsDelivr CDN to provide ZIP download functionality.</p>
<h3>3.4 ffmpeg.wasm (CDN)</h3><p>We load the ffmpeg.wasm library via jsDelivr CDN for browser-side audio transcoding.</p>
<h2>4. Data Sharing</h2><p>We do not sell, trade, or transfer your personal information to third parties.</p>
<h2>5. Data Security</h2><p>Since all audio processing happens locally in your browser and we store no uploaded files, there is no risk of file leakage.</p>
<h2>6. Children's Privacy</h2><p>Our service is not directed at children under the age of 13.</p>
<h2>7. Your Rights</h2><p>Under applicable privacy laws (such as GDPR, CCPA), you have the right to: access, delete, opt out of targeted advertising, and withdraw consent.</p>
<h2>8. Contact Us</h2><p>If you have questions about this Privacy Policy, please contact us via our contact page.</p>
<h2>9. Policy Updates</h2><p>We may update this Privacy Policy from time to time. All updates will be posted on this page.</p>`,
      'ja': `<p>Audio format conversion（以下「当社」）は、お客様のプライバシーを尊重します。本プライバシーポリシーは、当社ウェブサイト訪問時の情報の収集、使用、保護について説明します。</p>
<h2>1. 収集する情報</h2>
<h3>1.1 自動収集される情報</h3>
<ul><li>ブラウザの種類とバージョン</li><li>オペレーティングシステム</li><li>IPアドレス（匿名化）</li><li>アクセス日時</li><li>閲覧行動（Cookieおよび類似技術による）</li></ul>
<h3>1.2 収集しない情報</h3>
<ul><li>音声ファイル内容 — すべての変換はブラウザ内で行われ、サーバーにアップロードされません</li><li>個人識別情報（名前、メール、住所など）</li><li>支払い情報</li></ul>
<h2>2. Cookieの使用</h2>
<p>当社は以下の目的でCookieを使用します：設定の記憶、Google AdSense経由の広告表示、Google Analyticsによるトラフィック分析。</p>
<h2>3. 第三者サービス</h2>
<h3>3.1 Google AdSense</h3><p>広告表示にGoogle AdSenseを使用しています。</p>
<h3>3.2 Google Analytics</h3><p>トラフィック分析にGoogle Analyticsを使用しています。</p>
<h3>3.3 JSZip (CDN)</h3><p>ZIPダウンロード機能のためにjsDelivr CDNからJSZipを読み込んでいます。</p>
<h3>3.4 ffmpeg.wasm (CDN)</h3><p>ブラウザ側での音声変換のためにjsDelivr CDNからffmpeg.wasmを読み込んでいます。</p>
<h2>4. データ共有</h2><p>個人情報を第三者に販売、取引、譲渡することはありません。</p>
<h2>5. データセキュリティ</h2><p>すべての音声処理はブラウザ内で行われ、ファイルは保存されないため、漏洩のリスクはありません。</p>
<h2>6. 子供のプライバシー</h2><p>本サービスは13歳未満の子供を対象としていません。</p>
<h2>7. お客様の権利</h2><p>適用されるプライバシー法（GDPR等）に基づき、アクセス、削除、オプトアウト、同意撤回の権利があります。</p>
<h2>8. お問い合わせ</h2><p>ご質問はお問い合わせページからご連絡ください。</p>
<h2>9. ポリシーの更新</h2><p>本ポリシーは随時更新されることがあります。</p>`,
      'ko': `<p>Audio format conversion("당사")는 귀하의 개인정보를 소중히 보호합니다. 본 개인정보처리방침은 당사 웹사이트 방문 시 정보 수집, 사용 및 보호 방법을 설명합니다.</p>
<h2>1. 수집하는 정보</h2>
<h3>1.1 자동 수집 정보</h3>
<ul><li>브라우저 유형 및 버전</li><li>운영체제</li><li>IP 주소(익명화)</li><li>방문 일시</li><li>쿠키 및 유사 기술을 통한 브라우징 행동</li></ul>
<h3>1.2 수집하지 않는 정보</h3>
<ul><li>오디오 파일 내용 — 모든 변환은 브라우저에서 로컬로 수행되며 서버에 업로드되지 않습니다</li><li>개인 식별 정보(이름, 이메일, 주소 등)</li><li>결제 정보</li></ul>
<h2>2. 쿠키 사용</h2>
<p>당사는 환경설정 기억, Google AdSense를 통한 광고 표시, Google Analytics를 통한 트래픽 분석을 위해 쿠키를 사용합니다.</p>
<h2>3. 제3자 서비스</h2>
<h3>3.1 Google AdSense</h3><p>광고 표시를 위해 Google AdSense를 사용합니다.</p>
<h3>3.2 Google Analytics</h3><p>트래픽 분석을 위해 Google Analytics를 사용합니다.</p>
<h3>3.3 JSZip (CDN)</h3><p>ZIP 다운로드 기능을 위해 jsDelivr CDN에서 JSZip을 로드합니다.</p>
<h3>3.4 ffmpeg.wasm (CDN)</h3><p>브라우저 측 오디오 변환을 위해 jsDelivr CDN에서 ffmpeg.wasm을 로드합니다.</p>
<h2>4. 데이터 공유</h2><p>개인정보를 제3자에게 판매, 거래 또는 이전하지 않습니다.</p>
<h2>5. 데이터 보안</h2><p>모든 오디오 처리가 브라우저에서 로컬로 수행되며 파일을 저장하지 않으므로 유출 위험이 없습니다.</p>
<h2>6. 아동 개인정보</h2><p>본 서비스는 13세 미만의 아동을 대상으로 하지 않습니다.</p>
<h2>7. 귀하의 권리</h2><p>관련 개인정보 보호법에 따라 접근, 삭제, 타겟 광고 거부, 동의 철회 권리가 있습니다.</p>
<h2>8. 문의하기</h2><p>본 개인정보처리방침에 대한 질문은 문의 페이지를 통해 연락해 주세요.</p>
<h2>9. 정책 업데이트</h2><p>본 정책은 수시로 업데이트될 수 있습니다.</p>`
    },

    /* ===== TERMS PAGE ===== */
    'terms.h1':  { 'zh-CN':'服务条款', 'zh-HK':'服務條款', 'en':'Terms of Service', 'ja':'利用規約', 'ko':'서비스 약관' },
    'terms.effective': { 'zh-CN':'生效日期：2026 年 6 月 6 日', 'zh-HK':'生效日期：2026 年 6 月 6 日', 'en':'Effective Date: June 6, 2026', 'ja':'発効日：2026年6月6日', 'ko':'발효일: 2026년 6월 6일' },
    'terms.content': {
      'zh-CN': `<p>欢迎使用 Audio format conversion（以下简称"服务"）。使用我们的网站即表示您同意以下条款。</p>
<h2>1. 服务描述</h2><p>Audio format conversion 是一个免费的在线音频格式转换工具。所有音频处理均在您的浏览器本地完成，文件不会上传到我们的服务器。</p>
<h2>2. 使用条款</h2><ul><li>本服务按"现状"提供，仅供个人及商业用途使用</li><li>您不得将本服务用于任何非法或未经授权的目的</li><li>您不得尝试干扰本服务的正常运行</li><li>我们保留随时修改或终止服务的权利</li></ul>
<h2>3. 知识产权</h2><p>您保留通过本服务处理的音频文件的完整所有权。网站本身的代码、设计和内容为 Audio format conversion 所有。</p>
<h2>4. 免责声明</h2><p>本服务按"现状"提供，不附带任何明示或暗示的保证。您使用本服务的风险由您自行承担。</p>
<h2>5. 责任限制</h2><p>在法律允许的最大范围内，Audio format conversion 不对因使用或无法使用本服务而产生的任何直接、间接、附带或结果性损害承担责任。</p>
<h2>6. 第三方链接和广告</h2><p>我们的网站可能包含第三方广告（如 Google AdSense）和指向外部网站的链接。我们不对这些第三方内容负责。</p>
<h2>7. 终止</h2><p>如果我们认为您违反了这些条款，我们保留终止或暂停您访问服务的权利。</p>
<h2>8. 适用法律</h2><p>这些条款受中华人民共和国法律管辖。</p>
<h2>9. 条款变更</h2><p>我们保留随时修改这些条款的权利。继续使用服务即表示接受修改后的条款。</p>
<h2>10. 联系我们</h2><p>如果您对这些条款有任何疑问，请通过我们的联系页面与我们联系。</p>`,
      'zh-HK': `<p>歡迎使用 Audio format conversion（以下簡稱"服務"）。使用我們的網站即表示您同意以下條款。</p>
<h2>1. 服務描述</h2><p>Audio format conversion 是一個免費的線上音頻格式轉換工具。所有音頻處理均在您的瀏覽器本機完成，檔案不會上載到我們的伺服器。</p>
<h2>2. 使用條款</h2><ul><li>本服務按"現狀"提供，僅供個人及商業用途使用</li><li>您不得將本服務用於任何非法或未經授權的目的</li><li>我們保留隨時修改或終止服務的權利</li></ul>
<h2>3. 知識產權</h2><p>您保留通過本服務處理的音頻檔案的完整所有權。網站本身的代碼、設計和內容為 Audio format conversion 所有。</p>
<h2>4. 免責聲明</h2><p>本服務按"現狀"提供，不附帶任何明示或暗示的保證。</p>
<h2>5. 責任限制</h2><p>在法律允許的最大範圍內，Audio format conversion 不對因使用本服務而產生的任何損害承擔責任。</p>
<h2>6. 第三方連結和廣告</h2><p>我們的網站可能包含第三方廣告和外部連結。我們不對這些第三方內容負責。</p>
<h2>7. 終止</h2><p>我們保留在違反條款時終止或暫停您訪問服務的權利。</p>
<h2>8. 適用法律</h2><p>這些條款受中華人民共和國香港特別行政區法律管轄。</p>
<h2>9. 條款變更</h2><p>我們保留隨時修改這些條款的權利。</p>
<h2>10. 聯絡我們</h2><p>如果您對這些條款有任何疑問，請通過我們的聯絡頁面與我們聯絡。</p>`,
      'en': `<p>Welcome to Audio format conversion ("Service"). By using our website, you agree to these terms.</p>
<h2>1. Service Description</h2><p>Audio format conversion is a free online audio format converter. All processing happens locally in your browser; files are never uploaded.</p>
<h2>2. Terms of Use</h2><ul><li>The Service is provided "as is" for personal and commercial use</li><li>You may not use the Service for any illegal or unauthorized purpose</li><li>We reserve the right to modify or discontinue the Service at any time</li></ul>
<h2>3. Intellectual Property</h2><p>You retain full ownership of audio files processed through the Service. The website code, design, and content are owned by Audio format conversion.</p>
<h2>4. Disclaimer</h2><p>The Service is provided "as is" without warranties of any kind. Use at your own risk.</p>
<h2>5. Limitation of Liability</h2><p>To the fullest extent permitted by law, Audio format conversion shall not be liable for any damages arising from use of the Service.</p>
<h2>6. Third-Party Links & Ads</h2><p>Our website may contain third-party ads (e.g., Google AdSense) and external links. We are not responsible for third-party content.</p>
<h2>7. Termination</h2><p>We reserve the right to terminate or suspend access for violations of these terms.</p>
<h2>8. Governing Law</h2><p>These terms are governed by the laws of the People's Republic of China.</p>
<h2>9. Changes to Terms</h2><p>We reserve the right to modify these terms at any time.</p>
<h2>10. Contact</h2><p>If you have questions about these terms, please contact us via our contact page.</p>`,
      'ja': `<p>Audio format conversion（以下「本サービス」）へようこそ。本サイトの利用により、以下の利用規約に同意したものとみなされます。</p>
<h2>1. サービスの説明</h2><p>Audio format conversionは無料のオンライン音声変換ツールです。すべての処理はブラウザ内で行われ、ファイルはアップロードされません。</p>
<h2>2. 利用条件</h2><ul><li>本サービスは「現状のまま」提供され、個人および商用利用が可能です</li><li>違法または不正な目的での使用は禁止します</li><li>当社は事前通知なくサービスの変更または中止を行う権利を留保します</li></ul>
<h2>3. 知的財産権</h2><p>処理された音声ファイルの所有権はお客様に帰属します。サイトのコード、デザイン、コンテンツはAudio format conversionが所有します。</p>
<h2>4. 免責事項</h2><p>本サービスはいかなる保証もなく「現状のまま」提供されます。自己責任でご利用ください。</p>
<h2>5. 責任の制限</h2><p>法律で許容される最大限の範囲において、Audio format conversionは本サービスの利用から生じる損害について責任を負いません。</p>
<h2>6. 第三者リンクと広告</h2><p>本サイトにはGoogle AdSense等の第三者広告や外部リンクが含まれる場合があります。</p>
<h2>7. 終了</h2><p>利用規約違反があった場合、アクセスを終了または停止する権利を留保します。</p>
<h2>8. 準拠法</h2><p>本規約は日本法に準拠します。</p>
<h2>9. 規約の変更</h2><p>当社は随時本規約を変更する権利を留保します。</p>
<h2>10. お問い合わせ</h2><p>ご質問はお問い合わせページからご連絡ください。</p>`,
      'ko': `<p>Audio format conversion("서비스")에 오신 것을 환영합니다. 당사 웹사이트를 사용함으로써 귀하는 본 약관에 동의하게 됩니다.</p>
<h2>1. 서비스 설명</h2><p>Audio format conversion는 무료 온라인 오디오 형식 변환 도구입니다. 모든 처리는 브라우저에서 로컬로 수행되며 파일은 서버에 업로드되지 않습니다.</p>
<h2>2. 이용 약관</h2><ul><li>본 서비스는 "있는 그대로" 제공되며 개인 및 상업적 용도로 사용 가능합니다</li><li>불법적이거나 무단 목적으로 서비스를 사용할 수 없습니다</li><li>당사는 언제든지 서비스를 수정하거나 중단할 권리를 보유합니다</li></ul>
<h2>3. 지식 재산권</h2><p>서비스를 통해 처리된 오디오 파일의 소유권은 귀하에게 있습니다. 웹사이트 코드, 디자인 및 콘텐츠는 Audio format conversion가 소유합니다.</p>
<h2>4. 면책 조항</h2><p>본 서비스는 어떠한 보증도 없이 "있는 그대로" 제공됩니다. 자신의 책임하에 사용하십시오.</p>
<h2>5. 책임 제한</h2><p>법이 허용하는 최대 범위 내에서 Audio format conversion는 서비스 사용으로 인한 손해에 대해 책임을 지지 않습니다.</p>
<h2>6. 제3자 링크 및 광고</h2><p>당사 웹사이트에는 Google AdSense와 같은 제3자 광고 및 외부 링크가 포함될 수 있습니다.</p>
<h2>7. 종료</h2><p>약관 위반 시 서비스 액세스를 종료하거나 중단할 권리를 보유합니다.</p>
<h2>8. 준거법</h2><p>본 약관은 대한민국 법률의 적용을 받습니다.</p>
<h2>9. 약관 변경</h2><p>당사는 언제든지 본 약관을 수정할 권리를 보유합니다.</p>
<h2>10. 문의</h2><p>약관에 대한 질문이 있으시면 문의 페이지를 통해 연락해 주십시오.</p>`
    },

    /* ===== CONTACT / ABOUT PAGE ===== */
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
    'contact.faq1.q': { 'zh-CN':'音频文件会上传到服务器吗？', 'zh-HK':'音頻檔案會上載到伺服器嗎？', 'en':'Are audio files uploaded to a server?', 'ja':'音声ファイルはサーバーにアップロードされますか？', 'ko':'오디오 파일이 서버에 업로드되나요?' },
    'contact.faq1.a': { 'zh-CN':'不会。所有转换均在您的浏览器本地完成。', 'zh-HK':'不會。所有轉換均在您的瀏覽器本機完成。', 'en':'No. All conversion happens locally in your browser.', 'ja':'いいえ。すべての変換はブラウザ内で行われます。', 'ko':'아니요. 모든 변환은 브라우저에서 로컬로 수행됩니다.' },
    'contact.faq2.q': { 'zh-CN':'有文件大小限制吗？', 'zh-HK':'有檔案大小限制嗎？', 'en':'Is there a file size limit?', 'ja':'ファイルサイズ制限はありますか？', 'ko':'파일 크기 제한이 있나요?' },
    'contact.faq2.a': { 'zh-CN':'没有硬性限制，但超大文件可能受浏览器内存限制。', 'zh-HK':'沒有硬性限制，但超大檔案可能受瀏覽器記憶體限制。', 'en':'No hard limit, but very large files may be constrained by browser memory.', 'ja':'厳格な制限はありませんが、非常に大きなファイルはブラウザのメモリ制約を受ける場合があります。', 'ko':'엄격한 제한은 없지만 매우 큰 파일은 브라우저 메모리 제약을 받을 수 있습니다.' },
    'contact.faq3.q': { 'zh-CN':'支持批量转换吗？', 'zh-HK':'支援批量轉換嗎？', 'en':'Is batch conversion supported?', 'ja':'一括変換はできますか？', 'ko':'일괄 변환이 지원되나요?' },
    'contact.faq3.a': { 'zh-CN':'支持，可同时转换多首音频。', 'zh-HK':'支援，可同時轉換多首音頻。', 'en':'Yes, you can convert multiple audio files at once.', 'ja':'はい、複数の音声ファイルを同時に変換できます。', 'ko':'네, 여러 오디오 파일을 한 번에 변환할 수 있습니다.' },
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
