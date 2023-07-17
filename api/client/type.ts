import { hc } from "https://deno.land/x/hono@v3.3.1/mod.ts";
import type { AppType } from "../app.ts";

export const db_wikiadventu_re = hc<AppType>("https://db.wikiadventu.re");