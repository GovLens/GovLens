import { DuneClient } from "@duneanalytics/client-sdk";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    console.log("Hello from the server!");
    const api = process.env.DUNE_API_KEY;
    if(!api) {
        return NextResponse.error();
    }
    const dune = new DuneClient(api);
    const uniqueUser = await dune.getLatestResult({ queryId: 275142 });
    const govCost =await dune.getLatestResult({ queryId: 3202774 });
    const totalTransaction = await dune.getLatestResult({queryId:261457})
    const DelegatedOp =await dune.getLatestResult({queryId:3202753});
    const airDropedOp = await dune.getLatestResult({queryId:3095605})
    return NextResponse.json({uniqueUser,govCost,totalTransaction,DelegatedOp,airDropedOp});
}