"use strict";

var gulp = require('gulp');
var ts = require('gulp-typescript');
var merge = require('merge2');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var vfs = require('vinyl-fs');

var tsProject = ts.createProject('tsconfig.json');


gulp.task('symlink', function () {
  return vfs.src('./node_modules', {followSymlinks: false})
  .pipe(vfs.symlink('dist'));
});

gulp.task('build-debug', function() {
    del.sync("dist");

    var tsResult = tsProject.src()
        .pipe(sourcemaps.init())   
    .pipe(ts(tsProject));
	
      
    return merge([
        //Build typescript to dist folder 
        // tsResult.dts
        //     .pipe(gulp.dest('dist')),
        tsResult.js
            .pipe(sourcemaps.write("./", { sourceRoot: __dirname }))
            .pipe(gulp.dest('dist'))
    ]);
});

gulp.task('build', ['build-debug', 'symlink'], function() {
    
});

gulp.task('watch', ['build'], function() {
    gulp.watch(['sort/*.ts', 'stack/*.ts', 'examples/*.ts', 'array/*.ts'], ['build-debug']);
});