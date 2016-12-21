var gulp    = require('gulp');
var plumber = require('gulp-plumber');
var jshint  = require('gulp-jshint');

/***********
 * DEFAULT *
 ***********/
gulp.task('default', ['lint']);

/********
 * LINT *
 ********/
gulp.task('lint', function(){
	return gulp.src(['index.js', 'src/*.js'])
		.pipe(plumber())
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'))
		.pipe(jshint.reporter('fail'))
});