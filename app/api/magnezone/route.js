import { NextResponse } from "next/server"; // Mengimpor NextResponse dari modul next/server

export async function GET(request) {
  //TEKNOHAUS
  // URL API yang berbeda
  const urls = [
    "https://seller-id.tokopedia.com/api/v1/seller/common/get?locale=id-ID&language=id&oec_seller_id=&aid=4068&app_name=i18n_ecom_shop&fp=verify_lwobsqpl_DyV2fweN_eG8O_4AUa_9Esq_xZLLmxsrTREX&device_platform=web&cookie_enabled=true&screen_width=1366&screen_height=768&browser_language=en-US&browser_platform=Win32&browser_name=Mozilla&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F125.0.0.0%20Safari%2F537.36&browser_online=true&timezone_name=Asia%2FJakarta&need_verify_account=true&default_region=ID&msToken=ji91fd3isuETXR2BCnpfFEnHGMWw-LNbybl8pekIleDELUgvVhey4QCOQ1urBiIskN2a1fT2LUcKLnqnm1PkgNmGaeb7Dty0yXZx664jF0p3ARdLcIGCRAsUAnB55ICFAUIctw==&X-Bogus=DFSzswVuIZiANJcMtA81OlSwXQ8K&_signature=_02B4Z6wo00001S9yHaAAAIDBpUjt3uBYQtUvchkAAC2O6e",
    "https://seller-id.tokopedia.com/api/v1/seller/experience-score/score-overview?locale=id-ID&language=id&oec_seller_id=7495096606395632368&aid=4068&app_name=i18n_ecom_shop&fp=verify_lwobsqpl_DyV2fweN_eG8O_4AUa_9Esq_xZLLmxsrTREX&device_platform=web&cookie_enabled=true&screen_width=1366&screen_height=768&browser_language=en-US&browser_platform=Win32&browser_name=Mozilla&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F125.0.0.0%20Safari%2F537.36&browser_online=true&timezone_name=Asia%2FJakarta&shop_id=7495096606395632368&shop_region=ID&ses_version=release&global_seller_type=Local&msToken=CrbRtNvKkv8-ue5TuVPc1sB45VpiAzLsLVokHjQzXrfR2KZlUppz51mgV-IC8nQo-6BurTsjzg4CTYRslL31SjqK5aByJ8vZ0eFdvPuB0eiW4mmL9WfgV5FRqP027isPBlQnyg==&X-Bogus=DFSzswjuu90ANVKatA81CMSwXQ/p&_signature=_02B4Z6wo000015LmAAQAAIDDGNzwergv17-S5hSAAIL2df"
  ];

  const cookie = "ttwid=1%7C5iFFwJqE2LVDsJgRwQlIMTMIpCc-cQcXMTpDVPw0SC4%7C1717031808%7C448590fd5dd8eed2d5d040a72a6ae841c4ea9ed60fdc071901a4625eef347f9d; passport_csrf_token=98d3b89e450ebcd86e6c163c614a6aa9; passport_csrf_token_default=98d3b89e450ebcd86e6c163c614a6aa9; d_ticket=7afff8de96a535a2b846f5077d6775a5a02e8; odin_tt=bd043097bf4b0e9c754b0c08d26676eef2a7ac2a73f2c0eab88b7fac23f5d6abda74e92f7d9e4dec453d94b0006cd78ecad75b0b81c9e63b25cd0c4397490948; sso_auth_status=d4f5f5f6b6f6ce1091b57ebe54670c1a%2C73ceb83e2613cb659661f82b24aac22e; sso_auth_status_ss=d4f5f5f6b6f6ce1091b57ebe54670c1a%2C73ceb83e2613cb659661f82b24aac22e; sso_uid_tt=f74d689725131e0a21abef065f017c5184d736e21720acd3f75cf6948c723bdc; sso_uid_tt_ss=f74d689725131e0a21abef065f017c5184d736e21720acd3f75cf6948c723bdc; toutiao_sso_user=6f9fec16683cfead3ff935bd36a0ccd2; toutiao_sso_user_ss=6f9fec16683cfead3ff935bd36a0ccd2; sid_ucp_sso_v1=1.0.0-KDVhODc3ODczMTE3YjI2NDQ1NjQ5MTU2YzlhNjczNzlmNWM0OGIyODAKIAiCiJiugd7hwGQQ_NTPsgYY5B8gDDCLjoakBjgBQOsHEAMaBm1hbGl2YSIgNmY5ZmVjMTY2ODNjZmVhZDNmZjkzNWJkMzZhMGNjZDI; ssid_ucp_sso_v1=1.0.0-KDVhODc3ODczMTE3YjI2NDQ1NjQ5MTU2YzlhNjczNzlmNWM0OGIyODAKIAiCiJiugd7hwGQQ_NTPsgYY5B8gDDCLjoakBjgBQOsHEAMaBm1hbGl2YSIgNmY5ZmVjMTY2ODNjZmVhZDNmZjkzNWJkMzZhMGNjZDI; sid_guard=eee138ce7f2811fa2bf175f9a4e9f655%7C1716775549%7C864000%7CThu%2C+06-Jun-2024+02%3A05%3A49+GMT; uid_tt=e04ce5d33799b2ede94d1f7baf2d6f33efd7cd4ad6a7d200fdc15af915f4913d; uid_tt_ss=e04ce5d33799b2ede94d1f7baf2d6f33efd7cd4ad6a7d200fdc15af915f4913d; sid_tt=eee138ce7f2811fa2bf175f9a4e9f655; sessionid=eee138ce7f2811fa2bf175f9a4e9f655; sessionid_ss=eee138ce7f2811fa2bf175f9a4e9f655; sid_ucp_v1=1.0.0-KDEzN2U3ZjZkZmYzNGNmMDc3MmNkN2JhOGZlZjlkZmU2YmUzMTM0OGMKGgiCiJiugd7hwGQQ_dTPsgYY5B8gDDgBQOsHEAMaAm15IiBlZWUxMzhjZTdmMjgxMWZhMmJmMTc1ZjlhNGU5ZjY1NQ; ssid_ucp_v1=1.0.0-KDEzN2U3ZjZkZmYzNGNmMDc3MmNkN2JhOGZlZjlkZmU2YmUzMTM0OGMKGgiCiJiugd7hwGQQ_dTPsgYY5B8gDDgBQOsHEAMaAm15IiBlZWUxMzhjZTdmMjgxMWZhMmJmMTc1ZjlhNGU5ZjY1NQ; msToken=UPzc7wbszvNX5tIYHVU_dYVtd1XYb_K3H2TwKHu5wGSI-l8VdDHelAnEzm-iKmPL4cvA6uRx44afhnlEv88FaMEj_j-gKEOhxQiJQ8i53lL9njIRp-UYEIFja6v_; _m4b_theme_=new; SELLER_TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjcyNDIyMTgwNDE1MDQwMzk5MzgsIk9lY1VpZCI6NzQ5NTA5NjYwNjM5NTYzMjM2OCwiT2VjU2hvcElkIjo3NDk1MDk2NjA2Mzk1NjMyMzY4LCJTaG9wUmVnaW9uIjoiIiwiR2xvYmFsU2VsbGVySWQiOjc0OTUwOTY2MDYzOTU2MzIzNjgsIlNlbGxlcklkIjo3NDk1MDk2NjA2Mzk1NjMyMzY4LCJleHAiOjE3MTcwNTA1NjAsIm5iZiI6MTcxNjk2MzE2MH0.mqf8DY-brORvxnB2cx1pAyi8oCK4cwVStFyqHM0SkKQ; SHOP_ID=7242232354479046917; i18next=id-ID; csrf_session_id=5b92a475b927f7a9b2ca18f7310d7d40; user_oec_info=0a537564a1372021b65787f0c146d867602d7584f0e693da9ab507eba4089291c1a572e5d195932e006f540f225079ef00d12ec8109b678815a4b9c537d1da96d8a7331bcb044e1bedfb1aab46b45287b3130c0a431a490a3c8c31aa39c1ac3950a6e0a45f66dc8989ee99721b27a85420cd32a20308d9d954674be28531913078017e74c1a75d1f33890841f9bc1658b55ec7e31410d2d2d20d1886d2f6f20d220104fec55d0f; lang_type=id; gf_part_1270887=3; gf_part_1296999=99; gf_part_1291063=47; gf_part_1324082=52; gf_part_1327625=0; gd_random_1333213=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTAzMTE2ODAsImlhdCI6MTcwOTcwNjg4MCwibWF0Y2giOmZhbHNlLCJuYmYiOjE3MDk3MDY4ODAsInBhdGgiOiIvIiwicGVyY2VudCI6MC45NDI0MDk5MDQzMzQzODI4fQ.YugK9zE9NVyZqsgfoGSr94Faps412klru5elTiaS2Fs; gd_random_1382318=eyJtYXRjaCI6dHJ1ZSwicGVyY2VudCI6MC4xNDUzMjkxOTU2MjE1MTc5MX0=.dwfUc11ScwXwOMnKDYIG3JR+gjIjFrpTjb6lOo2LRhM=; gf_part_1388781=80; gd_random_1395156=eyJtYXRjaCI6ZmFsc2UsInBlcmNlbnQiOjAuNzQ4Njg2NzcyNDAwNzUxN30=.fTa4CYzyj3NNSObAbP8zauMg/+elsJXtpBwwJQJ9bWY=; gf_part_1395884=58; gf_part_1396029=17; gf_part_1399508=0; gf_part_1403460=6; gf_part_1408438=96; gf_part_1431140=74; gf_part_1461647=84; gf_part_1461050=8; gf_part_1467576=65; gf_part_1478803=54; gf_part_1489855=65; gf_part_1494505=27; gf_part_1494167=97; gf_part_1526718=11; gf_part_1545619=96; _tt_enable_cookie=1; _ttp=2RRwPP7wGTeHOf05W9qkmgnTaJD; gf_part_1552379=78; msToken=ji91fd3isuETXR2BCnpfFEnHGMWw-LNbybl8pekIleDELUgvVhey4QCOQ1urBiIskN2a1fT2LUcKLnqnm1PkgNmGaeb7Dty0yXZx664jF0p3ARdLcIGCRAsUAnB55ICFAUIctw==; s_v_web_id=verify_lwobsqpl_DyV2fweN_eG8O_4AUa_9Esq_xZLLmxsrTREX; gf_part_1584391=25; gf_part_1584409=68; gf_part_1584413=42; gf_part_1584404=46; gf_part_1584399=44; gf_part_1584410=78; gf_part_1584416=69; gf_part_1590457=57"; // Ganti dengan cookie terenkripsi Anda

  try {
    // Melakukan permintaan ke semua URL secara paralel
    const responses = await Promise.all(urls.map(url =>
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookie,
        },
      })
    ));

    // // Parsing respons menjadi JSON
    // const rawDataList = await Promise.all(responses.map(response => response.json()));

    
    const rawDataList = await Promise.all(responses.map(response => response.json()));

    // // Mengembalikan respons JSON yang berisi semua data dari kedua API
    // const nextResponse = NextResponse.json(rawDataList);
    
    // di atas semua data dibawah data pilihan

    // Memproses data untuk mendapatkan shop_name dan label
    const logo = rawDataList[0]?.data?.seller?.logo;
    const shopName = rawDataList[0]?.data?.seller?.shop_name;
    const score = rawDataList[1]?.data?.overview?.score;
    const label = rawDataList[1]?.data?.overview?.label;
    const category = rawDataList[1]?.data?.overview?.category;
    const dailyScoreList = rawDataList[1]?.data?.overview?.dailyScoreList[7]?.score;
    const ratingProduk = rawDataList[1]?.data?.metric?.metricGroups[0]?.score;
    const metricScoreRatingProduk = rawDataList[1]?.data?.metric?.metricGroups[0]?.metricScores[0]?.score;
    const Keterlambatan = rawDataList[1]?.data?.metric?.metricGroups[1]?.score;
    const metricScoreKeterlambatan = rawDataList[1]?.data?.metric?.metricGroups[1]?.metricScores[1]?.score;
    const responsChat = rawDataList[1]?.data?.metric?.metricGroups[2]?.score;
    const metricScoreResponsChat = rawDataList[1]?.data?.metric?.metricGroups[2]?.metricScores[1]?.score;

    
    // Mengembalikan respons JSON dengan shop_name dan label
    const responseData = {
      score: score,
      category: category, 
      logo: logo, 
      shop_name: shopName, 
      label: label, 
      dailyScoreList: dailyScoreList, 
      ratingProduk: ratingProduk, 
      metricScoreRatingProduk: metricScoreRatingProduk,
      keterlambatan : Keterlambatan,
      metricScoreKeterlambatan : metricScoreKeterlambatan,
      responsChat : responsChat,
      metricScoreResponsChat : metricScoreResponsChat,
    };
    const nextResponse = NextResponse.json(responseData);

    nextResponse.headers.set("Access-Control-Allow-Origin", "*"); // Ganti '*' dengan asal yang sebenarnya jika diperlukan
    nextResponse.headers.set(
      "Access-Control-Allow-Methods",
      "GET,HEAD,PUT,PATCH,POST,DELETE"
    );
    nextResponse.headers.set("Access-Control-Allow-Headers", "Content-Type");
    nextResponse.headers.set("Access-Control-Allow-Credentials", "true");

    return nextResponse;
  } catch (error) {
    console.error("Error fetching data:", error);
    // Mengembalikan respons JSON dengan pesan kesalahan
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}

export async function OPTIONS() {
  const response = new NextResponse(null, { status: 204 });

  response.headers.set("Access-Control-Allow-Origin", "*"); // Ganti '*' dengan asal yang sebenarnya jika diperlukan
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET,HEAD,PUT,PATCH,POST,DELETE"
  );
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  response.headers.set("Access-Control-Allow-Credentials", "true");

  return response;
}