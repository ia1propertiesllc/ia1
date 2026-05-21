import { createForminitProxy } from "forminit/next";

const apiKey = process.env.FORMINIT_API_KEY;
if (!apiKey) {
  throw new Error("FORMINIT_API_KEY is not set in environment variables.");
}

const forminit = createForminitProxy({ apiKey });

export const POST = forminit.POST;
