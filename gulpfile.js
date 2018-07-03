var gulp = require('gulp');
var runSequence = require('run-sequence');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');

// ==========================================================================
// Path
// ==========================================================================

var SRC = './sources',
	SRC_PROD = './prod';

var PATH = {
	SRC_HTML: SRC + '/html',
	SRC_STYLES: SRC + '/scss',
	SRC_STYLES_CSS: SRC + '/css',
	SRC_SCRIPTS: SRC + '/js',
	SRC_IMAGES: SRC + '/images',
	SRC_FONTS: SRC + '/fonts',
	PROD: SRC_PROD,
	PROD_STYLES: SRC_PROD + '/css',
	PROD_SCRIPTS: SRC_PROD + '/js',
	PROD_FONTS: SRC_PROD + '/fonts',
	PROD_IMAGES: SRC_PROD + '/images'
};



// ==========================================================================
// Clean
// ==========================================================================
gulp.task('clean', function() {
	var del = require('del');

	return del(PATH.PROD);
});



// ==========================================================================
// Html
// ==========================================================================

gulp.task('html', function() {
	var htmlbeautify = require('gulp-html-beautify');
	var options = {
		indentSize: 2
	};

	gulp.src(PATH.SRC_HTML + '/*.html')
		.pipe(htmlbeautify(options))
		.pipe(gulp.dest(PATH.PROD));
});

// ==========================================================================
// Styles
// ==========================================================================

var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function() {

	gulp.src(PATH.SRC_STYLES + '/style.scss')
		.pipe(sourcemaps.init())
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(rename('style.css'))
		.pipe(autoprefixer('last 4 versions'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(PATH.PROD_STYLES));
});

gulp.task('styles:css', function() {

	gulp.src(PATH.SRC_STYLES_CSS + '/**/*.css')
		.pipe(gulp.dest(PATH.PROD_STYLES));

});


gulp.task('styles:min', function() {

	var csso = require('gulp-csso');

	gulp.src(PATH.SRC_STYLES + '/style.less')
		.pipe(sourcemaps.init())
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(rename('style.css'))
		.pipe(autoprefixer('last 4 versions'))
		.pipe(csso())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(PATH.PROD_STYLES));

});

// ==========================================================================
// Scripts
// ==========================================================================

gulp.task('scripts', function() {

    gulp.src(PATH.SRC_SCRIPTS + '/**/*.js')
        .pipe(gulp.dest(PATH.PROD_SCRIPTS))

});

gulp.task('scripts:min', function() {

	var uglify = require('gulp-uglify');

	gulp.src(PATH.SRC_SCRIPTS + '/**/*.js')
        .pipe(gulp.dest(PATH.PROD_SCRIPTS));

    gulp.src(PATH.SRC_SCRIPTS + '/**/*.min.js')
        .pipe(uglify())
        .pipe(gulp.dest(PATH.PROD_SCRIPTS));

});



// ==========================================================================
// Fonts
// ==========================================================================

gulp.task('fonts', function() {

    gulp.src(PATH.SRC_FONTS + '/**/*')
        .pipe(gulp.dest(PATH.PROD_FONTS));

});



// ==========================================================================
// Images
// ==========================================================================

gulp.task('images', function() {
	var imagemin = require('gulp-imagemin');

	gulp.src(PATH.SRC_IMAGES + '/*')
		.pipe(imagemin())
		.pipe(gulp.dest(PATH.PROD_IMAGES))
});



// ==========================================================================
// Watch
// ==========================================================================

gulp.task('watch', function() {

	var watch = require('gulp-watch');

	runSequence (
			'clean',
			['html', 'styles', 'styles:css', 'scripts', 'fonts', 'images']
		);

	watch(PATH.SRC_HTML + '/**/*.html', function() {
		gulp.start('html');
	});

	watch(PATH.SRC_STYLES + '/**/*.scss', function() {
		gulp.start('styles');
	});

	watch(PATH.SRC_STYLES_CSS + '/**/*.css', function() {
		gulp.start('styles:css');
	});

	watch(PATH.SRC_SCRIPTS + '/**/*.js', function() {
        gulp.start('scripts');
    });

    watch(PATH.SRC_IMAGES + '/**/*', function() {
        gulp.start('images');
    });

    watch(PATH.SRC_FONTS + '/**/*', function() {
        gulp.start('fonts');
    });

})



// ==========================================================================
// Build
// ==========================================================================

gulp.task('build', function() {

	runSequence (
			'clean',
			['html', 'styles:min', 'styles:css', 'scripts:min', 'fonts', 'images']
		);

});
