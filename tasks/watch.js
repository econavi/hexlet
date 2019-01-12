/* watch */

const gulp = require('gulp');
const watch = gulp.watch;

module.exports = () => {
	watch('src/scripts/**/*.js', gulp.series('scripts'));
  watch(['src/**/*', '!src/scripts/**/*'], gulp.series('copy'));
};
