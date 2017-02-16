var gulp = require('gulp'),
  pug = require('gulp-pug'),
  sass = require('gulp-sass'),
  pref = require('gulp-autoprefixer'),
  plum = require('gulp-plumber'),
  brow = require('browser-sync').create(),
  reload = brow.reload;

var src = {
  pug: './dev/views/',
  sass: './dev/scss/',
  html: './dist/',
  css: './dist/css/'
};

gulp.task('pug', function () {
  return gulp.src(src.pug + '*.pug')
  .pipe(plum())
  .pipe(pug({pretty: true}))
  .pipe(plum.stop())
  .pipe(gulp.dest(src.html));
});

gulp.task('styles', function () {
  return gulp.src(src.sass + '*.scss')
  .pipe(plum())
  .pipe(sass({outputStyle: 'nested'}))
  .pipe(pref({browsers: 'last 5 versions', cascade: true}))
  .pipe(plum.stop())
  .pipe(gulp.dest(src.css))
  .pipe(reload({stream: true}));
});

gulp.task('default', ['pug', 'styles'], function () {
  brow.init({server: src.html});

  gulp.watch(src.pug + '**/*.pug', ['pug']);
  gulp.watch(src.sass + '**/*.scss', ['styles']);
  gulp.watch(src.html + '*.html').on('change', reload);
});
