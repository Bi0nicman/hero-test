
const { src,dest } = require("gulp");
const sass = require('gulp-sass')(require('sass'));

function generateCSS(cb) {
    src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('public/stylesheets'));
    cb();
}

exports.css = generateCSS;