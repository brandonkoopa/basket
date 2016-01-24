var gulp = require('gulp'),
    gutil = require('gulp-util'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    jshint = require('gulp-jshint'),
    scsslint = require('gulp-scss-lint'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

var buildDestination = "www";

gulp.task('clean', function () {
    return gulp.src(buildDestination, {read: false})
        .pipe(clean());
});

gulp.task('sass', function() {
    gulp.src('src/scss/base.scss')
        .pipe(autoprefixer())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(buildDestination));
});

gulp.task('copy', function () {
    // html
    gulp.src('src/*.html').pipe(gulp.dest(buildDestination));
    gulp.src('src/components/*.html').pipe(gulp.dest('www/components'));

    // lib
    gulp.src('src/lib/angular/angular.min.js.map').pipe(gulp.dest(buildDestination+'/lib/angular'));
    gulp.src('src/lib/angular/angular.min.js').pipe(gulp.dest('www/lib/angular'));
    gulp.src('src/lib/angular/angular-animate.js').pipe(gulp.dest('www/lib/angular'));
    gulp.src('src/lib/angular/angular-route.min.js').pipe(gulp.dest('www/lib/angular'));
    gulp.src('src/lib/bootstrap/bootstrap.min.js').pipe(gulp.dest('www/lib/bootstrap'));
    gulp.src('src/lib/bootstrap/ui-bootstrap-tpls-0.13.4.js').pipe(gulp.dest('www/lib/bootstrap'));
    gulp.src('src/lib/bootstrap/bootstrap.min.css').pipe(gulp.dest('www/lib/bootstrap'));
    gulp.src('src/lib/fonts/*.*').pipe(gulp.dest('www/lib/fonts'));

    // img
    gulp.src('src/img/*.*').pipe(gulp.dest('www/img'));

    // js. concat js files into app.js
    gulp.src([
        'src/app.module.js',
        'src/route-config.js',
        'src/components/*.js',
        'src/data/*.js',
        'src/app.controller.js'])
        .pipe(babel())
        .pipe(concat('app.js'))
        .pipe(gulp.dest(buildDestination));

});

gulp.task('js-lint', function() {
    return gulp.src([
        'src/app.module.js',
        'src/route-config.js',
        'src/components/*.js',
        'src/data/*.js',
        'src/app.controller.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('scss-lint', function() {
    gulp.src('src/scss/*.scss')
        .pipe(scsslint());
});

gulp.task('serve', ['sass', 'copy'], function () {
    browserSync.init({
        server: {
            baseDir: buildDestination
        }
    });
});

gulp.task('watch', function () {
    gulp.watch('src/scss/*.scss', ['sass', 'scss-lint', reload]);
    gulp.watch('src/*.js', ['js-lint', 'copy', reload]);
    gulp.watch('src/*/*.js', ['js-lint', 'copy', reload]);
    gulp.watch('src/*.html', ['copy', reload]);
    gulp.watch('src/components/*.html', ['copy', reload]);
});

gulp.task('default', ['serve', 'sass', 'js-lint', 'scss-lint', 'watch', 'copy']);
