import { NextResponse } from "next/server"; // Mengimpor NextResponse dari modul next/server

export async function GET(request) {
  // URL API yang berbeda
  const urls = [
    "https://seller-id.tokopedia.com/api/v1/seller/common/get?locale=id-ID&language=id&oec_seller_id=&aid=4068&app_name=i18n_ecom_shop&fp=verify_lwnm7lbv_X7PIjpM9_bh80_4neg_80ju_wxQhSApuedIz&device_platform=web&cookie_enabled=true&screen_width=1440&screen_height=900&browser_language=en-US&browser_platform=MacIntel&browser_name=Mozilla&browser_version=5.0%20%28Macintosh%3B%20Intel%20Mac%20OS%20X%2010_15_7%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F124.0.0.0%20Safari%2F537.36&browser_online=true&timezone_name=Asia%2FJakarta&need_verify_account=true&default_region=ID&msToken=XA5UV1tVWgCzKmpoKw7sOlSpJ_oy5Vq7KtUb6BzRasuRYidBnLrFn2EJhXZCxQLawlLuthKd8qB1P3-0rSj0EYkIrYyQ3UCGAYc2dxIh21fkrju2Lm3G8_o0Nbk=&X-Bogus=DFSzswVOoBXANn-StAA4SELNKBYu&_signature=_02B4Z6wo000017O6c-wAAIDA4UVT95kk0v-zundAAIrG4e",
    "https://seller-id.tokopedia.com/api/v1/seller/experience-score/score-overview?locale=id-ID&language=id&oec_seller_id=7495096606395632368&aid=4068&app_name=i18n_ecom_shop&fp=verify_lwnm7lbv_X7PIjpM9_bh80_4neg_80ju_wxQhSApuedIz&device_platform=web&cookie_enabled=true&screen_width=1440&screen_height=900&browser_language=en-US&browser_platform=MacIntel&browser_name=Mozilla&browser_version=5.0%20%28Macintosh%3B%20Intel%20Mac%20OS%20X%2010_15_7%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F124.0.0.0%20Safari%2F537.36&browser_online=true&timezone_name=Asia%2FJakarta&shop_id=7495096606395632368&shop_region=ID&ses_version=release&global_seller_type=Local&msToken=DNTxqoWz91vZaRTN7-X1lSIcyDd1U4bieUsxCjUPq20_u-Tz-d5er_7sLD1V-gJqOT7ddrkanX1cYKsjEOesMjniHL2Qube63zGFukiGpVL6vLrJELm2OhKCijQ=&X-Bogus=DFSzswjLBeJANyyitAAZ-ELNKBPx&_signature=_02B4Z6wo00001P2SGbAAAIDDr205q-4ugtz9kg0AAFk978"
  ];

  const cookie = "_tt_enable_cookie=1; _ttp=2NGjKZa5alCXLiC2N04iQMnkLwy; passport_csrf_token=36f2b2e31dd69911709d9c76eee7716f; passport_csrf_token_default=36f2b2e31dd69911709d9c76eee7716f; ttwid=1%7CMgi1-nQFs4WSkCOKNAIIUnOjy1JmxzdFtnTUGrhh33Q%7C1716732573%7Cc296340779453de2d10314d0b8dcc9673d694666277e9e5eaa9202531bb03434; d_ticket=b1e027f0d8fc62702105ba7ee2dc6cd86f08b; odin_tt=29b59d28481647e28dd8ec8562ed401319d319149346c7f8b943e82b442af5d88a9278a0053f0345f7a991aaf0b80e7ad921fcb59a4e972b9b3b012330f78411; sso_auth_status=5f8e083888b37049472ca5c8005ca146%2C240ab3f4cd004d96a2031e974c6d35a9%2C3f73a214d53af557489b58772d8f9370; sso_auth_status_ss=5f8e083888b37049472ca5c8005ca146%2C240ab3f4cd004d96a2031e974c6d35a9%2C3f73a214d53af557489b58772d8f9370; sso_uid_tt=7fb5131c9854f0d8cb851f3ba7d84e7d7119388c8223f8bbadc7e27cfda9d436; sso_uid_tt_ss=7fb5131c9854f0d8cb851f3ba7d84e7d7119388c8223f8bbadc7e27cfda9d436; toutiao_sso_user=b65139f3175df260fe4f6aeaf708a856; toutiao_sso_user_ss=b65139f3175df260fe4f6aeaf708a856; sid_ucp_sso_v1=1.0.0-KDU4NTQzMTM4MWYyNWEzNmJlMDAyNWVmMTUyNTg5NjFjZGRmZjIxNWMKIAiCiJiugd7hwGQQgYXNsgYY5B8gDDCLjoakBjgBQOsHEAMaBm1hbGl2YSIgYjY1MTM5ZjMxNzVkZjI2MGZlNGY2YWVhZjcwOGE4NTY; ssid_ucp_sso_v1=1.0.0-KDU4NTQzMTM4MWYyNWEzNmJlMDAyNWVmMTUyNTg5NjFjZGRmZjIxNWMKIAiCiJiugd7hwGQQgYXNsgYY5B8gDDCLjoakBjgBQOsHEAMaBm1hbGl2YSIgYjY1MTM5ZjMxNzVkZjI2MGZlNGY2YWVhZjcwOGE4NTY; sid_guard=04891d4f0b96f331c05df730b3cacf1d%7C1716732547%7C863998%7CWed%2C+05-Jun-2024+14%3A09%3A05+GMT; uid_tt=efcf9a42e5e69248ffee86243bccb8a7df89833ff575496f6d89eef1a1f9e352; uid_tt_ss=efcf9a42e5e69248ffee86243bccb8a7df89833ff575496f6d89eef1a1f9e352; sid_tt=04891d4f0b96f331c05df730b3cacf1d; sessionid=04891d4f0b96f331c05df730b3cacf1d; sessionid_ss=04891d4f0b96f331c05df730b3cacf1d; sid_ucp_v1=1.0.0-KDQ5YTEzZWE1N2NkZmYwNzRlMTAxMzNhODllNmRiNmMyM2Q3ZDFjNWYKGgiCiJiugd7hwGQQg4XNsgYY5B8gDDgBQOsHEAMaA215MiIgMDQ4OTFkNGYwYjk2ZjMzMWMwNWRmNzMwYjNjYWNmMWQ; ssid_ucp_v1=1.0.0-KDQ5YTEzZWE1N2NkZmYwNzRlMTAxMzNhODllNmRiNmMyM2Q3ZDFjNWYKGgiCiJiugd7hwGQQg4XNsgYY5B8gDDgBQOsHEAMaA215MiIgMDQ4OTFkNGYwYjk2ZjMzMWMwNWRmNzMwYjNjYWNmMWQ; msToken=NQlW5cPM9iiX6k1XyhPj9OrMUzhOFc0iGgjOlSmOzkfr2YHNne2ZZovLmgnS9_Iv0ctmXGzKRr99_C6A5u2gZ3CYQBTP9Abtp5e1flVSjeSDaG30jSmdHWWpr38=; _m4b_theme_=new; gf_part_1237470=33; i18next=id-ID; csrf_session_id=5b92a475b927f7a9b2ca18f7310d7d40; user_oec_info=0a53f9f1bdfb2f8fd9397b998efc56f73854ed9d2decd0e01238152e945009d91501c2f66a0789fb20d58cc04580493748afc3d7f13b3326ca044c13dfb6607454497b878c512461ed9a762c8f2ba0b7d2fd8bb21d1a490a3cfe69cf56128161acb1fca1b0a6091ce839b93f54170aaedb485a0695aa8512f07a52bc7300428e2b142f4166299748335f75b290d42900de272fb53710a4acd20d1886d2f6f20d2201046a45bd42; gf_part_1243002=20; gf_part_1246982=50; gf_part_1246674=55; gf_part_1250401=15; gf_part_1250506=52; lang_type=id; gf_part_1275029=44; gf_part_1291063=11; gf_part_1296999=13; gf_part_1327625=8; gd_random_1333213=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTAzMDA0MDksImlhdCI6MTcwOTY5NTYwOSwibWF0Y2giOnRydWUsIm5iZiI6MTcwOTY5NTYwOSwicGF0aCI6Ii8iLCJwZXJjZW50IjowLjEzMzQ4NjQ4NDU1MTE4MDc2fQ.OGwnXtpsUU2MSKHh8nC7FDUfp4L_ibhsoRgZbEnNpB8; gf_part_1372788=5; gd_random_1395156=eyJtYXRjaCI6dHJ1ZSwicGVyY2VudCI6MC40MDU3NzQ0NzE0NTA5NzA5NX0=.cuVHsC3RgSqZKVmN0qAtHKbmWvNt422jz52I3Kb13jM=; gd_random_1402334=eyJwZXJjZW50IjowLjg4NzA5NjcxMzg4NTg2NzksIm1hdGNoIjpmYWxzZX0=.f1+yHJNRxx4pU5cJ7t2q/RDhbI2ByLper8ofZNZGx74=; gf_part_1408438=75; gf_part_1431140=52; gd_random_1461563=eyJtYXRjaCI6ZmFsc2UsInBlcmNlbnQiOjAuNjQ1NzE3NjQyMjUzNzcxNH0=.CQbgspm3oc5JOGgLlnvkk04ETvrDVcO0ikaK3mO0/pI=; gf_part_1461050=71; gf_part_1462136=57; gf_part_1478803=70; gf_part_1494505=6; gf_part_1494167=96; s_v_web_id=verify_lwnm7lbv_X7PIjpM9_bh80_4neg_80ju_wxQhSApuedIz; gf_part_1526718=21; msToken=XA5UV1tVWgCzKmpoKw7sOlSpJ_oy5Vq7KtUb6BzRasuRYidBnLrFn2EJhXZCxQLawlLuthKd8qB1P3-0rSj0EYkIrYyQ3UCGAYc2dxIh21fkrju2Lm3G8_o0Nbk="; // Ganti dengan cookie terenkripsi Anda

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
    const dailyScoreList = rawDataList[1]?.data?.overview?.dailyScoreList;
    
    // Mengembalikan respons JSON dengan shop_name dan label
    const responseData = { score: score,category: category, logo: logo, shop_name: shopName, label: label, dailyScoreList: dailyScoreList, };
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