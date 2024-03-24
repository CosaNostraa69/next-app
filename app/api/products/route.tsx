import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
    return NextResponse.json([
        { id: 1, name: 'Milk', price: 2.5},
        { id: 2, name: 'Bread', price: 3.5 },
    ]);
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    return NextResponse.json({ id: 3, ...body }, { status: 201 });
}