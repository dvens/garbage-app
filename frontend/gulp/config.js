'use strict';

var gulp            = require('gulp');
var $               = require('gulp-load-plugins')();

var config = {

    build: './build/',
    dist: './dist/',
    base: './build/',
    taskPath: './gulp/tasks/',
    
    html: {
        watch: ['src/html/**/*.html'],
        src: ['./src/html/**/*.html', '!./src/html/includes/**']
    },
    
    css: {
        watch: ['src/sass/**/*.scss'],
        src: ['./src/sass/main.scss'],
        folder: 'css/',
        destFile: 'styles.min.css'
    },
    
    js: {
        watch: ['src/js/**/*.js'],
        src: ['./src/js/**/*.js'],
        folder: 'js/',
        destFile: 'scripts.min.js'
    },
    
    images: {
        watch: ['src/assets/images/**'],
        src: ['./src/assets/images/**'],
        srcFolder: './src/assets/images/',
        folder: 'assets/images/'
    },
    
    misc: {
        src: [
            'fonts/**',
            '*.ico'
        ]
    },

    error: function(error) {
        $.util.beep();
        console.error(error);
        $.notify.onError({ message: error });
        this.emit('end');
    }

};

module.exports = config;


