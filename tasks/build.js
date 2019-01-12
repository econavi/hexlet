/* build */

const gulp = require('gulp');


module.exports = gulp.series(
	'clean',
  'scripts',
	gulp.parallel(
		'copy'
	)
);
