var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('app1', function() {
  gulp.src(['./js/app1/application.js', './js/app1/router.js', './js/app1/app1.js'])
    .pipe(concat('app1.js'))
    .pipe(gulp.dest('./js/dist/'))
});

gulp.task('app2', function() {
  gulp.src('./js/app2/*.js')
    .pipe(concat('app2.js'))
    .pipe(gulp.dest('./js/dist/'))
});

gulp.task('default', ['app1', 'app2']);