import { NextRequest, NextResponse } from "next/server";

export default async function getCharts(req: NextRequest, res: NextResponse) {

    const response = await fetch('https://api.deezer.com/editorial/0/charts')
    const json = await response.json()
    res.json(json);
}