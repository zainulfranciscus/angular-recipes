 var gulp = require('gulp'),
     browsersync = require('browser-sync');

//this task will reload a browser using browser-sync
var syncOpts = {
  server: {
    baseDir: '.',
    index: 'index.html'
  },
  open: false,
  notify: true
};

gulp.task('browsersync', function() {
  browsersync(syncOpts);
});

// default task
gulp.task('default', ['browsersync'],function() {
	

});
