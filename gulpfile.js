var gulp = require('gulp')
    , browserify = require('browserify')
    , concat = require('gulp-concat')
    , reactify = require('reactify')
    , source = require("vinyl-source-stream")
    , path = require('path')
    ;

gulp.task('browserify', function(){
    var b = browserify();
    b.transform(reactify); // use the reactify transform
    b.add('./public/javascripts/app.js');
    var r = b.bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./public/javascripts'));
    return r;
});


/*gulp.task('copy', function() {
    gulp.src('src/index-noflux.html')
        .pipe(gulp.dest('dist'));
});*/

gulp.task('default', ['browserify']);

gulp.task('watch', function() {
    gulp.watch('./public/javascripts/**/*.*', ['default']);
});

/*gulp.task('less', function() {
    return gulp.src('./src/less/main.less')
            .pipe(less({
                path: [path.join(__dirname, 'less', 'includes')]
            }))
            .pipe(gulp.dest('./dist/css'));

});*/

