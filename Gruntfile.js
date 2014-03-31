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
      dist: {

      }
    }
  });

  grunt.registerTask('default', ['jshint']);
};
