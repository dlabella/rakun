//Dependancies
  const tester = require(require("path").join(__dirname, "..", "tester"))

//Tests
  ;[
    {
      filename:"[Teke]_Made in Abyss_BDRip_AAC_1080MP4",
      name:"Made in Abyss",
      subber:"Teke",
      source:"bluray",
      codecs:"aac",
      resolution:"1080p",
      extension:"mp4",
    },
    {
      filename:"[BDMV] Made in Abyss / メイドインアビス [BD-BOX I+II][JP]",
      name:"Made in Abyss / メイドインアビス",
      source:"bluray",
      audio:"jp",
      subber:"BDMV"
    },
    {
      filename:"[Erai-raws] Made in Abyss - 01~13 [1080p AVC-YUV444P10][E-AC3][Multiple Subtitle]",
      subber:"Erai-raws",
      name:"Made in Abyss",
      episode:"1-13",
      resolution:"1080p",
      codecs:"ac3 avc",
      subtitles:"multi",
    },
    {
      filename:"[Anime Land] Made in Abyss 12 (BS11 720p Hi10P AAC) RAW [F5B00E92].mp4",
      subber:"Anime Land",
      name:"Made in Abyss",
      episode:"12",
      distributor:"bs11",
      resolution:"720p",
      codecs:"10bit aac",
      source:"raw",
      hash:"F5B00E92",
      extension:"mp4",
    },
    {
      filename:"Highschool Of The Dead Complete Series + OVA (High Quality)(Dual Audio) MKV [1080p] Blu-Ray Rip (V2)",
      name:"Highschool Of The Dead + OVA",
      extension:"mkv",
      resolution:"1080p",
      source:"bluray",
      meta:"complete high_quality v2",
      codecs:"dual_audio",
    },
    {
      filename:"[anime4life.] High School Of The Dead 1-12+OVA Complete (BD1080p AC3 10bit) [x265_HEVC] Dual Audio",
      subber:"anime4life",
      name:"High School Of The Dead",
      episode:"1-12",
      meta:"complete",
      source:"bluray",
      resolution:"1080p",
      codecs:"10bit ac3 dual_audio hevc x265",
    },
    {
      filename:"[FansubAnimesForever] Highschool of the Dead OVA [BDRip-1080p-8bit].mkv",
      subber:"FansubAnimesForever",
      name:"Highschool of the Dead OVA",
      source:"bluray",
      resolution:"1080p",
      codecs:"8bit",
      extension:"mkv",
    },
    {
      filename:"[Cleo] Kimi no Na wa | Your Name [Dual Audio 10bit BD720p][HEVC-x265]",
      subber:"Cleo",
      name:"Kimi no Na wa | Your Name",
      codecs:"10bit dual_audio hevc x265",
      resolution:"720p",
      source:"bluray",
    },
    {
      filename:"[pcela-anime] Kimi no Na wa [BRrip 1920x1080 x264 AAC] [SUB PL+EN]",
      subber:"pcela-anime",
      name:"Kimi no Na wa",
      source:"bluray",
      resolution:"1080p",
      codecs:"aac x264",
      subtitles:"en pl",
    },
    {
      filename:"[USP RAWS] your name. (Kimi no na wa.) [TV Asahi] [1080p] [FCE75C0E].mkv",
      subber:"USP RAWS",
      distributor:"tv_asahi",
      name:"your name. (Kimi no na wa.)",
      resolution:"1080p",
      hash:"FCE75C0E",
      extension:"mkv"
    },
    {
      filename:"[Erai-raws] Knights of the Zodiac - Saint Seiya - 01 ~ 06 [1080p][Multiple Subtitle]",
      subber:"Erai-raws",
      name:"Knights of the Zodiac - Saint Seiya",
      episode:"1-6",
      resolution:"1080p",
      subtitles:"multi",
    },
    {
      filename:"Saint Seiya 039 (original Japanese broadcast) [Beta HiFi 720x480 LPCM Tokyo TV] [D92CCED0]",
      name:"Saint Seiya",
      episode:"39",
      hash:"D92CCED0",
      resolution:"720p",
      distributor:"tokyo_tv",
      codecs:"lpcm"
    },
    {
      filename:"[BakedFish] Saint Seiya: Saintia Shou - 08 & 09 - ONA - Batch [720p][MP4][AAC]",
      subber:"BakedFish",
      name:"Saint Seiya: Saintia Shou",
      episode:"8-9",
      meta:"batch",
      resolution:"720p",
      codecs:"aac",
      extension:"mp4",
      source:"webdl",
    },
    {
      filename:"Saint.Seiya.(Remastered).E022.544p.x265.HEVC.(Eng,Spa,Fre)-BZ.mkv",
      name:"Saint Seiya (Remastered)",
      episode:"22",
      codecs:"hevc x265",
      audio:"en fr sp",
      subber:"BZ",
      extension:"mkv",
      resolution:"544p",
    }
  ].forEach(tester)

