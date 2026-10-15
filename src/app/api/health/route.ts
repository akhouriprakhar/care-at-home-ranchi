import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

export async function GET(): Promise<NextResponse> {
  return NextResponse.json({
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    service: 'Care at Home Ranchi',
    environment: process.env.NODE_ENV || 'development',
  });
}
