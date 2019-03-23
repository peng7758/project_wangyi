const env = 'dev';
if(env === 'dev') {
  require('./gulp.dev')
} else {
  require('./gulp.build')
}
