import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';
    const [response1, response2] = await Promise.all([
      fetch(`${baseUrl}/api/route1`),
      fetch(`${baseUrl}/api/route2`)
    ]);

    if (!response1.ok) {
      throw new Error(`Error fetching route1: ${response1.statusText}`);
    }

    if (!response2.ok) {
      throw new Error(`Error fetching route2: ${response2.statusText}`);
    }

    const data1 = await response1.json();
    const data2 = await response2.json();

    const combinedData = {
      route1: data1,
      route2: data2
    };

    return NextResponse.json(combinedData, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
