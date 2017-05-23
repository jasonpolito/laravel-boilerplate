'use strict';

var Promise = require('es6-promise').Promise;
var gulp    = require('gulp');
var sass    = require('gulp-sass');
var reload  = require('gulp-livereload');
var sass    = require('gulp-sass');
var concat  = require('gulp-concat');
var bourbon = require('node-bourbon');
var plumber = require('gulp-plumber');
var notify  = require('gulp-notify');
var merge   = require('merge-stream');
var autoprefixer = require('gulp-autoprefixer');
var normalize = require('node-normalize-scss');

var cssFiles = ['illy','illy--js'];

gulp.task('sass', function () {
  var tasks = cssFiles.map(function(file){
    return gulp.src('./resources/assets/sass/' + file + '.scss')
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(sass({
      includePaths: bourbon.includePaths.concat(normalize.includePaths)
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 4 versions']
    }))
    .pipe(concat(file + '.css'))
    .pipe(gulp.dest('./public/css'))
    .pipe(reload());
  });

  return merge(tasks);
});

gulp.task('default', function () {
  reload.listen();
  gulp.watch('./resources/assets/sass/**/*.scss', ['sass']);
});