//var gulp = require('gulp');
//var connect = require('gulp-connect');
//
//gulp.task('default', ['allFile', 'server', 'watch']);
//
//gulp.task('allFile', function() {
//	gulp.src('app/**/*')
//		.pipe(gulp.dest('dist'))
//		.pipe(connect.reload());
//})
//
//gulp.task('watch', function() {
//	gulp.watch('app/**/*', ['allFile']);
//})
//gulp.task('server', function() {
//	connect.server({
//		root: 'dist', //设置根目录
//		livereload: true, // 是否热更新
//		port: 7878
//	});
//})


var gulp = require('gulp');

var connect = require('gulp-connect');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');
gulp.task('default',['allFile','server','watch','sass']);

gulp.task('sass',function(){
  return gulp.src('app/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('app/css'));
});

gulp.task('allFile',function(){
  gulp.src('app/**/*',['allFile'])
  .pipe(gulp.dest('dist'))
  .pipe(connect.reload());

})

gulp.task('watch',function(){
  gulp.watch('app/**/*',['allFile','sass']);
})

gulp.task('server',function(){
  connect.server({
    root:'app',
    livereload:true,
    port:7878
    
  });
})