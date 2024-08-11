import { DuneClient } from "@duneanalytics/client-sdk";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    console.log("Hello from the server!");
    const dune = new DuneClient("");
    const query_result = await dune.getLatestResult({ queryId: 2431982 });
    console.log(query_result);
    return NextResponse.json(query_result);
}