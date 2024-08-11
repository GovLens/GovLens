import { DuneClient } from "@duneanalytics/client-sdk";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    console.log("Hello from the server!");
    const api = process.env.DUNE_API_KEY;
    if(!api) {
        return NextResponse.error();
    }
    const dune = new DuneClient(api);
    const query_result = await dune.getLatestResult({ queryId: 3093237 });
    console.log(query_result);
    return NextResponse.json(query_result);
}