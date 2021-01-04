const gulp = require('gulp')
const svgstore = require('gulp-svgstore')
const rename = require('gulp-rename')
const config = require('../config')

module.exports = function svgSprite() {
  return gulp.src('source/img/sprite/*.svg')
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest(config.build.img))
}

