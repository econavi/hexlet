const gulp = require('gulp');
//const debug = require('gulp-debug');


const runTask = (taskName) => {
  gulp.task(taskName, cb => require(`./tasks/${taskName}`)(cb));
};

runTask('scripts');
runTask('copy');
runTask('clean');
runTask('server');
runTask('watch');
runTask('build');
runTask('dev');
runTask('default');
