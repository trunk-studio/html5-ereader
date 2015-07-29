// gulpfile.js
var gulp = require('gulp');
var server = require('gulp-express');
var sass = require('gulp-sass');

gulp.task('server', function () {
    // Start the server at the beginning of the task
    server.run(['bin/www']);

    // Restart the server when file changes
    gulp.watch(['public/**/*.html'], server.notify);
    gulp.watch(['public/stylesheets/**/*.sass'], ['styles']);
    gulp.watch(['public/stylesheets/**/*.scss'], ['styles']);

    gulp.watch(['app/images/**/*'], server.notify);
    gulp.watch(['app.js', 'routes/**/*.js'], [server.run]);
});

gulp.task('styles', function() {
    gulp.src('public/stylesheets/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/stylesheets/'));
    gulp.src('public/stylesheets/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/stylesheets/'));
});
