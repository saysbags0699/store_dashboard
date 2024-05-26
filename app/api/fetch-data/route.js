import { NextResponse } from "next/server";

export async function GET(request) {
  const url =
    "https://seller-id.tokopedia.com/api/v1/seller/experience-score/score-overview?locale=id-ID&language=id&oec_seller_id=7495096606395632368&aid=4068&app_name=i18n_ecom_shop&fp=verify_lw8z8kfb_gGK3pykB_ADbV_4RCu_Ay3S_mdjmozdjo6o4&device_platform=web&cookie_enabled=true&screen_width=1440&screen_height=900&browser_language=en-US&browser_platform=MacIntel&browser_name=Mozilla&browser_version=5.0%20%28Macintosh%3B%20Intel%20Mac%20OS%20X%2010_15_7%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F124.0.0.0%20Safari%2F537.36&browser_online=true&timezone_name=Asia%2FJakarta&shop_id=7495096606395632368&shop_region=ID&ses_version=release&global_seller_type=Local&msToken=q_T28fdK_4uejosAY_7RLrX5XtjijDmoeGZYT0T-4g4c19wO1pjFx9jiY9DOux5K0nHIoBPalJge7htrqMQztGSAFSryTQ-RekrZ5sgUnlv_V7pWL0He9EpQ3lc=&X-Bogus=DFSzswjumbTANyRJtA-8dELNKBPa&_signature=_02B4Z6wo000013wgrcAAAIDALt-N2PAl2cd8ILlAALll49";

  const cookie = "ttwid=1%7C5iFFwJqE2LVDsJgRwQlIMTMIpCc-cQcXMTpDVPw0SC4%7C1716652110%7Caed57169ab7199e3fab94cfb8698550427b023810d622e4f6faa57c0235f6c1d; passport_csrf_token=98d3b89e450ebcd86e6c163c614a6aa9; passport_csrf_token_default=98d3b89e450ebcd86e6c163c614a6aa9; d_ticket=7afff8de96a535a2b846f5077d6775a5a02e8; odin_tt=014d5875da76bf5963733219ec92073e8d8d96680512b40cd7bee6e0115b771a85a9fe0b7dce145d694aced70563b94c17d6a06b0a919bf10bcf246eafa8228d; sso_auth_status=d4f5f5f6b6f6ce1091b57ebe54670c1a%2C73ceb83e2613cb659661f82b24aac22e; sso_auth_status_ss=d4f5f5f6b6f6ce1091b57ebe54670c1a%2C73ceb83e2613cb659661f82b24aac22e; sso_uid_tt=94822ceb7fded543a7cbda5ec90ced8025a3ef19dba37b72b1a45499d9967e98; sso_uid_tt_ss=94822ceb7fded543a7cbda5ec90ced8025a3ef19dba37b72b1a45499d9967e98; toutiao_sso_user=6cea85944a241829036770767ff31b38; toutiao_sso_user_ss=6cea85944a241829036770767ff31b38; sid_ucp_sso_v1=1.0.0-KGQ4Njg0NDAyMDFjYzQ0MGMxNjYwM2RmMmRiNDg5MWM3ODRkMWFhYjUKIAiCiJiugd7hwGQQpYSXsgYY5B8gDDCLjoakBjgBQOsHEAMaBm1hbGl2YSIgNmNlYTg1OTQ0YTI0MTgyOTAzNjc3MDc2N2ZmMzFiMzg; ssid_ucp_sso_v1=1.0.0-KGQ4Njg0NDAyMDFjYzQ0MGMxNjYwM2RmMmRiNDg5MWM3ODRkMWFhYjUKIAiCiJiugd7hwGQQpYSXsgYY5B8gDDCLjoakBjgBQOsHEAMaBm1hbGl2YSIgNmNlYTg1OTQ0YTI0MTgyOTAzNjc3MDc2N2ZmMzFiMzg; sid_guard=94baa9a8fb8e0c88dcc5219489474d47%7C1715847717%7C863999%7CSun%2C+26-May-2024+08%3A21%3A56+GMT; uid_tt=154da9aa965c0e96fdfbfc1bb6cd5d5d314886e6e47d9aae428dad249af70cc4; uid_tt_ss=154da9aa965c0e96fdfbfc1bb6cd5d5d314886e6e47d9aae428dad249af70cc4; sid_tt=94baa9a8fb8e0c88dcc5219489474d47; sessionid=94baa9a8fb8e0c88dcc5219489474d47; sessionid_ss=94baa9a8fb8e0c88dcc5219489474d47; sid_ucp_v1=1.0.0-KDk3N2VmOTkyMzliZmJmYTU2MTNhYmQwOTYyY2M1M2E3ZDFkN2FiYTgKGgiCiJiugd7hwGQQpYSXsgYY5B8gDDgBQOsHEAMaA215MiIgOTRiYWE5YThmYjhlMGM4OGRjYzUyMTk0ODk0NzRkNDc; ssid_ucp_v1=1.0.0-KDk3N2VmOTkyMzliZmJmYTU2MTNhYmQwOTYyY2M1M2E3ZDFkN2FiYTgKGgiCiJiugd7hwGQQpYSXsgYY5B8gDDgBQOsHEAMaA215MiIgOTRiYWE5YThmYjhlMGM4OGRjYzUyMTk0ODk0NzRkNDc; msToken=bBKi9ZVBaCZCz1lHjvsIVdvKU8xMy_2KtIyCQSgF7ooZQEpN6_QZPF7DS6VXk-W5kk6QYXsXZmvhyfFZ2gDpB3P32C344Nz9cVMJKzn1rVSlsdhybiI8DA==; _m4b_theme_=new; i18next=id-ID; csrf_session_id=5b92a475b927f7a9b2ca18f7310d7d40; user_oec_info=0a53cb94255863be071b76d9a653a07a3d0c711a1adb91ece928a2d97cfbd137fad2a872d25d90607fa886a535b4df8bf6086e289ad611e254cda3dd9e41a711a707fcb223e78526eae4850855ee56aa9d5975108e1a490a3cd8aa495a1de2472ee71f3338d75e44861d3c7b1f6ed93f3dc673796ffc1adff947d3058bbdd7a509dce102928ed7f538d0ec7e64ad511ae8d3e7c92c10fca0d20d1886d2f6f20d220104e2b4023a; lang_type=id; gf_part_1270887=3; gf_part_1296999=99; gf_part_1291063=47; gf_part_1324082=52; gf_part_1327625=0; _tt_enable_cookie=1; _ttp=2RRwPP7wGTeHOf05W9qkmgnTaJD; gd_random_1333213=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTAzMTE2ODAsImlhdCI6MTcwOTcwNjg4MCwibWF0Y2giOmZhbHNlLCJuYmYiOjE3MDk3MDY4ODAsInBhdGgiOiIvIiwicGVyY2VudCI6MC45NDI0MDk5MDQzMzQzODI4fQ.YugK9zE9NVyZqsgfoGSr94Faps412klru5elTiaS2Fs; gd_random_1382318=eyJtYXRjaCI6dHJ1ZSwicGVyY2VudCI6MC4xNDUzMjkxOTU2MjE1MTc5MX0=.dwfUc11ScwXwOMnKDYIG3JR+gjIjFrpTjb6lOo2LRhM=; gf_part_1388781=80; gd_random_1395156=eyJtYXRjaCI6ZmFsc2UsInBlcmNlbnQiOjAuNzQ4Njg2NzcyNDAwNzUxN30=.fTa4CYzyj3NNSObAbP8zauMg/+elsJXtpBwwJQJ9bWY=; gf_part_1395884=58; gf_part_1396029=17; gf_part_1399508=0; gf_part_1403460=6; gf_part_1408438=96; gf_part_1431140=74; gf_part_1461647=84; gf_part_1461050=8; gf_part_1467576=65; gf_part_1478803=54; gf_part_1489855=65; gf_part_1494505=27; gf_part_1494167=97; s_v_web_id=verify_lw8z8kfb_gGK3pykB_ADbV_4RCu_Ay3S_mdjmozdjo6o4; gf_part_1526718=11; gf_part_1545619=96; gf_part_1552379=78; msToken=q_T28fdK_4uejosAY_7RLrX5XtjijDmoeGZYT0T-4g4c19wO1pjFx9jiY9DOux5K0nHIoBPalJge7htrqMQztGSAFSryTQ-RekrZ5sgUnlv_V7pWL0He9EpQ3lc="; // Replace with your actual cookie

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookie,
    },
  });

  const rawData = await response.json();

  // Ambil hanya label dari respons
  const { date,label, score, dailyScoreList } = rawData.data?.overview;

  const nextResponse = NextResponse.json({ date, label, score, dailyScoreList });

  nextResponse.headers.set("Access-Control-Allow-Origin", "*"); // Replace '*' with your actual origin if needed
  nextResponse.headers.set(
    "Access-Control-Allow-Methods",
    "GET,HEAD,PUT,PATCH,POST,DELETE"
  );
  nextResponse.headers.set("Access-Control-Allow-Headers", "Content-Type");
  nextResponse.headers.set("Access-Control-Allow-Credentials", "true");

  return nextResponse;
}

export async function OPTIONS() {
  const response = new NextResponse(null, { status: 204 });

  response.headers.set("Access-Control-Allow-Origin", "*"); // Replace '*' with your actual origin if needed
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET,HEAD,PUT,PATCH,POST,DELETE"
  );
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  response.headers.set("Access-Control-Allow-Credentials", "true");

  return response;
}