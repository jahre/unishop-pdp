'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var spritesmith = require('gulp.spritesmith');
 
gulp.task('sass', function () {
  gulp.src('./css/scss/core.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sprite', function () {
  var spriteData = gulp.src('img/icons/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.scss',
    padding:20,
    algorithm: 'top-down'
  }));
  return spriteData.pipe(gulp.dest('img/sprite/'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./css/scss/**/*.scss', ['sass']);
});