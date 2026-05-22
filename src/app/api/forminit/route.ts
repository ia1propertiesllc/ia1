import { createForminitProxy } from "forminit/next";

export async function POST(req: Request) {
  const apiKey = process.env.FORMINIT_API_KEY;

  if (!apiKey) {
    console.error("FORMINIT_API_KEY is not set.");
    return new Response(
      JSON.stringify({ error: { message: "Server configuration error." } }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  const forminit = createForminitProxy({ apiKey });
  return forminit.POST(req);
}
