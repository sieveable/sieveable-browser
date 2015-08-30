const dest = "./dist";
const src = "./src";
import gutil from "gulp-util";

const config = {
  app: {
    src,
    dest
  },
  server: {
    port: 8888,
    root: dest,
    livereload: true
  },
  styles: {
    src: "styles/**/*.{sass,scss,css}",
    dest: "style.css"
  },
  browserify: {
    settings: {
      entries: [src + "/app.jsx"],
      extensions: [".js", ".jsx"],
      debug: true,
      cache: {},
      packageCache: {},
      fullPaths: true
    },
    dest: dest + "/js",
    outputName: "bundle.js",
    debug: gutil.env.type === "dev"
  },
  assets: {
    src: "assets/**",
    dest: dest + "/assets"
  },
  html: {
    src: "index.html",
    dest: dest
  },
  open: {
    homepage: dest + "/index.html"
  },
  watch: [
    {
      src: "sass/**/*.scss",
      tasks: ["styles"]
    },
    {
      src: "index.html",
      tasks: ["html"]
    },
    {
      src: "assets/**",
      tasks: ["assets"]
    }
  ]
};
export default config;
