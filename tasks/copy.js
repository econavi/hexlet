/* misc */

const gulp = require('gulp');
const changed = require('gulp-changed');
const debug = require('gulp-debug');

module.exports = () => (
	gulp.src(['src/**/*.*', '!src/scripts/**/*.*'])
  .pipe(changed('dist'))
  .pipe(debug({title: 'copy:'}))
	.pipe(gulp.dest('dist'))
);
