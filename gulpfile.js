var sass = require("gulp-sass");
var livereload = require("gulp-livereload")
var autoprefixer = require("gulp-autoprefixer")
var gulp = require('gulp')
var serve = require('gulp-serve')

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

gulp.task('serve', serve());

gulp.task('default', ['serve', 'css:watch', 'html:watch']);

