import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const host = request.headers.get('host');
    const protocol = host.startsWith('localhost') ? 'http' : 'https';
    const baseURL = `${protocol}://${host}`;
    
    console.log(`Base URL: ${baseURL}`);

    const [response1, response2] = await Promise.all([
      fetch(`${baseURL}/api/magnezone`, { headers: { 'Content-Type': 'application/json' } }),
      fetch(`${baseURL}/api/teknohaus`, { headers: { 'Content-Type': 'application/json' } })
    ]);

    if (!response1.ok) {
      throw new Error(`Error fetching /api/magnezone: ${response1.statusText}`);
    }

    if (!response2.ok) {
      throw new Error(`Error fetching /api/teknohaus: ${response2.statusText}`);
    }

    const data1 = await response1.json();
    const data2 = await response2.json();

    const combinedData = {
      route1: data1,
      route2: data2
    };

    return NextResponse.json(combinedData, { status: 200 });
  } catch (error) {
    console.error('Error occurred:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
