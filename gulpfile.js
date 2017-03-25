var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');


gulp.task('less', function () {
  return gulp.src('css/style.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
     }))
    .pipe(csso())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('watch', ['browserSync', 'less'], function (){
  gulp.watch('css/*.less', ['less']);
  gulp.watch('index.html', browserSync.reload);
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: ''
    },
  })
});