/* server */
const gulp = require('gulp');
const debuga = require('debuga');
const browserSync = require('browser-sync').create('server');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

module.exports = () => {
	browserSync.init({
    files: ['dist/**/*'],
    server: {
			baseDir: [
				'dist'
			],
			directory: false,
			middleware: isDevelopment ? [debuga({
        titlePrefix: 'Hexlet',
        dist: './dist'
      })] : []
		},
		tunnel: false,
    reloadOnRestart: true,
    ui: false,
    snippetOptions: {
			rule: {
				match: /<\/body>/i,
        fn: function (snippet, match) {
            return snippet + match;
        }
			}
		},
    port: 9000,
    // socket: {
    //   domain: 'localhoooooooost:8080',
    //   domain: '127.0.0.1:3000'
      // namespace: '/bs'
    // },

    // watchEvents : [ 'change', 'add', 'unlink', 'addDir', 'unlinkDir' ],

	});

	// browserSync.watch('dist/**/*').on('change', () => {
  //     browserSync.reload();
  // })

  // gulp.task('reload', function(done){
  //   console.log('---Start----')
  //   browserSync.reload();
  //   console.log('---Finish---')
  //   done();
  // })

  // function reload(done) {
  //   browser.reload();
  //   done();
  // }
  // gulp.watch('dist/{**/*, .*}', gulp.series(reload))

  gulp.watch("dist/**/*").on('change', browserSync.reload);

};
