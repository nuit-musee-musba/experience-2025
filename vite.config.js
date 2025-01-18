import * as fs from "fs";
import { join, resolve } from "path";
import { defineConfig } from "vite";

// Définir les répertoires
const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

const redirectToDir = ({ root }) => ({
  name: "redirect-to-dir",
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      const filePath = join(root, req.url);

      fs.stat(filePath, (err, stats) => {
        if (!err && stats.isDirectory() && !req.url.endsWith("/")) {
          res.statusCode = 301;
          res.setHeader("Location", req.url + "/");
          res.setHeader("Content-Length", "0");
          res.end();
          return;
        }

        next();
      });
    });
  },
});

export default defineConfig({
  root,
  publicDir: "../public/",
  plugins: [redirectToDir({ root })],
  base: "./",
  build: {
    outDir,
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: {
        // Pages principales
        "root": "./src/index.html",
        "1-hub": "./src/experiences/1-hub/index.html",
        "2-reserve": "./src/experiences/2-reserve/index.html",
        "3-techniques": "./src/experiences/3-techniques/index.html",
        "3-techniques/game": "./src/experiences/3-techniques/game.html",
        "4-sculpture": "./src/experiences/4-sculpture/index.html",
        "5-peintures": "./src/experiences/5-peintures/index.html",
        "5-peintures/accueil-baroque": "./src/experiences/5-peintures/accueil-baroque.html",
        "5-peintures/accueil-renaissance": "./src/experiences/5-peintures/accueil-renaissance.html",
        "5-peintures/accueil-romantisme": "./src/experiences/5-peintures/accueil-romantisme.html",
        "5-peintures/accueil-symbolisme": "./src/experiences/5-peintures/accueil-symbolisme.html",
        "5-peintures/baroque": "./src/experiences/5-peintures/baroque.html",
        "5-peintures/end-game": "./src/experiences/5-peintures/end-game.html",
        "5-peintures/renaissance": "./src/experiences/5-peintures/renaissance.html",
        "5-peintures/romantisme": "./src/experiences/5-peintures/romantisme.html",
        "5-peintures/start-baroque": "./src/experiences/5-peintures/start-baroque.html",
        "5-peintures/start-renaissance": "./src/experiences/5-peintures/start-renaissance.html",
        "5-peintures/start-romantisme": "./src/experiences/5-peintures/start-romantisme.html",
        "5-peintures/start-symbolisme": "./src/experiences/5-peintures/start-symbolisme.html",
        "5-peintures/symbolisme": "./src/experiences/5-peintures/symbolisme.html",
        "6-restaurations": "./src/experiences/6-restaurations/index.html",
      },
    },
  },
});
