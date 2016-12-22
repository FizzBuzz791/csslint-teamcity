var gulp    = require('gulp');
var plumber = require('gulp-plumber');
var jshint  = require('gulp-jshint');
var snyk 	= require('gulp-snyk');

/***********
 * DEFAULT *
 ***********/
gulp.task('default', ['lint', 'snyk']);

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

/************
 * SECURITY *
 ************/
gulp.task('snyk:test', function(cb) {
	return snyk({command:'test'}, cb);
});

gulp.task('snyk:monitor', function(cb) {
	return snyk({command:'test'}, cb);
});

gulp.task('snyk', ['snyk:test', 'snyk:monitor']);