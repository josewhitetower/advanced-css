'use strict';
 
const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const rename = require("gulp-rename");
const autoprefixer = require('autoprefixer');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename("style.css"))
    .pipe(postcss([ autoprefixer() ]))
    .pipe(gulp.dest('./css'));
});