import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { spawn } from "node:child_process";

const outputDirectory = "pages-dist";
const basePath = process.env.GITHUB_PAGES_BASE_PATH || "/NASH";
const previewUrl = "http://127.0.0.1:4173/";

const rewriteRootPaths = (source) => {
  let result = source;
  for (const directory of ["_next", "images", "brand", "icons"]) {
    result = result
      .replaceAll(`="/${directory}/`, `="${basePath}/${directory}/`)
      .replaceAll(`url(/${directory}/`, `url(${basePath}/${directory}/`);
  }
  return result;
};

const server = spawn("node_modules/.bin/vinext", ["start", "--port", "4173"], {
  env: { ...process.env, WRANGLER_LOG_PATH: ".wrangler/wrangler.log" },
  stdio: "inherit",
});

try {
  let response;
  for (let attempt = 0; attempt < 80; attempt += 1) {
    try {
      response = await fetch(previewUrl);
      if (response.ok) break;
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 250));
    }
  }

  if (!response?.ok) throw new Error("Unable to render the site for GitHub Pages.");

  const html = rewriteRootPaths(await response.text());
  await rm(outputDirectory, { recursive: true, force: true });
  await mkdir(outputDirectory, { recursive: true });
  await cp("dist/client", outputDirectory, { recursive: true });
  await writeFile(`${outputDirectory}/index.html`, html);
  await writeFile(`${outputDirectory}/404.html`, html);
  await writeFile(`${outputDirectory}/.nojekyll`, "");

  const cssDirectory = `${outputDirectory}/_next/static/css`;
  const cssFiles = (await readdir(cssDirectory)).filter((file) => file.endsWith(".css"));
  for (const file of cssFiles) {
    const path = `${cssDirectory}/${file}`;
    const css = await readFile(path, "utf8");
    await writeFile(path, rewriteRootPaths(css));
  }
} finally {
  server.kill("SIGTERM");
}
