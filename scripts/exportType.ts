import { build, emptyDir } from "https://deno.land/x/dnt@0.37.0/mod.ts";


await emptyDir("./npm");

await build({
  entryPoints: ["./api/client/type.ts"],
  outDir: "./npm",
  esModule: true,
  scriptModule: false,
  declaration: "separate",
  typeCheck: false,
  shims: {
  },
  package: {
    name: "db-wikiadventu-re",
    version: Deno.args[0],
    description: "The type for db.wikiadventu.re that can be used with hono/client",
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/wikiadventure/db.wikiadventu.re",
    },
    bugs: {
      url: "https://github.com/wikiadventure/db.wikiadventu.re/issues",
    },
  }
});