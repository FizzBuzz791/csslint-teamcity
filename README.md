# csslint-teamcity [![NPM version][npm-image]][npm-url] [![Build status][travis-image]][travis-url] [![Known Vulnerabilities][snyk-image]][snyk-url] [![Dependency status][david-image]][david-url]

[![Greenkeeper badge](https://badges.greenkeeper.io/FizzBuzz791/csslint-teamcity.svg)](https://greenkeeper.io/)
> Report all those csslint warnings to TeamCity

## Usage

First, install `csslint-teamcity` as a development dependency:

```shell
npm install --save-dev csslint-teamcity
```

Then, add it to your `gulpfile.js`:

```javascript
var csstc = require('csslint-teamcity');

gulp.task('csslint', function() {
	gulp.src('client/css/*.css')
		.pipe(csslint())
		.pipe(csslint.formatter(csstc));
});
```

This will fill the console with TeamCity specific CSS Lint errors. If you want to fix it, install [gulp-util](https://github.com/gulpjs/gulp-util):

```shell
npm install --save-dev gulp-util
```

Then modify your `gulpfile.js`:

```javascript
var gutil = require('gulp-util');
var csstc = require('csslint-teamcity');

gulp.task('csslint', function() {
	gulp.src('client/css/*.css')
		.pipe(csslint())
		.pipe(csslint.formatter(gutil.env.teamcity ? csstc : undefined));
});
```

Finally, make sure TeamCity runs the gulp task with the --teamcity argument:

```shell
gulp csslint --teamcity
```

## Acknowledgements
[ChunkySamurai](https://github.com/ChunkySamurai): For the original [gulp-csslint-teamcity](https://github.com/ChunkySamurai/gulp-csslint-teamcity), which gave me the base to create this new version.

[npm-url]: https://www.npmjs.com/package/csslint-teamcity
[npm-image]: https://badge.fury.io/js/csslint-teamcity.svg
[travis-url]: https://travis-ci.org/FizzBuzz791/csslint-teamcity
[travis-image]: https://travis-ci.org/FizzBuzz791/csslint-teamcity.svg
[snyk-image]: https://snyk.io/test/github/fizzbuzz791/csslint-teamcity/badge.svg
[snyk-url]: https://snyk.io/test/github/fizzbuzz791/csslint-teamcity
[david-image]: https://david-dm.org/fizzbuzz791/csslint-teamcity.svg
[david-url]: https://david-dm.org/fizzbuzz791/csslint-teamcity
