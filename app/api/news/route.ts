import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";
import { startScheduledJob } from "@/app/utils/populateArticles";
import { json } from "stream/consumers";

const _data = {
  articles: [
    // {
    //   author: "みお",
    //   content:
    //     "PS5Marvel's Spider-Man 2\r\n2023\r\nPS51TB\r\nPS5M.2 SSDSSDSSD\r\nPS5WD_Black SN850 NVMe SSD\r\n4TB\r\nSIEPS5NVMe M.2 SSDPS5\r\n4TB4TBPS Plus\r\n7,300MB/s6,600MB/s\r\nPlayStation\r\nSSD\r\nUSBPS5\r\nSSD\r\nAmazonPS5\r\nSSD1\r\nPS… [+263 chars]",
    //   description:
    //     "もちろんPCでも使用可能。本記事ではPS5へのインストール手順も紹介します。",
    //   publishedAt: "2023-08-20T02:30:03Z",
    //   source: {
    //     id: null,
    //     name: "Gamespark.jp",
    //   },
    //   title:
    //     "最大4TBの大容量で大作もドンと来い！PS5用SSD「WD_Black SN850P」は速度もバッチリでハードコアゲーマーにぴったり【試用レポート】 - Game*Spark",
    //   url: "https://www.gamespark.jp/article/2023/08/20/133136.html",
    //   urlToImage: "https://www.gamespark.jp/imgs/ogp_f/707906.jpg",
    // },
    // {
    //   author: "Smart FLASH",
    //   content: null,
    //   description:
    //     "番組でフィリピン旅行に出かけたフワちゃんについてFLASHが報じた。モザイクで隠されていたものの、中指を立てて行列に抗議する場面が。SNSでは「傍若無人ぶりにひいた」などさまざまな意見が寄せられた",
    //   publishedAt: "2023-08-20T02:00:24Z",
    //   source: {
    //     id: null,
    //     name: "Livedoor.com",
    //   },
    //   title:
    //     "フワちゃんがフィリピン旅で中指突き立てブチギレ SNSはドン引き (2023年8月20日掲載) - ライブドアニュース - livedoor",
    //   url: "https://news.livedoor.com/topics/detail/24832293/",
    //   urlToImage:
    //     "https://image.news.livedoor.com/newsimage/stf/0/8/08e3e_1581_bec4e99dbc6e281b76621cbd390e719a.jpg",
    // },
    // {
    //   author: "ウェザーニュース",
    //   content:
    //     "{{topic.rank}}\r\n{{topic.pageTitle}}{{editTstr(topic.editTime)}}",
    //   description:
    //     "【週刊地震情報】19日(土)午後に福井県嶺北でマグニチュード4.3、最大震度3の地震がありました。嶺北地方は地震が多く、石川県との県境付近では1961年「北美濃地震」が発生しています。",
    //   publishedAt: "2023-08-20T01:07:00Z",
    //   source: {
    //     id: null,
    //     name: "Weathernews.jp",
    //   },
    //   title:
    //     "週刊地震情報 2023.8.20 福井県嶺北で震度3の地震 北美濃地震の震源域近く - ウェザーニュース",
    //   url: "https://weathernews.jp/s/topics/202308/200075/",
    //   urlToImage:
    //     "https://smtgvs.weathernews.jp/s/topics/img/202308/202308200075_top_img_A.jpg?1692493580",
    // },
    // {
    //   author: null,
    //   content: "183",
    //   description:
    //     "中国国営の新華社通信は、アメリカで行われた日米韓首脳会談について論評する記事を配信し、「故意に『中国脅威論』というデマを…",
    //   publishedAt: "2023-08-20T00:42:32Z",
    //   source: {
    //     id: null,
    //     name: "Nhk.or.jp",
    //   },
    //   title:
    //     "“日米韓首脳会談『中国脅威論』拡散させた”新華社通信が非難 - nhk.or.jp",
    //   url: "https://www3.nhk.or.jp/news/html/20230820/k10014168161000.html",
    //   urlToImage:
    //     "https://www3.nhk.or.jp/news/html/20230820/K10014168161_2308200935_0820093642_01_02.jpg",
    // },
    // {
    //   author: "北海道新聞デジタル",
    //   content: null,
    //   description:
    //     "札幌市円山動物園は２０日、アジアゾウのパール（雌、１９歳）が１９日に赤ちゃんを出産したと発表した。性別は不明。アジアゾウの出産は道内初。飼育員が柵越しに世話をするため安全を確保でき、ゾウにとってもス...",
    //   publishedAt: "2023-08-20T00:39:50Z",
    //   source: {
    //     id: null,
    //     name: "Hokkaido-np.co.jp",
    //   },
    //   title:
    //     "円山動物園のゾウ出産 柵越し飼育で全国初：北海道新聞デジタル - 北海道新聞",
    //   url: "https://www.hokkaido-np.co.jp/article/895366",
    //   urlToImage:
    //     "https://static.hokkaido-np.co.jp/image/article/size1/a/6/c/9/a6c9d3fc8f64b2491becc1b72c99730e_1.jpg?20230820121629",
    // },
    // {
    //   author: "読売新聞オンライン",
    //   content: "",
    //   description:
    //     "同居する父を刺殺したとして、広島県警安佐南署は２０日、広島市安佐南区大塚西、無職若尾育伸容疑者（５８）を殺人容疑で緊急逮捕した。調べに対し、容疑を認めているという。 　発表では、若尾容疑者は１９日午後４～７時頃、自宅で",
    //   publishedAt: "2023-08-20T00:38:00Z",
    //   source: {
    //     id: null,
    //     name: "Yomiuri.co.jp",
    //   },
    //   title:
    //     "同居の父親を刃物で刺し殺した疑い、５８歳息子逮捕…自ら１１０番 - 読売新聞オンライン",
    //   url: "https://www.yomiuri.co.jp/national/20230820-OYT1T50095/",
    //   urlToImage:
    //     "https://www.yomiuri.co.jp/media/2023/08/20230820-OYT1I50043-1.jpg?type=ogp",
    // },
    // {
    //   author: null,
    //   content: "",
    //   description:
    //     "サッカーのイングランド・プレミアリーグ、ブライトンの三笘薫選手は19日、アウェーでウルバーハンプトン戦に先発出場し、前半…",
    //   publishedAt: "2023-08-20T00:21:30Z",
    //   source: {
    //     id: null,
    //     name: "Nhk.or.jp",
    //   },
    //   title: "欧州サッカー 三笘薫 今シーズン初ゴール 勝利に貢献 - nhk.or.jp",
    //   url: "https://www3.nhk.or.jp/news/html/20230820/k10014168181000.html",
    //   urlToImage:
    //     "https://www3.nhk.or.jp/news/html/20230820/K10014168181_2308200823_0820082545_01_02.jpg",
    // },
    // {
    //   author: null,
    //   content: null,
    //   description:
    //     "お笑いトリオ「ジャングルポケット」の斉藤慎二が２０日、女優・本仮屋ユイカと共にパーソナリティーを務めるＴＢＳラジオ「地方創生プログラムＯＮＥ―Ｊ」（午前８時）の出演を欠席した。\n\n番組冒頭、本仮...",
    //   publishedAt: "2023-08-20T00:11:29Z",
    //   source: {
    //     id: null,
    //     name: "Kachimai.jp",
    //   },
    //   title:
    //     "「ジャングルポケット」の斉藤慎二、不倫報道でラジオを欠席（十勝毎日新聞） - kachimai.jp",
    //   url: "https://kachimai.jp/article/index.php?no=20238209428",
    //   urlToImage: "https://img.kachimai.jp/image/20230820/20238209428.jpg",
    // },
    // {
    //   author: "デイリースポーツ",
    //   content: null,
    //   description:
    //     "ＸＪＡＰＡＮのＹＯＳＨＩＫＩが２０日、日本テレビ「シューイチ」のインタビューコーナーに出演。驚がくの取得マイルを明かした。ミュージシャンのほか、着物プロデューサー、米ナパ・ヴァレーにはブドウ畑を",
    //   publishedAt: "2023-08-20T00:00:00Z",
    //   source: {
    //     id: null,
    //     name: "Livedoor.com",
    //   },
    //   title:
    //     "YOSHIKIが取得したマイルに中山秀征が驚愕 火星を何往復かできる？ (2023年8月20日掲載) - livedoor",
    //   url: "https://news.livedoor.com/topics/detail/24831957/",
    //   urlToImage:
    //     "https://image.news.livedoor.com/newsimage/stf/5/7/57e95_50_4e82fa97_5f3a6fb6.jpg",
    // },
    // {
    //   author: "読売新聞オンライン",
    //   content: null,
    //   description:
    //     "１９日午後７時３５分頃、愛知県東郷町諸輪の自宅敷地内で１歳の男児が、父親（３０）の運転する乗用車にはねられた。男児は、頭を強く打ち、搬送先の病院で間もなく死亡した。愛知署によると、父親は敷地内に知人の車を入れるため、自",
    //   publishedAt: "2023-08-19T23:24:00Z",
    //   source: {
    //     id: null,
    //     name: "Yomiuri.co.jp",
    //   },
    //   title:
    //     "１歳男児が自宅敷地で父親の車にはねられ死亡…愛知・東郷、父親「家の中にいると思った」 - 読売新聞オンライン",
    //   url: "https://www.yomiuri.co.jp/national/20230820-OYT1T50086/",
    //   urlToImage:
    //     "https://www.yomiuri.co.jp/media/2023/08/20230820-OYT1I50035-1.jpg?type=ogp",
    // },
    // {
    //   author: "fukukichi23",
    //   content: null,
    //   description:
    //     "外部の音が聞き取りやすく、耳の中が蒸れにくい「耳をふさがないイヤホン」。つけっぱなしでも会話がしやすいので、オフィス、自宅、屋外など幅広いシーンで活躍してくれるでしょう。　ではさっそく上位の結果を見ていきましょう。[author_profile]※掲載商品はAmazon・楽天市場・Yahoo…",
    //   publishedAt: "2023-08-19T23:20:00Z",
    //   source: {
    //     id: null,
    //     name: "Itmedia.co.jp",
    //   },
    //   title:
    //     "「耳をふさがないイヤホン」人気ランキング！ 「Shokz（ショックス） OpenFit」、1位は？【2023年8月版】 | 家電・PC・カメラ ねとらぼ調査隊 - ねとらぼ",
    //   url: "https://nlab.itmedia.co.jp/research/articles/1707269/",
    //   urlToImage:
    //     "https://research.image.itmedia.co.jp/wp-content/uploads/2023/08/1690818042_51bPaWoOzgL._SL750_AA800_.jpg",
    // },
    // {
    //   author: "読売新聞オンライン",
    //   content:
    //     "×\r\n446257002023/08/20 08:01:002023/08/20 08:01:002023/08/20 08:01:00https://www.yomiuri.co.jp/media/2023/08/20230820-OYT1I50031-T.jpg?type=thumbnail",
    //   description:
    //     "米大リーグ・エンゼルスの大谷翔平は１９日（日本時間２０日）、本拠地で行われたダブルヘッダー第１試合となるレイズ戦に２番指名打者（ＤＨ）でフル出場し、３打数無安打１四球だった。前日の４３号満塁弾に続く３試合連続のホームラ",
    //   publishedAt: "2023-08-19T23:01:00Z",
    //   source: {
    //     id: null,
    //     name: "Yomiuri.co.jp",
    //   },
    //   title:
    //     "大谷翔平３の０、３戦連発ならず…ハリケーン接近で「ダブルヘッダー」の第１試合 - 読売新聞オンライン",
    //   url: "https://www.yomiuri.co.jp/sports/mlb/20230820-OYT1T50084/",
    //   urlToImage:
    //     "https://www.yomiuri.co.jp/media/2023/08/20230820-OYT1I50031-1.jpg?type=ogp",
    // },
    // {
    //   author: null,
    //   content:
    //     "@XiTwitterj_EbJ[mCEO818inA[i[C[E}XNCTOuubN@\\\\vXg10uubN[gD\\zBtB[hobNvXgB\r\n@}XNbNXg^_vC|XgeBbJ[mXgjJECXL[ubN@\\Bbg[QbgjubNCXSv[v|Xggt|XgicC[gjeB\r\n@}XNAB[hobNvCBubN_M@\\ABwkubNxbNJEgNvubN^h|XgvvCBAubNXpAJ… [+108 chars]",
    //   description:
    //     "X・ｽi・ｽ・ｽTwitter・ｽj・ｽﾌ・ｿｽ・ｽ・ｽ・ｽ_・ｽE・ｽ・ｽ・ｽb・ｽJ・ｽ・ｽ・ｽ[・ｽmCEO・ｽﾍ、・ｽC・ｽ[・ｽ・ｽ・ｽ・ｽ・ｽE・ｽ}・ｽX・ｽNCTO・ｽ・ｽ・ｽu・ｽu・ｽ・ｽ・ｽb・ｽ@・ｽ\\・ｽ・ｽ・ｽ尞懶ｿｽ・ｽ・ｽ・ｽ\\・ｽ・ｽv・ｽﾆポ・ｽX・ｽg・ｽ・ｽ・ｽ・ｽ・ｽ・ｽ10・ｽ・ｽ・ｽﾔ鯉ｿｽA・ｽu・ｽu・ｽ・ｽ・ｽb・ｽN・ｽﾆミ・ｽ・ｽ・ｽ[・ｽg・ｽﾌ鯉ｿｽ・ｽ・ｽ・ｽ・ｽﾇゑｿｽ・ｽ・ｽ・ｽﾌゑｿｽ・ｽ\\・ｽz・ｽ・ｽ・ｽv・ｽﾆフ・ｽH・ｽ・ｽ・ｽ[・ｽ・ｽ…",
    //   publishedAt: "2023-08-19T22:37:00Z",
    //   source: {
    //     id: null,
    //     name: "Itmedia.co.jp",
    //   },
    //   title:
    //     "X（旧Twitter）のCEO、「現行のブロックとミュートより良いものを構築中」とポスト - ITmedia NEWS",
    //   url: "https://www.itmedia.co.jp/news/articles/2308/20/news038.html",
    //   urlToImage:
    //     "https://image.itmedia.co.jp/news/articles/2308/20/cover_news038.jpg",
    // },
    // {
    //   author: "報知新聞社",
    //   content: null,
    //   description:
    //     "ＴＢＳの野村彩也子アナウンサーが１９日までに自身のＳＮＳを更新。すっぴんオフショットを公開した。",
    //   publishedAt: "2023-08-19T22:25:00Z",
    //   source: {
    //     id: null,
    //     name: "Hochi.news",
    //   },
    //   title:
    //     "ＴＢＳ・野村彩也子アナ、”寝起きすっぴん”ショットにファン反響！「可愛すぎる」「爽やか～！」などの声 - スポーツ報知",
    //   url: "https://hochi.news/articles/20230819-OHT1T51113.html",
    //   urlToImage:
    //     "https://hochi.news/images/2023/08/19/20230819-OHT1I51187-L.jpg",
    // },
    // {
    //   author: "読売新聞オンライン",
    //   content: "",
    //   description:
    //     "【北京＝吉永亜希子、台北＝園田将嗣】中国軍で台湾を担当する「東部戦区」は１９日、台湾周辺でパトロールや軍事演習を同日行ったと発表した。中国は台湾の 頼清徳 （ ライチンドォー ） 副総統が南米パラグアイ訪問に際して米国",
    //   publishedAt: "2023-08-19T21:34:21Z",
    //   source: {
    //     id: null,
    //     name: "Yomiuri.co.jp",
    //   },
    //   title:
    //     "中国が台湾周辺で軍事演習「独立勢力に対する深刻な警告」…副総統の「米国立ち寄り」に反発 - 読売新聞オンライン",
    //   url: "https://www.yomiuri.co.jp/world/20230820-OYT1T50009/",
    //   urlToImage:
    //     "https://www.yomiuri.co.jp/media/2023/08/20230820-OYT1I50026-1.jpg?type=ogp",
    // },
    // {
    //   author: null,
    //   content: "20\r\n20\r\n1136.135.835.735.335\r\n20383736\r\n20\r\n7",
    //   description:
    //     "20日も西日本や東日本を中心に気温が上がり、午前中から各地で猛烈な暑さになっています。熱中症の危険度を示す「暑さ指数」な…",
    //   publishedAt: "2023-08-19T21:29:57Z",
    //   source: {
    //     id: null,
    //     name: "Nhk.or.jp",
    //   },
    //   title:
    //     "大阪 京都など最高気温38度予想 危険な暑さ 熱中症厳重警戒を - nhk.or.jp",
    //   url: "https://www3.nhk.or.jp/news/html/20230820/k10014168011000.html",
    //   urlToImage:
    //     "https://www3.nhk.or.jp/news/html/20230820/K10014168011_2308200706_0820070620_01_02.jpg",
    // },
    // {
    //   author: null,
    //   content: "197129",
    //   description:
    //     "ウクライナ北部で19日、ロシア軍のミサイル攻撃があり、ウクライナ当局によりますと子どもを含む7人が死亡、129人がけがを…",
    //   publishedAt: "2023-08-19T21:18:25Z",
    //   source: {
    //     id: null,
    //     name: "Nhk.or.jp",
    //   },
    //   title:
    //     "ウクライナ北部にミサイル攻撃 子ども含む7人死亡 129人がけが - nhk.or.jp",
    //   url: "https://www3.nhk.or.jp/news/html/20230820/k10014168021000.html",
    //   urlToImage:
    //     "https://www3.nhk.or.jp/news/html/20230820/K10014168021_2308200616_0820061759_01_02.jpg",
    // },
    // {
    //   author: "東京新聞 TOKYO Web",
    //   content: null,
    //   description:
    //     "東京電力福島第一原発の処理水が海洋放出されるのを前に、日本の水産物の輸出が滞り始めています。処理水に含まれる放射性物質を懸念する国や地...",
    //   publishedAt: "2023-08-19T21:00:00Z",
    //   source: {
    //     id: null,
    //     name: "Tokyo-np.co.jp",
    //   },
    //   title:
    //     "日本の水産物輸出が滞り始めた…政府の風評被害対策は？各国の輸入規制の状況は？ 処理水海洋放出＜Q&A＞：東京新聞 TOKYO Web - 東京新聞",
    //   url: "https://www.tokyo-np.co.jp/article/271331",
    //   urlToImage:
    //     "https://static.tokyo-np.co.jp/image/article/size1/8/8/6/e/886e3e7654ce3ed8e237fba03ce7eb24_1.jpg",
    // },
    // {
    //   author: "日本経済新聞社",
    //   content: null,
    //   description:
    //     "岸田文雄首相は20日、東京電力福島第1原子力発電所を視察した。原発処理水の海洋放出に向けて現場の体制を確認し、放出時期を判断する。東電幹部とも意見を交わす。首相は18日（日本時間19日午前）、訪問先の米ワシントンで記者団に「国として判断すべき最終的な段階に至っている」と言及した。週内にも関係閣僚会議を開く調整をしている。放射性物質を国の規制基準以下まで取り除く多核種除去設備（ALPS）などの",
    //   publishedAt: "2023-08-19T20:30:00Z",
    //   source: {
    //     id: null,
    //     name: "Nikkei.com",
    //   },
    //   title:
    //     "処理水放出を判断へ 岸田文雄首相、20日福島第1原発視察 - 日本経済新聞",
    //   url: "https://www.nikkei.com/article/DGXZQOUA190A60Z10C23A8000000/",
    //   urlToImage:
    //     "https://article-image-ix.nikkei.com/https%3A%2F%2Fimgix-proxy.n8s.jp%2FDSXZQO3736853019082023000000-2.jpg?ixlib=js-3.8.0&auto=format%2Ccompress&fit=crop&bg=FFFFFF&w=1200&h=630&fp-x=0.56&fp-y=0.18&fp-z=1&crop=focalpoint&s=b272586c071b24a59ad7357ab596a688",
    // },
    {
      author: "ウェザーニュース",
      content:
        "{{topic.rank}}\r\n{{topic.pageTitle}}{{editTstr(topic.editTime)}}",
      description:
        "この先1週間の天気のポイントは「週前半にかけて残暑とゲリラ雷雨に注意」「週中頃に熱帯低気圧が接近か」「週後半は前線が通過か 雨の可能性」です。ウェザーニュースの最新の天気予報を随時確認してください。",
      publishedAt: "2023-08-19T20:27:00Z",
      source: {
        id: null,
        name: "Weathernews.jp",
      },
      title:
        "週間天気予報 週中頃に熱帯低気圧が接近 猛暑は一服 - ウェザーニュース",
      url: "https://weathernews.jp/s/topics/202308/200015/",
      urlToImage:
        "https://smtgvs.weathernews.jp/s/topics/img/202308/202308200015_top_img_A.png?1692476003",
    },
    {
      name: "\uFF32\u30DE\u30C9\u30EA\u30FC\u30C9\u3001\u4E45\u4FDD\u5EFA\u82F1\u3092\u300C\u9593\u9055\u3044\u306A\u304F\u8CB7\u3044\u623B\u3059\u300D\u300C\u4ECA\u5C45\u5834\u6240\u306F\u3042\u308B\u306E\u304B\uFF1F\u300D\u5FA9\u5E30\u306E\u53EF\u80FD\u6027\u306B\u82F1\u7D19\u304C\u8A00\u53CA",
      url: "https://www.msn.com/ja-jp/sports/soccer/%EF%BD%92%E3%83%9E%E3%83%89%E3%83%AA%E3%83%BC%E3%83%89-%E4%B9%85%E4%BF%9D%E5%BB%BA%E8%8B%B1%E3%82%92-%E9%96%93%E9%81%95%E3%81%84%E3%81%AA%E3%81%8F%E8%B2%B7%E3%81%84%E6%88%BB%E3%81%99-%E4%BB%8A%E5%B1%85%E5%A0%B4%E6%89%80%E3%81%AF%E3%81%82%E3%82%8B%E3%81%AE%E3%81%8B-%E5%BE%A9%E5%B8%B0%E3%81%AE%E5%8F%AF%E8%83%BD%E6%80%A7%E3%81%AB%E8%8B%B1%E7%B4%99%E3%81%8C%E8%A8%80%E5%8F%8A/ar-AA1gYgjj",
      image: {
        thumbnail: {
          contentUrl:
            "https://www.bing.com/th?id=OVFT.ionyJHJZjjZeu2bEE6hlkS&pid=News",
          width: 1133,
          height: 1200,
        },
        isLicensed: true,
      },
      description:
        "\u30B9\u30DA\u30A4\u30F3\uFF11\u90E8\uFF32\u30BD\u30B7\u30A8\u30C0\u30FC\u30C9\u306E\u65E5\u672C\u4EE3\u8868\uFF2D\uFF26\u4E45\u4FDD\u5EFA\u82F1\u304C\u3001\u540C\u56FD\uFF11\u90E8\uFF32\u30DE\u30C9\u30EA\u30FC\u30C9\u306B\u5FA9\u5E30\u3059\u308B\u53EF\u80FD\u6027\u306A\u3069\u306B\u3064\u3044\u3066\uFF11\uFF19\u65E5\u3001\u82F1\u7D19\u300C\u30A4\u30F3\u30C7\u30A3\u30DA\u30F3\u30C7\u30F3\u30C8\u300D\u304C\u5831\u3058\u305F\u3002 \uFF11\uFF17\u65E5\u306E\u53E4\u5DE3\u30FB\uFF32\u30DE\u30C9\u30EA\u30FC\u30C9\u6226\uFF08\uFF11\u25CF\uFF12\uFF09\u3067\u5148\u5236\u70B9\u3092\u30A2\u30B7\u30B9\u30C8\u3059\u308B\u306A\u3069\u5B58\u5728\u611F\u3092\u793A\u3057\u305F\u4E45\u4FDD\u3002\u540C\u7D19\u306F\u300C\u4E45\u4FDD\u5EFA\u82F1\u306E\u6D3B\u8E8D\u306F\u307E\u3076\u3057\u3044\u304C\u3001\u4ECA\u306E\uFF32\u30DE\u30C9\u30EA\u30FC\u30C9\u306B\u5C45\u5834\u6240\u306F\u3042\u308B\u306E\u304B\uFF1F\u300D\u3068\u984C\u3057\u3066\u53D6\u308A\u4E0A\u3052\u3001\u300C\uFF32\u30DE\u30C9\u30EA\u30FC\u30C9\u306B\u5728\u7C4D\u3059\u308B\u4E0A\u3067\u5341\u5206\u306A\u30AF\u30AA\u30EA\u30C6\u30A3\u30FC\u3092\u6301\u3063\u3066\u304A\u308A\u3001\u305D\u308C\u304C\u5F97\u70B9\u529B\u3001\u3042\u308B",
      provider: [
        {
          _type: "Organization",
          name: "\u30B9\u30DD\u30FC\u30C4\u5831\u77E5",
          image: {
            thumbnail: {
              contentUrl:
                "https://www.bing.com/th?id=ODF.PKhjdC0esne5XiNBAA86Fg&pid=news",
            },
          },
        },
      ],
      datePublished: "2023-09-20T02:25:00.0000000Z",
    },
  ],
  status: "ok",
  totalResults: 29,
};

