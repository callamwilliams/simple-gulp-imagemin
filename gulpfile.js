var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var plumber = require('gulp-plumber');
var changed = require('gulp-changed');
var imgSrc = 'images/**/*',
	imgDst = 'dist/';
var onError = function(err) {
	console.log(err);
}

gulp.task('default', () =>
	gulp.src(imgSrc)
	.pipe(plumber({
		errorHandler: onError
	}))
	.pipe(changed(imgDst))
	.pipe(imagemin({
		progressive: true
	}))
	.pipe(gulp.dest(imgDst))
);