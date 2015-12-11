var sass = require("gulp-sass");
var livereload = require("gulp-livereload")
var autoprefixer = require("gulp-autoprefixer")
var gulp = require('gulp')
var serve = require('gulp-serve')
var webpack = require('webpack')
var webpackConfig = require('./webpack.config')

gulp.task('css', function() {
	gulp.src("sass/index.scss")
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer({browsers: ["> 1%"]}))
	.pipe(gulp.dest("css"))
	.pipe(livereload())
})

gulp.task('css:watch', function() {
	livereload.listen();
	gulp.watch("sass/**/*.scss" , ["css"])
})

gulp.task('html:watch', function() {
	livereload.listen();
	gulp.watch("./**/*.html" , livereload.changed)
})

gulp.task('js', function() {
  webpack(webpackConfig).run(function(err, stats) {
    if (err) console.error(err);
    console.log(stats.toString({colors: true}));
  })
})

gulp.task('js:watch', function() {
  gulp.watch('js/**/*', ['js']);
})

gulp.task('serve', serve());

gulp.task('default', ['serve', 'css:watch', 'html:watch', 'js:watch']);

