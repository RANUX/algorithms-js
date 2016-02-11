"use strict";

var gulp = require('gulp');
var ts = require('gulp-typescript');
var merge = require('merge2');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');

var tsProject = ts.createProject('tsconfig.json');

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