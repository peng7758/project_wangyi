var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('default', ['allFile', 'server', 'watch']);

gulp.task('allFile', function() {
	gulp.src('app/**/*')
		.pipe(gulp.dest('dist'))
		.pipe(connect.reload());
})

gulp.task('watch', function() {
	gulp.watch('app/**/*', ['allFile']);
})
gulp.task('server', function() {
	connect.server({
		root: 'dist', //设置根目录
		livereload: true, // 是否热更新
		port: 7878
	});
})