const fakeData2 = {
  _type: "News",
  webSearchUrl: "https://www.bing.com/news/search?q=sports+news&form=TNSA02",
  value: [
    {
      name: "\uFF32\u30DE\u30C9\u30EA\u30FC\u30C9\u3001\u4E45\u4FDD\u5EFA\u82F1\u3092\u300C\u9593\u9055\u3044\u306A\u304F\u8CB7\u3044\u623B\u3059\u300D\u300C\u4ECA\u5C45\u5834\u6240\u306F\u3042\u308B\u306E\u304B\uFF1F\u300D\u5FA9\u5E30\u306E\u53EF\u80FD\u6027\u306B\u82F1\u7D19\u304C\u8A00\u53CA",
      url: "https://www.msn.com/ja-jp/sports/soccer/%EF%BD%92%E3%83%9E%E3%83%89%E3%83%AA%E3%83%BC%E3%83%89-%E4%B9%85%E4%BF%9D%E5%BB%BA%E8%8B%B1%E3%82%92-%E9%96%93%E9%81%95%E3%81%84%E3%81%AA%E3%81%8F%E8%B2%B7%E3%81%84%E6%88%BB%E3%81%99-%E4%BB%8A%E5%B1%85%E5%A0%B4%E6%89%80%E3%81%AF%E3%81%82%E3%82%8B%E3%81%AE%E3%81%8B-%E5%BE%A9%E5%B8%B0%E3%81%AE%E5%8F%AF%E8%83%BD%E6%80%A7%E3%81%AB%E8%8B%B1%E7%B4%99%E3%81%8C%E8%A8%80%E5%8F%8A/ar-AA1gYgjj",
      image: {
        thumbnail: {
          contentUrl:
            "https://www.bing.com/th?id=OVFT.ionyJHJZjjZeu2bEE6hlkS&pid=News",
          width: 1133,
          height: 1200,
        },
        isLicensed: true,
      },
      description:
        "\u30B9\u30DA\u30A4\u30F3\uFF11\u90E8\uFF32\u30BD\u30B7\u30A8\u30C0\u30FC\u30C9\u306E\u65E5\u672C\u4EE3\u8868\uFF2D\uFF26\u4E45\u4FDD\u5EFA\u82F1\u304C\u3001\u540C\u56FD\uFF11\u90E8\uFF32\u30DE\u30C9\u30EA\u30FC\u30C9\u306B\u5FA9\u5E30\u3059\u308B\u53EF\u80FD\u6027\u306A\u3069\u306B\u3064\u3044\u3066\uFF11\uFF19\u65E5\u3001\u82F1\u7D19\u300C\u30A4\u30F3\u30C7\u30A3\u30DA\u30F3\u30C7\u30F3\u30C8\u300D\u304C\u5831\u3058\u305F\u3002 \uFF11\uFF17\u65E5\u306E\u53E4\u5DE3\u30FB\uFF32\u30DE\u30C9\u30EA\u30FC\u30C9\u6226\uFF08\uFF11\u25CF\uFF12\uFF09\u3067\u5148\u5236\u70B9\u3092\u30A2\u30B7\u30B9\u30C8\u3059\u308B\u306A\u3069\u5B58\u5728\u611F\u3092\u793A\u3057\u305F\u4E45\u4FDD\u3002\u540C\u7D19\u306F\u300C\u4E45\u4FDD\u5EFA\u82F1\u306E\u6D3B\u8E8D\u306F\u307E\u3076\u3057\u3044\u304C\u3001\u4ECA\u306E\uFF32\u30DE\u30C9\u30EA\u30FC\u30C9\u306B\u5C45\u5834\u6240\u306F\u3042\u308B\u306E\u304B\uFF1F\u300D\u3068\u984C\u3057\u3066\u53D6\u308A\u4E0A\u3052\u3001\u300C\uFF32\u30DE\u30C9\u30EA\u30FC\u30C9\u306B\u5728\u7C4D\u3059\u308B\u4E0A\u3067\u5341\u5206\u306A\u30AF\u30AA\u30EA\u30C6\u30A3\u30FC\u3092\u6301\u3063\u3066\u304A\u308A\u3001\u305D\u308C\u304C\u5F97\u70B9\u529B\u3001\u3042\u308B",
      provider: [
        {
          _type: "Organization",
          name: "\u30B9\u30DD\u30FC\u30C4\u5831\u77E5",
          image: {
            thumbnail: {
              contentUrl:
                "https://www.bing.com/th?id=ODF.PKhjdC0esne5XiNBAA86Fg&pid=news",
            },
          },
        },
      ],
      datePublished: "2023-09-20T02:25:00.0000000Z",
    },
  ],
};

export async function GET() {
  //   // const key = process.env.NEWSAPIKEY; //
  //   // const data = await fetch(
  //   //   `https://newsapi.org/v2/top-headlines?country=jp&apiKey=${key}`,
  //   // );
  //   // const newsArticles = data.articles;

  const key = process.env.BINGNEWSKEY;
  const japanese = "ja-jp";
  const unitedStates = "en-us";
  const url = `https://api.bing.microsoft.com/v7.0/news?mkt=${japanese}&category=sports`;
  const data = await fetch(url, {
    headers: {
      "Ocp-Apim-Subscription-Key": "fef3197abc154e18a28c68c024073023",
    },
  }).then((res) => res.json());
  return NextResponse.json(data);
}
