var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var plumber = require('gulp-plumber');
var changed = require('gulp-changed');
var source = 'images/**/*';
var	destination = 'dist/';

var onError = function(err) {
	console.log(err);
}

gulp.task('default', () =>
	gulp.src(source)
	.pipe(plumber({
		errorHandler: onError
	}))
	.pipe(changed(destination))
	.pipe(imagemin({
		progressive: true
	}))
	.pipe(gulp.dest(destination))
);