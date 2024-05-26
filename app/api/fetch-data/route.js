import { NextResponse } from "next/server";

export async function GET(request) {
  const url =
    "https://seller-id.tokopedia.com/api/v1/seller/experience-score/score-overview?locale=id-ID&language=id&oec_seller_id=7494998681491835726&aid=4068&app_name=i18n_ecom_shop&fp=verify_lwk028g4_GDR1HDCt_tmDS_41Ei_8Vni_caYJixBvl7L3&device_platform=web&cookie_enabled=true&screen_width=1440&screen_height=900&browser_language=en-US&browser_platform=MacIntel&browser_name=Mozilla&browser_version=5.0%20%28Macintosh%3B%20Intel%20Mac%20OS%20X%2010_15_7%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F124.0.0.0%20Safari%2F537.36&browser_online=true&timezone_name=Asia%2FJakarta&shop_id=7494998681491835726&shop_region=ID&ses_version=release&global_seller_type=Local&msToken=UH8tIgwvmpikW9k4sd1MU_fjCPFCzmEcz2LlvTTnxDpCfGbh6_EOpvWI5WpiSH4FUoTshGBGWy7nknA6NaQ3jAPVIYXYTzFQm8CaBOeZQdj801MTyBP4xJU4dvg=&X-Bogus=DFSzswjutZiANyRJtAls9ELNKBTp&_signature=_02B4Z6wo00001IGfvHAAAIDD02Cca8V8XZCBn6jAAEY593";

  const cookie = "_tt_enable_cookie=1; _ttp=2Od7Ar7M9V5XhASFGOYhpke7les; _abck=7E6C4EEBB8AADA0FE24F3BA0DC6BB814~0~YAAQKFshFw0/vHiMAQAAxRzTegvHjUucGzFtTAWpQA7gYqXFTFxROoRjgsYxV/4PRfKx/Snw0eTjHpj5jEak6QQrrvmKTnAXnM2sq7wN28eGz5+MoDMPTjmJ+fDjsjxOMjPIK8QB9m1TnZ/J3i+lKMYGTryuqTuFLCa1e3FOYi4ZE+Y0jU8whok1EsxpIie7zh2t8pdCBxY69VUVsfLOibbCqB2GFlp9yA5fVZnPaA5uFwmSlkmKsl2pll8VvHFL3Silyy2ZLoHyRqI2DOFvD0q3Pv4M3iYbaBWdoQD+HTrxV9vlUf7mwRH/0Mj2JWee05DvpsKJl7WyXNtYuNvg2XsJ287ZocKgrFNDUAdOcKAr/RluIMMjb1yjbnDBT1nBxMObNYG4mMVSnCCSFsFiW7IVlQXkNSrdDyaB~-1~-1~-1; DID=47f8ed6502a2bde99b69b3c610089aec71a4fcfab2164baf687f7a53cda255ea5e74a3369fe76ac44fbe950b285e6b40; DID_JS=NDdmOGVkNjUwMmEyYmRlOTliNjliM2M2MTAwODlhZWM3MWE0ZmNmYWIyMTY0YmFmNjg3ZjdhNTNjZGEyNTVlYTVlNzRhMzM2OWZlNzZhYzQ0ZmJlOTUwYjI4NWU2YjQw47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=; ISID=%7B%22www.tokopedia.com%22%3A%22d3d3LnRva29wZWRpYS5jb20%3D.88364619cbd3a4e38a80f8db061cf313.1702867706323.1702867706323.1702867715478.2%22%7D; _ga=GA1.1.1383273865.1702867706; _UUID_NONLOGIN_=1dbc41563e346fec6c04d83f32c4d710; _ga_70947XW48P=GS1.1.1702867706.1.1.1702867715.51.0.0; _UUID_CAS_=df7143bd-d93d-49c8-ba03-1edffb5a5af4; _CASE_=227b3d103d7b636b6b6c6f757b38103d7b636b6969606d606a6c6a757b353b357b637b0b2c343831792a3820303d7b757b3a103d7b63686e6d757b3536373e7b637b68696f776e6f6f68687b757b35382d7b637b746f7768616a686a6b7b757b291a367b637b68686c6b697b757b2e103d7b63686b6b68696a6e6c757b2a103d7b6368686c6a696c6e6a757b2a0d20293c7b637b6b317b757b2e312a7b637b0222057b2a3c2b2f303a3c062d20293c057b63057b6b31057b75057b2e382b3c31362c2a3c06303d057b63686b6b68696a6e6c247522057b2a3c2b2f303a3c062d20293c057b63057b686c34057b75057b2e382b3c31362c2a3c06303d057b636924047b757b350c293d7b637b6b696b6a74686b7468610d6960636d61636a6d72696e6369697b24; ttwid=1%7CMgi1-nQFs4WSkCOKNAIIUnOjy1JmxzdFtnTUGrhh33Q%7C1716719017%7C93242574942e520699dfabba3c1878137a009e66d22eb114797949c00ce811b9; passport_csrf_token=bc2ddbdcb05f6950bfa607092c9166b3; passport_csrf_token_default=bc2ddbdcb05f6950bfa607092c9166b3; d_ticket=62c9f42d9f3a9333ea265666f6d8a3e06f08b; odin_tt=9919bbb0788fde6c4c6ab24ee7c3ce9c4a134f4c508ac024a3c29174370c786ba4a47680b9867652246bd758e957b5c879b6fc7d33eb9f59e9bb129316568c21; sso_auth_status=3ff86df5e451d17a261b2c9d385eb4b7; sso_auth_status_ss=3ff86df5e451d17a261b2c9d385eb4b7; sso_uid_tt=fc7649990c62ee2cc1b267e3748d5f1e11fb17684a60962c38e771a0a22d38f6; sso_uid_tt_ss=fc7649990c62ee2cc1b267e3748d5f1e11fb17684a60962c38e771a0a22d38f6; toutiao_sso_user=0dfb5397e3c8fe292697833b3892b66f; toutiao_sso_user_ss=0dfb5397e3c8fe292697833b3892b66f; sid_ucp_sso_v1=1.0.0-KGU2Y2QxMzM2YWYxOTllYzAyNDU0NjY1NzBhZDQ2MGFmNDVmMjA1NTgKIAiCiLTo7OndlWQQpdm_sgYY5B8gDDDz7q2hBjgBQOsHEAMaBm1hbGl2YSIgMGRmYjUzOTdlM2M4ZmUyOTI2OTc4MzNiMzg5MmI2NmY; ssid_ucp_sso_v1=1.0.0-KGU2Y2QxMzM2YWYxOTllYzAyNDU0NjY1NzBhZDQ2MGFmNDVmMjA1NTgKIAiCiLTo7OndlWQQpdm_sgYY5B8gDDDz7q2hBjgBQOsHEAMaBm1hbGl2YSIgMGRmYjUzOTdlM2M4ZmUyOTI2OTc4MzNiMzg5MmI2NmY; sid_guard=a91df4ad857e56c32068468db6ff6196%7C1716513959%7C863998%7CMon%2C+03-Jun-2024+01%3A25%3A57+GMT; uid_tt=8d485743201d838bb6c9c5eab18dd2ae30b34c8d382519b7e750f5a05f5f7abc; uid_tt_ss=8d485743201d838bb6c9c5eab18dd2ae30b34c8d382519b7e750f5a05f5f7abc; sid_tt=a91df4ad857e56c32068468db6ff6196; sessionid=a91df4ad857e56c32068468db6ff6196; sessionid_ss=a91df4ad857e56c32068468db6ff6196; sid_ucp_v1=1.0.0-KDZjNWFlNTA2MjYyMWM5MzdlMThkMWMzODRjY2Y4YzBjYzBjY2MzNzIKGgiCiLTo7OndlWQQp9m_sgYY5B8gDDgBQOsHEAMaAm15IiBhOTFkZjRhZDg1N2U1NmMzMjA2ODQ2OGRiNmZmNjE5Ng; ssid_ucp_v1=1.0.0-KDZjNWFlNTA2MjYyMWM5MzdlMThkMWMzODRjY2Y4YzBjYzBjY2MzNzIKGgiCiLTo7OndlWQQp9m_sgYY5B8gDDgBQOsHEAMaAm15IiBhOTFkZjRhZDg1N2U1NmMzMjA2ODQ2OGRiNmZmNjE5Ng; passport_auth_status=e560c852e53dc509f60bd8bed66c9c63%2C; passport_auth_status_ss=e560c852e53dc509f60bd8bed66c9c63%2C; _m4b_theme_=new; msToken=7jeuNQn2Zm6EptQ-7-UFp0dXzeGvnrAc_ugVgZjPkDeVnQzVhnxrW9KrDxGcO98Fj3XzLbRlodDvDCWGeR8CbGhXVv9PhCHkEwbCic-9Tjd_rQJ36-xGwHS5_8Ox; gf_part_1237470=32; i18next=id-ID; s_v_web_id=verify_lwk028g4_GDR1HDCt_tmDS_41Ei_8Vni_caYJixBvl7L3; csrf_session_id=5b92a475b927f7a9b2ca18f7310d7d40; user_oec_info=0a536e87736c018e5c2381e7bf5e3e871c072fd0bf18fcb9cf788bcd08d0fb113fa546879574e0ab04d8d4196a954c434a6bcbe684dd2cc04e79fa69edfc486ba4b3f17c548bc5e3dd983dd7e81cf9ca70c6d55f651a490a3cb5c0c5e1c1e1a8726ab4b9112591e886db7bbf4664906ea9b409a77c557a9d6993144cff869d41e208fb87597c94abba8c42225fc4ee4bb527822ebd10b3a9d20d1886d2f6f20d2201043515c92d; gf_part_1243002=99; gf_part_1246674=35; gf_part_1250401=61; gf_part_1250506=50; lang_type=id; gf_part_1275029=50; gf_part_1275042=29; gf_part_1296999=31; gf_part_1291063=56; gf_part_1323807=42; gf_part_1324082=70; gf_part_1327625=57; gd_random_1333213=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTAzMTE2NDcsImlhdCI6MTcwOTcwNjg0NywibWF0Y2giOnRydWUsIm5iZiI6MTcwOTcwNjg0NywicGF0aCI6Ii8iLCJwZXJjZW50IjowLjIxNjYwNDIyNzU4NDQ4NzQ0fQ.fhPDpr22jJwXdJG3EPiJGKXHerTdS9yy1C27Gqvnqqk; gf_part_1372151=76; gd_random_1382318=eyJtYXRjaCI6dHJ1ZSwicGVyY2VudCI6MC40ODM2OTQyMzI0MjMxNjkxN30=.clYkNsTse+0q+VQ4KnrGF8HAxzYjPI8S/BRiJjaVn70=; gf_part_1388781=26; gd_random_1395156=eyJtYXRjaCI6dHJ1ZSwicGVyY2VudCI6MC4wNTYzNjM4OTk0MDUyMTU0OTV9.i3alzmwFBiZppw2XN5CXHmKmkczH2PX/TKdbyVkPc4A=; gf_part_1395884=15; gf_part_1396029=25; gf_part_1403460=31; gf_part_1408438=54; gf_part_1431140=51; gf_part_1461647=96; gf_part_1461050=11; gf_part_1462136=97; gf_part_1467576=8; gf_part_1478803=20; gf_part_1489855=80; gf_part_1499245=32; gf_part_1526718=22; msToken=UH8tIgwvmpikW9k4sd1MU_fjCPFCzmEcz2LlvTTnxDpCfGbh6_EOpvWI5WpiSH4FUoTshGBGWy7nknA6NaQ3jAPVIYXYTzFQm8CaBOeZQdj801MTyBP4xJU4dvg="; // Replace with your actual cookie

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