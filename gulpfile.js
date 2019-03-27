const env = 'build';
if(env === 'dev') {
  require('./gulp.dev')
} else {
  require('./gulp.build')
}
