//Dependancies
  const tester = require(require("path").join(__dirname, "..", "tester"))

//Tests
  ;[
    {
      filename:"[WZF] Toriko - Episodio 93~94[HD][X264-AAC][1280x720][Sub Esp]",
      name:"Toriko",
      subber:"WZF",
      episode:"93-94",
      codecs:"aac x264",
      resolution:"720p",
      subtitles:"es",
    },
    {
      filename:"[Ohys-Raws] Code Geass Fukkatsu no Lelouch (BD 1920x1080 x264 FLACx2).mkv",
      subber:"Ohys-Raws",
      name:"Code Geass Fukkatsu no Lelouch",
      source:"bluray",
      resolution:"1080p",
      codecs:"flac x264",
      extension:"mkv",
    },
    {
      filename:"[Anime Land] Code Geass - Hangyaku no Lelouch I - Koudou (BDRip 720p Hi444PP AC3) RAW [C8D15AEE].mkv",
      subber:"Anime Land",
      name:"Code Geass - Hangyaku no Lelouch I - Koudou",
      source:"bluray raw",
      resolution:"720p",
      codecs:"ac3 hi444pp",
      hash:"C8D15AEE",
      extension:"mkv",
    },
    {
      filename:"[Ohys-Raws] Overlord III - 13 END (AT-X 1280x720 x264 AAC).mp4",
      subber:"Ohys-Raws",
      name:"Overlord III",
      episode:"13",
      resolution:"720p",
      distributor:"at_x",
      codecs:"aac x264",
      extension:"mp4",
    },
    {
      filename:"[Anime Land] Overlord II - 09 (WEBRip 720p YUV444P10 EAC-3) RAW [91E212FA].mkv",
      subber:"Anime Land",
      name:"Overlord II",
      episode:"9",
      source:"raw webdl",
      resolution:"720p",
      hash:"91E212FA",
      extension:"mkv",
      codecs:"eac3 yuv444p10",
    },
    {
      filename:"[Anime Land] Overlord (Movie 01~02) + (Two Specials) [BDRip 1080p AVC-YUV444P10 FLAC]",
      subber:"Anime Land",
      name:"Overlord",
      movie:"1-2",
      meta:"has_specials",
      source:"bluray",
      resolution:"1080p",
      codecs:"avc flac yuv444p10",
    },
    {
      filename:"[Anime Land] Kakegurui×× (WEBRip 720p Hi444PP EAC3) RAW",
      subber:"Anime Land",
      name:"Kakegurui××",
      source:"raw webdl",
      codecs:"eac3 hi444pp",
      resolution:"720p",
    },
    {
      filename:"[Anime Land] Kakegurui 11 (BS11 720p Hi10P AAC) RAW [FF183D95].mp4",
      subber:"Anime Land",
      name:"Kakegurui",
      episode:"11",
      resolution:"720p",
      source:"raw",
      hash:"FF183D95",
      extension:"mp4",
      codecs:"10bit aac",
      distributor:"bs11",
    },
    {
      filename:"[모에-Raws] Kakegurui #05 (BS11 1280x720 x264 AAC).mp4",
      subber:"모에-Raws",
      name:"Kakegurui",
      distributor:"bs11",
      resolution:"720p",
      codecs:"aac x264",
      extension:"mp4",
      episode:"5",
    },
    {
      filename:"[SOFCJ-Raws] Bleach - Gotei 13 Omake (DVDRip 768x576 x264 VFR 10bit AC3).mkv",
      subber:"SOFCJ-Raws",
      name:"Bleach - Gotei 13 Omake",
      source:"dvd",
      codecs:"10bit ac3 x264",
      audio:"fr",
      extension:"mkv",
      resolution:"16_9",
    }
  ].forEach(tester)


