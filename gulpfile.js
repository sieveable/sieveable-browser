var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var connect = require("gulp-connect");
var open = require("gulp-open");
var gutil = require("gutil");
var notifier = require("node-notifier");
var buffer = require("vinyl-buffer");
var source = require("vinyl-source-stream");
var browserify = require("browserify");
var watchify = require("watchify");
var babelify = require("babelify");
var chalk = require("chalk");

var browserifyOpts = {
  entries: ["./src/app.jsx"],
  extensions: [".js", ".jsx"],
  debug: true,
  cache: {},
  packageCache: {},
  fullPaths: true
};
var bundler = watchify(browserify(browserifyOpts)
  .transform(babelify));
bundler.on("update", bundle);
bundler.on("log", gutil.log);

function handleError(error) {
  notifier.notify({
    "title": "Build Error",
    "message": error.message
  });
  if (error.filename) {
    gutil.log(chalk.red(error.name) + " in " +
      chalk.white(error.filename.replace(__dirname + "/src/", "")) +
      ": " + "Line " + chalk.magenta(error.loc.line) + " & " +
      "Column " + chalk.magenta(error.loc.column) +
      " Message: " + chalk.yellow(error.message));
  } else {
    gutil.log(chalk.red(error.name) + ": " + chalk.yellow(error.message));
  }
}

function bundle(file) {
  if (file) {
    gutil.log(new Date()
      .toString() + ": Recompiling " + file[0].replace(__dirname + "/src/",
        ""));
  }
  return bundler
    .bundle()
    .on("error", handleError)
    .pipe(source("bundle.js"))
    .pipe(buffer())
    .pipe(sourcemaps.init({
      loadMaps: true
    }))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./dist/js"))
    .pipe(connect.reload());
}

gulp.task("build", function() {
  bundle();
});

gulp.task("sass", function() {
  gulp.src("./sass/**/*.scss")
    .pipe(sass()
      .on("error", gutil.log))
    .pipe(concat("style.css"))
    .pipe(gulp.dest("./dist"))
    .pipe(connect.reload());
});

gulp.task("copy-index-html", function() {
  gulp.src("./index.html")
    .pipe(gulp.dest("./dist"))
    .pipe(connect.reload());
});

gulp.task("copy-assets", function() {
  return gulp.src("./assets/**")
    .pipe(gulp.dest("./dist/assets"))
    .pipe(connect.reload());
});

gulp.task("connect", function() {
  connect.server({
    port: 8888,
    root: "dist",
    livereload: true
  });
});

gulp.task("open-browser", function() {
  gulp.src("./dist/index.html")
    .pipe(open({
      uri: "http://localhost:8888"
    }));
});

gulp.task("watch", function() {
  gulp.watch("./sass/**/*.scss", ["sass"]);
  gulp.watch("./index.html", ["copy-index-html"]);
  gulp.watch("./assets/**", ["copy-assets"]);
});

gulp.task("default", ["build", "copy-index-html", "sass",
                      "copy-assets", "connect", "open-browser", "watch"]);
