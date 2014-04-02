module.exports = function (grunt) {
  'use strict';
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  var DEST_DIR = 'build/';
  var SRC_DIR = 'src/';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    dest: DEST_DIR,
    src: SRC_DIR,

    jshint: {
      options: {
        jshintrc: true
      },
      files: ['Gruntfile.js']
    },

    browserify: {
      vendor: {
        src: [],
        dest: '<%= dest %>static/js/vendor/vendor.js',
        options: {
          require: ['backbone']
        }
      },
      app: {
        src: ['<%= src %>client/**/*.js'],
        dest: '<%= dest %>static/js/app.js',
        options: {
          require: ['backbone']
        }
      }
    }
  });

  grunt.registerTask('default', ['jshint', 'browserify']);
};
